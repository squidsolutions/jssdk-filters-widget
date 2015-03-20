(function (root, factory) {
    root.squid_api.view.CategoricalView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        filterPanelTemplate: null,
        model : null,
        currentModel : null,
        format : null,
        filterPanel : null,
        filterSelected : null,
        nbPages : 10,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            // force using the non-blocking engine
            this.model.set("engineVersion", "2");
            
            if (options.filterPanel) {
                this.filterPanel = options.filterPanel;
            }
            if (options.filterSelected) {
                this.filterSelected = options.filterSelected;
            }

            this.filterPanelTemplate = squid_api.template.squid_api_filters_categorical_view;

            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }

            this.filterStore = new Backbone.Model( { 
                // selected dimension
                selectedFilter : null,  
                // current selected page
                pageIndex : 0,          
                // nb of items in a page
                pageSize : 10,          
                // nb of pages to display
                nbPages : 10,
                // current facet retrieved from API
                facet : null,           
                // index id of the first item of facet
                itemIndex : 0,
                // previous search query
                searchPrevious : null,
                // current search query
                search : null
            }
            );
            this.currentModel = new squid_api.model.FiltersJob();
            
            this.model.on("change", function() {
                this.filterStore.set({
                    "searchPrevious" : null,
                    "search" : null,
                    "facet" : null,
                    "pageIndex" : 0,
                    "itemIndex" : 0
                }, {
                    "silent" : true
                });
                this.setCurrentModel();
                
            }, this);
            
            this.filterStore.on("change:selectedFilter", function() {
                this.filterStore.set({
                    "searchPrevious" : null,
                    "search" : null,
                    "facet" : null,
                    "pageIndex" : 0,
                    "itemIndex" : 0
                }, {
                    "silent" : true
                });
                // reset the search box
                $(this.filterPanel).find("#searchbox").val("");
                // re-compute the filters
                squid_api.controller.facetjob.compute(this.currentModel);
                
            }, this);
            this.filterStore.on("change:search", function() {
                this.filterStore.set({"pageIndex": 0}, {"silent" : true});
                this.filterStore.trigger("change:pageIndex", this.filterStore);
            }, this);
            
            this.filterStore.on("change:pageIndex", this.renderFacet, this);
            
            this.currentModel.on("change", this.renderFacet, this);

            this.setCurrentModel();

            // listen for global status change
            squid_api.model.status.on('change:status', this.statusUpdate, this);

            this.render();
        },

        statusUpdate : function() {
            var running = (squid_api.model.status.get("status") != squid_api.model.status.STATUS_DONE);
            if (running) {
                // computation is running : disable input
                this.$el.find("button").attr("disabled","disabled");
            } else {
                // computation is done : enable input
                this.$el.find("button").removeAttr("disabled");
            }
        },
        
        setCurrentModel : function() {
            // duplicate the filters model
            var attributesClone = $.extend(true, {}, this.model.attributes);
            this.currentModel.set(attributesClone);
        },
        
        search : function(event) {
                this.filterStore.set("search", event.target.value);
        },

        render : function() {

            // Button which opens filter Panel
            this.$el
            .html("<button type='button' class='btn squid_api_filters_categorical_button' data-toggle='collapse' data-target="+ this.filterPanel + ">Filters<span class='caret'></span></button>");

            // Print Base Filter Panel Layout
            $(this.filterPanel)
            .addClass("squid_api_filters_categorical_filter_panel")
            .html(this.filterPanelTemplate({
                        "data-target" : this.filterPanel
                    }));

            view = new api.view.CategoricalSelectorView({
                el: $(this.filterPanel).find("#filter-selection"),
                model: this.currentModel,
                filterStore : this.filterStore
            });

            view2 = new api.view.CategoricalFacetView({
                el: $(this.filterPanel).find("#filter-display-results"),
                model: this.filterStore,
                filters: this.currentModel,
            });

            view3 = new api.view.CategoricalPagingView({
                el: $(this.filterPanel).find("#pagination-container"),
                model: this.filterStore
            });

            view4 = new api.view.CategoricalSelectedView({
                el: $(this.filterPanel).find("#selected"),
                model: this.currentModel,
                noDataMessage: "No Filters Selected"
            });

            view5 = new api.view.CategoricalSelectedView({
                el: this.filterSelected,
                model: this.model,
                noDataMessage: "No Filters Selected"
            });

            var me = this;
            $(this.filterPanel).find(".apply-selection").click(function() {
                me.applySelection();
            });
            $(this.filterPanel).find(".cancel-selection").click(function() {
                me.cancelSelection();
            });
            
            $(this.filterPanel).find("#searchbox").keyup(_.bind(this.search, this));
        }, 
        
        renderFacet : function() {
            var me = this;
            
            if (this.currentModel.get("status") === "DONE") {
                if (this.currentModel.get("selection")) {
                    var selectedFacetId = this.filterStore.get("selectedFilter");
                    var pageIndex = this.filterStore.get("pageIndex");
                    var pageSize = this.filterStore.get("pageSize");
                    var facet = this.filterStore.get("facet");
                    var nbPages = this.filterStore.get("nbPages");
                    
                    // compute required index range
                    var startIndex = pageIndex * pageSize;
                    var endIndex = startIndex + pageSize;
                    
                    // check if we need to fetch more items
                    var fetch = false;
                    var searchStale =  false;
                    var searchPrevious = this.filterStore.get("searchPrevious");
                    var search = this.filterStore.get("search");
                    if ((search !== null) && (search != searchPrevious)) {
                        searchStale = true;
                    }
                    if ((facet) && (facet.get("id") == selectedFacetId) && (!searchStale)) {
                        var itemIndex = this.filterStore.get("itemIndex");

                        // compute what's the max index
                        var maxItem = itemIndex + facet.get("items").length;     
                        if (startIndex < itemIndex) {
                            fetch = true;
                        }
                        if ((endIndex > maxItem) && (facet.get("hasMore") === true)) {
                            fetch = true;
                        }
                    } else {
                        fetch = true;
                    }
                    
                    if ((fetch === true) && (selectedFacetId)) {
                        // pre-fetch some pages of facet members
                        var facetJob = new squid_api.model.ProjectFacetJobFacet();
                        facetJob.set("id",this.currentModel.get("id"));
                        facetJob.set("oid", selectedFacetId);
                        if (startIndex) {
                            facetJob.addParameter("startIndex", startIndex);
                        }
                        if (pageSize) {
                            facetJob.addParameter("maxResults", (nbPages * pageSize));
                        }
                        if (search) {
                            facetJob.addParameter("filter", search);
                            this.filterStore.set("searchPrevious", search);
                        }
                        // get the results from API
                        facetJob.fetch({
                            error: function(model, response) {
                                console.error(response);
                            },
                            success: function(model, response) {
                                if (model.get("apiError") && (model.get("apiError") == "COMPUTING_IN_PROGRESS")) {
                                    // set a fake facet
                                    var f = new squid_api.model.ProjectFacetJobFacet();
                                    f.set("items", []);
                                    me.filterStore.set("facet", f);
                                } else {
                                    me.filterStore.set("itemIndex", startIndex);
                                    me.filterStore.set("facet", model);
                                }
                            }
                        });
                    } else {
                        // trigger facet render
                        me.filterStore.trigger("change:facet");
                    }
                }
            }
        },
        
        applySelection : function() {
            var currentModelSelection = this.currentModel.get("selection");
            this.model.set("selection", currentModelSelection);
        },

        cancelSelection : function() {
            console.log("Cancel");
        },
        
        applyPaging : function(pageIndex) {
            filterStore.set("pageIndex", pageIndex);
        }
        
    });

    return View;
}));

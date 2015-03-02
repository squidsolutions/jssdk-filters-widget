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
                itemIndex : 0           
            }
            );
            this.currentModel = new squid_api.model.FiltersJob();
            this.setCurrentModel();
            
            this.model.on("change", this.setCurrentModel, this);
            this.filterStore.on("change:selectedFilter", function() {
                this.filterStore.set({"pageIndex": 0}, {"silent" : true});
                this.filterStore.trigger("change:pageIndex", this.filterStore);
            }, this);
            this.filterStore.on("change:pageIndex", this.renderFacet, this);

            this.render();
        },
        
        setCurrentModel : function() {
            // duplicate the filters model
            var attributesClone = $.extend(true, {}, this.model.attributes);
            this.currentModel.set(attributesClone);
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

            view4 = new api.view.CategoricalInternalSelectedView({
                el: $(this.filterPanel).find("#selected"),
                model: this.currentModel
            });

            view5 = new api.view.CategoricalExternalSelectedView({
                el: this.filterSelected,
                model: this.model
            });

            var me = this;
            $(this.filterPanel).find(".apply-selection").click(function() {
                me.applySelection();
            });
            $(this.filterPanel).find(".cancel-selection").click(function() {
                me.cancelSelection();
            });
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
                    if ((facet) && (facet.get("id") == selectedFacetId)) {
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
                    
                    if (fetch === true) {
                        // pre-fetch some pages of facet members
                        // this.$el.html("Retrieving items list...");
                        var facetJob = new squid_api.model.ProjectFacetJobFacet();
                        facetJob.set("id",this.currentModel.get("id"));
                        facetJob.set("oid", selectedFacetId);
                        if (startIndex) {
                            facetJob.addParameter("startIndex", startIndex);
                        }
                        if (pageSize) {
                            // +1 because the API returns -1 items
                            facetJob.addParameter("maxResults", (nbPages * pageSize) + 1);
                        }
                        // get the results from API
                        facetJob.fetch({
                            error: function(model, response) {
                                console.error(response);
                            },
                            success: function(model, response) {
                                me.filterStore.set("itemIndex", startIndex);
                                me.filterStore.set("facet", model);
                            }
                        });
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

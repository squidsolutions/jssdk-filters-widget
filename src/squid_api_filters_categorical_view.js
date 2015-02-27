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
        pageSize : 30,

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
                selectedFilter : null,
                pageIndex : 0,
                facet : null,
                itemIndex : 0
            }
            );
            this.currentModel = new squid_api.model.FiltersJob();
            this.currentModel.on("change", this.render, this);
            this.setCurrentModel();
            
            this.model.on("change", this.setCurrentModel, this);
            this.filterStore.on("change:selectedFilter", this.selectFacet, this);
            this.filterStore.on("change:pageIndex", this.renderFacet, this);
            this.filterStore.on("change:facet", this.renderPage, this);
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

	    view3 = new api.view.CategoricalPagingView({
                el: $(this.filterPanel).find("#pagination-container"),
                model: this.model,
                filterStore : this.filterStore
            });

            var me = this;
            $(this.filterPanel).find(".apply-selection").click(function() {
                me.applySelection();
            });
            $(this.filterPanel).find(".cancel-selection").click(function() {
                me.cancelSelection();
            });
            
            // Print Base Result Panel
            $(this.filterSelected).addClass("squid_api_filters_categorical_selected_filters").html("selected");
        }, 
        
        selectFacet : function() {
            var me = this;

            var startIndex = this.filterStore.get("pageIndex") * this.pageSize;
            
            if (this.currentModel.get("status") === "DONE") {
                if (this.currentModel.get("selection")) {
                    var selectedFacetId = this.filterStore.get("selectedFilter");
                    var facet = this.filterStore.get("facet");
                    var fetch = false;
                    if ((facet) && (facet.get("id") == selectedFacetId)) {
                        var currentMaxIndex = this.filterStore.get("itemIndex") + facet.get("items").length;
                        if ((startIndex > currentMaxIndex) && (facet.hasMore === true)) {
                            fetch = true;
                        }
                    } else {
                        fetch = true;
                    }
                    
                    if (fetch === true) {
                        // pre-fetch some pages of facet members
                        this.$el.html("Retrieving items list...");
                        var facetJob = new squid_api.model.ProjectFacetJobFacet();
                        facetJob.set("id",this.currentModel.get("id"));
                        facetJob.set("oid", selectedFacetId);
                        if (startIndex) {
                            facetJob.addParameter("startIndex", startIndex);
                        }
                        if (this.pageSize) {
                            facetJob.addParameter("maxResults", this.nbPages * this.pageSize);
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
        
        renderPage : function() {
            var $el = $(this.filterPanel).find("#filter-display-results");
            var facetItems = this.filterStore.get("facet").get("items");
            var pageIndex = this.filterStore.get("pageIndex");
            $el.html("");
            var toAppend = "";
            if (facetItems.length === 0) {
                $el.append("No items");
            } else {
                // display current facet members
                toAppend += "<ul>";
                for (ix=(pageIndex * this.pageSize); ((ix<((pageIndex * this.pageSize) + this.pageSize)) && (ix<facetItems.length)); ix++) {
                    if (ix % 10 === 0 && ix !== 0) {
                        toAppend += "</ul><ul>";
                    }
                    toAppend += "<li data-attr=\"" + facetItems[ix].id + "\"><i class='fa fa-square-o'></i><span>" + facetItems[ix].value + "</span></li>";
                }
                toAppend += "</ul>";
            }
            $el.append(toAppend);
        },
        
        applyPaging : function(pageIndex) {
            filterStore.set("pageIndex", pageIndex);
        }
        
    });
    
    

    return View;
}));

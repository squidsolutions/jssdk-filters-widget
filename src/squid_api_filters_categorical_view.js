(function (root, factory) {
    root.squid_api.view.CategoricalView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        filterPanelTemplate: null,
        model : null,
        format : null,
        filterPanel : null,
        filterSelected : null,

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
                items : []}
            );

            this.model.on("change", this.render, this);
            this.filterStore.on("change:selectedFilter", this.renderFacet, this);
            this.filterStore.on("change:pageIndex", this.renderFacet, this);
        },

        render : function() {

            // Button which opens filter Panel
            this.$el.html("<button type='button' class='btn squid_api_filters_categorical_button' data-toggle='collapse' data-target=" + this.filterPanel + ">Filters<span class='caret'></span></button>");
            
             // Print Base Filter Panel Layout
            $(this.filterPanel).addClass("squid_api_filters_categorical_filter_panel").html(this.filterPanelTemplate({"data-target" : this.filterPanel}));

            view = new api.view.CategoricalSelectorView({
                el: $(this.filterPanel).find("#filter-selection"),
                model: this.model,
                filterStore : this.filterStore
            });

            view2 = new api.view.CategoricalFacetView({
                el: $(this.filterPanel).find("#filter-display-results"),
                model: this.filterStore
            });

            // Print Base Result Panel
            $(this.filterSelected).addClass("squid_api_filters_categorical_selected_filters").html("selected");
        }, 
        
        renderFacet : function() {
            var me = this;
            var maxResults = 30;
            var startIndex = this.filterStore.get("pageIndex") * maxResults;
            
            if (this.model.get("status") === "DONE") {
                if (this.model.get("selection")) {
                    var facets = this.model.get("selection").facets;
                    var selectedFacet = this.filterStore.get("selectedFilter");
                    var facet;
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].id === selectedFacet) {
                            facet = facets[i];
                        }
                    }
                    if (facet) {
                        if ((facet.items.length < (startIndex + maxResults)) && (facet.hasMore === true)) {
                            // poll for facet members
                            this.$el.html("Retrieving items list...");
                            var facetJob = new squid_api.model.ProjectFacetJobFacet();
                            facetJob.set("id",this.model.get("id"));
                            facetJob.set("oid", facet.id);
                            if (startIndex) {
                                facetJob.addParameter("startIndex", startIndex);
                            }
                            if (maxResults) {
                                facetJob.addParameter("maxResults", maxResults);
                            }
                            // get the results from API
                            facetJob.fetch({
                                error: function(model, response) {
                                    console.error(response);
                                },
                                success: function(model, response) {
                                    me.filterStore.set("items", model.get("items"));
                                }
                            });
                        } else {
                            // display current facet members
                            me.filterStore.set("items", facet.items);
                        }
                    }
                }
            }
        },
        
        applyPaging : function(pageIndex) {
            filterStore.set("pageIndex", pageIndex);
        }
        
    });
    
    

    return View;
}));

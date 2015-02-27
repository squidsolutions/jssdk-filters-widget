(function (root, factory) {
    root.squid_api.view.CategoricalInternalSelectedView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filterStore : null,
        format : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.filterStore) {
                this.filterStore = options.filterStore;
            }

            this.filterPanelTemplate = squid_api.template.squid_api_filters_categorical_selected_view;

            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }

            this.render();
        },

        events: {
            "click .facet-remove": function(event) {
                // Obtain facet name / value
                var facetName = $(event.currentTarget).parent("li").attr("attr-name");
                var facetId = $(event.currentTarget).parent("li").attr("attr-id");

                var selection = this.model.get("selection");
                if (selection) {
                    if (selection.facets) {
                        var facets = selection.facets;
                        var updatedFacets = {facets:[]};
                        for (i=0; i<facets.length; i++) {
                            var selectedItems = facets[i].selectedItems;
                            for (ix=0; ix<selectedItems.length; ix++) {
                                if (facets[i].id !== facetName) {
                                    updatedFacets.facets.push(facets[i]);
                                }
                            }
                        }
                    this.model.set("selection", updatedFacets);
                    }
                }
            }
        },

        render : function() {
            var selection = this.model.get("selection");
            var selFacets = [];
            if (selection) {
                 if (selection.facets) {
                    var facets = selection.facets;
                    for (i=0; i<facets.length; i++) {
                        var selectedItems = facets[i].selectedItems;
                            if (facets[i].dimension.type !== "CONTINUOUS") {
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    var obj = {};
                                    obj.facetItem = selectedItems[ix].value;
                                    obj.facetItemId = selectedItems[ix].id;
                                    obj.facetName = facets[i].dimension.name;
                                    obj.facetNameId = facets[i].id;
                                    selFacets.push(obj);
                                }
                            }
                        }
                    }
                }
                this.$el.html(this.filterPanelTemplate({facets: selFacets}));
            }
        });

    return View;
}));

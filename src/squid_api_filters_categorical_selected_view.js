(function (root, factory) {
    root.squid_api.view.CategoricalSelectedView = factory(root.Backbone, root.squid_api);
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
            if (options.noDataMessage) {
                this.noDataMessage = options.noDataMessage;
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

            this.model.on("change", this.render, this);
        },

        events: {
            "click .facet-remove": function(event) {
                // Obtain facet name / value
                var facetName = $(event.currentTarget).parent("li").attr("attr-name");
                var facetId = $(event.currentTarget).parent("li").attr("attr-id");

                // Copy model selection object properties to remove object reference
                var selection = $.extend(true, {}, this.model.get("selection"));

                if (selection) {
                    if (selection.facets) {
                        var facets = selection.facets;
                        var updatedFacets = {facets:[]};
                        for (i=0; i<facets.length; i++) {
                            var selectedItems = facets[i].selectedItems;
                            if (selectedItems.length > 0) {
                                var arr = [];
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    if (selectedItems[ix].id) {
                                        if (facetId !== selectedItems[ix].id) {
                                            arr.push(selectedItems[ix]);
                                        }
                                    }
                                }
                                facets[i].selectedItems = arr;
                                updatedFacets.facets.push(facets[i]);
                            } else {
                                updatedFacets.facets.push(facets[i]);
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
            var noData = true;

            if (selection) {
                 if (selection.facets) {
                    var facets = selection.facets;
                    for (i=0; i<facets.length; i++) {
                        var selectedItems = facets[i].selectedItems;
                            if (facets[i].dimension.type !== "CONTINUOUS") {
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    noData = false;
                                    var obj = {};
                                    obj.facetItem = selectedItems[ix].value;
                                    obj.facetItemId = selectedItems[ix].id;
                                    if (facets[i].name) {
                                        obj.facetName = facets[i].name;
                                    } else {
                                        obj.facetName = facets[i].dimension.name;
                                    }
                                    obj.facetNameId = facets[i].id;
                                    selFacets.push(obj);
                                }
                            }
                        }
                    }
                }
                this.$el.html(this.filterPanelTemplate({facets: selFacets, noData: noData, noDataMessage: this.noDataMessage}));
            }
        });

    return View;
}));

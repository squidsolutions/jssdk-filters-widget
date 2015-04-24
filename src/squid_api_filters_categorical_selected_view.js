(function (root, factory) {
    root.squid_api.view.CategoricalSelectedView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filterStore : null,
        format : null,
        initialFacet : null,
        singleSelect : null,
        facetList : null,

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
            if (options.initialFacet) {
                this.initialFacet = options.initialFacet;
            }
            if (options.singleSelect) {
                options.singleSelect = options.singleSelect;
            }
            if (options.facetList) {
                this.facetList = options.facetList;
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
                var itemId = $(event.currentTarget).parent("li").attr("attr-id");

                // Copy model selection object properties to remove object reference
                var selectionClone = $.extend(true, {}, this.model.get("selection"));
                if (selectionClone) {
                    var facets = selectionClone.facets;
                    if (facets) {
                        // Remove selected item from facet
                        squid_api.controller.facetjob.unSelect(facets, facetName, itemId);
                        this.model.set("selection", selectionClone);  
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
                                    if (this.initialFacet == facets[i].id || !this.initialFacet) {
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
                    if (this.facetList) {
                        var updatedFacets = [];
                        for (i=0; i<selFacets.length; i++) {
                            for (ix=0; ix<this.facetList.length; ix++) {
                                if (this.facetList[ix] === selFacets[i].facetNameId) {
                                    updatedFacets.push(selFacets[i]);
                                }
                            }
                        }
                        if (updatedFacets.length === 0) {
                            noData = true;
                        } else {
                            selFacets = updatedFacets;
                        }
                    }
                }
                this.$el.html(this.filterPanelTemplate({facets: selFacets, noData: noData, noDataMessage: this.noDataMessage}));
            }
        });

    return View;
}));

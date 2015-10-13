(function (root, factory) {
    root.squid_api.view.CategoricalSelectorView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filterStore : null,
        format : null,
        facetList : null,
        avoidFacets : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.filterStore) {
                this.filterStore = options.filterStore;
            }
            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }
            if (options.facetList) {
                this.facetList = options.facetList;
            }
            if (options.avoidFacets) {
                this.avoidFacets = options.avoidFacets;
            }

            this.listenTo(this.model, "change:selection", this.renderSelection);
            this.render();
            this.renderSelection();
        },
        
        render : function() {
            var me = this;

            this.$el.find(".btn-select-filter").multiselect({
                nonSelectedText: 'Select Filter',
                onChange: function(option) {
                    var filterValue = $(option).val();
                    me.filterStore.set("selectedFilter", filterValue);
                }
            });

        },

        renderSelection : function() {
            var me = this;

            if (this.model.get("selection")) {
                var selectedFilter = me.filterStore.get("selectedFilter");
                var facets = this.model.get("selection").facets;
                var items = [];
                if (this.model.get("selection")) {
                    for (i=0; i<facets.length; i++) {
                        var facet = facets[i];
                        if ((facet.dimension.type == "CATEGORICAL") || (facet.dimension.type == "SEGMENTS")) {
                            var selected = false;
                            if (facet.id == selectedFilter) {
                                selected = true;
                            }
                            var json = {
                                label : facet.name,
                                title : facet.name,
                                value : facet.id,
                                selected : selected
                            };
                            if (this.facetList) {
                                for (ix=0; ix<this.facetList.length; ix++) {
                                    if (this.facetList[ix] === facet.id) {
                                        items.push(json);
                                    }
                                }
                            }
                            else {
                                items.push(json);
                            }
                        }
                    }
                    if (this.avoidFacets) {
                        for (i=0; i<this.avoidFacets.length; i++) {
                            for (ix=0; ix<items.length; ix++) {
                                if (this.avoidFacets[i] === items[ix].value) {
                                    items.splice(ix, 1);
                                }
                            }
                        }
                    }

                    var select = this.$el.find(".btn-select-filter");
                    select.multiselect('dataprovider', items);

                    // Detect List Length for display purposes
                    if (items.length >= 10) {
                        select.siblings(".btn-group").addClass("largeList");
                    }
                }
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.CategoricalSelectorView = factory(root.Backbone, root.squid_api);
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
            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }

            this.model.on("change:selection", this.renderSelection, this);
            this.render();
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
                for (i=0; i<facets.length; i++) {
                    var facet = facets[i];
                    if ((facet.dimension.type == "CATEGORICAL") || (facet.dimension.type == "SEGMENTS")) {
                        var selected = false;
                        if (facet.id == selectedFilter) {
                            selected = true;
                        }
                        items.push({
                            label : facet.name,
                            title : facet.name,
                            value : facet.id,
                            selected : selected
                        });
                    }
                }

                var select = this.$el.find(".btn-select-filter");
                select.multiselect('dataprovider', items);
            }
        }
    });

    return View;
}));

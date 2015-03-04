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

            this.model.on("change", this.render, this);
            this.render();
        },

        render : function() {
            var me = this;

            if (this.model.get("status") && this.model.get("status") !== "RUNNING") {
                if (this.model.get("selection")) {
                    var facets = this.model.get("selection").facets;
                    var items = [];
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].dimension.type !== "CONTINUOUS") {
                            items.push(facets[i]);
                        }
                    }
                    var html = squid_api.template.squid_api_filters_categorical_selector_view({
                        "items" : items
                    });
                    this.$el.find(".btn-select-filter").html(html);
                }
                this.$el.find(".btn-select-filter").multiselect({
                    nonSelectedText: 'Select a Dimension',
                    onChange: function(option) {
                        var filterValue = $(option).val();
                        me.filterStore.set("selectedFilter", filterValue);
                    }
                });
            }
        }
    });

    return View;
}));

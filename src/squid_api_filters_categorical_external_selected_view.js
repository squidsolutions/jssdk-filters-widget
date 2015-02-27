(function (root, factory) {
    root.squid_api.view.CategoricalExternalSelectedView = factory(root.Backbone, root.squid_api);
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

            this.filterPanelTemplate = squid_api.template.squid_api_selection_widget;

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

            this.$el.html(this.filterPanelTemplate());
        }
    });

    return View;
}));

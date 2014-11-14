(function (root, factory) {
    root.squid_api.view.PeriodSelectionView = factory(
            root.Backbone,
            root.squid_api,
            root.squid_api.view.PeriodView,
            root.squid_api.template.squid_api_period_selection_widget,
            root.squid_api.template.squid_api_period_selection_panel);
}(this, function (Backbone, squid_api, PeriodView, defaultTemplate, defaultPanelTemplate) {

    var View = Backbone.View.extend({

        model : null,

        template : null,

        format : null,

        periodView : null,

        datePickerEl : null,

        datePickerView : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = defaultTemplate;
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
            if (options.datePickerEl) {
                this.datePickerEl = options.datePickerEl;
            }
            this.render();
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        render : function() {
            if (!this.periodView) {

                // first call, setup the child views
                this.$el.html(this.template());

                this.periodView = new squid_api.view.PeriodView({
                    el : this.el,
                    model : this.model,
                    format : this.format
                });

                this.datePickerView = new squid_api.view.FiltersView({
                    model : this.model,
                    el : this.$el.find("#date-picker"),
                    pickerVisible : true,
                    refreshOnChange : false,
                    displayCategorical : false
                });
            }
        }
    });

    return View;
}));

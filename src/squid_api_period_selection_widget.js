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

        periodSelector : null,

        selectedPeriod: null,

        periodView : null,

        datePickerEl : null,

        datePickerPosition : "left",

        refreshOnChange: false,

        ranges: null,

        initialize : function(options) {

            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = defaultTemplate;
            }
            if (options.datePickerPosition) {
                this.datePickerPosition = options.datePickerPosition;
            }
            if (options.refreshOnChange) {
                this.refreshOnChange = options.refreshOnChange;
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
            if (options.ranges) {
                this.ranges = options.ranges;
            }

            // listen for global status change
            squid_api.model.filters.on('change:selection', this.preRender, this);
        },

        enable: function () {
            var select = this.$el.find("button");
            if (select) {
                var running = (squid_api.model.status.get("status") != squid_api.model.status.STATUS_DONE);
                if (running) {
                    // computation is running : disable input
                    this.$el.find(select).attr("disabled", true);
                } else {
                    // computation is done : enable input
                    this.$el.find(select).attr("disabled", false);
                }
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        preRender : function() {
            if (this.periodSelector) {
                this.periodSelector.remove();
            }
            if (this.datePickerView) {
                this.datePickerView.remove();
            }
            if (this.periodView) {
                this.periodView.remove();
            }

            this.render();
        },

        render : function() {
            // first call, setup the child views
            this.$el.html(this.template());

            // if a continous filter is active, display the date-picker
            this.datePickerView = new squid_api.view.FiltersView({
                  model : this.model,
                  el : this.$el.find(".date-wrap"),
                  pickerVisible : true,
                  datePickerPosition: this.datePickerPosition,
                  refreshOnChange : this.refreshOnChange,
                  displayCategorical : false,
                  ranges : this.ranges
            });
        }
    });

    return View;
}));

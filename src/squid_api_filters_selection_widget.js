(function (root, factory) {
    root.squid_api.view.FiltersSelectionView = factory(
            root.Backbone,
            root.squid_api,
            root.squid_api.template.squid_api_filters_selection_widget,
            root.squid_api.template.squid_api_filters_selection_panel);
}(this, function (Backbone, squid_api, defaultSelectorTemplate, defaultPanelTemplate) {

    var View = Backbone.View.extend({

        model : null,

        template : null,

        selectorView : null,

        filtersEl : null,

        filtersView : null,

        options : null,

        booleanGroupName : null,

        displayContinuous : false,

        refreshOnChange : false,

        initialize : function(options) {

            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = defaultSelectorTemplate;
            }
            if (options.filtersEl) {
                this.filtersEl = options.filtersEl;
            }
            if (options.booleanGroupName) {
                this.booleanGroupName = options.booleanGroupName;
            }
            if (options.displayContinuous) {
                this.displayContinuous = options.displayContinuous;
            }
            if (options.refreshOnChange) {
                this.refreshOnChange = options.refreshOnChange;
            }
            this.render();
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        render : function() {
            if (!this.selectorView) {
                // first call, setup the child views
                this.$el.html(this.template({"data-target" : this.filtersEl.selector}));
                this.selectorView = new squid_api.view.SelectionView({
                    el : this.$el.find("#selection"),
                    model : this.model
                });

                this.filtersEl.html(defaultPanelTemplate({"data-target" : this.filtersEl.selector}));

                this.filtersView = new squid_api.view.FiltersView({
                    model : this.model,
                    el : this.filtersEl.find("#filters"),
                    refreshOnChange : this.refreshOnChange,
                    booleanGroupName : this.booleanGroupName,
                    displayContinuous : this.displayContinuous
                });

                var me = this;
                this.filtersEl.find(".btn-primary").click(function() {
                    me.filtersView.applySelection();
                });
                this.filtersEl.find(".btn-default").click(function() {
                    me.filtersView.cancelSelection();
                });
            }
        }
    });

    return View;
}));

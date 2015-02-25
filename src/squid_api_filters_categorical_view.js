(function (root, factory) {
    root.squid_api.view.CategoricalView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        filterPanelTemplate: null,
        model : null,
        format : null,
        filterPanel : null,
        filterSelected : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.filterPanel) {
                this.filterPanel = options.filterPanel;
            }
            if (options.filterSelected) {
                this.filterSelected = options.filterSelected;
            }

            this.filterPanelTemplate = squid_api.template.squid_api_filters_categorical_view;

            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }

            this.filterStore = new Backbone.Model({selectedFilter : null});

            this.render();
        },

        render : function() {

            // Button which opens filter Panel
            this.$el.html("<button type='button' class='btn squid_api_filters_categorical_button' data-toggle='collapse' data-target=" + this.filterPanel + ">Filters<span class='caret'></span></button>");
            
             // Print Base Filter Panel Layout
            $(this.filterPanel).addClass("squid_api_filters_categorical_filter_panel").html(this.filterPanelTemplate({"data-target" : this.filterPanel}));

            view = new api.view.CategoricalSelectorView({
                el: $(this.filterPanel).find("#filter-selection"),
                model: this.model,
                filterStore : this.filterStore
            });

            view2 = new api.view.CategoricalDisplayView({
                el: $(this.filterPanel).find("#filter-display-results"),
                model: this.model,
                filterStore : this.filterStore
            });

            // Print Base Result Panel
            $(this.filterSelected).addClass("squid_api_filters_categorical_selected_filters").html("selected");
        }
    });

    return View;
}));

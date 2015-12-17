(function (root, factory) {
    root.squid_api.view.DateFilterSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_filter_selection_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,

        initialize: function(options) {
            var me = this;
            this.config = squid_api.model.config;
            this.filters = squid_api.model.filters;
            this.status = squid_api.model.status;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            if (options.config) {
                this.config = options.config;
            } else {
                this.config = squid_api.model.config;
            }

            this.listenTo(this.config, "change:period", this.render);
            this.listenTo(this.filters, "change:selection", this.render);

            // listen for global status change
            this.status.on('change:status', this.statusUpdate, this);
        },

        remove: function() {
            this.undelegateEvents();
            this.$el.empty();
            this.stopListening();
            return this;
        },

        statusUpdate: function() {
        	if (squid_api.model.status.get("status") == "RUNNING") {
        		this.$el.find("button").prop("disabled", true);
        	} else {
        		this.$el.find("button").prop("disabled", false);
        	}
        },

        render: function() {
            var me = this;
            var domain = this.config.get("domain");
            var periodConfig = this.config.get("period");
            var jsonData = {"options" : []};
            // iterate through all filter facets
            var selection = me.filters.get("selection");
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    var period = me.config.get("period");
                    for (var dimIdx=0; dimIdx<facets.length; dimIdx++) {
                        var facet = facets[dimIdx];
                        if (facet.dimension.valueType === "DATE") {
                            var option = {"label" : facet.name, "value" : facet.id, "error" : facets[dimIdx].error, "selected" : false};
                            // if currently selected within config
                            if (periodConfig[domain] == facet.id) {
                                option.selected = true;
                            }
                            jsonData.options.push(option);
                        }
                    }
                }
            }

            // Alphabetical Sorting
            jsonData.options.sort(function(a, b) {
                var labelA=a.label.toLowerCase(), labelB=b.label.toLowerCase();
                if (labelA < labelB)
                    return -1;
                if (labelA > labelB)
                    return 1;
                return 0; // no sorting
            });

            var html = me.template(jsonData);
            me.$el.html(html);
            me.$el.show();

            // Initialize plugin
            me.$el.find("select").multiselect({
                buttonText: function(option, select) {
                    if (select.find("option:selected").length > 0) {
                        text = select.find("option:selected").text();
                    } else if (select.find("option").length > 0) {
                        text = "Select a period";
                    } else {
                        text = 'No period exists';
                    }
                    return text;
                },
                onChange: function(facet) {
                    var period = _.clone(me.config.get("period"));
                    var domain = me.config.get("domain");
                    period[domain] = facet.val();
                    me.config.set("period", period);
                }
            });

            // Remove Button Title Tag
            me.$el.find("button").removeAttr('title');

            return this;
        }
    });

    return View;
}));

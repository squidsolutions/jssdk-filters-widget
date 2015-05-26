(function (root, factory) {
    root.squid_api.view.PeriodView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        
        format : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            this.listenTo(this.model, 'change', this.render);

            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        render : function() {
            var sel = this.model.get("selection");
            var facets;
            if (sel && sel.facets) {
                facets = sel.facets;
                var timeFacet;
                for (var i = 0; i < facets.length; i++) {
                    var facet = facets[i];
                    if (facet.dimension.type == "CONTINUOUS") {
                        timeFacet = facet;
                    }
                }
                if (timeFacet) {
                    var items = timeFacet.items;
                    var selItems = timeFacet.selectedItems;
                    var name = timeFacet.dimension.name;
                    var facetId = timeFacet.id;
                    var startDateStr;
                    var endDateStr;
                    if (items && items.length > 0) {
                        if (selItems && selItems.length > 0) {
                            // get selected values instead
                            startDateStr = selItems[0].lowerBound;
                            endDateStr = selItems[0].upperBound;
                        } else {
                            startDateStr = items[0].lowerBound;
                            endDateStr = items[0].upperBound;
                        }
                        // apply formatting
                        if (this.format) {
                            endDateStr = moment.utc(endDateStr).format("MMM Do YYYY");
                            startDateStr = moment.utc(startDateStr).format("MMM Do YYYY");
                        }
                    }
                    this.$el.find("#sq-startDate").text(startDateStr);
                    this.$el.find("#sq-endDate").text(endDateStr);
                } else {
                    this.$el.find("#sq-startDate").text("");
                    this.$el.find("#sq-endDate").text("");
                }
            }
        }
    });

    return View;
}));

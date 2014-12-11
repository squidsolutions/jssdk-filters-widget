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
            this.model.on('change', this.render, this);
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
                for (var i = 0; i < facets.length; i++) {
                    var facet = facets[i];
                    if (facet.dimension.type == "CONTINUOUS") {
                        var items = facet.items;
                        var selItems = facet.selectedItems;
                        var name = facet.dimension.name;
                        var facetId = facet.id;
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
                                var startDate = new Date(Date.parse(startDateStr));
                                var endDate = new Date(Date.parse(endDateStr));
                                
                                if (moment(endDate).isValid()) {
                                    endDateStr = this.format(endDate);
                                }
                                else {
                                    endDateStr = moment.utc(endDateStr).format("YYYY-MM-DD");
                                }
                                if (moment(startDate).isValid()) {
                                    startDateStr = this.format(startDate);
                                }
                                else {
                                    startDateStr = moment.utc(startDateStr).format("YYYY-MM-DD");
                                }
                            }
                        }
                        this.$el.find("#sq-startDate").text(startDateStr);
                        this.$el.find("#sq-endDate").text(endDateStr);
                    }
                }
            }
        }
    });

    return View;
}));

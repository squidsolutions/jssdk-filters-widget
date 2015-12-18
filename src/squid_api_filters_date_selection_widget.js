(function (root, factory) {
    root.squid_api.view.DateSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_selection_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        model: null,
        ranges : null,
        rangesPresets : {
            'all': function(min, max) { return [moment.utc(min), moment.utc(max)]; },
            'first-month': function(min, max) { return [moment.utc(min).startOf('month'), moment.utc(min).endOf('month')]; },
            'last-month': function(min, max) { return [moment.utc(max).startOf('month'), moment.utc(max).endOf('month')]; }
        },
        monthsOnlyDisplay : false,

        initialize: function(options) {
            var me = this;
            this.config = squid_api.model.config;
            this.status = squid_api.model.status;
            this.filters = squid_api.model.filters;

            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            if (options.ranges) {
                this.ranges = options.ranges;
            }
            if (options.datePickerPosition) {
                this.datePickerPosition  = options.datePickerPosition;
            }
            if (options.monthsOnlyDisplay) {
                this.monthsOnlyDisplay = options.monthsOnlyDisplay;
            }

            this.listenTo(this.filters, "change:selection", this.render);
            this.listenTo(this.config, "change:period", this.render);

            // listen for global status change
            this.listenTo(this.status, "change:status", this.statusUpdate);
        },

        statusUpdate: function() {
            if (this.status.get("status") == "RUNNING") {
                this.$el.find("span").addClass("inactive");
            } else {
                this.$el.find("span").removeClass("inactive");
            }
        },

        render: function() {
            var configPeriod = this.config.get("period");
            var domain = this.config.get("domain");
            var filters = this.filters;
            var dates = {};
            var facetId = null;
            var facet = null;
            var viewData = {"dateAvailable" : false};

            // obtain facet name from config
            if (configPeriod) {
                if (configPeriod[domain]) {
                    facetId = configPeriod[domain];
                }
            }
            if (filters) {
                var selection = filters.get("selection");
                if (selection) {
                    var facets = selection.facets;
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].id == facetId) {
                            facet = facets[i];
                        }
                    }
                }
                if (facet) {
                    if (facet.items) {
                        if (facet.items.length > 0) {
                            dates.minDate = moment(facet.items[0].lowerBound);
                            dates.maxDate = moment(facet.items[0].upperBound);
                            dates.currentEndDate = moment(facet.items[0].upperBound);
                        }
                    }
                    if (facet.selectedItems) {
                        if (facet.selectedItems[0]) {
                            dates.currentStartDate = moment(facet.selectedItems[0].lowerBound);
                            dates.currentEndDate = moment(facet.selectedItems[0].upperBound);
                        }
                    }

                    // set view data
                    viewData.facet = facet;
                    if (dates.currentStartDate && dates.currentEndDate) {
                        viewData.dateAvailable = true;
                        viewData.dateDisplay = dates.currentStartDate.utc().format("ll") + " - " + dates.currentEndDate.utc().format("ll");
                    }

                    // months only display logic
                    if (this.monthsOnlyDisplay && dates.currentStartDate && dates.currentEndDate) {
                        var d1 = dates.currentStartDate;
                        var d2 = dates.currentEndDate;
                        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        if ((d1.month() == d2.month()) && (d1.year() == d2.year())) {
                            viewData.dateDisplay = monthNames[d1.month()] + " "  + d1.year();
                        } else {
                            viewData.dateDisplay =  monthNames[d1.month()] + " " + d1.year() + " - " + monthNames[d2.month()] + " " + d2.year();
                        }
                    }
                }

                var html = this.template(viewData);

                // render HTML
                this.$el.html(html);

                if (facet) {
                    // attach date picker onto date display
                    this.renderPicker(facet, dates);
                }
            }

            return this;
        },

        updateFacet : function(facet, startDate, endDate) {
            var obj = [{"lowerBound":startDate, "type":"i", "upperBound":endDate}];
            var selection =  _.clone(this.filters.get("selection"));
            if (selection) {
                for (var i=0; i<selection.facets.length; i++) {
                    if (selection.facets[i].id == facet.id) {
                        selection.facets[i].selectedItems = obj;
                    }
                }
                this.config.set("selection", selection);
            }
        },

        renderPicker : function(facet, dates) {
            var me  = this;

            // compute the ranges
            var pickerRanges = {};
            for (var rangeName in me.ranges) {
                var value = me.ranges[rangeName];
                var func = null;
                if ((typeof value === "string") || (value instanceof String)) {
                    // check for a predefined range
                    if (me.rangesPresets[value]) {
                        func = me.rangesPresets[value];
                    }
                } else {
                    func = value;
                }
                if (func) {
                    pickerRanges[rangeName] = func.call(this, dates.minStartDate, dates.maxEndDate);
                }
            }

            // Build Date Picker
            this.$el.find("span").daterangepicker({
                opens: me.datePickerPosition,
                format: 'YYYY-MM-DD',
                showDropdowns: true,
                ranges: pickerRanges,
                startDate: dates.currentStartDate ? dates.currentStartDate.format('YYYY-MM-DD') : null,
                endDate: dates.currentEndDate ? dates.currentEndDate.format('YYYY-MM-DD') : null,
                minDate : dates.minDate ? dates.minDate.format('YYYY-MM-DD') : null,
                maxDate : dates.maxDate ? dates.maxDate.format('YYYY-MM-DD') : null,
            });

            // Detect Apply Action
            this.$el.find("span").on('apply.daterangepicker', function(ev, picker) {
                // Update Change Selection upon date widget close
                var startDate = moment.utc(picker.startDate).utc().toDate();
                var endDate = moment.utc(picker.endDate).utc().toDate();
                me.updateFacet(facet, startDate, endDate);
            });

            this.$el.find("span").on('change.daterangepickerLeft', function(ev, calendar) {
                if ($(calendar).hasClass("left")) {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                } else if ($(calendar).hasClass("right")) {
                    $('.daterangepicker').find('.right td.available:not(.off):last').trigger('click');
                } else {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                }
            });

            this.$el.find("span").on('change.daterangepickerRight', function(ev, calendar) {
                if ($(calendar).hasClass("left")) {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                } else if ($(calendar).hasClass("right")) {
                    $('.daterangepicker').find('.right td.available:not(.off):last').trigger('click');
                } else {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                }
            });
        }
    });

    return View;
}));

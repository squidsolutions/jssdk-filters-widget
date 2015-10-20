/*
 * A DatePicker widget.
 * Uses http://jqueryui.com/datepicker/
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['Backbone', 'squid_api'], factory);
    } else {
        root.squid_api.view.DateSelectionWidget = factory(root.Backbone, root.squid_api);
    }
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        enable: true,
        startDate: null,
        endDate: null,
        minDate: null,
        maxDate: null,
        model: null,
        initialized : false,
        pickerVisible : false,
        pickerAlwaysVisible : false,
        parent : null,
        template : squid_api.template.squid_api_filters_date_selection_widget,
        ranges : null,
        rangesPresets : {
            'all': function(min, max) { return [moment.utc(min), moment.utc(max)]; },
            'first-month': function(min, max) { return [moment.utc(min).startOf('month'), moment.utc(min).endOf('month')]; },
            'last-month': function(min, max) { return [moment.utc(max).startOf('month'), moment.utc(max).endOf('month')]; }
        },

        initialize: function(options) {
            var me = this;

            if (options.pickerVisible && (options.pickerVisible === true)) {
                this.pickerVisible = true;
                this.pickerAlwaysVisible = true;
            }
            if (options.ranges) {
                this.ranges = options.ranges;
            }
            if (options.datePickerPosition) {
                this.datePickerPosition  = options.datePickerPosition;
            }
            if (options.model) {
                this.filters = options.model;
            } else {
                this.filters = squid_api.model.filters;
            }
            if (options.config) {
                this.config = options.config;
            } else {
                this.config = squid_api.model.config;
            }

            this.listenTo(this.filters, "change:selection", this.render);
            this.listenTo(this.config, "change:period", this.render);
            this.listenTo(this.config, "change:domain", this.render);
            this.listenTo(this.config, "change:project", function() {
            	me.config.unset("selection");
            });
            
            // listen for global status change
            squid_api.model.status.on('change:status', this.statusUpdate, this);
        },
        
        statusUpdate: function() {
        	if (squid_api.model.status.get("status") == "RUNNING") {
        		this.$el.find("span").addClass("inactive");
        	} else {
        		this.$el.find("span").removeClass("inactive");
        	}
        },

        setDates: function(facet) {
            var obj = {};
            if (facet.items) {
                if (facet.items.length > 0) {
                    obj.minStartDate = moment(facet.items[0].lowerBound).utc();
                    obj.maxEndDate = moment(facet.items[0].upperBound).utc();
                }
            }
            if (facet.selectedItems.length > 0) {
                obj.currentStartDate = moment(facet.selectedItems[0].lowerBound).utc();
                obj.currentEndDate = moment(facet.selectedItems[0].upperBound).utc();
            } else {
                obj.currentStartDate = null;
                obj.currentEndDate = null;
            }
            return obj;
        },

        render: function() {
            if (this.filters) {
                var selection = this.filters.get('selection');
                var period = this.config.get("period");
                var dates = {};
                var facet = false;

                if (selection) {
                    var facets = selection.facets;
                    for (var i=0; i<facets.length; i++) {
                        var items = facets[i].facets;
                        if (period) {
                            if (facets[i].id == period.val) {
                                dates = this.setDates(facets[i]);
                                facet = facets[i];
                                break;
                            }
                        } else if (facets[i].dimension.valueType == "DATE") {
                            dates = this.setDates(facets[i]);
                            facet = facets[i];
                            break;
                        }
                    }
                    // if period config exist but isn't found within the current domain, select the first one                    
                    if (! facet ) {
                    	for (i=0; i<facets.length; i++) {
                    		if (facets[i].dimension.valueType == "DATE") {
                    			 dates = this.setDates(facets[i]);
                                 facet = facets[i];
                                 break;
                    		}
                    	}
                    }
                }

                var viewData = {"facet":facet};

                // build the date pickers
                if (dates.currentStartDate && dates.currentEndDate) {
                    viewData.dateAvailable = true;
                    viewData.startDateVal = dates.currentStartDate.format("ll");
                    viewData.endDateVal = dates.currentEndDate.format("ll");
                } else {
                    viewData.dateAvailable = false;
                }

                var selHTML = this.template(viewData);

                // render HTML
                this.$el.html(selHTML);

                // attach date picker onto date display
                if (facet) {
                    this.renderPicker(facet, dates);
                }
            }

            return this;
        },

        updateFacet : function(facet, startDate, endDate) {
            var obj = [{"lowerBound":startDate, "type":"i", "upperBound":endDate}];
            var attributesClone =  $.extend(true, {}, this.filters.attributes);
            if (attributesClone.selection) {
                for (var i=0; i<attributesClone.selection.facets.length; i++) {
                    if (attributesClone.selection.facets[i].id == facet.id) {
                        attributesClone.selection.facets[i].selectedItems = obj;
                    } else if (attributesClone.selection.facets[i].dimension.valueType == "DATE") {
                        attributesClone.selection.facets[i].selectedItems = [];
                    }
                }
                this.filters.set("userSelection", attributesClone.selection);
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

            if (dates.currentStartDate && dates.currentEndDate) {
                startDate = dates.currentStartDate;
                endDate = dates.currentEndDate;
            } else {
                startDate = dates.minStartDate;
                endDate = dates.maxEndDate;
            }

            var datePickerOptions = {opens: me.datePickerPosition, format: 'YYYY-MM-DD', showDropdowns: true, ranges: pickerRanges, "startDate" : startDate, "endDate" : endDate, "minDate" : dates.minStartDate, "maxDate" : dates.maxEndDate};

            // Build Date Picker
            this.$el.find("span").daterangepicker(datePickerOptions);

            var dateItems;

            // Detect Apply Action
            this.$el.find("span").on('apply.daterangepicker', function(ev, picker) {
                // Update Change Selection upon date widget close
                var startDate = moment.utc(picker.startDate).utc().toDate();
                var endDate = moment.utc(picker.endDate).utc().toDate();

                me.updateFacet(facet, startDate, endDate);
            });

            // Detect Cancel Action
            this.$el.find("span").on('cancel.daterangepicker', function(ev, picker) {
                //if (me.parent) {
                //    me.parent.cancelSelection(me);
                //}
            });

            this.$el.find("span").on('change.daterangepickerLeft', function(ev) {
                $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
            });

            this.$el.find("span").on('change.daterangepickerRight', function(ev) {
                $('.daterangepicker').find('.right td.available:not(.off):last').trigger('click');
            });
        }
    });

    return View;
}));

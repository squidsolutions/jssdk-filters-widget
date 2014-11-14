/*
 * A DatePicker widget.
 * Uses http://jqueryui.com/datepicker/
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['Backbone', 'squid_api'], factory);
    } else {
        root.squid_api.view.ContinuousFilterView = factory(root.Backbone, root.squid_api);
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
        template : squid_api.template.squid_api_filters_continuous_widget,

        initialize: function(options) {
            if (this.model) {
                this.model.on('change', this.render, this);
            }

            if (options.pickerVisible && (options.pickerVisible === true)) {
                this.pickerVisible = true;
                this.pickerAlwaysVisible = true;
            }

        },

        setModel: function(model) {
            this.model = model;
            this.initialize();
        },

        setTemplate : function(t) {
            if (t) {
                this.template = t;
            }
        },

        getSelectedItems: function() {
            var d1 = this.startDate;
            var d2 = this.endDate;
            var selectedItems = [];
            selectedItems.push({
                "lowerBound": d1.toISOString(),
                "upperBound": d2.toISOString(),
                "type": "i"
            });
            return selectedItems;
        },

        render: function() {
            if (this.model && this.model.get('dimension')) {
                var items = this.model.get('items');
                var selItems = this.model.get('selectedItems');
                var name = this.model.get('dimension').name;
                var facetId = this.model.get('facetId');

                var dateAvailable = false;
                if (items && items.length > 0) {
                    // compute min and max dates
                    for (var i=0; i<items.length; i++) {
                        var lowerDate = new Date(Date.parse(items[i].lowerBound));
                        if ((!this.minDate) || (lowerDate < this.minDate)) {
                            this.minDate = lowerDate;
                        }
                        var upperDate = new Date(Date.parse(items[i].upperBound));
                        if ((!this.maxDate) || (upperDate > this.maxDate)) {
                            this.maxDate = upperDate;
                        }
                    }
                    // set flag to indicate the date is available
                    dateAvailable = true;
                    // get start date and end date (in string format)
                    this.startDate = this.minDate;
                    this.endDate = this.maxDate;
                    if (selItems && selItems.length > 0) { // dates are selected
                        // get selected values instead
                        this.startDate = new Date(Date.parse(selItems[0].lowerBound));
                        this.endDate = new Date(Date.parse(selItems[0].upperBound));
                    }
                }
                if (this.initialized) {

                } else {
                    // build the date pickers
                    var selHTML = "";
                    selHTML = this.template({
                        dateAvailable: dateAvailable,
                        facetId: facetId,
                        name: name,
                        startDateVal: this.startDate.toDateString(),
                        endDateVal: this.endDate.toDateString()
                    });

                    // render HTML
                    this.$el.html(selHTML);

                    var me = this;
                    me.renderPicker(me);

                    this.initialized = true;
                }
            }

            return this;
        },

        renderPicker : function(me) {
            if (me.pickerVisible) {
                // Build Date Picker
                 this.$el.find(".datepicker").daterangepicker(
                     {
                        opens: me.parent.datePickerPosition,
                        format: 'YYYY-MM-DD',
                        startDate: me.startDate,
                        endDate: me.endDate,
                        minDate: me.minDate,
                        maxDate: me.maxDate,
                        showDropdowns: true,
                        ranges: {
                            'All Available Dates': [moment(me.minDate), moment(me.maxDate)],
                            'First Month': [moment(me.minDate).startOf('month'), moment(me.minDate).endOf('month')],
                            'Last Month': [moment(me.maxDate).startOf('month'), moment(me.maxDate).endOf('month')]
                        }
                    }
                );

                var dateItems;

                // Detect Apply Action
                this.$el.find(".datepicker").on('apply.daterangepicker', function(ev, picker) {

                    // Update Change Selection upon date widget close
                    var startDate = new Date(Date.parse(picker.startDate._d));
                    var endDate = new Date(Date.parse(picker.endDate._d));

                    me.startDate = startDate;
                    me.endDate = endDate;

                    if (me.parent) {
                        me.parent.changeSelection(me);
                        me.parent.applySelection(me);
                    }
                });

                // Detect Cancel Action
                this.$el.find(".datepicker").on('cancel.daterangepicker', function(ev, picker) {
                    if (me.parent) {
                        me.parent.cancelSelection(me);
                    }
                });
            }
        },

        setEnable: function(enable) {
            this.enable = enable;
        }
    });

    return View;
}));

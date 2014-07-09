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
                    // just update the pickers dates
                    this.$el.find("#startDate").text(this.startDate.toDateString());
                    var p1 = this.$el.find(".startDatePicker");
                    p1.datepicker({ minDate: this.minDate });
                    p1.datepicker("setDate",this.startDate);

                    this.$el.find("#endDate").text(this.endDate.toDateString());
                    var p2 = this.$el.find(".endDatePicker");
                    p2.datepicker({ maxDate: this.maxDate });
                    p2.datepicker("setDate",this.endDate);
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
                    if (!me.pickerAlwaysVisible) {
                        // attach observers
                        me.$el.click(function(e) {
                            // on click, show the date pickers
                            e.stopPropagation();
                            if (!me.pickerVisible) {
                                me.renderPicker(me);
                                me.pickerVisible = true;
                            }
                        });

                        // close on click outside of the picker
                        $(document).click(function(e) {
                            if (me.pickerVisible) {
                                me.$el.find("#pickerContainer").hide();
                                me.pickerVisible = false;
                            }
                        });

                        // close on click on "cancel"
                        me.$el.find(".btn-default").click(function(e) {
                            e.stopPropagation();
                            if (me.pickerVisible) {
                                me.$el.find("#pickerContainer").hide();
                                me.pickerVisible = false;
                            }
                        });

                        // process on click on "ok"
                        me.$el.find(".btn-primary").click(function(e) {
                            e.stopPropagation();
                            if (me.pickerVisible) {
                                me.$el.find("#pickerContainer").fadeOut("fast");
                                me.pickerVisible = false;
                                if (me.parent) {
                                    me.parent.changeSelection(me);
                                }
                            }
                        });
                    } else {
                        // just render
                        me.renderPicker(me);
                    }

                    this.initialized = true;
                }
            }

            return this;
        },

        renderPicker : function(me) {
            // build the date pickers (using classes instead of id to select the pickers as this is a bug in datePicker)
            var p1 = me.$el.find(".startDatePicker");
            var p2 = me.$el.find(".endDatePicker");
            p1.datepicker({
                changeMonth: true,
                changeYear: true,
                defaultDate: me.startDate,
                minDate: me.minDate,
                maxDate: me.maxDate,
                onSelect : function(date) {
                    selDate = new Date(Date.parse(date));
                    if (selDate <= me.endDate) {
                        me.startDate = selDate;
                        if (me.parent) {
                            me.parent.changeSelection(me);
                        } 
                    } else {
                        // revert
                        p1.datepicker( "setDate", me.startDate );
                    }
                }
            });
            p2.datepicker({
                changeMonth: true,
                changeYear: true,
                defaultDate: me.endDate,
                minDate: me.minDate,
                maxDate: me.maxDate,
                onSelect : function(date) {
                    selDate = new Date(Date.parse(date));
                    if (selDate >= me.startDate) {
                        me.endDate = selDate;
                        if (me.parent) {
                            me.parent.changeSelection(me);
                        }
                    } else {
                        // revert
                        p2.datepicker( "setDate", me.endDate );
                    }
                }
            });

            me.$el.find("#pickerContainer").show();
        },

        setEnable: function(enable) {
            this.enable = enable;
        }
    });

    return View;
}));
this["squid_api"] = this["squid_api"] || {};
this["squid_api"]["template"] = this["squid_api"]["template"] || {};

this["squid_api"]["template"]["squid_api_filters_categorical_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <!-- display filter name and selection -->\r\n        <dt>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</dt>\r\n        <dd>\r\n        <select name=\"";
  if (helper = helpers.facetId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facetId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"multiselect\" multiple=\"multiple\" id=\"";
  if (helper = helpers.facetId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facetId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" size=\"";
  if (helper = helpers.displaySize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displaySize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </select>\r\n        </dd>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                    ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n                </option>\r\n            ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return " selected";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <!-- just display filter name -->\r\n        <dt>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</dt>\r\n        <dd>-</dd>\r\n    ";
  return buffer;
  }

  buffer += "   ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selAvailable), {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_continuous_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n\r\n<!-- display item name and date picker panel -->\r\n<div class='sq-select' id='";
  if (helper = helpers.facetId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facetId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\r\n    <table class='continuousFacetContainer'>\r\n    	<tr>\r\n	    	<td colspan=\"2\" align=\"center\">\r\n		        <div id='dateValues' class='dateValues'>\r\n		            <span class=\"muted\">From </span>\r\n		            <span class='dateValue' id=\"startDate\">";
  if (helper = helpers.startDateVal) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startDateVal); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> \r\n		            <span class=\"muted\"> To </span>  \r\n		            <span class='dateValue' id=\"endDate\">";
  if (helper = helpers.endDateVal) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.endDateVal); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n		        </div>\r\n	        </td>\r\n	    </tr>\r\n	    <tr id='pickerContainer' class='pickerContainer'>\r\n	        <td style=\"padding: 3px;\">\r\n		    	<div class='startDatePicker'></div>\r\n		    </td>\r\n		    <td style=\"padding: 3px;\">\r\n		    	<div class='endDatePicker'></div>\r\n	        </td>\r\n        </tr>\r\n    </table>\r\n</div>              \r\n\r\n    \r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <!-- just display item name -->\r\n    ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n    <div>-</div>\r\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.dateAvailable), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["squid_api"]["template"]["squid_api_filters_selection_panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"panel panel-default filter-panel\">\n	<div class=\"panel-heading\">\n		<button type=\"button\" class=\"close\" data-toggle=\"collapse\"\n			data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\n			<i class=\"glyphicon glyphicon-chevron-up\"></i>\n		</button>\n		<h4 class=\"panel-title\" id=\"myModalLabel\">Filters</h4>\n	</div>\n	<div class=\"panel-body\">\n		<div id=\"filters\"></div>\n	</div>\n	<div class=\"panel-footer\">\n		<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"collapse\"\n			data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">Apply</button>\n		<button type=\"button\" class=\"btn btn-default\" data-toggle=\"collapse\"\n			data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">Cancel</button>\n	</div>\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_selection_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"selection\"></div>\n<a href=\"#\" class=\"prevent-default\" data-toggle=\"collapse\" data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">\n	Change\n</a>";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"sq-filters\">\n    <div class='sq-wait'>Computing in progress...</div>\n    <div class='sq-error'>An error has occurred</div>\n    <dl class='sq-content dl-horizontal'></dl>\n</div>";
  });

this["squid_api"]["template"]["squid_api_period_selection_panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<div class=\"panel panel-default filter-panel\">\n	<div class=\"panel-heading\">\n		<button type=\"button\" class=\"close\" data-toggle=\"collapse\"\n			data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\n			<i class=\"fa fa-chevron-up\"></i>\n		</button>\n		<h4 class=\"panel-title\" id=\"myModalLabel\">Period</h4>\n	</div>\n	<div class=\"panel-body\" id=\"period\">\n		<div id=\"date-picker\"></div>\n	</div>\n	<div class=\"panel-footer\">\n		<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"collapse\"\n			data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">Apply</button>\n		<button type=\"button\" class=\"btn btn-default\" data-toggle=\"collapse\"\n			data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">Cancel</button>\n	</div>\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_period_selection_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "From <span id=\"sq-startDate\"></span> To <span id=\"sq-endDate\"></span>\n<a href=\"#\" class=\"prevent-default\" data-toggle=\"collapse\" data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">\n	Change\n</a>";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_selection_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selection), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"item\" style=\"padding: 3px; display: inline-block;\">\n<table style=\"border:1px solid #DDD; border-collapse: separate; border-spacing: 3px;\">\n	<tr>\n		<td><span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></td>\n		<td><a href=\"#\" id=\"";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"clear-filter\"><i class=\"glyphicon glyphicon-remove\"></i></a></td>\n	</tr>\n	<tr>\n		<td><span class=\"value\" style=\"color:#999;\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></td>\n		<td></td>\n	</tr>\n</table>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"sq-selection-panel\">\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.facets), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['Backbone', 'squid_api'], factory);
    } else {
        root.squid_api.view.CategoricalFilterView = factory(root.Backbone, root.squid_api);
    }
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend( {

        model: null,
        parent : null,
        template : squid_api.template.squid_api_filters_categorical_widget,

        initialize : function() {
            if (this.model) {
                this.model.on('change', this.render, this);
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        setTemplate : function(t) {
            if (t) {
                this.template = t;
            }
        },

        events: {
            "change": function(event) {
                if (this.parent) {
                    this.parent.changeSelection(this);
                }
            }
        },

        getSelectedItems: function() {
            var selectedItems = [];
            var val = this.$el.find("select").val();
            var values = [];
            if (!val) {
                // ignore
            } else if (!val instanceof Array) {
                values.push(val);
            } else {
                values = val;
            }
            for (var i=0; i<values.length; i++) {
                var v = values[i];
                if (v !== '') {
                    selectedItems.push({
                        "id": v,
                        "value": v,
                        "type": "v"
                    });
                }
            }
            return selectedItems;
        },

        render : function() {
            var selHTML = null;
            if (this.model && this.model.get('dimension')) {
                var items = this.model.get('items');
                var selItems = this.model.get('selectedItems');
                var name = this.model.get('dimension').name;
                var facetId = this.model.get('facetId');

                var selAvailable = false;
                var options = [];
                if (items && items.length > 0) {
                    // set flag to indicate the filter selection is available
                    selAvailable = true;
                    // build select box options
                    var selected;
                    var selItemsLen = selItems.length;
                    for (var j = 0; j < items.length; j++) {
                        selected = false;
                        for (var k = 0; k < selItemsLen; k++) {
                            if (items[j].id == selItems[k].id) { // option is selected
                                selected = true;
                                break;
                            }
                        }
                        options.push({"value" : items[j].id, "label" : items[j].value, "selected" : selected});
                    }
                }
                var displaySize = options.length>10?10:options.length;
                // get HTML template and fill corresponding data
                selHTML = this.template({
                    "selAvailable" : selAvailable,
                    "facetId" : facetId,
                    "name" : name,
                    "options" : options,
                    "displaySize" : displaySize
                });
            }
            // render HTML
            if (selHTML) {
                this.$el.html(selHTML);
            } else {
                this.$el.html("");
            }

            return this;
        },

        setEnable: function(enable) {
            var selection = this.$el.find("select");
            if (selection) {
                $(selection).attr('disabled', !enable);
            }
        }

    });

    return View;
}));
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
             // just update the pickers dates
                this.$el.find("#startDate").text(this.startDate.toDateString());
                var p1 = this.$el.find(".startDatePicker");
                p1.datepicker( "option", "minDate", this.minDate);
                p1.datepicker( "option", "maxDate", this.maxDate);
                p1.datepicker("setDate",this.startDate);

                this.$el.find("#endDate").text(this.endDate.toDateString());
                var p2 = this.$el.find(".endDatePicker");
                p1.datepicker( "option", "minDate", this.minDate);
                p1.datepicker( "option", "maxDate", this.maxDate);
                p2.datepicker("setDate",this.endDate);
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

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['jquery','backbone',
                'jssdk/sdk/widgets/squid_api_filters_categorical_widget', 
                'jssdk/sdk/widgets/squid_api_filters_continuous_widget',
                'jssdk/sdk/squid_api_facetjob_controller',
                'hbs!jssdk/sdk/templates/squid_api_filters_widget', 'underscore', 'bootstrap-multiselect'], factory);
    } else {
        // Global
        root.squid_api.view.FiltersView = 
            factory(root.$, 
                    root.Backbone,
                    root.squid_api,
                    root.squid_api.view.CategoricalFilterView,  
                    root.squid_api.view.ContinuousFilterView,
                    root.squid_api.controller.facetjob,
                    root.squid_api.template.squid_api_filters_widget
                    );
    }
}(this, function ($,Backbone, squid_api, CategoricalFilterView, ContinuousFilterView, FacetJobController, defaultTemplate) {

    var View = Backbone.View.extend({
        initialModel: null,
        currentModel: null,
        childViews: null,
        filterIds: null,
        displayCategorical: true,
        displayContinuous: true,
        refreshOnChange: true,
        template : null,
        continuousFilterTemplate : null,
        categoricalFilterTemplate : null,
        pickerAlwaysVisible : false,
        booleanGroupName : null,
        multiselectOptions : {},

        filterModel: Backbone.Model.extend({
            facetId: null,
            dimension: null,
            domain: null,
            items: null,
            selectedItems: null
        }),

        initialize: function(options) {

            if (options.displayCategorical === false) {
                this.displayCategorical = false;
            }
            if (options.displayContinuous === false) {
                this.displayContinuous = false;
            }
            if (options.pickerVisible && (options.pickerVisible === true)) {
                this.pickerAlwaysVisible = true;
            }
            if (options.booleanGroupName) {
                this.booleanGroupName = options.booleanGroupName;
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = defaultTemplate;
            }
            if (options.refreshOnChange) {
                this.refreshOnChange = options.refreshOnChange;
            }
            if (options.multiselectOptions) {
                this.multiselectOptions = options.multiselectOptions;
            } else {
                this.multiselectOptions = {nonSelectedText: 'ALL',maxHeight: 400, buttonClass: 'btn btn-link', enableFiltering: true, enableCaseInsensitiveFiltering: true};
            }
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            var me = this;
            if (!this.initialSelection) {
                // duplicate the initial model (once)
                this.initialModel = $.extend(true, {}, this.model.attributes);
            }

            // build the current model
            this.currentModel = new FacetJobController.FiltersModel();
            // set the current model
            var attributesClone = $.extend(true, {}, me.model.attributes);
            me.currentModel.set(attributesClone);
            me.currentModel.set("enabled", true);

            this.currentModel.on('change:status', function() {
                if (me.currentModel.isDone()) {
                    me.currentModel.set("enabled",true);
                }
                me.render();
            }, this);
            this.currentModel.on('change:enabled', function() {
                me.setEnable(me.currentModel.get("enabled"));
            }, this);
            // listen for some model events
            this.model.on('change:selection', function() {
                // update the current model
                var attributesClone = $.extend(true, {}, me.model.attributes);
                me.currentModel.set("selection", attributesClone.selection);
                me.render();
            }, this);
            this.model.on('change:enabled', this.setEnable, this);
            
        },

        setModel: function(model) {
            this.model = model;
            this.initialize();
        },

        setContinuousFilterTemplate : function(t) {
            this.continuousFilterTemplate = t;
            return this;
        },

        /*
         * Set an ordered array of filter ids (dimension oids) to display.
         */
        setFilterIds : function(a) {
            this.filterIds = a;
            return this;
        },

        setCategoricalFilterTemplate : function(t) {
            this.categoricalFilterTemplate = t;
            return this;
        },

        setEnable: function(enabled) {
            if (typeof(enabled) == 'undefined') {
                enabled = this.model.get("enabled");
            }
            if (this.childViews) {
                for (var i = 0; i < this.childViews.length; i++) {
                    var view = this.childViews[i];
                    if (view) {
                        view.setEnable(enabled);
                    }
                }
            }
        },

        /**
         * Called by childViews when a selection occurred.
         */
        changeSelection: function(childView) {
            var selectedItems = childView.getSelectedItems();
            var facetId = childView.model.get("facetId");
            // update the current model
            var sel = this.currentModel.get("selection");
            if (sel) {
                var facets = sel.facets;
                for (var i=0; i< facets.length; i++) {
                    var facet = facets[i];
                    if (facetId) {
                        // normal facet
                        if (facet && (facet.id == facetId)) {
                            if ((facet.items.length > 0)) {
                                facet.selectedItems = selectedItems;
                            }
                        }
                    } else {
                        // boolean group facet
                        // clear selection
                        if (facet && ((facet.items.length == 1) && (facet.items[0].value == "true"))) {
                            facet.selectedItems = [];
                        }
                        // set the selection
                        for (var j=0; j<selectedItems.length; j++) {
                            if (facet && (facet.dimension.oid == selectedItems[j].id)) {
                                facet.selectedItems = [{"type" : "v", "id" : "0", "value" : "true"}];
                            }
                        }
                    }
                }
            }
            // recompute the current facets
            if (this.refreshOnChange) {
                this.currentModel.set("enabled",false);
                FacetJobController.compute(this.currentModel);
            }

        },

        applySelection: function() {
            if (this.currentModel.get("enabled") === true) {
                // update the model selection with current           
                var attributesClone = $.extend(true, {}, this.currentModel.attributes);
                // here we directly set the selection and not the userSelection since
                // we already did the facets computation
                this.model.set("selection", attributesClone.selection);
            }
        },

        cancelSelection: function() {
            if (this.currentModel.get("enabled") === true) {
                // update the current model with the original model
                var attributesClone = $.extend(true, {}, this.model.attributes);
                this.currentModel.set("selection", attributesClone.selection);
                this.render();
                console.log("cancelSelection");
            }
        },

        render: function() {
            var container;
            if (!this.$el.html()) {
                // first call, setup the child views
                this.$el.html(this.template());            
            }
            container = this.$el.find(".sq-content");
            var errorData = this.model.get("error");
            if (errorData) {
                console.error(errorData.message);
                this.$el.find(".sq-error").show();
                this.$el.find(".sq-content").hide();
                this.$el.find(".sq-wait").hide();
            } else {
                this.$el.find(".sq-error").hide();
                var enabled = this.model.get("enabled");
                var sel = this.currentModel.get("selection");
                if ((!sel) || (this.currentModel.get("status") == "RUNNING")) {
                    this.$el.find(".sq-wait").show();
                } else {
                    var facets = sel.facets;
                    this.$el.find(".sq-wait").hide();

                    // sort & filter the facets
                    var sortedFacets = [];
                    var unsortedFacets = [];
                    var booleanGroupFacet = {"dimension" : {"type" : "CATEGORICAL", "oid" : null, "id" : null, "name" : this.booleanGroupName }, "items" : [], "selectedItems" : []};
                    for (var i = 0; i < facets.length; i++) {
                        var facet = facets[i];
                        var facetId = facet.dimension.oid;
                        var idx;
                        
                        // apply group boolean rule
                        if ((this.booleanGroupName) && (facet.items.length == 1) && (facet.items[0].value == "true")) {
                            // add a new item to the boolean group
                            idx = -1;
                            booleanGroupFacet.items.push({"type" : "v", "id" : facet.dimension.oid, "value" : facet.dimension.name});
                            if (facet.selectedItems.length > 0) {
                                // this facet is selected
                                booleanGroupFacet.selectedItems.push({"type" : "v", "id" : facet.dimension.oid, "value" : facet.dimension.name});
                            }
                        } else {
                            if (!this.filterIds) {
                                // bypass sorting
                                idx = i;
                            } else {
                                // apply sorting
                                idx = this.filterIds.indexOf(facetId);
                            }
                            
                            // apply display rules
                            if (((facet.dimension.type == "CONTINUOUS") && (this.displayContinuous)) || ((facet.dimension.type == "CATEGORICAL") && (this.displayCategorical))) {
                                if (idx >= 0) {
                                    sortedFacets[idx] = facet;
                                } else {
                                    unsortedFacets.push(facet);
                                }
                            }
                        }
                    }
                    
                    // append the unsorted facets
                    sortedFacets = sortedFacets.concat(unsortedFacets);
                    
                    // append the booleanGroupFacet at the end
                    if (this.booleanGroupName) {
                        // sort by alphabetical order
                        booleanGroupFacet.items.sort(function(a,b) { 
                                if (a.value < b.value) return -1;
                                if (a.value > b.value) return 1;
                                return 0;
                            } 
                        );
                        sortedFacets.push(booleanGroupFacet);
                    }

                    var buildViews = false;
                    if (!this.childViews) {
                        // build new views
                        this.childViews = [];
                        buildViews = true;
                    }

                    var viewIdx = 0;
                    for (var i2 = 0; i2 < sortedFacets.length; i2++) {
                        var facet2 = sortedFacets[i2];
                        if (facet2) {
                            var model = null;
                            if (buildViews) {
                                // build the sub-views
                                var view = null;
                                var facetContainerId = "sq-facet_" + i2;
                                var filterEl;
                                // create the sub view
                                container.append("<div id='"+facetContainerId+"'></div>");
                                filterEl = this.$el.find("#"+facetContainerId);
                                model = new this.filterModel();
                                if (facet2.dimension.type == "CONTINUOUS") {
                                    view = new ContinuousFilterView({
                                        model: model,
                                        el: filterEl,
                                        pickerVisible : this.pickerAlwaysVisible
                                    });
                                    view.setTemplate(this.continuousFilterTemplate);
                                }
                                if (facet2.dimension.type == "CATEGORICAL") {
                                    view = new CategoricalFilterView({
                                        model: model,
                                        el: filterEl
                                    });
                                    view.setTemplate(this.categoricalFilterTemplate);
                                }
                                view.parent = this;
                                view.setEnable(enabled);
                                this.childViews.push(view);
                            } else {
                                model = this.childViews[viewIdx].model;
                                viewIdx++;
                            }
                            // set view model
                            model.set({
                                facetId: facet2.id,
                                dimension: facet2.dimension,
                                items: facet2.items,
                                selectedItems: facet2.selectedItems
                            },{silent:true});
                            model.trigger("change");
                        }
                    }
                }
            }
            container.find('.multiselect').multiselect(this.multiselectOptions);		
            return this;
        },

        hasChanged : function() {
            var isEqual = true;
            if (this.currentModel.get("selection")) {
                var facets = this.currentModel.get("selection").facets;
                var initSelection = this.initialModel.selection;
                for (var i=0; i<facets.length; i++) {
                    var dimId = facets[i].dimension.id.dimensionId;
                    var initItems = this.getSelectedItems(this.initialSelection, dimId);
                    var curItems = facets[i].selectedItems;
                    if (!initItems) {
                        initItems = [];
                    }
                    initItems.sort();
                    if (!curItems) {
                        curItems = [];
                    }
                    curItems.sort();
                    // check this is the same selection
                    if (curItems.length != initItems.length) {
                        isEqual = false;
                    } else {
                        for (var j=0; j<initItems.length; j++) {
                            if (initItems[j].id != curItems[j].id) {
                                isEqual = false;
                            }
                        }
                    }
                }
            }
            return !isEqual;
        },

        getSelectedItems : function(selection, dimensionId) {
            var facets = selection.facets;
            for (var i=0; i<facets.length; i++) {
                var dimId = facets[i].dimension.id.dimensionId;
                if (dimId == dimensionId) {
                    return facets[i].selectedItems;
                }
            }
            return null;
        }


    });

    return View;
}));

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
        
        periodView : null,
        
        datePickerEl : null,
        
        datePickerView : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = defaultTemplate;
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
            this.render();
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        render : function() {
            if (!this.periodView) {
                // first call, setup the child views
                this.$el.html(this.template({"data-target" : this.datePickerEl.selector}));
                this.periodView = new squid_api.view.PeriodView({
                    el : this.el,
                    model : this.model,
                    format : this.format
                });
                
                this.datePickerEl.html(defaultPanelTemplate({"data-target" : this.datePickerEl.selector}));
                if (this.datePickerEl) {
                    this.datePickerView = new squid_api.view.FiltersView({
                        model : this.model,
                        el : this.datePickerEl.find("#date-picker"),
                        pickerVisible : true,
                        refreshOnChange : false,
                        displayCategorical : false
                    });
                    var me = this;
                    this.datePickerEl.find(".btn-primary").click(function() {
                        me.datePickerView.applySelection();
                    });
                    this.datePickerEl.find(".btn-default").click(function() {
                        me.datePickerView.cancelSelection();
                    });
                }
            }
        }
    });

    return View;
}));

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
                                startDateStr = this.format(startDate);
                                var endDate = new Date(Date.parse(endDateStr));
                                endDateStr = this.format(endDate);
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

// squid_api_selection_widget.js
(function (root, factory) {
    root.squid_api.view.SelectionView = factory(root.Backbone, root.squid_api, root.squid_api.template.squid_api_selection_widget);
}(this, function (Backbone, squid_api, template) {
    var View = Backbone.View.extend( {

        model: null,
        template : null,
        selection : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (this.model) {
                this.model.on('change:selection', this.render, this);
                this.model.on('change:enabled', this.enabled, this);
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        unselect : function(dimension,value) {
            var sel = this.model.get("selection");
            var userSel = { "facets" : [] };
            for (var i=0; i<sel.facets.length; i++) {
                var facet = sel.facets[i];
                var userFacet = {"dimension" : facet.dimension, "selectedItems" : [], "id" : facet.id, "items" : facet.items, "totalSize" : facet.totalSize};
                userSel.facets.push(userFacet);
                for (var j=0;j<facet.selectedItems.length;j++) {
                    var item = facet.selectedItems[j];
                    if ((facet.dimension.oid == dimension.oid) && (item.id==value.item.id || (value.item.id==-1 && item.value==value.item.value))) {
                        // unselect this item
                    } else {
                        userFacet.selectedItems.push(item);
                    }
                }
            }
            this.model.set("userSelection", userSel);
        },

        events: {
            "click .clear-filter": function(event) {
                event.preventDefault();
                if (this.model.get("selection") && this.selection && this.model.isDone()) {
                    var index = event.target.id;
                    if (index>=0) {
                        var idx = 0;
                        for (var key in this.selection) {
                            var sel = this.selection[key];
                            for (var j=0;j<sel.selection.length;j++) {
                                if (index==idx++) {
                                    this.unselect(sel.dimension,sel.selection[j]);
                                }
                            }
                        }
                    }
                }
            }
        },

        enabled : function() {
            if (this.model.get("enabled")) {
                this.$el.find('.clear-filter').removeAttr('disabled');
            } else {
                this.$el.find('.clear-filter').attr('disabled',"disabled");
            }
        },

        render : function() {
            if (this.model && this.model.get("selection")) {
                this.selection = this.model.getSelection();
                for (var key in this.selection) {
                    for (var i=0;i<this.selection[key].selection.length;i++) {
                        var item = this.selection[key].selection[i];
                        if (item.item.id===0 && item.item.value=="true") {
                            item.value = " ";
                        }
                    }
                }
                if (this.selection) {
                    // get HTML template and fill corresponding data
                    var selHTML = this.template({
                        "facets" : this.selection
                    });
                    // render HTML
                    this.$el.html(selHTML);
                }
                this.enabled();
            }
            return this;
        },

    });

    return View;
}));

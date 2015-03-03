this["squid_api"] = this["squid_api"] || {};
this["squid_api"]["template"] = this["squid_api"]["template"] || {};

this["squid_api"]["template"]["squid_api_filters_categorical_facet_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <li data-value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"fa fa-square-o\"></i><span>";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n	";
  return buffer;
  }

  buffer += "<ul>\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_categorical_paging_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n		<li class=\"previous\" data-id=\"prev\"><a href=\"#\"><i class=\"fa fa-arrow-left\"></i></a></li>\n		";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<li data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><a  href=\"#\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n		";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " class=\"active\" ";
  }

function program6(depth0,data) {
  
  
  return "\n		<li class=\"next\"  data-id=\"next\"><a  href=\"#\"><i class=\"fa fa-arrow-right\"></i></a></li>\n		";
  }

  buffer += "<div class=\"pagination\">\n	<ul>\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.pages), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n</div>";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_categorical_selected_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    ";
  if (helper = helpers.noDataMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noDataMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <ul class=\"facets\" id=\"squid_api_filters_categorical_selected_view\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.facets), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <li attr-id=\"";
  if (helper = helpers.facetItemId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facetItemId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" attr-name=\"";
  if (helper = helpers.facetNameId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facetNameId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <div class=\"facet-name\">\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.facetName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                </div>\n                <div class=\"facet-value\">\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.facetItem)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                </div>\n                <div class=\"facet-remove\">\n                    <i class=\"glyphicon glyphicon-remove\"></i>\n                </div>\n            </li>\n        ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.noData), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_categorical_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style=\"margin-top: 20px;\" class=\"panel panel-default filter-panel squid_api_filters-categorical-panel-view\">\n	<div class=\"panel-heading\">\n		<button type=\"button\" class=\"close\" data-toggle=\"collapse\"\n			data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\n			<i class=\"glyphicon glyphicon-chevron-up\"></i>\n		</button>\n		<h4 class=\"panel-title\" id=\"myModalLabel\">Filters</h4>\n	</div>\n	<div class=\"panel-body\">\n		<div class=\"row\">\n			<div class=\"col-md-4\">\n				<h4>Filter Store</h4>\n			</div>\n			<div class=\"col-md-4\">\n				<div id=\"filter-selection\">\n					<select type=\"button\" class=\"btn btn-select-filter\">Choose Filter<span class=\"caret\"></span></select>\n				</div>\n			</div>\n			<div class=\"col-md-2\">\n				<div id=\"search\">\n				<form action=\"#\" role=\"search\">\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <input class=\"form-control\" id=\"navbarInput-01\" type=\"search\" placeholder=\"Search\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn\"><i class=\"fa fa-search\"></i></button>\n                    </span>\n                  </div>\n                </div>\n              </form>\n				</div>\n			</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-md-4\">\n				<div id=\"selected\">\n					\n				</div>\n			</div>\n			<div class=\"col-md-8\">\n			<div id=\"filter-display-results\">\n\n			</div>\n			<div id=\"pagination-container\">\n					\n			</div>\n			</div>\n		</div>\n		<div class=\"row\">\n		<div class=\"col-md-4\">\n		</div>\n		<div class=\"col-md-8\">\n				\n			</div>\n	</div>\n	<div class=\"panel-footer\">\n		<button type=\"button\" class=\"btn btn-primary apply-selection\" data-toggle=\"collapse\"\n			data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">Apply</button>\n		<button type=\"button\" class=\"btn btn-default cancel-selection\" data-toggle=\"collapse\"\n			data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">Cancel</button>\n	</div>\n</div>";
  return buffer;
  });

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
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\r\n\r\n<button class=\"btn btn-default\">Period <span class=\"caret\"></span></button>\r\n\r\n";
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
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
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
    + "\" data-clavier=\"true\">Cancel</button>\n	</div>\n</div>\n\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_selection_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"col-sm-3 col-xs-3 col-md-2\">\n<button href=\"#\" class=\"btn btn-default\" data-toggle=\"collapse\" data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">\n	Filters\n	<span class=\"caret\"></span>\n</button>\n</div>\n<div class=\"col-md-9\">\n<div id=\"selection\"></div>\n</div>";
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
  


  return "<div class=\"col-sm-3 col-xs-3 col-md-2\">\n<div id=\"date-picker\"></div>\n</div>\n<div class=\"col-md-6\">\n<span class=\"date-wrap\"><span id=\"sq-startDate\"></span> - <span id=\"sq-endDate\"></span></div>\n</div>\n";
  });

this["squid_api"]["template"]["squid_api_selection_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n<div class=\"information\">All</div>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selection), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
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
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.empty), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.facets), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
(function (root, factory) {
    root.squid_api.view.CategoricalExternalSelectedView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filterStore : null,
        format : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.filterStore) {
                this.filterStore = options.filterStore;
            }

            this.filterPanelTemplate = squid_api.template.squid_api_filters_categorical_selected_view;

            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }

            this.model.on("change", this.render, this);
            this.render();
        },

        events: {
            "click .facet-remove": function(event) {
                // Obtain facet name / value
                var facetName = $(event.currentTarget).parent("li").attr("attr-name");
                var facetId = $(event.currentTarget).parent("li").attr("attr-id");

                var selection = this.model.get("selection");
                if (selection) {
                    if (selection.facets) {
                        var facets = selection.facets;
                        var updatedFacets = {facets:[]};
                        for (i=0; i<facets.length; i++) {
                            var selectedItems = facets[i].selectedItems;
                            if (selectedItems.length > 0) {
                                var arr = [];
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    if (selectedItems[ix].id) {
                                        if (facetId !== selectedItems[ix].id) {
                                            arr.push(selectedItems[ix]);
                                        }
                                    }
                                }
                                facets[i].selectedItems = arr;
                                updatedFacets.facets.push(facets[i]);
                            } else {
                                updatedFacets.facets.push(facets[i]);
                            }
                        }
                        this.model.set("selection", updatedFacets);  
                        this.model.trigger("change");
                    }
                }
            }
        },

        render : function() {
            var selection = this.model.get("selection");
            var selFacets = [];
            var noData = true;
            var noDataMessage = "All";
            if (selection) {
                 if (selection.facets) {
                    var facets = selection.facets;
                    for (i=0; i<facets.length; i++) {
                        var selectedItems = facets[i].selectedItems;
                            if (facets[i].dimension.type !== "CONTINUOUS") {
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    noData = false;
                                    var obj = {};
                                    obj.facetItem = selectedItems[ix].value;
                                    obj.facetItemId = selectedItems[ix].id;
                                    obj.facetName = facets[i].dimension.name;
                                    obj.facetNameId = facets[i].id;
                                    selFacets.push(obj);
                                }
                            }
                        }
                    }
                }
                this.$el.html(this.filterPanelTemplate({facets: selFacets, noData: noData, noDataMessage: noDataMessage}));
            }
        });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.CategoricalFacetView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filters: null,
        format : null,

        initialize : function(options) {
            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }
            if (options.filters) {
                this.filters = options.filters;
            }

            this.model.on("change:pageIndex", this.render, this);
            this.model.on("change:facet", this.render, this);
        },

        events: {
            // Dimension Sorting
            "click li": function(item) {
                if ($(item.currentTarget).attr("selected")) {
                    $(item.currentTarget).removeClass("active");
                    $(item.currentTarget).removeAttr("selected");
                    $(item.currentTarget).find("i").removeClass();
                    $(item.currentTarget).find("i").addClass("fa fa-square-o");
                } else {
                    $(item.currentTarget).addClass("active");
                    $(item.currentTarget).attr("selected", true);
                    $(item.currentTarget).find("i").removeClass();
                    $(item.currentTarget).find("i").addClass("fa fa-check-square-o");

                    // Get selected Filter & Itekm
                    var selectedFilter = this.model.get("selectedFilter");
                    var selectedItem = $(item.currentTarget).attr("data-attr");
                    
                    // Get clicked filter value & create object
                    var value = $(item.currentTarget).attr("data-id");
                    var type = $(item.currentTarget).attr("data-type");
                    var id = $(item.currentTarget).attr("data-id");
                    var selectObj = {id : id, type : type, value : value};

                    // Get selected Filters
                    var facets = this.filters.get("selection").facets;

                    // Push new filters to selectedItems array
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].id === selectedFilter) {
                            facets[i].selectedItems.push(selectObj);
                        }
                    }

                    // Set the updated filters model
                    var selection = {facets:facets};
                    this.filters.set("selection", selection);
                    this.filters.trigger("change");
                }
            },
        },

        render : function() {
            var facet = this.model.get("facet");
            if (facet) {
                var facetItems = facet.get("items");
                var pageIndex = this.model.get("pageIndex");
                var pageSize = this.model.get("pageSize");
                var itemIndex = this.model.get("itemIndex");

                if (facetItems.length === 0) {
                    this.$el.html("No Items");
                } else {
                    // display current facet members
                    var startIndex = (pageIndex * pageSize) - itemIndex;
                    var endIndex = startIndex + pageSize;
                    if (endIndex > facetItems.length) {
                        endIndex = facetItems.length;
                    }
                    var items = [];
                    for (ix=startIndex; ix<endIndex; ix++) {
                        items.push(facetItems[ix]);
                    }
                    if (items.length>0) {
                        var html = squid_api.template.squid_api_filters_categorical_facet_view({
                            "items" : items
                        });
                        this.$el.html(html);
                    } else {
                        // computing in progress
                    }
                }
                
            }
            
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.CategoricalInternalSelectedView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filterStore : null,
        format : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.filterStore) {
                this.filterStore = options.filterStore;
            }

            this.filterPanelTemplate = squid_api.template.squid_api_filters_categorical_selected_view;

            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }

            this.model.on("change", this.render, this);
        },

        events: {
            "click .facet-remove": function(event) {
                // Obtain facet name / value
                var facetName = $(event.currentTarget).parent("li").attr("attr-name");
                var facetId = $(event.currentTarget).parent("li").attr("attr-id");

                var selection = this.model.get("selection");
                if (selection) {
                    if (selection.facets) {
                        var facets = selection.facets;
                        var updatedFacets = {facets:[]};
                        for (i=0; i<facets.length; i++) {
                            var selectedItems = facets[i].selectedItems;
                            if (selectedItems.length > 0) {
                                var arr = [];
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    if (selectedItems[ix].id) {
                                        if (facetId !== selectedItems[ix].id) {
                                            arr.push(selectedItems[ix]);
                                        }
                                    }
                                }
                                facets[i].selectedItems = arr;
                                updatedFacets.facets.push(facets[i]);
                            } else {
                                updatedFacets.facets.push(facets[i]);
                            }
                        }
                        this.model.set("selection", updatedFacets);
                        this.model.trigger("change");             
                    }
                }
            }
        },

        render : function() {
            var selection = this.model.get("selection");
            var selFacets = [];
            var noData = true;
            var noDataMessage = "No Filters Selected";
            if (selection) {
                 if (selection.facets) {
                    var facets = selection.facets;
                    for (i=0; i<facets.length; i++) {
                        var selectedItems = facets[i].selectedItems;
                            if (facets[i].dimension.type !== "CONTINUOUS") {
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    noData = false;
                                    var obj = {};
                                    obj.facetItem = selectedItems[ix].value;
                                    obj.facetItemId = selectedItems[ix].id;
                                    obj.facetName = facets[i].dimension.name;
                                    obj.facetNameId = facets[i].id;
                                    selFacets.push(obj);
                                }
                            }
                        }
                    }
                }
                this.$el.html(this.filterPanelTemplate({facets: selFacets, noData: noData, noDataMessage: noDataMessage}));
            }
        });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.CategoricalPagingView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        format : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
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

            this.model.on("change:pageIndex", this.render, this);
            this.model.on("change:facet", this.render, this);
            this.render();
        },
        
        events : { 
            "click li" : function(event) {
                event.preventDefault();
                var pageId = $(event.currentTarget).data("id");
                var pageIndex = this.model.get("pageIndex");
                var nbPages = this.model.get("nbPages");
                var itemIndex = this.model.get("itemIndex");
                var pageSize = this.model.get("pageSize");
                var firstPageIndex = Math.round(itemIndex / pageSize);
                if (pageId == "prev") {
                    if (pageIndex > (firstPageIndex - nbPages)) {
                        // previous page
                        this.model.set("pageIndex", pageIndex-1);
                    } else {
                        // previous page group
                        this.model.set("pageIndex", firstPageIndex - nbPages);
                    }
                } else if (pageId == "next") {
                    if (pageIndex < (firstPageIndex + nbPages)) {
                        // next page
                        this.model.set("pageIndex", pageIndex+1);
                    } else {
                        // next page group
                        this.model.set("pageIndex", firstPageIndex + nbPages);
                    }
                } else {
                    this.model.set("pageIndex", pageId-1);
                }
            }
        },

        render : function() {
            var facet = this.model.get("facet");
            if (facet) {
                var facetItems = facet.get("items");
                var pageIndex = this.model.get("pageIndex");
                var pageSize = this.model.get("pageSize");
                var nbPages = this.model.get("nbPages");
                var itemIndex = this.model.get("itemIndex");
                
                var firstPageIndex = Math.round(itemIndex / pageSize);
                
                var pages = [];
                var pageCount = facetItems.length / pageSize;
                if (pageCount>1) {
                    if (pageCount>nbPages) {
                        pageCount = nbPages;
                    }
                    var prev = (firstPageIndex === 0) ? null : true;
                    for (var i=firstPageIndex; i<(firstPageIndex+pageCount); i++) {
                        var selected = null;
                        if (i == pageIndex) {
                            selected = true;
                        }
                        pages.push({ "id" : i+1, "selected" :  selected});
                    }
                    var next = null;
                    if (facet.get("hasMore")) {
                        next = true;
                    }
                    
                    this.$el.html(squid_api.template.squid_api_filters_categorical_paging_view({
                        "prev" : prev,
                        "pages" : pages,
                        "next" : next
                    }));
                } else {
                    this.$el.html("");
                }
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.CategoricalSelectorView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filterStore : null,
        format : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.filterStore) {
                this.filterStore = options.filterStore;
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

            this.model.on("change", this.render, this);
            this.render();
        },

        render : function() {
            var me = this;

            if (this.model.get("status") && this.model.get("status") !== "RUNNING") {
                if (this.model.get("selection")) {
                    var facets = this.model.get("selection").facets;
                    var categoricalFacets = [];
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].dimension.type !== "CONTINUOUS") {
                            this.$el.find(".btn-select-filter").append("<option value=\"" + facets[i].id + "\">" + facets[i].dimension.name + "</option>");
                        }
                    }
                }
                this.$el.find(".btn-select-filter").multiselect({
                    onChange: function(option) {
                        var filterValue = $(option).val();
                        me.filterStore.set("selectedFilter", filterValue);
                    }
                });
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.CategoricalView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        filterPanelTemplate: null,
        model : null,
        currentModel : null,
        format : null,
        filterPanel : null,
        filterSelected : null,
        nbPages : 10,

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

            this.filterStore = new Backbone.Model( { 
                // selected dimension
                selectedFilter : null,  
                // current selected page
                pageIndex : 0,          
                // nb of items in a page
                pageSize : 10,          
                // nb of pages to display
                nbPages : 10,
                // current facet retrieved from API
                facet : null,           
                // index id of the first item of facet
                itemIndex : 0           
            }
            );
            this.currentModel = new squid_api.model.FiltersJob();
            this.setCurrentModel();
            
            this.model.on("change", this.setCurrentModel, this);
            this.filterStore.on("change:selectedFilter", function() {
                this.filterStore.set({"pageIndex": 0}, {"silent" : true});
                this.filterStore.trigger("change:pageIndex", this.filterStore);
            }, this);
            this.filterStore.on("change:pageIndex", this.renderFacet, this);

            this.render();
        },
        
        setCurrentModel : function() {
            // duplicate the filters model
            var attributesClone = $.extend(true, {}, this.model.attributes);
            this.currentModel.set(attributesClone);
        },

        render : function() {

            // Button which opens filter Panel
            this.$el
            .html("<button type='button' class='btn squid_api_filters_categorical_button' data-toggle='collapse' data-target="+ this.filterPanel + ">Filters<span class='caret'></span></button>");

            // Print Base Filter Panel Layout
            $(this.filterPanel)
            .addClass("squid_api_filters_categorical_filter_panel")
            .html(this.filterPanelTemplate({
                        "data-target" : this.filterPanel
                    }));

            view = new api.view.CategoricalSelectorView({
                el: $(this.filterPanel).find("#filter-selection"),
                model: this.currentModel,
                filterStore : this.filterStore
            });

            view2 = new api.view.CategoricalFacetView({
                el: $(this.filterPanel).find("#filter-display-results"),
                model: this.filterStore,
                filters: this.currentModel,
            });

            view3 = new api.view.CategoricalPagingView({
                el: $(this.filterPanel).find("#pagination-container"),
                model: this.filterStore
            });

            view4 = new api.view.CategoricalInternalSelectedView({
                el: $(this.filterPanel).find("#selected"),
                model: this.currentModel
            });

            view5 = new api.view.CategoricalExternalSelectedView({
                el: this.filterSelected,
                model: this.model
            });

            var me = this;
            $(this.filterPanel).find(".apply-selection").click(function() {
                me.applySelection();
            });
            $(this.filterPanel).find(".cancel-selection").click(function() {
                me.cancelSelection();
            });
        }, 
        
        renderFacet : function() {
            var me = this;
            
            if (this.currentModel.get("status") === "DONE") {
                if (this.currentModel.get("selection")) {
                    var selectedFacetId = this.filterStore.get("selectedFilter");
                    var pageIndex = this.filterStore.get("pageIndex");
                    var pageSize = this.filterStore.get("pageSize");
                    var facet = this.filterStore.get("facet");
                    var nbPages = this.filterStore.get("nbPages");
                    
                    // compute required index range
                    var startIndex = pageIndex * pageSize;
                    var endIndex = startIndex + pageSize;
                    
                    // check if we need to fetch more items
                    var fetch = false;
                    if ((facet) && (facet.get("id") == selectedFacetId)) {
                        var itemIndex = this.filterStore.get("itemIndex");

                        // compute what's the max index
                        var maxItem = itemIndex + facet.get("items").length;     
                        if (startIndex < itemIndex) {
                            fetch = true;
                        }
                        if ((endIndex > maxItem) && (facet.get("hasMore") === true)) {
                            fetch = true;
                        }
                    } else {
                        fetch = true;
                    }
                    
                    if (fetch === true) {
                        // pre-fetch some pages of facet members
                        // this.$el.html("Retrieving items list...");
                        var facetJob = new squid_api.model.ProjectFacetJobFacet();
                        facetJob.set("id",this.currentModel.get("id"));
                        facetJob.set("oid", selectedFacetId);
                        if (startIndex) {
                            facetJob.addParameter("startIndex", startIndex);
                        }
                        if (pageSize) {
                            // +1 because the API returns -1 items
                            facetJob.addParameter("maxResults", (nbPages * pageSize) + 1);
                        }
                        // get the results from API
                        facetJob.fetch({
                            error: function(model, response) {
                                console.error(response);
                            },
                            success: function(model, response) {
                                me.filterStore.set("itemIndex", startIndex);
                                me.filterStore.set("facet", model);
                            }
                        });
                    }
                }
            }
        },
        
        applySelection : function() {
            var currentModelSelection = this.currentModel.get("selection");
            this.model.set("selection", currentModelSelection);
        },

        cancelSelection : function() {
            console.log("Cancel");
        },
        
        applyPaging : function(pageIndex) {
            filterStore.set("pageIndex", pageIndex);
        }
        
    });

    return View;
}));

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
        ranges : null,
        rangesPresets : {
            'all': function(min, max) { return [moment.utc(min), moment.utc(max)]; },
            'first-month': function(min, max) { return [moment.utc(min).startOf('month'), moment.utc(min).endOf('month')]; },
            'last-month': function(min, max) { return [moment.utc(max).startOf('month'), moment.utc(max).endOf('month')]; }
        },

        initialize: function(options) {
            if (this.model) {
                this.model.on('change', this.render, this);
            }

            if (options.pickerVisible && (options.pickerVisible === true)) {
                this.pickerVisible = true;
                this.pickerAlwaysVisible = true;
            }
            
            if (options.ranges) {
                this.ranges = options.ranges;
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
                "lowerBound": d1,
                "upperBound": d2,
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
                        var lowerDate = moment.utc(items[i].lowerBound);
                        if ((!this.minDate) || (lowerDate < this.minDate)) {
                            this.minDate = lowerDate;
                        }
                        var upperDate = moment.utc(items[i].upperBound);
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
                        this.startDate = moment.utc(selItems[0].lowerBound);
                        this.endDate = moment.utc(selItems[0].upperBound);
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
                        startDateVal: this.startDate,
                        endDateVal: this.endDate
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
                        pickerRanges[rangeName] = func.call(this, me.minDate, me.maxDate);
                    }
                }

                // Build Date Picker
                this.$el.find("button").daterangepicker(
                        {
                            opens: me.parent.datePickerPosition,
                            format: 'YYYY-MM-DD',
                            startDate: me.startDate,
                            endDate: me.endDate,
                            minDate: me.minDate,
                            maxDate: me.maxDate,
                            showDropdowns: true,
                            ranges: pickerRanges
                        }
                );

                var dateItems;

                // Detect Apply Action
                this.$el.find("button").on('apply.daterangepicker', function(ev, picker) {

                    // Update Change Selection upon date widget close
                    var startDate = moment.utc(picker.startDate).toDate();
                    var endDate = moment.utc(picker.endDate).toDate();
                    me.startDate = startDate;
                    me.endDate = endDate;

                    if (me.parent) {
                        me.parent.changeSelection(me);
                        me.parent.applySelection(me);
                    }
                });

                // Detect Cancel Action
                this.$el.find("button").on('cancel.daterangepicker', function(ev, picker) {
                    if (me.parent) {
                        me.parent.cancelSelection(me);
                    }
                });

                this.$el.find("button").on('change.daterangepickerLeft', function(ev) {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                });

                this.$el.find("button").on('change.daterangepickerRight', function(ev) {
                    $('.daterangepicker').find('.right td.available:not(.off):last').trigger('click');
                });
            }
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

            // listen for global status change
            squid_api.model.status.on('change:status', this.enable, this);
        },

        enable: function() {
            var select = this.$el.find("button");
            if (select) {
                var running = (squid_api.model.status.get("status") != squid_api.model.status.STATUS_DONE);
                if (running) {
                    // computation is running : disable input
                    this.$el.find(select).attr("disabled", true);
                } else {
                    // computation is done : enable input
                    this.$el.find(select).attr("disabled", false);
                }
            }
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
        datePickerPosition : null,
        multiselectOptions : {},
        ranges : null,

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
            if (options.datePickerPosition) {
                this.datePickerPosition = options.datePickerPosition;
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
            if (typeof options.refreshOnChange !== 'undefined') {
                this.refreshOnChange = options.refreshOnChange;
            }
            if (options.multiselectOptions) {
                this.multiselectOptions = options.multiselectOptions;
            } else {
                this.multiselectOptions = {nonSelectedText: 'ALL',maxHeight: 400, buttonClass: 'btn btn-link', enableFiltering: false, enableCaseInsensitiveFiltering: false};
            }
            if (options.ranges) {
                this.ranges = options.ranges;
            }
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            var me = this;
            if (!this.initialSelection) {
                // duplicate the initial model (once)
                this.initialModel = $.extend(true, {}, this.model.attributes);
            }

            this.initCurrentModel(this.model);

            // listen for some model events
            this.model.on('change:domains', function(model) {
                me.initCurrentModel(model);
            }, this);
            this.model.on('change:selection', function(model) {
                // update the current model
                var attributesClone = $.extend(true, {}, model.attributes);
                me.currentModel.set("selection", attributesClone.selection);
                me.render();
            }, this);
            this.model.on('change:enabled', this.setEnable, this);

        },

        initCurrentModel : function(model) {
            var me = this;
            me.childViews = null;
            // build the current model
            me.currentModel = new FacetJobController.FiltersModel();
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
                if (this.refreshOnChange) {
                    // here we directly set the selection and not the userSelection since
                    // we already did the facets computation
                    this.model.set("selection", attributesClone.selection);
                } else {
                    // update the userSelection (will compute the facets)
                    this.model.set("userSelection", attributesClone.selection);
                }
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
            if (!this.childViews) {
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
                                        pickerVisible : this.pickerAlwaysVisible,
                                        ranges : this.ranges
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

        datePickerPosition : "left",

        refreshOnChange: false,
        
        ranges: null,

        initialize : function(options) {

            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = defaultTemplate;
            }
            if (options.datePickerPosition) {
                this.datePickerPosition = options.datePickerPosition;
            }
            if (options.refreshOnChange) {
                this.refreshOnChange = options.refreshOnChange;
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
            if (options.ranges) {
                this.ranges = options.ranges;
            }
            this.render();

            // listen for global status change
            squid_api.model.status.on('change:status', this.enable, this);
        },

        enable: function() {
            var select = this.$el.find("button");
            if (select) {
                var running = (squid_api.model.status.get("status") != squid_api.model.status.STATUS_DONE);
                if (running) {
                    // computation is running : disable input
                    this.$el.find(select).attr("disabled", true);
                } else {
                    // computation is done : enable input
                    this.$el.find(select).attr("disabled", false);
                }
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        render : function() {
            if (!this.periodView) {

                // first call, setup the child views
                this.$el.html(this.template());

                this.periodView = new squid_api.view.PeriodView({
                    el : this.el,
                    model : this.model,
                    format : this.format
                });

                this.datePickerView = new squid_api.view.FiltersView({
                    model : this.model,
                    el : this.$el.find("#date-picker"),
                    pickerVisible : true,
                    datePickerPosition: this.datePickerPosition,
                    refreshOnChange : this.refreshOnChange,
                    displayCategorical : false,
                    ranges : this.ranges
                });
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
                                endDateStr = moment.utc(endDateStr).format("MMM Do YYYY");
                                startDateStr = moment.utc(startDateStr).format("MMM Do YYYY");
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
                    var empty = true;
                    var selection = this.model.get("selection").facets;

                    for (var facet=0; facet<selection.length; facet++) {
                        if (selection[facet].dimension.type !== "CONTINUOUS") {
                            if (selection[facet].selectedItems.length !== 0) {
                                empty = false;
                            }
                        }
                    }

                    var selHTML = this.template({
                        "facets" : this.selection,
                        "empty" : empty
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

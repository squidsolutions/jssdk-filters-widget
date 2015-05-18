this["squid_api"] = this["squid_api"] || {};
this["squid_api"]["template"] = this["squid_api"]["template"] || {};

this["squid_api"]["template"]["squid_api_filters_categorical_facet_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<ul>\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.program(8, program8, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n					<li class=\"active\" selected=\"true\" data-value=\"";
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
    + "\">\n						<i class=\"fa fa-square-o\"></i><span>";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n					</li>\n				";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n					<li data-value=\"";
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
    + "\">\n						<i class=\"fa fa-square-o\"></i><span>";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n					</li>\n				";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "\n				<li></li>\n			";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<span class='no-items'>";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.message), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
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
  buffer += "\n    <div class=\"noData\">";
  if (helper = helpers.noDataMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noDataMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n";
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
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<div class=\"panel-heading\">\n		<button type=\"button\" class=\"close\" data-toggle=\"collapse\"\n			data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\n		</button>\n	</div>\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n			<div class=\"row\">\n		";
  }

function program5(depth0,data) {
  
  
  return "\n			<div class=\"row no-padding\">\n		";
  }

function program7(depth0,data) {
  
  
  return "\n					<div id=\"filter-selection\">\n						<select class=\"btn btn-select-filter\" size=\"2\"></select>\n					</div>\n				";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<div class=\"panel-footer\">\n			<button type=\"button\" class=\"btn btn-primary apply-selection\" data-toggle=\"collapse\"\n				data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">Apply</button>\n			<button type=\"button\" class=\"btn btn-default cancel-selection\" data-toggle=\"collapse\"\n				data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">Cancel</button>\n		</div>\n	";
  return buffer;
  }

  buffer += "<div class=\"panel panel-default filter-panel squid_api_filters-categorical-panel-view\">\n	";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0['panel-buttons']), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<div class=\"panel-body\">\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['panel-buttons']), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<div class=\"col-md-7\">\n				";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.initialFacet), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				<div id=\"search\">\n                  <div class=\"input-group\">\n                    <input class=\"form-control\" id=\"searchbox\" type=\"search\" placeholder=\"Search for\">\n                    <span class=\"input-group-addon\">\n                      <i class=\"fa fa-search\"></i>\n                    </span>\n                  </div>\n				</div>\n			</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-md-7\">\n				<div id=\"filter-display-results\">\n				</div>\n			</div>\n			<div class=\"col-md-5\">\n				<div id=\"selected\">\n				</div>\n			</div>\n		</div>\n		<div class=\"row\">\n			<div id=\"pagination-container\">\n					\n			</div>\n		</div>\n		<div class=\"row\">\n		<div class=\"col-md-4\">\n		</div>\n		<div class=\"col-md-8\">\n				\n			</div>\n	</div>\n\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['panel-buttons']), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
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

this["squid_api"]["template"]["squid_api_filters_segment_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "checked=\"checked\"";
  }

  buffer += "<div class=\"checkbox\">\r\n    <label>\r\n      <input type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isSelected), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> ";
  if (helper = helpers.displayName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n    </label>\r\n</div>";
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
    root.squid_api.view.CategoricalFacetView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filters: null,
        format : null,
        noFiltersMessage : null,
        singleSelect : false,
        disabled : false,

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
                this.filters.on("change:selection", this.render, this);
            }
            if (options.noFiltersMessage) {
                this.noFiltersMessage = options.noFiltersMessage;
            }
            if (options.singleSelect) {
                this.singleSelect = options.singleSelect;
            }

            this.model.on("change:pageIndex", this.render, this);
            this.model.on("change:facet", this.render, this);
        },

        events: {
            // Dimension Sorting
            "click li": function(item) {
                if (this.disabled === false) {
                    this.disabled = true;
                    // Get selected Filter & Item
                    var selectedFilter = this.model.get("selectedFilter");
                    var target = $(item.currentTarget);
                    var selectedItem = target.attr("data-attr");
    
                    // Get clicked filter value & create object
                    var value = target.attr("data-value");
                    var type = target.attr("data-type");
                    var id = target.attr("data-id");
    
                    // Get selected Filters
                    var selectionClone = $.extend(true, {}, this.filters.get("selection"));
                    var facets = selectionClone.facets;
    
                    if (target.attr("selected")) {
                        // Style manipulation
                        target.removeClass("active");
                        target.removeAttr("selected");
    
                        // Remove selected item from facet
                        squid_api.controller.facetjob.unSelect(facets, selectedFilter, id);
                        
                    } else {
                        // style manipulation
                        target.addClass("active");
                        target.attr("selected", true);
                        
                        // set up object to add a new selected item
                        var selectObj = {id : id, type : type, value : value};
    
                        // Push new filters to selectedItems array
                       
                        var selectedFacet;
                        for (i=0; i<facets.length; i++) {
                            var facet = facets[i];
                            if (facet.id === selectedFilter) {
                                selectedFacet = facet;
                                if (this.singleSelect) {
                                    facet.selectedItems = [selectObj];
                                } else {
                                    facet.selectedItems.push(selectObj);
                                }
                            }
                        }
                        // Remove selected items from children
                        squid_api.controller.facetjob.unSelectChildren(facets, selectedFacet, false);
                    }
    
                    // Set the updated filters model
                    this.filters.set("selection", selectionClone);
                }
            },
        },

        render : function() {
            var facet = this.model.get("facet");
            var message = null;
            var updatedItems = [];

            if (facet) {
                this.$el.addClass("min-filter-height");

                var facetItems = facet.get("items");
                var pageIndex = this.model.get("pageIndex");
                var pageSize = this.model.get("pageSize");
                var itemIndex = this.model.get("itemIndex");

                // display current facet members
                var startIndex = (pageIndex * pageSize) - itemIndex;
                var endIndex = startIndex + pageSize;

                var selectedFilter = this.model.get("selectedFilter");
                var facets = this.filters.get("selection").facets;
                if (endIndex > facetItems.length) {
                    endIndex = facetItems.length;
                }
                
                if (startIndex >= 0) {
                    var items = [];
                    for (ix=startIndex; ix<endIndex; ix++) {
                        items.push(facetItems[ix]);
                    }
                    
                    // Manipulate items to add a selected or not attribute
                    for (ix=0; ix<facets.length; ix++) {
                        if (selectedFilter === facets[ix].id) {
                            var selectedItems = facets[ix].selectedItems;
                            for (ix1=0; ix1<items.length; ix1++) {
                                var obj = items[ix1];
                                obj.selected = false;
                                for (ix2=0; ix2<selectedItems.length; ix2++) {
                                    if (items[ix1].id === selectedItems[ix2].id) {
                                        obj.selected = true;
                                        break;
                                    }
                                }
                                updatedItems.push(obj);
                            }
                        }
                    }
                }

                // set the message
                if (facet.get("done") === true) {
                    if ((facet.get("hasMore") === true) && (updatedItems < pageSize)) {
                        message = "Partial results (computation pending)";
                    } else if (!facetItems || facetItems.length === 0) {
                        message = "No Items";
                        this.$el.removeClass("min-filter-height");
                    }
                } else {
                    message = "Computing in progress";
                }
                
            } else {
                message = this.noFiltersMessage;
                this.$el.removeClass("min-filter-height");
            }

            var html = squid_api.template.squid_api_filters_categorical_facet_view({
                "items" : updatedItems, "message" : message
            });

            this.$el.html(html);
            
            // treat global status
            var running = (squid_api.model.status.get("status") != squid_api.model.status.STATUS_DONE);
            if (running === true) {
                // computation is running
            } else {
                // computation is done : enable input
                this.disabled = false;
            }
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
    root.squid_api.view.CategoricalSelectedView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filterStore : null,
        format : null,
        initialFacet : null,
        singleSelect : null,
        facetList : null,
        avoidFacets : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.filterStore) {
                this.filterStore = options.filterStore;
            }
            if (options.noDataMessage) {
                this.noDataMessage = options.noDataMessage;
            }
            if (options.initialFacet) {
                this.initialFacet = options.initialFacet;
            }
            if (options.singleSelect) {
                options.singleSelect = options.singleSelect;
            }
            if (options.facetList) {
                this.facetList = options.facetList;
            }
            if (options.avoidFacets) {
                this.avoidFacets = options.avoidFacets;
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
                var itemId = $(event.currentTarget).parent("li").attr("attr-id");

                // Copy model selection object properties to remove object reference
                var selectionClone = $.extend(true, {}, this.model.get("selection"));
                if (selectionClone) {
                    var facets = selectionClone.facets;
                    if (facets) {
                        // Remove selected item from facet
                        squid_api.controller.facetjob.unSelect(facets, facetName, itemId);
                        this.model.set("selection", selectionClone);  
                    }
                }
            }
        },

        render : function() {
            var selection = this.model.get("selection");
            var selFacets = [];
            var noData = true;

            if (selection) {
                 if (selection.facets) {
                    var facets = selection.facets;
                    for (i=0; i<facets.length; i++) {
                        var selectedItems = facets[i].selectedItems;
                            if (facets[i].dimension.type !== "CONTINUOUS") {
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    if (this.initialFacet == facets[i].id || !this.initialFacet) {
                                        noData = false;
                                        var obj = {};
                                        obj.facetItem = selectedItems[ix].value;
                                        obj.facetItemId = selectedItems[ix].id;
                                        if (facets[i].name) {
                                            obj.facetName = facets[i].name;
                                        } else {
                                            obj.facetName = facets[i].dimension.name;
                                        }
                                        obj.facetNameId = facets[i].id;
                                        selFacets.push(obj);
                                    }
                                }
                            }
                        }
                    }
                    if (this.facetList) {
                        var updatedFacets = [];
                        for (i=0; i<selFacets.length; i++) {
                            for (ix=0; ix<this.facetList.length; ix++) {
                                if (this.facetList[ix] === selFacets[i].facetNameId) {
                                    updatedFacets.push(selFacets[i]);
                                }
                            }
                        }
                        if (updatedFacets.length === 0) {
                            noData = true;
                        } else {
                            selFacets = updatedFacets;
                        }
                    }
                    if (this.avoidFacets) {
                        for (i=0; i<this.avoidFacets.length; i++) {
                            for (ix=0; ix<selFacets.length; ix++) {
                                if (this.avoidFacets[i] === selFacets[ix].facetNameId) {
                                    selFacets.splice(ix, 1);
                                }
                            }
                        }
                    }
                }
                this.$el.html(this.filterPanelTemplate({facets: selFacets, noData: noData, noDataMessage: this.noDataMessage}));
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
        facetList : null,
        avoidFacets : null,

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
            if (options.facetList) {
                this.facetList = options.facetList;
            }
            if (options.avoidFacets) {
                this.avoidFacets = options.avoidFacets;
            }

            this.model.on("change:selection", this.renderSelection, this);
            this.render();
            this.renderSelection();
        },
        
        render : function() {
            var me = this;

            this.$el.find(".btn-select-filter").multiselect({
                nonSelectedText: 'Select Filter',
                onChange: function(option) {
                    var filterValue = $(option).val();
                    me.filterStore.set("selectedFilter", filterValue);
                }
            });

        },

        renderSelection : function() {
            var me = this;

            if (this.model.get("selection")) {
                var selectedFilter = me.filterStore.get("selectedFilter");
                var facets = this.model.get("selection").facets;
                var items = [];
                for (i=0; i<facets.length; i++) {
                    var facet = facets[i];
                    if ((facet.dimension.type == "CATEGORICAL") || (facet.dimension.type == "SEGMENTS")) {
                        var selected = false;
                        if (facet.id == selectedFilter) {
                            selected = true;
                        }
                        var json = {
                            label : facet.name,
                            title : facet.name,
                            value : facet.id,
                            selected : selected
                        };
                        if (this.facetList) {
                            for (ix=0; ix<this.facetList.length; ix++) {
                                if (this.facetList[ix] === facet.id) {
                                    items.push(json);
                                }
                            }
                        }
                        else {
                            items.push(json);
                        }
                    }
                }
                if (this.avoidFacets) {
                    for (i=0; i<this.avoidFacets.length; i++) {
                        for (ix=0; ix<items.length; ix++) {
                            if (this.avoidFacets[i] === items[ix].value) {
                                items.splice(ix, 1);
                            }
                        }
                    }
                }

                var select = this.$el.find(".btn-select-filter");
                select.multiselect('dataprovider', items);
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
        panelButtons : true,
        filterPanel : null,
        filterSelected : null,
        nbPages : 10,
        buttonLabel : "Filters",
        noFiltersMessage : "No Filter Selected",
        initialFacet : null,
        facetList : null,
        singleSelect : null,
        parentCheck : null,

        initialize : function(options) {
            var me = this;

            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            // force using the non-blocking engine
            this.model.set("engineVersion", "2");
            
            if (options.filterPanel) {
                this.filterPanel = options.filterPanel;
            }
            if (options.filterSelected) {
                this.filterSelected = options.filterSelected;
            }
            if (! options.panelButtons) {
                this.panelButtons = options.panelButtons;
            }
            if (options.buttonLabel) {
                this.buttonLabel = options.buttonLabel;
            }
            if (options.noFiltersMessage) {
                this.noFiltersMessage = options.noFiltersMessage;
            }
            if (options.initialFacet) {
                this.initialFacet = options.initialFacet;
            }
            if (options.singleSelect) {
                this.singleSelect = options.singleSelect;
            }
            if (options.facetList) {
                this.facetList = options.facetList;
            }
            if (options.avoidFacets) {
                this.avoidFacets = options.avoidFacets;
            }
            if (options.parentCheck) {
                this.parentCheck = options.parentCheck;
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
                selectedFilter : me.initialFacet,  
                // current selected page
                pageIndex : 0,          
                // nb of items in a page
                pageSize : 10,          
                // nb of pages to display
                nbPages : 10,
                // current facet retrieved from API
                facet : null,           
                // index id of the first item of facet
                itemIndex : 0,
                // previous search query
                searchPrevious : null,
                // current search query
                search : null
            }
            );
            
            this.model.on("change:domains", function() {
                // reset
                me.filterStore.set({
                    "searchPrevious" : null,
                    "search" : null,
                    "facet" : null,
                    "pageIndex" : 0,
                    "itemIndex" : 0
                }, {
                    "silent" : true
                });
                me.setCurrentModel();
            }, this);
            
            this.model.on("change:selection", function() {
                // Change Button text which opens filter panel
                if (me.initialFacet) {
                    var selection = me.model.get("selection").facets;
                    var name;

                    for (i=0; i<selection.length; i++) {
                        if (selection[i].id === me.initialFacet) {
                            name = selection[i].name;
                        }
                    }
                    me.$el
                    .find(".squid_api_filters_categorical_button .name").text(name);
                }
                if (!me.currentModel) {
                    me.setCurrentModel();
                }
                if (me.currentModel !== me.model) {
                    var selectionClone = $.extend(true, {}, me.model.get("selection"));
                    me.currentModel.set("selection", selectionClone);
                }
            });
            
            this.filterStore.on("change:selectedFilter", function() {
                me.filterStore.set({
                    "searchPrevious" : null,
                    "search" : null,
                    "facet" : null,
                    "pageIndex" : 0,
                    "itemIndex" : 0
                }, {
                    "silent" : true
                });
                // reset the search box
                $(me.filterPanel).find("#searchbox").val("");
                // re-compute the filters
                squid_api.controller.facetjob.compute(me.currentModel);
                
            }, this);
            
            this.filterStore.on("change:search", function() {
                me.filterStore.set({"pageIndex": 0}, {"silent" : true});
                me.filterStore.trigger("change:pageIndex", me.filterStore);
            }, this);
            
            this.filterStore.on("change:pageIndex", function() {
                me.renderFacet(false);
            }, this);

            // listen for global status change
            squid_api.model.status.on('change:status', this.statusUpdate, this);

        },

        statusUpdate : function() {
            var running = (squid_api.model.status.get("status") != squid_api.model.status.STATUS_DONE);
            var disabled = null;

            if (this.parentCheck && this.currentModel.get("selection")) {
                var facetId = this.filterStore.get("selectedFilter");
                var currentModel = this.currentModel.get("selection").facets;
                var dimensionId;

                // Get Dimension ID of linked parent
                for (i=0; i<currentModel.length; i++) {
                    if ((currentModel[i].id === facetId) && (currentModel[i].dimension.parentId)) {
                        dimensionId = currentModel[i].dimension.parentId.dimensionId;
                    }
                }
                for (i=0; i<currentModel.length; i++) {
                    if ((currentModel[i].dimension.id.dimensionId === dimensionId) && (currentModel[i].selectedItems.length === 0)) {
                        disabled = true;
                    }
                }
            }
            

            if ((running) || (disabled)) {
                // computation is running : disable input
                this.$el.find("button").attr("disabled","disabled");
            } else {
                // computation is done : enable input
                this.$el.find("button").removeAttr("disabled");
            }
        },
        
        setCurrentModel : function() {
            if (this.panelButtons) {
                // duplicate the filters model
                this.currentModel = new squid_api.model.FiltersJob();
                var attributesClone = $.extend(true, {}, this.model.attributes);
                this.currentModel.set(attributesClone);
            } else {
                this.currentModel = this.model;
            }
            this.render();
            var me = this;
            this.currentModel.on("change", function() {
                    // force facet fetch (because the selection has changed)
                    me.renderFacet(true);
                }, this);
        },
        
        search : function(event) {
            this.filterStore.set("search", event.target.value);
        },

        render : function() {

            // Button which opens filter Panel
            this.$el
            .html("<button type='button' class='btn squid_api_filters_categorical_button' data-toggle='collapse' data-target="+ this.filterPanel + "><span class='name'>" + this.buttonLabel + "</span><span class='caret'></span></button>");

            // Print Base Filter Panel Layout
            $(this.filterPanel).addClass("squid_api_filters_categorical_filter_panel collapse").html(this.filterPanelTemplate({
                "data-target" : this.filterPanel,
                "panel-buttons" : this.panelButtons,
                "initialFacet" : this.initialFacet
            }));

            view = new squid_api.view.CategoricalSelectorView({
                el: $(this.filterPanel).find("#filter-selection"),
                model: this.currentModel,
                filterStore : this.filterStore,
                facetList : this.facetList,
                avoidFacets : this.avoidFacets
            });
            
            view2 = new squid_api.view.CategoricalFacetView({
                el: $(this.filterPanel).find("#filter-display-results"),
                model: this.filterStore,
                filters: this.currentModel,
                noFiltersMessage : this.noFiltersMessage,
                singleSelect : this.singleSelect
            });

            view3 = new squid_api.view.CategoricalPagingView({
                el: $(this.filterPanel).find("#pagination-container"),
                model: this.filterStore
            });

            if (this.panelButtons) {
                view4 = new squid_api.view.CategoricalSelectedView({
                    el: $(this.filterPanel).find("#selected"),
                    model: this.currentModel,
                    noDataMessage: this.noFiltersMessage,
                    initialFacet : this.initialFacet,
                    facetList : this.facetList,
                    avoidFacets : this.avoidFacets
                });
            }

            view5 = new squid_api.view.CategoricalSelectedView({
                el: this.filterSelected,
                model: this.model,
                noDataMessage: this.noFiltersMessage,
                initialFacet : this.initialFacet,
                facetList : this.facetList,
                avoidFacets : this.avoidFacets
            });

            var me = this;
            if (this.panelButtons) {
                $(this.filterPanel).find(".apply-selection").click(function() {
                    me.applySelection();
                });
                $(this.filterPanel).find(".cancel-selection").click(function() {
                    me.cancelSelection();
                });
            }
            
            $(this.filterPanel).find("#searchbox").keyup(_.bind(this.search, this));
        },

        events: {
            "click .squid_api_filters_categorical_button": function(item) {
                var className = 'opened';

                // Rotate Caret Position
                if ($(item.currentTarget).hasClass(className)) {
                    $(item.currentTarget).removeClass(className);
                } else {
                    $(item.currentTarget).addClass(className);
                }

                /**
                    With each categorical view being independent, obtain all
                    filter panels which don't matched the one being clicked 
                    & is currently open. Once identified, close it.
                **/

                var dataTarget = $(item.currentTarget).attr('data-target');
                var filterPanels = $('.squid_api_filters_categorical_filter_panel');
                var buttons = $('.squid_api_filters_categorical_button');

                for (i=0; i<filterPanels.length; i++) {
                    if ($(filterPanels[i]).hasClass('in') && ("#" + $(filterPanels[i]).attr('id')) !== dataTarget) {
                        var filterId = $(filterPanels[i]).attr('id');

                        // Close Panel
                        $(filterPanels[i]).removeClass('in');

                        // Remove Opened Class on Buttons
                        var target = $(filterPanels[i]).attr('id');
                        
                        for (ix=0; ix<buttons.length; ix++) {
                            if ($(buttons[ix]).attr('data-target') === '#' + target) {
                                $(buttons[ix]).removeClass(className);
                            }
                        }
                    }
                }
            }
        },
        
        /**
         * Render a facet.
         * Facet fetch may be triggered if true is passed as the fetch arg or if the requested paging index
         * requires more elements to be fetched.
         */
        renderFacet : function(fetch) {
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
                    var searchStale =  false;
                    var searchPrevious = this.filterStore.get("searchPrevious");
                    var search = this.filterStore.get("search");
                    if ((search !== null) && (search != searchPrevious)) {
                        searchStale = true;
                    }
                    if ((facet) && (facet.get("id") == selectedFacetId) && (!searchStale)) {
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
                    
                    if ((fetch === true) && (selectedFacetId)) {
                        // pre-fetch some pages of facet members
                        var facetJob = new squid_api.model.ProjectFacetJobFacet();
                        facetJob.set("id",this.currentModel.get("id"));
                        facetJob.set("oid", selectedFacetId);
                        if (startIndex) {
                            facetJob.addParameter("startIndex", startIndex);
                        }
                        if (pageSize) {
                            facetJob.addParameter("maxResults", (nbPages * pageSize));
                        }
                        if (search) {
                            facetJob.addParameter("filter", search);
                            this.filterStore.set("searchPrevious", search);
                        }
                        // get the results from API
                        facetJob.fetch({
                            error: function(model, response) {
                                console.error(response);
                            },
                            success: function(model, response) {
                                if (model.get("apiError") && (model.get("apiError") == "COMPUTING_IN_PROGRESS")) {
                                    // set a fake facet
                                    var f = new squid_api.model.ProjectFacetJobFacet();
                                    f.set("items", []);
                                    me.filterStore.set("facet", f);
                                } else {
                                    me.filterStore.set("itemIndex", startIndex);
                                    me.filterStore.set("facet", model);
                                }
                            }
                        });
                    } else {
                        // trigger facet render
                        me.filterStore.trigger("change:facet");
                    }
                }
            }
        },
        
        applySelection : function() {
            var selectionClone = $.extend(true, {}, this.currentModel.get("selection"));
            this.model.set("selection", selectionClone);
        },

        cancelSelection : function() {
            
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
                var name = this.model.get('name');
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

                if (dateAvailable) {
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
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['Backbone', 'squid_api'], factory);
    } else {
        root.squid_api.view.SegmentSelector = factory(root.Backbone, root.squid_api);
    }
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend( {

        model: null,
        segment : null,
        displayName : null,
        onCheck : null,
        template : squid_api.template.squid_api_filters_segment_widget,
        disabled : false,

        initialize : function(options) {
            this.segment = options.segment;
            this.displayName = options.displayName;
            if (options.onCheck) {
                this.onCheck = options.onCheck;
            } else {
                this.onCheck = "set";
            }
            
            if (this.model) {
                this.listenTo(this.model, 'change', this.render);
            }
            
            // listen for global status change
            this.listenTo(squid_api.model.status, 'change:status', this.render);
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
                if (this.disabled === false) {
                    this.disabled = true;
                    var segment = this.getSegment();
                    if (segment !== null) {
                        var selectedItems = segment.selectedItems;
                        var selectedItemsUpdated = [];
                        var isChecked = event.target.checked;
                        if (this.onCheck == "unset") {
                            isChecked = !isChecked;
                        }
                        for (var sIdx = 0; sIdx < selectedItems.length; sIdx++) {
                            var item = selectedItems[sIdx];
                            if (isChecked || (item.id !== this.segment)) {
                                selectedItemsUpdated.push(item);
                            }
                        }
                        if (isChecked) {
                            selectedItemsUpdated.push({"id" : this.segment, "type" : "v"});
                        }
                        segment.selectedItems = selectedItemsUpdated;
                        this.model.trigger("change:selection", this.model);
                    }
                }
            }
        },
        
        getSegment : function() {
            var segment = null;
            var selection = this.model.get('selection');
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    // lookup segment facet
                    for (var fIdx = 0; fIdx < facets.length; fIdx++) {
                        var facet = facets[fIdx];
                        if (facet.dimension.type == "SEGMENTS") {
                            // check if the segment is selected
                            segment = facet;
                        }
                    }
                }
            }
            return segment;
        },

        render : function() {
            var selHTML = null;
            var isSelected = false;
            if (this.model) {
                // check if the segment is selected
                var segment = this.getSegment();
                if (segment) {
                    var selectedItems = segment.selectedItems;
                    for (var sIdx = 0; sIdx < selectedItems.length; sIdx++) {
                        var item = selectedItems[sIdx];
                        if (item.id == this.segment) {
                            isSelected = true;
                        }
                    }
                }
                
                if (this.onCheck == "unset") {
                    isSelected = !isSelected;
                }
                
                // get HTML template and fill corresponding data
                selHTML = this.template({
                    "isSelected" : isSelected,
                    "displayName" : this.displayName,
                });
            }
            // render HTML
            if (selHTML) {
                this.$el.html(selHTML);
            } else {
                this.$el.html("");
            }
            
            // treat global status
            var running = (squid_api.model.status.get("status") != squid_api.model.status.STATUS_DONE);
            if (running === true) {
                // computation is running : disable input
                this.$el.find("input").attr("disabled","disabled");
            } else {
                // computation is done : enable input
                this.disabled = false;
                this.$el.find("input").removeAttr("disabled");
            }

            return this;
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
                            var facetName = facet2.name || facet2.dimension.name;
                            model.set({
                                facetId: facet2.id,
                                dimension: facet2.dimension,
                                items: facet2.items,
                                selectedItems: facet2.selectedItems,
                                name: facetName
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

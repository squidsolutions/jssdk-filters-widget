(function (root, factory) {
    root.squid_api.view.DateFilterSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_filter_selection_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        periodIdList : null,
        periodIndex: null,
        filters: null,

        initialize: function(options) {
            var me = this;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            if (options.filters) {
                this.filters = options.filters;
            } else {
                this.filters = squid_api.model.filters;
            }
            if (options.dimensionIdList) {
                this.periodIdList = options.dimensionIdList;
            }
            if (options.dimensionIndex !== null) {
                this.periodIndex = options.dimensionIndex;
            }
            if (options.config) {
                this.config = options.config;
            } else {
                this.config = squid_api.model.config;
            }
            
            this.listenTo(this.filters, "change:selection", this.render);
            this.listenTo(this.config, "change:period", this.render);
            this.listenTo(this.config, "change:domain", function() {
            	me.config.unset("period");
            	me.render();
            });
            
            // listen for global status change
            squid_api.model.status.on('change:status', this.statusUpdate, this);
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
            squid_api.utils.fetchModel("domain").then(function(domain) {
                var isMultiple = true;

                if (me.periodIndex !== null) {
                    isMultiple = false;
                }

                var jsonData = {"selAvailable" : true, "options" : [], "multiple" : isMultiple};

                // iterate through all filter facets
                var selection = me.filters.get("selection");
                if (selection) {
                    var facets = selection.facets;
                    if (facets) {
                        me.dimensions = [];
                        var dims = facets;
                        for (var i=0; i<facets.length; i++){
                            var facet = facets[i];
                            //Change for Period TODO
                            if (facet.dimension.valueType === "DATE" || (domain.get("_role") == "WRITE" && (facet.dimension.valueType === "DATE" || facet.dimension.valueType === "TIME"))){
                                // do not display boolean dimensions
                                    if (me.periodIdList) {
                                        // insert and sort
                                        var idx = me.periodIdList.indexOf(facet.dimension.oid);
                                        if (idx >= 0) {
                                            me.dimensions[idx] = facet;
                                        }
                                    } else {
                                        // default unordered behavior
                                        me.dimensions.push(facet);
                                    }

                                // avoid holes
                                if (!me.dimensions[i]) {
                                    me.dimensions[i] = null;
                                }
                                
                                // set period within config
                                if (! me.config.get("period")) {
                                	var obj = {"name":facet.dimension.name, "val":facet.id};
                                    me.config.set("period",obj);
                                }
                            }
                        }
                        var noneSelected = true;
                        for (var dimIdx=0; dimIdx<me.dimensions.length; dimIdx++) {
                            var facet1 = me.dimensions[dimIdx];
                            if (facet1) {
                                // add to the list
                                var name;
                                var selected = false;
                                if (facet1.name) {
                                    name = facet1.name;
                                } else {
                                    name = facet1.dimension.name;
                                }
                                if (me.config.get("period")) {
                                    if (me.config.get("period").val == facet1.id) {
                                        selected = true;
                                    }
                                }
                                var option = {"label" : name, "value" : facet1.id, "error" : me.dimensions[dimIdx].error, "selected" : selected};
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

                // check if empty
                if (jsonData.options.length === 0) {
                    jsonData.empty = true;
                }

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
                        var obj = {"name":facet.html(), "val":facet.val()};
                        me.config.set("period",obj);
                    }
                });

            // Remove Button Title Tag
            me.$el.find("button").removeAttr('title');
        });

        return this;
        }
    });

    return View;
}));

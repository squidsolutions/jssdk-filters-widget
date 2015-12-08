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
            this.listenTo(this.config, "change:domain", function(config) {
            	var selection = config.get("selection");
            	// set the filters with the date facets
            	if (selection) {
            	    var filteredSelection = {"facets" : []};
            	    if (selection.facets) {
            	        for (i=0; i<selection.facets.length; i++) {
            	            if (selection.facets[i].dimension.valueType == "DATE" && selection.facets[i].dimension.type == "CONTINUOUS" && selection.facets[i].dimension.id.domainId !== config.get("domain")) {
            	                filteredSelection.facets.push(selection.facets[i]);
            	            }
            	        }
            	        this.filters.set("selection", filteredSelection);
            	    }
            	}
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
            var domains = squid_api.model.project.get("domains");
            if (domains && this.config.get("domain")) {
                var domain = domains.findWhere({"oid" : this.config.get("domain")});
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
                        var period = me.config.get("period");
                        for (var dimIdx=0; dimIdx<facets.length; dimIdx++) {
                            var facet1 = facets[dimIdx];
                            if (facet1.dimension.valueType === "DATE" && facet1.dimension.type === "CONTINUOUS") {
                                // add to the list
                                var name;
                                var selected = false;
                                if (facet1.name) {
                                    name = facet1.name;
                                } else {
                                    name = facet1.dimension.name;
                                }
                                if (period) {
                                    if (period[domain.id]) {
                                        if (period[domain.id].id == facet1.id) {
                                            selected = true;
                                        }
                                    }
                                }
                                if (facet1.items) {
                                    if (! (facet1.items.length === 0 && facet1.done)) {
                                        var option = {"label" : name, "value" : facet1.id, "error" : facets[dimIdx].error, "selected" : selected};
                                        jsonData.options.push(option);
                                    }
                                }
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
                        var obj = {};
                        var period = me.config.get("period");
                        if (period) {
                            obj = _.clone(period);
                        }
                        obj[me.config.get("domain")] = {name: facet.html(), id: facet.val()};
                        me.config.set("period",obj);
                    }
                });

                // Remove Button Title Tag
                me.$el.find("button").removeAttr('title');
            }

        return this;
        }
    });

    return View;
}));

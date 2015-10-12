(function (root, factory) {
    root.squid_api.view.ContinuousFilterSelectorView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_continuous_selector_widget);

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

            if (!this.model) {
                this.model = squid_api.model.config;
            }

            this.render();
        },

        remove: function() {
            this.undelegateEvents();
            this.$el.empty();
            this.stopListening();
            return this;
        },

        changeFacetType: function(id) {
            var me = this;
            var model = new squid_api.model.DimensionModel();
            model.set("id", {"projectId":squid_api.model.config.get("project"), "domainId":squid_api.model.config.get("domain"), "dimensionId":id});
            model.fetch({
                success: function(model) {
                    model.set("type", "INDEX");
                    model.save(null, {
                        success: function () {
                            squid_api.model.config.trigger("change:domain", squid_api.model.config);
                        },
                        error: function(response) {
                            squid_api.model.status.set("error", response);
                        }
                    });
                }
            });
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
                            if (facet.dimension.type === "CONTINUOUS" || (domain.get("_role") == "WRITE" && (facet.dimension.valueType === "DATE" || facet.dimension.valueType === "TIME"))){
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
                            }
                        }
                        var noneSelected = true;
                        for (var dimIdx=0; dimIdx<me.dimensions.length; dimIdx++) {
                            var facet1 = me.dimensions[dimIdx];
                            if (facet1) {
                                // add to the list
                                var name;
                                if (facet1.name) {
                                    name = facet1.name;
                                } else {
                                    name = facet1.dimension.name;
                                }
                                var option = {"label" : name, "value" : facet1.id, "error" : me.dimensions[dimIdx].error};
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
                    buttonContainer: '<div class="squid-api-filters-widgets-period-selector-open" />',
                    buttonText: function(options, select) {
                        return 'Select Period';
                    },
                    onChange: function(facet) {
                        var value = facet.val();
                        var selection = me.filters.get("selection");
                        var updateFacets = [];
                        if (selection) {
                            var facets = selection.facets;
                            for (i=0; i<facets.length; i++) {
                                if (facets[i].dimension.type === "CONTINUOUS" && facets[i].id !== value) {
                                    updateFacets.push(facets[i].dimension.oid);
                                }
                            }
                            me.changeFacetType(updateFacets);
                        }
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

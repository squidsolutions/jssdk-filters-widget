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
        buttonLabel : null,
        noFiltersMessage : "No Filter Selected",
        initialFacet : null,
        initialDimension : null,
        facetList : null,
        singleSelect : null,
        parentCheck : null,
        ignoredFacets : null,
        mandatory : null,
        popup : null,

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
            if (options.initialDimension) {
                this.initialDimension = options.initialDimension;
            }
            if (options.singleSelect) {
                this.singleSelect = options.singleSelect;
            }
            if (options.facetList) {
                this.facetList = options.facetList;
            }
            if (options.ignoredFacets) {
                this.ignoredFacets = options.ignoredFacets;
            }
            if (options.parentCheck) {
                this.parentCheck = options.parentCheck;
            }
            if (options.mandatory) {
                this.mandatory = options.mandatory;
            }
            if (options.popup) {
                this.popup = options.popup;
            }
            if (options.status) {
            	this.status = options.status;
            } else {
            	this.status = squid_api.model.status;
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
                me.initialFacet = null;
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

            this.model.on("change:selection", function(filters) {
                // Display label of Button which opens filter panel
                if (me.initialFacet) {
                   var name = me.getButtonLabel();
                   if (name) {
                       me.$el.find(".squid_api_filters_categorical_button").html(name + "<span class='caret'></span>");
                   }
                } else {
                    // search Facet By DimensionId = function(selection, dimensionId) {
                    var dimensionId = me.initialDimension;
                    if (dimensionId) {
                        var facetId;
                        var facets = filters.get("selection").facets;
                        for (var i=0; i<facets.length; i++) {
                            var facet = facets[i];
                            if (facet.id.lastIndexOf(dimensionId) === (facet.id.length - dimensionId.length - 1)) {
                                facetId = facet.id;
                                break;
                            }
                        }
                        me.setInitialFacet(facetId);
                    }
                }
                if (!me.currentModel) {
                    me.setCurrentModel();
                }
                if (me.currentModel !== me.model) {
                    var selectionClone = $.extend(true, {}, filters.get("selection"));
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

        setInitialFacet : function(initialFacet) {
            this.initialFacet = initialFacet;
            this.filterStore.set({
                "selectedFilter": initialFacet,
                "searchPrevious" : null,
                "search" : null,
                "facet" : null,
                "pageIndex" : 0,
                "itemIndex" : 0
            }, {
                "silent" : true
            });
            // reset the search box
            $(this.filterPanel).find("#searchbox").val("");
            this.render();
        },

        setIgnoredFacets : function(ignoredFacets) {
            this.ignoredFacets = ignoredFacets;
            this.render();
        },

        statusUpdate : function() {
            var running = (this.status.get("status") != this.status.STATUS_DONE);
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
            var me = this;
            if (this.panelButtons) {
                // duplicate the filters model
                this.currentModel = new squid_api.model.FiltersJob();
                var attributesClone = $.extend(true, {}, this.model.attributes);
                this.currentModel.set(attributesClone);
                this.listenTo(this.currentModel, 'change', function() {
                    // force facet fetch (because the selection has changed)
                    me.renderFacet(true);
                });
            } else {
                if (this.currentModel !== this.model) {
                    this.currentModel = this.model;
                    this.listenTo(this.currentModel, 'change', function() {
                        // force facet fetch (because the selection has changed)
                        me.renderFacet(true);
                    });
                }
            }
            this.render();
        },

        search : function(event) {
            this.filterStore.set("search", event.target.value);
        },

        getButtonLabel : function() {
            // Button which opens filter Panel
            var buttonLabel = this.buttonLabel;
            if (!buttonLabel) {
                var selection = this.model.get("selection");
                if (this.initialFacet && selection) {
                    var facets = selection.facets;
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].id === this.initialFacet) {
                            buttonLabel = facets[i].name;
                        }
                    }
                } else {
                    buttonLabel = "Filters";
                }
            }
            return buttonLabel;
        },

        render : function() {

            // Button which opens filter Panel
            var buttonLabel = this.getButtonLabel();

            // Print Base Filter Panel Layout
            $(this.filterPanel).addClass("squid_api_filters_categorical_filter_panel").html(this.filterPanelTemplate({
                "popup" : this.popup,
                "data-target" : this.filterPanel,
                "panel-buttons" : this.panelButtons,
                "initialFacet" : this.initialFacet
            }));

            view = new squid_api.view.CategoricalSelectorView({
                el: $(this.filterPanel).find("#filter-selection"),
                model: this.currentModel,
                filterStore : this.filterStore,
                facetList : this.facetList,
                avoidFacets : this.ignoredFacets
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
                    initialDimension : this.initialDimension,
                    facetList : this.facetList,
                    avoidFacets : this.ignoredFacets,
                    mandatory : this.mandatory
                });
            }

            view5 = new squid_api.view.CategoricalSelectedView({
                el: this.filterSelected,
                model: this.model,
                noDataMessage: this.noFiltersMessage,
                initialFacet : this.initialFacet,
                initialDimension : this.initialDimension,
                facetList : this.facetList,
                avoidFacets : this.ignoredFacets,
                mandatory : this.mandatory
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

            if (this.popup) {
                if (buttonLabel) {
                    this.$el
                    .html("<button type='button' class='btn squid_api_filters_categorical_button'>" + buttonLabel + "<span class='caret'></span></button>");
                }
                $(this.filterPanel).dialog({
                    dialogClass: "squid-api-filters-widget-popup",
                    autoOpen: false,
                    position: {
                        my: "left top", at: "left bottom", of: this.$el.find("button")
                    },
                    clickOutside: true, // clicking outside the dialog will close it
                    clickOutsideTrigger: this.$el.find("button"), // Element (id or class) that triggers the dialog opening
                });
                // Click Event for filter panel button
                this.$el.find("button").off("click").on("click", function() {
                    if ($(me.filterPanel).dialog("isOpen")) {
                        $(me.filterPanel).dialog( "close" );
                    } else {
                        $(me.filterPanel).dialog( "open" );
                    }
                });
            } else {
                if (buttonLabel) {
                    this.$el
                    .html("<button type='button' class='btn squid_api_filters_categorical_button' data-toggle='collapse' data-target="+ this.filterPanel + "><span class='name'>" + buttonLabel + "</span><span class='caret'></span></button>");
                }
                $(this.filterPanel).addClass("collapse");
            }
        },

        events: {
            "click .squid_api_filters_categorical_button": function(item) {
                var className = 'opened';

                // Rotate Caret Position
                if (! this.popup) {
                    if ($(item.currentTarget).hasClass(className)) {
                        $(item.currentTarget).removeClass(className);
                    } else {
                        $(item.currentTarget).addClass(className);
                    }
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

                    if ((fetch === true) && (selectedFacetId) && (this.currentModel.get("id").facetJobId)) {
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
                                // set error message if exists
                                var errorMessage = model.get("errorMessage");
                                if (model.get("error")) {
                                    if (errorMessage) {
                                        squid_api.model.status.set("message", errorMessage);
                                    }
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

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
                // Get selected Filter & Item
                var selectedFilter = this.model.get("selectedFilter");
                var selectedItem = $(item.currentTarget).attr("data-attr");

                // Get clicked filter value & create object
                var value = $(item.currentTarget).attr("data-id");
                var type = $(item.currentTarget).attr("data-type");
                var id = $(item.currentTarget).attr("data-id");

                // Get selected Filters
                var facets = this.filters.get("selection").facets;

                // Set up new object to update facet model
                var selection = {facets: []};

                if ($(item.currentTarget).attr("selected")) {
                    // Style manipulation
                    $(item.currentTarget).removeClass("active");
                    $(item.currentTarget).removeAttr("selected");

                    // Remove selected item from facet 
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].id === selectedFilter) {
                            var selectedItems = facets[i].selectedItems;
                            var updatedSelectedItems = [];
                            for (ix=0; ix<selectedItems.length; ix++) {
                                if (id !== selectedItems[ix].id) {
                                    var obj = {};
                                    obj.id = selectedItems[ix].id;
                                    obj.type = selectedItems[ix].type;
                                    obj.value = selectedItems[ix].value;
                                    updatedSelectedItems.push(obj);
                                }
                            }
                            facets[i].selectedItems = updatedSelectedItems;
                        }
                    }
                } else {
                    // style manipulation
                    $(item.currentTarget).addClass("active");
                    $(item.currentTarget).attr("selected", true);
                    
                    // set up object to add a new selected item
                    var selectObj = {id : id, type : type, value : value};

                    // Push new filters to selectedItems array
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].id === selectedFilter) {
                            facets[i].selectedItems.push(selectObj);
                        }
                    }
                }

                // Set the updated filters model
                selection.facets = facets;
                this.filters.set("selection", selection);
                this.filters.trigger("change");
            },
        },

        render : function() {
            var facet = this.model.get("facet");
            if (facet) {
                var facetItems = facet.get("items");
                var pageIndex = this.model.get("pageIndex");
                var pageSize = this.model.get("pageSize");
                var itemIndex = this.model.get("itemIndex");

                if (!facetItems) {
                    this.$el.html("<span class='no-items'>Computing in progress</span>");
                } else if (facetItems.length === 0) {
                    this.$el.html("<span class='no-items'>No Items</span>");
                } else {
                    // display current facet members
                    var startIndex = (pageIndex * pageSize) - itemIndex;
                    var endIndex = startIndex + pageSize;
                    // Store selected Filter
                    var selectedFilter = this.model.get("selectedFilter");
                    // Store facets
                    var facets = this.filters.get("selection").facets;
                    if (endIndex > facetItems.length) {
                        endIndex = facetItems.length;
                    }
                    // Store Items to Display
                    var items = [];
                    for (ix=startIndex; ix<endIndex; ix++) {
                        items.push(facetItems[ix]);
                    }
                    
                    // Manipulate items to add a selected or not attribute
                    var updatedItems = [];
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

                    if (items.length>0) {
                        var html = squid_api.template.squid_api_filters_categorical_facet_view({
                            "items" : updatedItems
                        });
                        this.$el.html(html);
                    } else {
                        // computing in progress
                    }
                }
            } else {
                this.$el.html("<span class='no-items'>No Dimension Selected</span>");
            }
        }

    });

    return View;
}));

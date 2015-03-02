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

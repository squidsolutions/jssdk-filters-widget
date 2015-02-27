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

            this.model.on("change", this.render, this);
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
                    var id = parseInt($(item.currentTarget).attr("data-id"));
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
                }
            },
        },

        render : function() {
            var facetItems = this.model.get("items");
            this.$el.html("");
            var toAppend = "";
            if (facetItems.length === 0) {
                this.$el.append("No items");
            } else {
                // display current facet members
                toAppend += "<ul>";
                for (ix=0; ix<facetItems.length; ix++) {
                    if (ix % 12 === 0 && ix !== 0) {
                        toAppend += "</ul><ul>";
                    }
                    toAppend += "<li data-value=" + facetItems[ix].value + " data-type=" + facetItems[ix].type + " data-id=" + facetItems[ix].id + "\"><i class='fa fa-square-o'></i><span>" + facetItems[ix].value + "</span></li>";
                }
                toAppend += "</ul>";
            }
            this.$el.append(toAppend);
        }

    });

    return View;
}));

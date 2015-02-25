(function (root, factory) {
    root.squid_api.view.CategoricalDisplayView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
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
            this.filterStore.on("change", this.render, this);
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
                }
            },
        },

        render : function() {
            if (this.model.get("status") === "DONE") {
                if (this.model.get("selection")) {
                    var facets = this.model.get("selection").facets;
                    var selectedFacet = this.filterStore.get("selectedFilter");
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].dimension.id.dimensionId === selectedFacet) {
                            var facetItems = facets[i].items;
                            this.$el.html("");
                            var toAppend = "";
                            if (facetItems.length === 0) {
                                this.$el.append("No Items Available");
                            } else {
                                toAppend += "<ul>";
                                for (ix=0; ix<facetItems.length; ix++) {
                                    if (ix % 12 === 0 && ix !== 0) {
                                        toAppend += "</ul><ul>";
                                    }
                                    toAppend += "<li data-attr=" + facetItems[ix].id + "><i class='fa fa-square-o'></i><span>" + facetItems[ix].value + "</span></li>";
                                }
                                toAppend += "</ul>";
                                this.$el.append(toAppend);
                            }
                        }
                    }
                }
            }
        }
    });

    return View;
}));

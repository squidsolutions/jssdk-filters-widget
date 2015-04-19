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
        template : squid_api.template.squid_api_filters_segment_widget,

        initialize : function(options) {
            if (this.model) {
                this.model.on('change', this.render, this);
            }
            this.segment = options.segment;
            this.displayName = options.displayName;
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
                var segment = this.getSegment();
                if (segment !== null) {
                    var selectedItems = segment.selectedItems;
                    var selectedItemsUpdated = [];
                    var isChecked = event.target.checked;
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

            return this;
        }

    });

    return View;
}));
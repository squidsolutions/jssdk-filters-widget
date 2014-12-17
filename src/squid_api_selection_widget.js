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

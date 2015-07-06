$.widget( "ui.dialog", $.ui.dialog, {
    options: {
        clickOutside: false, // Determine if clicking outside the dialog shall close it
        clickOutsideTrigger: "", // Element (id or class) that triggers the dialog opening
        parentContains: ".squid-api-action",
    },
    open: function() {
        var clickOutsideTriggerEl = $( this.options.clickOutsideTrigger );
        var parentContains = this.options.parentContains;
        var me = this;
        if (this.options.clickOutside) {
            // Add document wide click handler for the current dialog namespace
            $(document).off( "click.ui.dialogClickOutside" + me.eventNamespace).on( "click.ui.dialogClickOutside" + me.eventNamespace, function(event) {
                var openClass = "open-dialog";
                if (me.opener.hasClass(openClass)) {
                    var item1 = $(event.target).closest($(clickOutsideTriggerEl));
                    var item2 = $(event.target).closest($(me.uiDialog));
                    var item3 = $(event.target).parents(parentContains);
                    if ((item1.length === 0 && item2.length === 0 && item3.length === 0)) {
                        me.close();
                        me.opener.removeClass(openClass);
                    } else if ($(event.target).hasClass(openClass)) {
                        me.close();
                        $(event.target).removeClass(openClass);
                    }
                } else {
                    $(event.target).addClass(openClass);
                }
            });
        }
        this._super(); // Invoke parent open method
    },
    close: function() {
        var me = this;
        // Remove global click handler for current dialog
        $(document).off( "click.ui.dialogClickOutside" + me.eventNamespace );
        this._super(); // Invoke parent's close method
    }
});

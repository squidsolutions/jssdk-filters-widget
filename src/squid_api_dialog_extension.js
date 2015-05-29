$.widget( "ui.dialog", $.ui.dialog, {
  options: {
    clickOutside: false, // Determine if clicking outside the dialog shall close it
    clickOutsideTrigger: "", // Element (id or class) that triggers the dialog opening
    facetResultsWrapper: ".squid-api-categorical-facet-view" // Set facet view wrapper to prevent close from internal facet view
  },

  open: function() {
    var clickOutsideTriggerEl = $( this.options.clickOutsideTrigger );
    var that = this;
    var facetResultsWrapper = $( this.options.facetResultsWrapper );
    
    if (this.options.clickOutside){
      // Add document wide click handler for the current dialog namespace
      $(document).on( "click.ui.dialogClickOutside" + that.eventNamespace, function(event){
        // Provide an exception rule with .squid-api-action to not 
        if ( $(event.target).closest($(clickOutsideTriggerEl)).length === 0 && $(event.target).closest($(that.uiDialog)).length === 0 && $(event.target).parents(".squid-api-action").length === 0){
          that.close();
        }
      });
    }
    
    this._super(); // Invoke parent open method
  },
  
  close: function() {
    var that = this;
    
    // Remove global click handler for current dialog
    $(document).off( "click.ui.dialogClickOutside" + that.eventNamespace );
    
    this._super(); // Invoke parent's close method
  },  

});
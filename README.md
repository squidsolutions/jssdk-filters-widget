jssdk-filters-widget
==================

A collection of widgets to manage data filtering (aka facets).

## SegmentSelector
* A checkbox widget which allows the modification of a segment facet. Either replace one facet with another, or delete it. *
* options :
  * el : dom element which renders widget (string)
  * model : api.model.filters (object)
  * segment : segment id to be used (string)
  * replaceWith : segment id to be replaced with (string)
  * onCheck : reverses the checkbox state (string)
    * options : "unset"
    
## Date Selection Widget
* A widget which allows the user to select a time range within the active period facet *
* options :
  * el : dom element which renders widget (string)
  * model : api.model.filters (object)
  * monthsOnlyDisplay : only display month names within the selection (boolean : default false)
  * config : api.model.config (object)

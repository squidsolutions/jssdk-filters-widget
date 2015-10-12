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
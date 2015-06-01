jssdk-filters-widget
==================

A collection of widgets to manage data filtering (aka facets).

## CategoricalView
*A widget which allows the modification of categorical based facets via an accordion*
* options :
  * el : Dom element which renders the open / close filter panel button
  * filterPanel : Dom element which renders the filter panel
  * filterSelected : Dom element which renders selected facets
  * panelButtons : if set to false, the filter panel will not show internal accordion buttons - (Automatically added to the selection upon facet click)
  * buttonLabel : the text displayed on the open / close filter panel button
  * noFiltersMessage : text displayed when no facets are selected
  * autoShow : automatically display the facet's categorical selection when the popup / accordion is opened
var crossTabMultiSelect={};crossTabMultiSelect.ROW_GROUP="rowGroup",crossTabMultiSelect.COL_GROUP="colGroupHeaderRow",crossTabMultiSelect.ROW_GROUP_LEVEL="rowGroupLevel_",crossTabMultiSelect.COl_GROUP_LEVEL="colGroupLevel_",crossTabMultiSelect.selectedCells=[],crossTabMultiSelect.selectXtabGroupMember=function(e,t){e=$(e);var a=null,l=null,s=null,r=null,i=new RegExp("\\d+"),c="SPAN"==e.tagName&&e.parentNode||e;c||(a=null);var d=$(c).identify(),o=i.exec(d)[0];if(d.startsWith(crossTabMultiSelect.ROW_GROUP)?(a=crossTabMultiSelect.ROW_GROUP_LEVEL+o,r=crossTabMultiSelect.ROW_GROUP,l="row"):d.startsWith(crossTabMultiSelect.COL_GROUP)&&(a=crossTabMultiSelect.COl_GROUP_LEVEL+o,r=crossTabMultiSelect.COL_GROUP,l="column"),a){var u=null,b=null,n=e.readAttribute("data-path"),S=AdHocCrosstab.getTopBottomFilter(),M=S&&S.path===n?S.type:"none";if(s={id:e.identify(),path:n,value:e.readAttribute("data-fieldValue"),isSummary:e.readAttribute("data-isSummaryHeader"),isSliceable:"true"===e.readAttribute("data-sliceable"),axis:l,isInner:e.hasClassName("inner"),sorting:e.readAttribute("data-sorting"),level:e.readAttribute("data-levelname"),name:e.readAttribute("data-levelname"),topBottomFilter:M},b=isShiftHeld(t),selectionCategory.area==a&&b){i=new RegExp(/\d+$/);var m=selObjects[selObjects.length-1];if(m){var O=parseInt(i.exec(m.id)),T=parseInt(i.exec(e.id)),v=Math.abs(T-O),A=T>O;if(crossTabMultiSelect.isObjectAlreadySelected(s))adhocDesigner.removeSelectedObject(s);else for(var C=0;v>=C;C++){var f=A?O+C:O-C,p=$(r+"_"+o+"_"+f);if(p){var g={id:p.identify(),path:p.readAttribute("data-path"),value:p.readAttribute("data-fieldValue"),isSummary:p.readAttribute("data-isSummaryHeader"),isSliceable:"true"===p.readAttribute("data-sliceable"),axis:l,isInner:p.hasClassName("inner"),sorting:p.readAttribute("data-sorting"),level:p.readAttribute("data-levelname"),name:p.readAttribute("data-levelname"),topBottomFilter:M};designerBase.addToSelected(g),crossTabMultiSelect.activateSelectedXtabCells()}}selectionCategory.area=a}}else"false"===$(e).getAttribute("data-isSummaryHeader")?(u=isMetaHeld(t),s={id:e.identify(),path:e.readAttribute("data-path"),value:e.readAttribute("data-fieldValue"),isSummary:e.readAttribute("data-isSummaryHeader"),isSliceable:"true"===e.readAttribute("data-sliceable"),axis:l,isInner:e.hasClassName("inner"),sorting:e.readAttribute("data-sorting"),level:e.readAttribute("data-levelname"),name:e.readAttribute("data-levelname"),topBottomFilter:M},crossTabMultiSelect.isObjectAlreadySelected(s)&&u?crossTabMultiSelect.removeSelectedObject(s):((!u||designerBase.shouldClearSelections(t,a))&&(crossTabMultiSelect.deselectAllGroupMembers(t),designerBase.unSelectAll()),designerBase.addToSelected(s),crossTabMultiSelect.activateSelectedXtabCells(),selectionCategory.area=a)):isRightClick(t)&&(crossTabMultiSelect.isObjectAlreadySelected(s)||(crossTabMultiSelect.deselectAllGroupMembers(),designerBase.unSelectAll(),designerBase.addToSelected(s)));actionModel.setSelected(selObjects)}},crossTabMultiSelect.selectXtabGroupLabel=function(e){designerBase.unSelectAll(),selectionCategory.area="column"===e.axis?designerBase.COLUMN_GROUP_MENU_LEVEL:designerBase.ROW_GROUP_MENU_LEVEL,actionModel.setSelected([e]),designerBase.addToSelected(e)},crossTabMultiSelect.isObjectAlreadySelected=function(e){return designerBase.isObjectInSelection(e,"id")},crossTabMultiSelect.removeSelectedObject=function(e){crossTabMultiSelect.deactivateXtabCell(e);for(var t=null,a=0;a<selObjects.length;a++)if(selObjects[a].id==e.id){t=a;break}selObjects=selObjects.without(selObjects[t])},crossTabMultiSelect.activateSelectedXtabCells=function(){selObjects.each(function(e){crossTabMultiSelect.activateXtabCell(e)})},crossTabMultiSelect.activateXtabCell=function(e){if(e&&e.id){var t=e.id;(t.startsWith("colGroupHeaderRow")||t.startsWith("rowGroup"))&&$(t)&&($(t).addClassName("selected"),crossTabMultiSelect.selectedCells.push(e))}},crossTabMultiSelect.deactivateXtabCell=function(e){if(e&&e.id){var t=e.id;(t.startsWith("colGroupHeaderRow")||t.startsWith("rowGroup"))&&$(t)&&($(t).removeClassName("selected"),crossTabMultiSelect.selectedCells.without(e))}},crossTabMultiSelect.deactivateSelectedXtabCells=function(){selObjects.each(function(e){crossTabMultiSelect.deactivateXtabCell(e)})},crossTabMultiSelect.deselectAllGroupMembers=function(){crossTabMultiSelect.selectedCells.each(function(e){crossTabMultiSelect.deactivateXtabCell(e)}),crossTabMultiSelect.selectedCells.clear()};
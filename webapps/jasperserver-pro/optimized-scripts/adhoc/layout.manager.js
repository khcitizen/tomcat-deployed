define(["require","jquery","underscore","common/util/classUtil","common/util/xssUtil","common/util/browserDetection","bundle!adhoc_messages","components.dialogs","backbone","adhoc/designer/aggregateFieldLabelFactory","adhoc/designer/VisualizationType","text!adhoc/template/tableLayoutManagerTemplate.htm","text!adhoc/template/crosstabLayoutManagerTemplate.htm","prototype"],function(e){function t(e){return r.inject(e,function(e,t){return e.concat(i(t))},[])}function i(e,t){var n=t||[];if(!e.childs||0===e.childs.length)return n.push(e),n;for(var a=0;a<e.childs.length;a++)i(e.childs[a],n);return n}function n(e){return Draggable._dragging[e.jquery?e[0]:e]}function a(e){return e.map(function(e){return e.toPresentation()})}var s=e("jquery"),r=e("underscore"),o=e("common/util/classUtil"),l=e("common/util/xssUtil"),m=e("common/util/browserDetection").isIE,d=e("bundle!adhoc_messages"),u=e("components.dialogs"),h=e("backbone"),c=e("adhoc/designer/aggregateFieldLabelFactory"),p=e("adhoc/designer/VisualizationType"),f=e("text!adhoc/template/tableLayoutManagerTemplate.htm"),v=e("text!adhoc/template/crosstabLayoutManagerTemplate.htm");e("prototype");var x,g=l.unescape,b=null,y=o.extend({axes:{},template:null,constructor:function(e){this.initProperties(e.common),this.initialized&&(this.initModeSpecificBehavior(this.mode),this.initAxes(e.axes),this.initEventListeners())},initProperties:function(e){e&&(this.measuresGroupId=e.measuresGroupId,this.isOlapMode=!!e.isOlapMode,this.mode=e.mode,this.element=s("#"+e.id),this.initialized=!!this.element[0])},initModeSpecificBehavior:function(e){r.extend(this,b[e]),this.AxisModel=e==p.table?D:I},initAxes:function(e){r.each(e,function(e){var t=r.clone(e);t.element=s("#"+t.elementId),this.axes[t.elementId]=t,this.setAxisModel(t,new this.AxisModel([],{parse:!0}))},this)},getTemplate:function(){if(null===this.template){var e=this.mode==p.table?f:v;this.template=r.template(e,null,{variable:"data"})}return this.template},render:function(e,t){this.initialized&&(r.each(this.axes,function(i){t||this.setAxisModel(i,new this.AxisModel(e[i.name],{parse:!0})),s(i.element).html(this.getTemplate()(i.model.toPresentation())),this.createSortable(i.element[0]),this.createMeasuresSortable(i.element[0])},this),Draggables.removeObserver(this.element[0]),Draggables.addObserver(new M(this.element[0],this.onMove)))},setAxisModel:function(e,t){e.model=t},initEventListeners:function(){r.bindAll(this,"onContextMenu","onRemove","onAdd","onMove","onMeasureReorder"),document.stopObserving(layoutModule.ELEMENT_CONTEXTMENU,x||s.noop),document.observe(layoutModule.ELEMENT_CONTEXTMENU,this.onContextMenu),x=this.onContextMenu;var e=isSupportsTouch()?"touchend":"mouseup";s(this.element).undelegate("span.remove",e),s(this.element).delegate("span.remove",e,this.onRemove)},onContextMenu:function(e){var t=this,i=s(e.memo.node).closest("li.button"),n=i.hasClass("meazure")||i.hasClass("member"),a=i.closest(n?"li.measure":"li.dimension");if(i){var o=s(i).closest("ul.sortable").attr("id"),l=this.axes[o];if(l){Event.stop(e);var m=g(i.attr(this.nameAttr)),d=l.model.findQueryField({name:m});this.element.trigger("lm:contextMenu",r.extend(e.memo,{extra:{axis:l.name,axisId:o,name:m,fieldName:d.get("fieldName"),dimensionId:g(i.attr("data-dimension")),level:g(i.attr("data-level")),index:i.index(),groupIndex:a.index(),isMeasure:n,allLevels:i.siblings().addBack().map(function(){return g(s(this).attr(t.nameAttr))}).get()}}))}}},onRemove:function(e){var t=s(e.target).closest("li");if(!n(t)){var i=t.index(),a=this.axes[t.closest("ul.sortable").attr("id")],r=g(t.attr("data-dimension"));this.element.trigger("lm:removeItem",{axis:a.name,index:i,item:{level:g(t.attr("data-level")),dimensionId:r,isMeasure:this.measuresGroupId===r}})}},onAdd:function(e){var t=e.node;if(t){var i,n=s(e).index(),a=e.nodes||[t],o=this.axes[s(e).closest("ul").attr("id")],l=this[o.name].validateAdd,m=[];return i=this.filter(a,o),l&&!l.call(this,i,n,o.name,m)?(!r.isEmpty(m)&&u.systemConfirm.show(m.join("</br>"),5e3),void this.render(this.axes,!0)):void this.add(i,n,o.name)}},add:function(e,t,i){var n;if(!r.isEmpty(e))if(1===e.length){n=e[0];var a=n.param.extra||n.param;this.element.trigger("lm:addItem",{axis:i,dimensionId:a.dimensionId,level:a.id,index:t,hierarchyName:a.hierarchyName,isMeasure:a.isMeasure})}else this.element.trigger("lm:addItems",{axis:i,levels:r.pluck(e,"param"),index:t})},onMove:function(e,t,i,n,a,o){var l=s(e.element),m=this.axes[i],d=this.axes[n],h=this[d.name].validateMove,c=[];if(!t||a!==o)return t||!h||h.call(this,m,d,l,c)?void this.element.trigger("lm:"+(t?"moveItem":"switchItem"),{axis:d.name,item:g(l.attr(this.moveAttr)),from:a,to:o}):(!r.isEmpty(c)&&u.systemConfirm.show(c.join("</br>"),5e3),void this.render(this.axes,!0))},onMeasureReorder:function(e,t){var i=s(t.element);this.element.trigger("lm:measureReorder",{measure:g(i.attr("data-level")),to:i.index()})},createSortable:function(e){Sortable.create(e,{delay:m()?200:0,constraint:!1,overlap:"horizontal",containment:r(this.axes).keys(),dropOnEmpty:!0,accept:["measure","dimension","meazure","dimenzion"],onDrop:this.onAdd}),Draggables.removeObserver(e)},createMeasuresSortable:function(e){var t=s("li.measure > ul.members",e);if(0!==t.length)return 0===t.find("li.member").length?void Sortable.destroy(t[0]):void Sortable.create(t[0],{delay:m()?200:0,constraint:!1,overlap:"horizontal",onUpdate:this.onMeasureReorder})}}),M=o.extend({constructor:function(e,t){this.element=$(e),this.observer=t,this.axes=["olap_rows","olap_columns"]},onStart:function(e,t){this.axis=this.getAxis(t),this.from=s(t.element).index(),m()&&(this.changedElement=t.element,this.changedElement&&(this.changedElement.setStyle({display:"inline-block"}),this.changedElement.hasClassName("measure")&&this.changedElement.setStyle({padding:"0px"})))},onEnd:function(e,t){if(this.axis){var i=this.getAxis(t);if(i&&-1!==this.axes.indexOf(i.id)){Sortable.unmark();var n=this.axis.id===i.id,a=s(t.element).index();this.observer(t,n,this.axis.id,i.id,this.from,a),m()&&this.changedElement&&(this.changedElement.style.removeAttribute("display"),this.changedElement.style.removeAttribute("padding"))}}},getAxis:function(e){return e.element.up("ul")}});b={table:{nameAttr:"data-name",moveAttr:"data-name",filter:function(e,i){return e=t(e),"column"===i.name?e:r.reject(e,function(e){var t=e.param.extra;return"_spacer"!==t.name&&i.model.findWhere({fieldName:t.fieldName})})},group:{validateAdd:function(e,t,i,n){return 0===e.length?(n&&n.push(d.ADH_1001_ERROR_ALREADY_IN_USE),!1):r.any(e,function(e){return e.param.extra.isMeasure||"_spacer"===e.param.extra.id})?(n&&n.push(d.ADH_1001_ERROR_ADD_TO_GROUPS),!1):!0},validateMove:function(e,t,i,n){if(i.hasClass("meazure"))return n&&n.push(d.ADH_1001_ERROR_ADD_TO_GROUPS),!1;var a=g(i.attr("data-fieldName"));return t.model.findWhere({fieldName:a})?(n&&n.push(d.ADH_1001_ERROR_ALREADY_IN_GROUP),!1):!0}},column:{validateAdd:function(e,t,i,n){return 0===e.length?(n&&n.push(d.ADH_1001_ERROR_ALREADY_IN_USE),!1):!0}}},crosstab:{nameAttr:"data-level",moveAttr:"data-dimension",filter:function(e){e=t(this.isOlapMode?e.slice(0,1):e);var i=!this.isOlapMode&&r.any(e,function(e){return e.param.extra&&e.param.extra.isMeasure});return i?e:r.reject(e,function(e){var t=e.param.extra,i={dimensionName:t.dimensionId};return i[this.isOlapMode?"name":"fieldName"]=t.id,!this.isDate(t)&&"_spacer"!==t.name&&r.any(this.axes,function(e){return e.model.findQueryField(i)})},this)},isDate:function(e){return"Timestamp"===e.type||"Date"===e.type||"Time"===e.type},row:{validateMove:function(e,t,i,n){return!(t.isDependent&&1==e.model.length)},validateAdd:function(e,t,i,n){if(r.isEmpty(e))return n&&n.push(d.ADH_1215_FIELD_IN_USE),!1;var a=this,s=e[0].param.extra,o=this.axes.olap_columns.model;return!(r.isEmpty(e)||this.axes.olap_rows.isDependent&&(o.isEmpty()||s.hierarchyName&&1===o.length&&o.at(0).name===s.dimensionId)||localContext.showAddHierarchyConfirm(s.hierarchyName,s.dimensionId,function(){a.add(e,t,i)}))}},column:{validateAdd:function(e,t,i,n){if(r.isEmpty(e))return n&&n.push(d.ADH_1215_FIELD_IN_USE),!1;var a=this,s=e[0].param.extra;return!localContext.showAddHierarchyConfirm(s.hierarchyName,s.dimensionId,function(){a.add(e,t,i)})}}}};var _=h.Model.extend({parse:function(e){var t=e.measure||!!e.isSpacer,i="_null"!==e.currentDisplayName?e.currentDisplayName:null;return{name:e.name,fieldName:e.fieldName,label:e.isSpacer?d.ADH_120_SPACER:i||e.name,isSpacer:!!e.isSpacer,isMeasure:t}},toPresentation:function(){var e=this.toJSON();return e.cid=r.uniqueId("field_"),e.itemClass=e.isMeasure?"meazure":"dimenzion",e}}),A=h.Model.extend({parse:function(e,t){return{name:e.name,fieldName:e.fieldName,label:e.display?e.display:e.name,isMeasure:!1,dimensionName:t.collection.name}},toPresentation:function(){var e=this.toJSON();return e.cid=r.uniqueId("level_"),e.levelClass="level",e}}),E=h.Model.extend({parse:function(e,t){return{name:e.name,fieldName:e.fieldName,label:c.getLabel(e),isMeasure:!0,dimensionName:t.collection.name}},toPresentation:function(){var e=this.toJSON();return e.cid=r.uniqueId("measure_"),e.levelClass="member",e}}),N=h.Collection.extend({model:function(e,t){return t=r.defaults(t,{parse:!0}),t.collection.isMeasure?new E(e,t):new A(e,t)},toPresentation:function(){var e=a(this);return{levels:e,name:this.name,liClass:this.isMeasure?"measure":"dimension",ulClass:this.isMeasure?"members":"levels",measureHandle:this.isMeasure?"handle":""}},parse:function(e){var t=[];this.name=e.name;for(var i=0;i<e.levels.length;i++){var n=e.levels[i];if(n.visible&&!(n.recursiveLevelNumber>0))if(r.isEmpty(n.members))t.push(n);else{this.isMeasure=!0;for(var a=0;a<n.members.length;a++){var s=n.members[a];s.isSpacer!==!0&&t.push(s)}}}return t}}),D=h.Collection.extend({model:_,toPresentation:function(){return a(this)},findQueryField:function(e){return this.findWhere(e)}}),I=h.Collection.extend({model:N,toPresentation:function(){return a(this)},findQueryField:function(e){var t=null;return this.any(function(i){return t=i.findWhere(e)}),t}});return y});
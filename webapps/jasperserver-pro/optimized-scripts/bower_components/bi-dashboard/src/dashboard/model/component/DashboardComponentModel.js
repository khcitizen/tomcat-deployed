define(["require","exports","module","backbone","underscore","jquery","backbone.validation","bundle!DashboardBundle","common/util/i18nMessage","../../enum/dashboardComponentTypes","bi/control/enum/substitutionConstants","logger","../parameters/ParameterParser","../parameters/DashboardParametersModel","../../dashboardSettings"],function(e,t,r){"use strict";function i(e,t){var r,i,n=e.length;for(r=0;n>r;r++)if(i=t(e[r]))return i}function n(e){return e=o.trim(e),e.match(I)?e.replace(P,"_"):null}function a(e,t,r){return o.trim(e)+(t>1?(r||"_")+t:"")}var s=e("backbone"),o=e("underscore"),u=e("jquery"),d=e("backbone.validation"),h=e("bundle!DashboardBundle"),c=e("common/util/i18nMessage").extend({bundle:h}),l=e("../../enum/dashboardComponentTypes"),m=e("bi/control/enum/substitutionConstants"),p=e("logger").register(r),f=e("../parameters/ParameterParser"),g=e("../parameters/DashboardParametersModel"),b=e("../../dashboardSettings"),I=new RegExp(b.DASHLET_ID_VALID_WORD_PATTERN),P=new RegExp(b.DASHLET_ID_BLACK_LIST_CHARS_PATTERN,"g"),v=s.Model.extend({defaults:{id:void 0,type:void 0,name:void 0,resource:void 0,selected:!1,interactive:!0},validation:{name:[{required:!0,msg:new c("dashboard.component.error.name.required")},{fn:function(e,t,r){return this.collection.find(function(t){return t.get("name")==e&&t.get("id")!==r.id})},msg:new c("dashboard.component.error.name.duplication")}]},componentName:"Component",initialize:function(e,t){this.get("name")||this.set("name",this.generateName()),this.get("id")||this.set("id",this.generateId()),t||(t={}),t.resource&&(this.resource=t.resource),t.dashboardId&&(this.dashboardId=t.dashboardId),this.paramsModel=new g,this.listenTo(this.paramsModel,"change",o.partial(this.trigger,"paramsModelChanged",this))},set:function(e,t,r){var i,n,a,u,d,h,c,l=this;return null==e?this:("object"==typeof e?(i=e,r=t):(i={})[e]=t,o.each(o.keys(i),function(e){i[e]&&i[e].indexOf&&i[e].indexOf("$P{")>=0&&(n||(n=[]),f.substitute(i[e],function(e){-1==o.indexOf(n,e)&&n.push(e)})),e&&this.get(e)&&this.get(e).indexOf&&this.get(e).indexOf("$P{")>=0&&(a||(a=[]),f.substitute(this.get(e),function(e){-1==o.indexOf(a,e)&&a.push(e)}))},this),n?a?(u=o.difference(n,a),d=o.difference(a,n)):u=n:d=a,this.parametersFromProperties=o.difference((this.parametersFromProperties||[]).concat(u||[]),d),h=u||d||i.parameters,h&&(i.parameters=o.reduce(this.parametersFromProperties,function(e,t){var r,i=t;return o.findWhere(e,{id:t})||(l.has("outputParameters")&&(r=o.findWhere(l.get("outputParameters"),{id:t}),r&&(i=r.label)),e.push({id:t,label:i,parametrizeProperty:!0})),e},i.parameters||o.filter(this.get("parameters")||[],function(e){return!e.parametrizeProperty}))),c=s.Model.prototype.set.call(this,i,r),!h&&!i.outputParameters||r&&r.silent||this.trigger("parameters:set"),c)},getChildren:function(){var e=this;return this.collection.filter(function(t){return t.get("parentId")===e.get("id")})},getParent:function(){return this.has("parentId")?this.collection.findWhere({id:this.get("parentId")}):void 0},generateName:function(e){var t,r=e||o.trim(this.get("label"))||this.componentName,i=n(this.get("type")===l.INPUT_CONTROL&&this.has("resourceId")?this.get("resourceId"):r);return i||(i=this.componentName,this.set("id",this.generateId(i))),t=this.generateIndex(r,"name"," "),a(r,t," ")},generateId:function(e){var t=i([e,this.get("type")===l.INPUT_CONTROL&&this.has("resourceId")?this.get("resourceId"):this.get("name"),this.componentName,this.get("type")],n),r=this.generateIndex(t,"id","_");return a(t,r)},generateIndex:function(e,t,r){if(!this.collection)return 1;for(var i=1;;){var n=e+(i>1?r+i:""),a={};if(a[t]=n,!this.collection.findWhere(a))break;i++}return i},isVisualization:function(){return this.get("type")===l.REPORT||this.get("type")===l.WEB_PAGE_VIEW||this.get("type")===l.IMAGE||this.get("type")===l.ADHOC_VIEW||this.get("type")===l.TABLE||this.get("type")===l.CHART||this.get("type")===l.CROSSTAB},isValueProducer:function(){return!1},isVisible:function(){return!0},isAutoRefreshable:function(){return this.has("autoRefresh")&&this.has("refreshInterval")&&this.has("refreshIntervalUnit")},isParametrized:function(){return this.has("parameters")&&this.get("parameters").length>0},notify:function(e){o.each(o.keys(e||{}),function(t){this.trigger(t,e[t])},this)},acceptWiringVisitor:function(e){this._getWiringMetadata().done(e.register)},_getWiringMetadata:function(){var e=new u.Deferred;return e.resolve(this,{signals:[],slots:{}}),e.promise()},clone:function(){var e=s.Model.prototype.clone.call(this);return e.collection=this.collection,e},toJSON:function(){var e=s.Model.prototype.toJSON.apply(this,arguments);return delete e.selected,delete e.interactive,e},toDashboardComponentObject:function(){var e=this.pick("id","name","type","interactive","resource");try{e.name=this.getParametrizationResult("name",this.paramsModel.attributes,{tolerateMissing:!0})}catch(t){p.error(t)}return e.position=null,e.toolbar=null,e.maximized=null,e.pagination=null,o.isUndefined(e.resource)&&(e.resource=null),e},updateFromDashboardComponentObject:function(e){var t=o.omit(e,"id","name","type","toolbar","position","maximized","pagination","resource");this.set(t)},getParametrizationResult:function(e,t,r){if(!o.isUndefined(this.get(e))){var i=o.isFunction(t)?t:function(e,r){if(!t[e]||!t[e][0]||o.intersection(t[e],[m.NOTHING_SUBSTITUTION_VALUE,m.NULL_SUBSTITUTION_VALUE]).length){if(r)return[];throw e}return t[e]};return f.substitute(this.get(e),i,r)}},pushParametersState:function(){this.paramsModel.pushState()},popParametersState:function(e){this.paramsModel.popState(e)},resetParametersState:function(e){this.paramsModel.clear(e)},setCurrentParametersStateAsDefault:function(e){this.paramsModel.setDefault(e)}});return o.extend(v.prototype,d.mixin),v});
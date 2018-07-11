define(["require","backbone","underscore","common/util/browserDetection","jquery","../dialogs/ChartTypeSelectorDialog","common/component/dialog/AlertDialog","text!../template/chartMenuTemplate.htm","bundle!adhoc_messages","highcharts-heatmap","highcharts-more","csslink!../theme/highcharts.css"],function(e){"use strict";function t(e,t){e.chart.animation=t,e.plotOptions||(e.plotOptions={}),e.plotOptions.series||(e.plotOptions.series={}),e.plotOptions.series.animation=t,e.legend||(e.legend={}),e.legend.navigation||(e.legend.navigation={}),e.legend.navigation.animation=t,e.tooltip||(e.tooltip={}),e.tooltip.animation=t}var i=e("backbone"),n=e("underscore"),o=e("common/util/browserDetection"),r=e("jquery"),s=e("../dialogs/ChartTypeSelectorDialog"),a=e("common/component/dialog/AlertDialog"),c=e("text!../template/chartMenuTemplate.htm"),h={AD_HOC_DESIGNER:"adhoc designer",JSS_IREPORT_STUDIO:"JSS/iReport studio"},l=e("bundle!adhoc_messages"),d=e("highcharts-heatmap"),g={dataSettingService:"../services/dataSettingService",defaultSettingService:"../services/defaultSettingService",dualPieSettingService:"../services/dualPieSettingService",treemapSettingService:"../services/treemapSettingService",itemHyperlinkSettingService:"../services/itemHyperlinkSettingService",yAxisSettingService:"../services/yAxisSettingService"};e("highcharts-more"),e("csslink!../theme/highcharts.css");var m=function(e){this.rdy=new r.Deferred,this.config=e,this.parent=null,this.loader=null,this.highchartsInstance=null,this.services=g,this._init()};m.prototype={render:function(e){var i,o=this,s=new r.Deferred;return o.rdy.then(function(){try{o.hcConfig.chart.renderTo=r("#"+o.hcConfig.chart.renderTo,e)[0],n.isUndefined(o.config.chart.animation)||t(o.hcConfig,o.config.chart.animation),n.isUndefined(o.config.chart.zoom)||(o.hcConfig.chart.zoomType=o.config.chart.zoom),o.highchartsInstance=new d.Chart(o.hcConfig),s.resolve()}catch(a){i=/\#19/.test(a)?l.ADH_1214_ICHARTS_ERROR_TOO_MANY_VALUES:l.ADH_1214_ICHARTS_ERROR_UNCAUGHT,n.each(d.charts,function(e){e&&o.hcConfig.chart.renderTo===e.renderTo&&e.destroy()}),o.highchartsInstance&&o.highchartsInstance.destroy&&(o.highchartsInstance.destroy(),o.highchartsInstance=void 0),s.reject({name:"error",type:"highchartsInternalError",data:{error:a,message:i}})}}),s},_init:function(){var t=this,i=JSON.parse(JSON.stringify(this.config.hcinstancedata)),o=new r.Deferred;this.config.globalOptions&&d.setOptions(this.config.globalOptions),t.hcConfig={},o.resolve(),r.each(i.services,function(i,s){var a=s.service,c=g[s.service]||a,h=s.data;o=o.then(function(){var i=new r.Deferred;return e([c],function(e){if("itemHyperlinkSettingService"===a){var o=n.extend({},h,{linkOptions:t.config.linkOptions}),r=new e(t,t.hcConfig,o);r.perform()}else e.perform(t.hcConfig,h,t.config.linkOptions);i.resolve()}),i})}),o.then(function(){t.hcConfig.chart.renderTo=i.renderto,t.hcConfig.chart.width=i.width,t.hcConfig.chart.height=i.height,t.rdy.resolve()})}};var p={"-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",filter:"alpha(opacity=30)",opacity:"0.3"},f={"-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",filter:"alpha(opacity=100)",opacity:"1"};return i.View.extend({initialize:function(e){this.stateModel=e.stateModel,this.report=e.report,this.chartTypeDialogStates=e.chartTypeDialogStates,this.chartTypeDialogStates[this.model.get("id")]=this.chartTypeDialogStates[this.model.get("id")]||{opened:!1,top:"",left:""}},render:function(e){this.model.get("creator")===h.AD_HOC_DESIGNER&&this.model.set("hcinstancedata",n.extend({},this.model.get("hcinstancedata"),{width:e.width(),height:e.height()||400}),{silent:!0});var t=this._renderComponent(e);if(this.model.get("hcinstancedata").services&&n.findWhere(this.model.get("hcinstancedata").services,{service:"adhocHighchartsSettingService"})){var i=this.component.services.adhocHighchartsSettingService,o=n.findWhere(this.model.get("hcinstancedata").services,{service:"adhocHighchartsSettingService"}).data.queryData.metadata.isOLAP,r=[];i&&(n.each(this.component.hcConfig.series,function(e){r=r.concat(n.map(e.data,function(t){return i.getHyperlink(e,t,o)}))}),this.model.set("hyperlinks",r))}return this.errorDialog=new a({additionalCssClasses:"jive_dialog"}),this.listenTo(this.model,"serverError",this.showError),this.model.get("interactive")&&this.stateModel.isDefaultJiveUiEnabled()?(this.dialog&&this.dialog.remove(),this.dialog=new s({model:this.model,chartTypeDialogStates:this.chartTypeDialogStates}),this._renderMenu(),t):(t.resolve(),t)},_renderComponent:function(e){var t=new r.Deferred,i=this.model.collection?this.model.collection.linkOptions:null,o=n.extend(this.model.toJSON(),{chart:n.clone(this.stateModel.get("chart"))});i&&(o.linkOptions=i),this.component=new m(o,e);var s=this.component.render(e),a=n.bind(function(e){if(t.reject(e),"highchartsInternalError"===e.type){var i=l.ADH_1214_ICHARTS_ERROR_CANT_RENDER_CHART+":<br/>"+e.data.error;this.showError({devmsg:i})}},this);return this.component.rdy?this.component.rdy.done(function(){s.then(t.resolve,a)}):t.resolve(),t},_renderMenu:function(){var e,t=this;this.$menu=e=r(n.template(c,{i18n:l})),e.insertBefore("#"+this.component.config.hcinstancedata.renderto),e.css({top:"0"}),o.isIE8()||e.css(p),e.find(".jive_chartSettingsIcon").on("mouseenter",function(){o.isIE8()||r(this).parent().css(f)}),e.find(".jive_chartMenu").on("mouseleave touchend",function(){o.isIE8()||r(this).parent().css(p)}),e.find(".jive_chartSettingsIcon").on("mouseenter",function(){var e=r(this);e.addClass("over"),e.next(".jive_chartMenu").show().position({top:e.height(),left:0})}),e.find(".jive_chartMenu").on("mouseleave touchend",function(){var e=r(this);e.prev(".jive_chartSettingsIcon").removeClass("over"),e.hide()}),e.find(".jive_chartMenu").on("mouseenter touchstart","p.wrap",function(){r(this).addClass("over")}),e.find(".jive_chartMenu").on("mouseleave touchend","p.wrap",function(){r(this).removeClass("over")}),e.find(".jive_chartMenu").on("click touchend","li.jive_chartTypeMenuEntry",n.bind(t.dialog.open,t.dialog))},showError:function(e){this.errorDialog.setMessage(e.devmsg),this.errorDialog.open()},setSize:function(e,t,i){this.component&&this.component.highchartsInstance&&this.component.highchartsInstance.setSize(e,t,i)},remove:function(){this.$menu&&this.$menu.find(".jive_chartMenu").off("click mouseenter touchstart mouseleave touchend").find(".jive_chartSettingsIcon").off("mouseenter"),this.$menu&&this.$menu.remove(),this.dialog&&this.dialog.remove(),this.errorDialog&&this.errorDialog.remove(),i.View.prototype.remove.call(this,arguments)}})});
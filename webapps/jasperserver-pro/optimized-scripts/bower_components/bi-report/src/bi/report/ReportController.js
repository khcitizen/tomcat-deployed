define(["require","backbone","underscore","jquery","./view/ReportView","./model/ReportStateStack","./jive/collection/ReportComponentMetaCollection","./jive/collection/ReportComponentCollection","./model/ReportModel","./model/ReportExportModel","common/bi/error/enum/biComponentErrorCodes","./error/biComponentErrorFactoryReportProxy","logger","./enum/reportEvents","./enum/reportStatuses","./enum/reportOutputFormats","request"],function(e){"use strict";function t(e){var t=new s.Deferred,o=this;return this.view.showOverlay(),this.model.runAction(e).then(function(e){o.view.hideOverlay(),t.resolve(e)},function(e){o.view.hideOverlay(),t.reject(e)}),t}function o(e){var t,o=new s.Deferred,r=this;return t=e.options&&e.options.showErrorDialog?i.omit(e,"options"):e,this.view.showOverlay(),this.model.runAction(t).then(i.bind(r.model.updateStatus,r.model),o.reject).then(function(){r.model.isFailed()||r.model.isCancelled()?o.reject({source:"execution",status:r.model.get("status"),errorDescriptor:r.model.get("errorDescriptor")}):(e.silent||r.trigger(f.AFTER_REPORT_EXECUTION),r.fetchReportHtmlExportAndJiveComponents({silent:e.silent}).done(o.resolve).fail(o.reject))},o.reject),o.fail(function(t){e=i.isArray(e)?i.reduce(e):e;var o,n=e.actionName+"Data",s=e[n],a=e.options&&e.options.showErrorDialog;4===t.readyState&&500===t.status&&(a&&(o=s.chartComponentUuid?r.components.find(function(e){return e.get("chartUuid")==s.chartComponentUuid}):r.components.get(s[s.chartComponentUuid?"chartComponentUuid":"tableUuid"])),o&&o.handleServerError&&o.handleServerError(t.responseJSON.result)),"highchartsInternalError"===t.type&&(a&&(o=s.chartComponentUuid?r.components.find(function(e){return e.get("chartUuid")==s.chartComponentUuid}):r.components.get(s[s.chartComponentUuid?"chartComponentUuid":"tableUuid"])),o&&o.handleClientError&&o.handleClientError(t)),r.view.hideOverlay()}),o}function r(e){var t=this;this.model=new p,this.stateModel=e,this.componentsMeta=new l([],{report:this.model}),this.components=new d([],{report:this.model,componentsMeta:this.componentsMeta,stateModel:e}),this.view=new a({model:this.model,collection:this.components,stateModel:e}),this.stateStack=new c,this.model.components=this.components,this.model.config={container:this.view.$el},this.model.getExport(g.HTML)||this.model.addExport({options:{outputFormat:g.HTML}}),this.listenTo(this.model.getExport(g.HTML),"change:outputFinal",function(){t.trigger(f.PAGE_FINAL,this.model.getExport(g.HTML).getHTMLOutput())}),this.listenTo(this.components,f.ACTION,this.runReportAction),this.listenTo(this.model,"change:status",function(){m.info("Report status changed to '"+t.model.get("status")+"'"),t.model.isReady()?t.model.update().done(function(){m.info("Report total pages number is "+t.model.get("totalPages")),t.model.getExport(g.HTML).get("outputFinal")?t.trigger(f.REPORT_COMPLETED,t.model.get("status")):t.fetchReportHtmlExportAndJiveComponents().fail(function(){var e=Array.prototype.slice.call(arguments);e.unshift(E.FAILED),e.unshift(f.REPORT_COMPLETED),t.trigger.apply(t,e)})}):(t.model.isCancelled()||t.model.isFailed())&&t.trigger(f.REPORT_COMPLETED,t.model.get("status"),{source:"execution",status:t.model.get("status"),errorDescriptor:t.model.get("errorDescriptor")})}),m.debug("Attach first `REQUESTED_PAGES_READY` event listener to report"),this.once(f.REQUESTED_PAGES_READY,function(e,o){o.resolve(),t.model.isCompleted()||t.model.waitForExecution(),m.debug("Attach second `REQUESTED_PAGES_READY` event listener to report"),t.on(f.REQUESTED_PAGES_READY,function(e,o){t.model.isCompleted()||t.model.waitForExecution(),t._reportRenderFinished&&(t.view.renderReport(),t.view.renderJive().done(function(){o.resolve(),t.model.isReady()&&t.trigger(f.REPORT_COMPLETED,t.model.get("status"))}).fail(function(e){o.reject(e)}))})}),this.on(f.AFTER_REPORT_EXECUTION,function(){t.model.execution.set({pages:1,anchor:void 0}),i.extend(t.model.getExport(g.HTML).get("options"),{pages:1,anchor:void 0})})}var n=e("backbone"),i=e("underscore"),s=e("jquery"),a=e("./view/ReportView"),c=e("./model/ReportStateStack"),l=e("./jive/collection/ReportComponentMetaCollection"),d=e("./jive/collection/ReportComponentCollection"),p=e("./model/ReportModel"),u=e("./model/ReportExportModel"),h=(e("common/bi/error/enum/biComponentErrorCodes"),e("./error/biComponentErrorFactoryReportProxy")),m=e("logger").register("Report"),f=e("./enum/reportEvents"),E=e("./enum/reportStatuses"),g=e("./enum/reportOutputFormats"),v=e("request");return i.extend(r.prototype,n.Events,{undoReportAction:function(){var e=this;return o.call(this,{actionName:"undo"}).done(function(){e.stateStack.previousState()})},undoAllReportAction:function(){var e=this;return o.call(this,{actionName:"undoAll"}).done(function(){e.stateStack.firstState()})},redoReportAction:function(){var e=this;return o.call(this,{actionName:"redo"}).done(function(){e.stateStack.nextState()})},runReportAction:function(e){var t=this;return o.call(this,e).done(function(){t.stateStack.newState()})},searchReportAction:function(e){var o={actionName:"search",searchData:{}};return"string"==typeof e?o.searchData.searchString=e:o.searchData={searchString:e.text,caseSensitive:e.caseSensitive,wholeWordsOnly:e.wholeWordsOnly},t.call(this,o)},save:function(e){var t=this;return o.call(this,i.extend(e||{},{actionName:"saveReport"})).done(function(){t.stateStack.newState()})},executeReport:function(e){var t=new s.Deferred,o=this;return this.model.execute({freshData:!!e}).then(i.bind(o.fetchReportHtmlExportAndJiveComponents,o),t.reject).then(function(){o.stateStack.newState(),t.resolve.apply(t,arguments)},t.reject),t},cancelReportExecution:function(){return this.fetchExportDfd&&"pending"===this.fetchExportDfd.state()&&this.fetchExportDfd.reject({source:"execution",status:"cancelled"}),this.model.cancel()},applyReportParameters:function(e){var t=new s.Deferred,o=this;return this.fetchExportDfd&&"pending"===this.fetchExportDfd.state()&&this.fetchExportDfd.reject({source:"execution",status:"cancelled"}),this.model.applyParameters(e).then(i.bind(o.model.updateStatus,o.model),t.reject).then(i.bind(o.model.waitForExecution,o.model),t.reject).then(function(){return o.trigger(f.AFTER_REPORT_EXECUTION),o.fetchExportDfd=o.fetchReportHtmlExportAndJiveComponents({silent:!0}),o.fetchExportDfd},t.reject).then(t.resolve,t.reject),t},fetchReportHtmlExportAndJiveComponents:function(e){var t,o,r=new s.Deferred;if(m.debug("Start fetching of html and JIVE"),r.fail(function(e){t&&"pending"===t.state()&&(t.reject?t.reject(e):t.abort(e)),o&&"pending"===o.state()&&(o.reject?o.reject(e):o.abort(e))}),this.model.isFailed()||this.model.isCancelled())r.reject({source:"execution",status:this.model.get("status"),errorDescriptor:this.model.get("errorDescriptor")});else{var n=this,a=this.model.getExport(g.HTML);t=a.run(),t.then(function(){a.isFailed()||a.isCancelled()?r.reject({source:"export",format:g.HTML,status:a.get("status"),errorDescriptor:a.get("errorDescriptor")}):(o=a.fetchOutput(),o.then(function(t,o,r){if(!e||e.silent!==!0)try{var s=parseInt(r.getResponseHeader("report-pages"),10),a=n.stateModel.get("pages");isNaN(s)||(n.model.execution.set("pages",s,{silent:!0}),a=parseInt(i.isObject(a)?a.pages:a,10),s!==a&&(m.debug("Fetching of html and JIVE: fires CURRENT_PAGE_CHANGED"),n.trigger(f.CURRENT_PAGE_CHANGED,s)))}catch(c){m.error("Failed to parse 'report-pages' response header from server",c)}},r.reject).then(i.bind(n.componentsMeta.fetch,n.componentsMeta),r.reject).then(i.bind(n.components.fetch,n.components),r.reject).then(function(){e&&e.silent===!0?(m.debug("Finish fetching of html and JIVE: silent"),r.resolve()):(m.debug("Finish fetching of html and JIVE: fires REQUESTED_PAGES_READY"),n.trigger(f.REQUESTED_PAGES_READY,n,r))},function(e){"pending"===r.state()&&r.reject(e)}))},function(e){"pending"===r.state()&&r.reject(e)})}return r},renderReport:function(){return this.view.render().always(i.bind(function(){this._reportRenderFinished=!0},this))},exportReport:function(e){var t=new s.Deferred;if(this.model.isFailed()||this.model.isCancelled()){var o=h.reportStatus({source:"execution",status:this.model.get("status"),errorDescriptor:this.model.get("errorDescriptor")});t.reject(o)}else{e||(e={});var r=i.pick(e,"outputFormat","ignorePagination");i.isObject(e.pages)?(r.pages=e.pages.pages,r.anchor=e.pages.anchor):(r.pages=e.pages,r.anchor=void 0);var n=new u({options:r},{report:this.model}),a=i.bind(n.waitForExport,n);n.run().then(a,t.reject).then(function(){if(n.isFailed()||n.isCancelled()){var o=h.reportStatus({source:"export",format:e.outputFormat,status:n.get("status"),errorDescriptor:n.get("errorDescriptor")});t.reject(o)}else t.resolve({href:n.urlOutput()},function(e){return e=i.defaults(e||{},{url:n.urlOutput(),type:"GET",headers:{Accept:"text/plain, application/json","x-jrs-base-url":n.report.contextPath},dataType:"text",data:{suppressContentDisposition:!0}}),v(e)})})}return t},destroy:function(){return this.cancelReportExecution().done(i.bind(this.view.remove,this.view))}}),r});
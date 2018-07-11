define(["require","exports","module","underscore","jquery","logger","../dashboardSettings","bi/report/jive/enum/hyperlinkTypes","dashboard/hyperlink/handler/dashboardHyperlinkHandlerLocalAnchor","dashboard/hyperlink/handler/dashboardHyperlinkHandlerLocalPage","dashboard/hyperlink/handler/dashboardHyperlinkHandlerRemotePage","dashboard/hyperlink/handler/dashboardHyperlinkHandlerRemoteAnchor","dashboard/hyperlink/handler/dashboardHyperlinkHandlerReference","dashboard/hyperlink/handler/dashboardHyperlinkHandlerReportExecution","dashboard/hyperlink/handler/dashboardHyperlinkHandlerAdhocExecution"],function(e,r,a){"use strict";function n(e,r,a){p[e]=a,r[e].resolve()}function d(e,r){var a=r.requireModules&&r.requireModules[0];a&&h.error("Failed to load module: '"+a+"' for handling hyperlinks of type: '"+e+"'!")}var o=e("underscore"),l=e("jquery"),h=e("logger").register(a),i=e("../dashboardSettings"),t=e("bi/report/jive/enum/hyperlinkTypes"),p={};return p[t.LOCAL_ANCHOR]=e("dashboard/hyperlink/handler/dashboardHyperlinkHandlerLocalAnchor"),p[t.LOCAL_PAGE]=e("dashboard/hyperlink/handler/dashboardHyperlinkHandlerLocalPage"),p[t.REMOTE_PAGE]=e("dashboard/hyperlink/handler/dashboardHyperlinkHandlerRemotePage"),p[t.REMOTE_ANCHOR]=e("dashboard/hyperlink/handler/dashboardHyperlinkHandlerRemoteAnchor"),p[t.REFERENCE]=e("dashboard/hyperlink/handler/dashboardHyperlinkHandlerReference"),p[t.REPORT_EXECUTION]=e("dashboard/hyperlink/handler/dashboardHyperlinkHandlerReportExecution"),p[t.ADHOC_EXECUTION]=e("dashboard/hyperlink/handler/dashboardHyperlinkHandlerAdhocExecution"),{events:function(){for(var e={},r=i.DEFAULT_HYPERLINK_EVENTS,a=0;a<r.length;a++)e[r[a]]=function(e,r,a){var n="jr_hyperlink_interception"===e.eventType?"click":e.type.toLowerCase(),d=r.type,o=p[d];return o&&o.events&&"function"==typeof o.events[n]?o.events[n].apply(this,arguments):void 0};return e}(),beforeRender:function(e,r){var a={},n=this;o.each(e,function(e){a[e.data.type]||(a[e.data.type]=[]),a[e.data.type].push(e)}),o.each(o.keys(a),function(e){p[e]&&p[e].beforeRender&&p[e].beforeRender.apply(n,arguments)})},discoverHyperlinkHandlers:function(r){var a=new l.Deferred,h={},t=o.chain(r).map(function(e){return e.data.type}).unique().value();return o.each(t,function(r){p[r]||(h[r]=new l.Deferred,e(["vizShim!"+i.HYPERLINK_MODULE_PREFIX+r],o.partial(n,r,h),o.partial(d,r)))}),l.when.apply(l,o.values(h)).always(function(){a.resolve()}),a}}});
define(["require","jquery","underscore","backbone","../dashboardSettings","../enum/dashboardWiringStandardIds","./autowiring/CascadeInputControlsAutowiringStrategy","./autowiring/OwnControlsAutowiringStrategy","./autowiring/RunReportAutowiringStrategy","./autowiring/AdhocDashletLinksAutowiringStrategy","../model/DashboardWiringModel"],function(n){"use strict";function t(n,t){var e=n+":";this.remove(this.filter(function(n){return 0===n.get("producer").indexOf(e)&&(!t||r.indexOf(t,n.get("producer"))<0)}))}function e(n,t){var e=this;t||(t=[]),this.each(function(i){var o=i.consumers.filter(function(e){var i=e.get("consumer").split(":");return i[0]==n&&r.indexOf(t,i[1])<0});r.each(o,function(n){i.consumers.remove(n),delete e.handlers[n.get("consumer")]})})}var i=n("jquery"),r=n("underscore"),o=n("backbone"),s=(n("../dashboardSettings"),n("../enum/dashboardWiringStandardIds")),a=n("./autowiring/CascadeInputControlsAutowiringStrategy"),u=n("./autowiring/OwnControlsAutowiringStrategy"),d=n("./autowiring/RunReportAutowiringStrategy"),c=n("./autowiring/AdhocDashletLinksAutowiringStrategy"),h=n("../model/DashboardWiringModel"),g=r.reduce(r.values(s),function(n,t){return n[t]=!0,n},{});return o.Collection.extend({model:h,initialize:function(){var n=this;r.bindAll(this,"register","unregister"),this.handlers={},this.on("add",function(n){n.consumers.each(r.bind(this.attachHandler,this,n))}),this.on("remove",function(n){n.consumers.set([])}),this.on("reset",function(t,e){r.each(e.previousModels,function(n){n.consumers.set([])}),this.each(function(t){t.consumers.each(r.bind(n.attachHandler,n,t))})}),this.on("add:consumers",this.attachHandler),this.on("remove:consumers",this.detachHandler),this.on("reset:consumers",function(t,e,i){r.each(i.previousModels,r.bind(n.detachHandler,n,t)),e.each(r.bind(n.attachHandler,n,t))}),this.autowiring=[],this.autowiring.push(new u),this.autowiring.push(new a),this.autowiring.push(new d),this.autowiring.push(new c)},register:function(n,o){t.call(this,n.get("id"),r.map(o.signals,function(t){return n.get("id")+":"+t})),e.call(this,n.get("id"),r.keys(o.slots));var s=this.add(r.map(o.signals,function(t){return{name:t,producer:n.get("id")+":"+t,component:n.get("id")}}),{silent:!0,component:n,consumers:[]});for(var a in o.slots){var u=n.get("id")+":"+a;this.handlers[u]||(this.handlers[u]=new i.Deferred),this.handlers[u].resolve(o.slots[a])}this.autowiringEnabled&&r.invoke(this.autowiring,"autowire",this,n,o);for(var d=0,c=s.length;c>d;d++)(n=s[d]).trigger("add",n,this)},unregister:function(n){t.call(this,n.get("id")),e.call(this,n.get("id")),r.invoke(this.autowiring,"unwire",n)},enableAutowiring:function(){this.autowiringEnabled=!0},disableAutowiring:function(){this.autowiringEnabled=!1},askForHandler:function(n){return this.handlers[n]||(this.handlers[n]=new i.Deferred),this.handlers[n].promise()},attachHandler:function(n,t){this.askForHandler(t.get("consumer")).done(function(t){n.listenTo(n.component,n.get("name"),t),n.value&&t(n.value,n.component)})},detachHandler:function(n,t){this.askForHandler(t.get("consumer")).done(function(t){n.stopListening(n.component,n.get("name"),t),n.value&&t(void 0,n.component)})},hasUserWiring:function(){return!!this.find(function(n){return!g[n.get("name")]&&n.consumers.find(function(n){var t=n.get("consumer").split(":");return!g[t[t.length-1]]})})}})});
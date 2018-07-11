define(["require","exports","module","underscore","backbone","logger"],function(e,t,r){"use strict";function n(e,t,r){var n=i.filter(e,function(e){return e.member}),u=i.reduce(r.axis.multiAxisMap(function(t){var r="measure"===t.get("kind"),n=i.find(e,function(e){return e.level&&(r&&e.level.aggregation||!r&&t.get("id")===e.level.fieldRef)});return n||(n={level:{expanded:!1,aggregation:r}},r||(n.level.fieldRef=t.has("id")?t.get("id"):t.get("hierarchicalName"))),n}),function(e,t){return t.level.aggregation?(e.hasMeasure||e.res.push(t),e.hasMeasure=!0):e.res.push(t),e},{hasMeasure:!1,res:[]}).res;return u.concat(n)}var i=e("underscore"),u=e("backbone");e("logger").register(r);return u.Collection.extend({initialize:function(e,t){this.query=t.query,this.axis=t.axis},reset:function(e,t){return u.Collection.prototype.reset.call(this,n(e,this.query,this.axis),t)},getByGroupByItem:function(e){if(e.level){var t=e.level.id||e.level.field;return this.find(function(e){var r=e.get("level");return r?r.fieldRef===t:void 0})}return e.aggregations?this.find(function(e){var t=e.get("level");return t?t.aggregation:void 0}):void 0},getByPath:function(e){return this.find(function(t){var r=t.get("member");if(r&&r.path.length===e.length){for(var n=0;n<e.length;n++)if(r.path[n]!==e[n])return!1;return!0}return!1})},getLevelExpansions:function(){return this.filter(function(e){return!e.has("member")})},getMemberExpansions:function(){return this.filter(function(e){return e.has("member")})},toJSON:function(e){return e&&e.isChartMode?i.compact(this.map(function(t){return t.get("level")?t.toJSON(e):void 0})):u.Collection.prototype.toJSON.call(this,e)}})});
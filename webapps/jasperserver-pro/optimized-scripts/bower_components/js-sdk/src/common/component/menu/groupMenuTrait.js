define(["require","underscore"],function(e){"use strict";var r=e("underscore"),t={_onInitialize:function(){var e=this.$contentContainer.find("li"),t="groupId",n=this._getGroupNames(this.collection.models,t);r.each(n,function(r){var n=e.filter("[data-"+t+"='"+r+"']").first();n.index()&&n.before("<li class='leaf separator'></li>")},this)},_getGroupNames:function(e,t){return r.keys(r.groupBy(e,function(e){return e.get(t)}))}};return t});
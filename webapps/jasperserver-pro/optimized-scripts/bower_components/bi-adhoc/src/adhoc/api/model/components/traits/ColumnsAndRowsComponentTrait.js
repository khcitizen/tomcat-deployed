define(["require","underscore"],function(n){"use strict";var e=n("underscore");return{getColumnsComponent:function(n){return e.find(this.components.findComponentDeep("axis"),function(n){return"columns"===n.get("name")})},getRowsComponent:function(){return e.find(this.components.findComponentDeep("axis"),function(n){return"rows"===n.get("name")})},getMeasuresComponent:function(){return this.components.findComponentDeep("measures")[0]}}});
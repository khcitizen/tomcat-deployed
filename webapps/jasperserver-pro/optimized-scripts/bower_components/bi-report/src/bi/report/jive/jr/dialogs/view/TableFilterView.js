define(["require","backbone.epoxy","underscore","common/component/dialog/Dialog","text!../template/tableFilterTemplate.htm","../model/TableFilterModel","./dateTimePickerEpoxyBindingHandler"],function(e){"use strict";function t(e){var t=[];return n.each(e,function(e){t.push({label:e.val,value:e.key})}),t}var i=e("backbone.epoxy"),n=e("underscore"),r=(e("common/component/dialog/Dialog"),e("text!../template/tableFilterTemplate.htm")),o=e("../model/TableFilterModel"),l=e("./dateTimePickerEpoxyBindingHandler"),a=i.Model.extend({defaults:{columnLabel:"",clearFilter:"true",filterOptions:[],dataType:"text",emptyFilterOption:"..."},computeds:{isNotClearFilter:function(){return"true"!==this.get("clearFilter")},isNotBooleanType:function(){return"boolean"!==this.get("dataType")},transformedFilterOptions:{deps:["clearFilter","filterOptions"],get:function(e,i){return"true"===e?[]:t(i)}}},remove:function(){}});return i.View.extend({constructor:function(e){this.i18n=e.i18n,i.View.prototype.constructor.call(this,e)},initialize:function(){this.model=new o,this.viewModel=new a,this.listenTo(this.viewModel,"change:clearFilter",this._onClearFilterChanged),i.View.prototype.initialize.apply(this,arguments)},el:function(){return n.template(r,{i18n:this.i18n})},computeds:{filterValueStart:{deps:["value"],get:function(e){return n.isArray(e)?e[0]:e},set:function(e){var t=this.getBinding("value");n.isArray(t)?t[0]=e:this.setBinding("value",e)}},filterValueEnd:{deps:["value"],get:function(e){return n.isArray(e)?e[1]:void 0},set:function(e){var t=this.getBinding("value");n.isArray(t)&&(t[1]=e)}}},bindingHandlers:{dateTimePicker:l},_onClearFilterChanged:function(){"true"===this.viewModel.get("clearFilter")?this.model.reset():this.model.set("operator",this.viewModel.get("filterOptions")[0].key)},remove:function(){i.View.prototype.remove.apply(this,arguments),this.model&&this.model.remove(),this.viewModel&&this.viewModel.remove()}})});
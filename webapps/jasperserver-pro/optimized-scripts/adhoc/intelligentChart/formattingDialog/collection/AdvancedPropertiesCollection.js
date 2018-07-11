define(["require","underscore","adhoc/intelligentChart/formattingDialog/model/AdvancedPropertyModel","backbone"],function(i){"use strict";var t=i("underscore"),e=i("adhoc/intelligentChart/formattingDialog/model/AdvancedPropertyModel"),n=i("backbone"),a=n.Collection.extend({model:e,validationMessages:{DUPLICATE_MODEL_ADD:"DUPLICATE_MODEL_ADD",DUPLICATE_MODEL_EDIT:"DUPLICATE_MODEL_EDIT"},add:function(i,t){return this._validateSingleModelAddition(i,t)?n.Collection.prototype.add.apply(this,arguments):void 0},_validateSingleModelAddition:function(i,e){var n=!0;if(!t.isArray(i)){var a=this.find(function(t){return t===i}),r=this.filter(function(t){return t.id===i.id});a||!(r.length>0)||e&&e.silent?!(a&&r.length>1)||e&&e.silent||(n=!1,this.trigger("validation:invalid",this,i,{message:this.validationMessages.DUPLICATE_MODEL_EDIT}),i.set(i.previousAttributes())):(n=!1,this.trigger("validation:invalid",this,i,{message:this.validationMessages.DUPLICATE_MODEL_ADD})),!n||e&&e.silent||this.trigger("validation:valid",this,i)}return n}});return a});
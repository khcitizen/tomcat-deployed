define(["require","backbone","underscore","text!home/template/nothingToDisplayTemplate.htm","bundle!HomeBundle"],function(i){"use strict";var t=i("backbone"),e=i("underscore"),n=i("text!home/template/nothingToDisplayTemplate.htm"),s=i("bundle!HomeBundle");return t.View.extend({initialize:function(i){if(this.subviews=[],this.initOptions=i,i){var t=s["default.nothing.display"];this._msgNothingToDisplay=i.msgNothingToDisplay?i.msgNothingToDisplay:t,i.fetchCollection&&this.collection.fetch({reset:!0}),this._nothingPrefix="nothingPrefix"in i?i.nothingPrefix:"",this._nothingSuffix="nothingSuffix"in i?i.nothingSuffix:""}this.collection.on("reset",this.render,this)},render:function(){var i;return void 0===this.initOptions.tabindex?this.$el.attr("tabindex",0):this.$el.attr("tabindex",this.initOptions.tabindex),void 0===this.initOptions.itemPlural?this.$el.attr("js-itemplural","items"):this.$el.attr("js-itemplural",this.initOptions.itemPlural),this.collection.length>0?(this.$el.html(""),this.collection.forEach(e.bind(function(i){var t=new this.initOptions.listElementView({model:i});this.subviews.push(t),this.$el.append(t.render().$el)},this))):(i=e.template(n,{message:this._msgNothingToDisplay,markupPrefix:this._nothingPrefix,markupSuffix:this._nothingSuffix}),this.$el.append(i)),this}})});
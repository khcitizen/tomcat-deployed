define(["require","backbone","underscore","components/dialog/Dialog","./VisualChooserView","bundle!AdHocBundle"],function(e){var i=e("backbone"),n=e("underscore"),o=e("components/dialog/Dialog"),t=e("./VisualChooserView"),l=e("bundle!AdHocBundle");return i.View.extend({events:{change:"triggerChangeValue"},initialize:function(){this.visualChooserView=new t({title:l["visualization.chooser.title"]}),this.dialog=new o({el:this.visualChooserView.render().el,modal:!1})},render:function(){},open:function(e){this.dialog.open(n.extend({topPoint:.5,leftPoint:.5},e))}})});
define(["require","./BaseComponentModel","../enum/jiveTypes","jquery","underscore","backbone","./ColumnGroupModel"],function(e){var n=e("./BaseComponentModel"),t=e("../enum/jiveTypes"),o=e("jquery"),r=(e("underscore"),e("backbone")),i=e("./ColumnGroupModel"),u=null,l=r.Collection.extend({model:i});return n.extend({defaults:function(){return{calendarPatterns:{},filterPatterns:{},fontSizes:[],fonts:{},operators:{},patterns:{},id:null,genericProperties:{},module:"jive.table",type:t.TABLE,uimodule:"jive.interactive.column",hasFloatingHeader:null}},constructor:function(){this.columnGroups=new l,n.prototype.constructor.apply(this,arguments)},initialize:function(e){this.config={id:null,allColumnsData:null},o.extend(this.config,e),e.genericProperties?u=e.genericProperties:this.config.genericProperties=u,this.columns=[],this.columnMap={}},parse:function(e){var n=this;return e.allColumnGroupsData&&(this.columnGroups.reset(e.allColumnGroupsData,{silent:!0,parse:!0}),this.columnGroups.each(function(e){e.parent=n})),e},registerPart:function(e){e.parent=this,e.trigger("parentTableComponentAttached"),this.columns[e.get("columnIndex")]=e,this.columnMap[e.get("id")]=e},getId:function(){return this.config.id}})});
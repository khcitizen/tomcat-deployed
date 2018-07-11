!function(t,o){"use strict";"object"==typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(["highcharts"],t):t(o.Highcharts)}(function(t){"use strict";var o,s,e=t.getOptions().plotOptions,n=t.pInt,a=t.pick,i=t.each;return e.solidgauge=t.merge(e.gauge,{colorByPoint:!0}),o={initDataClasses:function(o){var s,e=this,n=this.chart,a=0,r=this.options;this.dataClasses=s=[],i(o.dataClasses,function(i,l){var h;i=t.merge(i),s.push(i),i.color||("category"===r.dataClassColor?(h=n.options.colors,i.color=h[a++],a===h.length&&(a=0)):i.color=e.tweenColors(t.Color(r.minColor),t.Color(r.maxColor),l/(o.dataClasses.length-1)))})},initStops:function(o){this.stops=o.stops||[[0,this.options.minColor],[1,this.options.maxColor]],i(this.stops,function(o){o.color=t.Color(o[1])})},toColor:function(t,o){var e,n,a,i,r,l,h=this.stops,d=this.dataClasses;if(d){for(l=d.length;l--;)if(r=d[l],n=r.from,a=r.to,(n===s||t>=n)&&(a===s||a>=t)){i=r.color,o&&(o.dataClass=l);break}}else{for(this.isLog&&(t=this.val2lin(t)),e=1-(this.max-t)/(this.max-this.min),l=h.length;l--&&!(e>h[l][0]););n=h[l]||h[l+1],a=h[l+1]||n,e=1-(a[0]-e)/(a[0]-n[0]||1),i=this.tweenColors(n.color,a.color,e)}return i},tweenColors:function(t,o,s){var e,n;return o.rgba.length&&t.rgba.length?(t=t.rgba,o=o.rgba,e=1!==o[3]||1!==t[3],n=(e?"rgba(":"rgb(")+Math.round(o[0]+(t[0]-o[0])*(1-s))+","+Math.round(o[1]+(t[1]-o[1])*(1-s))+","+Math.round(o[2]+(t[2]-o[2])*(1-s))+(e?","+(o[3]+(t[3]-o[3])*(1-s)):"")+")"):n=o.input||"none",n}},i(["fill","stroke"],function(s){t.Fx.prototype[s+"Setter"]=function(){this.elem.attr(s,o.tweenColors(t.Color(this.start),t.Color(this.end),this.pos))}}),t.seriesTypes.solidgauge=t.extendClass(t.seriesTypes.gauge,{type:"solidgauge",pointAttrToOptions:{},bindAxes:function(){var s;t.seriesTypes.gauge.prototype.bindAxes.call(this),s=this.yAxis,t.extend(s,o),s.options.dataClasses&&s.initDataClasses(s.options),s.initStops(s.options)},drawPoints:function(){var o=this,s=o.yAxis,e=s.center,i=o.options,r=o.chart.renderer,l=i.overshoot,h=l&&"number"==typeof l?l/180*Math.PI:0;t.each(o.points,function(t){var l,d,p,g,c=t.graphic,u=s.startAngleRad+s.translate(t.y,null,null,null,!0),f=n(a(t.options.radius,i.radius,100))*e[2]/200,m=n(a(t.options.innerRadius,i.innerRadius,60))*e[2]/200,C=s.toColor(t.y,t),x=Math.min(s.startAngleRad,s.endAngleRad),y=Math.max(s.startAngleRad,s.endAngleRad);"none"===C&&(C=t.color||o.color||"none"),"none"!==C&&(t.color=C),u=Math.max(x-h,Math.min(y+h,u)),i.wrap===!1&&(u=Math.max(x,Math.min(y,u))),p=Math.min(u,s.startAngleRad),g=Math.max(u,s.startAngleRad),g-p>2*Math.PI&&(g=p+2*Math.PI),t.shapeArgs=l={x:e[0],y:e[1],r:f,innerR:m,start:p,end:g,fill:C},t.startR=f,c?(d=l.d,c.animate(l),d&&(l.d=d)):t.graphic=r.arc(l).attr({stroke:i.borderColor||"none","stroke-width":i.borderWidth||0,fill:C,"sweep-flag":0}).add(o.group)})},animate:function(o){o||(this.startAngleRad=this.yAxis.startAngleRad,t.seriesTypes.pie.prototype.animate.call(this,o))}}),t},this);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{339:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},340:function(t,e,r){var i=r(3),n=r(30),o=r(22),s=r(339),a=i("".replace),u="["+s+"]",f=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),d=function(t){return function(e){var r=o(n(e));return 1&t&&(r=a(r,f,"")),2&t&&(r=a(r,l,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},341:function(t,e,r){var i=r(6),n=r(8),o=r(83);t.exports=function(t,e,r){var s,a;return o&&i(s=e.constructor)&&s!==r&&n(a=s.prototype)&&a!==r.prototype&&o(t,a),t}},342:function(t,e,r){var i=r(3);t.exports=i(1..valueOf)},344:function(t,e,r){"use strict";var i=r(9),n=r(1),o=r(3),s=r(112),a=r(18),u=r(11),f=r(341),l=r(35),d=r(84),c=r(192),h=r(4),p=r(55).f,v=r(32).f,g=r(13).f,m=r(342),x=r(340).trim,N=n.Number,w=N.prototype,y=n.TypeError,b=o("".slice),I=o("".charCodeAt),z=function(t){var e=c(t,"number");return"bigint"==typeof e?e:_(e)},_=function(t){var e,r,i,n,o,s,a,u,f=c(t,"number");if(d(f))throw y("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=x(f),43===(e=I(f,0))||45===e){if(88===(r=I(f,2))||120===r)return NaN}else if(48===e){switch(I(f,1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+f}for(s=(o=b(f,2)).length,a=0;a<s;a++)if((u=I(o,a))<48||u>n)return NaN;return parseInt(o,i)}return+f};if(s("Number",!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var E,F=function(t){var e=arguments.length<1?0:N(z(t)),r=this;return l(w,r)&&h((function(){m(r)}))?f(Object(e),r,F):e},S=i?p(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),G=0;S.length>G;G++)u(N,E=S[G])&&!u(F,E)&&g(F,E,v(N,E));F.prototype=w,w.constructor=F,a(n,"Number",F)}},358:function(t,e,r){"use strict";var i=r(2),n=r(1),o=r(3),s=r(56),a=r(342),u=r(359),f=r(4),l=n.RangeError,d=n.String,c=Math.floor,h=o(u),p=o("".slice),v=o(1..toFixed),g=function(t,e,r){return 0===e?r:e%2==1?g(t,e-1,r*t):g(t*t,e/2,r)},m=function(t,e,r){for(var i=-1,n=r;++i<6;)n+=e*t[i],t[i]=n%1e7,n=c(n/1e7)},x=function(t,e){for(var r=6,i=0;--r>=0;)i+=t[r],t[r]=c(i/e),i=i%e*1e7},N=function(t){for(var e=6,r="";--e>=0;)if(""!==r||0===e||0!==t[e]){var i=d(t[e]);r=""===r?i:r+h("0",7-i.length)+i}return r};i({target:"Number",proto:!0,forced:f((function(){return"0.000"!==v(8e-5,3)||"1"!==v(.9,0)||"1.25"!==v(1.255,2)||"1000000000000000128"!==v(0xde0b6b3a7640080,0)}))||!f((function(){v({})}))},{toFixed:function(t){var e,r,i,n,o=a(this),u=s(t),f=[0,0,0,0,0,0],c="",v="0";if(u<0||u>20)throw l("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return d(o);if(o<0&&(c="-",o=-o),o>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(o*g(2,69,1))-69)<0?o*g(2,-e,1):o/g(2,e,1),r*=4503599627370496,(e=52-e)>0){for(m(f,0,r),i=u;i>=7;)m(f,1e7,0),i-=7;for(m(f,g(10,i,1),0),i=e-1;i>=23;)x(f,1<<23),i-=23;x(f,1<<i),m(f,1,1),x(f,2),v=N(f)}else m(f,0,r),m(f,1<<-e,0),v=N(f)+h("0",u);return v=u>0?c+((n=v.length)<=u?"0."+h("0",u-n)+v:p(v,0,n-u)+"."+p(v,n-u)):c+v}})},359:function(t,e,r){"use strict";var i=r(1),n=r(56),o=r(22),s=r(30),a=i.RangeError;t.exports=function(t){var e=o(s(this)),r="",i=n(t);if(i<0||i==1/0)throw a("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},415:function(t,e,r){"use strict";r.r(e);r(344),r(358);var i={props:{viewx:{type:Number,default:0},viewy:{type:Number,default:0},zoom:{type:Number,default:1},offsetx:{type:Number,default:0},offsety:{type:Number,default:0},size:{type:Number,default:100},divider:{type:Number,default:10}},data:function(){return{id:Math.random().toFixed(16)}},computed:{tile:function(){var t=this.viewx,e=this.viewy,r=this.zoom;return{x:t+this.offsetx,y:e+this.offsety,size:this.size*r,divider:this.divider*r,multiplier:10}},smallGridId:function(){var t=this.id;return"g".concat(t,"-smallGrid")},gridId:function(){var t=this.id;return"g".concat(t,"-grid")},largeGridId:function(){var t=this.id;return"g".concat(t,"-largeGrid")},gridBasedOnZoom:function(){var t=this.gridId,e=this.largeGridId,r=this.zoom>.5?t:e;return"url(#".concat(r,")")}}},n=r(53),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"}},[r("defs",[r("pattern",{attrs:{id:t.smallGridId,width:t.tile.divider,height:t.tile.divider,patternUnits:"userSpaceOnUse"}},[r("path",{attrs:{d:"M "+t.tile.divider+" 0 L 0 0 0 "+t.tile.divider,fill:"none",stroke:"rgba(100,100,100,0.8)","stroke-width":"0.5"}})]),t._v(" "),r("pattern",{attrs:{id:t.gridId,width:t.tile.size,height:t.tile.size,patternUnits:"userSpaceOnUse",x:t.tile.x%t.tile.size,y:t.tile.y%t.tile.size}},[r("rect",{attrs:{width:t.tile.size,height:t.tile.size,fill:"url(#"+t.smallGridId+")"}}),t._v(" "),r("path",{attrs:{d:"M "+t.tile.size+" 0 L 0 0 0 "+t.tile.size,fill:"none",stroke:"rgba(100,100,100,0.5)","stroke-width":"1"}})]),t._v(" "),r("pattern",{attrs:{id:t.largeGridId,width:t.tile.size,height:t.tile.size,patternUnits:"userSpaceOnUse",x:t.tile.x%t.tile.size,y:t.tile.y%t.tile.size}},[r("rect",{attrs:{width:t.tile.size,height:t.tile.size,fill:"none"}}),t._v(" "),r("path",{attrs:{d:"M "+t.tile.size+" 0 L 0 0 0 "+t.tile.size,fill:"none",stroke:"rgba(50,50,50,0.5)","stroke-width":"1"}})])]),t._v(" "),r("rect",{staticStyle:{"pointer-events":"none"},attrs:{width:"100%",height:"100%",fill:t.gridBasedOnZoom}}),t._v(" "),r("text",{style:"display: none;",attrs:{x:"10",y:"20"}},[t._v("\n    VXY: "+t._s(t.viewx.toFixed(2))+", "+t._s(t.viewy.toFixed(2))+"\n    Z: "+t._s(t.zoom.toFixed(2))+"\n    OXY: "+t._s(t.offsetx.toFixed(2))+", "+t._s(t.offsety.toFixed(2))+"\n    S: "+t._s(t.tile.size.toFixed(2))+"\n    D: "+t._s(t.tile.divider.toFixed(2))+"\n  ")])])}),[],!1,null,null,null);e.default=o.exports}}]);
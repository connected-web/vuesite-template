(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{352:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},353:function(t,e,i){var r=i(3),n=i(32),s=i(19),o=i(352),a=r("".replace),f="["+o+"]",u=RegExp("^"+f+f+"*"),l=RegExp(f+f+"*$"),d=function(t){return function(e){var i=s(n(e));return 1&t&&(i=a(i,u,"")),2&t&&(i=a(i,l,"")),i}};t.exports={start:d(1),end:d(2),trim:d(3)}},354:function(t,e,i){var r=i(3);t.exports=r(1..valueOf)},355:function(t,e,i){"use strict";var r=i(9),n=i(0),s=i(3),o=i(117),a=i(16),f=i(11),u=i(195),l=i(33),d=i(88),c=i(197),h=i(4),p=i(58).f,v=i(34).f,g=i(13).f,m=i(354),x=i(353).trim,N=n.Number,w=N.prototype,b=n.TypeError,y=s("".slice),I=s("".charCodeAt),z=function(t){var e=c(t,"number");return"bigint"==typeof e?e:_(e)},_=function(t){var e,i,r,n,s,o,a,f,u=c(t,"number");if(d(u))throw b("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=x(u),43===(e=I(u,0))||45===e){if(88===(i=I(u,2))||120===i)return NaN}else if(48===e){switch(I(u,1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+u}for(o=(s=y(u,2)).length,a=0;a<o;a++)if((f=I(s,a))<48||f>n)return NaN;return parseInt(s,r)}return+u};if(o("Number",!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var E,F=function(t){var e=arguments.length<1?0:N(z(t)),i=this;return l(w,i)&&h((function(){m(i)}))?u(Object(e),i,F):e},S=r?p(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),G=0;S.length>G;G++)f(N,E=S[G])&&!f(F,E)&&g(F,E,v(N,E));F.prototype=w,w.constructor=F,a(n,"Number",F)}},368:function(t,e,i){"use strict";var r=i(2),n=i(0),s=i(3),o=i(60),a=i(354),f=i(369),u=i(4),l=n.RangeError,d=n.String,c=Math.floor,h=s(f),p=s("".slice),v=s(1..toFixed),g=function(t,e,i){return 0===e?i:e%2==1?g(t,e-1,i*t):g(t*t,e/2,i)},m=function(t,e,i){for(var r=-1,n=i;++r<6;)n+=e*t[r],t[r]=n%1e7,n=c(n/1e7)},x=function(t,e){for(var i=6,r=0;--i>=0;)r+=t[i],t[i]=c(r/e),r=r%e*1e7},N=function(t){for(var e=6,i="";--e>=0;)if(""!==i||0===e||0!==t[e]){var r=d(t[e]);i=""===i?r:i+h("0",7-r.length)+r}return i};r({target:"Number",proto:!0,forced:u((function(){return"0.000"!==v(8e-5,3)||"1"!==v(.9,0)||"1.25"!==v(1.255,2)||"1000000000000000128"!==v(0xde0b6b3a7640080,0)}))||!u((function(){v({})}))},{toFixed:function(t){var e,i,r,n,s=a(this),f=o(t),u=[0,0,0,0,0,0],c="",v="0";if(f<0||f>20)throw l("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return d(s);if(s<0&&(c="-",s=-s),s>1e-21)if(i=(e=function(t){for(var e=0,i=t;i>=4096;)e+=12,i/=4096;for(;i>=2;)e+=1,i/=2;return e}(s*g(2,69,1))-69)<0?s*g(2,-e,1):s/g(2,e,1),i*=4503599627370496,(e=52-e)>0){for(m(u,0,i),r=f;r>=7;)m(u,1e7,0),r-=7;for(m(u,g(10,r,1),0),r=e-1;r>=23;)x(u,1<<23),r-=23;x(u,1<<r),m(u,1,1),x(u,2),v=N(u)}else m(u,0,i),m(u,1<<-e,0),v=N(u)+h("0",f);return v=f>0?c+((n=v.length)<=f?"0."+h("0",f-n)+v:p(v,0,n-f)+"."+p(v,n-f)):c+v}})},369:function(t,e,i){"use strict";var r=i(0),n=i(60),s=i(19),o=i(32),a=r.RangeError;t.exports=function(t){var e=s(o(this)),i="",r=n(t);if(r<0||r==1/0)throw a("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(i+=e);return i}},424:function(t,e,i){"use strict";i.r(e);i(355),i(368);var r={props:{viewx:{type:Number,default:0},viewy:{type:Number,default:0},zoom:{type:Number,default:1},offsetx:{type:Number,default:0},offsety:{type:Number,default:0},size:{type:Number,default:100},divider:{type:Number,default:10}},data:function(){return{id:Math.random().toFixed(16)}},computed:{tile:function(){var t=this.viewx,e=this.viewy,i=this.zoom;return{x:t+this.offsetx,y:e+this.offsety,size:this.size*i,divider:this.divider*i,multiplier:10}},smallGridId:function(){var t=this.id;return"g".concat(t,"-smallGrid")},gridId:function(){var t=this.id;return"g".concat(t,"-grid")},largeGridId:function(){var t=this.id;return"g".concat(t,"-largeGrid")},gridBasedOnZoom:function(){var t=this.gridId,e=this.largeGridId,i=this.zoom>.5?t:e;return"url(#".concat(i,")")}}},n=i(57),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"}},[i("defs",[i("pattern",{attrs:{id:t.smallGridId,width:t.tile.divider,height:t.tile.divider,patternUnits:"userSpaceOnUse"}},[i("path",{attrs:{d:"M "+t.tile.divider+" 0 L 0 0 0 "+t.tile.divider,fill:"none",stroke:"rgba(100,100,100,0.8)","stroke-width":"0.5"}})]),t._v(" "),i("pattern",{attrs:{id:t.gridId,width:t.tile.size,height:t.tile.size,patternUnits:"userSpaceOnUse",x:t.tile.x%t.tile.size,y:t.tile.y%t.tile.size}},[i("rect",{attrs:{width:t.tile.size,height:t.tile.size,fill:"url(#"+t.smallGridId+")"}}),t._v(" "),i("path",{attrs:{d:"M "+t.tile.size+" 0 L 0 0 0 "+t.tile.size,fill:"none",stroke:"rgba(100,100,100,0.5)","stroke-width":"1"}})]),t._v(" "),i("pattern",{attrs:{id:t.largeGridId,width:t.tile.size,height:t.tile.size,patternUnits:"userSpaceOnUse",x:t.tile.x%t.tile.size,y:t.tile.y%t.tile.size}},[i("rect",{attrs:{width:t.tile.size,height:t.tile.size,fill:"none"}}),t._v(" "),i("path",{attrs:{d:"M "+t.tile.size+" 0 L 0 0 0 "+t.tile.size,fill:"none",stroke:"rgba(50,50,50,0.5)","stroke-width":"1"}})])]),t._v(" "),i("rect",{staticStyle:{"pointer-events":"none"},attrs:{width:"100%",height:"100%",fill:t.gridBasedOnZoom}}),t._v(" "),i("text",{style:"display: none;",attrs:{x:"10",y:"20"}},[t._v("\n    VXY: "+t._s(t.viewx.toFixed(2))+", "+t._s(t.viewy.toFixed(2))+"\n    Z: "+t._s(t.zoom.toFixed(2))+"\n    OXY: "+t._s(t.offsetx.toFixed(2))+", "+t._s(t.offsety.toFixed(2))+"\n    S: "+t._s(t.tile.size.toFixed(2))+"\n    D: "+t._s(t.tile.divider.toFixed(2))+"\n  ")])])}),[],!1,null,null,null);e.default=s.exports}}]);
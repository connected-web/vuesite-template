(window.webpackJsonp=window.webpackJsonp||[]).push([[2,6],{339:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},340:function(t,e,i){var o=i(3),s=i(30),r=i(22),n=i(339),f=o("".replace),c="["+n+"]",h=RegExp("^"+c+c+"*"),a=RegExp(c+c+"*$"),u=function(t){return function(e){var i=r(s(e));return 1&t&&(i=f(i,h,"")),2&t&&(i=f(i,a,"")),i}};t.exports={start:u(1),end:u(2),trim:u(3)}},341:function(t,e,i){var o=i(6),s=i(8),r=i(83);t.exports=function(t,e,i){var n,f;return r&&o(n=e.constructor)&&n!==i&&s(f=n.prototype)&&f!==i.prototype&&r(t,f),t}},342:function(t,e,i){var o=i(3);t.exports=o(1..valueOf)},344:function(t,e,i){"use strict";var o=i(9),s=i(1),r=i(3),n=i(112),f=i(18),c=i(11),h=i(341),a=i(35),u=i(84),l=i(192),d=i(4),m=i(55).f,v=i(32).f,z=i(13).f,p=i(342),g=i(340).trim,w=s.Number,y=w.prototype,O=s.TypeError,x=r("".slice),b=r("".charCodeAt),Y=function(t){var e=l(t,"number");return"bigint"==typeof e?e:X(e)},X=function(t){var e,i,o,s,r,n,f,c,h=l(t,"number");if(u(h))throw O("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(h=g(h),43===(e=b(h,0))||45===e){if(88===(i=b(h,2))||120===i)return NaN}else if(48===e){switch(b(h,1)){case 66:case 98:o=2,s=49;break;case 79:case 111:o=8,s=55;break;default:return+h}for(n=(r=x(h,2)).length,f=0;f<n;f++)if((c=b(r,f))<48||c>s)return NaN;return parseInt(r,o)}return+h};if(n("Number",!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var k,N=function(t){var e=arguments.length<1?0:w(Y(t)),i=this;return a(y,i)&&d((function(){p(i)}))?h(Object(e),i,N):e},S=o?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),I=0;S.length>I;I++)c(w,k=S[I])&&!c(N,k)&&z(N,k,v(w,k));N.prototype=y,y.constructor=N,f(s,"Number",N)}},351:function(t,e,i){var o=i(2),s=i(1),r=i(37),n=i(6),f=i(54),c=i(59),h=/MSIE .\./.test(f),a=s.Function,u=function(t){return function(e,i){var o=arguments.length>2,s=o?c(arguments,2):void 0;return t(o?function(){r(n(e)?e:a(e),this,s)}:e,i)}};o({global:!0,bind:!0,forced:h},{setTimeout:u(s.setTimeout),setInterval:u(s.setInterval)})},358:function(t,e,i){"use strict";var o=i(2),s=i(1),r=i(3),n=i(56),f=i(342),c=i(359),h=i(4),a=s.RangeError,u=s.String,l=Math.floor,d=r(c),m=r("".slice),v=r(1..toFixed),z=function(t,e,i){return 0===e?i:e%2==1?z(t,e-1,i*t):z(t*t,e/2,i)},p=function(t,e,i){for(var o=-1,s=i;++o<6;)s+=e*t[o],t[o]=s%1e7,s=l(s/1e7)},g=function(t,e){for(var i=6,o=0;--i>=0;)o+=t[i],t[i]=l(o/e),o=o%e*1e7},w=function(t){for(var e=6,i="";--e>=0;)if(""!==i||0===e||0!==t[e]){var o=u(t[e]);i=""===i?o:i+d("0",7-o.length)+o}return i};o({target:"Number",proto:!0,forced:h((function(){return"0.000"!==v(8e-5,3)||"1"!==v(.9,0)||"1.25"!==v(1.255,2)||"1000000000000000128"!==v(0xde0b6b3a7640080,0)}))||!h((function(){v({})}))},{toFixed:function(t){var e,i,o,s,r=f(this),c=n(t),h=[0,0,0,0,0,0],l="",v="0";if(c<0||c>20)throw a("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return u(r);if(r<0&&(l="-",r=-r),r>1e-21)if(i=(e=function(t){for(var e=0,i=t;i>=4096;)e+=12,i/=4096;for(;i>=2;)e+=1,i/=2;return e}(r*z(2,69,1))-69)<0?r*z(2,-e,1):r/z(2,e,1),i*=4503599627370496,(e=52-e)>0){for(p(h,0,i),o=c;o>=7;)p(h,1e7,0),o-=7;for(p(h,z(10,o,1),0),o=e-1;o>=23;)g(h,1<<23),o-=23;g(h,1<<o),p(h,1,1),g(h,2),v=w(h)}else p(h,0,i),p(h,1<<-e,0),v=w(h)+d("0",c);return v=c>0?l+((s=v.length)<=c?"0."+d("0",c-s)+v:m(v,0,s-c)+"."+m(v,s-c)):l+v}})},359:function(t,e,i){"use strict";var o=i(1),s=i(56),r=i(22),n=i(30),f=o.RangeError;t.exports=function(t){var e=r(n(this)),i="",o=s(t);if(o<0||o==1/0)throw f("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(i+=e);return i}},387:function(t,e,i){},415:function(t,e,i){"use strict";i.r(e);i(344),i(358);var o={props:{viewx:{type:Number,default:0},viewy:{type:Number,default:0},zoom:{type:Number,default:1},offsetx:{type:Number,default:0},offsety:{type:Number,default:0},size:{type:Number,default:100},divider:{type:Number,default:10}},data:function(){return{id:Math.random().toFixed(16)}},computed:{tile:function(){var t=this.viewx,e=this.viewy,i=this.zoom;return{x:t+this.offsetx,y:e+this.offsety,size:this.size*i,divider:this.divider*i,multiplier:10}},smallGridId:function(){var t=this.id;return"g".concat(t,"-smallGrid")},gridId:function(){var t=this.id;return"g".concat(t,"-grid")},largeGridId:function(){var t=this.id;return"g".concat(t,"-largeGrid")},gridBasedOnZoom:function(){var t=this.gridId,e=this.largeGridId,i=this.zoom>.5?t:e;return"url(#".concat(i,")")}}},s=i(53),r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"}},[i("defs",[i("pattern",{attrs:{id:t.smallGridId,width:t.tile.divider,height:t.tile.divider,patternUnits:"userSpaceOnUse"}},[i("path",{attrs:{d:"M "+t.tile.divider+" 0 L 0 0 0 "+t.tile.divider,fill:"none",stroke:"rgba(100,100,100,0.8)","stroke-width":"0.5"}})]),t._v(" "),i("pattern",{attrs:{id:t.gridId,width:t.tile.size,height:t.tile.size,patternUnits:"userSpaceOnUse",x:t.tile.x%t.tile.size,y:t.tile.y%t.tile.size}},[i("rect",{attrs:{width:t.tile.size,height:t.tile.size,fill:"url(#"+t.smallGridId+")"}}),t._v(" "),i("path",{attrs:{d:"M "+t.tile.size+" 0 L 0 0 0 "+t.tile.size,fill:"none",stroke:"rgba(100,100,100,0.5)","stroke-width":"1"}})]),t._v(" "),i("pattern",{attrs:{id:t.largeGridId,width:t.tile.size,height:t.tile.size,patternUnits:"userSpaceOnUse",x:t.tile.x%t.tile.size,y:t.tile.y%t.tile.size}},[i("rect",{attrs:{width:t.tile.size,height:t.tile.size,fill:"none"}}),t._v(" "),i("path",{attrs:{d:"M "+t.tile.size+" 0 L 0 0 0 "+t.tile.size,fill:"none",stroke:"rgba(50,50,50,0.5)","stroke-width":"1"}})])]),t._v(" "),i("rect",{staticStyle:{"pointer-events":"none"},attrs:{width:"100%",height:"100%",fill:t.gridBasedOnZoom}}),t._v(" "),i("text",{style:"display: none;",attrs:{x:"10",y:"20"}},[t._v("\n    VXY: "+t._s(t.viewx.toFixed(2))+", "+t._s(t.viewy.toFixed(2))+"\n    Z: "+t._s(t.zoom.toFixed(2))+"\n    OXY: "+t._s(t.offsetx.toFixed(2))+", "+t._s(t.offsety.toFixed(2))+"\n    S: "+t._s(t.tile.size.toFixed(2))+"\n    D: "+t._s(t.tile.divider.toFixed(2))+"\n  ")])])}),[],!1,null,null,null);e.default=r.exports},442:function(t,e,i){"use strict";i(387)},481:function(t,e,i){"use strict";i.r(e);i(344),i(351),i(189),i(188);function o(t){return t?{width:t.scrollWidth,height:t.scrollHeight,x:t.offsetX,y:t.offsetY}:{width:0,height:0,x:0,y:0}}var s={components:{GridFill:i(415).default},props:{centerContent:{type:Boolean,default:!0},showLabels:{type:Boolean,default:!1},maxZoom:{type:Number,default:.2},minZoom:{type:Number,default:2}},data:function(){return{resizeObserver:!1,viewSizeX:0,viewSizeY:0,slotWidth:0,slotHeight:0,offsetX:0,offsetY:0,offsetWidth:0,offsetHeight:0,zoomWidth:0,zoomHeight:0,zoom:1,cursorX:0,cursorY:0,moveOffsetX:0,moveOffsetY:0,trackOffsetX:0,trackOffsetY:0,trackMoveOffset:!1,fitted:!1,bestFit:!1}},computed:{gridX:function(){return this.offsetX-this.trackOffsetX},gridY:function(){return this.offsetY-this.trackOffsetY},gridOffsetX:function(){var t=this.centerContent,e=this.hw;return t?e:0},gridOffsetY:function(){var t=this.centerContent,e=this.hh;return t?e:0},hw:function(){return this.viewSizeX/2},hh:function(){return this.viewSizeY/2},hzw:function(){return this.zoomWidth/2/this.zoom},hzh:function(){return this.zoomHeight/2/this.zoom}},mounted:function(){var t=this;t.resizeObserver=new ResizeObserver((function(){t.recaculateSizes(),t.fitted||setTimeout(t.fit,0)})),t.$el&&t.resizeObserver.observe(t.$el),t.$emit("apiReady",t)},destroyed:function(){this.resizeObserver.disconnect()},methods:{offsetStyle:function(){var t,e,i=this.centerContent,o=this.offsetX,s=this.offsetY,r=this.hw,n=this.hh,f=this.trackOffsetX,c=this.trackOffsetY;return i?(t=o-f+r,e=s-c+n):(t=o-f,e=s-c),"left: ".concat(t,"px; top: ").concat(e,"px; width: 1px; height: 1px;")},offsetClass:function(){return["offset-container",this.trackMoveOffset?"moving":"static"].join(" ")},zoomStyle:function(){var t=this.zoom,e=this.hzw,i=this.hzh;return this.centerContent?"zoom: ".concat(t,"; left: ").concat(-e,"px; top: ").concat(-i,"px;"):"zoom: ".concat(t,"; left: 0; top: 0;")},scrollLeft:function(){this.scrollDirection(100,0)},scrollRight:function(){this.scrollDirection(-100,0)},scrollUp:function(){this.scrollDirection(0,100)},scrollDown:function(){this.scrollDirection(0,-100)},scrollZoom:function(t){t.preventDefault();var e=this.zoom+-.001*t.deltaY;this.setZoom(e)},scrollDirection:function(t,e,i){var o=this.zoom,s=this.offsetX,r=this.offsetY,n=this.maxZoom,f=this.minZoom,c=Math.round(s+t),h=Math.round(r+e);this.offsetX=c,this.offsetY=h,this.zoom=Math.min(Math.max(i||o,n),f),this.recaculateSizes("scrollDirection")},setZoom:function(t){var e=this.zoom,i=this.cursorX,o=this.cursorY,s=this.offsetX,r=this.offsetY,n=this.maxZoom,f=this.minZoom,c=Math.min(Math.max(t,n),f),h=e-c,a=(i-s)*h/e,u=(o-r)*h/e;this.scrollDirection(a,u,c),this.recaculateSizes("setZoom")},zoomIn:function(){var t=this.zoom,e=Math.round(2*t*1e3)/1e3;this.setZoom(e)},zoomOut:function(){var t=this.zoom,e=Math.round(t/2*1e3)/1e3;this.setZoom(e)},gainKeyFocus:function(){document.addEventListener("keydown",this.checkKeyboardKeys)},loseKeyFocus:function(){document.removeEventListener("keydown",this.checkKeyboardKeys)},clearCursor:function(){this.cursorX=0,this.cursorY=0},checkKeyboardKeys:function(t){var e=this;console.log("Check Keyboard Keys",t);var i=t.shiftKey||t.altKey?100:50;({ArrowUp:function(){return e.scrollDirection(0,i)},ArrowDown:function(){return e.scrollDirection(0,-i)},ArrowLeft:function(){return e.scrollDirection(i,0)},ArrowRight:function(){return e.scrollDirection(-i,0)}}[t.code]||function(){})()},startOffset:function(t){var e=t.x,i=t.y;this.moveOffsetX=e,this.moveOffsetY=i,this.trackMoveOffset=!0,document.addEventListener("mouseup",this.endOffset)},trackOffset:function(t){var e=t.x,i=t.y,o=this.centerContent,s=this.trackMoveOffset,r=this.moveOffsetX,n=this.moveOffsetY,f=this.hw,c=this.hh,h=this.$el.getBoundingClientRect(),a=h.top,u=h.left;s?(this.trackOffsetX=r-e,this.trackOffsetY=n-i):(this.trackOffsetX=0,this.trackOffsetY=0),o?(this.cursorX=t.clientX-u-f,this.cursorY=t.clientY-a-c):(this.cursorX=t.clientX-u,this.cursorY=t.clientY-a)},endOffset:function(){var t=this.trackOffsetX,e=this.trackOffsetY;this.trackMoveOffset=!1,this.trackOffsetX=0,this.trackOffsetY=0,this.scrollDirection(-t,-e),document.removeEventListener("mouseup",this.endOffset)},recaculateSizes:function(){var t=o(this.$refs["offset-content"]);this.offsetWidth=t.width,this.offsetHeight=t.height;var e=o(this.$refs["zoom-container"]);if(this.zoomWidth=e.width*this.zoom,this.zoomHeight=e.height*this.zoom,this.viewSizeX=this.$el.offsetWidth,this.viewSizeY=this.$el.offsetHeight,1===this.zoom){var i=o(this.$refs["slot-content"]);this.slotWidth=i.width,this.slotHeight=i.height}},reset:function(){var t=this.bestFit,e=this.recaculateSizes;t&&(Object.assign(this,t),e())},fit:function(){this.fitted=!0;var t=this.zoomWidth,e=this.zoomHeight,i=this.offsetX,o=this.offsetY,s=this.moveOffsetX,r=this.moveOffsetY,n=this.trackOffsetX,f=this.trackOffsetY,c=this.viewSizeX,h=this.viewSizeY,a=this.setZoom,u=c/t,l=h/e,d=Math.min(u,l);0===t||0===e?(setTimeout(this.fit,0),a(1)):(a(d),this.bestFit={zoomWidth:t,zoomHeight:e,offsetX:i,offsetY:o,moveOffsetX:s,moveOffsetY:r,trackOffsetX:n,trackOffsetY:f,viewSizeX:c,viewSizeY:h,zoom:this.zoom})}}},r=(i(442),i(53)),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pan-and-zoom"},[i("div",{ref:"slot-content",staticClass:"slot-content",on:{mouseover:t.gainKeyFocus,mouseout:t.loseKeyFocus,mousedown:t.startOffset,mouseup:t.endOffset,mousemove:t.trackOffset,wheel:t.scrollZoom}},[i("grid-fill",{attrs:{viewx:t.gridX,viewy:t.gridY,offsetx:t.gridOffsetX,offsety:t.gridOffsetY,zoom:t.zoom}}),t._v(" "),i("div",{ref:"offset-container",class:t.offsetClass(),style:t.offsetStyle()},[i("div",{ref:"zoom-container",staticClass:"zoom-container",style:t.zoomStyle()},[t._t("default")],2)])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);
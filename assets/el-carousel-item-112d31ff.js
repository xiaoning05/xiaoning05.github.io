import{aZ as te,b5 as Le,er as Te,ai as le,cp as Ve,r as m,X as $,a as e,b7 as $e,aQ as D,ci as Ae,p as oe,bK as Be,cb as Pe,bR as Re,cV as De,b6 as Oe,d as Z,a$ as ne,o as H,c as A,f as q,q as se,e as F,w as O,M as N,aP as W,b as j,U as re,cC as We,Z as z,N as ie,$ as K,cD as je,aH as ue,at as ce,F as ze,g as Ke,t as Xe,b0 as ve,aV as Ze,n as qe,be as Fe,bv as Qe,b1 as Je,cW as Ue,__tla as Ye}from"./index-34f06ebd.js";import{t as de,__tla as Ge}from"./el-image-viewer-331eba6f.js";let he,pe,ea=Promise.all([(()=>{try{return Ye}catch{}})(),(()=>{try{return Ge}catch{}})()]).then(async()=>{const fe=te({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),me={change:(o,L)=>[o,L].every(Le)},Q=Symbol("carouselContextKey"),ge=(o,L,i)=>{const{children:r,addChild:T,removeChild:g}=Te(le(),"ElCarouselItem"),S=Ve(),n=m(-1),d=m(null),I=m(!1),h=m(),k=m(0),y=m(!0),_=$(()=>o.arrow!=="never"&&!e(u)),b=$(()=>r.value.some(a=>a.props.label.toString().length>0)),M=$(()=>o.type==="card"),u=$(()=>o.direction==="vertical"),f=$(()=>o.height!=="auto"?{height:o.height}:{height:`${k.value}px`,overflow:"hidden"}),B=de(a=>{C(a)},300,{trailing:!0}),P=de(a=>{(function(t){o.trigger==="hover"&&t!==n.value&&(n.value=t)})(a)},300);function x(){d.value&&(clearInterval(d.value),d.value=null)}function E(){o.interval<=0||!o.autoplay||d.value||(d.value=setInterval(()=>V(),o.interval))}const V=()=>{n.value<r.value.length-1?n.value=n.value+1:o.loop&&(n.value=0)};function C(a){if($e(a)){const c=r.value.filter(w=>w.props.name===a);c.length>0&&(a=r.value.indexOf(c[0]))}if(a=Number(a),Number.isNaN(a)||a!==Math.floor(a))return;const t=r.value.length,s=n.value;n.value=a<0?o.loop?t-1:0:a>=t?o.loop?0:t-1:a,s===n.value&&v(s),l()}function v(a){r.value.forEach((t,s)=>{t.translateItem(s,n.value,a)})}function l(){x(),o.pauseOnHover||E()}D(()=>n.value,(a,t)=>{v(t),y.value&&(a%=2,t%=2),t>-1&&L("change",a,t)}),D(()=>o.autoplay,a=>{a?E():x()}),D(()=>o.loop,()=>{C(n.value)}),D(()=>o.interval,()=>{l()});const p=Ae();return oe(()=>{D(()=>r.value,()=>{r.value.length>0&&C(o.initialIndex)},{immediate:!0}),p.value=Be(h.value,()=>{v()}),E()}),Pe(()=>{x(),h.value&&p.value&&p.value.stop()}),Re(Q,{root:h,isCardType:M,isVertical:u,items:r,loop:o.loop,addItem:T,removeItem:g,setActiveItem:C,setContainerHeight:function(a){o.height==="auto"&&(k.value=a)}}),{root:h,activeIndex:n,arrowDisplay:_,hasLabel:b,hover:I,isCardType:M,items:r,isVertical:u,containerStyle:f,isItemsTwoLength:y,handleButtonEnter:function(a){e(u)||r.value.forEach((t,s)=>{a===function(c,w){var X,U,Y,G;const R=e(r),ee=R.length;if(ee===0||!c.states.inStage)return!1;const Se=w+1,Me=w-1,ae=ee-1,xe=R[ae].states.active,Ee=R[0].states.active,He=(U=(X=R[Se])==null?void 0:X.states)==null?void 0:U.active,Ne=(G=(Y=R[Me])==null?void 0:Y.states)==null?void 0:G.active;return w===ae&&Ee||He?"left":!!(w===0&&xe||Ne)&&"right"}(t,s)&&(t.states.hover=!0)})},handleButtonLeave:function(){e(u)||r.value.forEach(a=>{a.states.hover=!1})},handleIndicatorClick:function(a){n.value=a},handleMouseEnter:function(){I.value=!0,o.pauseOnHover&&x()},handleMouseLeave:function(){I.value=!1,E()},setActiveItem:C,prev:function(){C(n.value-1)},next:function(){C(n.value+1)},PlaceholderItem:function(){var a;const t=(a=S.default)==null?void 0:a.call(S);if(!t)return null;const s=De(t).filter(c=>Oe(c)&&c.type.name==="ElCarouselItem");return(s==null?void 0:s.length)===2&&o.loop&&!M.value?(y.value=!0,s):(y.value=!1,null)},isTwoLengthShow:a=>!y.value||(n.value<=1?a<=1:a>1),throttledArrowClick:B,throttledIndicatorHover:P}},ye=["onMouseenter","onClick"],Ie={key:0},be=Z({name:"ElCarousel"});var Ce=ve(Z({...be,props:fe,emits:me,setup(o,{expose:L,emit:i}){const r=o,{root:T,activeIndex:g,arrowDisplay:S,hasLabel:n,hover:d,isCardType:I,items:h,isVertical:k,containerStyle:y,handleButtonEnter:_,handleButtonLeave:b,handleIndicatorClick:M,handleMouseEnter:u,handleMouseLeave:f,setActiveItem:B,prev:P,next:x,PlaceholderItem:E,isTwoLengthShow:V,throttledArrowClick:C,throttledIndicatorHover:v}=ge(r,i),l=ne("carousel"),p=$(()=>{const t=[l.b(),l.m(r.direction)];return e(I)&&t.push(l.m("card")),t}),a=$(()=>{const t=[l.e("indicators"),l.em("indicators",r.direction)];return e(n)&&t.push(l.em("indicators","labels")),r.indicatorPosition==="outside"&&t.push(l.em("indicators","outside")),e(k)&&t.push(l.em("indicators","right")),t});return L({setActiveItem:B,prev:P,next:x}),(t,s)=>(H(),A("div",{ref_key:"root",ref:T,class:N(e(p)),onMouseenter:s[6]||(s[6]=W((...c)=>e(u)&&e(u)(...c),["stop"])),onMouseleave:s[7]||(s[7]=W((...c)=>e(f)&&e(f)(...c),["stop"]))},[q("div",{class:N(e(l).e("container")),style:ce(e(y))},[e(S)?(H(),se(ie,{key:0,name:"carousel-arrow-left",persisted:""},{default:F(()=>[O(q("button",{type:"button",class:N([e(l).e("arrow"),e(l).em("arrow","left")]),onMouseenter:s[0]||(s[0]=c=>e(_)("left")),onMouseleave:s[1]||(s[1]=(...c)=>e(b)&&e(b)(...c)),onClick:s[2]||(s[2]=W(c=>e(C)(e(g)-1),["stop"]))},[j(e(re),null,{default:F(()=>[j(e(We))]),_:1})],34),[[z,(t.arrow==="always"||e(d))&&(r.loop||e(g)>0)]])]),_:1})):K("v-if",!0),e(S)?(H(),se(ie,{key:1,name:"carousel-arrow-right",persisted:""},{default:F(()=>[O(q("button",{type:"button",class:N([e(l).e("arrow"),e(l).em("arrow","right")]),onMouseenter:s[3]||(s[3]=c=>e(_)("right")),onMouseleave:s[4]||(s[4]=(...c)=>e(b)&&e(b)(...c)),onClick:s[5]||(s[5]=W(c=>e(C)(e(g)+1),["stop"]))},[j(e(re),null,{default:F(()=>[j(e(je))]),_:1})],34),[[z,(t.arrow==="always"||e(d))&&(r.loop||e(g)<e(h).length-1)]])]),_:1})):K("v-if",!0),j(e(E)),ue(t.$slots,"default")],6),t.indicatorPosition!=="none"?(H(),A("ul",{key:0,class:N(e(a))},[(H(!0),A(ze,null,Ke(e(h),(c,w)=>O((H(),A("li",{key:w,class:N([e(l).e("indicator"),e(l).em("indicator",t.direction),e(l).is("active",w===e(g))]),onMouseenter:X=>e(v)(w),onClick:W(X=>e(M)(w),["stop"])},[q("button",{class:N(e(l).e("button"))},[e(n)?(H(),A("span",Ie,Xe(c.props.label),1)):K("v-if",!0)],2)],42,ye)),[[z,e(V)(w)]])),128))],2)):K("v-if",!0)],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const we=te({name:{type:String,default:""},label:{type:[String,Number],default:""}}),ke=(o,L)=>{const i=Ze(Q),r=le(),T=.83,g=m(),S=m(!1),n=m(0),d=m(1),I=m(!1),h=m(!1),k=m(!1),y=m(!1),{isCardType:_,isVertical:b}=i,M=(u,f,B)=>{var P;const x=e(_),E=(P=i.items.value.length)!=null?P:Number.NaN,V=u===f;x||Qe(B)||(y.value=V||u===B),!V&&E>2&&i.loop&&(u=function(v,l,p){const a=p-1,t=p/2;return l===0&&v===a?-1:l===a&&v===0?p:v<l-1&&l-v>=t?p+1:v>l+1&&v-l>=t?-2:v}(u,f,E));const C=e(b);I.value=V,x?(k.value=Math.round(Math.abs(u-f))<=1,n.value=function(v,l){var p,a;const t=e(b)?((p=i.root.value)==null?void 0:p.offsetHeight)||0:((a=i.root.value)==null?void 0:a.offsetWidth)||0;return k.value?t*(1.17*(v-l)+1)/4:v<l?-1.83*t/4:3.83*t/4}(u,f),d.value=e(I)?1:T):n.value=function(v,l,p){const a=i.root.value;return a?((p?a.offsetHeight:a.offsetWidth)||0)*(v-l):0}(u,f,C),h.value=!0,V&&g.value&&i.setContainerHeight(g.value.offsetHeight)};return oe(()=>{i.addItem({props:o,states:qe({hover:S,translate:n,scale:d,active:I,ready:h,inStage:k,animating:y}),uid:r.uid,translateItem:M})}),Fe(()=>{i.removeItem(r.uid)}),{carouselItemRef:g,active:I,animating:y,hover:S,inStage:k,isVertical:b,translate:n,isCardType:_,scale:d,ready:h,handleItemClick:function(){if(i&&e(_)){const u=i.items.value.findIndex(({uid:f})=>f===r.uid);i.setActiveItem(u)}}}},_e=Z({name:"ElCarouselItem"});var J=ve(Z({..._e,props:we,setup(o){const L=o,i=ne("carousel"),{carouselItemRef:r,active:T,animating:g,hover:S,inStage:n,isVertical:d,translate:I,isCardType:h,scale:k,ready:y,handleItemClick:_}=ke(L),b=$(()=>({transform:[`${"translate"+(e(d)?"Y":"X")}(${e(I)}px)`,`scale(${e(k)})`].join(" ")}));return(M,u)=>O((H(),A("div",{ref_key:"carouselItemRef",ref:r,class:N([e(i).e("item"),e(i).is("active",e(T)),e(i).is("in-stage",e(n)),e(i).is("hover",e(S)),e(i).is("animating",e(g)),{[e(i).em("item","card")]:e(h),[e(i).em("item","card-vertical")]:e(h)&&e(d)}]),style:ce(e(b)),onClick:u[0]||(u[0]=(...f)=>e(_)&&e(_)(...f))},[e(h)?O((H(),A("div",{key:0,class:N(e(i).e("mask"))},null,2)),[[z,!e(T)]]):K("v-if",!0),ue(M.$slots,"default")],6)),[[z,e(y)]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);pe=Je(Ce,{CarouselItem:J}),he=Ue(J)});export{he as E,ea as __tla,pe as a};
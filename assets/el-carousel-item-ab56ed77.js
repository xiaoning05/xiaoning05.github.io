import{a_ as oe,b6 as Ae,es as Be,aj as ne,cr as Ve,r as f,Y as B,a as e,b8 as $e,bM as Q,aR as R,ck as Pe,p as se,bN as Oe,cd as Re,bU as We,cX as Ye,b7 as je,d as X,b0 as re,o as H,c as V,f as q,q as ie,e as K,w as W,N as L,aQ as Y,b as j,V as ue,cE as ze,$ as z,O as ce,a0 as D,cF as De,aI as ve,au as de,F as Fe,g as Xe,t as qe,b1 as he,aW as Ke,n as Qe,bf as Ue,by as Ge,b2 as Je,cY as Ze,__tla as ea}from"./index-b079f499.js";import{t as pe,__tla as aa}from"./el-image-viewer-3e8b0085.js";let me,fe,ta=Promise.all([(()=>{try{return ea}catch{}})(),(()=>{try{return aa}catch{}})()]).then(async()=>{const ge=oe({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),ye={change:(o,S)=>[o,S].every(Ae)},U=Symbol("carouselContextKey"),Ie=(o,S,i)=>{const{children:n,addChild:T,removeChild:g}=Be(ne(),"ElCarouselItem"),M=Ve(),s=f(-1),d=f(null),I=f(!1),h=f(),w=f(0),y=f(!0),_=B(()=>o.arrow!=="never"&&!e(u)),b=B(()=>n.value.some(a=>a.props.label.toString().length>0)),x=B(()=>o.type==="card"),u=B(()=>o.direction==="vertical"),m=B(()=>o.height!=="auto"?{height:o.height}:{height:`${w.value}px`,overflow:"hidden"}),$=pe(a=>{k(a)},300,{trailing:!0}),P=pe(a=>{(function(t){o.trigger==="hover"&&t!==s.value&&(s.value=t)})(a)},300);function E(){d.value&&(clearInterval(d.value),d.value=null)}function N(){o.interval<=0||!o.autoplay||d.value||(d.value=setInterval(()=>A(),o.interval))}const A=()=>{s.value<n.value.length-1?s.value=s.value+1:o.loop&&(s.value=0)};function k(a){if($e(a)){const c=n.value.filter(C=>C.props.name===a);c.length>0&&(a=n.value.indexOf(c[0]))}if(a=Number(a),Number.isNaN(a)||a!==Math.floor(a))return void Q(i,"index must be integer.");const t=n.value.length,r=s.value;s.value=a<0?o.loop?t-1:0:a>=t?o.loop?0:t-1:a,r===s.value&&v(r),l()}function v(a){n.value.forEach((t,r)=>{t.translateItem(r,s.value,a)})}function l(){E(),o.pauseOnHover||N()}R(()=>s.value,(a,t)=>{v(t),y.value&&(a%=2,t%=2),t>-1&&S("change",a,t)}),R(()=>o.autoplay,a=>{a?N():E()}),R(()=>o.loop,()=>{k(s.value)}),R(()=>o.interval,()=>{l()});const p=Pe();return se(()=>{R(()=>n.value,()=>{n.value.length>0&&k(o.initialIndex)},{immediate:!0}),p.value=Oe(h.value,()=>{v()}),N()}),Re(()=>{E(),h.value&&p.value&&p.value.stop()}),We(U,{root:h,isCardType:x,isVertical:u,items:n,loop:o.loop,addItem:T,removeItem:g,setActiveItem:k,setContainerHeight:function(a){o.height==="auto"&&(w.value=a)}}),{root:h,activeIndex:s,arrowDisplay:_,hasLabel:b,hover:I,isCardType:x,items:n,isVertical:u,containerStyle:m,isItemsTwoLength:y,handleButtonEnter:function(a){e(u)||n.value.forEach((t,r)=>{a===function(c,C){var F,Z,ee,ae;const O=e(n),te=O.length;if(te===0||!c.states.inStage)return!1;const xe=C+1,Ee=C-1,le=te-1,Ne=O[le].states.active,He=O[0].states.active,Le=(Z=(F=O[xe])==null?void 0:F.states)==null?void 0:Z.active,Te=(ae=(ee=O[Ee])==null?void 0:ee.states)==null?void 0:ae.active;return C===le&&He||Le?"left":!!(C===0&&Ne||Te)&&"right"}(t,r)&&(t.states.hover=!0)})},handleButtonLeave:function(){e(u)||n.value.forEach(a=>{a.states.hover=!1})},handleIndicatorClick:function(a){s.value=a},handleMouseEnter:function(){I.value=!0,o.pauseOnHover&&E()},handleMouseLeave:function(){I.value=!1,N()},setActiveItem:k,prev:function(){k(s.value-1)},next:function(){k(s.value+1)},PlaceholderItem:function(){var a;const t=(a=M.default)==null?void 0:a.call(M);if(!t)return null;const r=Ye(t).filter(c=>je(c)&&c.type.name==="ElCarouselItem");return(r==null?void 0:r.length)===2&&o.loop&&!x.value?(y.value=!0,r):(y.value=!1,null)},isTwoLengthShow:a=>!y.value||(s.value<=1?a<=1:a>1),throttledArrowClick:$,throttledIndicatorHover:P}},be=["onMouseenter","onClick"],ke={key:0},G="ElCarousel",Ce=X({name:G});var we=he(X({...Ce,props:ge,emits:ye,setup(o,{expose:S,emit:i}){const n=o,{root:T,activeIndex:g,arrowDisplay:M,hasLabel:s,hover:d,isCardType:I,items:h,isVertical:w,containerStyle:y,handleButtonEnter:_,handleButtonLeave:b,handleIndicatorClick:x,handleMouseEnter:u,handleMouseLeave:m,setActiveItem:$,prev:P,next:E,PlaceholderItem:N,isTwoLengthShow:A,throttledArrowClick:k,throttledIndicatorHover:v}=Ie(n,i,G),l=re("carousel"),p=B(()=>{const t=[l.b(),l.m(n.direction)];return e(I)&&t.push(l.m("card")),t}),a=B(()=>{const t=[l.e("indicators"),l.em("indicators",n.direction)];return e(s)&&t.push(l.em("indicators","labels")),n.indicatorPosition==="outside"&&t.push(l.em("indicators","outside")),e(w)&&t.push(l.em("indicators","right")),t});return S({setActiveItem:$,prev:P,next:E}),(t,r)=>(H(),V("div",{ref_key:"root",ref:T,class:L(e(p)),onMouseenter:r[6]||(r[6]=Y((...c)=>e(u)&&e(u)(...c),["stop"])),onMouseleave:r[7]||(r[7]=Y((...c)=>e(m)&&e(m)(...c),["stop"]))},[q("div",{class:L(e(l).e("container")),style:de(e(y))},[e(M)?(H(),ie(ce,{key:0,name:"carousel-arrow-left",persisted:""},{default:K(()=>[W(q("button",{type:"button",class:L([e(l).e("arrow"),e(l).em("arrow","left")]),onMouseenter:r[0]||(r[0]=c=>e(_)("left")),onMouseleave:r[1]||(r[1]=(...c)=>e(b)&&e(b)(...c)),onClick:r[2]||(r[2]=Y(c=>e(k)(e(g)-1),["stop"]))},[j(e(ue),null,{default:K(()=>[j(e(ze))]),_:1})],34),[[z,(t.arrow==="always"||e(d))&&(n.loop||e(g)>0)]])]),_:1})):D("v-if",!0),e(M)?(H(),ie(ce,{key:1,name:"carousel-arrow-right",persisted:""},{default:K(()=>[W(q("button",{type:"button",class:L([e(l).e("arrow"),e(l).em("arrow","right")]),onMouseenter:r[3]||(r[3]=c=>e(_)("right")),onMouseleave:r[4]||(r[4]=(...c)=>e(b)&&e(b)(...c)),onClick:r[5]||(r[5]=Y(c=>e(k)(e(g)+1),["stop"]))},[j(e(ue),null,{default:K(()=>[j(e(De))]),_:1})],34),[[z,(t.arrow==="always"||e(d))&&(n.loop||e(g)<e(h).length-1)]])]),_:1})):D("v-if",!0),j(e(N)),ve(t.$slots,"default")],6),t.indicatorPosition!=="none"?(H(),V("ul",{key:0,class:L(e(a))},[(H(!0),V(Fe,null,Xe(e(h),(c,C)=>W((H(),V("li",{key:C,class:L([e(l).e("indicator"),e(l).em("indicator",t.direction),e(l).is("active",C===e(g))]),onMouseenter:F=>e(v)(C),onClick:Y(F=>e(x)(C),["stop"])},[q("button",{class:L(e(l).e("button"))},[e(s)?(H(),V("span",ke,qe(c.props.label),1)):D("v-if",!0)],2)],42,be)),[[z,e(A)(C)]])),128))],2)):D("v-if",!0)],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const _e=oe({name:{type:String,default:""},label:{type:[String,Number],default:""}}),Se=(o,S)=>{const i=Ke(U),n=ne();i||Q(S,"usage: <el-carousel></el-carousel-item></el-carousel>"),n||Q(S,"compositional hook can only be invoked inside setups");const T=.83,g=f(),M=f(!1),s=f(0),d=f(1),I=f(!1),h=f(!1),w=f(!1),y=f(!1),{isCardType:_,isVertical:b}=i,x=(u,m,$)=>{var P;const E=e(_),N=(P=i.items.value.length)!=null?P:Number.NaN,A=u===m;E||Ge($)||(y.value=A||u===$),!A&&N>2&&i.loop&&(u=function(v,l,p){const a=p-1,t=p/2;return l===0&&v===a?-1:l===a&&v===0?p:v<l-1&&l-v>=t?p+1:v>l+1&&v-l>=t?-2:v}(u,m,N));const k=e(b);I.value=A,E?(w.value=Math.round(Math.abs(u-m))<=1,s.value=function(v,l){var p,a;const t=e(b)?((p=i.root.value)==null?void 0:p.offsetHeight)||0:((a=i.root.value)==null?void 0:a.offsetWidth)||0;return w.value?t*(1.17*(v-l)+1)/4:v<l?-1.83*t/4:3.83*t/4}(u,m),d.value=e(I)?1:T):s.value=function(v,l,p){const a=i.root.value;return a?((p?a.offsetHeight:a.offsetWidth)||0)*(v-l):0}(u,m,k),h.value=!0,A&&g.value&&i.setContainerHeight(g.value.offsetHeight)};return se(()=>{i.addItem({props:o,states:Qe({hover:M,translate:s,scale:d,active:I,ready:h,inStage:w,animating:y}),uid:n.uid,translateItem:x})}),Ue(()=>{i.removeItem(n.uid)}),{carouselItemRef:g,active:I,animating:y,hover:M,inStage:w,isVertical:b,translate:s,isCardType:_,scale:d,ready:h,handleItemClick:function(){if(i&&e(_)){const u=i.items.value.findIndex(({uid:m})=>m===n.uid);i.setActiveItem(u)}}}},Me=X({name:"ElCarouselItem"});var J=he(X({...Me,props:_e,setup(o){const S=o,i=re("carousel"),{carouselItemRef:n,active:T,animating:g,hover:M,inStage:s,isVertical:d,translate:I,isCardType:h,scale:w,ready:y,handleItemClick:_}=Se(S,"ElCarouselItem"),b=B(()=>({transform:[`${"translate"+(e(d)?"Y":"X")}(${e(I)}px)`,`scale(${e(w)})`].join(" ")}));return(x,u)=>W((H(),V("div",{ref_key:"carouselItemRef",ref:n,class:L([e(i).e("item"),e(i).is("active",e(T)),e(i).is("in-stage",e(s)),e(i).is("hover",e(M)),e(i).is("animating",e(g)),{[e(i).em("item","card")]:e(h),[e(i).em("item","card-vertical")]:e(h)&&e(d)}]),style:de(e(b)),onClick:u[0]||(u[0]=(...m)=>e(_)&&e(_)(...m))},[e(h)?W((H(),V("div",{key:0,class:L(e(i).e("mask"))},null,2)),[[z,!e(T)]]):D("v-if",!0),ve(x.$slots,"default")],6)),[[z,e(y)]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);fe=Je(we,{CarouselItem:J}),me=Ze(J)});export{me as E,ta as __tla,fe as a};

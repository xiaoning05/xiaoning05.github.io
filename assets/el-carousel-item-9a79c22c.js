import{a$ as te,ba as Le,er as Te,al as le,ct as Ae,r as m,a1 as B,a as e,bc as Be,aS as R,cm as Pe,p as oe,bP as $e,cf as Ve,bW as Oe,cZ as Re,bb as We,d as q,b0 as ne,o as H,c as P,g as F,v as se,w as G,x as W,R as N,aR as j,f as z,Z as re,cG as je,a3 as D,S as ie,a4 as X,cH as ze,aJ as ue,av as ce,F as De,q as Xe,t as Ze,b2 as ve,aX as qe,e as Fe,bj as Ge,bA as Je,b4 as Ke,b5 as Ue,__tla as Ye}from"./index-d2088aec.js";import{t as de,__tla as Qe}from"./el-image-viewer-6188d22b.js";let he,pe,ea=Promise.all([(()=>{try{return Ye}catch{}})(),(()=>{try{return Qe}catch{}})()]).then(async()=>{const fe=te({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),me={change:(o,L)=>[o,L].every(Le)},J=Symbol("carouselContextKey"),ge=(o,L,i)=>{const{children:r,addChild:T,removeChild:g}=Te(le(),"ElCarouselItem"),S=Ae(),n=m(-1),d=m(null),I=m(!1),h=m(),k=m(0),y=m(!0),_=B(()=>o.arrow!=="never"&&!e(u)),b=B(()=>r.value.some(a=>a.props.label.toString().length>0)),x=B(()=>o.type==="card"),u=B(()=>o.direction==="vertical"),f=B(()=>o.height!=="auto"?{height:o.height}:{height:`${k.value}px`,overflow:"hidden"}),$=de(a=>{C(a)},300,{trailing:!0}),V=de(a=>{(function(t){o.trigger==="hover"&&t!==n.value&&(n.value=t)})(a)},300);function M(){d.value&&(clearInterval(d.value),d.value=null)}function E(){o.interval<=0||!o.autoplay||d.value||(d.value=setInterval(()=>A(),o.interval))}const A=()=>{n.value<r.value.length-1?n.value=n.value+1:o.loop&&(n.value=0)};function C(a){if(Be(a)){const c=r.value.filter(w=>w.props.name===a);c.length>0&&(a=r.value.indexOf(c[0]))}if(a=Number(a),Number.isNaN(a)||a!==Math.floor(a))return;const t=r.value.length,s=n.value;n.value=a<0?o.loop?t-1:0:a>=t?o.loop?0:t-1:a,s===n.value&&v(s),l()}function v(a){r.value.forEach((t,s)=>{t.translateItem(s,n.value,a)})}function l(){M(),o.pauseOnHover||E()}R(()=>n.value,(a,t)=>{v(t),y.value&&(a%=2,t%=2),t>-1&&L("change",a,t)}),R(()=>o.autoplay,a=>{a?E():M()}),R(()=>o.loop,()=>{C(n.value)}),R(()=>o.interval,()=>{l()});const p=Pe();return oe(()=>{R(()=>r.value,()=>{r.value.length>0&&C(o.initialIndex)},{immediate:!0}),p.value=$e(h.value,()=>{v()}),E()}),Ve(()=>{M(),h.value&&p.value&&p.value.stop()}),Oe(J,{root:h,isCardType:x,isVertical:u,items:r,loop:o.loop,addItem:T,removeItem:g,setActiveItem:C,setContainerHeight:function(a){o.height==="auto"&&(k.value=a)}}),{root:h,activeIndex:n,arrowDisplay:_,hasLabel:b,hover:I,isCardType:x,items:r,isVertical:u,containerStyle:f,isItemsTwoLength:y,handleButtonEnter:function(a){e(u)||r.value.forEach((t,s)=>{a===function(c,w){var Z,U,Y,Q;const O=e(r),ee=O.length;if(ee===0||!c.states.inStage)return!1;const Se=w+1,xe=w-1,ae=ee-1,Me=O[ae].states.active,Ee=O[0].states.active,He=(U=(Z=O[Se])==null?void 0:Z.states)==null?void 0:U.active,Ne=(Q=(Y=O[xe])==null?void 0:Y.states)==null?void 0:Q.active;return w===ae&&Ee||He?"left":!!(w===0&&Me||Ne)&&"right"}(t,s)&&(t.states.hover=!0)})},handleButtonLeave:function(){e(u)||r.value.forEach(a=>{a.states.hover=!1})},handleIndicatorClick:function(a){n.value=a},handleMouseEnter:function(){I.value=!0,o.pauseOnHover&&M()},handleMouseLeave:function(){I.value=!1,E()},setActiveItem:C,prev:function(){C(n.value-1)},next:function(){C(n.value+1)},PlaceholderItem:function(){var a;const t=(a=S.default)==null?void 0:a.call(S);if(!t)return null;const s=Re(t).filter(c=>We(c)&&c.type.name==="ElCarouselItem");return(s==null?void 0:s.length)===2&&o.loop&&!x.value?(y.value=!0,s):(y.value=!1,null)},isTwoLengthShow:a=>!y.value||(n.value<=1?a<=1:a>1),throttledArrowClick:$,throttledIndicatorHover:V}},ye=["onMouseenter","onClick"],Ie={key:0},be=q({name:"ElCarousel"});var Ce=ve(q({...be,props:fe,emits:me,setup(o,{expose:L,emit:i}){const r=o,{root:T,activeIndex:g,arrowDisplay:S,hasLabel:n,hover:d,isCardType:I,items:h,isVertical:k,containerStyle:y,handleButtonEnter:_,handleButtonLeave:b,handleIndicatorClick:x,handleMouseEnter:u,handleMouseLeave:f,setActiveItem:$,prev:V,next:M,PlaceholderItem:E,isTwoLengthShow:A,throttledArrowClick:C,throttledIndicatorHover:v}=ge(r,i),l=ne("carousel"),p=B(()=>{const t=[l.b(),l.m(r.direction)];return e(I)&&t.push(l.m("card")),t}),a=B(()=>{const t=[l.e("indicators"),l.em("indicators",r.direction)];return e(n)&&t.push(l.em("indicators","labels")),r.indicatorPosition==="outside"&&t.push(l.em("indicators","outside")),e(k)&&t.push(l.em("indicators","right")),t});return L({setActiveItem:$,prev:V,next:M}),(t,s)=>(H(),P("div",{ref_key:"root",ref:T,class:N(e(p)),onMouseenter:s[6]||(s[6]=j((...c)=>e(u)&&e(u)(...c),["stop"])),onMouseleave:s[7]||(s[7]=j((...c)=>e(f)&&e(f)(...c),["stop"]))},[F("div",{class:N(e(l).e("container")),style:ce(e(y))},[e(S)?(H(),se(ie,{key:0,name:"carousel-arrow-left",persisted:""},{default:G(()=>[W(F("button",{type:"button",class:N([e(l).e("arrow"),e(l).em("arrow","left")]),onMouseenter:s[0]||(s[0]=c=>e(_)("left")),onMouseleave:s[1]||(s[1]=(...c)=>e(b)&&e(b)(...c)),onClick:s[2]||(s[2]=j(c=>e(C)(e(g)-1),["stop"]))},[z(e(re),null,{default:G(()=>[z(e(je))]),_:1})],34),[[D,(t.arrow==="always"||e(d))&&(r.loop||e(g)>0)]])]),_:1})):X("v-if",!0),e(S)?(H(),se(ie,{key:1,name:"carousel-arrow-right",persisted:""},{default:G(()=>[W(F("button",{type:"button",class:N([e(l).e("arrow"),e(l).em("arrow","right")]),onMouseenter:s[3]||(s[3]=c=>e(_)("right")),onMouseleave:s[4]||(s[4]=(...c)=>e(b)&&e(b)(...c)),onClick:s[5]||(s[5]=j(c=>e(C)(e(g)+1),["stop"]))},[z(e(re),null,{default:G(()=>[z(e(ze))]),_:1})],34),[[D,(t.arrow==="always"||e(d))&&(r.loop||e(g)<e(h).length-1)]])]),_:1})):X("v-if",!0),z(e(E)),ue(t.$slots,"default")],6),t.indicatorPosition!=="none"?(H(),P("ul",{key:0,class:N(e(a))},[(H(!0),P(De,null,Xe(e(h),(c,w)=>W((H(),P("li",{key:w,class:N([e(l).e("indicator"),e(l).em("indicator",t.direction),e(l).is("active",w===e(g))]),onMouseenter:Z=>e(v)(w),onClick:j(Z=>e(x)(w),["stop"])},[F("button",{class:N(e(l).e("button"))},[e(n)?(H(),P("span",Ie,Ze(c.props.label),1)):X("v-if",!0)],2)],42,ye)),[[D,e(A)(w)]])),128))],2)):X("v-if",!0)],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const we=te({name:{type:String,default:""},label:{type:[String,Number],default:""}}),ke=(o,L)=>{const i=qe(J),r=le(),T=.83,g=m(),S=m(!1),n=m(0),d=m(1),I=m(!1),h=m(!1),k=m(!1),y=m(!1),{isCardType:_,isVertical:b}=i,x=(u,f,$)=>{var V;const M=e(_),E=(V=i.items.value.length)!=null?V:Number.NaN,A=u===f;M||Je($)||(y.value=A||u===$),!A&&E>2&&i.loop&&(u=function(v,l,p){const a=p-1,t=p/2;return l===0&&v===a?-1:l===a&&v===0?p:v<l-1&&l-v>=t?p+1:v>l+1&&v-l>=t?-2:v}(u,f,E));const C=e(b);I.value=A,M?(k.value=Math.round(Math.abs(u-f))<=1,n.value=function(v,l){var p,a;const t=e(b)?((p=i.root.value)==null?void 0:p.offsetHeight)||0:((a=i.root.value)==null?void 0:a.offsetWidth)||0;return k.value?t*(1.17*(v-l)+1)/4:v<l?-1.83*t/4:3.83*t/4}(u,f),d.value=e(I)?1:T):n.value=function(v,l,p){const a=i.root.value;return a?((p?a.offsetHeight:a.offsetWidth)||0)*(v-l):0}(u,f,C),h.value=!0,A&&g.value&&i.setContainerHeight(g.value.offsetHeight)};return oe(()=>{i.addItem({props:o,states:Fe({hover:S,translate:n,scale:d,active:I,ready:h,inStage:k,animating:y}),uid:r.uid,translateItem:x})}),Ge(()=>{i.removeItem(r.uid)}),{carouselItemRef:g,active:I,animating:y,hover:S,inStage:k,isVertical:b,translate:n,isCardType:_,scale:d,ready:h,handleItemClick:function(){if(i&&e(_)){const u=i.items.value.findIndex(({uid:f})=>f===r.uid);i.setActiveItem(u)}}}},_e=q({name:"ElCarouselItem"});var K=ve(q({..._e,props:we,setup(o){const L=o,i=ne("carousel"),{carouselItemRef:r,active:T,animating:g,hover:S,inStage:n,isVertical:d,translate:I,isCardType:h,scale:k,ready:y,handleItemClick:_}=ke(L),b=B(()=>({transform:[`${"translate"+(e(d)?"Y":"X")}(${e(I)}px)`,`scale(${e(k)})`].join(" ")}));return(x,u)=>W((H(),P("div",{ref_key:"carouselItemRef",ref:r,class:N([e(i).e("item"),e(i).is("active",e(T)),e(i).is("in-stage",e(n)),e(i).is("hover",e(S)),e(i).is("animating",e(g)),{[e(i).em("item","card")]:e(h),[e(i).em("item","card-vertical")]:e(h)&&e(d)}]),style:ce(e(b)),onClick:u[0]||(u[0]=(...f)=>e(_)&&e(_)(...f))},[e(h)?W((H(),P("div",{key:0,class:N(e(i).e("mask"))},null,2)),[[D,!e(T)]]):X("v-if",!0),ue(x.$slots,"default")],6)),[[D,e(y)]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);pe=Ke(Ce,{CarouselItem:K}),he=Ue(K)});export{he as E,ea as __tla,pe as a};

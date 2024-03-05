import{cB as ve,bP as me,b0 as pe,b7 as be,cf as ge,bb as X,d as W,cC as H,cD as ke,cE as _e,bJ as we,b1 as xe,cF as Ie,r as z,cG as ye,co as he,a2 as _,aT as K,an as ze,p as Ce,o as C,v as Q,f as i,w as b,g as m,S as f,a,aw as V,aS as Ne,a5 as N,$ as w,cH as Oe,c as Y,F as Z,cI as Te,cJ as Ae,cK as Le,cL as Re,aR as Ee,cM as Se,cN as Xe,q as Ye,x as Fe,a4 as $e,aK as Be,U as Pe,cO as De,b3 as Me,cP as L,bG as h,cQ as Ge,b5 as Je,__tla as We}from"./index-f0743f71.js";let j,O,He=Promise.all([(()=>{try{return We}catch{}})()]).then(async()=>{O=function(g,T,v){var n=!0,p=!0;if(typeof g!="function")throw new TypeError("Expected a function");return ve(v)&&(n="leading"in v?!!v.leading:n,p="trailing"in v?!!v.trailing:p),me(g,T,{leading:n,maxWait:T,trailing:p})};const q=pe({urlList:{type:be(Array),default:()=>ge([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),U={close:()=>!0,switch:g=>X(g),rotate:g=>X(g)},ee=["src"],ae=W({name:"ElImageViewer"});j=Je(Me(W({...ae,props:q,emits:U,setup(g,{expose:T,emit:v}){const n=g,p={CONTAIN:{name:"contain",icon:H(ke)},ORIGINAL:{name:"original",icon:H(_e)}},{t:se}=we(),l=xe("image-viewer"),{nextZIndex:ne}=Ie(),R=z(),F=z([]),$=ye(),I=z(!0),k=z(n.initialIndex),A=he(p.CONTAIN),t=z({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),le=_(()=>{const{urlList:e}=n;return e.length<=1}),B=_(()=>k.value===0),P=_(()=>k.value===n.urlList.length-1),te=_(()=>n.urlList[k.value]),oe=_(()=>[l.e("btn"),l.e("prev"),l.is("disabled",!n.infinite&&B.value)]),ie=_(()=>[l.e("btn"),l.e("next"),l.is("disabled",!n.infinite&&P.value)]),ce=_(()=>{const{scale:e,deg:s,offsetX:o,offsetY:u,enableTransition:c}=t.value;let r=o/e,d=u/e;switch(s%360){case 90:case-270:[r,d]=[d,-r];break;case 180:case-180:[r,d]=[-r,-d];break;case 270:case-90:[r,d]=[-d,r]}const y={transform:`scale(${e}) rotate(${s}deg) translate(${r}px, ${d}px)`,transition:c?"transform .3s":""};return A.value.name===p.CONTAIN.name&&(y.maxWidth=y.maxHeight="100%"),y}),ue=_(()=>X(n.zIndex)?n.zIndex:ne());function E(){$.stop(),v("close")}function re(){I.value=!1}function de(e){I.value=!1,e.target.alt=se("el.image.error")}function fe(e){if(I.value||e.button!==0||!R.value)return;t.value.enableTransition=!1;const{offsetX:s,offsetY:o}=t.value,u=e.pageX,c=e.pageY,r=O(y=>{t.value={...t.value,offsetX:s+y.pageX-u,offsetY:o+y.pageY-c}}),d=L(document,"mousemove",r);L(document,"mouseup",()=>{d()}),e.preventDefault()}function D(){t.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function M(){if(I.value)return;const e=Ge(p),s=Object.values(p),o=A.value.name,u=(s.findIndex(c=>c.name===o)+1)%e.length;A.value=p[e[u]],D()}function S(e){const s=n.urlList.length;k.value=(e+s)%s}function G(){B.value&&!n.infinite||S(k.value-1)}function J(){P.value&&!n.infinite||S(k.value+1)}function x(e,s={}){if(I.value)return;const{minScale:o,maxScale:u}=n,{zoomRate:c,rotateDeg:r,enableTransition:d}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...s};switch(e){case"zoomOut":t.value.scale>o&&(t.value.scale=Number.parseFloat((t.value.scale/c).toFixed(3)));break;case"zoomIn":t.value.scale<u&&(t.value.scale=Number.parseFloat((t.value.scale*c).toFixed(3)));break;case"clockwise":t.value.deg+=r,v("rotate",t.value.deg);break;case"anticlockwise":t.value.deg-=r,v("rotate",t.value.deg)}t.value.enableTransition=d}return K(te,()=>{ze(()=>{const e=F.value[0];e!=null&&e.complete||(I.value=!0)})}),K(k,e=>{D(),v("switch",e)}),Ce(()=>{var e,s;(function(){const o=O(c=>{switch(c.code){case h.esc:n.closeOnPressEscape&&E();break;case h.space:M();break;case h.left:G();break;case h.up:x("zoomIn");break;case h.right:J();break;case h.down:x("zoomOut")}}),u=O(c=>{x((c.deltaY||c.deltaX)<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});$.run(()=>{L(document,"keydown",o),L(document,"wheel",u)})})(),(s=(e=R.value)==null?void 0:e.focus)==null||s.call(e)}),T({setActiveItem:S}),(e,s)=>(C(),Q(De,{to:"body",disabled:!e.teleported},[i(Pe,{name:"viewer-fade",appear:""},{default:b(()=>[m("div",{ref_key:"wrapper",ref:R,tabindex:-1,class:f(a(l).e("wrapper")),style:V({zIndex:a(ue)})},[m("div",{class:f(a(l).e("mask")),onClick:s[0]||(s[0]=Ne(o=>e.hideOnClickModal&&E(),["self"]))},null,2),N(" CLOSE "),m("span",{class:f([a(l).e("btn"),a(l).e("close")]),onClick:E},[i(a(w),null,{default:b(()=>[i(a(Oe))]),_:1})],2),N(" ARROW "),a(le)?N("v-if",!0):(C(),Y(Z,{key:0},[m("span",{class:f(a(oe)),onClick:G},[i(a(w),null,{default:b(()=>[i(a(Te))]),_:1})],2),m("span",{class:f(a(ie)),onClick:J},[i(a(w),null,{default:b(()=>[i(a(Ae))]),_:1})],2)],64)),N(" ACTIONS "),m("div",{class:f([a(l).e("btn"),a(l).e("actions")])},[m("div",{class:f(a(l).e("actions__inner"))},[i(a(w),{onClick:s[1]||(s[1]=o=>x("zoomOut"))},{default:b(()=>[i(a(Le))]),_:1}),i(a(w),{onClick:s[2]||(s[2]=o=>x("zoomIn"))},{default:b(()=>[i(a(Re))]),_:1}),m("i",{class:f(a(l).e("actions__divider"))},null,2),i(a(w),{onClick:M},{default:b(()=>[(C(),Q(Ee(a(A).icon)))]),_:1}),m("i",{class:f(a(l).e("actions__divider"))},null,2),i(a(w),{onClick:s[3]||(s[3]=o=>x("anticlockwise"))},{default:b(()=>[i(a(Se))]),_:1}),i(a(w),{onClick:s[4]||(s[4]=o=>x("clockwise"))},{default:b(()=>[i(a(Xe))]),_:1})],2)],2),N(" CANVAS "),m("div",{class:f(a(l).e("canvas"))},[(C(!0),Y(Z,null,Ye(e.urlList,(o,u)=>Fe((C(),Y("img",{ref_for:!0,ref:c=>F.value[u]=c,key:o,src:o,style:V(a(ce)),class:f(a(l).e("img")),onLoad:re,onError:de,onMousedown:fe},null,46,ee)),[[$e,u===k.value]])),128))],2),Be(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]))});export{j as E,He as __tla,O as t};

import{a$ as L,dz as $,dA as I,b2 as x,d as B,dB as D,dC as H,Z as T,cF as q,dD as y,a1 as d,r as h,b0 as F,bG as j,ca as M,dE as O,X as i,o as t,v as P,f as r,w as n,x as U,g as w,aj as G,aR as J,R as a,c as o,aJ as c,t as N,a4 as l,a3 as X,S as Z,cM as K,b4 as Q,__tla as V}from"./index-d5b00dc9.js";let C,W=Promise.all([(()=>{try{return V}catch{}})()]).then(async()=>{const k=B({name:"ElDrawer",components:{ElOverlay:D,ElFocusTrap:H,ElIcon:T,Close:q},inheritAttrs:!1,props:L({...$,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),emits:I,setup(e,{slots:s}){y({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},d(()=>!!s.title)),y({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},d(()=>!!e.customClass));const f=h(),b=h(),m=F("drawer"),{t:v}=j(),u=d(()=>e.direction==="rtl"||e.direction==="ltr"),p=d(()=>M(e.size));return{...O(e,f),drawerRef:f,focusStartRef:b,isHorizontal:u,drawerSize:p,ns:m,t:v}}}),R=["aria-label","aria-labelledby","aria-describedby"],S=["id","aria-level"],_=["aria-label"],E=["id"];C=Q(x(k,[["render",function(e,s,f,b,m,v){const u=i("close"),p=i("el-icon"),z=i("el-focus-trap"),g=i("el-overlay");return t(),P(K,{to:"body",disabled:!e.appendToBody},[r(Z,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:n(()=>[U(r(g,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:n(()=>[r(z,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:n(()=>[w("div",G({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:s[1]||(s[1]=J(()=>{},["stop"]))}),[w("span",{ref:"focusStartRef",class:a(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(t(),o("header",{key:0,class:a(e.ns.e("header"))},[e.$slots.title?c(e.$slots,"title",{key:1},()=>[l(" DEPRECATED SLOT ")]):c(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?l("v-if",!0):(t(),o("span",{key:0,id:e.titleId,role:"heading","aria-level":e.headerAriaLevel,class:a(e.ns.e("title"))},N(e.title),11,S))]),e.showClose?(t(),o("button",{key:2,"aria-label":e.t("el.drawer.close"),class:a(e.ns.e("close-btn")),type:"button",onClick:s[0]||(s[0]=(...A)=>e.handleClose&&e.handleClose(...A))},[r(p,{class:a(e.ns.e("close"))},{default:n(()=>[r(u)]),_:1},8,["class"])],10,_)):l("v-if",!0)],2)):l("v-if",!0),e.rendered?(t(),o("div",{key:1,id:e.bodyId,class:a(e.ns.e("body"))},[c(e.$slots,"default")],10,E)):l("v-if",!0),e.$slots.footer?(t(),o("div",{key:2,class:a(e.ns.e("footer"))},[c(e.$slots,"footer")],2)):l("v-if",!0)],16,R)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[X,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]))});export{C as E,W as __tla};

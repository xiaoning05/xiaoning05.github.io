import{r as L,p as q,aT as F,b0 as b,d as p,b1 as _,o as a,c as r,v as g,a as t,b2 as K,a5 as h,S as m,b3 as w,b4 as P,F as k,q as S,aK as x,f as j,ak as $,aL as z,b5 as A,b6 as C,__tla as D}from"./index-f0743f71.js";let E,G=Promise.all([(()=>{try{return D}catch{}})()]).then(async()=>{const N=b({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),T=b({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),B=p({name:"ElSkeletonItem"});var u=w(p({...B,props:T,setup(v){const i=_("skeleton");return(o,s)=>(a(),r("div",{class:m([t(i).e("item"),t(i).e(o.variant)])},[o.variant==="image"?(a(),g(t(K),{key:0})):h("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const I=p({name:"ElSkeleton"});E=A(w(p({...I,props:N,setup(v,{expose:i}){const o=v,s=_("skeleton"),d=((e,c=0)=>{if(c===0)return e;const l=L(!1);let n=0;const f=()=>{n&&clearTimeout(n),n=window.setTimeout(()=>{l.value=e.value},c)};return q(f),F(()=>e.value,y=>{y?f():l.value=y}),l})(P(o,"loading"),o.throttle);return i({uiLoading:d}),(e,c)=>t(d)?(a(),r("div",$({key:0,class:[t(s).b(),t(s).is("animated",e.animated)]},e.$attrs),[(a(!0),r(k,null,S(e.count,l=>(a(),r(k,{key:l},[e.loading?x(e.$slots,"template",{key:l},()=>[j(u,{class:m(t(s).is("first")),variant:"p"},null,8,["class"]),(a(!0),r(k,null,S(e.rows,n=>(a(),g(u,{key:n,class:m([t(s).e("paragraph"),t(s).is("last",n===e.rows&&e.rows>1)]),variant:"p"},null,8,["class"]))),128))]):h("v-if",!0)],64))),128))],16)):x(e.$slots,"default",z($({key:1},e.$attrs)))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]),{SkeletonItem:u}),C(u)});export{E,G as __tla};

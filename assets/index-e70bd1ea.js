import{d as I,r,aQ as w,p as B,o as p,q as C,e as j,f as y,at as s,a,c as l,F as z,g as L,b,$ as f,M as P,t as g,aR as U,__tla as q}from"./index-34f06ebd.js";import{E,__tla as F}from"./el-image-a5cf0b35.js";import{__tla as G}from"./el-image-viewer-331eba6f.js";import{g as M,__tla as Q}from"./spu-7528f5a7.js";import{g as W,__tla as A}from"./combinationActivity-3a9acd1d.js";let R,D=Promise.all([(()=>{try{return q}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return A}catch{}})()]).then(async()=>{let m;m={key:0,class:"absolute left-0 top-0 z-1 items-center justify-center"},R=I({name:"PromotionCombination",__name:"index",props:{property:{}},setup($){const o=$,i=r([]);w(()=>o.property.activityId,async()=>{if(!o.property.activityId)return;const t=await W(o.property.activityId);t!=null&&t.spuId&&(i.value=[await M(t.spuId)])},{immediate:!0,deep:!0});const c=r(375),_=r(),e=r(2),v=r("100%"),d=r("0"),x=r("");return w(()=>[o.property,c,i.value.length],()=>{e.value=o.property.layoutType==="oneCol"?1:3;const t=(c.value-o.property.space*(e.value-1))/e.value;d.value=e.value===2?"64px":`${t}px`,x.value=`repeat(${e.value}, auto)`,v.value="100%"},{immediate:!0,deep:!0}),B(()=>{var t,u;c.value=((u=(t=_.value)==null?void 0:t.wrapRef)==null?void 0:u.offsetWidth)||375}),(t,u)=>{const h=E,T=U;return p(),C(T,{class:"z-1 min-h-30px","wrap-class":"w-full",ref_key:"containerRef",ref:_},{default:j(()=>[y("div",{class:"grid overflow-x-auto",style:s({gridGap:`${t.property.space}px`,gridTemplateColumns:a(x),width:a(v)})},[(p(!0),l(z,null,L(a(i),(n,k)=>(p(),l("div",{class:"relative box-content flex flex-row flex-wrap overflow-hidden bg-white",style:s({borderTopLeftRadius:`${t.property.borderRadiusTop}px`,borderTopRightRadius:`${t.property.borderRadiusTop}px`,borderBottomLeftRadius:`${t.property.borderRadiusBottom}px`,borderBottomRightRadius:`${t.property.borderRadiusBottom}px`}),key:k},[t.property.badge.show?(p(),l("div",m,[b(h,{fit:"cover",src:t.property.badge.imgUrl,class:"h-26px w-38px"},null,8,["src"])])):f("",!0),b(h,{fit:"cover",src:n.picUrl,style:s({width:a(d),height:a(d)})},null,8,["src","style"]),y("div",{class:P(["flex flex-col gap-8px p-8px box-border",{"w-[calc(100%-64px)]":a(e)===2,"w-full":a(e)===3}])},[t.property.fields.name.show?(p(),l("div",{key:0,class:"truncate text-12px",style:s({color:t.property.fields.name.color})},g(n.name),5)):f("",!0),y("div",null,[t.property.fields.price.show?(p(),l("span",{key:0,class:"text-12px",style:s({color:t.property.fields.price.color})}," \uFFE5"+g(n.price),5)):f("",!0)])],2)],4))),128))],4)]),_:1},512)}}})});export{D as __tla,R as default};
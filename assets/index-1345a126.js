import{d as B,r,aT as b,p as j,o as l,v as U,w as C,g as y,aw as s,a,c as p,F as E,q as P,f as g,a5 as f,S,t as R,aU as q,_ as z,__tla as D}from"./index-f0743f71.js";import{E as G,__tla as L}from"./el-image-015376ce.js";import{__tla as A}from"./el-image-viewer-d97aa530.js";import{g as F,__tla as M}from"./spu-5cbf535f.js";import{g as N,__tla as O}from"./seckillActivity-f4285444.js";let k,W=Promise.all([(()=>{try{return D}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return M}catch{}})(),(()=>{try{return O}catch{}})()]).then(async()=>{let m,_;m={key:0,class:"absolute left-0 top-0 z-1 items-center justify-center"},_=B({name:"PromotionSeckill",__name:"index",props:{property:{type:Object,required:!0}},setup(I){const o=I,i=r([]);b(()=>o.property.activityId,async()=>{if(!o.property.activityId)return;const e=await N(o.property.activityId);e!=null&&e.spuId&&(i.value=[await F(e.spuId)])},{immediate:!0,deep:!0});const c=r(375),v=r(),t=r(2),x=r("100%"),d=r("0"),w=r("");return b(()=>[o.property,c,i.value.length],()=>{t.value=o.property.layoutType==="oneCol"?1:3;const e=(c.value-o.property.space*(t.value-1))/t.value;d.value=t.value===2?"64px":`${e}px`,w.value=`repeat(${t.value}, auto)`,x.value="100%"},{immediate:!0,deep:!0}),j(()=>{var e,u;c.value=((u=(e=v.value)==null?void 0:e.wrapRef)==null?void 0:u.offsetWidth)||375}),(e,u)=>{const h=G,T=q;return l(),U(T,{class:"z-1 min-h-30px","wrap-class":"w-full",ref_key:"containerRef",ref:v},{default:C(()=>[y("div",{class:"grid overflow-x-auto",style:s({gridGap:`${e.property.space}px`,gridTemplateColumns:a(w),width:a(x)})},[(l(!0),p(E,null,P(a(i),(n,$)=>(l(),p("div",{class:"relative box-content flex flex-row flex-wrap overflow-hidden bg-white",style:s({borderTopLeftRadius:`${e.property.borderRadiusTop}px`,borderTopRightRadius:`${e.property.borderRadiusTop}px`,borderBottomLeftRadius:`${e.property.borderRadiusBottom}px`,borderBottomRightRadius:`${e.property.borderRadiusBottom}px`}),key:$},[e.property.badge.show?(l(),p("div",m,[g(h,{fit:"cover",src:e.property.badge.imgUrl,class:"h-26px w-38px"},null,8,["src"])])):f("",!0),g(h,{fit:"cover",src:n.picUrl,style:s({width:a(d),height:a(d)})},null,8,["src","style"]),y("div",{class:S(["flex flex-col gap-8px p-8px box-border",{"w-[calc(100%-64px)]":a(t)===2,"w-full":a(t)===3}])},[e.property.fields.name.show?(l(),p("div",{key:0,class:"truncate text-12px",style:s({color:e.property.fields.name.color})},R(n.name),5)):f("",!0),y("div",null,[e.property.fields.price.show?(l(),p("span",{key:0,class:"text-12px",style:s({color:e.property.fields.price.color})}," \uFFE5"+R(n.price),5)):f("",!0)])],2)],4))),128))],4)]),_:1},512)}}}),k=z(_,[["__file","E:/newCode/GYZX-UI-ADMIN/src/components/DiyEditor/components/mobile/PromotionSeckill/index.vue"]])});export{W as __tla,k as default};

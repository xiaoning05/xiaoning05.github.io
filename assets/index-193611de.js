import{d as B,r as a,aS as w,p as z,o as l,v as L,w as j,g as v,av as s,a as p,c as i,F as C,q as I,f as b,a4 as x,R as P,t as g,aT as S,__tla as U}from"./index-d5b00dc9.js";import{E as q,__tla as E}from"./el-image-5f4cbc55.js";import{__tla as F}from"./el-image-viewer-96313bcd.js";import{b as G,__tla as W}from"./spu-b7f32e1c.js";let R,A=Promise.all([(()=>{try{return U}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return W}catch{}})()]).then(async()=>{let m;m={key:0,class:"absolute left-0 top-0 z-1 items-center justify-center"},R=B({name:"ProductList",__name:"index",props:{property:{}},setup(T){const t=T,o=a([]);w(()=>t.property.spuIds,async()=>{o.value=await G(t.property.spuIds)},{immediate:!0,deep:!0});const u=a(375),_=a(),r=a(2),c=a("100%"),d=a("0"),y=a("");return w(()=>[t.property,u,o.value.length],()=>{r.value=t.property.layoutType==="twoCol"?2:3;const e=(u.value-t.property.space*(r.value-1))/r.value;d.value=r.value===2?"64px":`${e}px`,t.property.layoutType==="horizSwiper"?(y.value=`repeat(auto-fill, ${e}px)`,c.value=e*o.value.length+t.property.space*(o.value.length-1)+"px"):(y.value=`repeat(${r.value}, auto)`,c.value="100%")},{immediate:!0,deep:!0}),z(()=>{var e,n;u.value=((n=(e=_.value)==null?void 0:e.wrapRef)==null?void 0:n.offsetWidth)||375}),(e,n)=>{const h=q,$=S;return l(),L($,{class:"z-1 min-h-30px","wrap-class":"w-full",ref_key:"containerRef",ref:_},{default:j(()=>[v("div",{class:"grid overflow-x-auto",style:s({gridGap:`${e.property.space}px`,gridTemplateColumns:p(y),width:p(c)})},[(l(!0),i(C,null,I(p(o),(f,k)=>(l(),i("div",{class:"relative box-content flex flex-row flex-wrap overflow-hidden bg-white",style:s({borderTopLeftRadius:`${e.property.borderRadiusTop}px`,borderTopRightRadius:`${e.property.borderRadiusTop}px`,borderBottomLeftRadius:`${e.property.borderRadiusBottom}px`,borderBottomRightRadius:`${e.property.borderRadiusBottom}px`}),key:k},[e.property.badge.show?(l(),i("div",m,[b(h,{fit:"cover",src:e.property.badge.imgUrl,class:"h-26px w-38px"},null,8,["src"])])):x("",!0),b(h,{fit:"cover",src:f.picUrl,style:s({width:p(d),height:p(d)})},null,8,["src","style"]),v("div",{class:P(["flex flex-col gap-8px p-8px box-border",{"w-[calc(100%-64px)]":p(r)===2,"w-full":p(r)===3}])},[e.property.fields.name.show?(l(),i("div",{key:0,class:"truncate text-12px",style:s({color:e.property.fields.name.color})},g(f.name),5)):x("",!0),v("div",null,[e.property.fields.price.show?(l(),i("span",{key:0,class:"text-12px",style:s({color:e.property.fields.price.color})}," \uFFE5"+g(f.price),5)):x("",!0)])],2)],4))),128))],4)]),_:1},512)}}})});export{A as __tla,R as default};

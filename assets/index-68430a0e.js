import{d as U,r as o,aQ as q,o as t,q as u,e as g,c as l,F as m,g as v,a as s,f as w,at as x,M as z,t as b,$ as y,__tla as F}from"./index-34f06ebd.js";import{E as H,a as P,__tla as Q}from"./el-carousel-item-112d31ff.js";import{E as S,__tla as A}from"./el-image-a5cf0b35.js";import{__tla as B}from"./el-image-viewer-331eba6f.js";let k,D=Promise.all([(()=>{try{return F}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return B}catch{}})()]).then(async()=>{let h;h={class:"flex flex-row flex-wrap"},k=U({name:"MenuSwiper",__name:"index",props:{property:{}},setup(C){const a=C,p=o([]),_=o(0),n=o(0),d=o("");return q(()=>a.property,()=>{d.value=1/a.property.column*100+"%",n.value=32+(a.property.layout==="iconText"?62:42),_.value=a.property.row*n.value;const i=a.property.row*a.property.column;p.value=[];let r=[];for(const c of a.property.list)r.length===i&&(r=[]),r.length===0&&p.value.push(r),r.push(c)},{immediate:!0,deep:!0}),(i,r)=>{const c=S,$=H,j=P;return t(),u(j,{height:`${s(_)}px`,autoplay:!1,arrow:"hover","indicator-position":"outside"},{default:g(()=>[(t(!0),l(m,null,v(s(p),(E,M)=>(t(),u($,{key:M},{default:g(()=>[w("div",h,[(t(!0),l(m,null,v(E,(e,T)=>{var f;return t(),l("div",{key:T,class:"relative flex flex-col items-center justify-center",style:x({width:s(d),height:`${s(n)}px`})},[w("div",{class:z(["relative","h-42px w-42px"])},[(f=e.badge)!=null&&f.show?(t(),l("span",{key:0,class:"absolute right--10px top--10px z-1 h-20px rounded-10px p-x-6px text-center text-12px leading-20px",style:x({color:e.badge.textColor,backgroundColor:e.badge.bgColor})},b(e.badge.text),5)):y("",!0),e.iconUrl?(t(),u(c,{key:1,src:e.iconUrl,class:"h-full w-full"},null,8,["src"])):y("",!0)],2),i.property.layout==="iconText"?(t(),l("span",{key:0,class:"text-12px",style:x({color:e.titleColor,height:"20px",lineHeight:"20px"})},b(e.title),5)):y("",!0)],4)}),128))])]),_:2},1024))),128))]),_:1},8,["height"])}}})});export{D as __tla,k as default};
import{_ as C,__tla as w}from"./CountTo-993564ef.js";import{d as S,ae as a,o as n,c as u,f as t,b as s,N as g,t as _,q as k,e as N,a0 as v,a as r,ax as c,A as j,az as A,_ as B,__tla as I}from"./index-b079f499.js";let y,M=Promise.all([(()=>{try{return w}catch{}})(),(()=>{try{return I}catch{}})()]).then(async()=>{let i,o,d,p,f,m,x;i={class:"flex flex-row items-center gap-3 rounded bg-[var(--el-bg-color-overlay)] p-4"},o={class:"flex flex-col gap-1"},d={class:"flex items-center gap-1 text-gray-500"},p={class:"text-3.5"},f={class:"flex flex-row items-baseline gap-2"},m={class:"text-7"},x={class:"text-sm"},y=B(S({name:"SummaryCard",__name:"index",props:{title:a.string.def(""),tooltip:a.string.def(""),icon:a.string.def(""),iconColor:a.string.def(""),iconBgColor:a.string.def(""),prefix:a.string.def(""),value:a.number.def(0),decimals:a.number.def(0),percent:a.oneOfType([Number,String]).def(void 0)},setup:e=>($,q)=>{const l=j,b=A,h=C;return n(),u("div",i,[t("div",{class:g(["h-12 w-12 flex flex-shrink-0 items-center justify-center rounded-1",`${e.iconColor} ${e.iconBgColor}`])},[s(l,{icon:e.icon,class:"!text-6"},null,8,["icon"])],2),t("div",o,[t("div",d,[t("span",p,_(e.title),1),e.tooltip?(n(),k(b,{key:0,content:e.tooltip,placement:"top-start"},{default:N(()=>[s(l,{icon:"ep:warning",class:"item-center flex !text-3"})]),_:1},8,["content"])):v("",!0)]),t("div",f,[t("div",m,[s(h,{prefix:e.prefix,"end-val":e.value,decimals:e.decimals},null,8,["prefix","end-val","decimals"])]),e.percent!=null?(n(),u("span",{key:0,class:g(r(c)(e.percent)>0?"text-red-500":"text-green-500")},[t("span",x,_(Math.abs(r(c)(e.percent)))+"%",1),s(l,{icon:r(c)(e.percent)>0?"ep:caret-top":"ep:caret-bottom",class:"ml-0.5 !text-3"},null,8,["icon"])],2)):v("",!0)])])])}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/components/SummaryCard/index.vue"]])});export{y as S,M as __tla};

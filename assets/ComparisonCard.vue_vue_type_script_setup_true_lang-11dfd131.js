import{d as y,ad as s,X as h,e6 as w,o as C,c as j,f as a,t as l,b as r,e as q,h as p,M as R,a as t,aw as i,ah as M,_ as P,b$ as X,__tla as $}from"./index-34f06ebd.js";import{_ as k,__tla as z}from"./CountTo.vue_vue_type_script_setup_true_lang-fa13acf4.js";let x,A=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return z}catch{}})()]).then(async()=>{let c,f,d,o,m;c={class:"flex flex-col gap-2 bg-[var(--el-bg-color-overlay)] p-6"},f={class:"flex items-center justify-between text-gray-500"},d={class:"flex flex-row items-baseline justify-between"},o={class:"flex flex-row items-center justify-between text-sm"},m=a("span",{class:"text-gray-500"},"\u6628\u65E5\u6570\u636E",-1),x=y({name:"ComparisonCard",__name:"ComparisonCard",props:{title:s.string.def("").isRequired,tag:s.string.def(""),prefix:s.string.def(""),value:s.number.def(0).isRequired,reference:s.number.def(0).isRequired,decimals:s.number.def(0)},setup(e){const u=e,n=h(()=>w(u.value,u.reference));return(B,D)=>{const _=M,b=k,g=P,v=X;return C(),j("div",c,[a("div",f,[a("span",null,l(e.title),1),r(_,null,{default:q(()=>[p(l(e.tag),1)]),_:1})]),a("div",d,[r(b,{prefix:e.prefix,"end-val":e.value,decimals:e.decimals,class:"text-3xl"},null,8,["prefix","end-val","decimals"]),a("span",{class:R(t(i)(t(n))>0?"text-red-500":"text-green-500")},[p(l(Math.abs(t(i)(t(n))))+"% ",1),r(g,{icon:t(i)(t(n))>0?"ep:caret-top":"ep:caret-bottom",class:"!text-sm"},null,8,["icon"])],2)]),r(v,{class:"mb-1! mt-2!"}),a("div",o,[m,a("span",null,l(e.prefix||"")+l(e.reference),1)])])}}})});export{x as _,A as __tla};

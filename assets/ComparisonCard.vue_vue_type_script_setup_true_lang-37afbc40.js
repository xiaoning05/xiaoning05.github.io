import{d as y,ag as s,a1 as w,e1 as h,o as C,c as R,g as a,t as l,f as r,w as j,h as p,R as q,a as t,ay as i,ak as k,_ as M,c4 as P,__tla as z}from"./index-d5b00dc9.js";import{_ as A,__tla as B}from"./CountTo.vue_vue_type_script_setup_true_lang-53601850.js";let x,D=Promise.all([(()=>{try{return z}catch{}})(),(()=>{try{return B}catch{}})()]).then(async()=>{let c,f,o,d,m;c={class:"flex flex-col gap-2 bg-[var(--el-bg-color-overlay)] p-6"},f={class:"flex items-center justify-between text-gray-500"},o={class:"flex flex-row items-baseline justify-between"},d={class:"flex flex-row items-center justify-between text-sm"},m=a("span",{class:"text-gray-500"},"\u6628\u65E5\u6570\u636E",-1),x=y({name:"ComparisonCard",__name:"ComparisonCard",props:{title:s.string.def("").isRequired,tag:s.string.def(""),prefix:s.string.def(""),value:s.number.def(0).isRequired,reference:s.number.def(0).isRequired,decimals:s.number.def(0)},setup(e){const u=e,n=w(()=>h(u.value,u.reference));return(E,F)=>{const _=k,g=A,b=M,v=P;return C(),R("div",c,[a("div",f,[a("span",null,l(e.title),1),r(_,null,{default:j(()=>[p(l(e.tag),1)]),_:1})]),a("div",o,[r(g,{prefix:e.prefix,"end-val":e.value,decimals:e.decimals,class:"text-3xl"},null,8,["prefix","end-val","decimals"]),a("span",{class:q(t(i)(t(n))>0?"text-red-500":"text-green-500")},[p(l(Math.abs(t(i)(t(n))))+"% ",1),r(b,{icon:t(i)(t(n))>0?"ep:caret-top":"ep:caret-bottom",class:"!text-sm"},null,8,["icon"])],2)]),r(v,{class:"mb-1! mt-2!"}),a("div",d,[m,a("span",null,l(e.prefix||"")+l(e.reference),1)])])}}})});export{x as _,D as __tla};

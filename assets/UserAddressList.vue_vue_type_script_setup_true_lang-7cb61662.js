import{ap as f,d as w,r as l,p as h,x as y,a as e,o as g,v,w as n,f as a,G as x,H as I,I as S,__tla as A}from"./index-d2088aec.js";import{_ as N,__tla as T}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import{D as M,__tla as O}from"./dict-999fbee6.js";import{d as U,__tla as q}from"./formatTime-c7e0c543.js";let o,C=Promise.all([(()=>{try{return A}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return q}catch{}})()]).then(async()=>{o=w({__name:"UserAddressList",props:{userId:{type:Number,required:!0}},setup(i){const{userId:_}=i,r=l(!0);l(0);const s=l([]),d=async()=>{r.value=!0;try{s.value=await(async p=>await f.get({url:"/member/address/list",params:p}))({userId:_})}finally{r.value=!1}};return h(()=>{d()}),(p,D)=>{const t=x,u=N,c=I,m=S;return y((g(),v(c,{data:e(s),stripe:!0,"show-overflow-tooltip":!0},{default:n(()=>[a(t,{label:"\u5730\u5740\u7F16\u53F7",align:"center",prop:"id",width:"150px"}),a(t,{label:"\u6536\u4EF6\u4EBA\u540D\u79F0",align:"center",prop:"name",width:"150px"}),a(t,{label:"\u624B\u673A\u53F7",align:"center",prop:"mobile",width:"150px"}),a(t,{label:"\u5730\u533A\u7F16\u7801",align:"center",prop:"areaId",width:"150px"}),a(t,{label:"\u6536\u4EF6\u8BE6\u7EC6\u5730\u5740",align:"center",prop:"detailAddress"}),a(t,{label:"\u662F\u5426\u9ED8\u8BA4",align:"center",prop:"defaultStatus",width:"150px"},{default:n(b=>[a(u,{type:e(M).COMMON_STATUS,value:Number(b.row.defaultStatus)},null,8,["type","value"])]),_:1}),a(t,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:e(U),width:"180px"},null,8,["formatter"])]),_:1},8,["data"])),[[m,e(r)]])}}})});export{o as _,C as __tla};
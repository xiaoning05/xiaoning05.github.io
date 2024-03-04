import{d as O,i as z,r as f,e as P,p as j,K as F,o as c,c as G,f as t,w as i,h as d,x as y,v as m,a as e,a4 as Q,F as D,_ as Y,C as B,G as H,H as K,I as q,__tla as J}from"./index-d2088aec.js";import{_ as V,__tla as W}from"./index.vue_vue_type_script_setup_true_lang-6baf9e60.js";import{_ as X,__tla as Z}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import{d as $,__tla as aa}from"./formatTime-c7e0c543.js";import{L as N,_ as ta,g as ea,d as la,__tla as ra}from"./CustomerLimitConfigForm.vue_vue_type_script_setup_true_lang-6ae9ec85.js";import{D as na,__tla as oa}from"./dict-999fbee6.js";import{u as ia,__tla as sa}from"./useMessage-c5990e2c.js";let S,ca=Promise.all([(()=>{try{return J}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return sa}catch{}})()]).then(async()=>{S=O({name:"CustomerLimitConfigList",__name:"CustomerLimitConfigList",props:{confType:{}},setup(x){const C=ia(),{t:L}=z(),{confType:T}=x,g=f(!0),w=f(0),b=f([]),s=P({pageNo:1,pageSize:10,type:T}),p=async()=>{g.value=!0;try{const n=await ea(s);b.value=n.list,w.value=n.total}finally{g.value=!1}},k=f(),v=(n,l)=>{k.value.open(n,T,l)},R=()=>{s.pageNo=1,p()};return j(()=>{p()}),(n,l)=>{const I=Y,u=B,r=H,U=X,E=K,A=V,h=F("hasPermi"),M=q;return c(),G(D,null,[t(u,{plain:"",onClick:R},{default:i(()=>[t(I,{icon:"ep:refresh",class:"mr-5px"}),d(" \u5237\u65B0 ")]),_:1}),y((c(),m(u,{type:"primary",plain:"",onClick:l[0]||(l[0]=a=>v("create"))},{default:i(()=>[t(I,{icon:"ep:plus",class:"mr-5px"}),d(" \u65B0\u589E ")]),_:1})),[[h,["crm:customer-limit-config:create"]]]),y((c(),m(E,{data:e(b),stripe:!0,"show-overflow-tooltip":!0,class:"mt-4"},{default:i(()=>[t(r,{label:"\u7F16\u53F7",align:"center",prop:"id"}),t(r,{label:"\u89C4\u5219\u7C7B\u578B",align:"center",prop:"type"}),t(r,{label:"\u89C4\u5219\u9002\u7528\u4EBA\u7FA4",align:"center",formatter:a=>{var o;return(o=a.users)==null?void 0:o.map(_=>_.nickname).join("\uFF0C")}},null,8,["formatter"]),t(r,{label:"\u89C4\u5219\u9002\u7528\u90E8\u95E8",align:"center",formatter:a=>{var o;return(o=a.depts)==null?void 0:o.map(_=>_.name).join("\uFF0C")}},null,8,["formatter"]),t(r,{label:n.confType===e(N).CUSTOMER_QUANTITY_LIMIT?"\u62E5\u6709\u5BA2\u6237\u6570\u4E0A\u9650":"\u9501\u5B9A\u5BA2\u6237\u6570\u4E0A\u9650",align:"center",prop:"maxCount"},null,8,["label"]),n.confType===e(N).CUSTOMER_QUANTITY_LIMIT?(c(),m(r,{key:0,label:"\u6210\u4EA4\u5BA2\u6237\u662F\u5426\u5360\u7528\u62E5\u6709\u5BA2\u6237\u6570",align:"center",prop:"dealCountEnabled"},{default:i(a=>[t(U,{type:e(na).INFRA_BOOLEAN_STRING,value:a.row.dealCountEnabled},null,8,["type","value"])]),_:1})):Q("",!0),t(r,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:e($),width:"180px"},null,8,["formatter"]),t(r,{label:"\u64CD\u4F5C",align:"center","min-width":"110",fixed:"right"},{default:i(a=>[y((c(),m(u,{link:"",type:"primary",onClick:o=>v("update",a.row.id)},{default:i(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[h,["crm:customer-limit-config:update"]]]),y((c(),m(u,{link:"",type:"danger",onClick:o=>(async _=>{try{await C.delConfirm(),await la(_),C.success(L("common.delSuccess")),await p()}catch{}})(a.row.id)},{default:i(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[h,["crm:customer-limit-config:delete"]]])]),_:1})]),_:1},8,["data"])),[[M,e(g)]]),t(A,{total:e(w),page:e(s).pageNo,"onUpdate:page":l[1]||(l[1]=a=>e(s).pageNo=a),limit:e(s).pageSize,"onUpdate:limit":l[2]||(l[2]=a=>e(s).pageSize=a),onPagination:p},null,8,["total","page","limit"]),t(ta,{ref_key:"formRef",ref:k,onSuccess:p},null,512)],64)}}})});export{S as _,ca as __tla};
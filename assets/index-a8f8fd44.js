import{d as H,i as I,r as c,e as L,p as j,K as B,o as i,c as J,f as e,w as a,a as l,L as v,h as _,x as d,v as f,F as Q,P as W,A as Y,_ as Z,C as $,D as X,G as ee,H as ae,I as le,__tla as te}from"./index-d2088aec.js";import{_ as re,__tla as oe}from"./index.vue_vue_type_script_setup_true_lang-6baf9e60.js";import{_ as ne,__tla as se}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import{_ as pe,__tla as ce}from"./ContentWrap.vue_vue_type_script_setup_true_lang-3fd6aef1.js";import{D as ie,__tla as _e}from"./dict-999fbee6.js";import{d as ue}from"./download-20922b56.js";import{C as k,__tla as me}from"./index-7f902647.js";import{_ as de,__tla as fe}from"./CustomerForm.vue_vue_type_script_setup_true_lang-817bb6d9.js";import{u as ye,__tla as he}from"./useMessage-c5990e2c.js";import{__tla as ge}from"./index-9309eb20.js";import"./color-f5b6e279.js";import{__tla as be}from"./index-82efac34.js";import{__tla as we}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import"./constants-99751ef9.js";let F,xe=Promise.all([(()=>{try{return te}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return we}catch{}})()]).then(async()=>{F=H({name:"ErpCustomer",__name:"index",setup(Ce){const b=ye(),{t:z}=I(),w=c(!0),V=c([]),S=c(0),r=L({pageNo:1,pageSize:10,name:void 0,mobile:void 0,telephone:void 0}),N=c(),x=c(!1),u=async()=>{w.value=!0;try{const s=await k.getCustomerPage(r);V.value=s.list,S.value=s.total}finally{w.value=!1}},m=()=>{r.pageNo=1,u()},A=()=>{N.value.resetFields(),m()},U=c(),K=(s,o)=>{U.value.open(s,o)},D=async()=>{try{await b.exportConfirm(),x.value=!0;const s=await k.exportCustomer(r);ue.excel(s,"\u5BA2\u6237.xls")}catch{}finally{x.value=!1}};return j(()=>{u()}),(s,o)=>{const C=W,y=Y,h=Z,p=$,M=X,P=pe,n=ee,O=ne,R=ae,T=re,g=B("hasPermi"),q=le;return i(),J(Q,null,[e(P,null,{default:a(()=>[e(M,{class:"-mb-15px",model:l(r),ref_key:"queryFormRef",ref:N,inline:!0,"label-width":"68px"},{default:a(()=>[e(y,{label:"\u540D\u79F0",prop:"name"},{default:a(()=>[e(C,{modelValue:l(r).name,"onUpdate:modelValue":o[0]||(o[0]=t=>l(r).name=t),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:"",onKeyup:v(m,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(y,{label:"\u624B\u673A\u53F7\u7801",prop:"mobile"},{default:a(()=>[e(C,{modelValue:l(r).mobile,"onUpdate:modelValue":o[1]||(o[1]=t=>l(r).mobile=t),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",clearable:"",onKeyup:v(m,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(y,{label:"\u8054\u7CFB\u7535\u8BDD",prop:"telephone"},{default:a(()=>[e(C,{modelValue:l(r).telephone,"onUpdate:modelValue":o[2]||(o[2]=t=>l(r).telephone=t),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",clearable:"",onKeyup:v(m,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(y,null,{default:a(()=>[e(p,{onClick:m},{default:a(()=>[e(h,{icon:"ep:search",class:"mr-5px"}),_(" \u641C\u7D22")]),_:1}),e(p,{onClick:A},{default:a(()=>[e(h,{icon:"ep:refresh",class:"mr-5px"}),_(" \u91CD\u7F6E")]),_:1}),d((i(),f(p,{type:"primary",plain:"",onClick:o[3]||(o[3]=t=>K("create"))},{default:a(()=>[e(h,{icon:"ep:plus",class:"mr-5px"}),_(" \u65B0\u589E ")]),_:1})),[[g,["erp:customer:create"]]]),d((i(),f(p,{type:"success",plain:"",onClick:D,loading:l(x)},{default:a(()=>[e(h,{icon:"ep:download",class:"mr-5px"}),_(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[g,["erp:customer:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(P,null,{default:a(()=>[d((i(),f(R,{data:l(V),stripe:!0,"show-overflow-tooltip":!0},{default:a(()=>[e(n,{label:"\u540D\u79F0",align:"center",prop:"name"}),e(n,{label:"\u8054\u7CFB\u4EBA",align:"center",prop:"contact"}),e(n,{label:"\u624B\u673A\u53F7\u7801",align:"center",prop:"mobile"}),e(n,{label:"\u8054\u7CFB\u7535\u8BDD",align:"center",prop:"telephone"}),e(n,{label:"\u7535\u5B50\u90AE\u7BB1",align:"center",prop:"email"}),e(n,{label:"\u5907\u6CE8",align:"center",prop:"remark"}),e(n,{label:"\u6392\u5E8F",align:"center",prop:"sort"}),e(n,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:a(t=>[e(O,{type:l(ie).COMMON_STATUS,value:t.row.status},null,8,["type","value"])]),_:1}),e(n,{label:"\u64CD\u4F5C",align:"center"},{default:a(t=>[d((i(),f(p,{link:"",type:"primary",onClick:E=>K("update",t.row.id)},{default:a(()=>[_(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[g,["erp:customer:update"]]]),d((i(),f(p,{link:"",type:"danger",onClick:E=>(async G=>{try{await b.delConfirm(),await k.deleteCustomer(G),b.success(z("common.delSuccess")),await u()}catch{}})(t.row.id)},{default:a(()=>[_(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[g,["erp:customer:delete"]]])]),_:1})]),_:1},8,["data"])),[[q,l(w)]]),e(T,{total:l(S),page:l(r).pageNo,"onUpdate:page":o[4]||(o[4]=t=>l(r).pageNo=t),limit:l(r).pageSize,"onUpdate:limit":o[5]||(o[5]=t=>l(r).pageSize=t),onPagination:u},null,8,["total","page","limit"])]),_:1}),e(de,{ref_key:"formRef",ref:U,onSuccess:u},null,512)],64)}}})});export{xe as __tla,F as default};

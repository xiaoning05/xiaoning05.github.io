import{ap as d,d as M,i as N,r as u,e as W,a1 as O,o as V,v as S,w as l,a as e,h as T,a4 as Q,f as a,x as X,l as F,P as Y,A as Z,j as $,B as ee,k as ae,D as te,m as le,n as se,C as ce,I as re,__tla as oe}from"./index-d5b00dc9.js";import{_ as ue,__tla as de}from"./Dialog.vue_vue_type_style_index_0_lang-03cf6454.js";import{_ as ie,__tla as me}from"./ContentWrap.vue_vue_type_script_setup_true_lang-29ba9b6b.js";import{_ as pe,__tla as ne}from"./UploadFile-2e6f3e58.js";import{_ as _e,__tla as ke}from"./StockCheckItemForm.vue_vue_type_script_setup_true_lang-56da6bc1.js";import{u as fe,__tla as he}from"./useMessage-2288a5f2.js";let p,I,ve=Promise.all([(()=>{try{return oe}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return he}catch{}})()]).then(async()=>{p={getStockCheckPage:async s=>await d.get({url:"/erp/stock-check/page",params:s}),getStockCheck:async s=>await d.get({url:"/erp/stock-check/get?id="+s}),createStockCheck:async s=>await d.post({url:"/erp/stock-check/create",data:s}),updateStockCheck:async s=>await d.put({url:"/erp/stock-check/update",data:s}),updateStockCheckStatus:async(s,k)=>await d.put({url:"/erp/stock-check/update-status",params:{id:s,status:k}}),deleteStockCheck:async s=>await d.delete({url:"/erp/stock-check/delete",params:{ids:s.join(",")}}),exportStockCheck:async s=>await d.download({url:"/erp/stock-check/export-excel",params:s})},I=M({name:"StockCheckForm",__name:"StockCheckForm",emits:["success"],setup(s,{expose:k,emit:P}){const{t:f}=N(),b=fe(),i=u(!1),C=u(""),m=u(!1),h=u(""),c=u({id:void 0,customerId:void 0,checkTime:void 0,remark:void 0,fileUrl:"",items:[]}),j=W({checkTime:[{required:!0,message:"\u76D8\u70B9\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),v=O(()=>h.value==="detail"),y=u(),w=u("item"),g=u();k({open:async(o,t)=>{if(i.value=!0,C.value=f("action."+o),h.value=o,D(),t){m.value=!0;try{c.value=await p.getStockCheck(t)}finally{m.value=!1}}}});const A=P,B=async()=>{await y.value.validate(),await g.value.validate(),m.value=!0;try{const o=c.value;h.value==="create"?(await p.createStockCheck(o),b.success(f("common.createSuccess"))):(await p.updateStockCheck(o),b.success(f("common.updateSuccess"))),i.value=!1,A("success")}finally{m.value=!1}},D=()=>{var o;c.value={id:void 0,customerId:void 0,checkTime:void 0,remark:void 0,fileUrl:void 0,items:[]},(o=y.value)==null||o.resetFields()};return(o,t)=>{const x=Y,n=Z,_=$,R=ee,q=pe,J=ae,L=te,z=le,E=se,G=ie,U=ce,H=ue,K=re;return V(),S(H,{title:e(C),modelValue:e(i),"onUpdate:modelValue":t[6]||(t[6]=r=>F(i)?i.value=r:null),width:"1080"},{footer:l(()=>[e(v)?Q("",!0):(V(),S(U,{key:0,onClick:B,type:"primary",disabled:e(m)},{default:l(()=>[T(" \u786E \u5B9A ")]),_:1},8,["disabled"])),a(U,{onClick:t[5]||(t[5]=r=>i.value=!1)},{default:l(()=>[T("\u53D6 \u6D88")]),_:1})]),default:l(()=>[X((V(),S(L,{ref_key:"formRef",ref:y,model:e(c),rules:e(j),"label-width":"100px",disabled:e(v)},{default:l(()=>[a(J,{gutter:20},{default:l(()=>[a(_,{span:8},{default:l(()=>[a(n,{label:"\u76D8\u70B9\u5355\u53F7",prop:"no"},{default:l(()=>[a(x,{disabled:"",modelValue:e(c).no,"onUpdate:modelValue":t[0]||(t[0]=r=>e(c).no=r),placeholder:"\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210"},null,8,["modelValue"])]),_:1})]),_:1}),a(_,{span:8},{default:l(()=>[a(n,{label:"\u76D8\u70B9\u65F6\u95F4",prop:"checkTime"},{default:l(()=>[a(R,{modelValue:e(c).checkTime,"onUpdate:modelValue":t[1]||(t[1]=r=>e(c).checkTime=r),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u76D8\u70B9\u65F6\u95F4",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),a(_,{span:16},{default:l(()=>[a(n,{label:"\u5907\u6CE8",prop:"remark"},{default:l(()=>[a(x,{type:"textarea",modelValue:e(c).remark,"onUpdate:modelValue":t[2]||(t[2]=r=>e(c).remark=r),rows:1,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1}),a(_,{span:8},{default:l(()=>[a(n,{label:"\u9644\u4EF6",prop:"fileUrl"},{default:l(()=>[a(q,{"is-show-tip":!1,modelValue:e(c).fileUrl,"onUpdate:modelValue":t[3]||(t[3]=r=>e(c).fileUrl=r),limit:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","disabled"])),[[K,e(m)]]),a(G,null,{default:l(()=>[a(E,{modelValue:e(w),"onUpdate:modelValue":t[4]||(t[4]=r=>F(w)?w.value=r:null),class:"-mt-15px -mb-10px"},{default:l(()=>[a(z,{label:"\u76D8\u70B9\u4EA7\u54C1\u6E05\u5355",name:"item"},{default:l(()=>[a(_e,{ref_key:"itemFormRef",ref:g,items:e(c).items,disabled:e(v)},null,8,["items","disabled"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["title","modelValue"])}}})});export{p as S,I as _,ve as __tla};

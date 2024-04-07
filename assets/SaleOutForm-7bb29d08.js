import{d as te,k as re,r as c,n as oe,Y as ue,aR as de,e2 as se,o as n,c as f,b as e,e as r,a as t,q as p,h as g,a0 as ie,w as ce,F as v,g as S,j as E,d$ as C,L as ne,y as _e,a9 as me,z as pe,A as fe,B as ve,s as he,x as be,ab as ye,l as Ve,m as Pe,bX as Ue,C as Ie,v as we,_ as ke,__tla as ge}from"./index-aaa5adb3.js";import{_ as Se,__tla as Ce}from"./Dialog-9a73a39c.js";import{_ as xe,__tla as Oe}from"./ContentWrap-04d7f6d1.js";import{_ as Fe,__tla as Ne}from"./UploadFile-31413487.js";import{S as x,__tla as Te}from"./index-9d3f2f92.js";import Le,{__tla as Re}from"./SaleOutItemForm-f77c1809.js";import{C as Ae,__tla as qe}from"./index-b5d33a28.js";import{A as Ee,__tla as Xe}from"./index-65b8ad69.js";import ze,{__tla as Be}from"./SaleOrderOutEnableList-d0c2f025.js";import{g as De,__tla as Ge}from"./index-c1a6a53a.js";import{u as Me,__tla as Ye}from"./useMessage-873da1e2.js";import{__tla as Ze}from"./index-5b7dcbf1.js";import{__tla as $e}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-d92f2323.js";import{__tla as je}from"./useUpload-c52dec87.js";import{__tla as He}from"./index-fb6b5360.js";import{__tla as Je}from"./index-d9ace307.js";import{__tla as Ke}from"./index-8af83b34.js";import{__tla as Qe}from"./index-b47c179c.js";import{__tla as We}from"./index-c602062a.js";import{__tla as ea}from"./index-9f5016c6.js";import{__tla as aa}from"./formatTime-9c0e8879.js";import{__tla as la}from"./index-24f49689.js";let X,ta=Promise.all([(()=>{try{return ge}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return qe}catch{}})(),(()=>{try{return Xe}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return Ge}catch{}})(),(()=>{try{return Ye}catch{}})(),(()=>{try{return Ze}catch{}})(),(()=>{try{return $e}catch{}})(),(()=>{try{return je}catch{}})(),(()=>{try{return He}catch{}})(),(()=>{try{return Je}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Qe}catch{}})(),(()=>{try{return We}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return la}catch{}})()]).then(async()=>{X=ke(te({name:"SaleOutForm",__name:"SaleOutForm",emits:["success"],setup(ra,{expose:z,emit:B}){const{t:h}=re(),O=Me(),_=c(!1),F=c(""),m=c(!1),b=c(""),l=c({id:void 0,customerId:void 0,accountId:void 0,saleUserId:void 0,outTime:void 0,remark:void 0,fileUrl:"",discountPercent:0,discountPrice:0,totalPrice:0,otherPrice:0,orderNo:void 0,items:[],no:void 0}),D=oe({customerId:[{required:!0,message:"\u5BA2\u6237\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],outTime:[{required:!0,message:"\u51FA\u5E93\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),y=ue(()=>b.value==="detail"),V=c(),N=c([]),P=c([]),T=c([]),U=c("item"),L=c();de(()=>l.value,u=>{if(!u)return;const a=u.items.reduce((d,s)=>d+s.totalPrice,0),i=u.discountPercent!=null?se(a,u.discountPercent/100):0;l.value.discountPrice=i,l.value.totalPrice=a-i+u.otherPrice},{deep:!0}),z({open:async(u,a)=>{if(_.value=!0,F.value=h("action."+u),b.value=u,$(),a){m.value=!0;try{l.value=await x.getSaleOut(a)}finally{m.value=!1}}N.value=await Ae.getCustomerSimpleList(),T.value=await De(),P.value=await Ee.getAccountSimpleList();const i=P.value.find(d=>d.defaultStatus);i&&(l.value.accountId=i.id)}});const R=c(),G=()=>{R.value.open()},M=u=>{l.value.orderId=u.id,l.value.orderNo=u.no,l.value.customerId=u.customerId,l.value.accountId=u.accountId,l.value.saleUserId=u.saleUserId,l.value.discountPercent=u.discountPercent,l.value.remark=u.remark,l.value.fileUrl=u.fileUrl,u.items.forEach(a=>{a.totalCount=a.count,a.count=a.totalCount-a.outCount,a.orderItemId=a.id,a.id=void 0}),l.value.items=u.items.filter(a=>a.count>0)},Y=B,Z=async()=>{await V.value.validate(),await L.value.validate(),m.value=!0;try{const u=l.value;b.value==="create"?(await x.createSaleOut(u),O.success(h("common.createSuccess"))):(await x.updateSaleOut(u),O.success(h("common.updateSuccess"))),_.value=!1,Y("success")}finally{m.value=!1}},$=()=>{var u;l.value={id:void 0,customerId:void 0,accountId:void 0,saleUserId:void 0,outTime:void 0,remark:void 0,fileUrl:void 0,discountPercent:0,discountPrice:0,totalPrice:0,otherPrice:0,items:[]},(u=V.value)==null||u.resetFields()};return(u,a)=>{const i=ne,d=_e,s=me,j=pe,H=fe,I=ve,w=he,k=be,J=Fe,A=ye,K=Ve,Q=Pe,W=xe,q=Ue,ee=Ie,ae=Se,le=we;return n(),f(v,null,[e(ae,{title:t(F),modelValue:t(_),"onUpdate:modelValue":a[14]||(a[14]=o=>E(_)?_.value=o:null),width:"1440"},{footer:r(()=>[t(y)?ie("",!0):(n(),p(I,{key:0,onClick:Z,type:"primary",disabled:t(m)},{default:r(()=>[g(" \u786E \u5B9A ")]),_:1},8,["disabled"])),e(I,{onClick:a[13]||(a[13]=o=>_.value=!1)},{default:r(()=>[g("\u53D6 \u6D88")]),_:1})]),default:r(()=>[ce((n(),p(ee,{ref_key:"formRef",ref:V,model:t(l),rules:t(D),"label-width":"100px",disabled:t(y)},{default:r(()=>[e(A,{gutter:20},{default:r(()=>[e(s,{span:8},{default:r(()=>[e(d,{label:"\u51FA\u5E93\u5355\u53F7",prop:"no"},{default:r(()=>[e(i,{disabled:"",modelValue:t(l).no,"onUpdate:modelValue":a[0]||(a[0]=o=>t(l).no=o),placeholder:"\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u51FA\u5E93\u65F6\u95F4",prop:"outTime"},{default:r(()=>[e(j,{modelValue:t(l).outTime,"onUpdate:modelValue":a[1]||(a[1]=o=>t(l).outTime=o),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u51FA\u5E93\u65F6\u95F4",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u5173\u8054\u8BA2\u5355",prop:"orderNo"},{default:r(()=>[e(i,{modelValue:t(l).orderNo,"onUpdate:modelValue":a[2]||(a[2]=o=>t(l).orderNo=o),readonly:""},{append:r(()=>[e(I,{onClick:G},{default:r(()=>[e(H,{icon:"ep:search"}),g(" \u9009\u62E9 ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u5BA2\u6237",prop:"customerId"},{default:r(()=>[e(k,{modelValue:t(l).customerId,"onUpdate:modelValue":a[3]||(a[3]=o=>t(l).customerId=o),clearable:"",filterable:"",disabled:"",placeholder:"\u8BF7\u9009\u62E9\u5BA2\u6237",class:"!w-1/1"},{default:r(()=>[(n(!0),f(v,null,S(t(N),o=>(n(),p(w,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u9500\u552E\u4EBA\u5458",prop:"saleUserId"},{default:r(()=>[e(k,{modelValue:t(l).saleUserId,"onUpdate:modelValue":a[4]||(a[4]=o=>t(l).saleUserId=o),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u9500\u552E\u4EBA\u5458",class:"!w-1/1"},{default:r(()=>[(n(!0),f(v,null,S(t(T),o=>(n(),p(w,{key:o.id,label:o.nickname,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:16},{default:r(()=>[e(d,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[e(i,{type:"textarea",modelValue:t(l).remark,"onUpdate:modelValue":a[5]||(a[5]=o=>t(l).remark=o),rows:1,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u9644\u4EF6",prop:"fileUrl"},{default:r(()=>[e(J,{"is-show-tip":!1,modelValue:t(l).fileUrl,"onUpdate:modelValue":a[6]||(a[6]=o=>t(l).fileUrl=o),limit:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(W,null,{default:r(()=>[e(Q,{modelValue:t(U),"onUpdate:modelValue":a[7]||(a[7]=o=>E(U)?U.value=o:null),class:"-mt-15px -mb-10px"},{default:r(()=>[e(K,{label:"\u51FA\u5E93\u4EA7\u54C1\u6E05\u5355",name:"item"},{default:r(()=>[e(Le,{ref_key:"itemFormRef",ref:L,items:t(l).items,disabled:t(y)},null,8,["items","disabled"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(A,{gutter:20},{default:r(()=>[e(s,{span:8},{default:r(()=>[e(d,{label:"\u4F18\u60E0\u7387\uFF08%\uFF09",prop:"discountPercent"},{default:r(()=>[e(q,{modelValue:t(l).discountPercent,"onUpdate:modelValue":a[8]||(a[8]=o=>t(l).discountPercent=o),"controls-position":"right",min:0,precision:2,placeholder:"\u8BF7\u8F93\u5165\u4F18\u60E0\u7387",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u6536\u6B3E\u4F18\u60E0",prop:"discountPrice"},{default:r(()=>[e(i,{disabled:"",modelValue:t(l).discountPrice,"onUpdate:modelValue":a[9]||(a[9]=o=>t(l).discountPrice=o),formatter:t(C)},null,8,["modelValue","formatter"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u4F18\u60E0\u540E\u91D1\u989D"},{default:r(()=>[e(i,{disabled:"","model-value":t(l).totalPrice-t(l).otherPrice,formatter:t(C)},null,8,["model-value","formatter"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u5176\u5B83\u8D39\u7528",prop:"otherPrice"},{default:r(()=>[e(q,{modelValue:t(l).otherPrice,"onUpdate:modelValue":a[10]||(a[10]=o=>t(l).otherPrice=o),"controls-position":"right",min:0,precision:2,placeholder:"\u8BF7\u8F93\u5165\u5176\u5B83\u8D39\u7528",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u7ED3\u7B97\u8D26\u6237",prop:"accountId"},{default:r(()=>[e(k,{modelValue:t(l).accountId,"onUpdate:modelValue":a[11]||(a[11]=o=>t(l).accountId=o),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u7ED3\u7B97\u8D26\u6237",class:"!w-1/1"},{default:r(()=>[(n(!0),f(v,null,S(t(P),o=>(n(),p(w,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u5E94\u6536\u91D1\u989D"},{default:r(()=>[e(i,{disabled:"",modelValue:t(l).totalPrice,"onUpdate:modelValue":a[12]||(a[12]=o=>t(l).totalPrice=o),formatter:t(C)},null,8,["modelValue","formatter"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","disabled"])),[[le,t(m)]])]),_:1},8,["title","modelValue"]),e(ze,{ref_key:"saleOrderOutEnableListRef",ref:R,onSuccess:M},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/sale/out/SaleOutForm.vue"]])});export{ta as __tla,X as default};
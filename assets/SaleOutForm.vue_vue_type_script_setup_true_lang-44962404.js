import{d as te,k as oe,r as c,n as ue,X as re,aQ as de,e0 as se,o as n,c as f,b as e,e as o,a as t,q as p,h as g,$ as ie,w as ce,F as v,g as S,j as z,dZ as C,K as ne,y as me,a8 as _e,z as pe,_ as fe,A as ve,s as be,x as Ve,aa as he,l as ye,m as Pe,bU as Ue,B as Ie,v as ke,__tla as we}from"./index-34f06ebd.js";import{_ as ge,__tla as Se}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{_ as Ce,__tla as xe}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{_ as Oe,__tla as Te}from"./UploadFile-ebcd7c2f.js";import{S as x,__tla as Fe}from"./index-bd508a96.js";import{_ as Ne,__tla as qe}from"./SaleOutItemForm.vue_vue_type_script_setup_true_lang-3d3e941a.js";import{C as Re,__tla as Ae}from"./index-f0279aca.js";import{A as Le,__tla as ze}from"./index-e0b5c053.js";import{_ as Be,__tla as Ee}from"./SaleOrderOutEnableList.vue_vue_type_script_setup_true_lang-e5c9f800.js";import{g as Qe,__tla as Ze}from"./index-cd2bb9f6.js";import{u as je,__tla as De}from"./useMessage-7a5ab7ef.js";let B,Ge=Promise.all([(()=>{try{return we}catch{}})(),(()=>{try{return Se}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return qe}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return Ze}catch{}})(),(()=>{try{return De}catch{}})()]).then(async()=>{B=te({name:"SaleOutForm",__name:"SaleOutForm",emits:["success"],setup(Ke,{expose:E,emit:Q}){const{t:b}=oe(),O=je(),m=c(!1),T=c(""),_=c(!1),V=c(""),l=c({id:void 0,customerId:void 0,accountId:void 0,saleUserId:void 0,outTime:void 0,remark:void 0,fileUrl:"",discountPercent:0,discountPrice:0,totalPrice:0,otherPrice:0,orderNo:void 0,items:[],no:void 0}),Z=ue({customerId:[{required:!0,message:"\u5BA2\u6237\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],outTime:[{required:!0,message:"\u51FA\u5E93\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),h=re(()=>V.value==="detail"),y=c(),F=c([]),P=c([]),N=c([]),U=c("item"),q=c();de(()=>l.value,r=>{if(!r)return;const a=r.items.reduce((d,s)=>d+s.totalPrice,0),i=r.discountPercent!=null?se(a,r.discountPercent/100):0;l.value.discountPrice=i,l.value.totalPrice=a-i+r.otherPrice},{deep:!0}),E({open:async(r,a)=>{if(m.value=!0,T.value=b("action."+r),V.value=r,M(),a){_.value=!0;try{l.value=await x.getSaleOut(a)}finally{_.value=!1}}F.value=await Re.getCustomerSimpleList(),N.value=await Qe(),P.value=await Le.getAccountSimpleList();const i=P.value.find(d=>d.defaultStatus);i&&(l.value.accountId=i.id)}});const R=c(),j=()=>{R.value.open()},D=r=>{l.value.orderId=r.id,l.value.orderNo=r.no,l.value.customerId=r.customerId,l.value.accountId=r.accountId,l.value.saleUserId=r.saleUserId,l.value.discountPercent=r.discountPercent,l.value.remark=r.remark,l.value.fileUrl=r.fileUrl,r.items.forEach(a=>{a.totalCount=a.count,a.count=a.totalCount-a.outCount,a.orderItemId=a.id,a.id=void 0}),l.value.items=r.items.filter(a=>a.count>0)},G=Q,K=async()=>{await y.value.validate(),await q.value.validate(),_.value=!0;try{const r=l.value;V.value==="create"?(await x.createSaleOut(r),O.success(b("common.createSuccess"))):(await x.updateSaleOut(r),O.success(b("common.updateSuccess"))),m.value=!1,G("success")}finally{_.value=!1}},M=()=>{var r;l.value={id:void 0,customerId:void 0,accountId:void 0,saleUserId:void 0,outTime:void 0,remark:void 0,fileUrl:void 0,discountPercent:0,discountPrice:0,totalPrice:0,otherPrice:0,items:[]},(r=y.value)==null||r.resetFields()};return(r,a)=>{const i=ne,d=me,s=_e,X=pe,$=fe,I=ve,k=be,w=Ve,H=Oe,A=he,J=ye,W=Pe,Y=Ce,L=Ue,ee=Ie,ae=ge,le=ke;return n(),f(v,null,[e(ae,{title:t(T),modelValue:t(m),"onUpdate:modelValue":a[14]||(a[14]=u=>z(m)?m.value=u:null),width:"1440"},{footer:o(()=>[t(h)?ie("",!0):(n(),p(I,{key:0,onClick:K,type:"primary",disabled:t(_)},{default:o(()=>[g(" \u786E \u5B9A ")]),_:1},8,["disabled"])),e(I,{onClick:a[13]||(a[13]=u=>m.value=!1)},{default:o(()=>[g("\u53D6 \u6D88")]),_:1})]),default:o(()=>[ce((n(),p(ee,{ref_key:"formRef",ref:y,model:t(l),rules:t(Z),"label-width":"100px",disabled:t(h)},{default:o(()=>[e(A,{gutter:20},{default:o(()=>[e(s,{span:8},{default:o(()=>[e(d,{label:"\u51FA\u5E93\u5355\u53F7",prop:"no"},{default:o(()=>[e(i,{disabled:"",modelValue:t(l).no,"onUpdate:modelValue":a[0]||(a[0]=u=>t(l).no=u),placeholder:"\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(d,{label:"\u51FA\u5E93\u65F6\u95F4",prop:"outTime"},{default:o(()=>[e(X,{modelValue:t(l).outTime,"onUpdate:modelValue":a[1]||(a[1]=u=>t(l).outTime=u),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u51FA\u5E93\u65F6\u95F4",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(d,{label:"\u5173\u8054\u8BA2\u5355",prop:"orderNo"},{default:o(()=>[e(i,{modelValue:t(l).orderNo,"onUpdate:modelValue":a[2]||(a[2]=u=>t(l).orderNo=u),readonly:""},{append:o(()=>[e(I,{onClick:j},{default:o(()=>[e($,{icon:"ep:search"}),g(" \u9009\u62E9 ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(d,{label:"\u5BA2\u6237",prop:"customerId"},{default:o(()=>[e(w,{modelValue:t(l).customerId,"onUpdate:modelValue":a[3]||(a[3]=u=>t(l).customerId=u),clearable:"",filterable:"",disabled:"",placeholder:"\u8BF7\u9009\u62E9\u5BA2\u6237",class:"!w-1/1"},{default:o(()=>[(n(!0),f(v,null,S(t(F),u=>(n(),p(k,{key:u.id,label:u.name,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(d,{label:"\u9500\u552E\u4EBA\u5458",prop:"saleUserId"},{default:o(()=>[e(w,{modelValue:t(l).saleUserId,"onUpdate:modelValue":a[4]||(a[4]=u=>t(l).saleUserId=u),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u9500\u552E\u4EBA\u5458",class:"!w-1/1"},{default:o(()=>[(n(!0),f(v,null,S(t(N),u=>(n(),p(k,{key:u.id,label:u.nickname,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:16},{default:o(()=>[e(d,{label:"\u5907\u6CE8",prop:"remark"},{default:o(()=>[e(i,{type:"textarea",modelValue:t(l).remark,"onUpdate:modelValue":a[5]||(a[5]=u=>t(l).remark=u),rows:1,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(d,{label:"\u9644\u4EF6",prop:"fileUrl"},{default:o(()=>[e(H,{"is-show-tip":!1,modelValue:t(l).fileUrl,"onUpdate:modelValue":a[6]||(a[6]=u=>t(l).fileUrl=u),limit:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(Y,null,{default:o(()=>[e(W,{modelValue:t(U),"onUpdate:modelValue":a[7]||(a[7]=u=>z(U)?U.value=u:null),class:"-mt-15px -mb-10px"},{default:o(()=>[e(J,{label:"\u51FA\u5E93\u4EA7\u54C1\u6E05\u5355",name:"item"},{default:o(()=>[e(Ne,{ref_key:"itemFormRef",ref:q,items:t(l).items,disabled:t(h)},null,8,["items","disabled"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(A,{gutter:20},{default:o(()=>[e(s,{span:8},{default:o(()=>[e(d,{label:"\u4F18\u60E0\u7387\uFF08%\uFF09",prop:"discountPercent"},{default:o(()=>[e(L,{modelValue:t(l).discountPercent,"onUpdate:modelValue":a[8]||(a[8]=u=>t(l).discountPercent=u),"controls-position":"right",min:0,precision:2,placeholder:"\u8BF7\u8F93\u5165\u4F18\u60E0\u7387",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(d,{label:"\u6536\u6B3E\u4F18\u60E0",prop:"discountPrice"},{default:o(()=>[e(i,{disabled:"",modelValue:t(l).discountPrice,"onUpdate:modelValue":a[9]||(a[9]=u=>t(l).discountPrice=u),formatter:t(C)},null,8,["modelValue","formatter"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(d,{label:"\u4F18\u60E0\u540E\u91D1\u989D"},{default:o(()=>[e(i,{disabled:"","model-value":t(l).totalPrice-t(l).otherPrice,formatter:t(C)},null,8,["model-value","formatter"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(d,{label:"\u5176\u5B83\u8D39\u7528",prop:"otherPrice"},{default:o(()=>[e(L,{modelValue:t(l).otherPrice,"onUpdate:modelValue":a[10]||(a[10]=u=>t(l).otherPrice=u),"controls-position":"right",min:0,precision:2,placeholder:"\u8BF7\u8F93\u5165\u5176\u5B83\u8D39\u7528",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(d,{label:"\u7ED3\u7B97\u8D26\u6237",prop:"accountId"},{default:o(()=>[e(w,{modelValue:t(l).accountId,"onUpdate:modelValue":a[11]||(a[11]=u=>t(l).accountId=u),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u7ED3\u7B97\u8D26\u6237",class:"!w-1/1"},{default:o(()=>[(n(!0),f(v,null,S(t(P),u=>(n(),p(k,{key:u.id,label:u.name,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:o(()=>[e(d,{label:"\u5E94\u6536\u91D1\u989D"},{default:o(()=>[e(i,{disabled:"",modelValue:t(l).totalPrice,"onUpdate:modelValue":a[12]||(a[12]=u=>t(l).totalPrice=u),formatter:t(C)},null,8,["modelValue","formatter"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","disabled"])),[[le,t(_)]])]),_:1},8,["title","modelValue"]),e(Be,{ref_key:"saleOrderOutEnableListRef",ref:R,onSuccess:D},null,512)],64)}}})});export{B as _,Ge as __tla};

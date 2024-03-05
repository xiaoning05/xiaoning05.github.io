import{d as W,i as ee,r as i,e as ae,a2 as le,aT as te,e2 as re,o as m,v as p,w as r,a,h as O,a5 as oe,f as e,x as ue,c as A,F as q,q as C,l as G,d$ as L,Q as de,A as se,j as ie,B as ce,y as me,z as ne,k as _e,m as pe,n as fe,c0 as ve,G as he,D as Ve,J as ye,_ as be,__tla as Pe}from"./index-f0743f71.js";import{_ as we,__tla as Ue}from"./Dialog-8f786edd.js";import{_ as ge,__tla as Ie}from"./ContentWrap-5acc4fb9.js";import{_ as ke,__tla as xe}from"./UploadFile-8fbb57ef.js";import{P,__tla as Se}from"./index-a1e48d8b.js";import Te,{__tla as Fe}from"./PurchaseOrderItemForm-c3adc727.js";import{S as Oe,__tla as Ae}from"./index-8447da2a.js";import{g as qe,__tla as Ce}from"./index-5f468446.js";import{A as Ge,__tla as Le}from"./index-d5e40f66.js";import{u as Re,__tla as ze}from"./useMessage-75a00a06.js";import{__tla as Be}from"./index-a48a5540.js";import{__tla as De}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-cd3de5a5.js";import{__tla as Je}from"./useUpload-27a6f734.js";import{__tla as Me}from"./index-21698e53.js";import{__tla as Ne}from"./index-45617213.js";import{__tla as Ye}from"./index-cf2468e1.js";let R,je=Promise.all([(()=>{try{return Pe}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Se}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Be}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Je}catch{}})(),(()=>{try{return Me}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return Ye}catch{}})()]).then(async()=>{R=be(W({name:"PurchaseOrderForm",__name:"PurchaseOrderForm",emits:["success"],setup(Ee,{expose:z,emit:B}){const{t:f}=ee(),w=Re(),n=i(!1),U=i(""),_=i(!1),v=i(""),o=i({id:void 0,supplierId:void 0,accountId:void 0,orderTime:void 0,remark:void 0,fileUrl:"",discountPercent:0,discountPrice:0,totalPrice:0,depositPrice:0,items:[],no:void 0}),D=ae({supplierId:[{required:!0,message:"\u4F9B\u5E94\u5546\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],orderTime:[{required:!0,message:"\u8BA2\u5355\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),h=le(()=>v.value==="detail"),V=i(),g=i([]),y=i([]),J=i([]),b=i("item"),I=i();te(()=>o.value,u=>{if(!u)return;const l=u.items.reduce((d,s)=>d+s.totalPrice,0),c=u.discountPercent!=null?re(l,u.discountPercent/100):0;o.value.discountPrice=c,o.value.totalPrice=l-c},{deep:!0}),z({open:async(u,l)=>{if(n.value=!0,U.value=f("action."+u),v.value=u,Y(),l){_.value=!0;try{o.value=await P.getPurchaseOrder(l)}finally{_.value=!1}}g.value=await Oe.getSupplierSimpleList(),J.value=await qe(),y.value=await Ge.getAccountSimpleList();const c=y.value.find(d=>d.defaultStatus);c&&(o.value.accountId=c.id)}});const M=B,N=async()=>{await V.value.validate(),await I.value.validate(),_.value=!0;try{const u=o.value;v.value==="create"?(await P.createPurchaseOrder(u),w.success(f("common.createSuccess"))):(await P.updatePurchaseOrder(u),w.success(f("common.updateSuccess"))),n.value=!1,M("success")}finally{_.value=!1}},Y=()=>{var u;o.value={id:void 0,supplierId:void 0,accountId:void 0,orderTime:void 0,remark:void 0,fileUrl:void 0,discountPercent:0,discountPrice:0,totalPrice:0,depositPrice:0,items:[]},(u=V.value)==null||u.resetFields()};return(u,l)=>{const c=de,d=se,s=ie,j=ce,k=me,x=ne,E=ke,S=_e,Q=pe,X=fe,Z=ge,T=ve,$=he,F=Ve,H=we,K=ye;return m(),p(H,{title:a(U),modelValue:a(n),"onUpdate:modelValue":l[12]||(l[12]=t=>G(n)?n.value=t:null),width:"1080"},{footer:r(()=>[a(h)?oe("",!0):(m(),p(F,{key:0,onClick:N,type:"primary",disabled:a(_)},{default:r(()=>[O(" \u786E \u5B9A ")]),_:1},8,["disabled"])),e(F,{onClick:l[11]||(l[11]=t=>n.value=!1)},{default:r(()=>[O("\u53D6 \u6D88")]),_:1})]),default:r(()=>[ue((m(),p($,{ref_key:"formRef",ref:V,model:a(o),rules:a(D),"label-width":"100px",disabled:a(h)},{default:r(()=>[e(S,{gutter:20},{default:r(()=>[e(s,{span:8},{default:r(()=>[e(d,{label:"\u8BA2\u5355\u5355\u53F7",prop:"no"},{default:r(()=>[e(c,{disabled:"",modelValue:a(o).no,"onUpdate:modelValue":l[0]||(l[0]=t=>a(o).no=t),placeholder:"\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u8BA2\u5355\u65F6\u95F4",prop:"orderTime"},{default:r(()=>[e(j,{modelValue:a(o).orderTime,"onUpdate:modelValue":l[1]||(l[1]=t=>a(o).orderTime=t),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u8BA2\u5355\u65F6\u95F4",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u4F9B\u5E94\u5546",prop:"supplierId"},{default:r(()=>[e(x,{modelValue:a(o).supplierId,"onUpdate:modelValue":l[2]||(l[2]=t=>a(o).supplierId=t),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4F9B\u5E94\u5546",class:"!w-1/1"},{default:r(()=>[(m(!0),A(q,null,C(a(g),t=>(m(),p(k,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:16},{default:r(()=>[e(d,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[e(c,{type:"textarea",modelValue:a(o).remark,"onUpdate:modelValue":l[3]||(l[3]=t=>a(o).remark=t),rows:1,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u9644\u4EF6",prop:"fileUrl"},{default:r(()=>[e(E,{"is-show-tip":!1,modelValue:a(o).fileUrl,"onUpdate:modelValue":l[4]||(l[4]=t=>a(o).fileUrl=t),limit:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(Z,null,{default:r(()=>[e(X,{modelValue:a(b),"onUpdate:modelValue":l[5]||(l[5]=t=>G(b)?b.value=t:null),class:"-mt-15px -mb-10px"},{default:r(()=>[e(Q,{label:"\u8BA2\u5355\u4EA7\u54C1\u6E05\u5355",name:"item"},{default:r(()=>[e(Te,{ref_key:"itemFormRef",ref:I,items:a(o).items,disabled:a(h)},null,8,["items","disabled"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(S,{gutter:20},{default:r(()=>[e(s,{span:8},{default:r(()=>[e(d,{label:"\u4F18\u60E0\u7387\uFF08%\uFF09",prop:"discountPercent"},{default:r(()=>[e(T,{modelValue:a(o).discountPercent,"onUpdate:modelValue":l[6]||(l[6]=t=>a(o).discountPercent=t),"controls-position":"right",min:0,precision:2,placeholder:"\u8BF7\u8F93\u5165\u4F18\u60E0\u7387",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u4ED8\u6B3E\u4F18\u60E0",prop:"discountPrice"},{default:r(()=>[e(c,{disabled:"",modelValue:a(o).discountPrice,"onUpdate:modelValue":l[7]||(l[7]=t=>a(o).discountPrice=t),formatter:a(L)},null,8,["modelValue","formatter"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u4F18\u60E0\u540E\u91D1\u989D"},{default:r(()=>[e(c,{disabled:"",modelValue:a(o).totalPrice,"onUpdate:modelValue":l[8]||(l[8]=t=>a(o).totalPrice=t),formatter:a(L)},null,8,["modelValue","formatter"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u7ED3\u7B97\u8D26\u6237",prop:"accountId"},{default:r(()=>[e(x,{modelValue:a(o).accountId,"onUpdate:modelValue":l[9]||(l[9]=t=>a(o).accountId=t),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u7ED3\u7B97\u8D26\u6237",class:"!w-1/1"},{default:r(()=>[(m(!0),A(q,null,C(a(y),t=>(m(),p(k,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(d,{label:"\u652F\u4ED8\u8BA2\u91D1",prop:"depositPrice"},{default:r(()=>[e(T,{modelValue:a(o).depositPrice,"onUpdate:modelValue":l[10]||(l[10]=t=>a(o).depositPrice=t),"controls-position":"right",min:0,precision:2,placeholder:"\u8BF7\u8F93\u5165\u652F\u4ED8\u8BA2\u91D1",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","disabled"])),[[K,a(_)]])]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/purchase/order/PurchaseOrderForm.vue"]])});export{je as __tla,R as default};

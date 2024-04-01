import{d as Y,k as ee,r as i,n as ae,X as le,aQ as te,e0 as re,o as n,q as _,e as r,a,h as O,$ as de,b as e,w as ue,c as q,F as A,g as L,j as z,dZ as B,K as oe,y as se,a8 as ie,z as ce,s as ne,x as me,aa as pe,l as _e,m as fe,bU as ve,B as Ve,A as be,v as Pe,__tla as he}from"./index-34f06ebd.js";import{_ as ye,__tla as we}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{_ as Ue,__tla as ge}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{_ as ke,__tla as Ie}from"./UploadFile-ebcd7c2f.js";import{P as y,__tla as xe}from"./index-92d207a1.js";import{_ as Se,__tla as Te}from"./PurchaseOrderItemForm.vue_vue_type_script_setup_true_lang-4c871776.js";import{S as Fe,__tla as Oe}from"./index-5250969d.js";import{g as qe,__tla as Ae}from"./index-cd2bb9f6.js";import{A as Le,__tla as ze}from"./index-e0b5c053.js";import{u as Be,__tla as Ce}from"./useMessage-7a5ab7ef.js";let C,Ke=Promise.all([(()=>{try{return he}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Ce}catch{}})()]).then(async()=>{C=Y({name:"PurchaseOrderForm",__name:"PurchaseOrderForm",emits:["success"],setup(Qe,{expose:K,emit:Q}){const{t:f}=ee(),w=Be(),m=i(!1),U=i(""),p=i(!1),v=i(""),d=i({id:void 0,supplierId:void 0,accountId:void 0,orderTime:void 0,remark:void 0,fileUrl:"",discountPercent:0,discountPrice:0,totalPrice:0,depositPrice:0,items:[],no:void 0}),R=ae({supplierId:[{required:!0,message:"\u4F9B\u5E94\u5546\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],orderTime:[{required:!0,message:"\u8BA2\u5355\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),V=le(()=>v.value==="detail"),b=i(),g=i([]),P=i([]),Z=i([]),h=i("item"),k=i();te(()=>d.value,u=>{if(!u)return;const l=u.items.reduce((o,s)=>o+s.totalPrice,0),c=u.discountPercent!=null?re(l,u.discountPercent/100):0;d.value.discountPrice=c,d.value.totalPrice=l-c},{deep:!0}),K({open:async(u,l)=>{if(m.value=!0,U.value=f("action."+u),v.value=u,E(),l){p.value=!0;try{d.value=await y.getPurchaseOrder(l)}finally{p.value=!1}}g.value=await Fe.getSupplierSimpleList(),Z.value=await qe(),P.value=await Le.getAccountSimpleList();const c=P.value.find(o=>o.defaultStatus);c&&(d.value.accountId=c.id)}});const j=Q,D=async()=>{await b.value.validate(),await k.value.validate(),p.value=!0;try{const u=d.value;v.value==="create"?(await y.createPurchaseOrder(u),w.success(f("common.createSuccess"))):(await y.updatePurchaseOrder(u),w.success(f("common.updateSuccess"))),m.value=!1,j("success")}finally{p.value=!1}},E=()=>{var u;d.value={id:void 0,supplierId:void 0,accountId:void 0,orderTime:void 0,remark:void 0,fileUrl:void 0,discountPercent:0,discountPrice:0,totalPrice:0,depositPrice:0,items:[]},(u=b.value)==null||u.resetFields()};return(u,l)=>{const c=oe,o=se,s=ie,N=ce,I=ne,x=me,X=ke,S=pe,$=_e,G=fe,H=Ue,T=ve,J=Ve,F=be,M=ye,W=Pe;return n(),_(M,{title:a(U),modelValue:a(m),"onUpdate:modelValue":l[12]||(l[12]=t=>z(m)?m.value=t:null),width:"1080"},{footer:r(()=>[a(V)?de("",!0):(n(),_(F,{key:0,onClick:D,type:"primary",disabled:a(p)},{default:r(()=>[O(" \u786E \u5B9A ")]),_:1},8,["disabled"])),e(F,{onClick:l[11]||(l[11]=t=>m.value=!1)},{default:r(()=>[O("\u53D6 \u6D88")]),_:1})]),default:r(()=>[ue((n(),_(J,{ref_key:"formRef",ref:b,model:a(d),rules:a(R),"label-width":"100px",disabled:a(V)},{default:r(()=>[e(S,{gutter:20},{default:r(()=>[e(s,{span:8},{default:r(()=>[e(o,{label:"\u8BA2\u5355\u5355\u53F7",prop:"no"},{default:r(()=>[e(c,{disabled:"",modelValue:a(d).no,"onUpdate:modelValue":l[0]||(l[0]=t=>a(d).no=t),placeholder:"\u4FDD\u5B58\u65F6\u81EA\u52A8\u751F\u6210"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(o,{label:"\u8BA2\u5355\u65F6\u95F4",prop:"orderTime"},{default:r(()=>[e(N,{modelValue:a(d).orderTime,"onUpdate:modelValue":l[1]||(l[1]=t=>a(d).orderTime=t),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u8BA2\u5355\u65F6\u95F4",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(o,{label:"\u4F9B\u5E94\u5546",prop:"supplierId"},{default:r(()=>[e(x,{modelValue:a(d).supplierId,"onUpdate:modelValue":l[2]||(l[2]=t=>a(d).supplierId=t),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u4F9B\u5E94\u5546",class:"!w-1/1"},{default:r(()=>[(n(!0),q(A,null,L(a(g),t=>(n(),_(I,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:16},{default:r(()=>[e(o,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[e(c,{type:"textarea",modelValue:a(d).remark,"onUpdate:modelValue":l[3]||(l[3]=t=>a(d).remark=t),rows:1,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(o,{label:"\u9644\u4EF6",prop:"fileUrl"},{default:r(()=>[e(X,{"is-show-tip":!1,modelValue:a(d).fileUrl,"onUpdate:modelValue":l[4]||(l[4]=t=>a(d).fileUrl=t),limit:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(H,null,{default:r(()=>[e(G,{modelValue:a(h),"onUpdate:modelValue":l[5]||(l[5]=t=>z(h)?h.value=t:null),class:"-mt-15px -mb-10px"},{default:r(()=>[e($,{label:"\u8BA2\u5355\u4EA7\u54C1\u6E05\u5355",name:"item"},{default:r(()=>[e(Se,{ref_key:"itemFormRef",ref:k,items:a(d).items,disabled:a(V)},null,8,["items","disabled"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(S,{gutter:20},{default:r(()=>[e(s,{span:8},{default:r(()=>[e(o,{label:"\u4F18\u60E0\u7387\uFF08%\uFF09",prop:"discountPercent"},{default:r(()=>[e(T,{modelValue:a(d).discountPercent,"onUpdate:modelValue":l[6]||(l[6]=t=>a(d).discountPercent=t),"controls-position":"right",min:0,precision:2,placeholder:"\u8BF7\u8F93\u5165\u4F18\u60E0\u7387",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(o,{label:"\u4ED8\u6B3E\u4F18\u60E0",prop:"discountPrice"},{default:r(()=>[e(c,{disabled:"",modelValue:a(d).discountPrice,"onUpdate:modelValue":l[7]||(l[7]=t=>a(d).discountPrice=t),formatter:a(B)},null,8,["modelValue","formatter"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(o,{label:"\u4F18\u60E0\u540E\u91D1\u989D"},{default:r(()=>[e(c,{disabled:"",modelValue:a(d).totalPrice,"onUpdate:modelValue":l[8]||(l[8]=t=>a(d).totalPrice=t),formatter:a(B)},null,8,["modelValue","formatter"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(o,{label:"\u7ED3\u7B97\u8D26\u6237",prop:"accountId"},{default:r(()=>[e(x,{modelValue:a(d).accountId,"onUpdate:modelValue":l[9]||(l[9]=t=>a(d).accountId=t),clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u7ED3\u7B97\u8D26\u6237",class:"!w-1/1"},{default:r(()=>[(n(!0),q(A,null,L(a(P),t=>(n(),_(I,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{span:8},{default:r(()=>[e(o,{label:"\u652F\u4ED8\u8BA2\u91D1",prop:"depositPrice"},{default:r(()=>[e(T,{modelValue:a(d).depositPrice,"onUpdate:modelValue":l[10]||(l[10]=t=>a(d).depositPrice=t),"controls-position":"right",min:0,precision:2,placeholder:"\u8BF7\u8F93\u5165\u652F\u4ED8\u8BA2\u91D1",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","disabled"])),[[W,a(p)]])]),_:1},8,["title","modelValue"])}}})});export{C as _,Ke as __tla};
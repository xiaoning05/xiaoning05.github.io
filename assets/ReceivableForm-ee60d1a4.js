import{d as M,k as N,r as s,o as i,q as v,e as d,b as t,a,h as k,w as X,c as T,F as R,g as S,j as Y,L as q,y as z,z as G,s as P,x as Z,bX as H,C as J,B as K,v as O,_ as Q,__tla as W}from"./index-b079f499.js";import{_ as $,__tla as ee}from"./Dialog-07bcd661.js";import{e as ae,D as le,__tla as oe}from"./dict-2c56908b.js";import{b as te,c as de,u as re,__tla as ue}from"./index-c48d4a3d.js";import{g as se,__tla as ce}from"./index-41e17afa.js";import{u as ne,__tla as ie}from"./useMessage-66b9cf03.js";let C,pe=Promise.all([(()=>{try{return W}catch{}})(),(()=>{try{return ee}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return ie}catch{}})()]).then(async()=>{C=Q(M({__name:"ReceivableForm",emits:["success"],setup(me,{expose:E,emit:x}){const{t:_}=N(),V=ne(),I=s([]),c=s(!1),b=s(""),n=s(!1),h=s(""),o=s({id:void 0,no:void 0,planId:void 0,customerId:void 0,contractId:void 0,checkStatus:void 0,processInstanceId:void 0,returnTime:void 0,returnType:void 0,price:void 0,ownerUserId:void 0,batchId:void 0,sort:void 0,dataScope:void 0,dataScopeDeptIds:void 0,status:void 0,remark:void 0}),m=s();E({open:async(u,l)=>{if(c.value=!0,b.value=_("action."+u),h.value=u,g(),l){n.value=!0;try{o.value=await te(l)}finally{n.value=!1}}I.value=await se()}});const D=x,F=async()=>{if(m&&await m.value.validate()){n.value=!0;try{const u=o.value;h.value==="create"?(await de(u),V.success(_("common.createSuccess"))):(await re(u),V.success(_("common.updateSuccess"))),c.value=!1,D("success")}finally{n.value=!1}}},g=()=>{var u;o.value={id:void 0,no:void 0,planId:void 0,customerId:void 0,contractId:void 0,checkStatus:void 0,processInstanceId:void 0,returnTime:void 0,returnType:void 0,price:void 0,ownerUserId:void 0,batchId:void 0,sort:void 0,dataScope:void 0,dataScopeDeptIds:void 0,status:void 0,remark:void 0},(u=m.value)==null||u.resetFields()};return(u,l)=>{const p=q,r=z,j=G,y=P,U=Z,f=H,A=J,w=K,B=$,L=O;return i(),v(B,{title:a(b),modelValue:a(c),"onUpdate:modelValue":l[12]||(l[12]=e=>Y(c)?c.value=e:null)},{footer:d(()=>[t(w,{onClick:F,type:"primary",disabled:a(n)},{default:d(()=>[k("\u786E \u5B9A")]),_:1},8,["disabled"]),t(w,{onClick:l[11]||(l[11]=e=>c.value=!1)},{default:d(()=>[k("\u53D6 \u6D88")]),_:1})]),default:d(()=>[X((i(),v(A,{ref_key:"formRef",ref:m,model:a(o),rules:u.formRules,"label-width":"100px"},{default:d(()=>[t(r,{label:"\u56DE\u6B3E\u7F16\u53F7",prop:"no"},{default:d(()=>[t(p,{modelValue:a(o).no,"onUpdate:modelValue":l[0]||(l[0]=e=>a(o).no=e),placeholder:"\u8BF7\u8F93\u5165\u56DE\u6B3E\u7F16\u53F7"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u56DE\u6B3E\u8BA1\u5212",prop:"planId"},{default:d(()=>[t(p,{modelValue:a(o).planId,"onUpdate:modelValue":l[1]||(l[1]=e=>a(o).planId=e),placeholder:"\u8BF7\u8F93\u5165\u56DE\u6B3E\u8BA1\u5212"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5BA2\u6237\u540D\u79F0",prop:"customerId"},{default:d(()=>[t(p,{modelValue:a(o).customerId,"onUpdate:modelValue":l[2]||(l[2]=e=>a(o).customerId=e),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5408\u540C\u540D\u79F0",prop:"contractId"},{default:d(()=>[t(p,{modelValue:a(o).contractId,"onUpdate:modelValue":l[3]||(l[3]=e=>a(o).contractId=e),placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u56DE\u6B3E\u65E5\u671F",prop:"returnTime"},{default:d(()=>[t(j,{modelValue:a(o).returnTime,"onUpdate:modelValue":l[4]||(l[4]=e=>a(o).returnTime=e),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u56DE\u6B3E\u65E5\u671F"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u56DE\u6B3E\u65B9\u5F0F",prop:"returnType"},{default:d(()=>[t(U,{modelValue:a(o).returnType,"onUpdate:modelValue":l[5]||(l[5]=e=>a(o).returnType=e),placeholder:"\u8BF7\u9009\u62E9\u56DE\u6B3E\u65B9\u5F0F"},{default:d(()=>[(i(!0),T(R,null,S(a(ae)(a(le).CRM_RECEIVABLE_RETURN_TYPE),e=>(i(),v(y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(r,{label:"\u56DE\u6B3E\u91D1\u989D",prop:"price"},{default:d(()=>[t(f,{modelValue:a(o).price,"onUpdate:modelValue":l[6]||(l[6]=e=>a(o).price=e),placeholder:"\u8BF7\u8F93\u5165\u56DE\u6B3E\u91D1\u989D"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserId"},{default:d(()=>[t(U,{modelValue:a(o).ownerUserId,"onUpdate:modelValue":l[7]||(l[7]=e=>a(o).ownerUserId=e),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA"},{default:d(()=>[(i(!0),T(R,null,S(a(I),e=>(i(),v(y,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(r,{label:"\u6279\u6B21",prop:"batchId"},{default:d(()=>[t(f,{modelValue:a(o).batchId,"onUpdate:modelValue":l[8]||(l[8]=e=>a(o).batchId=e),placeholder:"\u8BF7\u8F93\u5165\u6279\u6B21"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u663E\u793A\u6392\u5E8F",prop:"sort"},{default:d(()=>[t(f,{modelValue:a(o).sort,"onUpdate:modelValue":l[9]||(l[9]=e=>a(o).sort=e),min:0,"controls-position":"right"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5907\u6CE8",prop:"remark"},{default:d(()=>[t(p,{type:"textarea",rows:3,modelValue:a(o).remark,"onUpdate:modelValue":l[10]||(l[10]=e=>a(o).remark=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[L,a(n)]])]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/receivable/ReceivableForm.vue"]])});export{pe as __tla,C as default};
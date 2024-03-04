import{d as O,r as n,aS as X,a1 as H,p as J,X as Y,o as _,c as p,x as Z,a as t,v as c,w as l,f as a,F as i,q as b,h as E,j as G,P as K,A as Q,y as W,z as $,B as aa,C as ea,k as la,D as ta,I as ra,__tla as da}from"./index-d2088aec.js";import{C as ua,__tla as oa}from"./CardTitle-803c12ef.js";import{b as _a,__tla as na}from"./index-8fa07f93.js";import{a as sa,__tla as ma}from"./index-2a8c377b.js";import{g as pa,__tla as ca}from"./index-456c5cde.js";import{g as ia,__tla as fa}from"./index-3b1c9cde.js";import{h as Va,__tla as ya}from"./index-63130e49.js";import{_ as ba,__tla as ha}from"./ProductList.vue_vue_type_script_setup_true_lang-60623b80.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as va}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import"./color-f5b6e279.js";import{__tla as Ia}from"./dict-999fbee6.js";import{__tla as Ua}from"./index-bbc28546.js";import{__tla as Pa}from"./formatter-38679f6e.js";import{__tla as ka}from"./Table.vue_vue_type_style_index_0_scoped_1ee0f9ba_lang-2efd46fd.js";import{__tla as wa}from"./tsxHelper-9f8b23eb.js";import{__tla as xa}from"./index-9309eb20.js";import{__tla as Da}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{__tla as Ta}from"./index.vue_vue_type_script_setup_true_lang-6baf9e60.js";let D,ga=Promise.all([(()=>{try{return da}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ha}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return Ia}catch{}})(),(()=>{try{return Ua}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return xa}catch{}})(),(()=>{try{return Da}catch{}})(),(()=>{try{return Ta}catch{}})()]).then(async()=>{D=O({name:"ContractDetailOA",__name:"index",props:{id:{}},setup(T){const g=T,h=n(!1),r=n({}),B=n(),U=n();X(()=>r.value.productItems,s=>{s&&s.length!==0?r.value.productPrice=s.reduce((d,f)=>isNaN(d+f.totalPrice)?0:d+f.totalPrice,0):r.value.productPrice=0},{deep:!0});const L=async()=>{await Promise.all([C(),z(),A(),N()])},P=n([]),C=async()=>{P.value=await _a()},k=n([]),M=H(()=>k.value.filter(s=>s.customerId===r.value.customerId)),A=async()=>{k.value=await ia()},v=n([]),z=async()=>{v.value=await pa()},w=n([]),N=async()=>{w.value=await Va()};return J(()=>{(async()=>{await L(),h.value=!0;try{r.value=await sa(g.id)}finally{h.value=!1}})()}),(s,d)=>{const f=ua,u=G,m=K,o=Q,V=W,y=$,I=aa,R=ea,S=la,j=ta,q=Y("BPMLModel"),F=ra;return _(),p(i,null,[Z((_(),c(j,{ref_key:"formRef",ref:B,model:t(r),"label-width":"110px"},{default:l(()=>[a(S,null,{default:l(()=>[a(u,{span:24,class:"mb-10px"},{default:l(()=>[a(f,{title:"\u57FA\u672C\u4FE1\u606F"})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u5408\u540C\u540D\u79F0",prop:"name"},{default:l(()=>[a(m,{modelValue:t(r).name,"onUpdate:modelValue":d[0]||(d[0]=e=>t(r).name=e),placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u5408\u540C\u7F16\u53F7",prop:"no"},{default:l(()=>[a(m,{modelValue:t(r).no,"onUpdate:modelValue":d[1]||(d[1]=e=>t(r).no=e),placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u7F16\u53F7"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u5BA2\u6237",prop:"customerId"},{default:l(()=>[a(y,{modelValue:t(r).customerId,"onUpdate:modelValue":d[2]||(d[2]=e=>t(r).customerId=e)},{default:l(()=>[(_(!0),p(i,null,b(t(P),e=>(_(),c(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u5BA2\u6237\u7B7E\u7EA6\u4EBA",prop:"contactId"},{default:l(()=>[a(y,{modelValue:t(r).contactId,"onUpdate:modelValue":d[3]||(d[3]=e=>t(r).contactId=e),disabled:!t(r).customerId},{default:l(()=>[(_(!0),p(i,null,b(t(M),e=>(_(),c(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u516C\u53F8\u7B7E\u7EA6\u4EBA",prop:"signUserId"},{default:l(()=>[a(y,{modelValue:t(r).signUserId,"onUpdate:modelValue":d[4]||(d[4]=e=>t(r).signUserId=e)},{default:l(()=>[(_(!0),p(i,null,b(t(v),e=>(_(),c(V,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserId"},{default:l(()=>[a(y,{modelValue:t(r).ownerUserId,"onUpdate:modelValue":d[5]||(d[5]=e=>t(r).ownerUserId=e)},{default:l(()=>[(_(!0),p(i,null,b(t(v),e=>(_(),c(V,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u5546\u673A\u540D\u79F0",prop:"businessId"},{default:l(()=>[a(y,{modelValue:t(r).businessId,"onUpdate:modelValue":d[6]||(d[6]=e=>t(r).businessId=e)},{default:l(()=>[(_(!0),p(i,null,b(t(w),e=>(_(),c(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u5408\u540C\u91D1\u989D(\u5143)",prop:"price"},{default:l(()=>[a(m,{modelValue:t(r).price,"onUpdate:modelValue":d[7]||(d[7]=e=>t(r).price=e),placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u91D1\u989D"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u4E0B\u5355\u65E5\u671F",prop:"orderDate"},{default:l(()=>[a(I,{modelValue:t(r).orderDate,"onUpdate:modelValue":d[8]||(d[8]=e=>t(r).orderDate=e),placeholder:"\u9009\u62E9\u4E0B\u5355\u65E5\u671F",type:"date","value-format":"x"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u5F00\u59CB\u65F6\u95F4",prop:"startTime"},{default:l(()=>[a(I,{modelValue:t(r).startTime,"onUpdate:modelValue":d[9]||(d[9]=e=>t(r).startTime=e),placeholder:"\u9009\u62E9\u5F00\u59CB\u65F6\u95F4",type:"date","value-format":"x"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u7ED3\u675F\u65F6\u95F4",prop:"endTime"},{default:l(()=>[a(I,{modelValue:t(r).endTime,"onUpdate:modelValue":d[10]||(d[10]=e=>t(r).endTime=e),placeholder:"\u9009\u62E9\u7ED3\u675F\u65F6\u95F4",type:"date","value-format":"x"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:24},{default:l(()=>[a(o,{label:"\u5907\u6CE8",prop:"remark"},{default:l(()=>[a(m,{modelValue:t(r).remark,"onUpdate:modelValue":d[11]||(d[11]=e=>t(r).remark=e),rows:3,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:24},{default:l(()=>[a(o,{label:"\u4EA7\u54C1\u5217\u8868",prop:"productList"},{default:l(()=>[a(ba,{modelValue:t(r).productItems,"onUpdate:modelValue":d[12]||(d[12]=e=>t(r).productItems=e)},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u6574\u5355\u6298\u6263(%)",prop:"discountPercent"},{default:l(()=>[a(m,{modelValue:t(r).discountPercent,"onUpdate:modelValue":d[13]||(d[13]=e=>t(r).discountPercent=e),placeholder:"\u8BF7\u8F93\u5165\u6574\u5355\u6298\u6263"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:l(()=>[a(o,{label:"\u4EA7\u54C1\u603B\u91D1\u989D(\u5143)",prop:"productPrice"},{default:l(()=>[a(m,{modelValue:t(r).productPrice,"onUpdate:modelValue":d[14]||(d[14]=e=>t(r).productPrice=e),placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u603B\u91D1\u989D"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:24},{default:l(()=>[a(f,{class:"mb-10px",title:"\u5BA1\u6279\u4FE1\u606F"})]),_:1}),a(u,{span:12},{default:l(()=>[a(R,{class:"m-20px",link:"",type:"primary",onClick:d[15]||(d[15]=e=>{var x;return(x=t(U))==null?void 0:x.handleBpmnDetail("contract-approve")})},{default:l(()=>[E(" \u67E5\u770B\u5DE5\u4F5C\u6D41 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])),[[F,t(h)]]),a(q,{ref_key:"BPMLModelRef",ref:U},null,512)],64)}}})});export{ga as __tla,D as default};

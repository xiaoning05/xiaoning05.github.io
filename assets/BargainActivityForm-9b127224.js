import{ao as v,n as N,d as Q,k as W,r as u,o as R,c as $,b as l,e as s,a as n,h as F,w as aa,q as ea,j as ta,F as ra,aq as M,al as ia,ar as oa,as as k,B as la,bX as na,E as sa,v as ca,_ as ua,__tla as ma}from"./index-aaa5adb3.js";import{_ as pa,__tla as da}from"./Dialog-9a73a39c.js";import{_ as fa,__tla as _a}from"./Form-93870143.js";import{b as A,__tla as ga}from"./formatTime-9c0e8879.js";import{r as b,__tla as ba}from"./formRules-d4770b7e.js";import{u as va,__tla as ya}from"./useCrudSchemas-538534b3.js";import Pa,{__tla as ha}from"./SpuSelect-80d29a4c.js";import Ma,{__tla as ka}from"./SpuAndSkuList-1c8d773d.js";import{g as wa,__tla as Ca}from"./index-e75c9a63.js";import{b as Fa,__tla as Ia}from"./spu-d46eb782.js";import{u as Sa,__tla as Va}from"./useMessage-873da1e2.js";let I,L,j,q,xa=Promise.all([(()=>{try{return ma}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return ba}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ha}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return Ia}catch{}})(),(()=>{try{return Va}catch{}})()]).then(async()=>{let S,V,x;q=async y=>await v.get({url:"/promotion/bargain-activity/page",params:y}),j=async y=>await v.put({url:"/promotion/bargain-activity/close?id="+y}),S=N({name:[b],startTime:[b],endTime:[b],helpMaxCount:[b],bargainCount:[b],singleLimitCount:[b]}),V=N([{label:"\u780D\u4EF7\u6D3B\u52A8\u540D\u79F0",field:"name",isSearch:!0,isTable:!1,form:{colProps:{span:24}}},{label:"\u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4",field:"startTime",formatter:A,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4",field:"endTime",formatter:A,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u780D\u4EF7\u4EBA\u6570",field:"helpMaxCount",isSearch:!1,form:{component:"InputNumber",labelMessage:"\u53C2\u4E0E\u4EBA\u6570\u4E0D\u80FD\u5C11\u4E8E\u4E24\u4EBA",value:2}},{label:"\u6700\u5927\u5E2E\u780D\u6B21\u6570",field:"bargainCount",isSearch:!1,form:{component:"InputNumber",labelMessage:"\u53C2\u4E0E\u4EBA\u6570\u4E0D\u80FD\u5C11\u4E8E\u4E24\u4EBA",value:2}},{label:"\u603B\u9650\u8D2D\u6570\u91CF",field:"totalLimitCount",isSearch:!1,form:{component:"InputNumber",labelMessage:"\u7528\u6237\u6700\u5927\u80FD\u53D1\u8D77\u780D\u4EF7\u7684\u6B21\u6570",value:0}},{label:"\u780D\u4EF7\u7684\u6700\u5C0F\u91D1\u989D",field:"randomMinPrice",isSearch:!1,isTable:!1,form:{component:"InputNumber",componentProps:{min:0,precision:2,step:.1},labelMessage:"\u7528\u6237\u6BCF\u6B21\u780D\u4EF7\u7684\u6700\u5C0F\u91D1\u989D",value:0}},{label:"\u780D\u4EF7\u7684\u6700\u5927\u91D1\u989D",field:"randomMaxPrice",isSearch:!1,isTable:!1,form:{component:"InputNumber",componentProps:{min:0,precision:2,step:.1},labelMessage:"\u7528\u6237\u6BCF\u6B21\u780D\u4EF7\u7684\u6700\u5927\u91D1\u989D",value:0}},{label:"\u780D\u4EF7\u5546\u54C1",field:"spuId",isSearch:!1,form:{colProps:{span:24}}}]),{allSchemas:x}=va(V),I=ua(Q({name:"PromotionBargainActivityForm",__name:"BargainActivityForm",emits:["success"],setup(y,{expose:O,emit:X}){const{t:w}=W(),D=Sa(),p=u(!1),T=u(""),d=u(!1),U=u(""),m=u(),Y=u(),E=u(),P=u([]),C=u([]),z=[{name:"productConfig.bargainFirstPrice",rule:e=>e>0,message:"\u5546\u54C1\u780D\u4EF7\u8D77\u59CB\u4EF7\u683C\u4E0D\u80FD\u5C0F\u4E8E 0 \uFF01\uFF01\uFF01"},{name:"productConfig.bargainMinPrice",rule:e=>e>=0,message:"\u5546\u54C1\u780D\u4EF7\u5E95\u4EF7\u4E0D\u80FD\u5C0F\u4E8E 0 \uFF01\uFF01\uFF01"},{name:"productConfig.stock",rule:e=>e>=1,message:"\u5546\u54C1\u6D3B\u52A8\u5E93\u5B58\u4E0D\u80FD\u5C0F\u4E8E 1 \uFF01\uFF01\uFF01"}],G=(e,r)=>{m.value.setValues({spuId:e}),B(e,r)},B=async(e,r,a)=>{var h;const i=[],f=await Fa([e]);if(f.length==0)return;P.value=[];const o=f[0],_=r===void 0?o==null?void 0:o.skus:(h=o==null?void 0:o.skus)==null?void 0:h.filter(t=>r.includes(t.id));_==null||_.forEach(t=>{let c={spuId:o.id,skuId:t.id,bargainFirstPrice:1,bargainMinPrice:1,stock:1};if(a!==void 0){const g=a.find(K=>K.skuId===t.id);g&&(g.bargainFirstPrice=M(g.bargainFirstPrice),g.bargainMinPrice=M(g.bargainMinPrice)),c=g||c}t.productConfig=c}),o.skus=_,i.push({spuId:o.id,spuDetail:o,propertyList:wa(o)}),P.value.push(o),C.value=i};O({open:async(e,r)=>{if(p.value=!0,T.value=w("action."+e),U.value=e,await Z(),r){d.value=!0;try{const a=await(async i=>await v.get({url:"/promotion/bargain-activity/get?id="+i}))(r);a.randomMinPrice=M(a.randomMinPrice),a.randomMaxPrice=M(a.randomMaxPrice),await B(a.spuId,[a.skuId],[{spuId:a.spuId,skuId:a.skuId,bargainFirstPrice:a.bargainFirstPrice,bargainMinPrice:a.bargainMinPrice,stock:a.stock}]),m.value.setValues(a)}finally{d.value=!1}}}});const Z=async()=>{P.value=[],C.value=[],await ia(),m.value.getElFormRef().resetFields()},H=X,J=async()=>{if(m&&await m.value.getElFormRef().validate()){d.value=!0;try{const e=oa(m.value.formModel),r=E.value.getSkuConfigs("productConfig");r.forEach(i=>{i.bargainFirstPrice=k(i.bargainFirstPrice),i.bargainMinPrice=k(i.bargainMinPrice)}),e.randomMinPrice=k(e.randomMinPrice),e.randomMaxPrice=k(e.randomMaxPrice);const a={...e,...r[0]};U.value==="create"?(await(async i=>await v.post({url:"/promotion/bargain-activity/create",data:i}))(a),D.success(w("common.createSuccess"))):(await(async i=>await v.put({url:"/promotion/bargain-activity/update",data:i}))(a),D.success(w("common.updateSuccess"))),p.value=!1,H("success")}finally{d.value=!1}}};return(e,r)=>{const a=la,i=na,f=sa,o=fa,_=pa,h=ca;return R(),$(ra,null,[l(_,{modelValue:n(p),"onUpdate:modelValue":r[2]||(r[2]=t=>ta(p)?p.value=t:null),title:n(T),width:"65%"},{footer:s(()=>[l(a,{disabled:n(d),type:"primary",onClick:J},{default:s(()=>[F("\u786E \u5B9A")]),_:1},8,["disabled"]),l(a,{onClick:r[1]||(r[1]=t=>p.value=!1)},{default:s(()=>[F("\u53D6 \u6D88")]),_:1})]),default:s(()=>[aa((R(),ea(o,{ref_key:"formRef",ref:m,"is-col":!0,rules:n(S),schema:n(x).formSchema,class:"mt-10px"},{spuId:s(()=>[l(a,{onClick:r[0]||(r[0]=t=>n(Y).open())},{default:s(()=>[F("\u9009\u62E9\u5546\u54C1")]),_:1}),l(n(Ma),{ref_key:"spuAndSkuListRef",ref:E,"rule-config":z,"spu-list":n(P),"spu-property-list-p":n(C)},{default:s(()=>[l(f,{align:"center",label:"\u780D\u4EF7\u8D77\u59CB\u4EF7\u683C(\u5143)","min-width":"168"},{default:s(({row:t})=>[l(i,{modelValue:t.productConfig.bargainFirstPrice,"onUpdate:modelValue":c=>t.productConfig.bargainFirstPrice=c,min:0,precision:2,step:.1,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(f,{align:"center",label:"\u780D\u4EF7\u5E95\u4EF7(\u5143)","min-width":"168"},{default:s(({row:t})=>[l(i,{modelValue:t.productConfig.bargainMinPrice,"onUpdate:modelValue":c=>t.productConfig.bargainMinPrice=c,min:0,precision:2,step:.1,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(f,{align:"center",label:"\u6D3B\u52A8\u5E93\u5B58","min-width":"168"},{default:s(({row:t})=>[l(i,{modelValue:t.productConfig.stock,"onUpdate:modelValue":c=>t.productConfig.stock=c,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["spu-list","spu-property-list-p"])]),_:1},8,["rules","schema"])),[[h,n(d)]])]),_:1},8,["modelValue","title"]),l(n(Pa),{ref_key:"spuSelectRef",ref:Y,isSelectSku:!0,radio:!0,onConfirm:G},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/promotion/bargain/activity/BargainActivityForm.vue"]]),L=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}))});export{I as B,xa as __tla,L as a,j as c,q as g};

import{d as H,k as J,r as T,n as K,o as u,q as d,e as r,b as o,a,h as s,w as Q,c as C,F as S,g as k,t as E,a0 as m,j as W,aq as I,as as x,al as $,L as ee,y as ae,af as te,ag as le,bX as re,z as oe,C as ue,B as ie,v as de,_ as se,__tla as ce}from"./index-aaa5adb3.js";import{_ as pe,__tla as me}from"./Dialog-9a73a39c.js";import{a as U,D as L,__tla as ne}from"./dict-f2796e71.js";import{a as _e,c as ve,u as ye,__tla as Te}from"./couponTemplate-08788e2d.js";import{e as g,f as b,h as _}from"./constants-99751ef9.js";import fe,{__tla as ge}from"./SpuShowcase-c3c53bb8.js";import Pe,{__tla as Ve}from"./ProductCategorySelect-06786615.js";import{u as be,__tla as he}from"./useMessage-873da1e2.js";import{__tla as Ce}from"./el-image-1cd11263.js";import{__tla as Se}from"./el-image-viewer-fc91515b.js";import{__tla as ke}from"./spu-d46eb782.js";import{__tla as Ee}from"./SpuTableSelect-62a5b3be.js";import{__tla as Ie}from"./ContentWrap-04d7f6d1.js";import{__tla as xe}from"./index-5b7dcbf1.js";import{__tla as Ue}from"./index-b47c179c.js";import{__tla as Le}from"./index-c602062a.js";import{__tla as we}from"./el-tree-select-49584d8b.js";import"./tree-02f455f9.js";import{__tla as qe}from"./category-9fe58d90.js";let R,Oe=Promise.all([(()=>{try{return ce}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return Se}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return qe}catch{}})()]).then(async()=>{R=se(H({name:"CouponTemplateForm",__name:"CouponTemplateForm",emits:["success"],setup(Ae,{expose:D,emit:N}){const{t:h}=J(),w=be(),v=T(!1),q=T(""),y=T(!1),O=T(""),e=T({id:void 0,name:void 0,discountType:g.PRICE.type,discountPrice:void 0,discountPercent:void 0,discountLimitPrice:void 0,usePrice:void 0,takeType:1,totalCount:void 0,takeLimitCount:void 0,validityType:b.DATE.type,validTimes:[],validStartTime:void 0,validEndTime:void 0,fixedStartTerm:void 0,fixedEndTerm:void 0,productScope:_.ALL.scope,productScopeValues:[],productCategoryIds:[],productSpuIds:[]}),Y=K({name:[{required:!0,message:"\u4F18\u60E0\u5238\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],discountType:[{required:!0,message:"\u4F18\u60E0\u5238\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],discountPrice:[{required:!0,message:"\u4F18\u60E0\u5238\u9762\u989D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],discountPercent:[{required:!0,message:"\u4F18\u60E0\u5238\u6298\u6263\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],discountLimitPrice:[{required:!0,message:"\u6700\u591A\u4F18\u60E0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],usePrice:[{required:!0,message:"\u6EE1\u591A\u5C11\u5143\u53EF\u4EE5\u4F7F\u7528\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],takeType:[{required:!0,message:"\u9886\u53D6\u65B9\u5F0F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],totalCount:[{required:!0,message:"\u53D1\u653E\u6570\u91CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],takeLimitCount:[{required:!0,message:"\u6BCF\u4EBA\u9650\u9886\u4E2A\u6570\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],validityType:[{required:!0,message:"\u6709\u6548\u671F\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],validTimes:[{required:!0,message:"\u56FA\u5B9A\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],fixedStartTerm:[{required:!0,message:"\u5F00\u59CB\u9886\u53D6\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],fixedEndTerm:[{required:!0,message:"\u5F00\u59CB\u9886\u53D6\u5929\u6570\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],productScope:[{required:!0,message:"\u5546\u54C1\u8303\u56F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],productSpuIds:[{required:!0,message:"\u5546\u54C1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],productCategoryIds:[{required:!0,message:"\u5206\u7C7B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),P=T();D({open:async(i,l)=>{if(v.value=!0,q.value=h("action."+i),O.value=i,G(),l){y.value=!0;try{const p=await _e(l);e.value={...p,discountPrice:I(p.discountPrice),discountPercent:p.discountPercent!==void 0?p.discountPercent/10:void 0,discountLimitPrice:I(p.discountLimitPrice),usePrice:I(p.usePrice),validTimes:[p.validStartTime,p.validEndTime]},await j()}finally{y.value=!1}}}});const M=N,F=async()=>{if(P&&await P.value.validate()){y.value=!0;try{const i={...e.value,discountPrice:x(e.value.discountPrice),discountPercent:e.value.discountPercent!==void 0?10*e.value.discountPercent:void 0,discountLimitPrice:x(e.value.discountLimitPrice),usePrice:x(e.value.usePrice),validStartTime:e.value.validTimes&&e.value.validTimes.length===2?e.value.validTimes[0]:void 0,validEndTime:e.value.validTimes&&e.value.validTimes.length===2?e.value.validTimes[1]:void 0};(function(l){switch(e.value.productScope){case _.SPU.scope:l.productScopeValues=e.value.productSpuIds;break;case _.CATEGORY.scope:l.productScopeValues=Array.isArray(e.value.productCategoryIds)?e.value.productCategoryIds:[e.value.productCategoryIds]}})(i),O.value==="create"?(await ve(i),w.success(h("common.createSuccess"))):(await ye(i),w.success(h("common.updateSuccess"))),v.value=!1,M("success")}finally{y.value=!1}}},G=()=>{var i;e.value={id:void 0,name:void 0,discountType:g.PRICE.type,discountPrice:void 0,discountPercent:void 0,discountLimitPrice:void 0,usePrice:void 0,takeType:1,totalCount:void 0,takeLimitCount:void 0,validityType:b.DATE.type,validTimes:[],validStartTime:void 0,validEndTime:void 0,fixedStartTerm:void 0,fixedEndTerm:void 0,productScope:_.ALL.scope,productScopeValues:[],productSpuIds:[],productCategoryIds:[]},(i=P.value)==null||i.resetFields()},j=async()=>{switch(e.value.productScope){case _.SPU.scope:e.value.productSpuIds=e.value.productScopeValues;break;case _.CATEGORY.scope:await $(()=>{let i=e.value.productScopeValues;Array.isArray(i)&&i.length>0&&(i=i[0]),e.value.productCategoryIds=i})}};return(i,l)=>{const p=ee,c=ae,f=te,V=le,n=re,X=oe,z=ue,A=ie,B=pe,Z=de;return u(),d(B,{modelValue:a(v),"onUpdate:modelValue":l[17]||(l[17]=t=>W(v)?v.value=t:null),title:a(q)},{footer:r(()=>[o(A,{disabled:a(y),type:"primary",onClick:F},{default:r(()=>[s("\u786E \u5B9A")]),_:1},8,["disabled"]),o(A,{onClick:l[16]||(l[16]=t=>v.value=!1)},{default:r(()=>[s("\u53D6 \u6D88")]),_:1})]),default:r(()=>[Q((u(),d(z,{ref_key:"formRef",ref:P,model:a(e),rules:a(Y),"label-width":"140px"},{default:r(()=>[o(c,{label:"\u4F18\u60E0\u5238\u540D\u79F0",prop:"name"},{default:r(()=>[o(p,{modelValue:a(e).name,"onUpdate:modelValue":l[0]||(l[0]=t=>a(e).name=t),placeholder:"\u8BF7\u8F93\u5165\u4F18\u60E0\u5238\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(c,{label:"\u4F18\u60E0\u52B5\u7C7B\u578B",prop:"productScope"},{default:r(()=>[o(V,{modelValue:a(e).productScope,"onUpdate:modelValue":l[1]||(l[1]=t=>a(e).productScope=t)},{default:r(()=>[(u(!0),C(S,null,k(a(U)(a(L).PROMOTION_PRODUCT_SCOPE),t=>(u(),d(f,{key:t.value,label:t.value},{default:r(()=>[s(E(t.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(e).productScope===a(_).SPU.scope?(u(),d(c,{key:0,label:"\u5546\u54C1",prop:"productSpuIds"},{default:r(()=>[o(fe,{modelValue:a(e).productSpuIds,"onUpdate:modelValue":l[2]||(l[2]=t=>a(e).productSpuIds=t)},null,8,["modelValue"])]),_:1})):m("",!0),a(e).productScope===a(_).CATEGORY.scope?(u(),d(c,{key:1,label:"\u5206\u7C7B",prop:"productCategoryIds"},{default:r(()=>[o(Pe,{modelValue:a(e).productCategoryIds,"onUpdate:modelValue":l[3]||(l[3]=t=>a(e).productCategoryIds=t)},null,8,["modelValue"])]),_:1})):m("",!0),o(c,{label:"\u4F18\u60E0\u7C7B\u578B",prop:"discountType"},{default:r(()=>[o(V,{modelValue:a(e).discountType,"onUpdate:modelValue":l[4]||(l[4]=t=>a(e).discountType=t)},{default:r(()=>[(u(!0),C(S,null,k(a(U)(a(L).PROMOTION_DISCOUNT_TYPE),t=>(u(),d(f,{key:t.value,label:t.value},{default:r(()=>[s(E(t.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(e).discountType===a(g).PRICE.type?(u(),d(c,{key:2,label:"\u4F18\u60E0\u5238\u9762\u989D",prop:"discountPrice"},{default:r(()=>[o(n,{modelValue:a(e).discountPrice,"onUpdate:modelValue":l[5]||(l[5]=t=>a(e).discountPrice=t),min:0,precision:2,class:"mr-2 !w-400px",placeholder:"\u8BF7\u8F93\u5165\u4F18\u60E0\u91D1\u989D\uFF0C\u5355\u4F4D\uFF1A\u5143"},null,8,["modelValue"]),s(" \u5143 ")]),_:1})):m("",!0),a(e).discountType===a(g).PERCENT.type?(u(),d(c,{key:3,label:"\u4F18\u60E0\u5238\u6298\u6263",prop:"discountPercent"},{default:r(()=>[o(n,{modelValue:a(e).discountPercent,"onUpdate:modelValue":l[6]||(l[6]=t=>a(e).discountPercent=t),max:9.9,min:1,precision:1,class:"mr-2 !w-400px",placeholder:"\u4F18\u60E0\u5238\u6298\u6263\u4E0D\u80FD\u5C0F\u4E8E 1 \u6298\uFF0C\u4E14\u4E0D\u53EF\u5927\u4E8E 9.9 \u6298"},null,8,["modelValue"]),s(" \u6298 ")]),_:1})):m("",!0),a(e).discountType===a(g).PERCENT.type?(u(),d(c,{key:4,label:"\u6700\u591A\u4F18\u60E0",prop:"discountLimitPrice"},{default:r(()=>[o(n,{modelValue:a(e).discountLimitPrice,"onUpdate:modelValue":l[7]||(l[7]=t=>a(e).discountLimitPrice=t),min:0,precision:2,class:"mr-2 !w-400px",placeholder:"\u8BF7\u8F93\u5165\u6700\u591A\u4F18\u60E0"},null,8,["modelValue"]),s(" \u5143 ")]),_:1})):m("",!0),o(c,{label:"\u6EE1\u591A\u5C11\u5143\u53EF\u4EE5\u4F7F\u7528",prop:"usePrice"},{default:r(()=>[o(n,{modelValue:a(e).usePrice,"onUpdate:modelValue":l[8]||(l[8]=t=>a(e).usePrice=t),min:0,precision:2,class:"mr-2 !w-400px",placeholder:"\u65E0\u95E8\u69DB\u8BF7\u8BBE\u4E3A 0"},null,8,["modelValue"]),s(" \u5143 ")]),_:1}),o(c,{label:"\u9886\u53D6\u65B9\u5F0F",prop:"takeType"},{default:r(()=>[o(V,{modelValue:a(e).takeType,"onUpdate:modelValue":l[9]||(l[9]=t=>a(e).takeType=t)},{default:r(()=>[(u(),d(f,{key:1,label:1},{default:r(()=>[s("\u76F4\u63A5\u9886\u53D6")]),_:1})),(u(),d(f,{key:2,label:2},{default:r(()=>[s("\u6307\u5B9A\u53D1\u653E")]),_:1}))]),_:1},8,["modelValue"])]),_:1}),a(e).takeType===1?(u(),d(c,{key:5,label:"\u53D1\u653E\u6570\u91CF",prop:"totalCount"},{default:r(()=>[o(n,{modelValue:a(e).totalCount,"onUpdate:modelValue":l[10]||(l[10]=t=>a(e).totalCount=t),min:-1,precision:0,class:"mr-2 !w-400px",placeholder:"\u53D1\u653E\u6570\u91CF\uFF0C\u6CA1\u6709\u4E4B\u540E\u4E0D\u80FD\u9886\u53D6\u6216\u53D1\u653E\uFF0C-1 \u4E3A\u4E0D\u9650\u5236"},null,8,["modelValue"]),s(" \u5F20 ")]),_:1})):m("",!0),a(e).takeType===1?(u(),d(c,{key:6,label:"\u6BCF\u4EBA\u9650\u9886\u4E2A\u6570",prop:"takeLimitCount"},{default:r(()=>[o(n,{modelValue:a(e).takeLimitCount,"onUpdate:modelValue":l[11]||(l[11]=t=>a(e).takeLimitCount=t),min:-1,precision:0,class:"mr-2 !w-400px",placeholder:"\u8BBE\u7F6E\u4E3A -1 \u65F6\uFF0C\u53EF\u65E0\u9650\u9886\u53D6"},null,8,["modelValue"]),s(" \u5F20 ")]),_:1})):m("",!0),o(c,{label:"\u6709\u6548\u671F\u7C7B\u578B",prop:"validityType"},{default:r(()=>[o(V,{modelValue:a(e).validityType,"onUpdate:modelValue":l[12]||(l[12]=t=>a(e).validityType=t)},{default:r(()=>[(u(!0),C(S,null,k(a(U)(a(L).PROMOTION_COUPON_TEMPLATE_VALIDITY_TYPE),t=>(u(),d(f,{key:t.value,label:t.value},{default:r(()=>[s(E(t.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(e).validityType===a(b).DATE.type?(u(),d(c,{key:7,label:"\u56FA\u5B9A\u65E5\u671F",prop:"validTimes"},{default:r(()=>[o(X,{modelValue:a(e).validTimes,"onUpdate:modelValue":l[13]||(l[13]=t=>a(e).validTimes=t),"default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,2,1,23,59,59)],style:{width:"240px"},type:"datetimerange","value-format":"x"},null,8,["modelValue","default-time"])]),_:1})):m("",!0),a(e).validityType===a(b).TERM.type?(u(),d(c,{key:8,label:"\u9886\u53D6\u65E5\u671F",prop:"fixedStartTerm"},{default:r(()=>[s(" \u7B2C "),o(n,{modelValue:a(e).fixedStartTerm,"onUpdate:modelValue":l[14]||(l[14]=t=>a(e).fixedStartTerm=t),min:0,precision:0,class:"mx-2",placeholder:"0 \u4E3A\u4ECA\u5929\u751F\u6548"},null,8,["modelValue"]),s(" \u81F3 "),o(n,{modelValue:a(e).fixedEndTerm,"onUpdate:modelValue":l[15]||(l[15]=t=>a(e).fixedEndTerm=t),min:0,precision:0,class:"mx-2",placeholder:"\u8BF7\u8F93\u5165\u7ED3\u675F\u5929\u6570"},null,8,["modelValue"]),s(" \u5929\u6709\u6548 ")]),_:1})):m("",!0)]),_:1},8,["model","rules"])),[[Z,a(y)]])]),_:1},8,["modelValue","title"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/promotion/coupon/template/CouponTemplateForm.vue"]])});export{Oe as __tla,R as default};
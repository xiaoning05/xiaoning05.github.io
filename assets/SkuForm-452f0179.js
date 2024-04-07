import{d as I,ae as M,r as f,n as C,aR as O,o as p,c as D,b as e,e as l,a,F,C as q,h as i,q as h,a0 as n,dF as E,af as G,ag as X,y as Y,B as Z,_ as z,__tla as H}from"./index-aaa5adb3.js";import{g as J,__tla as K}from"./index-e75c9a63.js";import Q,{__tla as W}from"./ProductAttributes-a4f2b08a.js";import $,{__tla as aa}from"./ProductPropertyAddForm-2dc7d6f6.js";import{u as ta,__tla as ea}from"./useMessage-873da1e2.js";import{r as P,__tla as ra}from"./formRules-d4770b7e.js";import k,{__tla as la}from"./SkuList-8302ad2f.js";import{__tla as sa}from"./el-text-eb42d8d5.js";import{__tla as oa}from"./property-403f57c7.js";import{__tla as _a}from"./Dialog-9a73a39c.js";import{__tla as pa}from"./el-image-1cd11263.js";import{__tla as ia}from"./el-image-viewer-fc91515b.js";import{__tla as ma}from"./UploadImg-9fa46f1e.js";import{__tla as ca}from"./index-93c914d7.js";import{__tla as ua}from"./useUpload-c52dec87.js";import{__tla as fa}from"./index-fb6b5360.js";import{__tla as na}from"./UploadImgs.vue_vue_type_style_index_0_scoped_9d666400_lang-4f9fa2ef.js";import{__tla as da}from"./UploadFile.vue_vue_type_style_index_0_scoped_436eca1b_lang-d92f2323.js";let w,ya=Promise.all([(()=>{try{return H}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return da}catch{}})()]).then(async()=>{w=z(I({name:"ProductSpuSkuForm",__name:"SkuForm",props:{propFormData:{type:Object,default:()=>{}},isDetail:M.bool.def(!1)},emits:["update:activeName"],setup(_,{expose:S,emit:V}){const b=[{name:"stock",rule:t=>t>=0,message:"\u5546\u54C1\u5E93\u5B58\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 1 \uFF01\uFF01\uFF01"},{name:"price",rule:t=>t>=.01,message:"\u5546\u54C1\u9500\u552E\u4EF7\u683C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 0.01 \u5143\uFF01\uFF01\uFF01"},{name:"marketPrice",rule:t=>t>=.01,message:"\u5546\u54C1\u5E02\u573A\u4EF7\u683C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 0.01 \u5143\uFF01\uFF01\uFF01"},{name:"costPrice",rule:t=>t>=.01,message:"\u5546\u54C1\u6210\u672C\u4EF7\u683C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 0.00 \u5143\uFF01\uFF01\uFF01"}],x=ta(),g=_,T=f(),d=f(),s=f([]),m=f(),r=C({specType:!1,subCommissionType:!1,skus:[]}),B=C({specType:[P],subCommissionType:[P]});O(()=>g.propFormData,t=>{t&&(E(r,t),s.value=J(t))},{immediate:!0});const R=V;S({validate:async()=>{if(d)try{m.value.validateSku(),await a(d).validate(),Object.assign(g.propFormData,r)}catch(t){throw x.error("\u3010\u5E93\u5B58\u4EF7\u683C\u3011\u4E0D\u5B8C\u5584\uFF0C\u8BF7\u586B\u5199\u76F8\u5173\u4FE1\u606F"),R("update:activeName","sku"),t}}});const L=()=>{for(const t of r.skus)t.firstBrokeragePrice=0,t.secondBrokeragePrice=0},U=()=>{s.value=[],r.skus=[{price:0,marketPrice:0,costPrice:0,barCode:"",picUrl:"",stock:0,weight:0,volume:0,firstBrokeragePrice:0,secondBrokeragePrice:0}]},j=t=>{m.value.generateTableData(t)};return(t,c)=>{const u=G,v=X,o=Y,N=Z,A=q;return p(),D(F,null,[e(A,{ref_key:"formRef",ref:d,model:a(r),rules:a(B),"label-width":"120px",disabled:_.isDetail},{default:l(()=>[e(o,{label:"\u5206\u9500\u7C7B\u578B",props:"subCommissionType"},{default:l(()=>[e(v,{modelValue:a(r).subCommissionType,"onUpdate:modelValue":c[0]||(c[0]=y=>a(r).subCommissionType=y),onChange:L,class:"w-80"},{default:l(()=>[e(u,{label:!1},{default:l(()=>[i("\u9ED8\u8BA4\u8BBE\u7F6E")]),_:1}),e(u,{label:!0,class:"radio"},{default:l(()=>[i("\u5355\u72EC\u8BBE\u7F6E")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(o,{label:"\u5546\u54C1\u89C4\u683C",props:"specType"},{default:l(()=>[e(v,{modelValue:a(r).specType,"onUpdate:modelValue":c[1]||(c[1]=y=>a(r).specType=y),onChange:U,class:"w-80"},{default:l(()=>[e(u,{label:!1,class:"radio"},{default:l(()=>[i("\u5355\u89C4\u683C")]),_:1}),e(u,{label:!0},{default:l(()=>[i("\u591A\u89C4\u683C")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(r).specType?n("",!0):(p(),h(o,{key:0},{default:l(()=>[e(a(k),{ref_key:"skuListRef",ref:m,"prop-form-data":a(r),"property-list":a(s),"rule-config":b},null,8,["prop-form-data","property-list"])]),_:1})),a(r).specType?(p(),h(o,{key:1,label:"\u5546\u54C1\u5C5E\u6027"},{default:l(()=>[e(N,{class:"mb-10px mr-15px",onClick:a(T).open},{default:l(()=>[i("\u6DFB\u52A0\u5C5E\u6027")]),_:1},8,["onClick"]),e(Q,{"property-list":a(s),onSuccess:j,"is-detail":_.isDetail},null,8,["property-list","is-detail"])]),_:1})):n("",!0),a(r).specType&&a(s).length>0?(p(),D(F,{key:2},[_.isDetail?n("",!0):(p(),h(o,{key:0,label:"\u6279\u91CF\u8BBE\u7F6E"},{default:l(()=>[e(a(k),{"is-batch":!0,"prop-form-data":a(r),"property-list":a(s)},null,8,["prop-form-data","property-list"])]),_:1})),e(o,{label:"\u89C4\u683C\u5217\u8868"},{default:l(()=>[e(a(k),{ref_key:"skuListRef",ref:m,"prop-form-data":a(r),"property-list":a(s),"rule-config":b,"is-detail":_.isDetail},null,8,["prop-form-data","property-list","is-detail"])]),_:1})],64)):n("",!0)]),_:1},8,["model","rules","disabled"]),e($,{ref_key:"attributesAddFormRef",ref:T,propertyList:a(s)},null,8,["propertyList"])],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/product/spu/form/SkuForm.vue"]])});export{ya as __tla,w as default};

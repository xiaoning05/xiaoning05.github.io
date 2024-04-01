import{n as R,d as B,k as H,r as i,o as E,c as J,b as n,e as c,a as l,h as P,w as K,q as Q,j as W,F as X,ap as Z,ak as $,aq as L,ar as ee,A as ae,bU as te,E as re,v as oe,__tla as le}from"./index-34f06ebd.js";import{_ as se,__tla as ie}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{_ as ne,__tla as ce}from"./Form-980450b6.js";import{g as ue,c as me,u as pe,__tla as _e}from"./combinationActivity-3a9acd1d.js";import{b as M,__tla as de}from"./formatTime-ed0a77fd.js";import{r as u,__tla as fe}from"./formRules-ecd4de8b.js";import{D as be,__tla as he}from"./dict-e142e39a.js";import{u as ve,__tla as ye}from"./useCrudSchemas-8bd8b360.js";import{_ as ge,__tla as ke}from"./SpuSelect.vue_vue_type_script_setup_true_lang-940096c8.js";import{_ as Pe,__tla as Se}from"./SpuAndSkuList.vue_vue_type_script_setup_true_lang-b594eae0.js";import{g as Ce,__tla as we}from"./index-04c10e0e.js";import{b as Ie,__tla as De}from"./spu-7528f5a7.js";import{u as Fe,__tla as Te}from"./useMessage-7a5ab7ef.js";let N,Ve=Promise.all([(()=>{try{return le}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return Se}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Te}catch{}})()]).then(async()=>{let S,C,w;S=R({name:[u],totalLimitCount:[u],singleLimitCount:[u],startTime:[u],endTime:[u],userSize:[u],limitDuration:[u],virtualGroup:[u]}),C=R([{label:"\u62FC\u56E2\u540D\u79F0",field:"name",isSearch:!0,isTable:!1,form:{colProps:{span:24}}},{label:"\u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4",field:"startTime",formatter:M,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4",field:"endTime",formatter:M,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u53C2\u4E0E\u4EBA\u6570",field:"userSize",isSearch:!1,form:{component:"InputNumber",labelMessage:"\u53C2\u4E0E\u4EBA\u6570\u4E0D\u80FD\u5C11\u4E8E\u4E24\u4EBA",value:2}},{label:"\u9650\u5236\u65F6\u957F",field:"limitDuration",isSearch:!1,isTable:!1,form:{component:"InputNumber",labelMessage:"\u9650\u5236\u65F6\u957F(\u5C0F\u65F6)",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u9650\u5236\u65F6\u957F(\u5C0F\u65F6)"}}},{label:"\u603B\u9650\u8D2D\u6570\u91CF",field:"totalLimitCount",isSearch:!1,isTable:!1,form:{component:"InputNumber",value:0}},{label:"\u5355\u6B21\u9650\u8D2D\u6570\u91CF",field:"singleLimitCount",isSearch:!1,isTable:!1,form:{component:"InputNumber",value:0}},{label:"\u865A\u62DF\u6210\u56E2",field:"virtualGroup",dictType:be.INFRA_BOOLEAN_STRING,dictClass:"boolean",isSearch:!0,form:{component:"Radio",value:!1}},{label:"\u62FC\u56E2\u5546\u54C1",field:"spuId",isSearch:!1,form:{colProps:{span:24}}}]),{allSchemas:w}=ve(C),N=B({name:"PromotionCombinationActivityForm",__name:"CombinationActivityForm",emits:["success"],setup(Ye,{expose:A,emit:x}){const{t:g}=H(),I=Fe(),p=i(!1),D=i(""),_=i(!1),F=i(""),m=i(),T=i(),V=i(),h=i([]),k=i([]),U=[{name:"productConfig.combinationPrice",rule:t=>t>=.01,message:"\u5546\u54C1\u62FC\u56E2\u4EF7\u683C\u4E0D\u80FD\u5C0F\u4E8E0.01 \uFF01\uFF01\uFF01"}],G=(t,e)=>{m.value.setValues({spuId:t}),Y(t,e)},Y=async(t,e,r)=>{var v;const s=[],d=await Ie([t]);if(d.length==0)return;h.value=[];const a=d[0],f=e===void 0?a==null?void 0:a.skus:(v=a==null?void 0:a.skus)==null?void 0:v.filter(o=>e.includes(o.id));f==null||f.forEach(o=>{let b={spuId:a.id,skuId:o.id,combinationPrice:0};if(r!==void 0){const y=r.find(j=>j.skuId===o.id);y&&(y.combinationPrice=Z(y.combinationPrice)),b=y||b}o.productConfig=b}),a.skus=f,s.push({spuId:a.id,spuDetail:a,propertyList:Ce(a)}),h.value.push(a),k.value=s};A({open:async(t,e)=>{var r;if(p.value=!0,D.value=g("action."+t),F.value=t,await q(),e){_.value=!0;try{const s=await ue(e);await Y(s.spuId,(r=s.products)==null?void 0:r.map(d=>d.skuId),s.products),m.value.setValues(s)}finally{_.value=!1}}}});const q=async()=>{h.value=[],k.value=[],await $(),m.value.getElFormRef().resetFields()},z=x,O=async()=>{if(m&&await m.value.getElFormRef().validate()){_.value=!0;try{const t=L(V.value.getSkuConfigs("productConfig"));t.forEach(r=>{r.combinationPrice=ee(r.combinationPrice)});const e=L(m.value.formModel);e.products=t,F.value==="create"?(await me(e),I.success(g("common.createSuccess"))):(await pe(e),I.success(g("common.updateSuccess"))),p.value=!1,z("success")}finally{_.value=!1}}};return(t,e)=>{const r=ae,s=te,d=re,a=ne,f=se,v=oe;return E(),J(X,null,[n(f,{modelValue:l(p),"onUpdate:modelValue":e[2]||(e[2]=o=>W(p)?p.value=o:null),title:l(D),width:"65%"},{footer:c(()=>[n(r,{disabled:l(_),type:"primary",onClick:O},{default:c(()=>[P("\u786E \u5B9A")]),_:1},8,["disabled"]),n(r,{onClick:e[1]||(e[1]=o=>p.value=!1)},{default:c(()=>[P("\u53D6 \u6D88")]),_:1})]),default:c(()=>[K((E(),Q(a,{ref_key:"formRef",ref:m,"is-col":!0,rules:l(S),schema:l(w).formSchema,class:"mt-10px"},{spuId:c(()=>[n(r,{onClick:e[0]||(e[0]=o=>l(T).open())},{default:c(()=>[P("\u9009\u62E9\u5546\u54C1")]),_:1}),n(l(Pe),{ref_key:"spuAndSkuListRef",ref:V,"rule-config":U,"spu-list":l(h),"spu-property-list-p":l(k)},{default:c(()=>[n(d,{align:"center",label:"\u62FC\u56E2\u4EF7\u683C(\u5143)","min-width":"168"},{default:c(({row:o})=>[n(s,{modelValue:o.productConfig.combinationPrice,"onUpdate:modelValue":b=>o.productConfig.combinationPrice=b,min:0,precision:2,step:.1,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["spu-list","spu-property-list-p"])]),_:1},8,["rules","schema"])),[[v,l(_)]])]),_:1},8,["modelValue","title"]),n(l(ge),{ref_key:"spuSelectRef",ref:T,isSelectSku:!0,onConfirm:G},null,512)],64)}}})});export{N as _,Ve as __tla};

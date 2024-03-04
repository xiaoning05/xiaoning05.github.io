import{e as R,d as j,i as q,r as i,o as Y,c as H,f as n,w as c,a as l,h as S,x as J,v as K,l as Q,F as X,ar as W,am as $,as as L,at as ee,C as ae,bZ as te,G as re,I as oe,__tla as le}from"./index-d2088aec.js";import{_ as se,__tla as ie}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{_ as ne,__tla as ce}from"./Form-e9fe9dea.js";import{g as ue,c as me,u as pe,__tla as _e}from"./combinationActivity-25039fc2.js";import{b as M,__tla as de}from"./formatTime-c7e0c543.js";import{r as u,__tla as fe}from"./formRules-fb12266a.js";import{D as he,__tla as be}from"./dict-999fbee6.js";import{u as ve,__tla as ye}from"./useCrudSchemas-705f912c.js";import{_ as ge,__tla as Pe}from"./SpuSelect.vue_vue_type_script_setup_true_lang-92e28bc7.js";import{_ as Se,__tla as ke}from"./SpuAndSkuList.vue_vue_type_script_setup_true_lang-76bd0cd1.js";import{g as Ce,__tla as Ie}from"./index-6a0c14cf.js";import{b as we,__tla as De}from"./spu-23786f86.js";import{u as Fe,__tla as Te}from"./useMessage-c5990e2c.js";let x,Ve=Promise.all([(()=>{try{return le}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return Pe}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Te}catch{}})()]).then(async()=>{let k,C,I;k=R({name:[u],totalLimitCount:[u],singleLimitCount:[u],startTime:[u],endTime:[u],userSize:[u],limitDuration:[u],virtualGroup:[u]}),C=R([{label:"\u62FC\u56E2\u540D\u79F0",field:"name",isSearch:!0,isTable:!1,form:{colProps:{span:24}}},{label:"\u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4",field:"startTime",formatter:M,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4",field:"endTime",formatter:M,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u53C2\u4E0E\u4EBA\u6570",field:"userSize",isSearch:!1,form:{component:"InputNumber",labelMessage:"\u53C2\u4E0E\u4EBA\u6570\u4E0D\u80FD\u5C11\u4E8E\u4E24\u4EBA",value:2}},{label:"\u9650\u5236\u65F6\u957F",field:"limitDuration",isSearch:!1,isTable:!1,form:{component:"InputNumber",labelMessage:"\u9650\u5236\u65F6\u957F(\u5C0F\u65F6)",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u9650\u5236\u65F6\u957F(\u5C0F\u65F6)"}}},{label:"\u603B\u9650\u8D2D\u6570\u91CF",field:"totalLimitCount",isSearch:!1,isTable:!1,form:{component:"InputNumber",value:0}},{label:"\u5355\u6B21\u9650\u8D2D\u6570\u91CF",field:"singleLimitCount",isSearch:!1,isTable:!1,form:{component:"InputNumber",value:0}},{label:"\u865A\u62DF\u6210\u56E2",field:"virtualGroup",dictType:he.INFRA_BOOLEAN_STRING,dictClass:"boolean",isSearch:!0,form:{component:"Radio",value:!1}},{label:"\u62FC\u56E2\u5546\u54C1",field:"spuId",isSearch:!1,form:{colProps:{span:24}}}]),{allSchemas:I}=ve(C),x=j({name:"PromotionCombinationActivityForm",__name:"CombinationActivityForm",emits:["success"],setup(Ne,{expose:E,emit:A}){const{t:g}=q(),w=Fe(),p=i(!1),D=i(""),_=i(!1),F=i(""),m=i(),T=i(),V=i(),b=i([]),P=i([]),G=[{name:"productConfig.combinationPrice",rule:t=>t>=.01,message:"\u5546\u54C1\u62FC\u56E2\u4EF7\u683C\u4E0D\u80FD\u5C0F\u4E8E0.01 \uFF01\uFF01\uFF01"}],U=(t,e)=>{m.value.setValues({spuId:t}),N(t,e)},N=async(t,e,r)=>{var v;const s=[],d=await we([t]);if(d.length==0)return;b.value=[];const a=d[0],f=e===void 0?a==null?void 0:a.skus:(v=a==null?void 0:a.skus)==null?void 0:v.filter(o=>e.includes(o.id));f==null||f.forEach(o=>{let h={spuId:a.id,skuId:o.id,combinationPrice:0};if(r!==void 0){const y=r.find(Z=>Z.skuId===o.id);y&&(y.combinationPrice=W(y.combinationPrice)),h=y||h}o.productConfig=h}),a.skus=f,s.push({spuId:a.id,spuDetail:a,propertyList:Ce(a)}),b.value.push(a),P.value=s};E({open:async(t,e)=>{var r;if(p.value=!0,D.value=g("action."+t),F.value=t,await z(),e){_.value=!0;try{const s=await ue(e);await N(s.spuId,(r=s.products)==null?void 0:r.map(d=>d.skuId),s.products),m.value.setValues(s)}finally{_.value=!1}}}});const z=async()=>{b.value=[],P.value=[],await $(),m.value.getElFormRef().resetFields()},O=A,B=async()=>{if(m&&await m.value.getElFormRef().validate()){_.value=!0;try{const t=L(V.value.getSkuConfigs("productConfig"));t.forEach(r=>{r.combinationPrice=ee(r.combinationPrice)});const e=L(m.value.formModel);e.products=t,F.value==="create"?(await me(e),w.success(g("common.createSuccess"))):(await pe(e),w.success(g("common.updateSuccess"))),p.value=!1,O("success")}finally{_.value=!1}}};return(t,e)=>{const r=ae,s=te,d=re,a=ne,f=se,v=oe;return Y(),H(X,null,[n(f,{modelValue:l(p),"onUpdate:modelValue":e[2]||(e[2]=o=>Q(p)?p.value=o:null),title:l(D),width:"65%"},{footer:c(()=>[n(r,{disabled:l(_),type:"primary",onClick:B},{default:c(()=>[S("\u786E \u5B9A")]),_:1},8,["disabled"]),n(r,{onClick:e[1]||(e[1]=o=>p.value=!1)},{default:c(()=>[S("\u53D6 \u6D88")]),_:1})]),default:c(()=>[J((Y(),K(a,{ref_key:"formRef",ref:m,"is-col":!0,rules:l(k),schema:l(I).formSchema,class:"mt-10px"},{spuId:c(()=>[n(r,{onClick:e[0]||(e[0]=o=>l(T).open())},{default:c(()=>[S("\u9009\u62E9\u5546\u54C1")]),_:1}),n(l(Se),{ref_key:"spuAndSkuListRef",ref:V,"rule-config":G,"spu-list":l(b),"spu-property-list-p":l(P)},{default:c(()=>[n(d,{align:"center",label:"\u62FC\u56E2\u4EF7\u683C(\u5143)","min-width":"168"},{default:c(({row:o})=>[n(s,{modelValue:o.productConfig.combinationPrice,"onUpdate:modelValue":h=>o.productConfig.combinationPrice=h,min:0,precision:2,step:.1,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["spu-list","spu-property-list-p"])]),_:1},8,["rules","schema"])),[[v,l(_)]])]),_:1},8,["modelValue","title"]),n(l(ge),{ref_key:"spuSelectRef",ref:T,isSelectSku:!0,onConfirm:U},null,512)],64)}}})});export{x as _,Ve as __tla};
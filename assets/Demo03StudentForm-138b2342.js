import{d as G,i as I,r as i,e as X,o as _,v as p,w as s,f as r,a as e,h as v,x as Y,c as j,F as B,q as J,t as N,l as Q,Q as T,A as Z,ai as P,aj as z,B as H,G as K,D as L,J as O,_ as W,__tla as $}from"./index-f0743f71.js";import{_ as ee,__tla as ae}from"./Dialog-8f786edd.js";import{_ as le,__tla as te}from"./Editor-9944a8eb.js";import{a as se,D as re,__tla as oe}from"./dict-4a9940b3.js";import{g as ue,c as de,u as ie,__tla as me}from"./index-d3083acf.js";import{u as _e,__tla as ne}from"./useMessage-75a00a06.js";let V,ce=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return ae}catch{}})(),(()=>{try{return te}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return ne}catch{}})()]).then(async()=>{V=W(G({__name:"Demo03StudentForm",emits:["success"],setup(pe,{expose:g,emit:x}){const{t:n}=I(),f=_e(),u=i(!1),y=i(""),d=i(!1),b=i(""),t=i({id:void 0,name:void 0,sex:void 0,birthday:void 0,description:void 0}),S=X({name:[{required:!0,message:"\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],sex:[{required:!0,message:"\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],birthday:[{required:!0,message:"\u51FA\u751F\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],description:[{required:!0,message:"\u7B80\u4ECB\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),c=i();g({open:async(o,a)=>{if(u.value=!0,y.value=n("action."+o),b.value=o,k(),a){d.value=!0;try{t.value=await ue(a)}finally{d.value=!1}}}});const w=x,U=async()=>{await c.value.validate(),d.value=!0;try{const o=t.value;b.value==="create"?(await de(o),f.success(n("common.createSuccess"))):(await ie(o),f.success(n("common.updateSuccess"))),u.value=!1,w("success")}finally{d.value=!1}},k=()=>{var o;t.value={id:void 0,name:void 0,sex:void 0,birthday:void 0,description:void 0},(o=c.value)==null||o.resetFields()};return(o,a)=>{const q=T,m=Z,D=P,E=z,F=H,C=le,A=K,h=L,M=ee,R=O;return _(),p(M,{title:e(y),modelValue:e(u),"onUpdate:modelValue":a[5]||(a[5]=l=>Q(u)?u.value=l:null)},{footer:s(()=>[r(h,{onClick:U,type:"primary",disabled:e(d)},{default:s(()=>[v("\u786E \u5B9A")]),_:1},8,["disabled"]),r(h,{onClick:a[4]||(a[4]=l=>u.value=!1)},{default:s(()=>[v("\u53D6 \u6D88")]),_:1})]),default:s(()=>[Y((_(),p(A,{ref_key:"formRef",ref:c,model:e(t),rules:e(S),"label-width":"100px"},{default:s(()=>[r(m,{label:"\u540D\u5B57",prop:"name"},{default:s(()=>[r(q,{modelValue:e(t).name,"onUpdate:modelValue":a[0]||(a[0]=l=>e(t).name=l),placeholder:"\u8BF7\u8F93\u5165\u540D\u5B57"},null,8,["modelValue"])]),_:1}),r(m,{label:"\u6027\u522B",prop:"sex"},{default:s(()=>[r(E,{modelValue:e(t).sex,"onUpdate:modelValue":a[1]||(a[1]=l=>e(t).sex=l)},{default:s(()=>[(_(!0),j(B,null,J(e(se)(e(re).SYSTEM_USER_SEX),l=>(_(),p(D,{key:l.value,label:l.value},{default:s(()=>[v(N(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(m,{label:"\u51FA\u751F\u65E5\u671F",prop:"birthday"},{default:s(()=>[r(F,{modelValue:e(t).birthday,"onUpdate:modelValue":a[2]||(a[2]=l=>e(t).birthday=l),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u51FA\u751F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),r(m,{label:"\u7B80\u4ECB",prop:"description"},{default:s(()=>[r(C,{modelValue:e(t).description,"onUpdate:modelValue":a[3]||(a[3]=l=>e(t).description=l),height:"150px"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[R,e(d)]])]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/infra/demo/demo03/erp/Demo03StudentForm.vue"]])});export{ce as __tla,V as default};

import{d as X,k as Y,r as i,n as j,o as n,q as p,e as s,b as r,a as e,h as v,w as z,c as A,F as B,g as G,t as L,j as N,L as T,y as O,af as P,ag as Z,z as H,C as J,B as K,v as Q,_ as W,__tla as $}from"./index-aaa5adb3.js";import{_ as ee,__tla as ae}from"./Dialog-9a73a39c.js";import{_ as le,__tla as te}from"./Editor-71118346.js";import{a as se,D as re,__tla as oe}from"./dict-f2796e71.js";import{g as ue,c as de,u as ie,__tla as me}from"./index-e63b2b27.js";import{u as ne,__tla as _e}from"./useMessage-873da1e2.js";let g,ce=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return ae}catch{}})(),(()=>{try{return te}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return _e}catch{}})()]).then(async()=>{g=W(X({__name:"Demo03StudentForm",emits:["success"],setup(pe,{expose:V,emit:x}){const{t:_}=Y(),f=ne(),u=i(!1),y=i(""),d=i(!1),b=i(""),t=i({id:void 0,name:void 0,sex:void 0,birthday:void 0,description:void 0}),S=j({name:[{required:!0,message:"\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],sex:[{required:!0,message:"\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],birthday:[{required:!0,message:"\u51FA\u751F\u65E5\u671F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],description:[{required:!0,message:"\u7B80\u4ECB\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),c=i();V({open:async(o,a)=>{if(u.value=!0,y.value=_("action."+o),b.value=o,k(),a){d.value=!0;try{t.value=await ue(a)}finally{d.value=!1}}}});const w=x,U=async()=>{await c.value.validate(),d.value=!0;try{const o=t.value;b.value==="create"?(await de(o),f.success(_("common.createSuccess"))):(await ie(o),f.success(_("common.updateSuccess"))),u.value=!1,w("success")}finally{d.value=!1}},k=()=>{var o;t.value={id:void 0,name:void 0,sex:void 0,birthday:void 0,description:void 0},(o=c.value)==null||o.resetFields()};return(o,a)=>{const q=T,m=O,C=P,D=Z,E=H,F=le,I=J,h=K,M=ee,R=Q;return n(),p(M,{title:e(y),modelValue:e(u),"onUpdate:modelValue":a[5]||(a[5]=l=>N(u)?u.value=l:null)},{footer:s(()=>[r(h,{onClick:U,type:"primary",disabled:e(d)},{default:s(()=>[v("\u786E \u5B9A")]),_:1},8,["disabled"]),r(h,{onClick:a[4]||(a[4]=l=>u.value=!1)},{default:s(()=>[v("\u53D6 \u6D88")]),_:1})]),default:s(()=>[z((n(),p(I,{ref_key:"formRef",ref:c,model:e(t),rules:e(S),"label-width":"100px"},{default:s(()=>[r(m,{label:"\u540D\u5B57",prop:"name"},{default:s(()=>[r(q,{modelValue:e(t).name,"onUpdate:modelValue":a[0]||(a[0]=l=>e(t).name=l),placeholder:"\u8BF7\u8F93\u5165\u540D\u5B57"},null,8,["modelValue"])]),_:1}),r(m,{label:"\u6027\u522B",prop:"sex"},{default:s(()=>[r(D,{modelValue:e(t).sex,"onUpdate:modelValue":a[1]||(a[1]=l=>e(t).sex=l)},{default:s(()=>[(n(!0),A(B,null,G(e(se)(e(re).SYSTEM_USER_SEX),l=>(n(),p(C,{key:l.value,label:l.value},{default:s(()=>[v(L(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(m,{label:"\u51FA\u751F\u65E5\u671F",prop:"birthday"},{default:s(()=>[r(E,{modelValue:e(t).birthday,"onUpdate:modelValue":a[2]||(a[2]=l=>e(t).birthday=l),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u51FA\u751F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),r(m,{label:"\u7B80\u4ECB",prop:"description"},{default:s(()=>[r(F,{modelValue:e(t).description,"onUpdate:modelValue":a[3]||(a[3]=l=>e(t).description=l),height:"150px"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[R,e(d)]])]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/infra/demo/demo03/erp/Demo03StudentForm.vue"]])});export{ce as __tla,g as default};

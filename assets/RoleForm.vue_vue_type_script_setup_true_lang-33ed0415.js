import{d as B,i as D,r as m,e as L,o as _,v as f,w as s,f as r,a as e,h,x as M,c as O,F as P,q as T,l as j,P as z,A as I,y as G,z as H,D as J,C as K,I as Q,__tla as W}from"./index-d2088aec.js";import{_ as X,__tla as Y}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{a as Z,D as $,__tla as ee}from"./dict-999fbee6.js";import{C as b}from"./constants-99751ef9.js";import{a as ae,c as le,u as te,__tla as re}from"./index-b0e54fea.js";import{u as se,__tla as ue}from"./useMessage-c5990e2c.js";let k,oe=Promise.all([(()=>{try{return W}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return ee}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return ue}catch{}})()]).then(async()=>{k=B({name:"SystemRoleForm",__name:"RoleForm",emits:["success"],setup(de,{expose:q,emit:w}){const{t:p}=D(),v=se(),o=m(!1),y=m(""),d=m(!1),g=m(""),t=m({id:void 0,name:"",code:"",sort:void 0,status:b.ENABLE,remark:""}),U=L({name:[{required:!0,message:"\u5C97\u4F4D\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],code:[{required:!0,message:"\u5C97\u4F4D\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],sort:[{required:!0,message:"\u5C97\u4F4D\u987A\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],status:[{required:!0,message:"\u5C97\u4F4D\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],remark:[{required:!1,message:"\u5C97\u4F4D\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),n=m(),C=()=>{var u;t.value={id:void 0,name:"",code:"",sort:void 0,status:b.ENABLE,remark:""},(u=n.value)==null||u.resetFields()};q({open:async(u,a)=>{if(o.value=!0,y.value=p("action."+u),g.value=u,C(),a){d.value=!0;try{t.value=await ae(a)}finally{d.value=!1}}}});const S=w,x=async()=>{if(n&&await n.value.validate()){d.value=!0;try{const u=t.value;g.value==="create"?(await le(u),v.success(p("common.createSuccess"))):(await te(u),v.success(p("common.updateSuccess"))),o.value=!1,S("success")}finally{d.value=!1}}};return(u,a)=>{const i=z,c=I,E=G,F=H,A=J,V=K,N=X,R=Q;return _(),f(N,{modelValue:e(o),"onUpdate:modelValue":a[6]||(a[6]=l=>j(o)?o.value=l:null),title:e(y)},{footer:s(()=>[r(V,{disabled:e(d),type:"primary",onClick:x},{default:s(()=>[h("\u786E \u5B9A")]),_:1},8,["disabled"]),r(V,{onClick:a[5]||(a[5]=l=>o.value=!1)},{default:s(()=>[h("\u53D6 \u6D88")]),_:1})]),default:s(()=>[M((_(),f(A,{ref_key:"formRef",ref:n,model:e(t),rules:e(U),"label-width":"80px"},{default:s(()=>[r(c,{label:"\u89D2\u8272\u540D\u79F0",prop:"name"},{default:s(()=>[r(i,{modelValue:e(t).name,"onUpdate:modelValue":a[0]||(a[0]=l=>e(t).name=l),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"])]),_:1}),r(c,{label:"\u89D2\u8272\u6807\u8BC6",prop:"code"},{default:s(()=>[r(i,{modelValue:e(t).code,"onUpdate:modelValue":a[1]||(a[1]=l=>e(t).code=l),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6"},null,8,["modelValue"])]),_:1}),r(c,{label:"\u663E\u793A\u987A\u5E8F",prop:"sort"},{default:s(()=>[r(i,{modelValue:e(t).sort,"onUpdate:modelValue":a[2]||(a[2]=l=>e(t).sort=l),placeholder:"\u8BF7\u8F93\u5165\u663E\u793A\u987A\u5E8F"},null,8,["modelValue"])]),_:1}),r(c,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[r(F,{modelValue:e(t).status,"onUpdate:modelValue":a[3]||(a[3]=l=>e(t).status=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001"},{default:s(()=>[(_(!0),O(P,null,T(e(Z)(e($).COMMON_STATUS),l=>(_(),f(E,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(c,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[r(i,{modelValue:e(t).remark,"onUpdate:modelValue":a[4]||(a[4]=l=>e(t).remark=l),placeholder:"\u8BF7\u8F93\u5907\u6CE8",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[R,e(d)]])]),_:1},8,["modelValue","title"])}}})});export{k as _,oe as __tla};
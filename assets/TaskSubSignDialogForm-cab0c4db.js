import{d as T,r as u,o as _,q as c,e as l,b as o,a,h as f,w as j,c as N,F as A,g as M,t as p,j as Y,an as B,ay as E,ag as G,y as L,L as P,C as R,B as X,v as Z,_ as z,__tla as H}from"./index-b079f499.js";import{_ as J,__tla as K}from"./Dialog-07bcd661.js";import{e as O,f as Q,__tla as W}from"./index-ec9d7ed0.js";import{u as $,__tla as ee}from"./useMessage-66b9cf03.js";let b,ae=Promise.all([(()=>{try{return H}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return ee}catch{}})()]).then(async()=>{b=z(T({__name:"TaskSubSignDialogForm",emits:["success"],setup(le,{expose:h,emit:w}){const g=$(),r=u(!1),d=u(!1),t=u({id:"",reason:""}),V=u({id:[{required:!0,message:"\u5FC5\u987B\u9009\u62E9\u51CF\u7B7E\u4EFB\u52A1",trigger:"change"}],reason:[{required:!0,message:"\u51CF\u7B7E\u7406\u7531\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),n=u(),m=u([]);h({open:async i=>{if(m.value=await O(i),B(m.value))return g.warning("\u5F53\u524D\u6CA1\u6709\u53EF\u51CF\u7B7E\u7684\u4EFB\u52A1"),!1;r.value=!0,C()}});const k=w,U=async()=>{if(n&&await n.value.validate()){d.value=!0;try{await Q(t.value),g.success("\u51CF\u7B7E\u6210\u529F"),r.value=!1,k("success")}finally{d.value=!1}}},C=()=>{var i;t.value={id:"",reason:""},(i=n.value)==null||i.resetFields()};return(i,s)=>{const x=E,D=G,v=L,F=P,S=R,y=X,q=J,I=Z;return _(),c(q,{modelValue:a(r),"onUpdate:modelValue":s[3]||(s[3]=e=>Y(r)?r.value=e:null),title:"\u51CF\u7B7E",width:"500"},{footer:l(()=>[o(y,{disabled:a(d),type:"primary",onClick:U},{default:l(()=>[f("\u786E \u5B9A")]),_:1},8,["disabled"]),o(y,{onClick:s[2]||(s[2]=e=>r.value=!1)},{default:l(()=>[f("\u53D6 \u6D88")]),_:1})]),default:l(()=>[j((_(),c(S,{ref_key:"formRef",ref:n,model:a(t),rules:a(V),"label-width":"110px"},{default:l(()=>[o(v,{label:"\u51CF\u7B7E\u4EFB\u52A1",prop:"id"},{default:l(()=>[o(D,{modelValue:a(t).id,"onUpdate:modelValue":s[0]||(s[0]=e=>a(t).id=e)},{default:l(()=>[(_(!0),N(A,null,M(a(m),e=>(_(),c(x,{key:e.id,label:e.id},{default:l(()=>[f(p(e.name)+"("+p(e.assigneeUser.deptName)+p(e.assigneeUser.nickname)+"--\u5BA1\u6279) ",1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(v,{label:"\u51CF\u7B7E\u7406\u7531",prop:"reason"},{default:l(()=>[o(F,{modelValue:a(t).reason,"onUpdate:modelValue":s[1]||(s[1]=e=>a(t).reason=e),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u51CF\u7B7E\u7406\u7531"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[I,a(d)]])]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/bpm/processInstance/detail/TaskSubSignDialogForm.vue"]])});export{ae as __tla,b as default};
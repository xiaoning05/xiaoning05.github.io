import{d as C,r as d,o,v as m,w as s,f as _,a,h as p,x as T,c as q,F as D,q as G,l as j,y as z,z as B,A as E,G as J,D as M,J as N,_ as P,__tla as R}from"./index-f0743f71.js";import{_ as X,__tla as Y}from"./Dialog-8f786edd.js";import{u as Z,__tla as H}from"./index-4fe9b481.js";import{g as K,__tla as L}from"./index-5f468446.js";let v,O=Promise.all([(()=>{try{return R}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return L}catch{}})()]).then(async()=>{v=P(C({name:"BpmTaskUpdateAssigneeForm",__name:"TaskUpdateAssigneeForm",emits:["success"],setup(Q,{expose:y,emit:g}){const l=d(!1),u=d(!1),t=d({id:"",assigneeUserId:void 0}),U=d({assigneeUserId:[{required:!0,message:"\u65B0\u5BA1\u6279\u4EBA\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}),n=d(),c=d([]);y({open:async i=>{l.value=!0,b(),t.value.id=i,c.value=await K()}});const h=g,I=async()=>{if(n&&await n.value.validate()){u.value=!0;try{await Z(t.value),l.value=!1,h("success")}finally{u.value=!1}}},b=()=>{var i;t.value={id:"",assigneeUserId:void 0},(i=n.value)==null||i.resetFields()};return(i,r)=>{const k=z,w=B,V=E,A=J,f=M,F=X,x=N;return o(),m(F,{modelValue:a(l),"onUpdate:modelValue":r[2]||(r[2]=e=>j(l)?l.value=e:null),title:"\u8F6C\u6D3E\u5BA1\u6279\u4EBA",width:"500"},{footer:s(()=>[_(f,{disabled:a(u),type:"primary",onClick:I},{default:s(()=>[p("\u786E \u5B9A")]),_:1},8,["disabled"]),_(f,{onClick:r[1]||(r[1]=e=>l.value=!1)},{default:s(()=>[p("\u53D6 \u6D88")]),_:1})]),default:s(()=>[T((o(),m(A,{ref_key:"formRef",ref:n,model:a(t),rules:a(U),"label-width":"110px"},{default:s(()=>[_(V,{label:"\u65B0\u5BA1\u6279\u4EBA",prop:"assigneeUserId"},{default:s(()=>[_(w,{modelValue:a(t).assigneeUserId,"onUpdate:modelValue":r[0]||(r[0]=e=>a(t).assigneeUserId=e),clearable:"",style:{width:"100%"}},{default:s(()=>[(o(!0),q(D,null,G(a(c),e=>(o(),m(k,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[x,a(u)]])]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/bpm/processInstance/detail/TaskUpdateAssigneeForm.vue"]])});export{O as __tla,v as default};

import{d as A,r as d,o as _,v as m,w as s,f as u,a,h as v,x as C,c as q,F as G,q as J,l as j,y as z,z as B,A as E,Q as M,G as N,D as P,J as Q,_ as R,__tla as X}from"./index-f0743f71.js";import{_ as Y,__tla as Z}from"./Dialog-8f786edd.js";import{d as H,__tla as K}from"./index-4fe9b481.js";import{g as L,__tla as O}from"./index-5f468446.js";let y,S=Promise.all([(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return O}catch{}})()]).then(async()=>{y=R(A({name:"BpmTaskDelegateForm",__name:"TaskDelegateForm",emits:["success"],setup(W,{expose:g,emit:h}){const r=d(!1),i=d(!1),l=d({id:"",delegateUserId:void 0}),U=d({delegateUserId:[{required:!0,message:"\u63A5\u6536\u4EBA\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}),n=d(),c=d([]);g({open:async o=>{r.value=!0,V(),l.value.id=o,c.value=await L()}});const b=h,I=async()=>{if(n&&await n.value.validate()){i.value=!0;try{await H(l.value),r.value=!1,b("success")}finally{i.value=!1}}},V=()=>{var o;l.value={id:"",delegateUserId:void 0},(o=n.value)==null||o.resetFields()};return(o,t)=>{const k=z,w=B,f=E,D=M,F=N,p=P,x=Y,T=Q;return _(),m(x,{modelValue:a(r),"onUpdate:modelValue":t[3]||(t[3]=e=>j(r)?r.value=e:null),title:"\u59D4\u6D3E\u4EFB\u52A1",width:"500"},{footer:s(()=>[u(p,{disabled:a(i),type:"primary",onClick:I},{default:s(()=>[v("\u786E \u5B9A")]),_:1},8,["disabled"]),u(p,{onClick:t[2]||(t[2]=e=>r.value=!1)},{default:s(()=>[v("\u53D6 \u6D88")]),_:1})]),default:s(()=>[C((_(),m(F,{ref_key:"formRef",ref:n,model:a(l),rules:a(U),"label-width":"110px"},{default:s(()=>[u(f,{label:"\u63A5\u6536\u4EBA",prop:"delegateUserId"},{default:s(()=>[u(w,{modelValue:a(l).delegateUserId,"onUpdate:modelValue":t[0]||(t[0]=e=>a(l).delegateUserId=e),clearable:"",style:{width:"100%"}},{default:s(()=>[(_(!0),q(G,null,J(a(c),e=>(_(),m(k,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(f,{label:"\u59D4\u6D3E\u7406\u7531",prop:"reason"},{default:s(()=>[u(D,{modelValue:a(l).reason,"onUpdate:modelValue":t[1]||(t[1]=e=>a(l).reason=e),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u59D4\u6D3E\u7406\u7531"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[T,a(i)]])]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/bpm/processInstance/detail/TaskDelegateForm.vue"]])});export{S as __tla,y as default};
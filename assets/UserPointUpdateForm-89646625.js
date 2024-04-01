import{d as j,k as A,r as m,n as D,Y as M,o as g,q as V,e as n,b as l,a as t,h as p,w as B,j as b,L as E,y as G,bX as L,af as N,ag as R,C as S,B as Z,v as z,_ as H,__tla as J}from"./index-b079f499.js";import{_ as K,__tla as O}from"./Dialog-07bcd661.js";import{g as Q,b as W,__tla as $}from"./index-c1f29610.js";import{u as ee,__tla as ae}from"./useMessage-66b9cf03.js";let P,le=Promise.all([(()=>{try{return J}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return ae}catch{}})()]).then(async()=>{P=H(j({name:"UpdatePointForm",__name:"UserPointUpdateForm",emits:["success"],setup(te,{expose:U,emit:w}){const{t:k}=A(),_=ee(),u=m(!1),s=m(!1),e=m({id:void 0,nickname:void 0,point:0,changePoint:0,changeType:1}),x=D({changePoint:[{required:!0,message:"\u53D8\u52A8\u79EF\u5206\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),r=m();U({open:async d=>{if(u.value=!0,F(),d){s.value=!0;try{e.value=await Q(d),e.value.changeType=1,e.value.changePoint=0}finally{s.value=!1}}}});const T=w,C=async()=>{if(r&&await r.value.validate())if(e.value.changePoint<1)_.error("\u53D8\u52A8\u79EF\u5206\u4E0D\u80FD\u5C0F\u4E8E 1");else if(c.value<0)_.error("\u53D8\u52A8\u540E\u7684\u79EF\u5206\u4E0D\u80FD\u5C0F\u4E8E 0");else{s.value=!0;try{await W({id:e.value.id,point:e.value.changePoint*e.value.changeType}),_.success(k("common.updateSuccess")),u.value=!1,T("success")}finally{s.value=!1}}},F=()=>{var d;e.value={id:void 0,nickname:void 0,levelId:void 0,reason:void 0},(d=r.value)==null||d.resetFields()},c=M(()=>e.value.point+e.value.changePoint*e.value.changeType);return(d,a)=>{const f=E,i=G,v=L,h=N,I=R,q=S,y=Z,X=K,Y=z;return g(),V(X,{title:"\u4FEE\u6539\u7528\u6237\u79EF\u5206",modelValue:t(u),"onUpdate:modelValue":a[7]||(a[7]=o=>b(u)?u.value=o:null),width:"600"},{footer:n(()=>[l(y,{onClick:C,type:"primary",disabled:t(s)},{default:n(()=>[p("\u786E \u5B9A")]),_:1},8,["disabled"]),l(y,{onClick:a[6]||(a[6]=o=>u.value=!1)},{default:n(()=>[p("\u53D6 \u6D88")]),_:1})]),default:n(()=>[B((g(),V(q,{ref_key:"formRef",ref:r,model:t(e),rules:t(x),"label-width":"100px"},{default:n(()=>[l(i,{label:"\u7528\u6237\u7F16\u53F7",prop:"id"},{default:n(()=>[l(f,{modelValue:t(e).id,"onUpdate:modelValue":a[0]||(a[0]=o=>t(e).id=o),class:"!w-240px",disabled:""},null,8,["modelValue"])]),_:1}),l(i,{label:"\u7528\u6237\u6635\u79F0",prop:"nickname"},{default:n(()=>[l(f,{modelValue:t(e).nickname,"onUpdate:modelValue":a[1]||(a[1]=o=>t(e).nickname=o),class:"!w-240px",disabled:""},null,8,["modelValue"])]),_:1}),l(i,{label:"\u53D8\u52A8\u524D\u79EF\u5206",prop:"point"},{default:n(()=>[l(v,{modelValue:t(e).point,"onUpdate:modelValue":a[2]||(a[2]=o=>t(e).point=o),class:"!w-240px",disabled:""},null,8,["modelValue"])]),_:1}),l(i,{label:"\u53D8\u52A8\u7C7B\u578B",prop:"changeType"},{default:n(()=>[l(I,{modelValue:t(e).changeType,"onUpdate:modelValue":a[3]||(a[3]=o=>t(e).changeType=o)},{default:n(()=>[l(h,{label:1},{default:n(()=>[p("\u589E\u52A0")]),_:1}),l(h,{label:-1},{default:n(()=>[p("\u51CF\u5C11")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(i,{label:"\u53D8\u52A8\u79EF\u5206",prop:"changePoint"},{default:n(()=>[l(v,{modelValue:t(e).changePoint,"onUpdate:modelValue":a[4]||(a[4]=o=>t(e).changePoint=o),class:"!w-240px",min:0,precision:0},null,8,["modelValue"])]),_:1}),l(i,{label:"\u53D8\u52A8\u540E\u79EF\u5206"},{default:n(()=>[l(v,{modelValue:t(c),"onUpdate:modelValue":a[5]||(a[5]=o=>b(c)?c.value=o:null),class:"!w-240px",disabled:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[Y,t(s)]])]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/member/user/UserPointUpdateForm.vue"]])});export{le as __tla,P as default};

import{ap as m,d as H,i as K,r as d,e as Q,o as b,c as k,f as e,w as s,a,h as v,x as X,v as T,F as C,q as Z,l as $,y as ee,z as ae,A as le,j as te,B as oe,P as se,_ as re,C as ue,k as de,D as ce,I as ne,__tla as pe}from"./index-d2088aec.js";import{_ as _e,__tla as me}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{_ as ie,__tla as fe}from"./UploadFile-07ceee60.js";import{_ as ye,__tla as we}from"./UploadImgs-2e1224f9.js";import{a as be,D as ve,__tla as Ue}from"./dict-999fbee6.js";import{_ as Ve,__tla as ge}from"./BusinessList.vue_vue_type_script_setup_true_lang-eeb83ca3.js";import{_ as Ie,__tla as he}from"./BusinessTableSelect.vue_vue_type_script_setup_true_lang-a239bbfb.js";import{_ as xe,__tla as Fe}from"./ContactList.vue_vue_type_script_setup_true_lang-a2b63b56.js";import{_ as Re,__tla as ke}from"./ContactTableSelect.vue_vue_type_script_setup_true_lang-34ddb4a3.js";import{u as Te,__tla as Ce}from"./useMessage-c5990e2c.js";let i,P,Pe=Promise.all([(()=>{try{return pe}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return Fe}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return Ce}catch{}})()]).then(async()=>{i={getFollowUpRecordPage:async u=>await m.get({url:"/crm/follow-up-record/page",params:u}),getFollowUpRecord:async u=>await m.get({url:"/crm/follow-up-record/get?id="+u}),createFollowUpRecord:async u=>await m.post({url:"/crm/follow-up-record/create",data:u}),updateFollowUpRecord:async u=>await m.put({url:"/crm/follow-up-record/update",data:u}),deleteFollowUpRecord:async u=>await m.delete({url:"/crm/follow-up-record/delete?id="+u}),exportFollowUpRecord:async u=>await m.download({url:"/crm/follow-up-record/export-excel",params:u})},P=H({name:"FollowUpRecordForm",__name:"FollowUpRecordForm",emits:["success"],setup(u,{expose:q,emit:z}){const{t:U}=K(),g=Te(),p=d(!1),I=d(""),_=d(!1),h=d(""),l=d({}),S=Q({type:[{required:!0,message:"\u8DDF\u8FDB\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],content:[{required:!0,message:"\u8DDF\u8FDB\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],nextTime:[{required:!0,message:"\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),V=d();q({open:async(r,t,f,y)=>{if(p.value=!0,I.value=U("action."+f),h.value=f,O(),l.value.bizType=r,l.value.bizId=t,y){_.value=!0;try{l.value=await i.getFollowUpRecord(y)}finally{_.value=!1}}}});const L=z,A=async()=>{await V.value.validate(),_.value=!0;try{const r=l.value;h.value==="create"?(await i.createFollowUpRecord(r),g.success(U("common.createSuccess"))):(await i.updateFollowUpRecord(r),g.success(U("common.updateSuccess"))),p.value=!1,L("success")}finally{_.value=!1}},x=d(),D=()=>{var r;(r=x.value)==null||r.open()},F=d(),E=()=>{var r;(r=F.value)==null||r.open()},O=()=>{var r;(r=V.value)==null||r.resetFields(),l.value={}};return(r,t)=>{const f=ee,y=ae,c=le,n=te,j=oe,B=se,J=ye,M=ie,R=re,w=ue,N=de,W=ce,Y=_e,G=ne;return b(),k(C,null,[e(Y,{modelValue:a(p),"onUpdate:modelValue":t[8]||(t[8]=o=>$(p)?p.value=o:null),title:a(I),width:"50%"},{footer:s(()=>[e(w,{disabled:a(_),type:"primary",onClick:A},{default:s(()=>[v("\u786E \u5B9A")]),_:1},8,["disabled"]),e(w,{onClick:t[7]||(t[7]=o=>p.value=!1)},{default:s(()=>[v("\u53D6 \u6D88")]),_:1})]),default:s(()=>[X((b(),T(W,{ref_key:"formRef",ref:V,model:a(l),rules:a(S),"label-width":"120px"},{default:s(()=>[e(N,null,{default:s(()=>[e(n,{span:12},{default:s(()=>[e(c,{label:"\u8DDF\u8FDB\u7C7B\u578B",prop:"type"},{default:s(()=>[e(y,{modelValue:a(l).type,"onUpdate:modelValue":t[0]||(t[0]=o=>a(l).type=o),placeholder:"\u8BF7\u9009\u62E9\u8DDF\u8FDB\u7C7B\u578B"},{default:s(()=>[(b(!0),k(C,null,Z(a(be)(a(ve).CRM_FOLLOW_UP_TYPE),o=>(b(),T(f,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:s(()=>[e(c,{label:"\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4",prop:"nextTime"},{default:s(()=>[e(j,{modelValue:a(l).nextTime,"onUpdate:modelValue":t[1]||(t[1]=o=>a(l).nextTime=o),placeholder:"\u9009\u62E9\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4",type:"date","value-format":"x"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:s(()=>[e(c,{label:"\u8DDF\u8FDB\u5185\u5BB9",prop:"content"},{default:s(()=>[e(B,{modelValue:a(l).content,"onUpdate:modelValue":t[2]||(t[2]=o=>a(l).content=o),rows:3,type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:s(()=>[e(c,{label:"\u56FE\u7247",prop:"content"},{default:s(()=>[e(J,{modelValue:a(l).picUrls,"onUpdate:modelValue":t[3]||(t[3]=o=>a(l).picUrls=o),class:"min-w-80px"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:s(()=>[e(c,{label:"\u9644\u4EF6",prop:"content"},{default:s(()=>[e(M,{modelValue:a(l).fileUrls,"onUpdate:modelValue":t[4]||(t[4]=o=>a(l).fileUrls=o),class:"min-w-80px"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:s(()=>[e(c,{label:"\u5173\u8054\u8054\u7CFB\u4EBA",prop:"contactIds"},{default:s(()=>[e(w,{onClick:D},{default:s(()=>[e(R,{class:"mr-5px",icon:"ep:plus"}),v(" \u6DFB\u52A0\u8054\u7CFB\u4EBA ")]),_:1}),e(a(xe),{contactIds:a(l).contactIds,"onUpdate:contactIds":t[5]||(t[5]=o=>a(l).contactIds=o)},null,8,["contactIds"])]),_:1})]),_:1}),e(n,{span:24},{default:s(()=>[e(c,{label:"\u5173\u8054\u5546\u673A",prop:"businessIds"},{default:s(()=>[e(w,{onClick:E},{default:s(()=>[e(R,{class:"mr-5px",icon:"ep:plus"}),v(" \u6DFB\u52A0\u5546\u673A ")]),_:1}),e(a(Ve),{businessIds:a(l).businessIds,"onUpdate:businessIds":t[6]||(t[6]=o=>a(l).businessIds=o)},null,8,["businessIds"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[G,a(_)]])]),_:1},8,["modelValue","title"]),e(a(Re),{ref_key:"contactTableSelectRef",ref:x,modelValue:a(l).contactIds,"onUpdate:modelValue":t[9]||(t[9]=o=>a(l).contactIds=o)},null,8,["modelValue"]),e(a(Ie),{ref_key:"businessTableSelectRef",ref:F,modelValue:a(l).businessIds,"onUpdate:modelValue":t[10]||(t[10]=o=>a(l).businessIds=o)},null,8,["modelValue"])],64)}}})});export{i as F,P as _,Pe as __tla};

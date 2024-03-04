import{d as R,i as Z,r as u,e as $,o as i,v as c,w as s,f as r,h as w,x as j,a as l,c as k,F as x,q,l as G,A as H,P as J,bZ as K,y as Q,z as W,D as X,C as Y,I as ee,__tla as ae}from"./index-d5b00dc9.js";import{_ as le,__tla as te}from"./Dialog.vue_vue_type_style_index_0_lang-03cf6454.js";import{E as re,__tla as se}from"./el-tree-select-8e562b9e.js";import{a as oe,D as ue,__tla as de}from"./dict-29b94c3f.js";import{d as me,h as ie}from"./tree-82bb3b99.js";import{a as ne,c as pe,u as ce,g as _e,__tla as ve}from"./index-18bbc7a0.js";import{g as fe,__tla as he}from"./index-d569b7ba.js";import{C}from"./constants-99751ef9.js";import{u as ye,__tla as ge}from"./useMessage-2288a5f2.js";let E,Ve=Promise.all([(()=>{try{return ae}catch{}})(),(()=>{try{return te}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return ge}catch{}})()]).then(async()=>{E=R({name:"SystemDeptForm",__name:"DeptForm",emits:["success"],setup(be,{expose:S,emit:A}){const{t:_}=Z(),h=ye(),m=u(!1),y=u(""),n=u(!1),g=u(""),t=u({id:void 0,title:"",parentId:void 0,name:void 0,sort:void 0,leaderUserId:void 0,phone:void 0,email:void 0,status:C.ENABLE}),D=$({parentId:[{required:!0,message:"\u4E0A\u7EA7\u90E8\u95E8\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u90E8\u95E8\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],sort:[{required:!0,message:"\u663E\u793A\u6392\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],email:[{type:"email",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740",trigger:["blur","change"]}],phone:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801",trigger:"blur"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),p=u(),v=u(),V=u([]);S({open:async(o,e)=>{if(m.value=!0,y.value=_("action."+o),g.value=o,L(),e){n.value=!0;try{t.value=await ne(e)}finally{n.value=!1}}V.value=await fe(),await M()}});const F=A,B=async()=>{if(p&&await p.value.validate()){n.value=!0;try{const o=t.value;g.value==="create"?(await pe(o),h.success(_("common.createSuccess"))):(await ce(o),h.success(_("common.updateSuccess"))),m.value=!1,F("success")}finally{n.value=!1}}},L=()=>{var o;t.value={id:void 0,title:"",parentId:void 0,name:void 0,sort:void 0,leaderUserId:void 0,phone:void 0,email:void 0,status:C.ENABLE},(o=p.value)==null||o.resetFields()},M=async()=>{v.value=[];const o=await _e();let e={id:0,name:"\u9876\u7EA7\u90E8\u95E8",children:[]};e.children=ie(o),v.value.push(e)};return(o,e)=>{const N=re,d=H,f=J,O=K,b=Q,U=W,P=X,I=Y,T=le,z=ee;return i(),c(T,{modelValue:l(m),"onUpdate:modelValue":e[8]||(e[8]=a=>G(m)?m.value=a:null),title:l(y)},{footer:s(()=>[r(I,{type:"primary",onClick:B},{default:s(()=>[w("\u786E \u5B9A")]),_:1}),r(I,{onClick:e[7]||(e[7]=a=>m.value=!1)},{default:s(()=>[w("\u53D6 \u6D88")]),_:1})]),default:s(()=>[j((i(),c(P,{ref_key:"formRef",ref:p,model:l(t),rules:l(D),"label-width":"80px"},{default:s(()=>[r(d,{label:"\u4E0A\u7EA7\u90E8\u95E8",prop:"parentId"},{default:s(()=>[r(N,{modelValue:l(t).parentId,"onUpdate:modelValue":e[0]||(e[0]=a=>l(t).parentId=a),data:l(v),props:l(me),"check-strictly":"","default-expand-all":"",placeholder:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8","value-key":"deptId"},null,8,["modelValue","data","props"])]),_:1}),r(d,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name"},{default:s(()=>[r(f,{modelValue:l(t).name,"onUpdate:modelValue":e[1]||(e[1]=a=>l(t).name=a),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0"},null,8,["modelValue"])]),_:1}),r(d,{label:"\u663E\u793A\u6392\u5E8F",prop:"sort"},{default:s(()=>[r(O,{modelValue:l(t).sort,"onUpdate:modelValue":e[2]||(e[2]=a=>l(t).sort=a),min:0,"controls-position":"right"},null,8,["modelValue"])]),_:1}),r(d,{label:"\u8D1F\u8D23\u4EBA",prop:"leaderUserId"},{default:s(()=>[r(U,{modelValue:l(t).leaderUserId,"onUpdate:modelValue":e[3]||(e[3]=a=>l(t).leaderUserId=a),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA"},{default:s(()=>[(i(!0),k(x,null,q(l(V),a=>(i(),c(b,{key:a.id,label:a.nickname,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(d,{label:"\u8054\u7CFB\u7535\u8BDD",prop:"phone"},{default:s(()=>[r(f,{modelValue:l(t).phone,"onUpdate:modelValue":e[4]||(e[4]=a=>l(t).phone=a),maxlength:"11",placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD"},null,8,["modelValue"])]),_:1}),r(d,{label:"\u90AE\u7BB1",prop:"email"},{default:s(()=>[r(f,{modelValue:l(t).email,"onUpdate:modelValue":e[5]||(e[5]=a=>l(t).email=a),maxlength:"50",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},null,8,["modelValue"])]),_:1}),r(d,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[r(U,{modelValue:l(t).status,"onUpdate:modelValue":e[6]||(e[6]=a=>l(t).status=a),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001"},{default:s(()=>[(i(!0),k(x,null,q(l(oe)(l(ue).COMMON_STATUS),a=>(i(),c(b,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[z,l(n)]])]),_:1},8,["modelValue","title"])}}})});export{E as _,Ve as __tla};

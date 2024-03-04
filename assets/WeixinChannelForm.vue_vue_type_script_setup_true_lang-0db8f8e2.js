import{d as L,i as W,r as f,o as c,c as _,f as a,w as t,a as o,h as d,x as j,v as R,F as G,q as H,t as Q,a4 as q,l as X,P as Y,A as Z,ah as $,ai as ee,_ as ae,C as le,bl as te,D as oe,I as ie,__tla as re}from"./index-d2088aec.js";import{_ as ne,__tla as pe}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{C as de}from"./constants-99751ef9.js";import{d as se,D as ue,__tla as ce}from"./dict-999fbee6.js";import{g as me,c as fe,u as ge,__tla as ye}from"./index-9aabe97d.js";import{u as _e,__tla as he}from"./useMessage-c5990e2c.js";let U,be=Promise.all([(()=>{try{return re}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return he}catch{}})()]).then(async()=>{let V,w;V={key:0},w={key:1},U=L({name:"WeixinChannelForm",__name:"WeixinChannelForm",emits:["success"],setup(ve,{expose:A,emit:F}){const{t:C}=W(),g=_e(),s=f(!1),x=f(""),u=f(!1),l=f({appId:"",code:"",status:void 0,feeRate:void 0,remark:"",config:{appId:"",mchId:"",apiVersion:"",mchKey:"",keyContent:"",privateKeyContent:"",privateCertContent:"",apiV3Key:""}}),P={feeRate:[{required:!0,message:"\u8BF7\u8F93\u5165\u6E20\u9053\u8D39\u7387",trigger:"blur"}],status:[{required:!0,message:"\u6E20\u9053\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],"config.mchId":[{required:!0,message:"\u8BF7\u4F20\u5165\u5546\u6237\u53F7",trigger:"blur"}],"config.appId":[{required:!0,message:"\u8BF7\u8F93\u5165\u516C\u4F17\u53F7APPID",trigger:"blur"}],"config.apiVersion":[{required:!0,message:"API\u7248\u672C\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],"config.mchKey":[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u6237\u5BC6\u94A5",trigger:"blur"}],"config.keyContent":[{required:!0,message:"\u8BF7\u4E0A\u4F20 apiclient_cert.p12 \u8BC1\u4E66",trigger:"blur"}],"config.privateKeyContent":[{required:!0,message:"\u8BF7\u4E0A\u4F20 apiclient_key.pem \u8BC1\u4E66",trigger:"blur"}],"config.privateCertContent":[{required:!0,message:"\u8BF7\u4E0A\u4F20 apiclient_cert.pem\u8BC1 \u4E66",trigger:"blur"}],"config.apiV3Key":[{required:!0,message:"\u8BF7\u4E0A\u4F20 api V3 \u5BC6\u94A5\u503C",trigger:"blur"}]},y=f();A({open:async(n,e)=>{s.value=!0,u.value=!0,D(n,e);try{const r=await me(n,e);r&&r.id&&(l.value=r,l.value.config=JSON.parse(r.config)),x.value=l.value.id?"\u7F16\u8F91\u652F\u4ED8\u6E20\u9053":"\u521B\u5EFA\u652F\u4ED8\u6E20\u9053"}finally{u.value=!1}}});const S=F,z=async()=>{if(y&&await y.value.validate()){u.value=!0;try{const n={...l.value};n.config=JSON.stringify(l.value.config),n.id?(await ge(n),g.success(C("common.updateSuccess"))):(await fe(n),g.success(C("common.createSuccess"))),s.value=!1,S("success")}finally{u.value=!1}}},D=(n,e)=>{var r;l.value={appId:n,code:e,status:de.ENABLE,feeRate:void 0,remark:"",config:{appId:"",mchId:"",apiVersion:"",mchKey:"",keyContent:"",privateKeyContent:"",privateCertContent:"",apiV3Key:""}},(r=y.value)==null||r.resetFields()},I=(n,e)=>{if("."+n.name.split(".")[1]!==e)return g.error('\u8BF7\u4E0A\u4F20\u6307\u5B9A\u683C\u5F0F"'+e+'"\u6587\u4EF6'),!1;let r=n.size/1024/1024<2;return r||g.error("\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7 2MB"),r},N=n=>{I(n,".p12")},k=n=>{I(n,".pem")},O=n=>{const e=new FileReader;e.onload=r=>{l.value.config.privateKeyContent=r.target.result},e.readAsText(n.file)},T=n=>{const e=new FileReader;e.onload=r=>{l.value.config.privateCertContent=r.target.result},e.readAsText(n.file)},M=n=>{const e=new FileReader;e.onload=r=>{l.value.config.keyContent=r.target.result.split(",")[1]},e.readAsDataURL(n.file)};return(n,e)=>{const r=Y,p=Z,h=$,K=ee,b=ae,m=le,v=te,B=oe,E=ne,J=ie;return c(),_("div",null,[a(E,{modelValue:o(s),"onUpdate:modelValue":e[12]||(e[12]=i=>X(s)?s.value=i:null),title:o(x),onClose:n.close,width:"800px"},{footer:t(()=>[a(m,{disabled:o(u),type:"primary",onClick:z},{default:t(()=>[d("\u786E \u5B9A")]),_:1},8,["disabled"]),a(m,{onClick:e[11]||(e[11]=i=>s.value=!1)},{default:t(()=>[d("\u53D6 \u6D88")]),_:1})]),default:t(()=>[j((c(),R(B,{ref_key:"formRef",ref:y,model:o(l),rules:P,"label-width":"120px"},{default:t(()=>[a(p,{"label-width":"180px",label:"\u6E20\u9053\u8D39\u7387",prop:"feeRate"},{default:t(()=>[a(r,{modelValue:o(l).feeRate,"onUpdate:modelValue":e[0]||(e[0]=i=>o(l).feeRate=i),placeholder:"\u8BF7\u8F93\u5165\u6E20\u9053\u8D39\u7387",clearable:"",style:{width:"100%"}},{append:t(()=>[d("%")]),_:1},8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"\u516C\u4F17\u53F7 APPID",prop:"config.appId"},{default:t(()=>[a(r,{modelValue:o(l).config.appId,"onUpdate:modelValue":e[1]||(e[1]=i=>o(l).config.appId=i),placeholder:"\u8BF7\u8F93\u5165\u516C\u4F17\u53F7 APPID",clearable:"",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"\u5546\u6237\u53F7",prop:"config.mchId"},{default:t(()=>[a(r,{modelValue:o(l).config.mchId,"onUpdate:modelValue":e[2]||(e[2]=i=>o(l).config.mchId=i),style:{width:"100%"}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"\u6E20\u9053\u72B6\u6001",prop:"status"},{default:t(()=>[a(K,{modelValue:o(l).status,"onUpdate:modelValue":e[3]||(e[3]=i=>o(l).status=i)},{default:t(()=>[(c(!0),_(G,null,H(o(se)(o(ue).COMMON_STATUS),i=>(c(),R(h,{key:parseInt(i.value),label:parseInt(i.value)},{default:t(()=>[d(Q(i.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"API \u7248\u672C",prop:"config.apiVersion"},{default:t(()=>[a(K,{modelValue:o(l).config.apiVersion,"onUpdate:modelValue":e[4]||(e[4]=i=>o(l).config.apiVersion=i)},{default:t(()=>[a(h,{label:"v2"},{default:t(()=>[d("v2")]),_:1}),a(h,{label:"v3"},{default:t(()=>[d("v3")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(l).config.apiVersion==="v2"?(c(),_("div",V,[a(p,{"label-width":"180px",label:"\u5546\u6237\u5BC6\u94A5",prop:"config.mchKey"},{default:t(()=>[a(r,{modelValue:o(l).config.mchKey,"onUpdate:modelValue":e[5]||(e[5]=i=>o(l).config.mchKey=i),placeholder:"\u8BF7\u8F93\u5165\u5546\u6237\u5BC6\u94A5",clearable:"",style:{width:"100%"},type:"textarea",autosize:{minRows:8,maxRows:8}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"apiclient_cert.p12 \u8BC1\u4E66",prop:"config.keyContent"},{default:t(()=>[a(r,{modelValue:o(l).config.keyContent,"onUpdate:modelValue":e[6]||(e[6]=i=>o(l).config.keyContent=i),type:"textarea",placeholder:"\u8BF7\u4E0A\u4F20 apiclient_cert.p12 \u8BC1\u4E66",readonly:"",autosize:{minRows:8,maxRows:8},style:{width:"100%"}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:""},{default:t(()=>[a(v,{limit:1,accept:".p12",action:"","before-upload":N,"http-request":M},{default:t(()=>[a(m,{type:"primary"},{default:t(()=>[a(b,{icon:"ep:upload",class:"mr-5px"}),d(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:1})]),_:1})])):q("",!0),o(l).config.apiVersion==="v3"?(c(),_("div",w,[a(p,{"label-width":"180px",label:"API V3 \u5BC6\u94A5",prop:"config.apiV3Key"},{default:t(()=>[a(r,{modelValue:o(l).config.apiV3Key,"onUpdate:modelValue":e[7]||(e[7]=i=>o(l).config.apiV3Key=i),placeholder:"\u8BF7\u8F93\u5165 API V3 \u5BC6\u94A5",clearable:"",style:{width:"100%"},type:"textarea",autosize:{minRows:8,maxRows:8}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"apiclient_key.pem \u8BC1\u4E66",prop:"config.privateKeyContent"},{default:t(()=>[a(r,{modelValue:o(l).config.privateKeyContent,"onUpdate:modelValue":e[8]||(e[8]=i=>o(l).config.privateKeyContent=i),type:"textarea",placeholder:"\u8BF7\u4E0A\u4F20 apiclient_key.pem \u8BC1\u4E66",readonly:"",autosize:{minRows:8,maxRows:8},style:{width:"100%"}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"",prop:"privateKeyContentFile"},{default:t(()=>[a(v,{ref:"privateKeyContentFile",limit:1,accept:".pem",action:"","before-upload":k,"http-request":O},{default:t(()=>[a(m,{type:"primary"},{default:t(()=>[a(b,{icon:"ep:upload",class:"mr-5px"}),d(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:1},512)]),_:1}),a(p,{"label-width":"180px",label:"apiclient_cert.pem\u8BC1\u4E66",prop:"config.privateCertContent"},{default:t(()=>[a(r,{modelValue:o(l).config.privateCertContent,"onUpdate:modelValue":e[9]||(e[9]=i=>o(l).config.privateCertContent=i),type:"textarea",placeholder:"\u8BF7\u4E0A\u4F20apiclient_cert.pem\u8BC1\u4E66",readonly:"",autosize:{minRows:8,maxRows:8},style:{width:"100%"}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"",prop:"privateCertContentFile"},{default:t(()=>[a(v,{ref:"privateCertContentFile",limit:1,accept:".pem",action:"","before-upload":k,"http-request":T},{default:t(()=>[a(m,{type:"primary"},{default:t(()=>[a(b,{icon:"ep:upload",class:"mr-5px"}),d(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:1},512)]),_:1})])):q("",!0),a(p,{"label-width":"180px",label:"\u5907\u6CE8",prop:"remark"},{default:t(()=>[a(r,{modelValue:o(l).remark,"onUpdate:modelValue":e[10]||(e[10]=i=>o(l).remark=i),style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[J,o(u)]])]),_:1},8,["modelValue","title","onClose"])])}}})});export{U as _,be as __tla};

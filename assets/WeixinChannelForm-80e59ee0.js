import{d as B,i as G,r as f,o as c,c as _,f as a,w as t,a as o,h as d,x as L,v as R,F as j,q as Q,t as X,a5 as q,l as Y,Q as Z,A as H,ai as $,aj as ee,C as ae,D as le,bm as te,G as oe,J as ie,_ as re,__tla as ne}from"./index-f0743f71.js";import{_ as pe,__tla as de}from"./Dialog-8f786edd.js";import{C as se}from"./constants-99751ef9.js";import{d as ue,D as ce,__tla as me}from"./dict-4a9940b3.js";import{g as fe,c as ge,u as ye,__tla as _e}from"./index-5579dabd.js";import{u as he,__tla as ve}from"./useMessage-75a00a06.js";let A,be=Promise.all([(()=>{try{return ne}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ve}catch{}})()]).then(async()=>{let V,w;V={key:0},w={key:1},A=re(B({name:"WeixinChannelForm",__name:"WeixinChannelForm",emits:["success"],setup(Ve,{expose:U,emit:F}){const{t:C}=G(),g=he(),s=f(!1),x=f(""),u=f(!1),l=f({appId:"",code:"",status:void 0,feeRate:void 0,remark:"",config:{appId:"",mchId:"",apiVersion:"",mchKey:"",keyContent:"",privateKeyContent:"",privateCertContent:"",apiV3Key:""}}),P={feeRate:[{required:!0,message:"\u8BF7\u8F93\u5165\u6E20\u9053\u8D39\u7387",trigger:"blur"}],status:[{required:!0,message:"\u6E20\u9053\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],"config.mchId":[{required:!0,message:"\u8BF7\u4F20\u5165\u5546\u6237\u53F7",trigger:"blur"}],"config.appId":[{required:!0,message:"\u8BF7\u8F93\u5165\u516C\u4F17\u53F7APPID",trigger:"blur"}],"config.apiVersion":[{required:!0,message:"API\u7248\u672C\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],"config.mchKey":[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u6237\u5BC6\u94A5",trigger:"blur"}],"config.keyContent":[{required:!0,message:"\u8BF7\u4E0A\u4F20 apiclient_cert.p12 \u8BC1\u4E66",trigger:"blur"}],"config.privateKeyContent":[{required:!0,message:"\u8BF7\u4E0A\u4F20 apiclient_key.pem \u8BC1\u4E66",trigger:"blur"}],"config.privateCertContent":[{required:!0,message:"\u8BF7\u4E0A\u4F20 apiclient_cert.pem\u8BC1 \u4E66",trigger:"blur"}],"config.apiV3Key":[{required:!0,message:"\u8BF7\u4E0A\u4F20 api V3 \u5BC6\u94A5\u503C",trigger:"blur"}]},y=f();U({open:async(n,e)=>{s.value=!0,u.value=!0,S(n,e);try{const r=await fe(n,e);r&&r.id&&(l.value=r,l.value.config=JSON.parse(r.config)),x.value=l.value.id?"\u7F16\u8F91\u652F\u4ED8\u6E20\u9053":"\u521B\u5EFA\u652F\u4ED8\u6E20\u9053"}finally{u.value=!1}}});const z=F,D=async()=>{if(y&&await y.value.validate()){u.value=!0;try{const n={...l.value};n.config=JSON.stringify(l.value.config),n.id?(await ye(n),g.success(C("common.updateSuccess"))):(await ge(n),g.success(C("common.createSuccess"))),s.value=!1,z("success")}finally{u.value=!1}}},S=(n,e)=>{var r;l.value={appId:n,code:e,status:se.ENABLE,feeRate:void 0,remark:"",config:{appId:"",mchId:"",apiVersion:"",mchKey:"",keyContent:"",privateKeyContent:"",privateCertContent:"",apiV3Key:""}},(r=y.value)==null||r.resetFields()},I=(n,e)=>{if("."+n.name.split(".")[1]!==e){debugger;return g.error('\u8BF7\u4E0A\u4F20\u6307\u5B9A\u683C\u5F0F"'+e+'"\u6587\u4EF6'),!1}let r=n.size/1024/1024<2;return r||g.error("\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7 2MB"),r},M=n=>{I(n,".p12")},k=n=>{I(n,".pem")},N=n=>{const e=new FileReader;e.onload=r=>{l.value.config.privateKeyContent=r.target.result},e.readAsText(n.file)},O=n=>{const e=new FileReader;e.onload=r=>{l.value.config.privateCertContent=r.target.result},e.readAsText(n.file)},T=n=>{const e=new FileReader;e.onload=r=>{l.value.config.keyContent=r.target.result.split(",")[1]},e.readAsDataURL(n.file)};return(n,e)=>{const r=Z,p=H,h=$,K=ee,v=ae,m=le,b=te,E=oe,J=pe,W=ie;return c(),_("div",null,[a(J,{modelValue:o(s),"onUpdate:modelValue":e[12]||(e[12]=i=>Y(s)?s.value=i:null),title:o(x),onClose:n.close,width:"800px"},{footer:t(()=>[a(m,{disabled:o(u),type:"primary",onClick:D},{default:t(()=>[d("\u786E \u5B9A")]),_:1},8,["disabled"]),a(m,{onClick:e[11]||(e[11]=i=>s.value=!1)},{default:t(()=>[d("\u53D6 \u6D88")]),_:1})]),default:t(()=>[L((c(),R(E,{ref_key:"formRef",ref:y,model:o(l),rules:P,"label-width":"120px"},{default:t(()=>[a(p,{"label-width":"180px",label:"\u6E20\u9053\u8D39\u7387",prop:"feeRate"},{default:t(()=>[a(r,{modelValue:o(l).feeRate,"onUpdate:modelValue":e[0]||(e[0]=i=>o(l).feeRate=i),placeholder:"\u8BF7\u8F93\u5165\u6E20\u9053\u8D39\u7387",clearable:"",style:{width:"100%"}},{append:t(()=>[d("%")]),_:1},8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"\u516C\u4F17\u53F7 APPID",prop:"config.appId"},{default:t(()=>[a(r,{modelValue:o(l).config.appId,"onUpdate:modelValue":e[1]||(e[1]=i=>o(l).config.appId=i),placeholder:"\u8BF7\u8F93\u5165\u516C\u4F17\u53F7 APPID",clearable:"",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"\u5546\u6237\u53F7",prop:"config.mchId"},{default:t(()=>[a(r,{modelValue:o(l).config.mchId,"onUpdate:modelValue":e[2]||(e[2]=i=>o(l).config.mchId=i),style:{width:"100%"}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"\u6E20\u9053\u72B6\u6001",prop:"status"},{default:t(()=>[a(K,{modelValue:o(l).status,"onUpdate:modelValue":e[3]||(e[3]=i=>o(l).status=i)},{default:t(()=>[(c(!0),_(j,null,Q(o(ue)(o(ce).COMMON_STATUS),i=>(c(),R(h,{key:parseInt(i.value),label:parseInt(i.value)},{default:t(()=>[d(X(i.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"API \u7248\u672C",prop:"config.apiVersion"},{default:t(()=>[a(K,{modelValue:o(l).config.apiVersion,"onUpdate:modelValue":e[4]||(e[4]=i=>o(l).config.apiVersion=i)},{default:t(()=>[a(h,{label:"v2"},{default:t(()=>[d("v2")]),_:1}),a(h,{label:"v3"},{default:t(()=>[d("v3")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(l).config.apiVersion==="v2"?(c(),_("div",V,[a(p,{"label-width":"180px",label:"\u5546\u6237\u5BC6\u94A5",prop:"config.mchKey"},{default:t(()=>[a(r,{modelValue:o(l).config.mchKey,"onUpdate:modelValue":e[5]||(e[5]=i=>o(l).config.mchKey=i),placeholder:"\u8BF7\u8F93\u5165\u5546\u6237\u5BC6\u94A5",clearable:"",style:{width:"100%"},type:"textarea",autosize:{minRows:8,maxRows:8}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"apiclient_cert.p12 \u8BC1\u4E66",prop:"config.keyContent"},{default:t(()=>[a(r,{modelValue:o(l).config.keyContent,"onUpdate:modelValue":e[6]||(e[6]=i=>o(l).config.keyContent=i),type:"textarea",placeholder:"\u8BF7\u4E0A\u4F20 apiclient_cert.p12 \u8BC1\u4E66",readonly:"",autosize:{minRows:8,maxRows:8},style:{width:"100%"}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:""},{default:t(()=>[a(b,{limit:1,accept:".p12",action:"","before-upload":M,"http-request":T},{default:t(()=>[a(m,{type:"primary"},{default:t(()=>[a(v,{icon:"ep:upload",class:"mr-5px"}),d(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:1})]),_:1})])):q("",!0),o(l).config.apiVersion==="v3"?(c(),_("div",w,[a(p,{"label-width":"180px",label:"API V3 \u5BC6\u94A5",prop:"config.apiV3Key"},{default:t(()=>[a(r,{modelValue:o(l).config.apiV3Key,"onUpdate:modelValue":e[7]||(e[7]=i=>o(l).config.apiV3Key=i),placeholder:"\u8BF7\u8F93\u5165 API V3 \u5BC6\u94A5",clearable:"",style:{width:"100%"},type:"textarea",autosize:{minRows:8,maxRows:8}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"apiclient_key.pem \u8BC1\u4E66",prop:"config.privateKeyContent"},{default:t(()=>[a(r,{modelValue:o(l).config.privateKeyContent,"onUpdate:modelValue":e[8]||(e[8]=i=>o(l).config.privateKeyContent=i),type:"textarea",placeholder:"\u8BF7\u4E0A\u4F20 apiclient_key.pem \u8BC1\u4E66",readonly:"",autosize:{minRows:8,maxRows:8},style:{width:"100%"}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"",prop:"privateKeyContentFile"},{default:t(()=>[a(b,{ref:"privateKeyContentFile",limit:1,accept:".pem",action:"","before-upload":k,"http-request":N},{default:t(()=>[a(m,{type:"primary"},{default:t(()=>[a(v,{icon:"ep:upload",class:"mr-5px"}),d(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:1},512)]),_:1}),a(p,{"label-width":"180px",label:"apiclient_cert.pem\u8BC1\u4E66",prop:"config.privateCertContent"},{default:t(()=>[a(r,{modelValue:o(l).config.privateCertContent,"onUpdate:modelValue":e[9]||(e[9]=i=>o(l).config.privateCertContent=i),type:"textarea",placeholder:"\u8BF7\u4E0A\u4F20apiclient_cert.pem\u8BC1\u4E66",readonly:"",autosize:{minRows:8,maxRows:8},style:{width:"100%"}},null,8,["modelValue"])]),_:1}),a(p,{"label-width":"180px",label:"",prop:"privateCertContentFile"},{default:t(()=>[a(b,{ref:"privateCertContentFile",limit:1,accept:".pem",action:"","before-upload":k,"http-request":O},{default:t(()=>[a(m,{type:"primary"},{default:t(()=>[a(v,{icon:"ep:upload",class:"mr-5px"}),d(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:1},512)]),_:1})])):q("",!0),a(p,{"label-width":"180px",label:"\u5907\u6CE8",prop:"remark"},{default:t(()=>[a(r,{modelValue:o(l).remark,"onUpdate:modelValue":e[10]||(e[10]=i=>o(l).remark=i),style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[W,o(u)]])]),_:1},8,["modelValue","title","onClose"])])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/pay/app/components/channel/WeixinChannelForm.vue"]])});export{be as __tla,A as default};
import{d as E,k as J,r as y,o as m,c as v,b as l,e as t,a as o,h as u,w as $,q as K,F as L,g as G,t as H,$ as k,j as Q,K as W,y as X,ae as Y,af as Z,_ as ee,A as le,bg as ae,B as te,v as oe,__tla as re}from"./index-34f06ebd.js";import{_ as ie,__tla as ne}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{C as de}from"./constants-99751ef9.js";import{d as ue,D as pe,__tla as se}from"./dict-e142e39a.js";import{g as ce,c as fe,u as me,__tla as ge}from"./index-63d7fdab.js";import{u as ye,__tla as be}from"./useMessage-7a5ab7ef.js";let q,_e=Promise.all([(()=>{try{return re}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return be}catch{}})()]).then(async()=>{let x,R,p;x={key:0},R={key:1},p=".crt",q=E({name:"AlipayChannelForm",__name:"AlipayChannelForm",emits:["success"],setup(Ce,{expose:A,emit:I}){const{t:U}=J(),b=ye(),s=y(!1),P=y(""),c=y(!1),a=y({appId:"",code:"",status:void 0,feeRate:void 0,remark:"",config:{appId:"",serverUrl:null,signType:"",mode:null,privateKey:"",alipayPublicKey:"",appCertContent:"",alipayPublicCertContent:"",rootCertContent:""}}),T={feeRate:[{required:!0,message:"\u8BF7\u8F93\u5165\u6E20\u9053\u8D39\u7387",trigger:"blur"}],status:[{required:!0,message:"\u6E20\u9053\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],"config.appId":[{required:!0,message:"\u8BF7\u8F93\u5165\u5F00\u653E\u5E73\u53F0\u4E0A\u521B\u5EFA\u7684\u5E94\u7528\u7684 ID",trigger:"blur"}],"config.serverUrl":[{required:!0,message:"\u8BF7\u4F20\u5165\u7F51\u5173\u5730\u5740",trigger:"blur"}],"config.signType":[{required:!0,message:"\u8BF7\u4F20\u5165\u7B7E\u540D\u7B97\u6CD5\u7C7B\u578B",trigger:"blur"}],"config.mode":[{required:!0,message:"\u516C\u94A5\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],"config.privateKey":[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u6237\u79C1\u94A5",trigger:"blur"}],"config.alipayPublicKey":[{required:!0,message:"\u8BF7\u8F93\u5165\u652F\u4ED8\u5B9D\u516C\u94A5\u5B57\u7B26\u4E32",trigger:"blur"}],"config.appCertContent":[{required:!0,message:"\u8BF7\u4E0A\u4F20\u5546\u6237\u516C\u94A5\u5E94\u7528\u8BC1\u4E66",trigger:"blur"}],"config.alipayPublicCertContent":[{required:!0,message:"\u8BF7\u4E0A\u4F20\u652F\u4ED8\u5B9D\u516C\u94A5\u8BC1\u4E66",trigger:"blur"}],"config.rootCertContent":[{required:!0,message:"\u8BF7\u4E0A\u4F20\u6307\u5B9A\u6839\u8BC1\u4E66",trigger:"blur"}]},_=y();A({open:async(n,e)=>{s.value=!0,c.value=!0,z(n,e);try{const i=await ce(n,e);i&&i.id&&(a.value=i,a.value.config=JSON.parse(i.config)),P.value=a.value.id?"\u7F16\u8F91\u652F\u4ED8\u6E20\u9053":"\u521B\u5EFA\u652F\u4ED8\u6E20\u9053"}finally{c.value=!1}}});const F=I,S=async()=>{if(_&&await _.value.validate()){c.value=!0;try{const n={...a.value};n.config=JSON.stringify(a.value.config),n.id?(await me(n),b.success(U("common.updateSuccess"))):(await fe(n),b.success(U("common.createSuccess"))),s.value=!1,F("success")}finally{c.value=!1}}},z=(n,e)=>{var i;a.value={appId:n,code:e,status:de.ENABLE,remark:"",feeRate:null,config:{appId:"",serverUrl:null,signType:"RSA2",mode:null,privateKey:"",alipayPublicKey:"",appCertContent:"",alipayPublicCertContent:"",rootCertContent:""}},(i=_.value)==null||i.resetFields()},h=n=>{if("."+n.name.split(".")[1]!==p)return b.error(`\u8BF7\u4E0A\u4F20\u6307\u5B9A\u683C\u5F0F"${p}"\u6587\u4EF6`),!1;let e=n.size/1024/1024<2;return e||b.error("\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7 2MB"),e},D=n=>{const e=new FileReader;e.onload=i=>{a.value.config.appCertContent=i.target.result},e.readAsText(n.file)},M=n=>{const e=new FileReader;e.onload=i=>{a.value.config.alipayPublicCertContent=i.target.result},e.readAsText(n.file)},N=n=>{const e=new FileReader;e.onload=i=>{a.value.config.rootCertContent=i.target.result},e.readAsText(n.file)};return(n,e)=>{const i=W,d=X,f=Y,C=Z,w=ee,g=le,V=ae,O=te,B=ie,j=oe;return m(),v("div",null,[l(B,{modelValue:o(s),"onUpdate:modelValue":e[14]||(e[14]=r=>Q(s)?s.value=r:null),title:o(P),onClosed:n.close,width:"830px"},{footer:t(()=>[l(g,{disabled:o(c),type:"primary",onClick:S},{default:t(()=>[u("\u786E \u5B9A")]),_:1},8,["disabled"]),l(g,{onClick:e[13]||(e[13]=r=>s.value=!1)},{default:t(()=>[u("\u53D6 \u6D88")]),_:1})]),default:t(()=>[$((m(),K(O,{ref_key:"formRef",ref:_,model:o(a),formRules:T,"label-width":"100px"},{default:t(()=>[l(d,{"label-width":"180px",label:"\u6E20\u9053\u8D39\u7387",prop:"feeRate"},{default:t(()=>[l(i,{modelValue:o(a).feeRate,"onUpdate:modelValue":e[0]||(e[0]=r=>o(a).feeRate=r),placeholder:"\u8BF7\u8F93\u5165\u6E20\u9053\u8D39\u7387",clearable:""},{append:t(()=>[u("%")]),_:1},8,["modelValue"])]),_:1}),l(d,{"label-width":"180px",label:"\u5F00\u653E\u5E73\u53F0 APPID",prop:"config.appId"},{default:t(()=>[l(i,{modelValue:o(a).config.appId,"onUpdate:modelValue":e[1]||(e[1]=r=>o(a).config.appId=r),placeholder:"\u8BF7\u8F93\u5165\u5F00\u653E\u5E73\u53F0 APPID",clearable:""},null,8,["modelValue"])]),_:1}),l(d,{"label-width":"180px",label:"\u6E20\u9053\u72B6\u6001",prop:"status"},{default:t(()=>[l(C,{modelValue:o(a).status,"onUpdate:modelValue":e[2]||(e[2]=r=>o(a).status=r)},{default:t(()=>[(m(!0),v(L,null,G(o(ue)(o(pe).COMMON_STATUS),r=>(m(),K(f,{key:parseInt(r.value),label:parseInt(r.value)},{default:t(()=>[u(H(r.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,{"label-width":"180px",label:"\u7F51\u5173\u5730\u5740",prop:"config.serverUrl"},{default:t(()=>[l(C,{modelValue:o(a).config.serverUrl,"onUpdate:modelValue":e[3]||(e[3]=r=>o(a).config.serverUrl=r)},{default:t(()=>[l(f,{label:"https://openapi.alipay.com/gateway.do"},{default:t(()=>[u("\u7EBF\u4E0A\u73AF\u5883")]),_:1}),l(f,{label:"https://openapi-sandbox.dl.alipaydev.com/gateway.do"},{default:t(()=>[u(" \u6C99\u7BB1\u73AF\u5883 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,{"label-width":"180px",label:"\u7B97\u6CD5\u7C7B\u578B",prop:"config.signType"},{default:t(()=>[l(C,{modelValue:o(a).config.signType,"onUpdate:modelValue":e[4]||(e[4]=r=>o(a).config.signType=r)},{default:t(()=>[l(f,{key:"RSA2",label:"RSA2"},{default:t(()=>[u("RSA2")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,{"label-width":"180px",label:"\u516C\u94A5\u7C7B\u578B",prop:"config.mode"},{default:t(()=>[l(C,{modelValue:o(a).config.mode,"onUpdate:modelValue":e[5]||(e[5]=r=>o(a).config.mode=r)},{default:t(()=>[l(f,{key:"\u516C\u94A5\u6A21\u5F0F",label:1},{default:t(()=>[u("\u516C\u94A5\u6A21\u5F0F")]),_:1}),l(f,{key:"\u8BC1\u4E66\u6A21\u5F0F",label:2},{default:t(()=>[u("\u8BC1\u4E66\u6A21\u5F0F")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(a).config.mode===1?(m(),v("div",x,[l(d,{"label-width":"180px",label:"\u5E94\u7528\u79C1\u94A5",prop:"config.privateKey"},{default:t(()=>[l(i,{type:"textarea",autosize:{minRows:8,maxRows:8},modelValue:o(a).config.privateKey,"onUpdate:modelValue":e[6]||(e[6]=r=>o(a).config.privateKey=r),placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u79C1\u94A5",clearable:"",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),l(d,{"label-width":"180px",label:"\u652F\u4ED8\u5B9D\u516C\u94A5",prop:"config.alipayPublicKey"},{default:t(()=>[l(i,{type:"textarea",autosize:{minRows:8,maxRows:8},modelValue:o(a).config.alipayPublicKey,"onUpdate:modelValue":e[7]||(e[7]=r=>o(a).config.alipayPublicKey=r),placeholder:"\u8BF7\u8F93\u5165\u652F\u4ED8\u5B9D\u516C\u94A5",clearable:"",style:{width:"100%"}},null,8,["modelValue"])]),_:1})])):k("",!0),o(a).config.mode===2?(m(),v("div",R,[l(d,{"label-width":"180px",label:"\u5E94\u7528\u79C1\u94A5",prop:"config.privateKey"},{default:t(()=>[l(i,{type:"textarea",autosize:{minRows:8,maxRows:8},modelValue:o(a).config.privateKey,"onUpdate:modelValue":e[8]||(e[8]=r=>o(a).config.privateKey=r),placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u79C1\u94A5",clearable:"",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),l(d,{"label-width":"180px",label:"\u5546\u6237\u516C\u94A5\u5E94\u7528\u8BC1\u4E66",prop:"config.appCertContent"},{default:t(()=>[l(i,{modelValue:o(a).config.appCertContent,"onUpdate:modelValue":e[9]||(e[9]=r=>o(a).config.appCertContent=r),type:"textarea",placeholder:"\u8BF7\u4E0A\u4F20\u5546\u6237\u516C\u94A5\u5E94\u7528\u8BC1\u4E66",readonly:"",autosize:{minRows:8,maxRows:8},style:{width:"100%"}},null,8,["modelValue"])]),_:1}),l(d,{"label-width":"180px",label:""},{default:t(()=>[l(V,{action:"",ref:"privateKeyContentFile",limit:1,accept:p,"http-request":D,"before-upload":h},{default:t(()=>[l(g,{type:"primary"},{default:t(()=>[l(w,{icon:"ep:upload",class:"mr-5px"}),u(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:1},512)]),_:1}),l(d,{"label-width":"180px",label:"\u652F\u4ED8\u5B9D\u516C\u94A5\u8BC1\u4E66",prop:"config.alipayPublicCertContent"},{default:t(()=>[l(i,{modelValue:o(a).config.alipayPublicCertContent,"onUpdate:modelValue":e[10]||(e[10]=r=>o(a).config.alipayPublicCertContent=r),type:"textarea",placeholder:"\u8BF7\u4E0A\u4F20\u652F\u4ED8\u5B9D\u516C\u94A5\u8BC1\u4E66",readonly:"",autosize:{minRows:8,maxRows:8},style:{width:"100%"}},null,8,["modelValue"])]),_:1}),l(d,{"label-width":"180px",label:""},{default:t(()=>[l(V,{ref:"privateCertContentFile",action:"",limit:1,accept:p,"before-upload":h,"http-request":M},{default:t(()=>[l(g,{type:"primary"},{default:t(()=>[l(w,{icon:"ep:upload",class:"mr-5px"}),u(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:1},512)]),_:1}),l(d,{"label-width":"180px",label:"\u6839\u8BC1\u4E66",prop:"config.rootCertContent"},{default:t(()=>[l(i,{modelValue:o(a).config.rootCertContent,"onUpdate:modelValue":e[11]||(e[11]=r=>o(a).config.rootCertContent=r),type:"textarea",placeholder:"\u8BF7\u4E0A\u4F20\u6839\u8BC1\u4E66",readonly:"",autosize:{minRows:8,maxRows:8},style:{width:"100%"}},null,8,["modelValue"])]),_:1}),l(d,{"label-width":"180px",label:""},{default:t(()=>[l(V,{ref:"privateCertContentFile",limit:1,accept:p,action:"","before-upload":h,"http-request":N},{default:t(()=>[l(g,{type:"primary"},{default:t(()=>[l(w,{icon:"ep:upload",class:"mr-5px"}),u(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:1},512)]),_:1})])):k("",!0),l(d,{"label-width":"180px",label:"\u5907\u6CE8",prop:"remark"},{default:t(()=>[l(i,{modelValue:o(a).remark,"onUpdate:modelValue":e[12]||(e[12]=r=>o(a).remark=r),style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[j,o(c)]])]),_:1},8,["modelValue","title","onClosed"])])}}})});export{q as _,_e as __tla};

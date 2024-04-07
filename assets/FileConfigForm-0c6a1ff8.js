import{ao as m,d as T,k as z,r as _,n as B,o as s,q as d,e as r,b as t,a as e,h as V,w as Y,c as Z,F as H,g as J,a0 as n,j as Q,L as W,y as $,s as ee,x as le,bX as ae,af as oe,ag as re,C as te,B as se,v as ue,_ as de,__tla as ie}from"./index-aaa5adb3.js";import{_ as ne,__tla as ce}from"./Dialog-9a73a39c.js";import{d as ge,D as me,__tla as fe}from"./dict-f2796e71.js";import{u as pe,__tla as _e}from"./useMessage-873da1e2.js";let v,F,S,P,C,A,be=Promise.all([(()=>{try{return ie}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return _e}catch{}})()]).then(async()=>{P=g=>m.get({url:"/infra/file-config/page",params:g}),A=g=>m.put({url:"/infra/file-config/update-master?id="+g}),S=g=>m.delete({url:"/infra/file-config/delete?id="+g}),C=g=>m.get({url:"/infra/file-config/test?id="+g}),v=de(T({name:"InfraFileConfigForm",__name:"FileConfigForm",emits:["success"],setup(g,{expose:I,emit:K}){const{t:y}=z(),h=pe(),f=_(!1),k=_(""),p=_(!1),U=_(""),l=_({id:void 0,name:"",storage:0,remark:"",config:{}}),x=B({name:[{required:!0,message:"\u914D\u7F6E\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],storage:[{required:!0,message:"\u5B58\u50A8\u5668\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],config:{basePath:[{required:!0,message:"\u57FA\u7840\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],host:[{required:!0,message:"\u4E3B\u673A\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],port:[{required:!0,message:"\u4E3B\u673A\u7AEF\u53E3\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],username:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],password:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],mode:[{required:!0,message:"\u8FDE\u63A5\u6A21\u5F0F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],endpoint:[{required:!0,message:"\u8282\u70B9\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],bucket:[{required:!0,message:"\u5B58\u50A8 bucket \u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],accessKey:[{required:!0,message:"accessKey \u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],accessSecret:[{required:!0,message:"accessSecret \u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],domain:[{required:!0,message:"\u81EA\u5B9A\u4E49\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}),b=_();I({open:async(c,a)=>{if(f.value=!0,k.value=y("action."+c),U.value=c,j(),a){p.value=!0;try{l.value=await(i=>m.get({url:"/infra/file-config/get?id="+i}))(a)}finally{p.value=!1}}}});const E=K,O=async()=>{if(b&&await b.value.validate()){p.value=!0;try{const c=l.value;U.value==="create"?(await(a=>m.post({url:"/infra/file-config/create",data:a}))(c),h.success(y("common.createSuccess"))):(await(a=>m.put({url:"/infra/file-config/update",data:a}))(c),h.success(y("common.updateSuccess"))),f.value=!1,E("success")}finally{p.value=!1}}},j=()=>{var c;l.value={id:void 0,name:"",storage:void 0,remark:"",config:{}},(c=b.value)==null||c.resetFields()};return(c,a)=>{const i=W,u=$,D=ee,M=le,N=ae,q=oe,R=re,X=te,w=se,G=ne,L=ue;return s(),d(G,{modelValue:e(f),"onUpdate:modelValue":a[16]||(a[16]=o=>Q(f)?f.value=o:null),title:e(k)},{footer:r(()=>[t(w,{disabled:e(p),type:"primary",onClick:O},{default:r(()=>[V("\u786E \u5B9A")]),_:1},8,["disabled"]),t(w,{onClick:a[15]||(a[15]=o=>f.value=!1)},{default:r(()=>[V("\u53D6 \u6D88")]),_:1})]),default:r(()=>[Y((s(),d(X,{ref_key:"formRef",ref:b,model:e(l),rules:e(x),"label-width":"120px"},{default:r(()=>[t(u,{label:"\u914D\u7F6E\u540D",prop:"name"},{default:r(()=>[t(i,{modelValue:e(l).name,"onUpdate:modelValue":a[0]||(a[0]=o=>e(l).name=o),placeholder:"\u8BF7\u8F93\u5165\u914D\u7F6E\u540D"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u5907\u6CE8",prop:"remark"},{default:r(()=>[t(i,{modelValue:e(l).remark,"onUpdate:modelValue":a[1]||(a[1]=o=>e(l).remark=o),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u5B58\u50A8\u5668",prop:"storage"},{default:r(()=>[t(M,{modelValue:e(l).storage,"onUpdate:modelValue":a[2]||(a[2]=o=>e(l).storage=o),disabled:e(l).id!==void 0,placeholder:"\u8BF7\u9009\u62E9\u5B58\u50A8\u5668"},{default:r(()=>[(s(!0),Z(H,null,J(e(ge)(e(me).INFRA_FILE_STORAGE),o=>(s(),d(D,{key:o.value,label:o.label,value:parseInt(o.value)},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),e(l).storage>=10&&e(l).storage<=12?(s(),d(u,{key:0,label:"\u57FA\u7840\u8DEF\u5F84",prop:"config.basePath"},{default:r(()=>[t(i,{modelValue:e(l).config.basePath,"onUpdate:modelValue":a[3]||(a[3]=o=>e(l).config.basePath=o),placeholder:"\u8BF7\u8F93\u5165\u57FA\u7840\u8DEF\u5F84"},null,8,["modelValue"])]),_:1})):n("",!0),e(l).storage>=11&&e(l).storage<=12?(s(),d(u,{key:1,label:"\u4E3B\u673A\u5730\u5740",prop:"config.host"},{default:r(()=>[t(i,{modelValue:e(l).config.host,"onUpdate:modelValue":a[4]||(a[4]=o=>e(l).config.host=o),placeholder:"\u8BF7\u8F93\u5165\u4E3B\u673A\u5730\u5740"},null,8,["modelValue"])]),_:1})):n("",!0),e(l).storage>=11&&e(l).storage<=12?(s(),d(u,{key:2,label:"\u4E3B\u673A\u7AEF\u53E3",prop:"config.port"},{default:r(()=>[t(N,{modelValue:e(l).config.port,"onUpdate:modelValue":a[5]||(a[5]=o=>e(l).config.port=o),min:0,placeholder:"\u8BF7\u8F93\u5165\u4E3B\u673A\u7AEF\u53E3"},null,8,["modelValue"])]),_:1})):n("",!0),e(l).storage>=11&&e(l).storage<=12?(s(),d(u,{key:3,label:"\u7528\u6237\u540D",prop:"config.username"},{default:r(()=>[t(i,{modelValue:e(l).config.username,"onUpdate:modelValue":a[6]||(a[6]=o=>e(l).config.username=o),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1})):n("",!0),e(l).storage>=11&&e(l).storage<=12?(s(),d(u,{key:4,label:"\u5BC6\u7801",prop:"config.password"},{default:r(()=>[t(i,{modelValue:e(l).config.password,"onUpdate:modelValue":a[7]||(a[7]=o=>e(l).config.password=o),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1})):n("",!0),e(l).storage===11?(s(),d(u,{key:5,label:"\u8FDE\u63A5\u6A21\u5F0F",prop:"config.mode"},{default:r(()=>[t(R,{modelValue:e(l).config.mode,"onUpdate:modelValue":a[8]||(a[8]=o=>e(l).config.mode=o)},{default:r(()=>[t(q,{key:"Active",label:"Active"},{default:r(()=>[V("\u4E3B\u52A8\u6A21\u5F0F")]),_:1}),t(q,{key:"Passive",label:"Passive"},{default:r(()=>[V("\u88AB\u52A8\u6A21\u5F0F")]),_:1})]),_:1},8,["modelValue"])]),_:1})):n("",!0),e(l).storage===20?(s(),d(u,{key:6,label:"\u8282\u70B9\u5730\u5740",prop:"config.endpoint"},{default:r(()=>[t(i,{modelValue:e(l).config.endpoint,"onUpdate:modelValue":a[9]||(a[9]=o=>e(l).config.endpoint=o),placeholder:"\u8BF7\u8F93\u5165\u8282\u70B9\u5730\u5740"},null,8,["modelValue"])]),_:1})):n("",!0),e(l).storage===20?(s(),d(u,{key:7,label:"\u5B58\u50A8 bucket",prop:"config.bucket"},{default:r(()=>[t(i,{modelValue:e(l).config.bucket,"onUpdate:modelValue":a[10]||(a[10]=o=>e(l).config.bucket=o),placeholder:"\u8BF7\u8F93\u5165 bucket"},null,8,["modelValue"])]),_:1})):n("",!0),e(l).storage===20?(s(),d(u,{key:8,label:"accessKey",prop:"config.accessKey"},{default:r(()=>[t(i,{modelValue:e(l).config.accessKey,"onUpdate:modelValue":a[11]||(a[11]=o=>e(l).config.accessKey=o),placeholder:"\u8BF7\u8F93\u5165 accessKey"},null,8,["modelValue"])]),_:1})):n("",!0),e(l).storage===20?(s(),d(u,{key:9,label:"accessSecret",prop:"config.accessSecret"},{default:r(()=>[t(i,{modelValue:e(l).config.accessSecret,"onUpdate:modelValue":a[12]||(a[12]=o=>e(l).config.accessSecret=o),placeholder:"\u8BF7\u8F93\u5165 accessSecret"},null,8,["modelValue"])]),_:1})):n("",!0),e(l).storage===20?(s(),d(u,{key:10,label:"\u81EA\u5B9A\u4E49\u57DF\u540D"},{default:r(()=>[t(i,{modelValue:e(l).config.domain,"onUpdate:modelValue":a[13]||(a[13]=o=>e(l).config.domain=o),placeholder:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u57DF\u540D"},null,8,["modelValue"])]),_:1})):e(l).storage?(s(),d(u,{key:11,label:"\u81EA\u5B9A\u4E49\u57DF\u540D",prop:"config.domain"},{default:r(()=>[t(i,{modelValue:e(l).config.domain,"onUpdate:modelValue":a[14]||(a[14]=o=>e(l).config.domain=o),placeholder:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u57DF\u540D"},null,8,["modelValue"])]),_:1})):n("",!0)]),_:1},8,["model","rules"])),[[L,e(p)]])]),_:1},8,["modelValue","title"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/infra/fileConfig/FileConfigForm.vue"]]),F=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}))});export{v as F,be as __tla,F as a,S as d,P as g,C as t,A as u};

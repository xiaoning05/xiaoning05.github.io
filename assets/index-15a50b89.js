import{d as O,u as G,C as I,r as _,n as Y,p as $,R as H,D as J,o as n,c as K,b as l,e as t,w as U,a as e,q as s,f as C,t as w,h as m,$ as q,j as b,ag as Q,F as W,E as X,A as Z,ah as aa,i as ta,v as ea,__tla as la}from"./index-34f06ebd.js";import{_ as ra,__tla as oa}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{_ as na,__tla as ia}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{_ as _a,__tla as sa}from"./index.vue_vue_type_script_setup_true_lang-68fe248c.js";import{_ as ua,__tla as pa}from"./DictTag.vue_vue_type_script_lang-942df0b2.js";import{D as ma,__tla as ca}from"./dict-e142e39a.js";import{d as da,__tla as fa}from"./formatTime-ed0a77fd.js";import{j as ya,__tla as ha}from"./bpmn-embedded-d0b6b8de.js";import{g as wa,a as ga,__tla as ka}from"./index-889654e2.js";import{b as va}from"./formCreate-a3356cdc.js";import{__tla as Ca}from"./index-460c50ff.js";import{__tla as ba}from"./index-f8693880.js";import"./color-f5b6e279.js";import{__tla as Va}from"./XTextButton-5cf1d391.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as xa}from"./XButton-764a1d39.js";import{__tla as Pa}from"./el-collapse-item-c051ca56.js";import{__tla as Ta}from"./el-link-6a9ddb0c.js";import{__tla as Da}from"./useMessage-7a5ab7ef.js";import{__tla as Na}from"./el-drawer-291cb6f0.js";let A,Sa=Promise.all([(()=>{try{return la}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ha}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return ba}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return xa}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return Ta}catch{}})(),(()=>{try{return Da}catch{}})(),(()=>{try{return Na}catch{}})()]).then(async()=>{A=O({name:"BpmProcessDefinition",__name:"index",setup(Ua){const{push:V}=G(),{query:E}=I(),g=_(!0),x=_(0),P=_([]),u=Y({pageNo:1,pageSize:10,key:E.key}),T=async()=>{g.value=!0;try{const i=await wa(u);P.value=i.list,x.value=i.total}finally{g.value=!1}},c=_(!1),k=_({rule:[],option:{}}),D=async i=>{i.formType==10?(va(k,i.formConf,i.formFields),c.value=!0):await V({path:i.formCustomCreatePath})},d=_(!1),p=_(null),N=_({prefix:"flowable"});return $(()=>{T()}),(i,r)=>{const o=X,f=Z,z=ua,y=aa,B=ta,M=_a,R=na,j=H("form-create"),S=ra,F=J("hasPermi"),L=ea;return n(),K(W,null,[l(R,null,{default:t(()=>[U((n(),s(B,{data:e(P)},{default:t(()=>[l(o,{label:"\u5B9A\u4E49\u7F16\u53F7",align:"center",prop:"id",width:"400"}),l(o,{label:"\u6D41\u7A0B\u540D\u79F0",align:"center",prop:"name",width:"200"},{default:t(a=>[l(f,{type:"primary",link:"",onClick:v=>(async h=>{p.value=await ga(h.id),d.value=!0})(a.row)},{default:t(()=>[C("span",null,w(a.row.name),1)]),_:2},1032,["onClick"])]),_:1}),l(o,{label:"\u5B9A\u4E49\u5206\u7C7B",align:"center",prop:"category",width:"100"},{default:t(a=>[l(z,{type:e(ma).BPM_MODEL_CATEGORY,value:a.row.category},null,8,["type","value"])]),_:1}),l(o,{label:"\u8868\u5355\u4FE1\u606F",align:"center",prop:"formType",width:"200"},{default:t(a=>[a.row.formType===10?(n(),s(f,{key:0,type:"primary",link:"",onClick:v=>D(a.row)},{default:t(()=>[C("span",null,w(a.row.formName),1)]),_:2},1032,["onClick"])):(n(),s(f,{key:1,type:"primary",link:"",onClick:v=>D(a.row)},{default:t(()=>[C("span",null,w(a.row.formCustomCreatePath),1)]),_:2},1032,["onClick"]))]),_:1}),l(o,{label:"\u6D41\u7A0B\u7248\u672C",align:"center",prop:"processDefinition.version",width:"80"},{default:t(a=>[a.row?(n(),s(y,{key:0},{default:t(()=>[m("v"+w(a.row.version),1)]),_:2},1024)):(n(),s(y,{key:1,type:"warning"},{default:t(()=>[m("\u672A\u90E8\u7F72")]),_:1}))]),_:1}),l(o,{label:"\u72B6\u6001",align:"center",prop:"version",width:"80"},{default:t(a=>[a.row.suspensionState===1?(n(),s(y,{key:0,type:"success"},{default:t(()=>[m("\u6FC0\u6D3B")]),_:1})):q("",!0),a.row.suspensionState===2?(n(),s(y,{key:1,type:"warning"},{default:t(()=>[m("\u6302\u8D77")]),_:1})):q("",!0)]),_:1}),l(o,{label:"\u90E8\u7F72\u65F6\u95F4",align:"center",prop:"deploymentTime",width:"180",formatter:e(da)},null,8,["formatter"]),l(o,{label:"\u5B9A\u4E49\u63CF\u8FF0",align:"center",prop:"description",width:"300","show-overflow-tooltip":""}),l(o,{label:"\u64CD\u4F5C",align:"center",width:"150",fixed:"right"},{default:t(a=>[U((n(),s(f,{link:"",type:"primary",onClick:v=>{return h=a.row,void V({name:"BpmTaskAssignRuleList",query:{modelId:h.id}});var h}},{default:t(()=>[m(" \u5206\u914D\u89C4\u5219 ")]),_:2},1032,["onClick"])),[[F,["bpm:task-assign-rule:query"]]])]),_:1})]),_:1},8,["data"])),[[L,e(g)]]),l(M,{total:e(x),page:e(u).pageNo,"onUpdate:page":r[0]||(r[0]=a=>e(u).pageNo=a),limit:e(u).pageSize,"onUpdate:limit":r[1]||(r[1]=a=>e(u).pageSize=a),onPagination:T},null,8,["total","page","limit"])]),_:1}),l(S,{title:"\u8868\u5355\u8BE6\u60C5",modelValue:e(c),"onUpdate:modelValue":r[2]||(r[2]=a=>b(c)?c.value=a:null),width:"800"},{default:t(()=>[l(j,{rule:e(k).rule,option:e(k).option},null,8,["rule","option"])]),_:1},8,["modelValue"]),l(S,{title:"\u6D41\u7A0B\u56FE",modelValue:e(d),"onUpdate:modelValue":r[4]||(r[4]=a=>b(d)?d.value=a:null),width:"800"},{default:t(()=>[l(e(ya),Q({key:"designer",modelValue:e(p),"onUpdate:modelValue":r[3]||(r[3]=a=>b(p)?p.value=a:null),value:e(p)},e(N),{prefix:e(N).prefix}),null,16,["modelValue","value","prefix"])]),_:1},8,["modelValue"])],64)}}})});export{Sa as __tla,A as default};
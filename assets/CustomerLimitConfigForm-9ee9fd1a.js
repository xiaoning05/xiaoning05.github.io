import{aq as f,d as P,i as z,r as n,e as J,o as h,v as T,w as u,f as i,a as t,h as L,x as X,a5 as Z,l as B,at as H,A as W,c0 as $,a0 as ee,G as ae,D as le,J as te,_ as se,__tla as de}from"./index-f0743f71.js";import{_ as oe,__tla as re}from"./Dialog-8f786edd.js";import{E as ue,__tla as ie}from"./el-tree-select-d7a8a522.js";import{g as ne,__tla as ce}from"./index-cb25e840.js";import{d as V,h as me}from"./tree-02f455f9.js";import{a as pe,__tla as _e}from"./index-5f468446.js";import{u as fe,__tla as ve}from"./useMessage-75a00a06.js";let g,c,O,S,k,ye=Promise.all([(()=>{try{return de}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ve}catch{}})()]).then(async()=>{c=(d=>(d[d.CUSTOMER_QUANTITY_LIMIT=1]="CUSTOMER_QUANTITY_LIMIT",d[d.CUSTOMER_LOCK_LIMIT=2]="CUSTOMER_LOCK_LIMIT",d))(c||{}),k=async d=>await f.get({url:"/crm/customer-limit-config/page",params:d}),S=async d=>await f.delete({url:"/crm/customer-limit-config/delete?id="+d}),g=se(P({__name:"CustomerLimitConfigForm",emits:["success"],setup(d,{expose:x,emit:R}){const{t:C}=z(),b=fe(),m=n(!1),U=n(""),p=n(!1),w=n(""),s=n({id:void 0,type:c.CUSTOMER_LOCK_LIMIT,userIds:void 0,deptIds:void 0,maxCount:void 0,dealCountEnabled:!1}),A=J({type:[{required:!0,message:"\u89C4\u5219\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],maxCount:[{required:!0,message:"\u6570\u91CF\u4E0A\u9650\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),v=n(),y=n(),I=n();x({open:async(a,e,l)=>{if(m.value=!0,U.value=C("action."+a),w.value=a,K(),l){p.value=!0;try{s.value=await(async r=>await f.get({url:"/crm/customer-limit-config/get?id="+r}))(l)}finally{p.value=!1}}else s.value.type=e;await Q(),await q()}});const N=R,Y=async()=>{if(v&&await v.value.validate()){p.value=!0;try{const a=s.value;w.value==="create"?(await(async e=>await f.post({url:"/crm/customer-limit-config/create",data:e}))(a),b.success(C("common.createSuccess"))):(await(async e=>await f.put({url:"/crm/customer-limit-config/update",data:e}))(a),b.success(C("common.updateSuccess"))),m.value=!1,N("success")}finally{p.value=!1}}},K=()=>{var a;s.value={id:void 0,type:c.CUSTOMER_LOCK_LIMIT,userIds:void 0,deptIds:void 0,maxCount:void 0,dealCountEnabled:!1},(a=v.value)==null||a.resetFields()},Q=async()=>{const a=await ne();y.value=[],y.value.push(...me(a))},q=async()=>{const a=await pe();I.value=[],I.value=H(t(y));const e={};a.forEach(l=>{l.dept&&(e[l.deptId]||(e[l.deptId]=[]),e[l.deptId].push(l))}),M(I.value,e)},M=(a,e)=>{for(let l=0;l<a.length;l++){if(a[l].isUser)continue;const r=e[a[l].id];r&&(a[l].children||(a[l].children=[]),a[l].children.push(...r.map(_=>({id:_.id,name:_.username+"-"+_.nickname,isUser:!0,disabled:_.status===1})))),a[l].children&&a[l].children.length!==0&&M(a[l].children,e),a[l].disabled=!0,a[l].id="null"}};return(a,e)=>{const l=ue,r=W,_=$,F=ee,j=ae,E=le,D=oe,G=te;return h(),T(D,{title:t(U),modelValue:t(m),"onUpdate:modelValue":e[5]||(e[5]=o=>B(m)?m.value=o:null)},{footer:u(()=>[i(E,{onClick:Y,type:"primary",disabled:t(p)},{default:u(()=>[L("\u786E \u5B9A")]),_:1},8,["disabled"]),i(E,{onClick:e[4]||(e[4]=o=>m.value=!1)},{default:u(()=>[L("\u53D6 \u6D88")]),_:1})]),default:u(()=>[X((h(),T(j,{ref_key:"formRef",ref:v,model:t(s),rules:t(A),"label-width":"200px"},{default:u(()=>[i(r,{label:"\u89C4\u5219\u9002\u7528\u4EBA\u7FA4",prop:"userIds"},{default:u(()=>[i(l,{modelValue:t(s).userIds,"onUpdate:modelValue":e[0]||(e[0]=o=>t(s).userIds=o),data:t(I),props:t(V),multiple:"",filterable:"","check-on-click-node":"","node-key":"id",placeholder:"\u8BF7\u9009\u62E9\u89C4\u5219\u9002\u7528\u4EBA\u7FA4"},null,8,["modelValue","data","props"])]),_:1}),i(r,{label:"\u89C4\u5219\u9002\u7528\u90E8\u95E8",prop:"deptIds"},{default:u(()=>[i(l,{modelValue:t(s).deptIds,"onUpdate:modelValue":e[1]||(e[1]=o=>t(s).deptIds=o),data:t(y),props:t(V),multiple:"",filterable:"","check-strictly":"","node-key":"id",placeholder:"\u8BF7\u9009\u62E9\u89C4\u5219\u9002\u7528\u90E8\u95E8"},null,8,["modelValue","data","props"])]),_:1}),i(r,{label:t(s).type===t(c).CUSTOMER_QUANTITY_LIMIT?"\u62E5\u6709\u5BA2\u6237\u6570\u4E0A\u9650":"\u9501\u5B9A\u5BA2\u6237\u6570\u4E0A\u9650",prop:"maxCount"},{default:u(()=>[i(_,{modelValue:t(s).maxCount,"onUpdate:modelValue":e[2]||(e[2]=o=>t(s).maxCount=o),placeholder:"\u8BF7\u8F93\u5165\u6570\u91CF\u4E0A\u9650"},null,8,["modelValue"])]),_:1},8,["label"]),t(s).type===t(c).CUSTOMER_QUANTITY_LIMIT?(h(),T(r,{key:0,label:"\u6210\u4EA4\u5BA2\u6237\u662F\u5426\u5360\u7528\u62E5\u6709\u5BA2\u6237\u6570",prop:"dealCountEnabled"},{default:u(()=>[i(F,{modelValue:t(s).dealCountEnabled,"onUpdate:modelValue":e[3]||(e[3]=o=>t(s).dealCountEnabled=o)},null,8,["modelValue"])]),_:1})):Z("",!0)]),_:1},8,["model","rules"])),[[G,t(p)]])]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/customer/limitConfig/CustomerLimitConfigForm.vue"]]),O=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}))});export{g as C,c as L,ye as __tla,O as a,S as d,k as g};

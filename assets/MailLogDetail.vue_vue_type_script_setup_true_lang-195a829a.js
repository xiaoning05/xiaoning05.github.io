import{_ as g,__tla as Y}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{_ as M,__tla as w}from"./Descriptions-4ea72c24.js";import{an as c,n as v,d as C,r as t,D as H,o as P,q as E,e as p,b as F,a as s,w as I,f as x,j as A,__tla as L}from"./index-34f06ebd.js";import{d as u,__tla as U}from"./formatTime-ed0a77fd.js";import{b as V,__tla as k}from"./index-aa429c76.js";import{D as b,__tla as N}from"./dict-e142e39a.js";import{u as j,__tla as q}from"./useCrudSchemas-8bd8b360.js";let f,i,h,R=Promise.all([(()=>{try{return Y}catch{}})(),(()=>{try{return w}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return U}catch{}})(),(()=>{try{return k}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return q}catch{}})()]).then(async()=>{let r,m;h=async o=>await c.get({url:"/system/mail-log/page",params:o}),r=await V(),m=v([{label:"\u7F16\u53F7",field:"id"},{label:"\u53D1\u9001\u65F6\u95F4",field:"sendTime",formatter:u,search:{show:!0,component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD HH:mm:ss",type:"daterange",defaultTime:[new Date("1 00:00:00"),new Date("1 23:59:59")]}},detail:{dateFormat:"YYYY-MM-DD HH:mm:ss"}},{label:"\u63A5\u6536\u90AE\u7BB1",field:"toMail"},{label:"\u7528\u6237\u7F16\u53F7",field:"userId",isSearch:!0,isTable:!1},{label:"\u7528\u6237\u7C7B\u578B",field:"userType",dictType:b.USER_TYPE,dictClass:"number",isSearch:!0,isTable:!1},{label:"\u90AE\u4EF6\u6807\u9898",field:"templateTitle"},{label:"\u90AE\u4EF6\u5185\u5BB9",field:"templateContent",isTable:!1},{label:"\u90AE\u7BB1\u53C2\u6570",field:"templateParams",isTable:!1},{label:"\u53D1\u9001\u72B6\u6001",field:"sendStatus",dictType:b.SYSTEM_MAIL_SEND_STATUS,dictClass:"string",isSearch:!0},{label:"\u90AE\u7BB1\u8D26\u53F7",field:"accountId",isTable:!1,search:{show:!0,component:"Select",api:()=>r,componentProps:{optionsAlias:{labelField:"mail",valueField:"id"}}}},{label:"\u53D1\u9001\u90AE\u7BB1\u5730\u5740",field:"fromMail",table:{label:"\u90AE\u7BB1\u8D26\u53F7"}},{label:"\u6A21\u677F\u7F16\u53F7",field:"templateId",isSearch:!0},{label:"\u6A21\u677F\u7F16\u7801",field:"templateCode",isTable:!1},{label:"\u6A21\u7248\u53D1\u9001\u4EBA\u540D\u79F0",field:"templateNickname",isTable:!1},{label:"\u53D1\u9001\u8FD4\u56DE\u7684\u6D88\u606F\u7F16\u53F7",field:"sendMessageId",isTable:!1},{label:"\u53D1\u9001\u5F02\u5E38",field:"sendException",isTable:!1},{label:"\u521B\u5EFA\u65F6\u95F4",field:"createTime",isTable:!1,formatter:u,detail:{dateFormat:"YYYY-MM-DD HH:mm:ss"}},{label:"\u64CD\u4F5C",field:"action",isDetail:!1}]),{allSchemas:i}=j(m),f=C({name:"SystemMailLogDetail",__name:"MailLogDetail",setup(o,{expose:T}){const a=t(!1),d=t(!1),n=t();return T({open:async _=>{a.value=!0,d.value=!0;try{n.value=await(async e=>await c.get({url:"/system/mail-log/get?id="+e}))(_)}finally{d.value=!1}}}),(_,e)=>{const y=M,D=g,S=H("dompurify-html");return P(),E(D,{modelValue:s(a),"onUpdate:modelValue":e[0]||(e[0]=l=>A(a)?a.value=l:null),"max-height":500,scroll:!0,title:"\u8BE6\u60C5"},{default:p(()=>[F(y,{data:s(n),schema:s(i).detailSchema},{templateContent:p(({row:l})=>[I(x("div",null,null,512),[[S,l.templateContent]])]),_:1},8,["data","schema"])]),_:1},8,["modelValue"])}}})});export{f as _,R as __tla,i as a,h as g};

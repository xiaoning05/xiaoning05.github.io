import{d as i,__tla as o}from"./formatTime-e6df2ea5.js";import{i as m,e as r,__tla as _}from"./index-f0743f71.js";import{r as a,__tla as c}from"./formRules-5c05c0bb.js";import{D as n,__tla as d}from"./dict-4a9940b3.js";import{u as f,__tla as p}from"./useCrudSchemas-7a260292.js";let t,s,u=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return _}catch{}})(),(()=>{try{return c}catch{}})(),(()=>{try{return d}catch{}})(),(()=>{try{return p}catch{}})()]).then(async()=>{let e,l;({t:e}=m()),s=r({mail:[{required:!0,message:e("profile.rules.mail"),trigger:"blur"},{type:"email",message:e("profile.rules.truemail"),trigger:["blur","change"]}],username:[a],password:[a],host:[a],port:[a],sslEnable:[a]}),l=r([{label:"\u90AE\u7BB1",field:"mail",isSearch:!0},{label:"\u7528\u6237\u540D",field:"username",isSearch:!0},{label:"\u5BC6\u7801",field:"password",isTable:!1},{label:"SMTP \u670D\u52A1\u5668\u57DF\u540D",field:"host"},{label:"SMTP \u670D\u52A1\u5668\u7AEF\u53E3",field:"port",form:{component:"InputNumber",value:465}},{label:"\u662F\u5426\u5F00\u542F SSL",field:"sslEnable",dictType:n.INFRA_BOOLEAN_STRING,dictClass:"boolean",form:{component:"Radio"}},{label:"\u521B\u5EFA\u65F6\u95F4",field:"createTime",isForm:!1,formatter:i,detail:{dateFormat:"YYYY-MM-DD HH:mm:ss"}},{label:"\u64CD\u4F5C",field:"action",isForm:!1,isDetail:!1}]),{allSchemas:t}=f(l)});export{u as __tla,t as a,s as r};
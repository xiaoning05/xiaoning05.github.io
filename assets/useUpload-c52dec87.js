import{cm as r,cn as e,cw as l,__tla as s}from"./index-aaa5adb3.js";import{__tla as _}from"./index-fb6b5360.js";let t,n=Promise.all([(()=>{try{return s}catch{}})(),(()=>{try{return _}catch{}})()]).then(async()=>{t=()=>({uploadUrl:"http://192.168.35.229:48080/admin-api/infra/file/upload",httpRequest:async a=>(a.headers.Authorization="Bearer "+r(),a.headers["tenant-id"]=e(),l(a))})});export{n as __tla,t as u};
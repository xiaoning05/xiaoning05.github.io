import{an as t,__tla as o}from"./index-34f06ebd.js";let c,e,s,l,u,n,r,p,m=Promise.all([(()=>{try{return o}catch{}})()]).then(async()=>{s=async a=>await t.post({url:"/mp/account/create",data:a}),p=async a=>t.put({url:"/mp/account/update",data:a}),l=async a=>t.delete({url:"/mp/account/delete?id="+a,method:"delete"}),r=async a=>t.get({url:"/mp/account/get?id="+a}),c=async a=>t.get({url:"/mp/account/page",params:a}),n=async()=>t.get({url:"/mp/account/list-all-simple"}),e=async a=>t.put({url:"/mp/account/generate-qr-code?id="+a}),u=async a=>t.put({url:"/mp/account/clear-quota?id="+a})});export{m as __tla,c as a,e as b,s as c,l as d,u as e,n as f,r as g,p as u};

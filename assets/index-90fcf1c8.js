import{an as a,__tla as p}from"./index-34f06ebd.js";let s,e,l,d,r,i,y=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{r=async()=>await a.get({url:"/system/dept/simple-list"}),e=async t=>await a.get({url:"/system/dept/list",params:t}),s=async t=>await a.get({url:"/system/dept/get?id="+t}),l=async t=>await a.post({url:"/system/dept/create",data:t}),i=async t=>await a.put({url:"/system/dept/update",data:t}),d=async t=>await a.delete({url:"/system/dept/delete?id="+t})});export{y as __tla,s as a,e as b,l as c,d,r as g,i as u};

import{ap as a,__tla as i}from"./index-d2088aec.js";let s,e,l,d,p,r,y=Promise.all([(()=>{try{return i}catch{}})()]).then(async()=>{p=async()=>await a.get({url:"/system/dept/simple-list"}),e=async t=>await a.get({url:"/system/dept/list",params:t}),s=async t=>await a.get({url:"/system/dept/get?id="+t}),l=async t=>await a.post({url:"/system/dept/create",data:t}),r=async t=>await a.put({url:"/system/dept/update",data:t}),d=async t=>await a.delete({url:"/system/dept/delete?id="+t})});export{y as __tla,s as a,e as b,l as c,d,p as g,r as u};

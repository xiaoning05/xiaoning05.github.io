import{ao as a,__tla as i}from"./index-b079f499.js";let t,r,l,s,d,p,y=Promise.all([(()=>{try{return i}catch{}})()]).then(async()=>{r=async e=>await a.get({url:"/trade/delivery/express-template/page",params:e}),t=async e=>await a.get({url:"/trade/delivery/express-template/get?id="+e}),d=async()=>await a.get({url:"/trade/delivery/express-template/list-all-simple"}),l=async e=>await a.post({url:"/trade/delivery/express-template/create",data:e}),p=async e=>await a.put({url:"/trade/delivery/express-template/update",data:e}),s=async e=>await a.delete({url:"/trade/delivery/express-template/delete?id="+e})});export{y as __tla,t as a,r as b,l as c,s as d,d as g,p as u};

import{ao as e,__tla as m}from"./index-b079f499.js";let t,r,s,u,l,p=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{s=async a=>await e.get({url:"/member/user/page",params:a}),u=async a=>await e.get({url:"/member/user/get?id="+a}),l=async a=>await e.put({url:"/member/user/update",data:a}),t=async a=>await e.put({url:"/member/user/update-level",data:a}),r=async a=>await e.put({url:"/member/user/update-point",data:a})});export{p as __tla,t as a,r as b,s as c,u as g,l as u};

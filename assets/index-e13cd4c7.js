import{aq as e,__tla as p}from"./index-f0743f71.js";let t,r,s,l,m,u,g=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{r=async a=>await e.get({url:"/member/group/page",params:a}),t=async a=>await e.get({url:"/member/group/get?id="+a}),s=async a=>await e.post({url:"/member/group/create",data:a}),m=async()=>await e.get({url:"/member/group/list-all-simple"}),u=async a=>await e.put({url:"/member/group/update",data:a}),l=async a=>await e.delete({url:"/member/group/delete?id="+a})});export{g as __tla,t as a,r as b,s as c,l as d,m as g,u};

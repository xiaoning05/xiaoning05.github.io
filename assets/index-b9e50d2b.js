import{ap as e,__tla as u}from"./index-d2088aec.js";let t,r,s,l,m,p,g=Promise.all([(()=>{try{return u}catch{}})()]).then(async()=>{r=async a=>await e.get({url:"/member/group/page",params:a}),t=async a=>await e.get({url:"/member/group/get?id="+a}),s=async a=>await e.post({url:"/member/group/create",data:a}),m=async()=>await e.get({url:"/member/group/list-all-simple"}),p=async a=>await e.put({url:"/member/group/update",data:a}),l=async a=>await e.delete({url:"/member/group/delete?id="+a})});export{g as __tla,t as a,r as b,s as c,l as d,m as g,p as u};

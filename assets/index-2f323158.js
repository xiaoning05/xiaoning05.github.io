import{ap as e,__tla as d}from"./index-d5b00dc9.js";let t,r,s,i,l,p,c=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{r=async a=>await e.get({url:"/trade/delivery/pick-up-store/page",params:a}),l=async a=>await e.get({url:"/trade/delivery/pick-up-store/get?id="+a}),t=async()=>await e.get({url:"/trade/delivery/pick-up-store/list-all-simple"}),s=async a=>await e.post({url:"/trade/delivery/pick-up-store/create",data:a}),p=async a=>await e.put({url:"/trade/delivery/pick-up-store/update",data:a}),i=async a=>await e.delete({url:"/trade/delivery/pick-up-store/delete?id="+a})});export{c as __tla,t as a,r as b,s as c,i as d,l as g,p as u};

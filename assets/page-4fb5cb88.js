import{ao as t,__tla as y}from"./index-b079f499.js";let e,o,p,r,i,s,d,n=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{r=async a=>await t.get({url:"/promotion/diy-page/page",params:a}),e=async a=>await t.get({url:"/promotion/diy-page/get?id="+a}),p=async a=>await t.post({url:"/promotion/diy-page/create",data:a}),o=async a=>await t.put({url:"/promotion/diy-page/update",data:a}),i=async a=>await t.delete({url:"/promotion/diy-page/delete?id="+a}),s=async a=>await t.get({url:"/promotion/diy-page/get-property?id="+a}),d=async a=>await t.put({url:"/promotion/diy-page/update-property",data:a})});export{n as __tla,e as a,o as b,p as c,r as d,i as e,s as g,d as u};

import{ao as t,__tla as m}from"./index-aaa5adb3.js";let e,o,i,p,r,l,s,d,y=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{p=async a=>await t.get({url:"/promotion/diy-template/page",params:a}),e=async a=>await t.get({url:"/promotion/diy-template/get?id="+a}),i=async a=>await t.post({url:"/promotion/diy-template/create",data:a}),o=async a=>await t.put({url:"/promotion/diy-template/update",data:a}),r=async a=>await t.delete({url:"/promotion/diy-template/delete?id="+a}),l=async a=>await t.put({url:"/promotion/diy-template/use?id="+a}),s=async a=>await t.get({url:"/promotion/diy-template/get-property?id="+a}),d=async a=>await t.put({url:"/promotion/diy-template/update-property",data:a})});export{y as __tla,e as a,o as b,i as c,p as d,r as e,l as f,s as g,d as u};

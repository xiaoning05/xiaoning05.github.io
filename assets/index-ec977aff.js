import{an as t,__tla as i}from"./index-34f06ebd.js";let e,r,s,l,m,p,c=Promise.all([(()=>{try{return i}catch{}})()]).then(async()=>{s=async a=>await t.post({url:"/bpm/form/create",data:a}),p=async a=>await t.put({url:"/bpm/form/update",data:a}),l=async a=>await t.delete({url:"/bpm/form/delete?id="+a}),m=async a=>await t.get({url:"/bpm/form/get?id="+a}),e=async a=>await t.get({url:"/bpm/form/page",params:a}),r=async()=>await t.get({url:"/bpm/form/list-all-simple"})});export{c as __tla,e as a,r as b,s as c,l as d,m as g,p as u};

import{an as s,__tla as o}from"./index-34f06ebd.js";let t,e,c,n,r,p,m=Promise.all([(()=>{try{return o}catch{}})()]).then(async()=>{n=async a=>await s.get({url:"/bpm/process-instance/my-page",params:a}),c=async a=>await s.post({url:"/bpm/process-instance/create",data:a}),t=async(a,i)=>{const l={id:a,reason:i};return await s.delete({url:"/bpm/process-instance/cancel",data:l})},p=async a=>await s.get({url:"/bpm/process-instance/get?id="+a}),e=async a=>await s.post({url:"/bpm/process-instance/cc/create",data:a}),r=async a=>await s.get({url:"/bpm/process-instance/cc/my-page",params:a})});export{m as __tla,t as a,e as b,c,n as d,r as e,p as g};
import{ao as t,__tla as r}from"./index-b079f499.js";let s,e,i,n=Promise.all([(()=>{try{return r}catch{}})()]).then(async()=>{s=async a=>await t.get({url:"/bpm/process-definition/get-bpmn-xml?id="+a}),i=async a=>await t.get({url:"/bpm/process-definition/page",params:a}),e=async a=>await t.get({url:"/bpm/process-definition/list",params:a})});export{n as __tla,s as a,e as b,i as g};

import{ap as t,__tla as b}from"./index-d2088aec.js";let s,e,r,p,l,n,i,c,u,d,m,y,k=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{u=async a=>await t.get({url:"/bpm/task/todo-page",params:a}),c=async a=>await t.get({url:"/bpm/task/done-page",params:a}),s=async a=>await t.put({url:"/bpm/task/approve",data:a}),d=async a=>await t.put({url:"/bpm/task/reject",data:a}),y=async a=>await t.put({url:"/bpm/task/update-assignee",data:a}),i=async a=>await t.get({url:"/bpm/task/list-by-process-instance-id?processInstanceId="+a}),e=async a=>await t.get({url:"/bpm/task/return-list",params:a}),r=async a=>await t.put({url:"/bpm/task/return",data:a}),p=async a=>await t.put({url:"/bpm/task/delegate",data:a}),m=async a=>await t.put({url:"/bpm/task/create-sign",data:a}),l=async a=>await t.get({url:"/bpm/task/children-list?taskId="+a}),n=async a=>await t.delete({url:"/bpm/task/delete-sign",data:a})});export{k as __tla,s as a,e as b,r as c,p as d,l as e,n as f,i as g,c as h,u as i,d as r,m as t,y as u};

import{ap as u,d,ag as t,r as i,p as y,x as f,o as g,v as x,w as o,I,f as b,aj as v,a as s,g as w,__tla as D}from"./index-d5b00dc9.js";import{j as h,__tla as k}from"./bpmn-embedded-fbd83e5a.js";import{E as B,__tla as P}from"./index-bd0d9e6c.js";let p,j=Promise.all([(()=>{try{return D}catch{}})(),(()=>{try{return k}catch{}})(),(()=>{try{return P}catch{}})()]).then(async()=>{let e;e=w("span",{class:"el-icon-picture-outline"},"\u6D41\u7A0B\u56FE",-1),p=d({name:"BpmProcessInstanceBpmnViewer",__name:"ProcessInstanceBpmnViewer",props:{loading:t.bool,id:t.string,processInstance:t.any,tasks:t.array,bpmnXml:t.string},setup(a){const r=a,n=i({prefix:"flowable"}),c=i([]);return y(async()=>{r.id&&(c.value=await(async l=>await u.get({url:"/bpm/activity/list",params:l}))({processInstanceId:r.id}))}),(l,V)=>{const _=B,m=I;return f((g(),x(_,{class:"box-card"},{header:o(()=>[e]),default:o(()=>[b(s(h),v({key:"designer",activityData:s(c),prefix:s(n).prefix,processInstanceData:a.processInstance,taskData:a.tasks,value:a.bpmnXml},s(n)),null,16,["activityData","prefix","processInstanceData","taskData","value"])]),_:1})),[[m,a.loading]])}}})});export{p as _,j as __tla};

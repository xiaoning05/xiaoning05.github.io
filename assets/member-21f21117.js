import{an as t,__tla as n}from"./index-34f06ebd.js";import{f as a,__tla as o}from"./formatTime-ed0a77fd.js";let e,r,i,m,l,c,u,g=Promise.all([(()=>{try{return n}catch{}})(),(()=>{try{return o}catch{}})()]).then(async()=>{m=()=>t.get({url:"/statistics/member/summary"}),i=s=>t.get({url:"/statistics/member/analyse",params:{times:[a(s.times[0]),a(s.times[1])]}}),l=()=>t.get({url:"/statistics/member/area-statistics-list"}),c=()=>t.get({url:"/statistics/member/sex-statistics-list"}),r=()=>t.get({url:"/statistics/member/terminal-statistics-list"}),e=()=>t.get({url:"/statistics/member/user-count-comparison"}),u=(s,_)=>t.get({url:"/statistics/member/register-count-list",params:{times:[a(s),a(_)]}})});export{g as __tla,e as a,r as b,i as c,m as d,l as e,c as f,u as g};

import{d as n,u as _,a as o,o as i,c as u,__tla as y}from"./index-d2088aec.js";let s,d=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{s=n({name:"Redirect",__name:"Redirect",setup(m){const{currentRoute:p,replace:c}=_(),{params:e,query:a}=o(p),{path:r,_redirect_type:l="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return c(l==="name"?{name:t,query:a,params:e}:{path:t.startsWith("/")?t:"/"+t,query:a}),(h,R)=>(i(),u("div"))}})});export{d as __tla,s as default};

import{d as W,ck as X,X as D,r as U,n as E,o as p,c as M,b as e,e as u,a,q as F,f as n,h as j,j as P,_ as G,aa as H,A as J,bg as L,a8 as N,cr as O,K as Q,__tla as R}from"./index-34f06ebd.js";import{W as Y,__tla as Z}from"./main-3214e281.js";import{u as $,U as ee,__tla as ae}from"./useUpload-a4a1e914.js";import{u as le,__tla as te}from"./useMessage-7a5ab7ef.js";let k,ue=Promise.all([(()=>{try{return R}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return ae}catch{}})(),(()=>{try{return te}catch{}})()]).then(async()=>{let _,y,f,h,V;_=["src"],y={class:"thumb-but"},f=n("div",{style:{margin:"20px 0"}},null,-1),h=n("div",{style:{margin:"20px 0"}},null,-1),V=n("div",{style:{margin:"20px 0"}},null,-1),k=W({__name:"TabMusic",props:{modelValue:{}},emits:["update:modelValue"],setup(x,{emit:I}){const q=le(),A={Authorization:"Bearer "+X()},w=x,z=I,l=D({get:()=>w.modelValue,set:d=>z("update:modelValue",d)}),r=U(!1),g=U([]),m=E({accountId:l.value.accountId,type:"thumb",title:"",introduction:""}),B=d=>$(ee.Image,2)(d),C=d=>{if(d.code!==0)return q.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+d.msg),!1;g.value=[],m.title="",m.introduction="",v(d.data)},v=d=>{r.value=!1,l.value.thumbMediaId=d.mediaId,l.value.thumbMediaUrl=d.url};return(d,t)=>{const K=G,s=H,b=J,S=L,c=N,T=O,o=Q;return p(),M("div",null,[e(s,{align:"middle",justify:"center"},{default:u(()=>[e(c,{span:6},{default:u(()=>[e(s,{align:"middle",justify:"center",class:"thumb-div"},{default:u(()=>[e(c,{span:24},{default:u(()=>[e(s,{align:"middle",justify:"center"},{default:u(()=>[a(l).thumbMediaUrl?(p(),M("img",{key:0,style:{width:"100px"},src:a(l).thumbMediaUrl},null,8,_)):(p(),F(K,{key:1,icon:"ep:plus"}))]),_:1}),e(s,{align:"middle",justify:"center",style:{"margin-top":"2%"}},{default:u(()=>[n("div",y,[e(S,{action:"/admin-api/mp/material/upload-temporary",headers:A,multiple:"",limit:1,"file-list":a(g),data:a(m),"before-upload":B,"on-success":C},{trigger:u(()=>[e(b,{type:"primary",link:""},{default:u(()=>[j("\u672C\u5730\u4E0A\u4F20")]),_:1})]),default:u(()=>[e(b,{type:"primary",link:"",onClick:t[0]||(t[0]=i=>r.value=!0),style:{"margin-left":"5px"}},{default:u(()=>[j("\u7D20\u6750\u5E93\u9009\u62E9 ")]),_:1})]),_:1},8,["file-list","data"])])]),_:1})]),_:1})]),_:1}),e(T,{title:"\u9009\u62E9\u56FE\u7247",modelValue:a(r),"onUpdate:modelValue":t[1]||(t[1]=i=>P(r)?r.value=i:null),width:"80%","append-to-body":"","destroy-on-close":""},{default:u(()=>[e(a(Y),{type:"image","account-id":a(l).accountId,onSelectMaterial:v},null,8,["account-id"])]),_:1},8,["modelValue"])]),_:1}),e(c,{span:18},{default:u(()=>[e(o,{modelValue:a(l).title,"onUpdate:modelValue":t[2]||(t[2]=i=>a(l).title=i),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"]),f,e(o,{modelValue:a(l).description,"onUpdate:modelValue":t[3]||(t[3]=i=>a(l).description=i),placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0"},null,8,["modelValue"])]),_:1})]),_:1}),h,e(o,{modelValue:a(l).musicUrl,"onUpdate:modelValue":t[4]||(t[4]=i=>a(l).musicUrl=i),placeholder:"\u8BF7\u8F93\u5165\u97F3\u4E50\u94FE\u63A5"},null,8,["modelValue"]),V,e(o,{modelValue:a(l).hqMusicUrl,"onUpdate:modelValue":t[5]||(t[5]=i=>a(l).hqMusicUrl=i),placeholder:"\u8BF7\u8F93\u5165\u9AD8\u8D28\u91CF\u97F3\u4E50\u94FE\u63A5"},null,8,["modelValue"])])}}})});export{k as _,ue as __tla};
import{d as W,co as D,a1 as E,r as U,e as F,o as p,c as M,f as e,w as u,a,v as G,g as n,h as j,l as H,_ as J,k as K,C as L,bl as N,j as O,cv as Q,P as R,__tla as X}from"./index-d2088aec.js";import{W as Y,__tla as Z}from"./main-599f06e8.js";import{u as $,U as ee,__tla as ae}from"./useUpload-30becf44.js";import{u as le,__tla as te}from"./useMessage-c5990e2c.js";let k,ue=Promise.all([(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return ae}catch{}})(),(()=>{try{return te}catch{}})()]).then(async()=>{let _,y,f,h,V;_=["src"],y={class:"thumb-but"},f=n("div",{style:{margin:"20px 0"}},null,-1),h=n("div",{style:{margin:"20px 0"}},null,-1),V=n("div",{style:{margin:"20px 0"}},null,-1),k=W({__name:"TabMusic",props:{modelValue:{}},emits:["update:modelValue"],setup(x,{emit:I}){const w=le(),C={Authorization:"Bearer "+D()},q=x,P=I,l=E({get:()=>q.modelValue,set:d=>P("update:modelValue",d)}),r=U(!1),g=U([]),m=F({accountId:l.value.accountId,type:"thumb",title:"",introduction:""}),z=d=>$(ee.Image,2)(d),A=d=>{if(d.code!==0)return w.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+d.msg),!1;g.value=[],m.title="",m.introduction="",v(d.data)},v=d=>{r.value=!1,l.value.thumbMediaId=d.mediaId,l.value.thumbMediaUrl=d.url};return(d,t)=>{const B=J,s=K,b=L,S=N,c=O,T=Q,o=R;return p(),M("div",null,[e(s,{align:"middle",justify:"center"},{default:u(()=>[e(c,{span:6},{default:u(()=>[e(s,{align:"middle",justify:"center",class:"thumb-div"},{default:u(()=>[e(c,{span:24},{default:u(()=>[e(s,{align:"middle",justify:"center"},{default:u(()=>[a(l).thumbMediaUrl?(p(),M("img",{key:0,style:{width:"100px"},src:a(l).thumbMediaUrl},null,8,_)):(p(),G(B,{key:1,icon:"ep:plus"}))]),_:1}),e(s,{align:"middle",justify:"center",style:{"margin-top":"2%"}},{default:u(()=>[n("div",y,[e(S,{action:"/admin-api/mp/material/upload-temporary",headers:C,multiple:"",limit:1,"file-list":a(g),data:a(m),"before-upload":z,"on-success":A},{trigger:u(()=>[e(b,{type:"primary",link:""},{default:u(()=>[j("\u672C\u5730\u4E0A\u4F20")]),_:1})]),default:u(()=>[e(b,{type:"primary",link:"",onClick:t[0]||(t[0]=i=>r.value=!0),style:{"margin-left":"5px"}},{default:u(()=>[j("\u7D20\u6750\u5E93\u9009\u62E9 ")]),_:1})]),_:1},8,["file-list","data"])])]),_:1})]),_:1})]),_:1}),e(T,{title:"\u9009\u62E9\u56FE\u7247",modelValue:a(r),"onUpdate:modelValue":t[1]||(t[1]=i=>H(r)?r.value=i:null),width:"80%","append-to-body":"","destroy-on-close":""},{default:u(()=>[e(a(Y),{type:"image","account-id":a(l).accountId,onSelectMaterial:v},null,8,["account-id"])]),_:1},8,["modelValue"])]),_:1}),e(c,{span:18},{default:u(()=>[e(o,{modelValue:a(l).title,"onUpdate:modelValue":t[2]||(t[2]=i=>a(l).title=i),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"]),f,e(o,{modelValue:a(l).description,"onUpdate:modelValue":t[3]||(t[3]=i=>a(l).description=i),placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0"},null,8,["modelValue"])]),_:1})]),_:1}),h,e(o,{modelValue:a(l).musicUrl,"onUpdate:modelValue":t[4]||(t[4]=i=>a(l).musicUrl=i),placeholder:"\u8BF7\u8F93\u5165\u97F3\u4E50\u94FE\u63A5"},null,8,["modelValue"]),V,e(o,{modelValue:a(l).hqMusicUrl,"onUpdate:modelValue":t[5]||(t[5]=i=>a(l).hqMusicUrl=i),placeholder:"\u8BF7\u8F93\u5165\u9AD8\u8D28\u91CF\u97F3\u4E50\u94FE\u63A5"},null,8,["modelValue"])])}}})});export{k as _,ue as __tla};

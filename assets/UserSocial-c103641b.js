import{ao as u,d as N,r as h,D as x,p as D,aR as P,o as d,q as E,e as m,b as l,f as v,t as j,c as w,h as U,F as g,a as A,E as F,i as G,_ as L,__tla as M}from"./index-b079f499.js";import{_ as X,__tla as Y}from"./XTextButton-8553715f.js";import{S as C}from"./constants-99751ef9.js";import{g as Z,__tla as $}from"./profile-05729178.js";import{u as z,__tla as B}from"./useMessage-66b9cf03.js";let k,H=Promise.all([(()=>{try{return M}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return B}catch{}})()]).then(async()=>{let y,_;y=["src"],_={class:"mr-5"},k=L(N({name:"UserSocial",__name:"UserSocial",props:{activeName:{type:String,required:!0}},emits:["update:activeName"],setup(J,{emit:S}){const f=z(),c=h([]),i=h(),n=x(),b=S,q=()=>{const a=(t="type",new URL(decodeURIComponent(location.href)).searchParams.get(t)??"");var t;const e=n.query.code,s=n.query.state;e&&((o,r,p)=>u.post({url:"/system/social-user/bind",data:{type:o,code:r,state:p}}))(a,e,s).then(()=>{f.success("\u7ED1\u5B9A\u6210\u529F"),b("update:activeName","userSocial")})},I=a=>{const t=location.origin+"/user/profile?"+encodeURIComponent(`type=${a.type}`);((e,s)=>u.get({url:"/system/auth/social-auth-redirect?type="+e+"&redirectUri="+s}))(a.type,encodeURIComponent(t)).then(e=>{window.location.href=e})},R=async a=>{var t,e;await(t=a.type,e=a.openid,u.delete({url:"/system/social-user/unbind",data:{type:t,openid:e}}))&&(a.openid=void 0),f.success("\u89E3\u7ED1\u6210\u529F")};return D(async()=>{await(async()=>{var t;c.value=[];const a=await Z();i.value=a;for(const e in C){const s={...C[e]};if(c.value.push(s),(t=i.value)==null?void 0:t.socialUsers){for(const o in i.value.socialUsers)if(s.type===i.value.socialUsers[o].type){s.openid=i.value.socialUsers[o].openid;break}}}})()}),P(()=>n,()=>{q()},{immediate:!0}),(a,t)=>{const e=F,s=X,o=G;return d(),E(o,{data:A(c),"show-header":!1},{default:m(()=>[l(e,{fixed:"left",title:"\u5E8F\u53F7",type:"seq",width:"60"}),l(e,{align:"left",label:"\u793E\u4EA4\u5E73\u53F0",width:"120"},{default:m(({row:r})=>[v("img",{src:r.img,alt:"",class:"h-5 align-middle"},null,8,y),v("p",_,j(r.title),1)]),_:1}),l(e,{align:"center",label:"\u64CD\u4F5C"},{default:m(({row:r})=>[r.openid?(d(),w(g,{key:0},[U(" \u5DF2\u7ED1\u5B9A "),l(s,{class:"mr-5",title:"(\u89E3\u7ED1)",type:"primary",onClick:p=>R(r)},null,8,["onClick"])],64)):(d(),w(g,{key:1},[U(" \u672A\u7ED1\u5B9A "),l(s,{class:"mr-5",title:"(\u7ED1\u5B9A)",type:"primary",onClick:p=>I(r)},null,8,["onClick"])],64))]),_:1})]),_:1},8,["data"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/Profile/components/UserSocial.vue"]])});export{H as __tla,k as default};
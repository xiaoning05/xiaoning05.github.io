import{ap as u,d as N,r as h,J as x,p as P,aS as j,o as d,v as B,w as m,f as i,g as v,t as F,c as w,h as U,F as g,a as G,G as H,H as J,__tla as L}from"./index-d5b00dc9.js";import{_ as $,__tla as z}from"./XTextButton-ae41b7bc.js";import{S as k}from"./constants-99751ef9.js";import{g as A,__tla as D}from"./profile-6fa0ddcb.js";import{u as E,__tla as K}from"./useMessage-2288a5f2.js";let C,M=Promise.all([(()=>{try{return L}catch{}})(),(()=>{try{return z}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return K}catch{}})()]).then(async()=>{let y,_;y=["src"],_={class:"mr-5"},C=N({name:"UserSocial",__name:"UserSocial",props:{activeName:{}},emits:["update:activeName"],setup(O,{emit:b}){const f=E(),c=h([]),l=h(),n=x(),S=b,R=()=>{const e=(t="type",new URL(decodeURIComponent(location.href)).searchParams.get(t)??"");var t;const a=n.query.code,s=n.query.state;a&&((o,r,p)=>u.post({url:"/system/social-user/bind",data:{type:o,code:r,state:p}}))(e,a,s).then(()=>{f.success("\u7ED1\u5B9A\u6210\u529F"),S("update:activeName","userSocial")})},q=e=>{const t=location.origin+"/user/profile?"+encodeURIComponent(`type=${e.type}`);((a,s)=>u.get({url:"/system/auth/social-auth-redirect?type="+a+"&redirectUri="+s}))(e.type,encodeURIComponent(t)).then(a=>{window.location.href=a})},I=async e=>{var t,a;await(t=e.type,a=e.openid,u.delete({url:"/system/social-user/unbind",data:{type:t,openid:a}}))&&(e.openid=void 0),f.success("\u89E3\u7ED1\u6210\u529F")};return P(async()=>{await(async()=>{var t;c.value=[];const e=await A();l.value=e;for(const a in k){const s={...k[a]};if(c.value.push(s),(t=l.value)==null?void 0:t.socialUsers){for(const o in l.value.socialUsers)if(s.type===l.value.socialUsers[o].type){s.openid=l.value.socialUsers[o].openid;break}}}})()}),j(()=>n,()=>{R()},{immediate:!0}),(e,t)=>{const a=H,s=$,o=J;return d(),B(o,{data:G(c),"show-header":!1},{default:m(()=>[i(a,{fixed:"left",title:"\u5E8F\u53F7",type:"seq",width:"60"}),i(a,{align:"left",label:"\u793E\u4EA4\u5E73\u53F0",width:"120"},{default:m(({row:r})=>[v("img",{src:r.img,alt:"",class:"h-5 align-middle"},null,8,y),v("p",_,F(r.title),1)]),_:1}),i(a,{align:"center",label:"\u64CD\u4F5C"},{default:m(({row:r})=>[r.openid?(d(),w(g,{key:0},[U(" \u5DF2\u7ED1\u5B9A "),i(s,{class:"mr-5",title:"(\u89E3\u7ED1)",type:"primary",onClick:p=>I(r)},null,8,["onClick"])],64)):(d(),w(g,{key:1},[U(" \u672A\u7ED1\u5B9A "),i(s,{class:"mr-5",title:"(\u7ED1\u5B9A)",type:"primary",onClick:p=>q(r)},null,8,["onClick"])],64))]),_:1})]),_:1},8,["data"])}}})});export{C as _,M as __tla};

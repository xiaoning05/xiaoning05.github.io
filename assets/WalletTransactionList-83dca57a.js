import{ao as x,d as z,r as p,n as L,p as S,o as m,q as d,e as o,w as U,a,b as e,h as g,t as w,at as f,E as W,i as q,v as E,_ as P,__tla as j}from"./index-aaa5adb3.js";import{_ as A,__tla as C}from"./ContentWrap-04d7f6d1.js";import{_ as D,__tla as G}from"./index-b47c179c.js";import{d as M,__tla as X}from"./formatTime-9c0e8879.js";import{__tla as Y}from"./index-5b7dcbf1.js";import{__tla as Z}from"./index-c602062a.js";let y,k=Promise.all([(()=>{try{return j}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return Z}catch{}})()]).then(async()=>{y=P(z({name:"WalletTransactionList",__name:"WalletTransactionList",props:{walletId:{type:Number,required:!1}},setup(b){const{walletId:h}=b,s=p(!0),_=p(0),l=L({pageNo:1,pageSize:10,walletId:null}),c=p([]),u=async()=>{s.value=!0;try{l.walletId=h;const i=await(async r=>await x.get({url:"/pay/wallet-transaction/page",params:r}))(l);c.value=i.list,_.value=i.total}finally{s.value=!1}};return S(()=>{u()}),(i,r)=>{const n=W,v=q,I=D,N=A,T=E;return m(),d(N,null,{default:o(()=>[U((m(),d(v,{data:a(c),stripe:!0,"show-overflow-tooltip":!0},{default:o(()=>[e(n,{label:"\u7F16\u53F7",align:"center",prop:"id"}),e(n,{label:"\u94B1\u5305\u7F16\u53F7",align:"center",prop:"walletId"}),e(n,{label:"\u5173\u8054\u4E1A\u52A1\u6807\u9898",align:"center",prop:"title"}),e(n,{label:"\u4EA4\u6613\u91D1\u989D",align:"center",prop:"price"},{default:o(({row:t})=>[g(w(a(f)(t.price))+" \u5143",1)]),_:1}),e(n,{label:"\u94B1\u5305\u4F59\u989D",align:"center",prop:"balance"},{default:o(({row:t})=>[g(w(a(f)(t.balance))+" \u5143",1)]),_:1}),e(n,{label:"\u4EA4\u6613\u65F6\u95F4",align:"center",prop:"createTime",formatter:a(M),width:"180px"},null,8,["formatter"])]),_:1},8,["data"])),[[T,a(s)]]),e(I,{total:a(_),page:a(l).pageNo,"onUpdate:page":r[0]||(r[0]=t=>a(l).pageNo=t),limit:a(l).pageSize,"onUpdate:limit":r[1]||(r[1]=t=>a(l).pageSize=t),onPagination:u},null,8,["total","page","limit"])]),_:1})}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/pay/wallet/transaction/WalletTransactionList.vue"]])});export{k as __tla,y as default};

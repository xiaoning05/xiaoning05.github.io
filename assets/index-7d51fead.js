import{d as q,r as _,bZ as L,e as R,L as X,o as x,c as Y,f as r,w as e,a,x as U,v as j,h as v,l as N,F as B,A as H,C as K,D as Q,G as T,cx as W,J as $,_ as aa,__tla as ta}from"./index-f0743f71.js";import{_ as la,__tla as ra}from"./index-cf7b3541.js";import{_ as ea,__tla as _a}from"./ContentWrap-5acc4fb9.js";import{_ as oa,__tla as ca}from"./index-d31b5cfe.js";import sa,{__tla as na}from"./main-c203934d.js";import{g as ia,c as ua,u as ma,d as pa,__tla as fa}from"./main-4bbe201b.js";import{s as da,__tla as ya}from"./index-16e4b3d7.js";import{N as ha,c as va,__tla as ga}from"./NewsForm-a94d60b1.js";import wa,{__tla as Ia}from"./DraftTable-f479bc87.js";import{u as Sa,__tla as ba}from"./useMessage-75a00a06.js";import{__tla as xa}from"./index-8beae3df.js";import{__tla as Ua}from"./index-a48a5540.js";import{__tla as Na}from"./index-db8bc332.js";import{__tla as Ca}from"./main-32ebaa00.js";import{__tla as Va}from"./el-image-015376ce.js";import{__tla as Da}from"./el-image-viewer-d97aa530.js";import{__tla as Pa}from"./main-3f7b5946.js";import{__tla as ka}from"./main-88d35e6d.js";import{__tla as Ea}from"./index-9d5d3911.js";import{__tla as za}from"./formatTime-e6df2ea5.js";import{__tla as Ja}from"./Editor-9944a8eb.js";import{__tla as Aa}from"./CoverSelect-bb211b8e.js";import{__tla as Fa}from"./useUpload-8303eb6e.js";let C,Ga=Promise.all([(()=>{try{return ta}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return Ia}catch{}})(),(()=>{try{return ba}catch{}})(),(()=>{try{return xa}catch{}})(),(()=>{try{return Ua}catch{}})(),(()=>{try{return Na}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return Da}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return Ea}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return Ja}catch{}})(),(()=>{try{return Aa}catch{}})(),(()=>{try{return Fa}catch{}})()]).then(async()=>{C=aa(q({name:"MpDraft",__name:"index",setup(Ma){const s=Sa(),o=_(-1);L("accountId",o);const d=_(!0),g=_([]),w=_(0),n=R({pageNo:1,pageSize:10,accountId:o}),i=_(!1),u=_([]),I=_(""),m=_(!0),y=_(!1),V=l=>{o.value=l,n.pageNo=1,p()},D=async l=>{try{await s.confirm("\u4FEE\u6539\u5185\u5BB9\u53EF\u80FD\u8FD8\u672A\u4FDD\u5B58\uFF0C\u786E\u5B9A\u5173\u95ED\u5417?"),l()}catch{}},p=async()=>{d.value=!0;try{const l=await ia(n);l.list.forEach(t=>{t.content.newsItem.forEach(f=>{f.picUrl=f.thumbUrl})}),g.value=l.list,w.value=l.total}finally{d.value=!1}},P=()=>{m.value=!0,u.value=[va()],i.value=!0},k=l=>{I.value=l.mediaId,u.value=JSON.parse(JSON.stringify(l.content.newsItem)),m.value=!1,i.value=!0},E=async()=>{y.value=!0;try{m.value?(await ua(o.value,u.value),s.notifySuccess("\u65B0\u589E\u6210\u529F")):(await ma(o.value,I.value,u.value),s.notifySuccess("\u66F4\u65B0\u6210\u529F"))}finally{i.value=!1,y.value=!1,await p()}},z=async l=>{const t=l.mediaId;try{await s.confirm("\u4F60\u6B63\u5728\u901A\u8FC7\u53D1\u5E03\u7684\u65B9\u5F0F\u53D1\u8868\u5185\u5BB9\u3002 \u53D1\u5E03\u4E0D\u5360\u7528\u7FA4\u53D1\u6B21\u6570\uFF0C\u4E00\u5929\u53EF\u591A\u6B21\u53D1\u5E03\u3002\u5DF2\u53D1\u5E03\u5185\u5BB9\u4E0D\u4F1A\u63A8\u9001\u7ED9\u7528\u6237\uFF0C\u4E5F\u4E0D\u4F1A\u5C55\u793A\u5728\u516C\u4F17\u53F7\u4E3B\u9875\u4E2D\u3002 \u53D1\u5E03\u540E\uFF0C\u4F60\u53EF\u4EE5\u524D\u5F80\u53D1\u8868\u8BB0\u5F55\u83B7\u53D6\u94FE\u63A5\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u53D1\u5E03\u5185\u5BB9\u6DFB\u52A0\u5230\u81EA\u5B9A\u4E49\u83DC\u5355\u3001\u81EA\u52A8\u56DE\u590D\u3001\u8BDD\u9898\u548C\u9875\u9762\u6A21\u677F\u4E2D\u3002"),await da(o.value,t),s.notifySuccess("\u53D1\u5E03\u6210\u529F"),await p()}catch{}},J=async l=>{const t=l.mediaId;try{await s.confirm("\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u8349\u7A3F, \u662F\u5426\u7EE7\u7EED?"),await pa(o.value,t),s.notifySuccess("\u5220\u9664\u6210\u529F"),await p()}catch{}};return(l,t)=>{const f=oa,S=H,A=K,h=Q,F=T,b=ea,G=la,M=W,O=X("hasPermi"),Z=$;return x(),Y(B,null,[r(f,{title:"\u516C\u4F17\u53F7\u56FE\u6587",url:"https://doc.iocoder.cn/mp/article/"}),r(b,null,{default:e(()=>[r(F,{class:"-mb-15px",model:a(n),ref:"queryFormRef",inline:!0,"label-width":"68px"},{default:e(()=>[r(S,{label:"\u516C\u4F17\u53F7",prop:"accountId"},{default:e(()=>[r(a(sa),{onChange:V})]),_:1}),r(S,null,{default:e(()=>[U((x(),j(h,{type:"primary",plain:"",onClick:P,disabled:a(o)===0},{default:e(()=>[r(A,{icon:"ep:plus"}),v("\u65B0\u589E ")]),_:1},8,["disabled"])),[[O,["mp:draft:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),r(b,null,{default:e(()=>[r(a(wa),{loading:a(d),list:a(g),onUpdate:k,onDelete:J,onPublish:z},null,8,["loading","list"]),r(G,{total:a(w),page:a(n).pageNo,"onUpdate:page":t[0]||(t[0]=c=>a(n).pageNo=c),limit:a(n).pageSize,"onUpdate:limit":t[1]||(t[1]=c=>a(n).pageSize=c),onPagination:p},null,8,["total","page","limit"])]),_:1}),r(M,{title:a(m)?"\u65B0\u5EFA\u56FE\u6587":"\u4FEE\u6539\u56FE\u6587",width:"80%",modelValue:a(i),"onUpdate:modelValue":t[4]||(t[4]=c=>N(i)?i.value=c:null),"before-close":D,"destroy-on-close":""},{footer:e(()=>[r(h,{onClick:t[3]||(t[3]=c=>i.value=!1)},{default:e(()=>[v("\u53D6 \u6D88")]),_:1}),r(h,{type:"primary",onClick:E},{default:e(()=>[v("\u63D0 \u4EA4")]),_:1})]),default:e(()=>[U(r(a(ha),{modelValue:a(u),"onUpdate:modelValue":t[2]||(t[2]=c=>N(u)?u.value=c:null),"is-creating":a(m)},null,8,["modelValue","is-creating"]),[[Z,a(y)]])]),_:1},8,["title","modelValue"])],64)}}}),[["__scopeId","data-v-df550c3e"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/draft/index.vue"]])});export{Ga as __tla,C as default};
import{an as W,d as F,r as c,n as q,p as L,o as p,q as G,e as C,f as y,w as M,a as t,c as f,$ as I,b as S,j as J,h as K,ak as A,A as X,v as Y,P as Z,Q as aa,__tla as ea}from"./index-34f06ebd.js";import{_ as ta,__tla as la}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{R as D,__tla as sa}from"./TabNews-70e33ec9.js";import ra,{__tla as ca}from"./main-d757dd8f.js";import ua,{__tla as na}from"./MsgList-791f91a8.js";import{g as oa,__tla as _a}from"./index-7e2568f0.js";import{u as ia,__tla as pa}from"./useMessage-7a5ab7ef.js";import{_ as ma}from"./_plugin-vue_export-helper-1b428a4d.js";let w,N,Q,va=Promise.all([(()=>{try{return ea}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return pa}catch{}})()]).then(async()=>{let h,z,x,j,T,V;N=u=>W.get({url:"/mp/message/page",params:u}),h=u=>(Z("data-v-66e296ab"),u=u(),aa(),u),z={key:0},x=[h(()=>y("span",{class:"el-table__empty-text"},"\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A",-1))],j={key:1,class:"el-table__empty-block"},T=[h(()=>y("span",{class:"el-table__empty-text"},"\u6CA1\u6709\u66F4\u591A\u4E86",-1))],V={class:"msg-send"},w=ma(F({name:"WxMsg",__name:"main",props:{userId:{type:Number,required:!0}},setup(u){const U=ia(),b=u,m=c(-1),v=c(!1),k=c(!0),i=c([]),n=q({pageNo:1,pageSize:14,accountId:m}),_=q({nickname:"\u7528\u6237",avatar:"/assets/profile-61ae42a9.jpg",accountId:m}),H=c(!1),e=c({type:D.Text,accountId:-1,articles:[]}),O=c(null),s=c(null);L(async()=>{var l,r;const a=await oa(b.userId);_.nickname=((l=a.nickname)==null?void 0:l.length)>0?a.nickname:_.nickname,_.avatar=((r=_.avatar)==null?void 0:r.length)>0?a.avatar:_.avatar,m.value=a.accountId,e.value.accountId=a.accountId,E()});const $=async()=>{var l;if(!t(e))return;e.value.type===D.News&&e.value.articles&&e.value.articles.length>1&&(e.value.articles=[e.value.articles[0]],U.success("\u56FE\u6587\u6D88\u606F\u6761\u6570\u9650\u5236\u5728 1 \u6761\u4EE5\u5185\uFF0C\u5DF2\u9ED8\u8BA4\u53D1\u9001\u7B2C\u4E00\u6761"));const a=await(r=>W.post({url:"/mp/message/send",data:r}))({userId:b.userId,...e.value});H.value=!1,i.value=[...i.value,a],await R(),(l=O.value)==null||l.clear()},B=()=>{n.pageNo++,P(n,null)},P=async(a,l=null)=>{var g;v.value=!0;let r=await N(Object.assign({pageNo:a.pageNo,pageSize:a.pageSize,userId:b.userId,accountId:a.accountId},l));const d=((g=s.value)==null?void 0:g.scrollHeight)??0,o=r.list.reverse();i.value=[...o,...i.value],v.value=!1,(o.length<n.pageSize||o.length===0)&&(k.value=!1),n.pageNo=a.pageNo,n.pageSize=a.pageSize,n.pageNo===1?await R():o.length!==0&&(await A(),d!==0&&s.value&&(s.value.scrollTop=s.value.scrollHeight-d-100))},E=()=>{P(n)},R=async()=>{await A(),s.value&&(s.value.scrollTop=s.value.scrollHeight)};return(a,l)=>{const r=X,d=ta,o=Y;return p(),G(d,null,{default:C(()=>[y("div",{class:"msg-div",ref_key:"msgDivRef",ref:s},[M(y("div",null,null,512),[[o,t(v)]]),t(v)?I("",!0):(p(),f("div",z,[t(k)?(p(),f("div",{key:0,class:"el-table__empty-block",onClick:B},x)):I("",!0),t(k)?I("",!0):(p(),f("div",j,T))])),S(ua,{list:t(i),"account-id":t(m),user:t(_)},null,8,["list","account-id","user"])],512),M((p(),f("div",V,[S(t(ra),{ref_key:"replySelectRef",ref:O,modelValue:t(e),"onUpdate:modelValue":l[0]||(l[0]=g=>J(e)?e.value=g:null)},null,8,["modelValue"]),S(r,{type:"success",class:"send-but",onClick:$},{default:C(()=>[K("\u53D1\u9001(S)")]),_:1})])),[[o,t(H)]])]),_:1})}}}),[["__scopeId","data-v-66e296ab"]]),Q=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}))});export{w as W,va as __tla,N as g,Q as m};
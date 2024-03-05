import{d as Z,i as j,r as m,e as B,p as W,L as $,o as n,c as v,f as a,w as t,a as l,M as aa,F as x,q as G,v as c,h as _,x as f,g as ea,t as S,Q as ta,A as la,y as ra,z as sa,C as oa,D as na,G as _a,H as ca,al as ia,I as ua,J as pa,_ as ma,__tla as da}from"./index-f0743f71.js";import{_ as fa,__tla as ya}from"./index-cf7b3541.js";import{_ as ha,__tla as ga}from"./DictTag-4f08045a.js";import{_ as ba,__tla as wa}from"./ContentWrap-5acc4fb9.js";import{_ as ka,__tla as va}from"./index-d31b5cfe.js";import{a as xa,D as I,__tla as Sa}from"./dict-4a9940b3.js";import{d as Ca,__tla as Ta}from"./formatTime-e6df2ea5.js";import{C as Va,g as Ma,d as Na,__tla as Oa}from"./ClientForm-c2df24e1.js";import{u as Ua,__tla as za}from"./useMessage-75a00a06.js";import{__tla as Aa}from"./index-8beae3df.js";import"./color-f5b6e279.js";import{__tla as Ga}from"./index-a48a5540.js";import{__tla as Ia}from"./Dialog-8f786edd.js";import{__tla as Pa}from"./UploadImg-aab03145.js";import{__tla as qa}from"./index-4baae72c.js";import{__tla as Da}from"./el-image-viewer-d97aa530.js";import{__tla as Fa}from"./useUpload-27a6f734.js";import{__tla as Ja}from"./index-21698e53.js";import"./constants-99751ef9.js";let P,Ka=Promise.all([(()=>{try{return da}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return Sa}catch{}})(),(()=>{try{return Ta}catch{}})(),(()=>{try{return Oa}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return Aa}catch{}})(),(()=>{try{return Ga}catch{}})(),(()=>{try{return Ia}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return qa}catch{}})(),(()=>{try{return Da}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return Ja}catch{}})()]).then(async()=>{let C,T;C=["src"],T=Z({name:"SystemOAuth2Client",__name:"index",setup(Ra){const V=Ua(),{t:q}=j(),y=m(!0),M=m(0),N=m([]),s=B({pageNo:1,pageSize:10,name:null,status:void 0}),O=m(),i=async()=>{y.value=!0;try{const u=await Ma(s);N.value=u.list,M.value=u.total}finally{y.value=!1}},h=()=>{s.pageNo=1,i()},D=()=>{O.value.resetFields(),h()},U=m(),z=(u,r)=>{U.value.open(u,r)};return W(()=>{i()}),(u,r)=>{const F=ka,J=ta,g=la,K=ra,R=sa,b=oa,p=na,E=_a,A=ba,o=ca,H=ha,L=ia,Q=ua,X=fa,w=$("hasPermi"),Y=pa;return n(),v(x,null,[a(F,{title:"OAuth 2.0\uFF08SSO \u5355\u70B9\u767B\u5F55)",url:"https://doc.iocoder.cn/oauth2/"}),a(A,null,{default:t(()=>[a(E,{class:"-mb-15px",model:l(s),ref_key:"queryFormRef",ref:O,inline:!0,"label-width":"68px"},{default:t(()=>[a(g,{label:"\u5E94\u7528\u540D",prop:"name"},{default:t(()=>[a(J,{modelValue:l(s).name,"onUpdate:modelValue":r[0]||(r[0]=e=>l(s).name=e),placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D",clearable:"",onKeyup:aa(h,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(g,{label:"\u72B6\u6001",prop:"status"},{default:t(()=>[a(R,{modelValue:l(s).status,"onUpdate:modelValue":r[1]||(r[1]=e=>l(s).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:t(()=>[(n(!0),v(x,null,G(l(xa)(l(I).COMMON_STATUS),e=>(n(),c(K,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(g,null,{default:t(()=>[a(p,{onClick:h},{default:t(()=>[a(b,{icon:"ep:search",class:"mr-5px"}),_(" \u641C\u7D22")]),_:1}),a(p,{onClick:D},{default:t(()=>[a(b,{icon:"ep:refresh",class:"mr-5px"}),_(" \u91CD\u7F6E")]),_:1}),f((n(),c(p,{plain:"",type:"primary",onClick:r[2]||(r[2]=e=>z("create"))},{default:t(()=>[a(b,{icon:"ep:plus",class:"mr-5px"}),_(" \u65B0\u589E ")]),_:1})),[[w,["system:oauth2-client:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(A,null,{default:t(()=>[f((n(),c(Q,{data:l(N)},{default:t(()=>[a(o,{label:"\u5BA2\u6237\u7AEF\u7F16\u53F7",align:"center",prop:"clientId"}),a(o,{label:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",align:"center",prop:"secret"}),a(o,{label:"\u5E94\u7528\u540D",align:"center",prop:"name"}),a(o,{label:"\u5E94\u7528\u56FE\u6807",align:"center",prop:"logo"},{default:t(e=>[ea("img",{width:"40px",height:"40px",src:e.row.logo},null,8,C)]),_:1}),a(o,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:t(e=>[a(H,{type:l(I).COMMON_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(o,{label:"\u8BBF\u95EE\u4EE4\u724C\u7684\u6709\u6548\u671F",align:"center",prop:"accessTokenValiditySeconds"},{default:t(e=>[_(S(e.row.accessTokenValiditySeconds)+" \u79D2",1)]),_:1}),a(o,{label:"\u5237\u65B0\u4EE4\u724C\u7684\u6709\u6548\u671F",align:"center",prop:"refreshTokenValiditySeconds"},{default:t(e=>[_(S(e.row.refreshTokenValiditySeconds)+" \u79D2",1)]),_:1}),a(o,{label:"\u6388\u6743\u7C7B\u578B",align:"center",prop:"authorizedGrantTypes"},{default:t(e=>[(n(!0),v(x,null,G(e.row.authorizedGrantTypes,(k,d)=>(n(),c(L,{"disable-transitions":!0,key:d,index:d,class:"mr-5px"},{default:t(()=>[_(S(k),1)]),_:2},1032,["index"]))),128))]),_:1}),a(o,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:l(Ca)},null,8,["formatter"]),a(o,{label:"\u64CD\u4F5C",align:"center"},{default:t(e=>[f((n(),c(p,{link:"",type:"primary",onClick:k=>z("update",e.row.id)},{default:t(()=>[_(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[w,["system:oauth2-client:update"]]]),f((n(),c(p,{link:"",type:"danger",onClick:k=>(async d=>{try{await V.delConfirm(),await Na(d),V.success(q("common.delSuccess")),await i()}catch{}})(e.row.id)},{default:t(()=>[_(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[w,["system:oauth2-client:delete"]]])]),_:1})]),_:1},8,["data"])),[[Y,l(y)]]),a(X,{total:l(M),page:l(s).pageNo,"onUpdate:page":r[3]||(r[3]=e=>l(s).pageNo=e),limit:l(s).pageSize,"onUpdate:limit":r[4]||(r[4]=e=>l(s).pageSize=e),onPagination:i},null,8,["total","page","limit"])]),_:1}),a(Va,{ref_key:"formRef",ref:U,onSuccess:i},null,512)],64)}}}),P=ma(T,[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/system/oauth2/client/index.vue"]])});export{Ka as __tla,P as default};

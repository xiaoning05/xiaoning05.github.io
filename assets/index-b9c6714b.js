import{d as Z,k as j,r as m,n as J,p as Q,G as $,o as n,c as v,b as a,e as t,a as l,H as aa,F as x,g as G,q as i,h as _,w as f,f as ea,t as S,L as ta,y as la,s as ra,x as sa,A as oa,B as na,C as _a,E as ia,ai as ca,i as ua,v as pa,_ as ma,__tla as da}from"./index-aaa5adb3.js";import{_ as fa,__tla as ya}from"./index-b47c179c.js";import{_ as ha,__tla as ga}from"./DictTag-1c1088ae.js";import{_ as ba,__tla as wa}from"./ContentWrap-04d7f6d1.js";import{_ as ka,__tla as va}from"./index-6683a38c.js";import{a as xa,D as q,__tla as Sa}from"./dict-f2796e71.js";import{d as Ca,__tla as Ta}from"./formatTime-9c0e8879.js";import{C as Va,g as Na,d as Oa,__tla as Ua}from"./ClientForm-fb5c5aa0.js";import{u as Aa,__tla as Ma}from"./useMessage-873da1e2.js";import{__tla as za}from"./index-c602062a.js";import"./color-f5b6e279.js";import{__tla as Ga}from"./index-5b7dcbf1.js";import{__tla as qa}from"./Dialog-9a73a39c.js";import{__tla as Fa}from"./UploadImg-9fa46f1e.js";import{__tla as Ia}from"./index-93c914d7.js";import{__tla as Pa}from"./el-image-viewer-fc91515b.js";import{__tla as Ra}from"./useUpload-c52dec87.js";import{__tla as Da}from"./index-fb6b5360.js";import"./constants-99751ef9.js";let F,Ea=Promise.all([(()=>{try{return da}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return Sa}catch{}})(),(()=>{try{return Ta}catch{}})(),(()=>{try{return Ua}catch{}})(),(()=>{try{return Ma}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return Ga}catch{}})(),(()=>{try{return qa}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return Ia}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return Ra}catch{}})(),(()=>{try{return Da}catch{}})()]).then(async()=>{let C,T;C=["src"],T=Z({name:"SystemOAuth2Client",__name:"index",setup(La){const V=Aa(),{t:I}=j(),y=m(!0),N=m(0),O=m([]),s=J({pageNo:1,pageSize:10,name:null,status:void 0}),U=m(),c=async()=>{y.value=!0;try{const u=await Na(s);O.value=u.list,N.value=u.total}finally{y.value=!1}},h=()=>{s.pageNo=1,c()},P=()=>{U.value.resetFields(),h()},A=m(),M=(u,r)=>{A.value.open(u,r)};return Q(()=>{c()}),(u,r)=>{const R=ka,D=ta,g=la,E=ra,L=sa,b=oa,p=na,B=_a,z=ba,o=ia,H=ha,K=ca,W=ua,X=fa,w=$("hasPermi"),Y=pa;return n(),v(x,null,[a(R,{title:"OAuth 2.0\uFF08SSO \u5355\u70B9\u767B\u5F55)",url:"https://doc.iocoder.cn/oauth2/"}),a(z,null,{default:t(()=>[a(B,{class:"-mb-15px",model:l(s),ref_key:"queryFormRef",ref:U,inline:!0,"label-width":"68px"},{default:t(()=>[a(g,{label:"\u5E94\u7528\u540D",prop:"name"},{default:t(()=>[a(D,{modelValue:l(s).name,"onUpdate:modelValue":r[0]||(r[0]=e=>l(s).name=e),placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D",clearable:"",onKeyup:aa(h,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),a(g,{label:"\u72B6\u6001",prop:"status"},{default:t(()=>[a(L,{modelValue:l(s).status,"onUpdate:modelValue":r[1]||(r[1]=e=>l(s).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:t(()=>[(n(!0),v(x,null,G(l(xa)(l(q).COMMON_STATUS),e=>(n(),i(E,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(g,null,{default:t(()=>[a(p,{onClick:h},{default:t(()=>[a(b,{icon:"ep:search",class:"mr-5px"}),_(" \u641C\u7D22")]),_:1}),a(p,{onClick:P},{default:t(()=>[a(b,{icon:"ep:refresh",class:"mr-5px"}),_(" \u91CD\u7F6E")]),_:1}),f((n(),i(p,{plain:"",type:"primary",onClick:r[2]||(r[2]=e=>M("create"))},{default:t(()=>[a(b,{icon:"ep:plus",class:"mr-5px"}),_(" \u65B0\u589E ")]),_:1})),[[w,["system:oauth2-client:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(z,null,{default:t(()=>[f((n(),i(W,{data:l(O)},{default:t(()=>[a(o,{label:"\u5BA2\u6237\u7AEF\u7F16\u53F7",align:"center",prop:"clientId"}),a(o,{label:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",align:"center",prop:"secret"}),a(o,{label:"\u5E94\u7528\u540D",align:"center",prop:"name"}),a(o,{label:"\u5E94\u7528\u56FE\u6807",align:"center",prop:"logo"},{default:t(e=>[ea("img",{width:"40px",height:"40px",src:e.row.logo},null,8,C)]),_:1}),a(o,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:t(e=>[a(H,{type:l(q).COMMON_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(o,{label:"\u8BBF\u95EE\u4EE4\u724C\u7684\u6709\u6548\u671F",align:"center",prop:"accessTokenValiditySeconds"},{default:t(e=>[_(S(e.row.accessTokenValiditySeconds)+" \u79D2",1)]),_:1}),a(o,{label:"\u5237\u65B0\u4EE4\u724C\u7684\u6709\u6548\u671F",align:"center",prop:"refreshTokenValiditySeconds"},{default:t(e=>[_(S(e.row.refreshTokenValiditySeconds)+" \u79D2",1)]),_:1}),a(o,{label:"\u6388\u6743\u7C7B\u578B",align:"center",prop:"authorizedGrantTypes"},{default:t(e=>[(n(!0),v(x,null,G(e.row.authorizedGrantTypes,(k,d)=>(n(),i(K,{"disable-transitions":!0,key:d,index:d,class:"mr-5px"},{default:t(()=>[_(S(k),1)]),_:2},1032,["index"]))),128))]),_:1}),a(o,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:l(Ca)},null,8,["formatter"]),a(o,{label:"\u64CD\u4F5C",align:"center"},{default:t(e=>[f((n(),i(p,{link:"",type:"primary",onClick:k=>M("update",e.row.id)},{default:t(()=>[_(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[w,["system:oauth2-client:update"]]]),f((n(),i(p,{link:"",type:"danger",onClick:k=>(async d=>{try{await V.delConfirm(),await Oa(d),V.success(I("common.delSuccess")),await c()}catch{}})(e.row.id)},{default:t(()=>[_(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[w,["system:oauth2-client:delete"]]])]),_:1})]),_:1},8,["data"])),[[Y,l(y)]]),a(X,{total:l(N),page:l(s).pageNo,"onUpdate:page":r[3]||(r[3]=e=>l(s).pageNo=e),limit:l(s).pageSize,"onUpdate:limit":r[4]||(r[4]=e=>l(s).pageSize=e),onPagination:c},null,8,["total","page","limit"])]),_:1}),a(Va,{ref_key:"formRef",ref:A,onSuccess:c},null,512)],64)}}}),F=ma(T,[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/system/oauth2/client/index.vue"]])});export{Ea as __tla,F as default};
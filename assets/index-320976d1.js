import{d as ca,i as pa,u as da,r as y,dP as ma,p as _a,L as fa,o as u,c as P,f as a,w as e,a as l,M as ya,h as c,x as b,v as d,F as L,q as wa,g as w,t as g,av as A,Q as ha,A as va,c1 as ba,B as ga,C as ka,D as Ca,G as xa,m as Va,n as Ia,j as Ea,k as Sa,H as Ta,aB as Ua,a0 as Da,al as Pa,I as La,J as Aa,_ as Ba,__tla as Na}from"./index-f0743f71.js";import{_ as Ya,__tla as Ma}from"./index-cf7b3541.js";import{E as Ra,__tla as $a}from"./el-image-015376ce.js";import{__tla as za}from"./el-image-viewer-d97aa530.js";import{_ as Fa,__tla as Ha}from"./ContentWrap-5acc4fb9.js";import{c as ja,__tla as qa}from"./index-4baae72c.js";import{d as Ga,__tla as Ja}from"./formatTime-e6df2ea5.js";import{h as Ka,d as Qa,t as Oa}from"./tree-02f455f9.js";import{d as C}from"./constants-99751ef9.js";import{d as Xa}from"./download-20922b56.js";import{d as Za,a as Wa,e as J,f as ae,h as ee,__tla as te}from"./spu-5cbf535f.js";import{g as le,__tla as ne}from"./category-7944548c.js";import{u as se,__tla as re}from"./useMessage-75a00a06.js";import{__tla as oe}from"./index-8beae3df.js";import{__tla as ue}from"./index-a48a5540.js";let K,ie=Promise.all([(()=>{try{return Na}catch{}})(),(()=>{try{return Ma}catch{}})(),(()=>{try{return $a}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return Ha}catch{}})(),(()=>{try{return qa}catch{}})(),(()=>{try{return Ja}catch{}})(),(()=>{try{return te}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return ue}catch{}})()]).then(async()=>{let B,N;B={class:"flex"},N={class:"ml-4 overflow-hidden"},K=Ba(ca({name:"ProductSpu",__name:"index",setup(ce){const h=se(),{t:Q}=pa(),{push:Y}=da(),S=y(!1),T=y(!1),M=y(0),R=y([]),$=y([{name:"\u51FA\u552E\u4E2D",type:0,count:0},{name:"\u4ED3\u5E93\u4E2D",type:1,count:0},{name:"\u5DF2\u552E\u7F44",type:2,count:0},{name:"\u8B66\u6212\u5E93\u5B58",type:3,count:0},{name:"\u56DE\u6536\u7AD9",type:4,count:0}]),r=y({pageNo:1,pageSize:10,tabType:0,name:"",categoryId:void 0,createTime:void 0}),z=y(),f=async()=>{S.value=!0;try{const s=await Za(r.value);R.value=s.list,M.value=s.total}finally{S.value=!1}},O=s=>{r.value.tabType=s.paneName,f()},x=async()=>{const s=await Wa();for(let n in s)$.value[Number(n)].count=s[n]},F=async(s,n)=>{try{const V=n===C.RECYCLE.status?"\u52A0\u5165\u5230\u56DE\u6536\u7AD9":"\u6062\u590D\u5230\u4ED3\u5E93";await h.confirm(`\u786E\u8BA4\u8981"${s.name}"${V}\u5417\uFF1F`),await J({id:s.id,status:n}),h.success(V+"\u6210\u529F"),await x(),await f()}catch{}},U=()=>{f()},X=()=>{z.value.resetFields(),U()},H=s=>{Y(typeof s!="number"?{name:"ProductSpuAdd"}:{name:"ProductSpuEdit",params:{id:s}})},Z=async()=>{try{await h.exportConfirm(),T.value=!0;const s=await ee(r);Xa.excel(s,"\u5546\u54C1\u5217\u8868.xls")}catch{}finally{T.value=!1}},D=y();return ma(()=>{f()}),_a(async()=>{await x(),await f();const s=await le({});D.value=Ka(s,"id","parentId")}),(s,n)=>{const V=ha,m=va,W=ba,aa=ga,I=ka,_=Ca,j=xa,q=Fa,ea=Va,ta=Ia,v=Ea,E=Sa,p=Ta,la=Ra,na=Ua,sa=Da,ra=Pa,oa=La,ua=Ya,k=fa("hasPermi"),ia=Aa;return u(),P(L,null,[a(q,null,{default:e(()=>[a(j,{ref_key:"queryFormRef",ref:z,inline:!0,model:l(r),class:"-mb-15px","label-width":"68px"},{default:e(()=>[a(m,{label:"\u5546\u54C1\u540D\u79F0",prop:"name"},{default:e(()=>[a(V,{modelValue:l(r).name,"onUpdate:modelValue":n[0]||(n[0]=t=>l(r).name=t),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",onKeyup:ya(U,["enter"])},null,8,["modelValue"])]),_:1}),a(m,{label:"\u5546\u54C1\u5206\u7C7B",prop:"categoryId"},{default:e(()=>[a(W,{modelValue:l(r).categoryId,"onUpdate:modelValue":n[1]||(n[1]=t=>l(r).categoryId=t),options:l(D),props:l(Qa),class:"w-1/1",clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u5546\u54C1\u5206\u7C7B"},null,8,["modelValue","options","props"])]),_:1}),a(m,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:e(()=>[a(aa,{modelValue:l(r).createTime,"onUpdate:modelValue":n[2]||(n[2]=t=>l(r).createTime=t),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px","end-placeholder":"\u7ED3\u675F\u65E5\u671F","start-placeholder":"\u5F00\u59CB\u65E5\u671F",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","default-time"])]),_:1}),a(m,null,{default:e(()=>[a(_,{onClick:U},{default:e(()=>[a(I,{class:"mr-5px",icon:"ep:search"}),c(" \u641C\u7D22 ")]),_:1}),a(_,{onClick:X},{default:e(()=>[a(I,{class:"mr-5px",icon:"ep:refresh"}),c(" \u91CD\u7F6E ")]),_:1}),b((u(),d(_,{plain:"",type:"primary",onClick:n[3]||(n[3]=t=>H(void 0))},{default:e(()=>[a(I,{class:"mr-5px",icon:"ep:plus"}),c(" \u65B0\u589E ")]),_:1})),[[k,["product:spu:create"]]]),b((u(),d(_,{loading:l(T),plain:"",type:"success",onClick:Z},{default:e(()=>[a(I,{class:"mr-5px",icon:"ep:download"}),c(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[k,["product:spu:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(q,null,{default:e(()=>[a(ta,{modelValue:l(r).tabType,"onUpdate:modelValue":n[4]||(n[4]=t=>l(r).tabType=t),onTabClick:O},{default:e(()=>[(u(!0),P(L,null,wa(l($),t=>(u(),d(ea,{key:t.type,label:t.name+"("+t.count+")",name:t.type},null,8,["label","name"]))),128))]),_:1},8,["modelValue"]),b((u(),d(oa,{data:l(R)},{default:e(()=>[a(p,{type:"expand"},{default:e(({row:t})=>[a(j,{class:"spu-table-expand","label-position":"left"},{default:e(()=>[a(E,null,{default:e(()=>[a(v,{span:24},{default:e(()=>[a(E,null,{default:e(()=>[a(v,{span:8},{default:e(()=>[a(m,{label:"\u5546\u54C1\u5206\u7C7B:"},{default:e(()=>{return[w("span",null,g((i=t.categoryId,Oa(D.value,i))),1)];var i}),_:2},1024)]),_:2},1024),a(v,{span:8},{default:e(()=>[a(m,{label:"\u5E02\u573A\u4EF7:"},{default:e(()=>[w("span",null,g(l(A)(t.marketPrice)),1)]),_:2},1024)]),_:2},1024),a(v,{span:8},{default:e(()=>[a(m,{label:"\u6210\u672C\u4EF7:"},{default:e(()=>[w("span",null,g(l(A)(t.costPrice)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(E,null,{default:e(()=>[a(v,{span:24},{default:e(()=>[a(E,null,{default:e(()=>[a(v,{span:8},{default:e(()=>[a(m,{label:"\u6D4F\u89C8\u91CF:"},{default:e(()=>[w("span",null,g(t.browseCount),1)]),_:2},1024)]),_:2},1024),a(v,{span:8},{default:e(()=>[a(m,{label:"\u865A\u62DF\u9500\u91CF:"},{default:e(()=>[w("span",null,g(t.virtualSalesCount),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),a(p,{label:"\u5546\u54C1\u7F16\u53F7","min-width":"140",prop:"id"}),a(p,{label:"\u5546\u54C1\u4FE1\u606F","min-width":"300"},{default:e(({row:t})=>[w("div",B,[a(la,{fit:"cover",src:t.picUrl,class:"flex-none w-50px h-50px",onClick:i=>{return o=t.picUrl,void ja({urlList:[o]});var o}},null,8,["src","onClick"]),w("div",N,[a(na,{effect:"dark",content:t.name,placement:"top"},{default:e(()=>[w("div",null,g(t.name),1)]),_:2},1032,["content"])])])]),_:1}),a(p,{align:"center",label:"\u4EF7\u683C","min-width":"160",prop:"price"},{default:e(({row:t})=>[c(" \xA5 "+g(l(A)(t.price)),1)]),_:1}),a(p,{align:"center",label:"\u9500\u91CF","min-width":"90",prop:"salesCount"}),a(p,{align:"center",label:"\u5E93\u5B58","min-width":"90",prop:"stock"}),a(p,{align:"center",label:"\u6392\u5E8F","min-width":"70",prop:"sort"}),a(p,{align:"center",label:"\u9500\u552E\u72B6\u6001","min-width":"80"},{default:e(({row:t})=>[t.status>=0?(u(),d(sa,{key:0,modelValue:t.status,"onUpdate:modelValue":i=>t.status=i,"active-value":1,"inactive-value":0,"active-text":"\u4E0A\u67B6","inactive-text":"\u4E0B\u67B6","inline-prompt":"",onChange:i=>(async o=>{try{const G=o.status?"\u4E0A\u67B6":"\u4E0B\u67B6";await h.confirm(`\u786E\u8BA4\u8981${G}"${o.name}"\u5417\uFF1F`),await J({id:o.id,status:o.status}),h.success(G+"\u6210\u529F"),await x(),await f()}catch{o.status=o.status===C.DISABLE.status?C.ENABLE.status:C.DISABLE.status}})(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])):(u(),d(ra,{key:1,type:"info"},{default:e(()=>[c("\u56DE\u6536\u7AD9")]),_:1}))]),_:1}),a(p,{formatter:l(Ga),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180"},null,8,["formatter"]),a(p,{align:"center",fixed:"right",label:"\u64CD\u4F5C","min-width":"200"},{default:e(({row:t})=>[a(_,{link:"",type:"primary",onClick:i=>{return o=t.id,void Y({name:"ProductSpuDetail",params:{id:o}});var o}},{default:e(()=>[c(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"]),b((u(),d(_,{link:"",type:"primary",onClick:i=>H(t.id)},{default:e(()=>[c(" \u4FEE\u6539 ")]),_:2},1032,["onClick"])),[[k,["product:spu:update"]]]),l(r).tabType===4?(u(),P(L,{key:0},[b((u(),d(_,{link:"",type:"danger",onClick:i=>(async o=>{try{await h.delConfirm(),await ae(o),h.success(Q("common.delSuccess")),await x(),await f()}catch{}})(t.id)},{default:e(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[k,["product:spu:delete"]]]),b((u(),d(_,{link:"",type:"primary",onClick:i=>F(t,l(C).DISABLE.status)},{default:e(()=>[c(" \u6062\u590D ")]),_:2},1032,["onClick"])),[[k,["product:spu:update"]]])],64)):b((u(),d(_,{key:1,link:"",type:"danger",onClick:i=>F(t,l(C).RECYCLE.status)},{default:e(()=>[c(" \u56DE\u6536 ")]),_:2},1032,["onClick"])),[[k,["product:spu:update"]]])]),_:1})]),_:1},8,["data"])),[[ia,l(S)]]),a(ua,{limit:l(r).pageSize,"onUpdate:limit":n[5]||(n[5]=t=>l(r).pageSize=t),page:l(r).pageNo,"onUpdate:page":n[6]||(n[6]=t=>l(r).pageNo=t),total:l(M),onPagination:f},null,8,["limit","page","total"])]),_:1})],64)}}}),[["__scopeId","data-v-b78c7ed6"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/product/spu/index.vue"]])});export{ie as __tla,K as default};
import{d as pa,k as ca,u as da,r as y,dL as ma,p as _a,D as fa,o as u,c as P,b as a,e as t,a as l,G as ya,h as p,w as v,q as d,F as L,g as ha,f as h,t as g,as as A,K as wa,y as ba,bV as va,z as ga,_ as ka,A as Ca,B as xa,l as Va,m as Ea,a8 as Sa,aa as Ta,E as Ia,ay as Ua,V as Da,ah as Pa,i as La,v as Aa,__tla as Na}from"./index-34f06ebd.js";import{_ as Ya,__tla as Ba}from"./index.vue_vue_type_script_setup_true_lang-68fe248c.js";import{E as za,__tla as $a}from"./el-image-a5cf0b35.js";import{__tla as Fa}from"./el-image-viewer-331eba6f.js";import{_ as Ma,__tla as Ra}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{c as qa,__tla as Ga}from"./index-9ab6e3b3.js";import{d as Ha,__tla as Ka}from"./formatTime-ed0a77fd.js";import{h as ja,d as Ja,t as Oa}from"./tree-82bb3b99.js";import{d as C}from"./constants-99751ef9.js";import{d as Qa}from"./download-20922b56.js";import{d as Xa,a as Wa,e as j,f as Za,h as at,__tla as tt}from"./spu-7528f5a7.js";import{g as et,__tla as lt}from"./category-d1626b05.js";import{u as nt,__tla as st}from"./useMessage-7a5ab7ef.js";import{_ as rt}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as ot}from"./index-f8693880.js";import{__tla as ut}from"./index-460c50ff.js";let J,it=Promise.all([(()=>{try{return Na}catch{}})(),(()=>{try{return Ba}catch{}})(),(()=>{try{return $a}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return Ra}catch{}})(),(()=>{try{return Ga}catch{}})(),(()=>{try{return Ka}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return ut}catch{}})()]).then(async()=>{let N,Y;N={class:"flex"},Y={class:"ml-4 overflow-hidden"},J=rt(pa({name:"ProductSpu",__name:"index",setup(pt){const w=nt(),{t:O}=ca(),{push:B}=da(),T=y(!1),I=y(!1),z=y(0),$=y([]),F=y([{name:"\u51FA\u552E\u4E2D",type:0,count:0},{name:"\u4ED3\u5E93\u4E2D",type:1,count:0},{name:"\u5DF2\u552E\u7F44",type:2,count:0},{name:"\u8B66\u6212\u5E93\u5B58",type:3,count:0},{name:"\u56DE\u6536\u7AD9",type:4,count:0}]),r=y({pageNo:1,pageSize:10,tabType:0,name:"",categoryId:void 0,createTime:void 0}),M=y(),f=async()=>{T.value=!0;try{const s=await Xa(r.value);$.value=s.list,z.value=s.total}finally{T.value=!1}},Q=s=>{r.value.tabType=s.paneName,f()},x=async()=>{const s=await Wa();for(let n in s)F.value[Number(n)].count=s[n]},R=async(s,n)=>{try{const V=n===C.RECYCLE.status?"\u52A0\u5165\u5230\u56DE\u6536\u7AD9":"\u6062\u590D\u5230\u4ED3\u5E93";await w.confirm(`\u786E\u8BA4\u8981"${s.name}"${V}\u5417\uFF1F`),await j({id:s.id,status:n}),w.success(V+"\u6210\u529F"),await x(),await f()}catch{}},U=()=>{f()},X=()=>{M.value.resetFields(),U()},q=s=>{B(typeof s!="number"?{name:"ProductSpuAdd"}:{name:"ProductSpuEdit",params:{id:s}})},W=async()=>{try{await w.exportConfirm(),I.value=!0;const s=await at(r);Qa.excel(s,"\u5546\u54C1\u5217\u8868.xls")}catch{}finally{I.value=!1}},D=y();return ma(()=>{f()}),_a(async()=>{await x(),await f();const s=await et({});D.value=ja(s,"id","parentId")}),(s,n)=>{const V=wa,m=ba,Z=va,aa=ga,E=ka,_=Ca,G=xa,H=Ma,ta=Va,ea=Ea,b=Sa,S=Ta,c=Ia,la=za,na=Ua,sa=Da,ra=Pa,oa=La,ua=Ya,k=fa("hasPermi"),ia=Aa;return u(),P(L,null,[a(H,null,{default:t(()=>[a(G,{ref_key:"queryFormRef",ref:M,inline:!0,model:l(r),class:"-mb-15px","label-width":"68px"},{default:t(()=>[a(m,{label:"\u5546\u54C1\u540D\u79F0",prop:"name"},{default:t(()=>[a(V,{modelValue:l(r).name,"onUpdate:modelValue":n[0]||(n[0]=e=>l(r).name=e),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",onKeyup:ya(U,["enter"])},null,8,["modelValue"])]),_:1}),a(m,{label:"\u5546\u54C1\u5206\u7C7B",prop:"categoryId"},{default:t(()=>[a(Z,{modelValue:l(r).categoryId,"onUpdate:modelValue":n[1]||(n[1]=e=>l(r).categoryId=e),options:l(D),props:l(Ja),class:"w-1/1",clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u5546\u54C1\u5206\u7C7B"},null,8,["modelValue","options","props"])]),_:1}),a(m,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:t(()=>[a(aa,{modelValue:l(r).createTime,"onUpdate:modelValue":n[2]||(n[2]=e=>l(r).createTime=e),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px","end-placeholder":"\u7ED3\u675F\u65E5\u671F","start-placeholder":"\u5F00\u59CB\u65E5\u671F",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","default-time"])]),_:1}),a(m,null,{default:t(()=>[a(_,{onClick:U},{default:t(()=>[a(E,{class:"mr-5px",icon:"ep:search"}),p(" \u641C\u7D22 ")]),_:1}),a(_,{onClick:X},{default:t(()=>[a(E,{class:"mr-5px",icon:"ep:refresh"}),p(" \u91CD\u7F6E ")]),_:1}),v((u(),d(_,{plain:"",type:"primary",onClick:n[3]||(n[3]=e=>q(void 0))},{default:t(()=>[a(E,{class:"mr-5px",icon:"ep:plus"}),p(" \u65B0\u589E ")]),_:1})),[[k,["product:spu:create"]]]),v((u(),d(_,{loading:l(I),plain:"",type:"success",onClick:W},{default:t(()=>[a(E,{class:"mr-5px",icon:"ep:download"}),p(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[k,["product:spu:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(H,null,{default:t(()=>[a(ea,{modelValue:l(r).tabType,"onUpdate:modelValue":n[4]||(n[4]=e=>l(r).tabType=e),onTabClick:Q},{default:t(()=>[(u(!0),P(L,null,ha(l(F),e=>(u(),d(ta,{key:e.type,label:e.name+"("+e.count+")",name:e.type},null,8,["label","name"]))),128))]),_:1},8,["modelValue"]),v((u(),d(oa,{data:l($)},{default:t(()=>[a(c,{type:"expand"},{default:t(({row:e})=>[a(G,{class:"spu-table-expand","label-position":"left"},{default:t(()=>[a(S,null,{default:t(()=>[a(b,{span:24},{default:t(()=>[a(S,null,{default:t(()=>[a(b,{span:8},{default:t(()=>[a(m,{label:"\u5546\u54C1\u5206\u7C7B:"},{default:t(()=>{return[h("span",null,g((i=e.categoryId,Oa(D.value,i))),1)];var i}),_:2},1024)]),_:2},1024),a(b,{span:8},{default:t(()=>[a(m,{label:"\u5E02\u573A\u4EF7:"},{default:t(()=>[h("span",null,g(l(A)(e.marketPrice)),1)]),_:2},1024)]),_:2},1024),a(b,{span:8},{default:t(()=>[a(m,{label:"\u6210\u672C\u4EF7:"},{default:t(()=>[h("span",null,g(l(A)(e.costPrice)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(S,null,{default:t(()=>[a(b,{span:24},{default:t(()=>[a(S,null,{default:t(()=>[a(b,{span:8},{default:t(()=>[a(m,{label:"\u6D4F\u89C8\u91CF:"},{default:t(()=>[h("span",null,g(e.browseCount),1)]),_:2},1024)]),_:2},1024),a(b,{span:8},{default:t(()=>[a(m,{label:"\u865A\u62DF\u9500\u91CF:"},{default:t(()=>[h("span",null,g(e.virtualSalesCount),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),a(c,{label:"\u5546\u54C1\u7F16\u53F7","min-width":"140",prop:"id"}),a(c,{label:"\u5546\u54C1\u4FE1\u606F","min-width":"300"},{default:t(({row:e})=>[h("div",N,[a(la,{fit:"cover",src:e.picUrl,class:"flex-none w-50px h-50px",onClick:i=>{return o=e.picUrl,void qa({urlList:[o]});var o}},null,8,["src","onClick"]),h("div",Y,[a(na,{effect:"dark",content:e.name,placement:"top"},{default:t(()=>[h("div",null,g(e.name),1)]),_:2},1032,["content"])])])]),_:1}),a(c,{align:"center",label:"\u4EF7\u683C","min-width":"160",prop:"price"},{default:t(({row:e})=>[p(" \xA5 "+g(l(A)(e.price)),1)]),_:1}),a(c,{align:"center",label:"\u9500\u91CF","min-width":"90",prop:"salesCount"}),a(c,{align:"center",label:"\u5E93\u5B58","min-width":"90",prop:"stock"}),a(c,{align:"center",label:"\u6392\u5E8F","min-width":"70",prop:"sort"}),a(c,{align:"center",label:"\u9500\u552E\u72B6\u6001","min-width":"80"},{default:t(({row:e})=>[e.status>=0?(u(),d(sa,{key:0,modelValue:e.status,"onUpdate:modelValue":i=>e.status=i,"active-value":1,"inactive-value":0,"active-text":"\u4E0A\u67B6","inactive-text":"\u4E0B\u67B6","inline-prompt":"",onChange:i=>(async o=>{try{const K=o.status?"\u4E0A\u67B6":"\u4E0B\u67B6";await w.confirm(`\u786E\u8BA4\u8981${K}"${o.name}"\u5417\uFF1F`),await j({id:o.id,status:o.status}),w.success(K+"\u6210\u529F"),await x(),await f()}catch{o.status=o.status===C.DISABLE.status?C.ENABLE.status:C.DISABLE.status}})(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])):(u(),d(ra,{key:1,type:"info"},{default:t(()=>[p("\u56DE\u6536\u7AD9")]),_:1}))]),_:1}),a(c,{formatter:l(Ha),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180"},null,8,["formatter"]),a(c,{align:"center",fixed:"right",label:"\u64CD\u4F5C","min-width":"200"},{default:t(({row:e})=>[a(_,{link:"",type:"primary",onClick:i=>{return o=e.id,void B({name:"ProductSpuDetail",params:{id:o}});var o}},{default:t(()=>[p(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"]),v((u(),d(_,{link:"",type:"primary",onClick:i=>q(e.id)},{default:t(()=>[p(" \u4FEE\u6539 ")]),_:2},1032,["onClick"])),[[k,["product:spu:update"]]]),l(r).tabType===4?(u(),P(L,{key:0},[v((u(),d(_,{link:"",type:"danger",onClick:i=>(async o=>{try{await w.delConfirm(),await Za(o),w.success(O("common.delSuccess")),await x(),await f()}catch{}})(e.id)},{default:t(()=>[p(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[k,["product:spu:delete"]]]),v((u(),d(_,{link:"",type:"primary",onClick:i=>R(e,l(C).DISABLE.status)},{default:t(()=>[p(" \u6062\u590D ")]),_:2},1032,["onClick"])),[[k,["product:spu:update"]]])],64)):v((u(),d(_,{key:1,link:"",type:"danger",onClick:i=>R(e,l(C).RECYCLE.status)},{default:t(()=>[p(" \u56DE\u6536 ")]),_:2},1032,["onClick"])),[[k,["product:spu:update"]]])]),_:1})]),_:1},8,["data"])),[[ia,l(T)]]),a(ua,{limit:l(r).pageSize,"onUpdate:limit":n[5]||(n[5]=e=>l(r).pageSize=e),page:l(r).pageNo,"onUpdate:page":n[6]||(n[6]=e=>l(r).pageNo=e),total:l(z),onPagination:f},null,8,["limit","page","total"])]),_:1})],64)}}}),[["__scopeId","data-v-1f49e3eb"]])});export{it as __tla,J as default};

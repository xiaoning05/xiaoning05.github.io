import{d as Z,u as $,r as v,e as ee,p as ae,o as s,c,f as a,w as t,a as l,L as S,F as m,q as h,v as i,h as w,x as le,t as f,g,au as te,as as re,P as ue,A as oe,y as se,z as ne,B as pe,_ as de,C as _e,D as ce,m as me,n as ie,G as fe,ak as ye,H as be,I as ve,__tla as he}from"./index-d5b00dc9.js";import{_ as we,__tla as Te}from"./index.vue_vue_type_script_setup_true_lang-8478be74.js";import{_ as Ae,__tla as Ve}from"./DictTag.vue_vue_type_script_lang-2a9ae33e.js";import{E as ge,__tla as xe}from"./el-image-5f4cbc55.js";import{__tla as Ee}from"./el-image-viewer-96313bcd.js";import{_ as ke,__tla as Ne}from"./ContentWrap.vue_vue_type_script_setup_true_lang-29ba9b6b.js";import{e as Se,__tla as Ue}from"./index-4062bd7b.js";import{d as x,D as y,__tla as De}from"./dict-29b94c3f.js";import{f as Re,__tla as Ce}from"./formatTime-9063410f.js";import{c as Fe,__tla as Le}from"./index-2383b77d.js";import{__tla as Pe}from"./index-9ed43bfb.js";import"./color-f5b6e279.js";import{__tla as Ye}from"./index-bd0d9e6c.js";let H,ze=Promise.all([(()=>{try{return he}catch{}})(),(()=>{try{return Te}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return De}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Pe}catch{}})(),(()=>{try{return Ye}catch{}})()]).then(async()=>{let U,D;U={class:"flex items-center"},D={class:"mr-10px"},H=Z({name:"TradeAfterSale",__name:"index",setup(Ie){const{push:R}=$(),E=v(!0),C=v(0),F=v([]),L=v([{label:"\u5168\u90E8",value:"0"}]),P=v(),r=ee({pageNo:1,pageSize:10,no:null,status:"0",orderNo:null,spuName:null,createTime:[],way:null,type:null}),T=async()=>{E.value=!0;try{const o=re(r);o.status==="0"&&delete o.status;const u=await Se(o);F.value=u.list,C.value=u.total}finally{E.value=!1}},b=async()=>{r.pageNo=1,await T()},K=()=>{var o;(o=P.value)==null||o.resetFields(),b()},W=async o=>{r.status=o.paneName,await T()};return ae(async()=>{await T();for(const o of x(y.TRADE_AFTER_SALE_STATUS))L.value.push({label:o.label,value:o.value})}),(o,u)=>{const k=ue,p=oe,A=se,N=ne,q=pe,Y=de,V=_e,M=ce,z=ke,B=me,G=ie,n=fe,O=ge,j=ye,I=Ae,J=be,Q=we,X=ve;return s(),c(m,null,[a(z,null,{default:t(()=>[a(M,{ref_key:"queryFormRef",ref:P,inline:!0,model:l(r),"label-width":"68px"},{default:t(()=>[a(p,{label:"\u5546\u54C1\u540D\u79F0",prop:"spuName"},{default:t(()=>[a(k,{modelValue:l(r).spuName,"onUpdate:modelValue":u[0]||(u[0]=e=>l(r).spuName=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1 SPU \u540D\u79F0",onKeyup:S(b,["enter"])},null,8,["modelValue"])]),_:1}),a(p,{label:"\u9000\u6B3E\u7F16\u53F7",prop:"no"},{default:t(()=>[a(k,{modelValue:l(r).no,"onUpdate:modelValue":u[1]||(u[1]=e=>l(r).no=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u9000\u6B3E\u7F16\u53F7",onKeyup:S(b,["enter"])},null,8,["modelValue"])]),_:1}),a(p,{label:"\u8BA2\u5355\u7F16\u53F7",prop:"orderNo"},{default:t(()=>[a(k,{modelValue:l(r).orderNo,"onUpdate:modelValue":u[2]||(u[2]=e=>l(r).orderNo=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u7F16\u53F7",onKeyup:S(b,["enter"])},null,8,["modelValue"])]),_:1}),a(p,{label:"\u552E\u540E\u72B6\u6001",prop:"status"},{default:t(()=>[a(N,{modelValue:l(r).status,"onUpdate:modelValue":u[3]||(u[3]=e=>l(r).status=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u552E\u540E\u72B6\u6001"},{default:t(()=>[a(A,{label:"\u5168\u90E8",value:"0"}),(s(!0),c(m,null,h(l(x)(l(y).TRADE_AFTER_SALE_STATUS),e=>(s(),i(A,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"\u552E\u540E\u65B9\u5F0F",prop:"way"},{default:t(()=>[a(N,{modelValue:l(r).way,"onUpdate:modelValue":u[4]||(u[4]=e=>l(r).way=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u552E\u540E\u65B9\u5F0F"},{default:t(()=>[(s(!0),c(m,null,h(l(x)(l(y).TRADE_AFTER_SALE_WAY),e=>(s(),i(A,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"\u552E\u540E\u7C7B\u578B",prop:"type"},{default:t(()=>[a(N,{modelValue:l(r).type,"onUpdate:modelValue":u[5]||(u[5]=e=>l(r).type=e),class:"!w-280px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u552E\u540E\u7C7B\u578B"},{default:t(()=>[(s(!0),c(m,null,h(l(x)(l(y).TRADE_AFTER_SALE_TYPE),e=>(s(),i(A,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:t(()=>[a(q,{modelValue:l(r).createTime,"onUpdate:modelValue":u[6]||(u[6]=e=>l(r).createTime=e),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-260px","end-placeholder":"\u81EA\u5B9A\u4E49\u65F6\u95F4","start-placeholder":"\u81EA\u5B9A\u4E49\u65F6\u95F4",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","default-time"])]),_:1}),a(p,null,{default:t(()=>[a(V,{onClick:b},{default:t(()=>[a(Y,{class:"mr-5px",icon:"ep:search"}),w(" \u641C\u7D22 ")]),_:1}),a(V,{onClick:K},{default:t(()=>[a(Y,{class:"mr-5px",icon:"ep:refresh"}),w(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(z,null,{default:t(()=>[a(G,{modelValue:l(r).status,"onUpdate:modelValue":u[7]||(u[7]=e=>l(r).status=e),onTabClick:W},{default:t(()=>[(s(!0),c(m,null,h(l(L),e=>(s(),i(B,{key:e.label,label:e.label,name:e.value},null,8,["label","name"]))),128))]),_:1},8,["modelValue"]),le((s(),i(J,{data:l(F)},{default:t(()=>[a(n,{align:"center",label:"\u9000\u6B3E\u7F16\u53F7","min-width":"200",prop:"no"}),a(n,{align:"center",label:"\u8BA2\u5355\u7F16\u53F7","min-width":"200",prop:"orderNo"},{default:t(({row:e})=>[a(V,{link:"",type:"primary",onClick:_=>{return d=e.orderId,void R({name:"TradeOrderDetail",params:{orderId:d}});var d}},{default:t(()=>[w(f(e.orderNo),1)]),_:2},1032,["onClick"])]),_:1}),a(n,{label:"\u5546\u54C1\u4FE1\u606F","min-width":"600",prop:"spuName"},{default:t(({row:e})=>[g("div",U,[a(O,{src:e.picUrl,class:"mr-10px h-30px w-30px",onClick:_=>{return d=e.picUrl,void Fe({urlList:[d]});var d}},null,8,["src","onClick"]),g("span",D,f(e.spuName),1),(s(!0),c(m,null,h(e.properties,_=>(s(),i(j,{key:_.propertyId,class:"mr-10px"},{default:t(()=>[w(f(_.propertyName)+": "+f(_.valueName),1)]),_:2},1024))),128))])]),_:1}),a(n,{align:"center",label:"\u8BA2\u5355\u91D1\u989D",prop:"refundPrice"},{default:t(e=>[g("span",null,f(l(te)(e.row.refundPrice))+" \u5143",1)]),_:1}),a(n,{align:"center",label:"\u4E70\u5BB6",prop:"user.nickname"}),a(n,{align:"center",label:"\u7533\u8BF7\u65F6\u95F4",prop:"createTime",width:"180"},{default:t(e=>[g("span",null,f(l(Re)(e.row.createTime)),1)]),_:1}),a(n,{align:"center",label:"\u552E\u540E\u72B6\u6001",width:"100"},{default:t(e=>[a(I,{type:l(y).TRADE_AFTER_SALE_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(n,{align:"center",label:"\u552E\u540E\u65B9\u5F0F"},{default:t(e=>[a(I,{type:l(y).TRADE_AFTER_SALE_WAY,value:e.row.way},null,8,["type","value"])]),_:1}),a(n,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"160"},{default:t(({row:e})=>[a(V,{link:"",type:"primary",onClick:_=>{return d=e.id,void R({name:"TradeAfterSaleDetail",params:{id:d}});var d}},{default:t(()=>[w("\u5904\u7406\u9000\u6B3E")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[X,l(E)]]),a(Q,{limit:l(r).pageSize,"onUpdate:limit":u[8]||(u[8]=e=>l(r).pageSize=e),page:l(r).pageNo,"onUpdate:page":u[9]||(u[9]=e=>l(r).pageNo=e),total:l(C),onPagination:T},null,8,["limit","page","total"])]),_:1})],64)}}})});export{ze as __tla,H as default};

import{d as H,i as I,u as X,r as i,e as j,aS as J,p as Q,X as W,K as Y,o as u,c as Z,f as a,w as e,a as t,L as $,h as m,x as c,v as d,l as aa,F as ea,P as ta,A as la,_ as ra,C as oa,D as na,G as sa,H as _a,I as ia,__tla as ua}from"./index-d2088aec.js";import{_ as ma,__tla as pa}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{_ as ca,__tla as da}from"./index.vue_vue_type_script_setup_true_lang-6baf9e60.js";import{_ as fa,__tla as ya}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import{_ as ha,__tla as ga}from"./ContentWrap.vue_vue_type_script_setup_true_lang-3fd6aef1.js";import{D as ba,__tla as ka}from"./dict-999fbee6.js";import{d as wa,__tla as va}from"./formatTime-c7e0c543.js";import{a as Ca,d as xa,g as Sa,__tla as Va}from"./index-fce005db.js";import{b as Fa}from"./formCreate-a3356cdc.js";import{u as Na,__tla as Ua}from"./useMessage-c5990e2c.js";import{__tla as za}from"./index-9309eb20.js";import"./color-f5b6e279.js";import{__tla as Pa}from"./index-82efac34.js";let P,qa=Promise.all([(()=>{try{return ua}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return Ua}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return Pa}catch{}})()]).then(async()=>{P=H({name:"BpmForm",__name:"index",setup(Aa){const v=Na(),{t:q}=I(),{currentRoute:A,push:B}=X(),h=i(!0),C=i(0),x=i([]),o=j({pageNo:1,pageSize:10,name:null}),S=i(),p=async()=>{h.value=!0;try{const n=await Ca(o);x.value=n.list,C.value=n.total}finally{h.value=!1}},g=()=>{o.pageNo=1,p()},K=()=>{S.value.resetFields(),g()},V=n=>{const r={name:"BpmFormEditor"};typeof n=="number"&&(r.query={id:n}),B(r)},f=i(!1),b=i({rule:[],option:{}});return J(()=>A.value,()=>{p()},{immediate:!0}),Q(()=>{p()}),(n,r)=>{const T=ta,F=la,k=ra,s=oa,L=na,N=ha,_=sa,M=fa,O=_a,R=ca,D=W("form-create"),E=ma,y=Y("hasPermi"),G=ia;return u(),Z(ea,null,[a(N,null,{default:e(()=>[a(L,{ref_key:"queryFormRef",ref:S,inline:!0,model:t(o),class:"-mb-15px","label-width":"68px"},{default:e(()=>[a(F,{label:"\u8868\u5355\u540D",prop:"name"},{default:e(()=>[a(T,{modelValue:t(o).name,"onUpdate:modelValue":r[0]||(r[0]=l=>t(o).name=l),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8868\u5355\u540D",onKeyup:$(g,["enter"])},null,8,["modelValue"])]),_:1}),a(F,null,{default:e(()=>[a(s,{onClick:g},{default:e(()=>[a(k,{class:"mr-5px",icon:"ep:search"}),m(" \u641C\u7D22 ")]),_:1}),a(s,{onClick:K},{default:e(()=>[a(k,{class:"mr-5px",icon:"ep:refresh"}),m(" \u91CD\u7F6E ")]),_:1}),c((u(),d(s,{plain:"",type:"primary",onClick:V},{default:e(()=>[a(k,{class:"mr-5px",icon:"ep:plus"}),m(" \u65B0\u589E ")]),_:1})),[[y,["bpm:form:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(N,null,{default:e(()=>[c((u(),d(O,{data:t(x)},{default:e(()=>[a(_,{align:"center",label:"\u7F16\u53F7",prop:"id"}),a(_,{align:"center",label:"\u8868\u5355\u540D",prop:"name"}),a(_,{align:"center",label:"\u72B6\u6001",prop:"status"},{default:e(l=>[a(M,{type:t(ba).COMMON_STATUS,value:l.row.status},null,8,["type","value"])]),_:1}),a(_,{align:"center",label:"\u5907\u6CE8",prop:"remark"}),a(_,{formatter:t(wa),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},null,8,["formatter"]),a(_,{align:"center",label:"\u64CD\u4F5C"},{default:e(l=>[c((u(),d(s,{link:"",type:"primary",onClick:U=>V(l.row.id)},{default:e(()=>[m(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[y,["bpm:form:update"]]]),c((u(),d(s,{link:"",onClick:U=>(async w=>{const z=await Sa(w);Fa(b,z.conf,z.fields),f.value=!0})(l.row.id)},{default:e(()=>[m(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[y,["bpm:form:query"]]]),c((u(),d(s,{link:"",type:"danger",onClick:U=>(async w=>{try{await v.delConfirm(),await xa(w),v.success(q("common.delSuccess")),await p()}catch{}})(l.row.id)},{default:e(()=>[m(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["bpm:form:delete"]]])]),_:1})]),_:1},8,["data"])),[[G,t(h)]]),a(R,{limit:t(o).pageSize,"onUpdate:limit":r[1]||(r[1]=l=>t(o).pageSize=l),page:t(o).pageNo,"onUpdate:page":r[2]||(r[2]=l=>t(o).pageNo=l),total:t(C),onPagination:p},null,8,["limit","page","total"])]),_:1}),a(E,{modelValue:t(f),"onUpdate:modelValue":r[3]||(r[3]=l=>aa(f)?f.value=l:null),title:"\u8868\u5355\u8BE6\u60C5",width:"800"},{default:e(()=>[a(D,{option:t(b).option,rule:t(b).rule},null,8,["option","rule"])]),_:1},8,["modelValue"])],64)}}})});export{qa as __tla,P as default};
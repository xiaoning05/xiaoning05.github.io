import{d as B,i as J,r as y,e as O,u as Q,p as W,K as X,o as s,c as Y,f as a,w as e,a as r,L as q,h as i,x as p,v as u,t as z,F as Z,P as aa,A as ta,_ as ea,C as ra,D as la,G as oa,H as na,I as ca,__tla as ia}from"./index-d2088aec.js";import{_ as _a,__tla as sa}from"./index.vue_vue_type_script_setup_true_lang-6baf9e60.js";import{_ as ma,__tla as pa}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import{E as ua,__tla as da}from"./el-link-3f427b16.js";import{_ as fa,__tla as ya}from"./ContentWrap.vue_vue_type_script_setup_true_lang-3fd6aef1.js";import{b as N,d as A,__tla as ha}from"./formatTime-c7e0c543.js";import{d as wa}from"./download-20922b56.js";import{g as ga,d as Ca,e as ba,s as ka,__tla as xa}from"./index-2a8c377b.js";import{_ as va,__tla as Na}from"./ContractForm.vue_vue_type_script_setup_true_lang-086218eb.js";import{f as Sa,__tla as Da}from"./formatter-38679f6e.js";import{D as Ua,__tla as Ia}from"./dict-999fbee6.js";import{u as Pa,__tla as Ta}from"./useMessage-c5990e2c.js";import{__tla as Va}from"./index-9309eb20.js";import"./color-f5b6e279.js";import{__tla as Fa}from"./index-82efac34.js";import{__tla as qa}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{__tla as za}from"./index-8fa07f93.js";import{__tla as Aa}from"./index-456c5cde.js";import{__tla as Ka}from"./index-3b1c9cde.js";import{__tla as Ra}from"./index-63130e49.js";import{__tla as Ea}from"./ProductList.vue_vue_type_script_setup_true_lang-60623b80.js";import{__tla as Ga}from"./index-bbc28546.js";import{__tla as Ha}from"./Table.vue_vue_type_style_index_0_scoped_1ee0f9ba_lang-2efd46fd.js";import{__tla as La}from"./tsxHelper-9f8b23eb.js";let K,Ma=Promise.all([(()=>{try{return ia}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ha}catch{}})(),(()=>{try{return xa}catch{}})(),(()=>{try{return Na}catch{}})(),(()=>{try{return Da}catch{}})(),(()=>{try{return Ia}catch{}})(),(()=>{try{return Ta}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return qa}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return Aa}catch{}})(),(()=>{try{return Ka}catch{}})(),(()=>{try{return Ra}catch{}})(),(()=>{try{return Ea}catch{}})(),(()=>{try{return Ga}catch{}})(),(()=>{try{return Ha}catch{}})(),(()=>{try{return La}catch{}})()]).then(async()=>{K=B({name:"CrmContract",__name:"index",setup($a){const h=Pa(),{t:R}=J(),b=y(!0),S=y(0),D=y([]),n=O({pageNo:1,pageSize:10,name:null,customerId:null,businessId:null,orderDate:[],no:null,discountPercent:null,productPrice:null}),U=y(),k=y(!1),d=async()=>{b.value=!0;try{const m=await ga(n);D.value=m.list,S.value=m.total}finally{b.value=!1}},g=()=>{n.pageNo=1,d()},E=()=>{U.value.resetFields(),g()},I=y(),P=(m,c)=>{I.value.open(m,c)},G=async()=>{try{await h.exportConfirm(),k.value=!0;const m=await ba(n);wa.excel(m,"\u5408\u540C.xls")}catch{}finally{k.value=!1}},{push:x}=Q();return W(()=>{d()}),(m,c)=>{const T=aa,v=ta,C=ea,_=ra,H=la,V=fa,l=oa,F=ua,L=ma,M=na,$=_a,f=X("hasPermi"),j=ca;return s(),Y(Z,null,[a(V,null,{default:e(()=>[a(H,{ref_key:"queryFormRef",ref:U,inline:!0,model:r(n),class:"-mb-15px","label-width":"68px"},{default:e(()=>[a(v,{label:"\u5408\u540C\u7F16\u53F7",prop:"no"},{default:e(()=>[a(T,{modelValue:r(n).no,"onUpdate:modelValue":c[0]||(c[0]=t=>r(n).no=t),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u7F16\u53F7",onKeyup:q(g,["enter"])},null,8,["modelValue"])]),_:1}),a(v,{label:"\u5408\u540C\u540D\u79F0",prop:"name"},{default:e(()=>[a(T,{modelValue:r(n).name,"onUpdate:modelValue":c[1]||(c[1]=t=>r(n).name=t),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u540D\u79F0",onKeyup:q(g,["enter"])},null,8,["modelValue"])]),_:1}),a(v,null,{default:e(()=>[a(_,{onClick:g},{default:e(()=>[a(C,{class:"mr-5px",icon:"ep:search"}),i(" \u641C\u7D22 ")]),_:1}),a(_,{onClick:E},{default:e(()=>[a(C,{class:"mr-5px",icon:"ep:refresh"}),i(" \u91CD\u7F6E ")]),_:1}),p((s(),u(_,{type:"primary",onClick:c[2]||(c[2]=t=>P("create"))},{default:e(()=>[a(C,{class:"mr-5px",icon:"ep:plus"}),i(" \u65B0\u589E ")]),_:1})),[[f,["crm:contract:create"]]]),p((s(),u(_,{loading:r(k),plain:"",type:"success",onClick:G},{default:e(()=>[a(C,{class:"mr-5px",icon:"ep:download"}),i(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[f,["crm:contract:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(V,null,{default:e(()=>[p((s(),u(M,{data:r(D),"show-overflow-tooltip":!0,stripe:!0},{default:e(()=>[a(l,{align:"center",fixed:"left",label:"\u5408\u540C\u7F16\u53F7",prop:"no",width:"130"}),a(l,{align:"center",label:"\u5408\u540C\u540D\u79F0",prop:"name",width:"130"}),a(l,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",prop:"customerName",width:"120"},{default:e(t=>[a(F,{underline:!1,type:"primary",onClick:w=>{return o=t.row.customerId,void x({name:"CrmCustomerDetail",params:{id:o}});var o}},{default:e(()=>[i(z(t.row.customerName),1)]),_:2},1032,["onClick"])]),_:1}),a(l,{align:"center",label:"\u5546\u673A\u540D\u79F0",prop:"businessName",width:"130"}),a(l,{align:"center",label:"\u4E0B\u5355\u65F6\u95F4",prop:"orderDate",width:"120",formatter:r(N)},null,8,["formatter"]),a(l,{align:"center",label:"\u5408\u540C\u91D1\u989D",prop:"price",width:"130",formatter:r(Sa)},null,8,["formatter"]),a(l,{align:"center",label:"\u5408\u540C\u5F00\u59CB\u65F6\u95F4",prop:"startTime",width:"120",formatter:r(N)},null,8,["formatter"]),a(l,{align:"center",label:"\u5408\u540C\u7ED3\u675F\u65F6\u95F4",prop:"endTime",width:"120",formatter:r(N)},null,8,["formatter"]),a(l,{align:"center",label:"\u5BA2\u6237\u7B7E\u7EA6\u4EBA",prop:"contactName",width:"130"},{default:e(t=>[a(F,{underline:!1,type:"primary",onClick:w=>{return o=t.row.contactId,void x({name:"CrmContactDetail",params:{id:o}});var o}},{default:e(()=>[i(z(t.row.contactName),1)]),_:2},1032,["onClick"])]),_:1}),a(l,{align:"center",label:"\u516C\u53F8\u7B7E\u7EA6\u4EBA",prop:"signUserName",width:"130"}),a(l,{align:"center",label:"\u5907\u6CE8",prop:"remark",width:"130"}),a(l,{align:"center",label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"120"}),a(l,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"120"}),a(l,{formatter:r(A),align:"center",label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),a(l,{formatter:r(A),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),a(l,{align:"center",fixed:"right",label:"\u5408\u540C\u72B6\u6001",prop:"auditStatus",width:"120"},{default:e(t=>[a(L,{type:r(Ua).CRM_AUDIT_STATUS,value:t.row.auditStatus},null,8,["type","value"])]),_:1}),a(l,{fixed:"right",label:"\u64CD\u4F5C",width:"250"},{default:e(t=>[p((s(),u(_,{link:"",type:"primary",onClick:w=>P("update",t.row.id)},{default:e(()=>[i(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[f,["crm:contract:update"]]]),p((s(),u(_,{link:"",type:"primary",onClick:w=>(async o=>{await h.confirm(`\u60A8\u786E\u5B9A\u63D0\u4EA4\u3010${o.name}\u3011\u5BA1\u6838\u5417\uFF1F`),await ka(o.id),h.success("\u63D0\u4EA4\u5BA1\u6838\u6210\u529F\uFF01"),await d()})(t.row)},{default:e(()=>[i(" \u63D0\u4EA4\u5BA1\u6838 ")]),_:2},1032,["onClick"])),[[f,["crm:contract:update"]]]),p((s(),u(_,{link:"",type:"primary",onClick:w=>{return o=t.row.id,void x({name:"CrmContractDetail",params:{id:o}});var o}},{default:e(()=>[i(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[f,["crm:contract:query"]]]),p((s(),u(_,{link:"",type:"danger",onClick:w=>(async o=>{try{await h.delConfirm(),await Ca(o),h.success(R("common.delSuccess")),await d()}catch{}})(t.row.id)},{default:e(()=>[i(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["crm:contract:delete"]]])]),_:1})]),_:1},8,["data"])),[[j,r(b)]]),a($,{limit:r(n).pageSize,"onUpdate:limit":c[3]||(c[3]=t=>r(n).pageSize=t),page:r(n).pageNo,"onUpdate:page":c[4]||(c[4]=t=>r(n).pageNo=t),total:r(S),onPagination:d},null,8,["limit","page","total"])]),_:1}),a(va,{ref_key:"formRef",ref:I,onSuccess:d},null,512)],64)}}})});export{Ma as __tla,K as default};
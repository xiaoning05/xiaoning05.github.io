import{d as Y,k as Z,r as y,n as $,u as j,p as J,G as O,o as s,c as Q,b as a,e,a as r,H as A,h as i,w as p,q as u,t as F,F as W,L as aa,y as ta,A as ea,B as ra,C as la,E as oa,i as na,v as ca,_ as ia,__tla as _a}from"./index-aaa5adb3.js";import{_ as sa,__tla as ma}from"./index-b47c179c.js";import{_ as pa,__tla as ua}from"./DictTag-1c1088ae.js";import{E as da,__tla as fa}from"./el-link-50478468.js";import{_ as ya,__tla as ha}from"./ContentWrap-04d7f6d1.js";import{b as N,d as R,__tla as wa}from"./formatTime-9c0e8879.js";import{d as ga}from"./download-20922b56.js";import{g as Ca,d as ba,e as ka,s as xa,__tla as va}from"./index-fa70e749.js";import Na,{__tla as Sa}from"./ContractForm-674aa405.js";import{f as Ua,__tla as Da}from"./formatter-4b6b63b7.js";import{D as Ia,__tla as Ta}from"./dict-f2796e71.js";import{u as Va,__tla as Pa}from"./useMessage-873da1e2.js";import{__tla as za}from"./index-c602062a.js";import"./color-f5b6e279.js";import{__tla as Aa}from"./index-5b7dcbf1.js";import{__tla as Fa}from"./Dialog-9a73a39c.js";import{__tla as Ra}from"./index-2eccb211.js";import{__tla as qa}from"./index-c1a6a53a.js";import{__tla as Ea}from"./index-a2708e2e.js";import{__tla as Ga}from"./index-dbe340e2.js";import{__tla as Ka}from"./ProductList-4b3b996d.js";import{__tla as Ma}from"./index-b6c7d721.js";import{__tla as Ba}from"./Table.vue_vue_type_style_index_0_scoped_b4105caf_lang-3103ecab.js";import{__tla as Ha}from"./tsxHelper-bb26e676.js";let q,La=Promise.all([(()=>{try{return _a}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ha}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return Sa}catch{}})(),(()=>{try{return Da}catch{}})(),(()=>{try{return Ta}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return Aa}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return Ra}catch{}})(),(()=>{try{return qa}catch{}})(),(()=>{try{return Ea}catch{}})(),(()=>{try{return Ga}catch{}})(),(()=>{try{return Ka}catch{}})(),(()=>{try{return Ma}catch{}})(),(()=>{try{return Ba}catch{}})(),(()=>{try{return Ha}catch{}})()]).then(async()=>{q=ia(Y({name:"CrmContract",__name:"index",setup(Xa){const h=Va(),{t:E}=Z(),b=y(!0),S=y(0),U=y([]),n=$({pageNo:1,pageSize:10,name:null,customerId:null,businessId:null,orderDate:[],no:null,discountPercent:null,productPrice:null}),D=y(),k=y(!1),d=async()=>{b.value=!0;try{const m=await Ca(n);U.value=m.list,S.value=m.total}finally{b.value=!1}},g=()=>{n.pageNo=1,d()},G=()=>{D.value.resetFields(),g()},I=y(),T=(m,c)=>{I.value.open(m,c)},K=async()=>{try{await h.exportConfirm(),k.value=!0;const m=await ka(n);ga.excel(m,"\u5408\u540C.xls")}catch{}finally{k.value=!1}},{push:x}=j();return J(()=>{d()}),(m,c)=>{const V=aa,v=ta,C=ea,_=ra,M=la,P=ya,l=oa,z=da,B=pa,H=na,L=sa,f=O("hasPermi"),X=ca;return s(),Q(W,null,[a(P,null,{default:e(()=>[a(M,{ref_key:"queryFormRef",ref:D,inline:!0,model:r(n),class:"-mb-15px","label-width":"68px"},{default:e(()=>[a(v,{label:"\u5408\u540C\u7F16\u53F7",prop:"no"},{default:e(()=>[a(V,{modelValue:r(n).no,"onUpdate:modelValue":c[0]||(c[0]=t=>r(n).no=t),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u7F16\u53F7",onKeyup:A(g,["enter"])},null,8,["modelValue"])]),_:1}),a(v,{label:"\u5408\u540C\u540D\u79F0",prop:"name"},{default:e(()=>[a(V,{modelValue:r(n).name,"onUpdate:modelValue":c[1]||(c[1]=t=>r(n).name=t),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u540D\u79F0",onKeyup:A(g,["enter"])},null,8,["modelValue"])]),_:1}),a(v,null,{default:e(()=>[a(_,{onClick:g},{default:e(()=>[a(C,{class:"mr-5px",icon:"ep:search"}),i(" \u641C\u7D22 ")]),_:1}),a(_,{onClick:G},{default:e(()=>[a(C,{class:"mr-5px",icon:"ep:refresh"}),i(" \u91CD\u7F6E ")]),_:1}),p((s(),u(_,{type:"primary",onClick:c[2]||(c[2]=t=>T("create"))},{default:e(()=>[a(C,{class:"mr-5px",icon:"ep:plus"}),i(" \u65B0\u589E ")]),_:1})),[[f,["crm:contract:create"]]]),p((s(),u(_,{loading:r(k),plain:"",type:"success",onClick:K},{default:e(()=>[a(C,{class:"mr-5px",icon:"ep:download"}),i(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[f,["crm:contract:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(P,null,{default:e(()=>[p((s(),u(H,{data:r(U),"show-overflow-tooltip":!0,stripe:!0},{default:e(()=>[a(l,{align:"center",fixed:"left",label:"\u5408\u540C\u7F16\u53F7",prop:"no",width:"130"}),a(l,{align:"center",label:"\u5408\u540C\u540D\u79F0",prop:"name",width:"130"}),a(l,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",prop:"customerName",width:"120"},{default:e(t=>[a(z,{underline:!1,type:"primary",onClick:w=>{return o=t.row.customerId,void x({name:"CrmCustomerDetail",params:{id:o}});var o}},{default:e(()=>[i(F(t.row.customerName),1)]),_:2},1032,["onClick"])]),_:1}),a(l,{align:"center",label:"\u5546\u673A\u540D\u79F0",prop:"businessName",width:"130"}),a(l,{align:"center",label:"\u4E0B\u5355\u65F6\u95F4",prop:"orderDate",width:"120",formatter:r(N)},null,8,["formatter"]),a(l,{align:"center",label:"\u5408\u540C\u91D1\u989D",prop:"price",width:"130",formatter:r(Ua)},null,8,["formatter"]),a(l,{align:"center",label:"\u5408\u540C\u5F00\u59CB\u65F6\u95F4",prop:"startTime",width:"120",formatter:r(N)},null,8,["formatter"]),a(l,{align:"center",label:"\u5408\u540C\u7ED3\u675F\u65F6\u95F4",prop:"endTime",width:"120",formatter:r(N)},null,8,["formatter"]),a(l,{align:"center",label:"\u5BA2\u6237\u7B7E\u7EA6\u4EBA",prop:"contactName",width:"130"},{default:e(t=>[a(z,{underline:!1,type:"primary",onClick:w=>{return o=t.row.contactId,void x({name:"CrmContactDetail",params:{id:o}});var o}},{default:e(()=>[i(F(t.row.contactName),1)]),_:2},1032,["onClick"])]),_:1}),a(l,{align:"center",label:"\u516C\u53F8\u7B7E\u7EA6\u4EBA",prop:"signUserName",width:"130"}),a(l,{align:"center",label:"\u5907\u6CE8",prop:"remark",width:"130"}),a(l,{align:"center",label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"120"}),a(l,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"120"}),a(l,{formatter:r(R),align:"center",label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),a(l,{formatter:r(R),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),a(l,{align:"center",fixed:"right",label:"\u5408\u540C\u72B6\u6001",prop:"auditStatus",width:"120"},{default:e(t=>[a(B,{type:r(Ia).CRM_AUDIT_STATUS,value:t.row.auditStatus},null,8,["type","value"])]),_:1}),a(l,{fixed:"right",label:"\u64CD\u4F5C",width:"250"},{default:e(t=>[p((s(),u(_,{link:"",type:"primary",onClick:w=>T("update",t.row.id)},{default:e(()=>[i(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[f,["crm:contract:update"]]]),p((s(),u(_,{link:"",type:"primary",onClick:w=>(async o=>{await h.confirm(`\u60A8\u786E\u5B9A\u63D0\u4EA4\u3010${o.name}\u3011\u5BA1\u6838\u5417\uFF1F`),await xa(o.id),h.success("\u63D0\u4EA4\u5BA1\u6838\u6210\u529F\uFF01"),await d()})(t.row)},{default:e(()=>[i(" \u63D0\u4EA4\u5BA1\u6838 ")]),_:2},1032,["onClick"])),[[f,["crm:contract:update"]]]),p((s(),u(_,{link:"",type:"primary",onClick:w=>{return o=t.row.id,void x({name:"CrmContractDetail",params:{id:o}});var o}},{default:e(()=>[i(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[f,["crm:contract:query"]]]),p((s(),u(_,{link:"",type:"danger",onClick:w=>(async o=>{try{await h.delConfirm(),await ba(o),h.success(E("common.delSuccess")),await d()}catch{}})(t.row.id)},{default:e(()=>[i(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["crm:contract:delete"]]])]),_:1})]),_:1},8,["data"])),[[X,r(b)]]),a(L,{limit:r(n).pageSize,"onUpdate:limit":c[3]||(c[3]=t=>r(n).pageSize=t),page:r(n).pageNo,"onUpdate:page":c[4]||(c[4]=t=>r(n).pageNo=t),total:r(S),onPagination:d},null,8,["limit","page","total"])]),_:1}),a(Na,{ref_key:"formRef",ref:I,onSuccess:d},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/contract/index.vue"]])});export{La as __tla,q as default};

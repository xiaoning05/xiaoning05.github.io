import{d as P,u as G,r as p,e as H,p as M,o as s,c as v,f as a,w as r,a as t,F as x,q as j,v as C,x as B,h as N,t as T,g as J,y as K,z as L,A as O,D as W,G as Q,H as X,I as Y,__tla as Z}from"./index-d2088aec.js";import{_ as $,__tla as aa}from"./index.vue_vue_type_script_setup_true_lang-6baf9e60.js";import{_ as ta,__tla as ea}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import{E as la,__tla as ra}from"./el-link-3f427b16.js";import{_ as oa,__tla as na}from"./ContentWrap.vue_vue_type_script_setup_true_lang-3fd6aef1.js";import{b as d,d as U,__tla as ia}from"./formatTime-c7e0c543.js";import{g as pa,__tla as sa}from"./index-2a8c377b.js";import{f as ma,__tla as _a}from"./formatter-38679f6e.js";import{D as ua,__tla as ca}from"./dict-999fbee6.js";import{C as da}from"./common-7bc9becf.js";let k,fa=Promise.all([(()=>{try{return Z}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return ca}catch{}})()]).then(async()=>{let f;f=J("div",{class:"pb-5 text-xl"}," \u5373\u5C06\u5230\u671F\u7684\u5408\u540C ",-1),k=P({__name:"EndContract",setup(ha){const{push:h}=G(),m=p(!0),g=p(0),y=p([]),o=H({pageNo:1,pageSize:10,expiryType:1}),S=p(),_=async()=>{m.value=!0;try{const u=await pa(o);y.value=u.list,g.value=u.total}finally{m.value=!1}},D=()=>{o.pageNo=1,_()};return M(()=>{_()}),(u,n)=>{const z=K,I=L,A=O,R=W,w=oa,e=Q,b=la,V=ta,q=X,E=$,F=Y;return s(),v(x,null,[a(w,null,{default:r(()=>[f,a(R,{class:"-mb-15px",model:t(o),ref_key:"queryFormRef",ref:S,inline:!0,"label-width":"68px"},{default:r(()=>[a(A,{label:"\u5230\u671F\u72B6\u6001",prop:"expiryType"},{default:r(()=>[a(I,{modelValue:t(o).expiryType,"onUpdate:modelValue":n[0]||(n[0]=l=>t(o).expiryType=l),class:"!w-240px",placeholder:"\u72B6\u6001",onChange:D},{default:r(()=>[(s(!0),v(x,null,j(t(da),(l,c)=>(s(),C(z,{label:l.label,value:l.value,key:c},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),a(w,null,{default:r(()=>[B((s(),C(q,{data:t(y),"show-overflow-tooltip":!0,stripe:!0},{default:r(()=>[a(e,{align:"center",fixed:"left",label:"\u5408\u540C\u7F16\u53F7",prop:"no",width:"130"}),a(e,{align:"center",label:"\u5408\u540C\u540D\u79F0",prop:"name",width:"130"}),a(e,{align:"center",label:"\u5BA2\u6237\u540D\u79F0",prop:"customerName",width:"120"},{default:r(l=>[a(b,{underline:!1,type:"primary",onClick:c=>{return i=l.row.customerId,void h({name:"CrmCustomerDetail",params:{id:i}});var i}},{default:r(()=>[N(T(l.row.customerName),1)]),_:2},1032,["onClick"])]),_:1}),a(e,{align:"center",label:"\u5546\u673A\u540D\u79F0",prop:"businessName",width:"130"}),a(e,{align:"center",label:"\u4E0B\u5355\u65F6\u95F4",prop:"orderDate",width:"120",formatter:t(d)},null,8,["formatter"]),a(e,{align:"center",label:"\u5408\u540C\u91D1\u989D",prop:"price",width:"130",formatter:t(ma)},null,8,["formatter"]),a(e,{align:"center",label:"\u5408\u540C\u5F00\u59CB\u65F6\u95F4",prop:"startTime",width:"120",formatter:t(d)},null,8,["formatter"]),a(e,{align:"center",label:"\u5408\u540C\u7ED3\u675F\u65F6\u95F4",prop:"endTime",width:"120",formatter:t(d)},null,8,["formatter"]),a(e,{align:"center",label:"\u5BA2\u6237\u7B7E\u7EA6\u4EBA",prop:"contactName",width:"130"},{default:r(l=>[a(b,{underline:!1,type:"primary",onClick:c=>{return i=l.row.contactId,void h({name:"CrmContactDetail",params:{id:i}});var i}},{default:r(()=>[N(T(l.row.contactName),1)]),_:2},1032,["onClick"])]),_:1}),a(e,{align:"center",label:"\u516C\u53F8\u7B7E\u7EA6\u4EBA",prop:"signUserName",width:"130"}),a(e,{align:"center",label:"\u5907\u6CE8",prop:"remark",width:"130"}),a(e,{align:"center",label:"\u8D1F\u8D23\u4EBA",prop:"ownerUserName",width:"120"}),a(e,{align:"center",label:"\u521B\u5EFA\u4EBA",prop:"creatorName",width:"120"}),a(e,{formatter:t(U),align:"center",label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime",width:"180px"},null,8,["formatter"]),a(e,{formatter:t(U),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180px"},null,8,["formatter"]),a(e,{align:"center",fixed:"right",label:"\u5408\u540C\u72B6\u6001",prop:"auditStatus",width:"120"},{default:r(l=>[a(V,{type:t(ua).CRM_AUDIT_STATUS,value:l.row.auditStatus},null,8,["type","value"])]),_:1})]),_:1},8,["data"])),[[F,t(m)]]),a(E,{limit:t(o).pageSize,"onUpdate:limit":n[1]||(n[1]=l=>t(o).pageSize=l),page:t(o).pageNo,"onUpdate:page":n[2]||(n[2]=l=>t(o).pageNo=l),total:t(g),onPagination:_},null,8,["limit","page","total"])]),_:1})],64)}}})});export{k as _,fa as __tla};

import{d as B,k as X,r as o,n as Y,p as Z,G as j,o as _,c as U,b as a,e as r,a as t,F as R,g as H,q as u,w as f,h as y,t as J,f as K,s as L,x as Q,y as W,C as $,E as aa,B as ea,i as ta,v as la,_ as ra,__tla as na}from"./index-b079f499.js";import{_ as oa,__tla as ia}from"./index-749396de.js";import{_ as sa,__tla as pa}from"./DictTag-6d4c3489.js";import{_ as _a,__tla as ca}from"./ContentWrap-0fab5b86.js";import{D as I,__tla as ua}from"./dict-2c56908b.js";import{b as ma,d as da,__tla as fa}from"./formatTime-0805635f.js";import{g as ya,d as ba,__tla as ga}from"./index-7a841430.js";import{g as ha,__tla as wa}from"./index-41e17afa.js";import{R as va}from"./common-7bc9becf.js";import{u as ka,__tla as xa}from"./useMessage-66b9cf03.js";import{__tla as Ca}from"./index-c1a7e444.js";import"./color-f5b6e279.js";import{__tla as Ta}from"./index-3be78f60.js";let N,Sa=Promise.all([(()=>{try{return na}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return xa}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return Ta}catch{}})()]).then(async()=>{let b;b=K("div",{class:"pb-5 text-xl"},"\u5F85\u56DE\u6B3E\u63D0\u9192",-1),N=ra(B({name:"ReceivablePlan",__name:"RemindReceivables",setup(Ua){const g=ka(),{t:M}=X(),m=o(!0),h=o(0),w=o([]),v=o([]),n=Y({pageNo:1,pageSize:10,remindType:1}),z=o();o(!1);const c=async()=>{m.value=!0;try{const d=await ya(n);w.value=d.list,h.value=d.total}finally{m.value=!1}},A=()=>{n.pageNo=1,c()},D=o();return Z(async()=>{await c(),v.value=await ha()}),(d,i)=>{const P=L,V=Q,E=W,q=$,k=_a,l=aa,x=sa,C=ea,F=ta,G=oa,T=j("hasPermi"),O=la;return _(),U(R,null,[a(k,null,{default:r(()=>[b,a(q,{ref_key:"queryFormRef",ref:z,inline:!0,model:t(n),class:"-mb-15px","label-width":"68px"},{default:r(()=>[a(E,{label:"\u5408\u540C\u72B6\u6001",prop:"remindType"},{default:r(()=>[a(V,{modelValue:t(n).remindType,"onUpdate:modelValue":i[0]||(i[0]=e=>t(n).remindType=e),class:"!w-240px",placeholder:"\u72B6\u6001",onChange:A},{default:r(()=>[(_(!0),U(R,null,H(t(va),(e,s)=>(_(),u(P,{label:e.label,value:e.value,key:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),a(k,null,{default:r(()=>[f((_(),u(F,{data:t(w),stripe:!0,"show-overflow-tooltip":!0},{default:r(()=>[a(l,{label:"\u5BA2\u6237\u540D\u79F0",align:"center",prop:"customerId",width:"150px"}),a(l,{label:"\u5408\u540C\u540D\u79F0",align:"center",prop:"contractId",width:"150px"}),a(l,{label:"\u671F\u6570",align:"center",prop:"period"}),a(l,{label:"\u8BA1\u5212\u56DE\u6B3E",align:"center",prop:"price"}),a(l,{label:"\u8BA1\u5212\u56DE\u6B3E\u65E5\u671F",align:"center",prop:"returnTime",formatter:t(ma),width:"180px"},null,8,["formatter"]),a(l,{label:"\u63D0\u524D\u51E0\u5929\u63D0\u9192",align:"center",prop:"remindDays"}),a(l,{label:"\u5B8C\u6210\u72B6\u6001",align:"center",prop:"status"},{default:r(e=>[a(x,{type:t(I).COMMON_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(l,{label:"\u5BA1\u6279\u72B6\u6001",align:"center",prop:"checkStatus",width:"130px"},{default:r(e=>[a(x,{type:t(I).CRM_AUDIT_STATUS,value:e.row.checkStatus},null,8,["type","value"])]),_:1}),a(l,{prop:"ownerUserId",label:"\u8D1F\u8D23\u4EBA",width:"120"},{default:r(e=>{var s;return[y(J((s=t(v).find(p=>p.id===e.row.ownerUserId))==null?void 0:s.nickname),1)]}),_:1}),a(l,{label:"\u663E\u793A\u987A\u5E8F",align:"center",prop:"sort"}),a(l,{label:"\u5907\u6CE8",align:"center",prop:"remark"}),a(l,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:t(da),width:"180px"},null,8,["formatter"]),a(l,{label:"\u64CD\u4F5C",align:"center",width:"130px"},{default:r(e=>[f((_(),u(C,{link:"",type:"primary",onClick:s=>{return p="update",S=e.row.id,void D.value.open(p,S);var p,S}},{default:r(()=>[y(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[T,["crm:receivable-plan:update"]]]),f((_(),u(C,{link:"",type:"danger",onClick:s=>(async p=>{try{await g.delConfirm(),await ba(p),g.success(M("common.delSuccess")),await c()}catch{}})(e.row.id)},{default:r(()=>[y(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[T,["crm:receivable-plan:delete"]]])]),_:1})]),_:1},8,["data"])),[[O,t(m)]]),a(G,{total:t(h),page:t(n).pageNo,"onUpdate:page":i[1]||(i[1]=e=>t(n).pageNo=e),limit:t(n).pageSize,"onUpdate:limit":i[2]||(i[2]=e=>t(n).pageSize=e),onPagination:c},null,8,["total","page","limit"])]),_:1})],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/backlog/tables/RemindReceivables.vue"]])});export{Sa as __tla,N as default};
import{d as O,i as Y,r as s,e as q,p as B,L as H,o as i,c as J,f as e,w as t,a,M as V,h as _,x as m,v as d,F as Q,Q as X,A as Z,C as j,D as W,G as $,H as ee,I as ae,J as le,_ as te,__tla as re}from"./index-f0743f71.js";import{_ as oe,__tla as ne}from"./index-cf7b3541.js";import{_ as ce,__tla as pe}from"./DictTag-4f08045a.js";import{_ as se,__tla as ie}from"./ContentWrap-5acc4fb9.js";import{D as C,__tla as _e}from"./dict-4a9940b3.js";import{b as ue,d as me,__tla as de}from"./formatTime-e6df2ea5.js";import{d as fe}from"./download-20922b56.js";import{g as ye,d as he,e as ge,__tla as be}from"./index-512f7abe.js";import we,{__tla as ve}from"./ReceivableForm-85445c13.js";import{u as xe,__tla as Ce}from"./useMessage-75a00a06.js";import{__tla as ke}from"./index-8beae3df.js";import"./color-f5b6e279.js";import{__tla as Ie}from"./index-a48a5540.js";import{__tla as Se}from"./Dialog-8f786edd.js";import{__tla as Te}from"./index-5f468446.js";let E,Ue=Promise.all([(()=>{try{return re}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return Se}catch{}})(),(()=>{try{return Te}catch{}})()]).then(async()=>{E=te(O({name:"Receivable",__name:"index",setup(Ne){const g=xe(),{t:A}=Y(),b=s(!0),k=s(0),I=s([]),o=q({pageNo:1,pageSize:10,no:null,customerId:null}),S=s(),w=s(!1),u=async()=>{b.value=!0;try{const c=await ye(o);I.value=c.list,k.value=c.total}finally{b.value=!1}},f=()=>{o.pageNo=1,u()},D=()=>{S.value.resetFields(),f()},T=s(),U=(c,n)=>{T.value.open(c,n)},M=async()=>{try{await g.exportConfirm(),w.value=!0;const c=await ge(o);fe.excel(c,"\u56DE\u6B3E.xls")}catch{}finally{w.value=!1}};return B(()=>{u()}),(c,n)=>{const N=X,v=Z,y=j,p=W,F=$,R=se,r=ee,x=ce,P=ae,z=oe,h=H("hasPermi"),G=le;return i(),J(Q,null,[e(R,null,{default:t(()=>[e(F,{class:"-mb-15px",model:a(o),ref_key:"queryFormRef",ref:S,inline:!0,"label-width":"68px"},{default:t(()=>[e(v,{label:"\u56DE\u6B3E\u7F16\u53F7",prop:"no"},{default:t(()=>[e(N,{modelValue:a(o).no,"onUpdate:modelValue":n[0]||(n[0]=l=>a(o).no=l),placeholder:"\u8BF7\u8F93\u5165\u56DE\u6B3E\u7F16\u53F7",clearable:"",onKeyup:V(f,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(v,{label:"\u5BA2\u6237\u540D\u79F0",prop:"customerId"},{default:t(()=>[e(N,{modelValue:a(o).customerId,"onUpdate:modelValue":n[1]||(n[1]=l=>a(o).customerId=l),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u540D\u79F0",clearable:"",onKeyup:V(f,["enter"]),class:"!w-240px"},null,8,["modelValue"])]),_:1}),e(v,null,{default:t(()=>[e(p,{onClick:f},{default:t(()=>[e(y,{icon:"ep:search",class:"mr-5px"}),_(" \u641C\u7D22")]),_:1}),e(p,{onClick:D},{default:t(()=>[e(y,{icon:"ep:refresh",class:"mr-5px"}),_(" \u91CD\u7F6E")]),_:1}),m((i(),d(p,{type:"primary",plain:"",onClick:n[2]||(n[2]=l=>U("create"))},{default:t(()=>[e(y,{icon:"ep:plus",class:"mr-5px"}),_(" \u65B0\u589E ")]),_:1})),[[h,["crm:receivable:create"]]]),m((i(),d(p,{type:"success",plain:"",onClick:M,loading:a(w)},{default:t(()=>[e(y,{icon:"ep:download",class:"mr-5px"}),_(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[h,["crm:receivable:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(R,null,{default:t(()=>[m((i(),d(P,{data:a(I),stripe:!0,"show-overflow-tooltip":!0},{default:t(()=>[e(r,{label:"ID",align:"center",prop:"id"}),e(r,{label:"\u56DE\u6B3E\u7F16\u53F7",align:"center",prop:"no"}),e(r,{label:"\u5BA2\u6237",align:"center",prop:"customerId"}),e(r,{label:"\u5408\u540C",align:"center",prop:"contractId"}),e(r,{label:"\u5BA1\u6279\u72B6\u6001",align:"center",prop:"checkStatus",width:"130px"},{default:t(l=>[e(x,{type:a(C).CRM_AUDIT_STATUS,value:l.row.checkStatus},null,8,["type","value"])]),_:1}),e(r,{label:"\u56DE\u6B3E\u65E5\u671F",align:"center",prop:"returnTime",formatter:a(ue),width:"150px"},null,8,["formatter"]),e(r,{label:"\u56DE\u6B3E\u65B9\u5F0F",align:"center",prop:"returnType",width:"130px"},{default:t(l=>[e(x,{type:a(C).CRM_RECEIVABLE_RETURN_TYPE,value:l.row.returnType},null,8,["type","value"])]),_:1}),e(r,{label:"\u56DE\u6B3E\u91D1\u989D(\u5143)",align:"center",prop:"price"}),e(r,{label:"\u8D1F\u8D23\u4EBA",align:"center",prop:"ownerUserId"}),e(r,{label:"\u6279\u6B21",align:"center",prop:"batchId"}),e(r,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:t(l=>[e(x,{type:a(C).COMMON_STATUS,value:l.row.status},null,8,["type","value"])]),_:1}),e(r,{label:"\u5907\u6CE8",align:"center",prop:"remark"}),e(r,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:a(me),width:"180px"},null,8,["formatter"]),e(r,{label:"\u64CD\u4F5C",align:"center",width:"180px"},{default:t(l=>[m((i(),d(p,{link:"",type:"primary",onClick:K=>U("update",l.row.id)},{default:t(()=>[_(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[h,["crm:receivable:update"]]]),m((i(),d(p,{link:"",type:"danger",onClick:K=>(async L=>{try{await g.delConfirm(),await he(L),g.success(A("common.delSuccess")),await u()}catch{}})(l.row.id)},{default:t(()=>[_(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[h,["crm:receivable:delete"]]])]),_:1})]),_:1},8,["data"])),[[G,a(b)]]),e(z,{total:a(k),page:a(o).pageNo,"onUpdate:page":n[3]||(n[3]=l=>a(o).pageNo=l),limit:a(o).pageSize,"onUpdate:limit":n[4]||(n[4]=l=>a(o).pageSize=l),onPagination:u},null,8,["total","page","limit"])]),_:1}),e(we,{ref_key:"formRef",ref:T,onSuccess:u},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/receivable/index.vue"]])});export{Ue as __tla,E as default};

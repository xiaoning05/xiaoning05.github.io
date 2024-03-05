import{d as B,i as G,r as i,e as I,o as c,v,w as l,f as e,a,h as V,x as J,c as O,F as T,q as L,t as Q,l as R,Q as X,A as Y,j as Z,ai as z,aj as H,c0 as K,k as W,G as $,D as ee,J as le,_ as ae,__tla as oe}from"./index-f0743f71.js";import{_ as te,__tla as de}from"./Dialog-8f786edd.js";import{a as ue,D as re,__tla as se}from"./dict-4a9940b3.js";import{S as b,__tla as ne}from"./index-8447da2a.js";import{C as pe}from"./constants-99751ef9.js";import{u as me,__tla as ie}from"./useMessage-75a00a06.js";let A,ce=Promise.all([(()=>{try{return oe}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return ie}catch{}})()]).then(async()=>{A=ae(B({name:"SupplierForm",__name:"SupplierForm",emits:["success"],setup(_e,{expose:N,emit:g}){const{t:_}=G(),h=me(),p=i(!1),k=i(""),m=i(!1),x=i(""),d=i({id:void 0,name:void 0,contact:void 0,mobile:void 0,telephone:void 0,email:void 0,fax:void 0,remark:void 0,status:void 0,sort:void 0,taxNo:void 0,taxPercent:void 0,bankName:void 0,bankAccount:void 0,bankAddress:void 0}),S=I({name:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u5F00\u542F\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],sort:[{required:!0,message:"\u6392\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),f=i();N({open:async(n,o)=>{if(p.value=!0,k.value=_("action."+n),x.value=n,C(),o){m.value=!0;try{d.value=await b.getSupplier(o)}finally{m.value=!1}}}});const w=g,P=async()=>{await f.value.validate(),m.value=!0;try{const n=d.value;x.value==="create"?(await b.createSupplier(n),h.success(_("common.createSuccess"))):(await b.updateSupplier(n),h.success(_("common.updateSuccess"))),p.value=!1,w("success")}finally{m.value=!1}},C=()=>{var n;d.value={id:void 0,name:void 0,contact:void 0,mobile:void 0,telephone:void 0,email:void 0,fax:void 0,remark:void 0,status:pe.ENABLE,sort:void 0,taxNo:void 0,taxPercent:void 0,bankName:void 0,bankAccount:void 0,bankAddress:void 0},(n=f.value)==null||n.resetFields()};return(n,o)=>{const s=X,u=Y,r=Z,F=z,q=H,y=K,D=W,M=$,U=ee,E=te,j=le;return c(),v(E,{title:a(k),modelValue:a(p),"onUpdate:modelValue":o[15]||(o[15]=t=>R(p)?p.value=t:null)},{footer:l(()=>[e(U,{onClick:P,type:"primary",disabled:a(m)},{default:l(()=>[V("\u786E \u5B9A")]),_:1},8,["disabled"]),e(U,{onClick:o[14]||(o[14]=t=>p.value=!1)},{default:l(()=>[V("\u53D6 \u6D88")]),_:1})]),default:l(()=>[J((c(),v(M,{ref_key:"formRef",ref:f,model:a(d),rules:a(S),"label-width":"100px"},{default:l(()=>[e(D,{gutter:20},{default:l(()=>[e(r,{span:12},{default:l(()=>[e(u,{label:"\u540D\u79F0",prop:"name"},{default:l(()=>[e(s,{modelValue:a(d).name,"onUpdate:modelValue":o[0]||(o[0]=t=>a(d).name=t),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(u,{label:"\u8054\u7CFB\u4EBA",prop:"contact"},{default:l(()=>[e(s,{modelValue:a(d).contact,"onUpdate:modelValue":o[1]||(o[1]=t=>a(d).contact=t),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(u,{label:"\u624B\u673A\u53F7\u7801",prop:"mobile"},{default:l(()=>[e(s,{modelValue:a(d).mobile,"onUpdate:modelValue":o[2]||(o[2]=t=>a(d).mobile=t),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(u,{label:"\u8054\u7CFB\u7535\u8BDD",prop:"telephone"},{default:l(()=>[e(s,{modelValue:a(d).telephone,"onUpdate:modelValue":o[3]||(o[3]=t=>a(d).telephone=t),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(u,{label:"\u7535\u5B50\u90AE\u7BB1",prop:"email"},{default:l(()=>[e(s,{modelValue:a(d).email,"onUpdate:modelValue":o[4]||(o[4]=t=>a(d).email=t),placeholder:"\u8BF7\u8F93\u5165\u7535\u5B50\u90AE\u7BB1"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(u,{label:"\u4F20\u771F",prop:"fax"},{default:l(()=>[e(s,{modelValue:a(d).fax,"onUpdate:modelValue":o[5]||(o[5]=t=>a(d).fax=t),placeholder:"\u8BF7\u8F93\u5165\u4F20\u771F"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(u,{label:"\u5F00\u542F\u72B6\u6001",prop:"status"},{default:l(()=>[e(q,{modelValue:a(d).status,"onUpdate:modelValue":o[6]||(o[6]=t=>a(d).status=t)},{default:l(()=>[(c(!0),O(T,null,L(a(ue)(a(re).COMMON_STATUS),t=>(c(),v(F,{key:t.value,label:t.value},{default:l(()=>[V(Q(t.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(u,{label:"\u6392\u5E8F",prop:"sort"},{default:l(()=>[e(y,{modelValue:a(d).sort,"onUpdate:modelValue":o[7]||(o[7]=t=>a(d).sort=t),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",class:"!w-1/1",precision:0},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(u,{label:"\u7EB3\u7A0E\u4EBA\u8BC6\u522B\u53F7",prop:"taxNo"},{default:l(()=>[e(s,{modelValue:a(d).taxNo,"onUpdate:modelValue":o[8]||(o[8]=t=>a(d).taxNo=t),placeholder:"\u8BF7\u8F93\u5165\u7EB3\u7A0E\u4EBA\u8BC6\u522B\u53F7"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(u,{label:"\u7A0E\u7387(%)",prop:"taxPercent"},{default:l(()=>[e(y,{modelValue:a(d).taxPercent,"onUpdate:modelValue":o[9]||(o[9]=t=>a(d).taxPercent=t),min:0,precision:2,placeholder:"\u8BF7\u8F93\u5165\u7A0E\u7387",class:"!w-1/1"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(u,{label:"\u5F00\u6237\u884C",prop:"bankName"},{default:l(()=>[e(s,{modelValue:a(d).bankName,"onUpdate:modelValue":o[10]||(o[10]=t=>a(d).bankName=t),placeholder:"\u8BF7\u8F93\u5165\u5F00\u6237\u884C"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(u,{label:"\u5F00\u6237\u8D26\u53F7",prop:"bankAccount"},{default:l(()=>[e(s,{modelValue:a(d).bankAccount,"onUpdate:modelValue":o[11]||(o[11]=t=>a(d).bankAccount=t),placeholder:"\u8BF7\u8F93\u5165\u5F00\u6237\u8D26\u53F7"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(u,{label:"\u5F00\u6237\u5730\u5740",prop:"bankAddress"},{default:l(()=>[e(s,{modelValue:a(d).bankAddress,"onUpdate:modelValue":o[12]||(o[12]=t=>a(d).bankAddress=t),placeholder:"\u8BF7\u8F93\u5165\u5F00\u6237\u5730\u5740"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:24},{default:l(()=>[e(u,{label:"\u5907\u6CE8",prop:"remark"},{default:l(()=>[e(s,{type:"textarea",modelValue:a(d).remark,"onUpdate:modelValue":o[13]||(o[13]=t=>a(d).remark=t),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[j,a(m)]])]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/purchase/supplier/SupplierForm.vue"]])});export{ce as __tla,A as default};

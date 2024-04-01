import{d as J,dT as Q,k as W,r as i,n as X,p as Y,D as Z,o as n,c as M,b as a,e,a as t,G as aa,F as A,g as ea,q as p,h as c,w as m,$ as la,ak as ta,dU as E,K as ra,y as oa,s as sa,x as na,_ as ca,A as ua,B as _a,E as ia,i as pa,v as ma,__tla as da}from"./index-34f06ebd.js";import{_ as fa,__tla as ya}from"./DictTag.vue_vue_type_script_lang-942df0b2.js";import{_ as ha,__tla as wa}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{_ as va,__tla as ka}from"./index-0c6b185f.js";import{a as ba,D as B,__tla as Ca}from"./dict-e142e39a.js";import{h as xa}from"./tree-82bb3b99.js";import{b as Sa,d as Ua,__tla as Oa}from"./index-97882b9e.js";import{_ as Ra,__tla as Ta}from"./MenuForm.vue_vue_type_script_setup_true_lang-e02b1d3a.js";import{u as Va,__tla as ga}from"./useMessage-7a5ab7ef.js";import"./color-f5b6e279.js";import{__tla as Ma}from"./index-460c50ff.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as Aa}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{__tla as Ea}from"./index-f8693880.js";import{__tla as Ba}from"./el-tree-select-45b5cb50.js";import"./constants-99751ef9.js";let F,Fa=Promise.all([(()=>{try{return da}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return Oa}catch{}})(),(()=>{try{return Ta}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return Ma}catch{}})(),(()=>{try{return Aa}catch{}})(),(()=>{try{return Ea}catch{}})(),(()=>{try{return Ba}catch{}})()]).then(async()=>{F=J({name:"SystemMenu",__name:"index",setup(Ka){const{wsCache:U}=Q(),{t:K}=W(),w=Va(),v=i(!0),O=i([]),u=X({name:void 0,status:void 0}),R=i(),k=i(!1),b=i(!0),d=async()=>{v.value=!0;try{const f=await Sa(u);O.value=xa(f)}finally{v.value=!1}},C=()=>{d()},N=()=>{R.value.resetFields(),C()},T=i(),x=(f,r,y)=>{T.value.open(f,r,y)},q=()=>{b.value=!1,k.value=!k.value,ta(()=>{b.value=!0})},D=async()=>{try{await w.confirm("\u5373\u5C06\u66F4\u65B0\u7F13\u5B58\u5237\u65B0\u6D4F\u89C8\u5668\uFF01","\u5237\u65B0\u83DC\u5355\u7F13\u5B58"),U.delete(E.USER),U.delete(E.ROLE_ROUTERS),location.reload()}catch{}};return Y(()=>{d()}),(f,r)=>{const y=va,P=ra,S=oa,z=sa,G=na,_=ca,o=ua,L=_a,V=ha,s=ia,$=fa,j=pa,h=Z("hasPermi"),H=ma;return n(),M(A,null,[a(y,{title:"\u529F\u80FD\u6743\u9650",url:"https://doc.iocoder.cn/resource-permission"}),a(y,{title:"\u83DC\u5355\u8DEF\u7531",url:"https://doc.iocoder.cn/vue3/route/"}),a(V,null,{default:e(()=>[a(L,{ref_key:"queryFormRef",ref:R,inline:!0,model:t(u),class:"-mb-15px","label-width":"68px"},{default:e(()=>[a(S,{label:"\u83DC\u5355\u540D\u79F0",prop:"name"},{default:e(()=>[a(P,{modelValue:t(u).name,"onUpdate:modelValue":r[0]||(r[0]=l=>t(u).name=l),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",onKeyup:aa(C,["enter"])},null,8,["modelValue"])]),_:1}),a(S,{label:"\u72B6\u6001",prop:"status"},{default:e(()=>[a(G,{modelValue:t(u).status,"onUpdate:modelValue":r[1]||(r[1]=l=>t(u).status=l),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u83DC\u5355\u72B6\u6001"},{default:e(()=>[(n(!0),M(A,null,ea(t(ba)(t(B).COMMON_STATUS),l=>(n(),p(z,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(S,null,{default:e(()=>[a(o,{onClick:C},{default:e(()=>[a(_,{class:"mr-5px",icon:"ep:search"}),c(" \u641C\u7D22 ")]),_:1}),a(o,{onClick:N},{default:e(()=>[a(_,{class:"mr-5px",icon:"ep:refresh"}),c(" \u91CD\u7F6E ")]),_:1}),m((n(),p(o,{plain:"",type:"primary",onClick:r[2]||(r[2]=l=>x("create"))},{default:e(()=>[a(_,{class:"mr-5px",icon:"ep:plus"}),c(" \u65B0\u589E ")]),_:1})),[[h,["system:menu:create"]]]),a(o,{plain:"",type:"danger",onClick:q},{default:e(()=>[a(_,{class:"mr-5px",icon:"ep:sort"}),c(" \u5C55\u5F00/\u6298\u53E0 ")]),_:1}),a(o,{plain:"",onClick:D},{default:e(()=>[a(_,{class:"mr-5px",icon:"ep:refresh"}),c(" \u5237\u65B0\u83DC\u5355\u7F13\u5B58 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(V,null,{default:e(()=>[t(b)?m((n(),p(j,{key:0,data:t(O),"default-expand-all":t(k),"row-key":"id"},{default:e(()=>[a(s,{"show-overflow-tooltip":!0,label:"\u83DC\u5355\u540D\u79F0",prop:"name",width:"250"}),a(s,{align:"center",label:"\u56FE\u6807",prop:"icon",width:"100"},{default:e(l=>[a(_,{icon:l.row.icon},null,8,["icon"])]),_:1}),a(s,{label:"\u6392\u5E8F",prop:"sort",width:"60"}),a(s,{"show-overflow-tooltip":!0,label:"\u6743\u9650\u6807\u8BC6",prop:"permission"}),a(s,{"show-overflow-tooltip":!0,label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"}),a(s,{"show-overflow-tooltip":!0,label:"\u7EC4\u4EF6\u540D\u79F0",prop:"componentName"}),a(s,{label:"\u72B6\u6001",prop:"status",width:"80"},{default:e(l=>[a($,{type:t(B).COMMON_STATUS,value:l.row.status},null,8,["type","value"])]),_:1}),a(s,{align:"center",label:"\u64CD\u4F5C"},{default:e(l=>[m((n(),p(o,{link:"",type:"primary",onClick:g=>x("update",l.row.id)},{default:e(()=>[c(" \u4FEE\u6539 ")]),_:2},1032,["onClick"])),[[h,["system:menu:update"]]]),m((n(),p(o,{link:"",type:"primary",onClick:g=>x("create",void 0,l.row.id)},{default:e(()=>[c(" \u65B0\u589E ")]),_:2},1032,["onClick"])),[[h,["system:menu:create"]]]),m((n(),p(o,{link:"",type:"danger",onClick:g=>(async I=>{try{await w.delConfirm(),await Ua(I),w.success(K("common.delSuccess")),await d()}catch{}})(l.row.id)},{default:e(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[h,["system:menu:delete"]]])]),_:1})]),_:1},8,["data","default-expand-all"])),[[H,t(v)]]):la("",!0)]),_:1}),a(Ra,{ref_key:"formRef",ref:T,onSuccess:d},null,512)],64)}}})});export{Fa as __tla,F as default};
import{d as X,r as T,n as Z,aR as H,p as K,a as t,o,q as f,e,b as l,c as I,g as C,F as v,f as p,h as s,a0 as E,s as Q,x as $,y as ee,a9 as le,A as ae,az as te,L as ne,B as ue,ab as oe,af as de,ag as se,C as me,_ as pe,__tla as re}from"./index-aaa5adb3.js";import{E as _e,a as ce,b as fe,__tla as ie}from"./el-dropdown-item-cf17d21b.js";import{E as be,__tla as ye}from"./el-tree-select-49584d8b.js";import{a as U,D as k,__tla as Ve}from"./dict-f2796e71.js";import{h as Ie}from"./tree-02f455f9.js";import{a as Ce,__tla as ve}from"./index-873d342e.js";import{g as Ne,__tla as he}from"./index-ed1aa8d7.js";import{u as Te,__tla as ge}from"./useMessage-873da1e2.js";import{r,__tla as Ee}from"./formRules-d4770b7e.js";let D,Ue=Promise.all([(()=>{try{return re}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return Ee}catch{}})()]).then(async()=>{let P,q,M;P=p("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),q=p("h4",{class:"form-header"},"\u6811\u8868\u4FE1\u606F",-1),M=p("h4",{class:"form-header"},"\u4E3B\u8868\u4FE1\u606F",-1),D=pe(X({name:"InfraCodegenGenerateInfoForm",__name:"GenerateInfoForm",props:{table:{type:Object,default:()=>null},columns:{type:Array,default:()=>null}},setup(G,{expose:R}){Te();const h=G,J=T(),n=T({templateType:null,frontType:null,scene:null,moduleName:"",businessName:"",className:"",classComment:"",parentMenuId:null,genPath:"",genType:"",masterTableId:void 0,subJoinColumnId:void 0,subJoinMany:void 0,treeParentColumnId:void 0,treeNameColumnId:void 0}),S=Z({templateType:[r],frontType:[r],scene:[r],moduleName:[r],businessName:[r],businessPackage:[r],className:[r],classComment:[r],masterTableId:[r],subJoinColumnId:[r],subJoinMany:[r],treeParentColumnId:[r],treeNameColumnId:[r]}),F=T([]),w=T([]),x={label:"name"};return H(()=>h.table,async i=>{i&&(n.value=i,i.dataSourceConfigId>=0&&(F.value=await Ce(n.value.dataSourceConfigId)))},{deep:!0,immediate:!0}),K(async()=>{try{const i=await Ne();w.value=Ie(i)}catch{}}),R({validate:async()=>{var i;return(i=t(J))==null?void 0:i.validate()}}),(i,u)=>{const b=Q,y=$,m=ee,d=le,_=ae,c=te,O=be,N=ne,Y=ue,L=_e,j=ce,z=fe,g=oe,A=de,B=se,W=me;return o(),f(W,{ref_key:"formRef",ref:J,model:t(n),rules:t(S),"label-width":"150px"},{default:e(()=>[l(g,null,{default:e(()=>[l(d,{span:12},{default:e(()=>[l(m,{label:"\u751F\u6210\u6A21\u677F",prop:"templateType"},{default:e(()=>[l(y,{modelValue:t(n).templateType,"onUpdate:modelValue":u[0]||(u[0]=a=>t(n).templateType=a)},{default:e(()=>[(o(!0),I(v,null,C(t(U)(t(k).INFRA_CODEGEN_TEMPLATE_TYPE),a=>(o(),f(b,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:e(()=>[l(m,{label:"\u524D\u7AEF\u7C7B\u578B",prop:"frontType"},{default:e(()=>[l(y,{modelValue:t(n).frontType,"onUpdate:modelValue":u[1]||(u[1]=a=>t(n).frontType=a)},{default:e(()=>[(o(!0),I(v,null,C(t(U)(t(k).INFRA_CODEGEN_FRONT_TYPE),a=>(o(),f(b,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:e(()=>[l(m,{label:"\u751F\u6210\u573A\u666F",prop:"scene"},{default:e(()=>[l(y,{modelValue:t(n).scene,"onUpdate:modelValue":u[2]||(u[2]=a=>t(n).scene=a)},{default:e(()=>[(o(!0),I(v,null,C(t(U)(t(k).INFRA_CODEGEN_SCENE),a=>(o(),f(b,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:e(()=>[l(m,null,{label:e(()=>[p("span",null,[s(" \u4E0A\u7EA7\u83DC\u5355 "),l(c,{content:"\u5206\u914D\u5230\u6307\u5B9A\u83DC\u5355\u4E0B\uFF0C\u4F8B\u5982 \u7CFB\u7EDF\u7BA1\u7406",placement:"top"},{default:e(()=>[l(_,{icon:"ep:question-filled"})]),_:1})])]),default:e(()=>[l(O,{modelValue:t(n).parentMenuId,"onUpdate:modelValue":u[3]||(u[3]=a=>t(n).parentMenuId=a),data:t(w),props:x,"check-strictly":"","node-key":"id",placeholder:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u83DC\u5355"},null,8,["modelValue","data"])]),_:1})]),_:1}),l(d,{span:12},{default:e(()=>[l(m,{prop:"moduleName"},{label:e(()=>[p("span",null,[s(" \u6A21\u5757\u540D "),l(c,{content:"\u6A21\u5757\u540D\uFF0C\u5373\u4E00\u7EA7\u76EE\u5F55\uFF0C\u4F8B\u5982 system\u3001infra\u3001tool \u7B49\u7B49",placement:"top"},{default:e(()=>[l(_,{icon:"ep:question-filled"})]),_:1})])]),default:e(()=>[l(N,{modelValue:t(n).moduleName,"onUpdate:modelValue":u[4]||(u[4]=a=>t(n).moduleName=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:e(()=>[l(m,{prop:"businessName"},{label:e(()=>[p("span",null,[s(" \u4E1A\u52A1\u540D "),l(c,{content:"\u4E1A\u52A1\u540D\uFF0C\u5373\u4E8C\u7EA7\u76EE\u5F55\uFF0C\u4F8B\u5982 user\u3001permission\u3001dict \u7B49\u7B49",placement:"top"},{default:e(()=>[l(_,{icon:"ep:question-filled"})]),_:1})])]),default:e(()=>[l(N,{modelValue:t(n).businessName,"onUpdate:modelValue":u[5]||(u[5]=a=>t(n).businessName=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:e(()=>[l(m,{prop:"className"},{label:e(()=>[p("span",null,[s(" \u7C7B\u540D\u79F0 "),l(c,{content:"\u7C7B\u540D\u79F0\uFF08\u9996\u5B57\u6BCD\u5927\u5199\uFF09\uFF0C\u4F8B\u5982SysUser\u3001SysMenu\u3001SysDictData \u7B49\u7B49",placement:"top"},{default:e(()=>[l(_,{icon:"ep:question-filled"})]),_:1})])]),default:e(()=>[l(N,{modelValue:t(n).className,"onUpdate:modelValue":u[6]||(u[6]=a=>t(n).className=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:e(()=>[l(m,{prop:"classComment"},{label:e(()=>[p("span",null,[s(" \u7C7B\u63CF\u8FF0 "),l(c,{content:"\u7528\u4F5C\u7C7B\u63CF\u8FF0\uFF0C\u4F8B\u5982 \u7528\u6237",placement:"top"},{default:e(()=>[l(_,{icon:"ep:question-filled"})]),_:1})])]),default:e(()=>[l(N,{modelValue:t(n).classComment,"onUpdate:modelValue":u[7]||(u[7]=a=>t(n).classComment=a)},null,8,["modelValue"])]),_:1})]),_:1}),t(n).genType==="1"?(o(),f(d,{key:0,span:24},{default:e(()=>[l(m,{prop:"genPath"},{label:e(()=>[p("span",null,[s(" \u81EA\u5B9A\u4E49\u8DEF\u5F84 "),l(c,{content:"\u586B\u5199\u78C1\u76D8\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u82E5\u4E0D\u586B\u5199\uFF0C\u5219\u751F\u6210\u5230\u5F53\u524DWeb\u9879\u76EE\u4E0B",placement:"top"},{default:e(()=>[l(_,{icon:"ep:question-filled"})]),_:1})])]),default:e(()=>[l(N,{modelValue:t(n).genPath,"onUpdate:modelValue":u[9]||(u[9]=a=>t(n).genPath=a)},{append:e(()=>[l(z,null,{dropdown:e(()=>[l(j,null,{default:e(()=>[l(L,{onClick:u[8]||(u[8]=a=>t(n).genPath="/")},{default:e(()=>[s(" \u6062\u590D\u9ED8\u8BA4\u7684\u751F\u6210\u57FA\u7840\u8DEF\u5F84 ")]),_:1})]),_:1})]),default:e(()=>[l(Y,{type:"primary"},{default:e(()=>[s(" \u6700\u8FD1\u8DEF\u5F84\u5FEB\u901F\u9009\u62E9 "),P]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):E("",!0)]),_:1}),t(n).templateType==2?(o(),f(g,{key:0},{default:e(()=>[l(d,{span:24},{default:e(()=>[q]),_:1}),l(d,{span:12},{default:e(()=>[l(m,{prop:"treeParentColumnId"},{label:e(()=>[p("span",null,[s(" \u7236\u7F16\u53F7\u5B57\u6BB5 "),l(c,{content:"\u6811\u663E\u793A\u7684\u7236\u7F16\u7801\u5B57\u6BB5\u540D\uFF0C \u5982\uFF1Aparent_Id",placement:"top"},{default:e(()=>[l(_,{icon:"ep:question-filled"})]),_:1})])]),default:e(()=>[l(y,{modelValue:t(n).treeParentColumnId,"onUpdate:modelValue":u[10]||(u[10]=a=>t(n).treeParentColumnId=a),placeholder:"\u8BF7\u9009\u62E9"},{default:e(()=>[(o(!0),I(v,null,C(h.columns,(a,V)=>(o(),f(b,{key:V,label:a.columnName+"\uFF1A"+a.columnComment,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:e(()=>[l(m,{prop:"treeNameColumnId"},{label:e(()=>[p("span",null,[s(" \u6811\u540D\u79F0\u5B57\u6BB5 "),l(c,{content:"\u6811\u8282\u70B9\u7684\u663E\u793A\u540D\u79F0\u5B57\u6BB5\u540D\uFF0C \u5982\uFF1Adept_name",placement:"top"},{default:e(()=>[l(_,{icon:"ep:question-filled"})]),_:1})])]),default:e(()=>[l(y,{modelValue:t(n).treeNameColumnId,"onUpdate:modelValue":u[11]||(u[11]=a=>t(n).treeNameColumnId=a),placeholder:"\u8BF7\u9009\u62E9"},{default:e(()=>[(o(!0),I(v,null,C(h.columns,(a,V)=>(o(),f(b,{key:V,label:a.columnName+"\uFF1A"+a.columnComment,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})):E("",!0),t(n).templateType==15?(o(),f(g,{key:1},{default:e(()=>[l(d,{span:24},{default:e(()=>[M]),_:1}),l(d,{span:12},{default:e(()=>[l(m,{prop:"masterTableId"},{label:e(()=>[p("span",null,[s(" \u5173\u8054\u7684\u4E3B\u8868 "),l(c,{content:"\u5173\u8054\u4E3B\u8868\uFF08\u7236\u8868\uFF09\u7684\u8868\u540D\uFF0C \u5982\uFF1Asystem_user",placement:"top"},{default:e(()=>[l(_,{icon:"ep:question-filled"})]),_:1})])]),default:e(()=>[l(y,{modelValue:t(n).masterTableId,"onUpdate:modelValue":u[12]||(u[12]=a=>t(n).masterTableId=a),placeholder:"\u8BF7\u9009\u62E9"},{default:e(()=>[(o(!0),I(v,null,C(t(F),(a,V)=>(o(),f(b,{key:V,label:a.tableName+"\uFF1A"+a.tableComment,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:e(()=>[l(m,{prop:"subJoinColumnId"},{label:e(()=>[p("span",null,[s(" \u5B50\u8868\u5173\u8054\u7684\u5B57\u6BB5 "),l(c,{content:"\u5B50\u8868\u5173\u8054\u7684\u5B57\u6BB5\uFF0C \u5982\uFF1Auser_id",placement:"top"},{default:e(()=>[l(_,{icon:"ep:question-filled"})]),_:1})])]),default:e(()=>[l(y,{modelValue:t(n).subJoinColumnId,"onUpdate:modelValue":u[13]||(u[13]=a=>t(n).subJoinColumnId=a),placeholder:"\u8BF7\u9009\u62E9"},{default:e(()=>[(o(!0),I(v,null,C(h.columns,(a,V)=>(o(),f(b,{key:V,label:a.columnName+"\uFF1A"+a.columnComment,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(d,{span:12},{default:e(()=>[l(m,{prop:"subJoinMany"},{label:e(()=>[p("span",null,[s(" \u5173\u8054\u5173\u7CFB "),l(c,{content:"\u4E3B\u8868\u4E0E\u5B50\u8868\u7684\u5173\u8054\u5173\u7CFB",placement:"top"},{default:e(()=>[l(_,{icon:"ep:question-filled"})]),_:1})])]),default:e(()=>[l(B,{modelValue:t(n).subJoinMany,"onUpdate:modelValue":u[14]||(u[14]=a=>t(n).subJoinMany=a),placeholder:"\u8BF7\u9009\u62E9"},{default:e(()=>[l(A,{label:!0},{default:e(()=>[s("\u4E00\u5BF9\u591A")]),_:1}),l(A,{label:!1},{default:e(()=>[s("\u4E00\u5BF9\u4E00")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})):E("",!0)]),_:1},8,["model","rules"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/infra/codegen/components/GenerateInfoForm.vue"]])});export{Ue as __tla,D as default};
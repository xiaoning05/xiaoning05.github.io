import{d as f,r as p,aT as v,o as h,v as y,w as a,f as e,a as l,h as r,t as _,av as i,_ as g,__tla as I}from"./index-f0743f71.js";import{E as x,a as w,__tla as E}from"./el-descriptions-item-73ac4081.js";import{__tla as A}from"./Descriptions.vue_vue_type_style_index_0_scoped_aee191e8_lang-7e2f4691.js";import{D as n,__tla as U}from"./DescriptionsItemLabel-3be0c682.js";import{g as D,__tla as N}from"./index-4bcc777d.js";import{__tla as P}from"./DictTag-4f08045a.js";import"./color-f5b6e279.js";import{__tla as R}from"./dict-4a9940b3.js";let m,q=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return U}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return P}catch{}})(),(()=>{try{return R}catch{}})()]).then(async()=>{m=g(f({__name:"UserAccountInfo",props:{user:{type:null,required:!0}},setup(b){const c=b,u={balance:0,totalExpense:0,totalRecharge:0},o=p(u);return v(()=>c.user.id,()=>(async()=>{if(!c.user.id)return void(o.value=u);const s={userId:c.user.id};o.value=await D(s)||u})(),{immediate:!0}),(s,C)=>{const t=x,d=w;return h(),y(d,{column:2},{default:a(()=>[e(t,null,{label:a(()=>[e(l(n),{label:" \u7B49\u7EA7 ",icon:"svg-icon:member_level"})]),default:a(()=>[r(" "+_(s.user.levelName||"\u65E0"),1)]),_:1}),e(t,null,{label:a(()=>[e(l(n),{label:" \u6210\u957F\u503C ",icon:"ep:suitcase"})]),default:a(()=>[r(" "+_(s.user.experience||0),1)]),_:1}),e(t,null,{label:a(()=>[e(l(n),{label:" \u5F53\u524D\u79EF\u5206 ",icon:"ep:coin"})]),default:a(()=>[r(" "+_(s.user.point||0),1)]),_:1}),e(t,null,{label:a(()=>[e(l(n),{label:" \u603B\u79EF\u5206 ",icon:"ep:coin"})]),default:a(()=>[r(" "+_(s.user.totalPoint||0),1)]),_:1}),e(t,null,{label:a(()=>[e(l(n),{label:" \u5F53\u524D\u4F59\u989D ",icon:"svg-icon:member_balance"})]),default:a(()=>[r(" "+_(l(i)(l(o).balance||0)),1)]),_:1}),e(t,null,{label:a(()=>[e(l(n),{label:" \u652F\u51FA\u91D1\u989D ",icon:"svg-icon:member_expenditure_balance"})]),default:a(()=>[r(" "+_(l(i)(l(o).totalExpense||0)),1)]),_:1}),e(t,null,{label:a(()=>[e(l(n),{label:" \u5145\u503C\u91D1\u989D ",icon:"svg-icon:member_recharge_balance"})]),default:a(()=>[r(" "+_(l(i)(l(o).totalRecharge||0)),1)]),_:1})]),_:1})}}}),[["__scopeId","data-v-057b9a78"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/member/user/detail/UserAccountInfo.vue"]])});export{q as __tla,m as default};
import{_ as ua,__tla as _a}from"./ContentWrap.vue_vue_type_script_setup_true_lang-29ba9b6b.js";import{d as ca,J as oa,u as na,r as O,p as pa,o as c,c as R,f as a,w as e,h as s,t as u,a as t,au as N,F as C,q as S,v as y,a4 as v,g as h,av as ia,i as da,aw as ya,C as ma,ak as fa,G as ha,H as ba,j as Ea,k as va,V as wa,W as Ta,__tla as ka}from"./index-d5b00dc9.js";import{E as Aa,a as Ra,__tla as Ca}from"./el-timeline-item-bbad7999.js";import{E as Da,__tla as Pa}from"./el-image-5f4cbc55.js";import{__tla as Na}from"./el-image-viewer-96313bcd.js";import{E as Sa,a as ga,__tla as Fa}from"./el-descriptions-item-2a4731b6.js";import{_ as La,__tla as Ya}from"./DictTag.vue_vue_type_script_lang-2a9ae33e.js";import{g as Ia,a as Ua,r as xa,b as Oa,c as Va,__tla as Wa}from"./index-4062bd7b.js";import{D as p,b as Ha,c as Ja,__tla as Ma}from"./dict-29b94c3f.js";import{f as V,__tla as ja}from"./formatTime-9063410f.js";import{_ as qa,__tla as Ga}from"./AfterSaleDisagreeForm.vue_vue_type_script_setup_true_lang-074b2370.js";import{c as Ka,__tla as Qa}from"./index-2383b77d.js";import{u as za,__tla as Ba}from"./tagsView-5c5a0671.js";import{u as Xa,__tla as Za}from"./useMessage-2288a5f2.js";import{_ as $a}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as ae}from"./index-bd0d9e6c.js";import"./color-f5b6e279.js";import{__tla as ee}from"./Dialog.vue_vue_type_style_index_0_lang-03cf6454.js";let W,te=Promise.all([(()=>{try{return _a}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return Na}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return Ya}catch{}})(),(()=>{try{return Wa}catch{}})(),(()=>{try{return Ma}catch{}})(),(()=>{try{return ja}catch{}})(),(()=>{try{return Ga}catch{}})(),(()=>{try{return Qa}catch{}})(),(()=>{try{return Ba}catch{}})(),(()=>{try{return Za}catch{}})(),(()=>{try{return ae}catch{}})(),(()=>{try{return ee}catch{}})()]).then(async()=>{let w,g,F,L,Y,I;w=T=>(wa("data-v-d290ceed"),T=T(),Ta(),T),g=w(()=>h("span",{style:{color:"red"}},"\u63D0\u9192: ",-1)),F=w(()=>h("br",null,null,-1)),L=w(()=>h("br",null,null,-1)),Y={class:"el-timeline-right-content"},I=ca({name:"TradeAfterSaleDetail",__name:"index",setup(T){const{t:k}=da(),o=Xa(),{params:H}=oa(),{push:J,currentRoute:M}=na(),l=O({order:{},logs:[]}),U=O(),j=i=>{const n=Ja(p.USER_TYPE,i);switch(n==null?void 0:n.colorType){case"success":return"#67C23A";case"info":return"#909399";case"warning":return"#E6A23C";case"danger":return"#F56C6C"}return"#409EFF"},f=async()=>{const i=H.id;if(i){const n=await Ia(i);n==null&&(o.notifyError("\u552E\u540E\u8BA2\u5355\u4E0D\u5B58\u5728"),X()),l.value=n}},q=async()=>{try{await o.confirm("\u662F\u5426\u540C\u610F\u552E\u540E\uFF1F"),await Ua(l.value.id),o.success(k("common.success")),await f()}catch{}},G=async()=>{var i;(i=U.value)==null||i.open(l.value)},K=async()=>{try{await o.confirm("\u662F\u5426\u786E\u8BA4\u6536\u8D27\uFF1F"),await xa(l.value.id),o.success(k("common.success")),await f()}catch{}},Q=async()=>{try{await o.confirm("\u662F\u5426\u62D2\u7EDD\u6536\u8D27\uFF1F"),await Oa(l.value.id),o.success(k("common.success")),await f()}catch{}},z=async()=>{try{await o.confirm("\u662F\u5426\u786E\u8BA4\u9000\u6B3E\uFF1F"),await Va(l.value.id),o.success(k("common.success")),await f()}catch{}},{delView:B}=za(),X=()=>{B(t(M)),J({name:"TradeAfterSale"})};return pa(async()=>{await f()}),(i,n)=>{const r=Sa,m=La,b=ga,Z=Da,E=ma,$=fa,A=ha,aa=ba,x=Ea,ea=va,ta=Aa,la=Ra,ra=ua;return c(),R(C,null,[a(ra,null,{default:e(()=>[a(b,{title:"\u8BA2\u5355\u4FE1\u606F"},{default:e(()=>[a(r,{label:"\u8BA2\u5355\u53F7: "},{default:e(()=>[s(u(t(l).orderNo),1)]),_:1}),a(r,{label:"\u914D\u9001\u65B9\u5F0F: "},{default:e(()=>[a(m,{type:t(p).TRADE_DELIVERY_TYPE,value:t(l).order.deliveryType},null,8,["type","value"])]),_:1}),a(r,{label:"\u8BA2\u5355\u7C7B\u578B: "},{default:e(()=>[a(m,{type:t(p).TRADE_ORDER_TYPE,value:t(l).order.type},null,8,["type","value"])]),_:1}),a(r,{label:"\u6536\u8D27\u4EBA: "},{default:e(()=>[s(u(t(l).order.receiverName),1)]),_:1}),a(r,{label:"\u4E70\u5BB6\u7559\u8A00: "},{default:e(()=>[s(u(t(l).order.userRemark),1)]),_:1}),a(r,{label:"\u8BA2\u5355\u6765\u6E90: "},{default:e(()=>[a(m,{type:t(p).TERMINAL,value:t(l).order.terminal},null,8,["type","value"])]),_:1}),a(r,{label:"\u8054\u7CFB\u7535\u8BDD: "},{default:e(()=>[s(u(t(l).order.receiverMobile),1)]),_:1}),a(r,{label:"\u5546\u5BB6\u5907\u6CE8: "},{default:e(()=>[s(u(t(l).order.remark),1)]),_:1}),a(r,{label:"\u652F\u4ED8\u5355\u53F7: "},{default:e(()=>[s(u(t(l).order.payOrderId),1)]),_:1}),a(r,{label:"\u4ED8\u6B3E\u65B9\u5F0F: "},{default:e(()=>[a(m,{type:t(p).PAY_CHANNEL_CODE,value:t(l).order.payChannelCode},null,8,["type","value"])]),_:1}),a(r,{label:"\u4E70\u5BB6: "},{default:e(()=>{var _,d;return[s(u((d=(_=t(l))==null?void 0:_.user)==null?void 0:d.nickname),1)]}),_:1})]),_:1}),a(b,{title:"\u552E\u540E\u4FE1\u606F"},{default:e(()=>[a(r,{label:"\u9000\u6B3E\u7F16\u53F7: "},{default:e(()=>[s(u(t(l).no),1)]),_:1}),a(r,{label:"\u7533\u8BF7\u65F6\u95F4: "},{default:e(()=>[s(u(t(V)(t(l).auditTime)),1)]),_:1}),a(r,{label:"\u552E\u540E\u7C7B\u578B: "},{default:e(()=>[a(m,{type:t(p).TRADE_AFTER_SALE_TYPE,value:t(l).type},null,8,["type","value"])]),_:1}),a(r,{label:"\u552E\u540E\u65B9\u5F0F: "},{default:e(()=>[a(m,{type:t(p).TRADE_AFTER_SALE_WAY,value:t(l).way},null,8,["type","value"])]),_:1}),a(r,{label:"\u9000\u6B3E\u91D1\u989D: "},{default:e(()=>[s(u(t(N)(t(l).refundPrice)),1)]),_:1}),a(r,{label:"\u9000\u6B3E\u539F\u56E0: "},{default:e(()=>[s(u(t(l).applyReason),1)]),_:1}),a(r,{label:"\u8865\u5145\u63CF\u8FF0: "},{default:e(()=>[s(u(t(l).applyDescription),1)]),_:1}),a(r,{label:"\u51ED\u8BC1\u56FE\u7247: "},{default:e(()=>[(c(!0),R(C,null,S(t(l).applyPicUrls,(_,d)=>(c(),y(Z,{key:d,src:_.url,class:"mr-10px h-60px w-60px",onClick:n[0]||(n[0]=le=>(D=>{const P=[];ya(D)?D.forEach(sa=>{P.push(sa.url)}):P.push(D),Ka({urlList:P})})(t(l).applyPicUrls))},null,8,["src"]))),128))]),_:1})]),_:1}),a(b,{column:1,title:"\u9000\u6B3E\u72B6\u6001"},{default:e(()=>[a(r,{label:"\u9000\u6B3E\u72B6\u6001: "},{default:e(()=>[a(m,{type:t(p).TRADE_AFTER_SALE_STATUS,value:t(l).status},null,8,["type","value"])]),_:1}),a(r,{"label-class-name":"no-colon"},{default:e(()=>[t(l).status===10?(c(),y(E,{key:0,type:"primary",onClick:q},{default:e(()=>[s("\u540C\u610F\u552E\u540E")]),_:1})):v("",!0),t(l).status===10?(c(),y(E,{key:1,type:"primary",onClick:G},{default:e(()=>[s(" \u62D2\u7EDD\u552E\u540E ")]),_:1})):v("",!0),t(l).status===30?(c(),y(E,{key:2,type:"primary",onClick:K},{default:e(()=>[s(" \u786E\u8BA4\u6536\u8D27 ")]),_:1})):v("",!0),t(l).status===30?(c(),y(E,{key:3,type:"primary",onClick:Q},{default:e(()=>[s("\u62D2\u7EDD\u6536\u8D27")]),_:1})):v("",!0),t(l).status===40?(c(),y(E,{key:4,type:"primary",onClick:z},{default:e(()=>[s("\u786E\u8BA4\u9000\u6B3E")]),_:1})):v("",!0)]),_:1}),a(r,null,{label:e(()=>[g]),default:e(()=>[s(" \u5982\u679C\u672A\u53D1\u8D27\uFF0C\u8BF7\u70B9\u51FB\u540C\u610F\u9000\u6B3E\u7ED9\u4E70\u5BB6\u3002"),F,s(" \u5982\u679C\u5B9E\u9645\u5DF2\u53D1\u8D27\uFF0C\u8BF7\u4E3B\u52A8\u4E0E\u4E70\u5BB6\u8054\u7CFB\u3002"),L,s(" \u5982\u679C\u8BA2\u5355\u6574\u4F53\u9000\u6B3E\u540E\uFF0C\u4F18\u60E0\u5238\u548C\u4F59\u989D\u4F1A\u9000\u8FD8\u7ED9\u4E70\u5BB6. ")]),_:1})]),_:1}),a(b,{title:"\u5546\u54C1\u4FE1\u606F"},{default:e(()=>[a(r,{labelClassName:"no-colon"},{default:e(()=>[a(ea,{gutter:20},{default:e(()=>[a(x,{span:15},{default:e(()=>[a(aa,{data:[t(l).orderItem],border:""},{default:e(()=>[a(A,{label:"\u5546\u54C1",prop:"spuName",width:"auto"},{default:e(({row:_})=>[s(u(_.spuName)+" ",1),(c(!0),R(C,null,S(_.properties,d=>(c(),y($,{key:d.propertyId},{default:e(()=>[s(u(d.propertyName)+": "+u(d.valueName),1)]),_:2},1024))),128))]),_:1}),a(A,{label:"\u5546\u54C1\u539F\u4EF7",prop:"price",width:"150"},{default:e(({row:_})=>[s(u(t(N)(_.price))+" \u5143",1)]),_:1}),a(A,{label:"\u6570\u91CF",prop:"count",width:"100"}),a(A,{label:"\u5408\u8BA1",prop:"payPrice",width:"150"},{default:e(({row:_})=>[s(u(t(N)(_.payPrice))+" \u5143",1)]),_:1})]),_:1},8,["data"])]),_:1}),a(x,{span:10})]),_:1})]),_:1})]),_:1}),a(b,{title:"\u552E\u540E\u65E5\u5FD7"},{default:e(()=>[a(r,{labelClassName:"no-colon"},{default:e(()=>[a(la,null,{default:e(()=>[(c(!0),R(C,null,S(t(l).logs,_=>(c(),y(ta,{key:_.id,timestamp:t(V)(_.createTime),placement:"top"},{dot:e(()=>[h("span",{style:ia({backgroundColor:j(_.userType)}),class:"dot-node-style"},u(t(Ha)(t(p).USER_TYPE,_.userType)[0]||"\u7CFB"),5)]),default:e(()=>[h("div",Y,[h("span",null,u(_.content),1)])]),_:2},1032,["timestamp"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),a(qa,{ref_key:"updateAuditReasonFormRef",ref:U,onSuccess:f},null,512)],64)}}}),W=$a(I,[["__scopeId","data-v-d290ceed"]])});export{te as __tla,W as default};

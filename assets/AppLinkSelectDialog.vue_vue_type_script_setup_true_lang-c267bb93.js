import{et as me,aC as de,aD as ce,eu as J,ev as he,ew as _e,ex as ge,ey as Te,d as ve,r as h,o as _,c as C,f as c,w as f,h as x,g as Q,F as L,q as U,a as i,v as b,R as ye,t as P,l as Ce,a4 as Ie,am as xe,ez as Le,C as Ae,aT as De,aA as Oe,A as ke,D as Ee,__tla as Re}from"./index-d2088aec.js";import{_ as Ue,__tla as be}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{_ as Pe,__tla as Se}from"./ProductCategorySelect.vue_vue_type_script_setup_true_lang-23e40708.js";let W,Ve=Promise.all([(()=>{try{return Re}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return Se}catch{}})()]).then(async()=>{var X=RegExp("[\\u200d\uD800-\uDFFF\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function S(e){return X.test(e)}var V="\uD800-\uDFFF",Z="["+V+"]",A="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",D="\uD83C[\uDFFB-\uDFFF]",w="[^"+V+"]",N="(?:\uD83C[\uDDE6-\uDDFF]){2}",Y="[\uD800-\uDBFF][\uDC00-\uDFFF]",G="(?:"+A+"|"+D+")?",M="[\\ufe0e\\ufe0f]?",ee=M+G+("(?:\\u200d(?:"+[w,N,Y].join("|")+")"+M+G+")*"),ae="(?:"+[w+A+"?",A,N,Y,Z].join("|")+")",te=RegExp(D+"(?="+D+")|"+ae+ee,"g");function ne(e){return S(e)?function(l){return l.match(te)||[]}(e):function(l){return l.split("")}(e)}var B=J&&J.isRegExp;const le=B?he(B):function(e){return de(e)&&ce(e)=="[object RegExp]"};function j(e,l,m){return m&&typeof m!="number"&&_e(e,l,m)&&(l=m=void 0),(m=m===void 0?4294967295:m>>>0)?(e=ge(e))&&(typeof l=="string"||l!=null&&!le(l))&&!(l=Te(l))&&S(e)?(r=ne(e),s=0,o=m,T=r.length,o=o===void 0?T:o,!s&&o>=T?r:me(r,s,o)):e.split(l,m):[];var r,s,o,T}var O=(e=>(e[e.ACTIVITY_COMBINATION=0]="ACTIVITY_COMBINATION",e[e.ACTIVITY_SECKILL=1]="ACTIVITY_SECKILL",e[e.ARTICLE_DETAIL=2]="ARTICLE_DETAIL",e[e.COUPON_DETAIL=3]="COUPON_DETAIL",e[e.DIY_PAGE_DETAIL=4]="DIY_PAGE_DETAIL",e[e.PRODUCT_CATEGORY_LIST=5]="PRODUCT_CATEGORY_LIST",e[e.PRODUCT_LIST=6]="PRODUCT_LIST",e[e.PRODUCT_DETAIL_NORMAL=7]="PRODUCT_DETAIL_NORMAL",e[e.PRODUCT_DETAIL_COMBINATION=8]="PRODUCT_DETAIL_COMBINATION",e[e.PRODUCT_DETAIL_SECKILL=9]="PRODUCT_DETAIL_SECKILL",e))(O||{});let v,K;v=[{name:"\u5546\u57CE",links:[{name:"\u9996\u9875",path:"/pages/index/index"},{name:"\u5546\u54C1\u5206\u7C7B",path:"/pages/index/category",type:5},{name:"\u8D2D\u7269\u8F66",path:"/pages/index/cart"},{name:"\u4E2A\u4EBA\u4E2D\u5FC3",path:"/pages/index/user"},{name:"\u5546\u54C1\u641C\u7D22",path:"/pages/index/search"},{name:"\u81EA\u5B9A\u4E49\u9875\u9762",path:"/pages/index/page",type:4},{name:"\u5BA2\u670D",path:"/pages/chat/index"},{name:"\u7CFB\u7EDF\u8BBE\u7F6E",path:"/pages/public/setting"},{name:"\u5E38\u89C1\u95EE\u9898",path:"/pages/public/faq"}]},{name:"\u5546\u54C1",links:[{name:"\u5546\u54C1\u5217\u8868",path:"/pages/goods/list",type:6},{name:"\u5546\u54C1\u8BE6\u60C5",path:"/pages/goods/index",type:7},{name:"\u62FC\u56E2\u5546\u54C1\u8BE6\u60C5",path:"/pages/goods/groupon",type:8},{name:"\u79D2\u6740\u5546\u54C1\u8BE6\u60C5",path:"/pages/goods/seckill",type:9}]},{name:"\u8425\u9500\u6D3B\u52A8",links:[{name:"\u62FC\u56E2\u8BA2\u5355",path:"/pages/activity/groupon/order"},{name:"\u8425\u9500\u5546\u54C1",path:"/pages/activity/index"},{name:"\u62FC\u56E2\u6D3B\u52A8",path:"/pages/activity/groupon/list",type:0},{name:"\u79D2\u6740\u6D3B\u52A8",path:"/pages/activity/seckill/list",type:1},{name:"\u7B7E\u5230\u4E2D\u5FC3",path:"/pages/app/sign"},{name:"\u4F18\u60E0\u5238\u4E2D\u5FC3",path:"/pages/coupon/list"},{name:"\u4F18\u60E0\u5238\u8BE6\u60C5",path:"/pages/coupon/detail",type:3},{name:"\u6587\u7AE0\u8BE6\u60C5",path:"/pages/public/richtext",type:2}]},{name:"\u5206\u9500\u5546\u57CE",links:[{name:"\u5206\u9500\u4E2D\u5FC3",path:"/pages/commission/index"},{name:"\u63A8\u5E7F\u5546\u54C1",path:"/pages/commission/goods"},{name:"\u5206\u9500\u8BA2\u5355",path:"/pages/commission/order"},{name:"\u6211\u7684\u56E2\u961F",path:"/pages/commission/team"}]},{name:"\u652F\u4ED8",links:[{name:"\u5145\u503C\u4F59\u989D",path:"/pages/pay/recharge"},{name:"\u5145\u503C\u8BB0\u5F55",path:"/pages/pay/recharge-log"}]},{name:"\u7528\u6237\u4E2D\u5FC3",links:[{name:"\u7528\u6237\u4FE1\u606F",path:"/pages/user/info"},{name:"\u7528\u6237\u8BA2\u5355",path:"/pages/order/list"},{name:"\u552E\u540E\u8BA2\u5355",path:"/pages/order/aftersale/list"},{name:"\u5546\u54C1\u6536\u85CF",path:"/pages/user/goods-collect"},{name:"\u6D4F\u89C8\u8BB0\u5F55",path:"/pages/user/goods-log"},{name:"\u5730\u5740\u7BA1\u7406",path:"/pages/user/address/list"},{name:"\u7528\u6237\u4F63\u91D1",path:"/pages/user/wallet/commission"},{name:"\u7528\u6237\u4F59\u989D",path:"/pages/user/wallet/money"},{name:"\u7528\u6237\u79EF\u5206",path:"/pages/user/wallet/score"}]}],K={class:"h-500px flex gap-8px"},W=ve({name:"AppLinkSelectDialog",__name:"AppLinkSelectDialog",emits:["change","appLinkChange"],setup(e,{expose:l,emit:m}){const r=h(v[0].name),s=h({}),o=h(!1);l({open:t=>{s.value.path=t,o.value=!0;const a=v.find(p=>p.links.some(u=>{const g=E(u.path,t);return g&&(s.value={...u,path:t}),g}));a&&xe(()=>q(a.name))}});const T=m,se=()=>{o.value=!1,T("change",s.value.path),T("appLinkChange",s.value)},k=h([]),pe=({scrollTop:t})=>{const a=k.value.find(p=>{const{offsetHeight:u,offsetTop:g}=p;return t>=g&&t<g+u});a&&r.value!==a.textContent&&(r.value=a.textContent||"",oe(r.value))},$=h(),q=t=>{var p;r.value=t;const a=k.value.find(u=>u.textContent===t);a&&((p=$.value)==null||p.setScrollTop(a.offsetTop))},z=h(),F=h([]),oe=t=>{var p;const a=F.value.map(u=>u.ref).find(u=>u.textContent===t);a&&((p=z.value)==null||p.setScrollTop(a.offsetTop))},E=(t,a)=>j(t,"?",1)[0]===j(a,"?",1)[0],d=h({visible:!1,id:void 0,type:void 0}),ue=t=>{const a=new URL(s.value.path,"http://127.0.0.1");a.searchParams.set("id",`${t}`),s.value.path=`${a.pathname}${a.search}`,d.value.visible=!1,d.value.id=void 0};return(t,a)=>{const p=Ae,u=De,g=Oe,H=Ue,ie=ke,re=Ee;return _(),C(L,null,[c(H,{modelValue:i(o),"onUpdate:modelValue":a[1]||(a[1]=n=>Ce(o)?o.value=n:null),title:"\u9009\u62E9\u94FE\u63A5",width:"65%"},{footer:f(()=>[c(p,{type:"primary",onClick:se},{default:f(()=>[x("\u786E \u5B9A")]),_:1}),c(p,{onClick:a[0]||(a[0]=n=>o.value=!1)},{default:f(()=>[x("\u53D6 \u6D88")]),_:1})]),default:f(()=>[Q("div",K,[c(u,{"wrap-class":"h-full",ref_key:"groupScrollbar",ref:z,"view-class":"flex flex-col"},{default:f(()=>[(_(!0),C(L,null,U(i(v),(n,R)=>(_(),b(p,{key:R,class:ye(["m-r-16px m-l-0px! justify-start! w-90px",{active:i(r)===n.name}]),ref_for:!0,ref_key:"groupBtnRefs",ref:F,text:i(r)!==n.name,type:i(r)===n.name?"primary":"default",onClick:y=>q(n.name)},{default:f(()=>[x(P(n.name),1)]),_:2},1032,["class","text","type","onClick"]))),128))]),_:1},512),c(u,{class:"h-full flex-1",onScroll:pe,ref_key:"linkScrollbar",ref:$},{default:f(()=>[(_(!0),C(L,null,U(i(v),(n,R)=>(_(),C("div",{key:R},[Q("div",{class:"font-bold",ref_for:!0,ref_key:"groupTitleRefs",ref:k},P(n.name),513),(_(!0),C(L,null,U(n.links,(y,fe)=>(_(),b(g,{key:fe,content:y.path,placement:"bottom","show-after":300},{default:f(()=>[c(p,{class:"m-b-8px m-r-8px m-l-0px!",type:E(y.path,i(s).path)?"primary":"default",onClick:we=>(I=>{E(I.path,s.value.path)||(s.value=I),I.type===O.PRODUCT_CATEGORY_LIST&&(d.value.visible=!0,d.value.type=I.type,d.value.id=Le("id","http://127.0.0.1"+s.value.path)||void 0)})(y)},{default:f(()=>[x(P(y.name),1)]),_:2},1032,["type","onClick"])]),_:2},1032,["content"]))),128))]))),128))]),_:1},512)])]),_:1},8,["modelValue"]),c(H,{modelValue:i(d).visible,"onUpdate:modelValue":a[3]||(a[3]=n=>i(d).visible=n),title:"",width:"50%"},{default:f(()=>[c(re,{class:"min-h-200px"},{default:f(()=>[i(d).type===i(O).PRODUCT_CATEGORY_LIST?(_(),b(ie,{key:0,label:"\u9009\u62E9\u5206\u7C7B"},{default:f(()=>[c(Pe,{modelValue:i(d).id,"onUpdate:modelValue":[a[2]||(a[2]=n=>i(d).id=n),ue],"parent-id":0},null,8,["modelValue"])]),_:1})):Ie("",!0)]),_:1})]),_:1},8,["modelValue"])],64)}}})});export{W as _,Ve as __tla};

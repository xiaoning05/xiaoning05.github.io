import{eu as me,aB as de,aC as ce,ev as X,ew as he,ex as _e,ey as ge,ez as ve,d as Te,r as h,o as _,c as C,b as c,e as f,h as x,f as Z,F as L,g as S,a as u,q as b,N as ye,t as P,j as Ce,a0 as Ie,al as xe,eA as Le,B as Ae,aS as ke,az as De,y as Oe,C as Ee,_ as Re,__tla as Se}from"./index-aaa5adb3.js";import{_ as be,__tla as Pe}from"./Dialog-9a73a39c.js";import Ue,{__tla as Ne}from"./ProductCategorySelect-06786615.js";let J,Ve=Promise.all([(()=>{try{return Se}catch{}})(),(()=>{try{return Pe}catch{}})(),(()=>{try{return Ne}catch{}})()]).then(async()=>{var Q=RegExp("[\\u200d\uD800-\uDFFF\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function U(e){return Q.test(e)}var N="\uD800-\uDFFF",W="["+N+"]",A="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",k="\uD83C[\uDFFB-\uDFFF]",V="[^"+N+"]",w="(?:\uD83C[\uDDE6-\uDDFF]){2}",Y="[\uD800-\uDBFF][\uDC00-\uDFFF]",B="(?:"+A+"|"+k+")?",G="[\\ufe0e\\ufe0f]?",ee=G+B+("(?:\\u200d(?:"+[V,w,Y].join("|")+")"+G+B+")*"),ae="(?:"+[V+A+"?",A,w,Y,W].join("|")+")",te=RegExp(k+"(?="+k+")|"+ae+ee,"g");function ne(e){return U(e)?function(l){return l.match(te)||[]}(e):function(l){return l.split("")}(e)}var M=X&&X.isRegExp;const le=M?he(M):function(e){return de(e)&&ce(e)=="[object RegExp]"};function j(e,l,m){return m&&typeof m!="number"&&_e(e,l,m)&&(l=m=void 0),(m=m===void 0?4294967295:m>>>0)?(e=ge(e))&&(typeof l=="string"||l!=null&&!le(l))&&!(l=ve(l))&&U(e)?(r=ne(e),p=0,o=m,v=r.length,o=o===void 0?v:o,!p&&o>=v?r:me(r,p,o)):e.split(l,m):[];var r,p,o,v}var D=(e=>(e[e.ACTIVITY_COMBINATION=0]="ACTIVITY_COMBINATION",e[e.ACTIVITY_SECKILL=1]="ACTIVITY_SECKILL",e[e.ARTICLE_DETAIL=2]="ARTICLE_DETAIL",e[e.COUPON_DETAIL=3]="COUPON_DETAIL",e[e.DIY_PAGE_DETAIL=4]="DIY_PAGE_DETAIL",e[e.PRODUCT_CATEGORY_LIST=5]="PRODUCT_CATEGORY_LIST",e[e.PRODUCT_LIST=6]="PRODUCT_LIST",e[e.PRODUCT_DETAIL_NORMAL=7]="PRODUCT_DETAIL_NORMAL",e[e.PRODUCT_DETAIL_COMBINATION=8]="PRODUCT_DETAIL_COMBINATION",e[e.PRODUCT_DETAIL_SECKILL=9]="PRODUCT_DETAIL_SECKILL",e))(D||{});let T,K;T=[{name:"\u5546\u57CE",links:[{name:"\u9996\u9875",path:"/pages/index/index"},{name:"\u5546\u54C1\u5206\u7C7B",path:"/pages/index/category",type:5},{name:"\u8D2D\u7269\u8F66",path:"/pages/index/cart"},{name:"\u4E2A\u4EBA\u4E2D\u5FC3",path:"/pages/index/user"},{name:"\u5546\u54C1\u641C\u7D22",path:"/pages/index/search"},{name:"\u81EA\u5B9A\u4E49\u9875\u9762",path:"/pages/index/page",type:4},{name:"\u5BA2\u670D",path:"/pages/chat/index"},{name:"\u7CFB\u7EDF\u8BBE\u7F6E",path:"/pages/public/setting"},{name:"\u5E38\u89C1\u95EE\u9898",path:"/pages/public/faq"}]},{name:"\u5546\u54C1",links:[{name:"\u5546\u54C1\u5217\u8868",path:"/pages/goods/list",type:6},{name:"\u5546\u54C1\u8BE6\u60C5",path:"/pages/goods/index",type:7},{name:"\u62FC\u56E2\u5546\u54C1\u8BE6\u60C5",path:"/pages/goods/groupon",type:8},{name:"\u79D2\u6740\u5546\u54C1\u8BE6\u60C5",path:"/pages/goods/seckill",type:9}]},{name:"\u8425\u9500\u6D3B\u52A8",links:[{name:"\u62FC\u56E2\u8BA2\u5355",path:"/pages/activity/groupon/order"},{name:"\u8425\u9500\u5546\u54C1",path:"/pages/activity/index"},{name:"\u62FC\u56E2\u6D3B\u52A8",path:"/pages/activity/groupon/list",type:0},{name:"\u79D2\u6740\u6D3B\u52A8",path:"/pages/activity/seckill/list",type:1},{name:"\u7B7E\u5230\u4E2D\u5FC3",path:"/pages/app/sign"},{name:"\u4F18\u60E0\u5238\u4E2D\u5FC3",path:"/pages/coupon/list"},{name:"\u4F18\u60E0\u5238\u8BE6\u60C5",path:"/pages/coupon/detail",type:3},{name:"\u6587\u7AE0\u8BE6\u60C5",path:"/pages/public/richtext",type:2}]},{name:"\u5206\u9500\u5546\u57CE",links:[{name:"\u5206\u9500\u4E2D\u5FC3",path:"/pages/commission/index"},{name:"\u63A8\u5E7F\u5546\u54C1",path:"/pages/commission/goods"},{name:"\u5206\u9500\u8BA2\u5355",path:"/pages/commission/order"},{name:"\u6211\u7684\u56E2\u961F",path:"/pages/commission/team"}]},{name:"\u652F\u4ED8",links:[{name:"\u5145\u503C\u4F59\u989D",path:"/pages/pay/recharge"},{name:"\u5145\u503C\u8BB0\u5F55",path:"/pages/pay/recharge-log"}]},{name:"\u7528\u6237\u4E2D\u5FC3",links:[{name:"\u7528\u6237\u4FE1\u606F",path:"/pages/user/info"},{name:"\u7528\u6237\u8BA2\u5355",path:"/pages/order/list"},{name:"\u552E\u540E\u8BA2\u5355",path:"/pages/order/aftersale/list"},{name:"\u5546\u54C1\u6536\u85CF",path:"/pages/user/goods-collect"},{name:"\u6D4F\u89C8\u8BB0\u5F55",path:"/pages/user/goods-log"},{name:"\u5730\u5740\u7BA1\u7406",path:"/pages/user/address/list"},{name:"\u7528\u6237\u4F63\u91D1",path:"/pages/user/wallet/commission"},{name:"\u7528\u6237\u4F59\u989D",path:"/pages/user/wallet/money"},{name:"\u7528\u6237\u79EF\u5206",path:"/pages/user/wallet/score"}]}],K={class:"h-500px flex gap-8px"},J=Re(Te({name:"AppLinkSelectDialog",__name:"AppLinkSelectDialog",emits:["change","appLinkChange"],setup(e,{expose:l,emit:m}){const r=h(T[0].name),p=h({}),o=h(!1);l({open:t=>{p.value.path=t,o.value=!0;const a=T.find(s=>s.links.some(i=>{const g=E(i.path,t);return g&&(p.value={...i,path:t}),g}));a&&xe(()=>q(a.name))}});const v=m,pe=()=>{o.value=!1,v("change",p.value.path),v("appLinkChange",p.value)},O=h([]),se=({scrollTop:t})=>{const a=O.value.find(s=>{const{offsetHeight:i,offsetTop:g}=s;return t>=g&&t<g+i});a&&r.value!==a.textContent&&(r.value=a.textContent||"",oe(r.value))},$=h(),q=t=>{var s;r.value=t;const a=O.value.find(i=>i.textContent===t);a&&((s=$.value)==null||s.setScrollTop(a.offsetTop))},z=h(),F=h([]),oe=t=>{var s;const a=F.value.map(i=>i.ref).find(i=>i.textContent===t);a&&((s=z.value)==null||s.setScrollTop(a.offsetTop))},E=(t,a)=>j(t,"?",1)[0]===j(a,"?",1)[0],d=h({visible:!1,id:void 0,type:void 0}),ie=t=>{const a=new URL(p.value.path,"http://127.0.0.1");a.searchParams.set("id",`${t}`),p.value.path=`${a.pathname}${a.search}`,d.value.visible=!1,d.value.id=void 0};return(t,a)=>{const s=Ae,i=ke,g=De,H=be,ue=Oe,re=Ee;return _(),C(L,null,[c(H,{modelValue:u(o),"onUpdate:modelValue":a[1]||(a[1]=n=>Ce(o)?o.value=n:null),title:"\u9009\u62E9\u94FE\u63A5",width:"65%"},{footer:f(()=>[c(s,{type:"primary",onClick:pe},{default:f(()=>[x("\u786E \u5B9A")]),_:1}),c(s,{onClick:a[0]||(a[0]=n=>o.value=!1)},{default:f(()=>[x("\u53D6 \u6D88")]),_:1})]),default:f(()=>[Z("div",K,[c(i,{"wrap-class":"h-full",ref_key:"groupScrollbar",ref:z,"view-class":"flex flex-col"},{default:f(()=>[(_(!0),C(L,null,S(u(T),(n,R)=>(_(),b(s,{key:R,class:ye(["m-r-16px m-l-0px! justify-start! w-90px",{active:u(r)===n.name}]),ref_for:!0,ref_key:"groupBtnRefs",ref:F,text:u(r)!==n.name,type:u(r)===n.name?"primary":"default",onClick:y=>q(n.name)},{default:f(()=>[x(P(n.name),1)]),_:2},1032,["class","text","type","onClick"]))),128))]),_:1},512),c(i,{class:"h-full flex-1",onScroll:se,ref_key:"linkScrollbar",ref:$},{default:f(()=>[(_(!0),C(L,null,S(u(T),(n,R)=>(_(),C("div",{key:R},[Z("div",{class:"font-bold",ref_for:!0,ref_key:"groupTitleRefs",ref:O},P(n.name),513),(_(!0),C(L,null,S(n.links,(y,fe)=>(_(),b(g,{key:fe,content:y.path,placement:"bottom","show-after":300},{default:f(()=>[c(s,{class:"m-b-8px m-r-8px m-l-0px!",type:E(y.path,u(p).path)?"primary":"default",onClick:we=>(I=>{E(I.path,p.value.path)||(p.value=I),I.type===D.PRODUCT_CATEGORY_LIST&&(d.value.visible=!0,d.value.type=I.type,d.value.id=Le("id","http://127.0.0.1"+p.value.path)||void 0)})(y)},{default:f(()=>[x(P(y.name),1)]),_:2},1032,["type","onClick"])]),_:2},1032,["content"]))),128))]))),128))]),_:1},512)])]),_:1},8,["modelValue"]),c(H,{modelValue:u(d).visible,"onUpdate:modelValue":a[3]||(a[3]=n=>u(d).visible=n),title:"",width:"50%"},{default:f(()=>[c(re,{class:"min-h-200px"},{default:f(()=>[u(d).type===u(D).PRODUCT_CATEGORY_LIST?(_(),b(ue,{key:0,label:"\u9009\u62E9\u5206\u7C7B"},{default:f(()=>[c(Ue,{modelValue:u(d).id,"onUpdate:modelValue":[a[2]||(a[2]=n=>u(d).id=n),ie],"parent-id":0},null,8,["modelValue"])]),_:1})):Ie("",!0)]),_:1})]),_:1},8,["modelValue"])],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/components/AppLinkInput/AppLinkSelectDialog.vue"]])});export{J as _,Ve as __tla};

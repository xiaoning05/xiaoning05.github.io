import{d as g,ah as v,o as x,c as y,g as t,t as i,f as E,w as T,i as b,D as h,h as k,_ as w,__tla as C}from"./index-f0743f71.js";let m,H=Promise.all([(()=>{try{return C}catch{}})()]).then(async()=>{let a,o,l,n,c;a={class:"flex justify-center"},o={class:"text-center"},l=["src"],n={class:"text-14px text-[var(--el-color-info)]"},c={class:"mt-20px"},m=w(g({name:"Error",__name:"Error",props:{type:v.string.validate(r=>["404","500","403"].includes(r)).def("404")},emits:["errorClick"],setup(r,{emit:u}){const{t:e}=b(),s={404:{url:"/assets/404-1759fece.svg",message:e("error.pageError"),buttonText:e("error.returnToHome")},500:{url:"/assets/500-8fda557c.svg",message:e("error.networkError"),buttonText:e("error.returnToHome")},403:{url:"/assets/403-af24f6bf.svg",message:e("error.noPermission"),buttonText:e("error.returnToHome")}},p=r,f=u,_=()=>{f("errorClick",p.type)};return(D,I)=>{const d=h;return x(),y("div",a,[t("div",o,[t("img",{src:s[r.type].url,alt:"",width:"350"},null,8,l),t("div",n,i(s[r.type].message),1),t("div",c,[E(d,{type:"primary",onClick:_},{default:T(()=>[k(i(s[r.type].buttonText),1)]),_:1})])])])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/components/Error/src/Error.vue"]])});export{m as _,H as __tla};
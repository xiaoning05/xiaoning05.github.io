import{d as k,o as e,c as a,F as b,g as I,f as t,b as U,t as h,_ as A,__tla as E}from"./index-b079f499.js";import{E as N,__tla as q}from"./el-image-8a70494f.js";import{__tla as C}from"./el-image-viewer-3e8b0085.js";let v,D=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return q}catch{}})(),(()=>{try{return C}catch{}})()]).then(async()=>{let l,n,r,i,c,m,_,o,d,u,p;l={class:"news-home"},n=["href"],r={class:"news-main"},i={class:"news-content"},c={class:"news-content-title"},m=["href"],_={class:"news-main-item"},o={class:"news-content-item"},d={class:"news-content-item-title"},u={class:"news-content-item-img"},p=["src"],v=A(k({name:"WxNews",__name:"main",props:{articles:{type:[Array,null],required:!0,default:null}},setup:(f,{expose:y})=>(y({articles:f.articles}),(g,F)=>{const x=N;return e(),a("div",l,[(e(!0),a(b,null,I(g.articles,(s,w)=>(e(),a("div",{key:w,class:"news-div"},[w===0?(e(),a("a",{key:0,href:s.url,target:"_blank"},[t("div",r,[t("div",i,[U(x,{src:s.picUrl,class:"material-img",style:{width:"100%",height:"120px"}},null,8,["src"]),t("div",c,[t("span",null,h(s.title),1)])])])],8,n)):(e(),a("a",{key:1,href:s.url,target:"_blank"},[t("div",_,[t("div",o,[t("div",d,h(s.title),1),t("div",u,[t("img",{src:s.picUrl,class:"material-img",height:"100%"},null,8,p)])])])],8,m))]))),128))])})}),[["__scopeId","data-v-42232a23"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/components/wx-news/main.vue"]])});export{D as __tla,v as default};

import{d,o as r,c as e,q as y,$ as o,f as c,at as p,t as l,w as f,Z as g,_ as x,__tla as u}from"./index-34f06ebd.js";import{E as h,__tla as v}from"./el-image-a5cf0b35.js";import{__tla as b}from"./el-image-viewer-331eba6f.js";import{_ as k}from"./_plugin-vue_export-helper-1b428a4d.js";let n,w=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return b}catch{}})()]).then(async()=>{let s,a,i;s={class:"title-bar"},a={class:"absolute left-0 top-0 w-full"},i={key:0},n=k(d({name:"TitleBar",__name:"index",props:{property:{}},setup:z=>(t,A)=>{const _=h,m=x;return r(),e("div",s,[t.property.bgImgUrl?(r(),y(_,{key:0,src:t.property.bgImgUrl,fit:"cover",class:"w-full"},null,8,["src"])):o("",!0),c("div",a,[t.property.title?(r(),e("div",{key:0,style:p({fontSize:`${t.property.titleSize}px`,fontWeight:t.property.titleWeight,color:t.property.titleColor,textAlign:t.property.textAlign})},l(t.property.title),5)):o("",!0),t.property.description?(r(),e("div",{key:1,style:p({fontSize:`${t.property.descriptionSize}px`,fontWeight:t.property.descriptionWeight,color:t.property.descriptionColor,textAlign:t.property.textAlign}),class:"m-t-8px"},l(t.property.description),5)):o("",!0)]),f(c("div",{class:"more",style:p({color:t.property.descriptionColor})},[t.property.more.type!=="icon"?(r(),e("span",i,l(t.property.more.text),1)):o("",!0),t.property.more.type!=="text"?(r(),y(m,{key:1,icon:"ep:arrow-right"})):o("",!0)],4),[[g,t.property.more.show]])])}}),[["__scopeId","data-v-2ead33b6"]])});export{w as __tla,n as default};
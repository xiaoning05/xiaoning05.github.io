import{d as M,r as q,o as a,c as l,a as t,q as w,t as c,b as i,f as s,e as E,h as I,$ as L,__tla as V}from"./index-34f06ebd.js";import{E as N,__tla as X}from"./el-link-6a9ddb0c.js";import{_ as j,__tla as H}from"./main.vue_vue_type_script_setup_true_lang-665168bf.js";import P,{__tla as T}from"./main-1d08921a.js";import Y,{__tla as $}from"./main-b9378f4a.js";import{_ as z,__tla as A}from"./main.vue_vue_type_script_setup_true_lang-85d9874f.js";import B,{__tla as C}from"./main-9a7b4dea.js";import{_ as D,__tla as F}from"./MsgEvent.vue_vue_type_script_setup_true_lang-b931f425.js";import{M as r}from"./types-5fca7b13.js";let g,G=Promise.all([(()=>{try{return V}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return F}catch{}})()]).then(async()=>{let _,n,o,u,m,y,d,p,h,f,v,k,b;_={key:1},n={key:2},o={key:3},u=["href"],m=["src"],y={key:4,style:{"text-align":"center"}},d={key:5,class:"avue-card__detail"},p={class:"avue-card__title"},h=s("i",{class:"el-icon-link"},null,-1),f={class:"avue-card__info",style:{height:"unset"}},v={key:6},k={key:7,style:{width:"300px"}},b={key:8},g=M({name:"Msg",__name:"Msg",props:{item:{}},setup(x){const e=q(x.item);return(J,K)=>{const U=N;return a(),l("div",null,[t(e).type===t(r).Event?(a(),w(D,{key:0,item:t(e)},null,8,["item"])):t(e).type===t(r).Text?(a(),l("div",_,c(t(e).content),1)):t(e).type===t(r).Voice?(a(),l("div",n,[i(t(P),{url:t(e).mediaUrl,content:t(e).recognition},null,8,["url","content"])])):t(e).type===t(r).Image?(a(),l("div",o,[s("a",{target:"_blank",href:t(e).mediaUrl},[s("img",{src:t(e).mediaUrl,style:{width:"100px"}},null,8,m)],8,u)])):t(e).type===t(r).Video||t(e).type==="shortvideo"?(a(),l("div",y,[i(t(j),{url:t(e).mediaUrl},null,8,["url"])])):t(e).type===t(r).Link?(a(),l("div",d,[i(U,{type:"success",underline:!1,target:"_blank",href:t(e).url},{default:E(()=>[s("div",p,[h,I(c(t(e).title),1)])]),_:1},8,["href"]),s("div",f,c(t(e).description),1)])):t(e).type===t(r).Location?(a(),l("div",v,[i(t(z),{label:t(e).label,"location-y":t(e).locationY,"location-x":t(e).locationX},null,8,["label","location-y","location-x"])])):t(e).type===t(r).News?(a(),l("div",k,[i(t(Y),{articles:t(e).articles},null,8,["articles"])])):t(e).type===t(r).Music?(a(),l("div",b,[i(t(B),{title:t(e).title,description:t(e).description,"thumb-media-url":t(e).thumbMediaUrl,"music-url":t(e).musicUrl,"hq-music-url":t(e).hqMusicUrl},null,8,["title","description","thumb-media-url","music-url","hq-music-url"])])):L("",!0)])}}})});export{g as _,G as __tla};
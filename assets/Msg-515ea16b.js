import{d as U,r as w,o as a,c as r,a as t,q,t as c,b as i,f as s,e as E,h as I,a0 as N,_ as L,__tla as X}from"./index-aaa5adb3.js";import{E as A,__tla as V}from"./el-link-50478468.js";import Y,{__tla as j}from"./main-7f4eaeca.js";import z,{__tla as C}from"./main-7786d4de.js";import D,{__tla as G}from"./main-25d681e0.js";import P,{__tla as T}from"./main-b8b599bd.js";import Z,{__tla as B}from"./main-3a78a0de.js";import F,{__tla as H}from"./MsgEvent-2273cbec.js";import{M as l}from"./types-5fca7b13.js";import{__tla as J}from"./el-image-1cd11263.js";import{__tla as K}from"./el-image-viewer-fc91515b.js";let b,O=Promise.all([(()=>{try{return X}catch{}})(),(()=>{try{return V}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return B}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return K}catch{}})()]).then(async()=>{let _,n,o,u,m,y,d,p,h,f,v,k,g;_={key:1},n={key:2},o={key:3},u=["href"],m=["src"],y={key:4,style:{"text-align":"center"}},d={key:5,class:"avue-card__detail"},p={class:"avue-card__title"},h=s("i",{class:"el-icon-link"},null,-1),f={class:"avue-card__info",style:{height:"unset"}},v={key:6},k={key:7,style:{width:"300px"}},g={key:8},b=L(U({name:"Msg",__name:"Msg",props:{item:{type:null,required:!0}},setup(x){const e=w(x.item);return(Q,R)=>{const M=A;return a(),r("div",null,[t(e).type===t(l).Event?(a(),q(F,{key:0,item:t(e)},null,8,["item"])):t(e).type===t(l).Text?(a(),r("div",_,c(t(e).content),1)):t(e).type===t(l).Voice?(a(),r("div",n,[i(t(z),{url:t(e).mediaUrl,content:t(e).recognition},null,8,["url","content"])])):t(e).type===t(l).Image?(a(),r("div",o,[s("a",{target:"_blank",href:t(e).mediaUrl},[s("img",{src:t(e).mediaUrl,style:{width:"100px"}},null,8,m)],8,u)])):t(e).type===t(l).Video||t(e).type==="shortvideo"?(a(),r("div",y,[i(t(Y),{url:t(e).mediaUrl},null,8,["url"])])):t(e).type===t(l).Link?(a(),r("div",d,[i(M,{type:"success",underline:!1,target:"_blank",href:t(e).url},{default:E(()=>[s("div",p,[h,I(c(t(e).title),1)])]),_:1},8,["href"]),s("div",f,c(t(e).description),1)])):t(e).type===t(l).Location?(a(),r("div",v,[i(t(P),{label:t(e).label,"location-y":t(e).locationY,"location-x":t(e).locationX},null,8,["label","location-y","location-x"])])):t(e).type===t(l).News?(a(),r("div",k,[i(t(D),{articles:t(e).articles},null,8,["articles"])])):t(e).type===t(l).Music?(a(),r("div",g,[i(t(Z),{title:t(e).title,description:t(e).description,"thumb-media-url":t(e).thumbMediaUrl,"music-url":t(e).musicUrl,"hq-music-url":t(e).hqMusicUrl},null,8,["title","description","thumb-media-url","music-url","hq-music-url"])])):N("",!0)])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/components/wx-msg/components/Msg.vue"]])});export{O as __tla,b as default};

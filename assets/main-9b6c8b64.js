import{d as o,o as m,c as p,b as v,e as f,f as r,t as u,_ as y,__tla as h}from"./index-b079f499.js";import{E as g,__tla as U}from"./el-link-ed8d35b1.js";let d,b=Promise.all([(()=>{try{return h}catch{}})(),(()=>{try{return U}catch{}})()]).then(async()=>{let t,a,s,i,l,c;t={class:"avue-card__body",style:{padding:"10px","background-color":"#fff","border-radius":"5px"}},a={class:"avue-card__avatar"},s=["src"],i={class:"avue-card__detail"},l={class:"avue-card__title",style:{"margin-bottom":"unset"}},c={class:"avue-card__info",style:{height:"unset"}},d=y(o({name:"WxMusic",__name:"main",props:{title:{required:!1,type:String},description:{required:!1,type:String},musicUrl:{required:!1,type:String},hqMusicUrl:{required:!1,type:String},thumbMediaUrl:{required:!0,type:String}},setup:(e,{expose:n})=>(n({musicUrl:e.musicUrl}),(q,M)=>{const _=g;return m(),p("div",null,[v(_,{type:"success",underline:!1,target:"_blank",href:e.hqMusicUrl?e.hqMusicUrl:e.musicUrl},{default:f(()=>[r("div",t,[r("div",a,[r("img",{src:e.thumbMediaUrl,alt:""},null,8,s)]),r("div",i,[r("div",l,u(e.title),1),r("div",c,u(e.description),1)])])]),_:1},8,["href"])])})}),[["__scopeId","data-v-334246f2"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/components/wx-music/main.vue"]])});export{b as __tla,d as default};
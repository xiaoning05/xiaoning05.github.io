import{d as m,o as u,c as _,f as t,w as l,g as y,h as d,t as q,k as f,C as b,j as h,_ as k,__tla as w}from"./index-f0743f71.js";import{E as X,__tla as Y}from"./el-link-17c2244d.js";let n,g=Promise.all([(()=>{try{return w}catch{}})(),(()=>{try{return Y}catch{}})()]).then(async()=>{let o;o=["src"],n=k(m({name:"WxLocation",__name:"main",props:{locationX:{required:!0,type:Number},locationY:{required:!0,type:Number},label:{required:!0,type:String},qqMapKey:{required:!1,type:String,default:"TVDBZ-TDILD-4ON4B-PFDZA-RNLKH-VVF6E"}},setup(a,{expose:i}){const e=a;return i({locationX:e.locationX,locationY:e.locationY,label:e.label,qqMapKey:e.qqMapKey}),(x,D)=>{const r=f,s=b,p=h,c=X;return u(),_("div",null,[t(c,{type:"primary",target:"_blank",href:"https://map.qq.com/?type=marker&isopeninfowin=1&markertype=1&pointx="+a.locationY+"&pointy="+a.locationX+"&name="+a.label+"&ref=yudao"},{default:l(()=>[t(p,null,{default:l(()=>[t(r,null,{default:l(()=>[y("img",{src:"https://apis.map.qq.com/ws/staticmap/v2/?zoom=10&markers=color:blue|label:A|"+a.locationX+","+a.locationY+"&key="+a.qqMapKey+"&size=250*180"},null,8,o)]),_:1}),t(r,null,{default:l(()=>[t(s,{icon:"ep:location"}),d(" "+q(a.label),1)]),_:1})]),_:1})]),_:1},8,["href"])])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/components/wx-location/main.vue"]])});export{g as __tla,n as default};

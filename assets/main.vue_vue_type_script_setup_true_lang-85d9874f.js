import{d as u,o as m,c as _,b as e,e as l,f as y,h as q,t as d,aa as f,_ as b,a8 as h,__tla as k}from"./index-34f06ebd.js";import{E as K,__tla as X}from"./el-link-6a9ddb0c.js";let n,Y=Promise.all([(()=>{try{return k}catch{}})(),(()=>{try{return X}catch{}})()]).then(async()=>{let o;o=["src"],n=u({name:"WxLocation",__name:"main",props:{locationX:{required:!0,type:Number},locationY:{required:!0,type:Number},label:{required:!0,type:String},qqMapKey:{required:!1,type:String,default:"TVDBZ-TDILD-4ON4B-PFDZA-RNLKH-VVF6E"}},setup(a,{expose:i}){const t=a;return i({locationX:t.locationX,locationY:t.locationY,label:t.label,qqMapKey:t.qqMapKey}),(g,x)=>{const r=f,s=b,p=h,c=K;return m(),_("div",null,[e(c,{type:"primary",target:"_blank",href:"https://map.qq.com/?type=marker&isopeninfowin=1&markertype=1&pointx="+a.locationY+"&pointy="+a.locationX+"&name="+a.label+"&ref=yudao"},{default:l(()=>[e(p,null,{default:l(()=>[e(r,null,{default:l(()=>[y("img",{src:"https://apis.map.qq.com/ws/staticmap/v2/?zoom=10&markers=color:blue|label:A|"+a.locationX+","+a.locationY+"&key="+a.qqMapKey+"&size=250*180"},null,8,o)]),_:1}),e(r,null,{default:l(()=>[e(s,{icon:"ep:location"}),q(" "+d(a.label),1)]),_:1})]),_:1})]),_:1},8,["href"])])}}})});export{n as _,Y as __tla};

import{d as z,K as D,o as e,c as a,x as B,v as y,w as n,f as l,a as r,h as o,t as u,g as _,G as O,ak as Q,C as R,H as S,I as Z,__tla as $}from"./index-d2088aec.js";import{_ as tt,__tla as et}from"./main.vue_vue_type_script_setup_true_lang-0664ed35.js";import rt,{__tla as lt}from"./main-2a4878d4.js";import{_ as at,__tla as ot}from"./main.vue_vue_type_script_setup_true_lang-151f8033.js";import nt,{__tla as it}from"./main-f8573c8b.js";import st,{__tla as dt}from"./main-3e3dc64a.js";import{d as ut,__tla as yt}from"./formatTime-c7e0c543.js";import{M as i}from"./types-5fca7b13.js";let G,_t=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return yt}catch{}})()]).then(async()=>{let c,p,w,m,v,f,h,k,g,b,E,x,U,K,q,C,I,M,L,T,V,F,P;c={key:0},p={key:1},w={key:2},m={key:3},v={key:4},f={key:5},h={key:6},k={key:7},g={key:8},b={key:9},E={key:10},x={key:11},U={key:12},K={key:13},q=["href"],C=["src"],I={key:14},M={key:15},L=["href"],T={key:16},V={key:17},F={key:18},P={key:19},G=z({__name:"MessageTable",props:{list:{type:Array,required:!0},loading:{type:Boolean,required:!0}},emits:["send"],setup(H,{emit:J}){const A=H,N=J;return(ct,pt)=>{const d=O,s=Q,W=R,X=S,Y=D("hasPermi"),j=Z;return e(),a("div",null,[B((e(),y(X,{data:A.list},{default:n(()=>[l(d,{label:"\u53D1\u9001\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:r(ut)},null,8,["formatter"]),l(d,{label:"\u6D88\u606F\u7C7B\u578B",align:"center",prop:"type",width:"80"}),l(d,{label:"\u53D1\u9001\u65B9",align:"center",prop:"sendFrom",width:"80"},{default:n(t=>[t.row.sendFrom===1?(e(),y(s,{key:0,type:"success"},{default:n(()=>[o("\u7C89\u4E1D")]),_:1})):(e(),y(s,{key:1,type:"info"},{default:n(()=>[o("\u516C\u4F17\u53F7")]),_:1}))]),_:1}),l(d,{label:"\u7528\u6237\u6807\u8BC6",align:"center",prop:"openid",width:"300"}),l(d,{label:"\u5185\u5BB9",prop:"content"},{default:n(t=>[t.row.type===r(i).Event&&t.row.event==="subscribe"?(e(),a("div",c,[l(s,{type:"success"},{default:n(()=>[o("\u5173\u6CE8")]),_:1})])):t.row.type===r(i).Event&&t.row.event==="unsubscribe"?(e(),a("div",p,[l(s,{type:"danger"},{default:n(()=>[o("\u53D6\u6D88\u5173\u6CE8")]),_:1})])):t.row.type===r(i).Event&&t.row.event==="CLICK"?(e(),a("div",w,[l(s,null,{default:n(()=>[o("\u70B9\u51FB\u83DC\u5355")]),_:1}),o(" \u3010"+u(t.row.eventKey)+"\u3011 ",1)])):t.row.type===r(i).Event&&t.row.event==="VIEW"?(e(),a("div",m,[l(s,null,{default:n(()=>[o("\u70B9\u51FB\u83DC\u5355\u94FE\u63A5")]),_:1}),o(" \u3010"+u(t.row.eventKey)+"\u3011 ",1)])):t.row.type===r(i).Event&&t.row.event==="scancode_waitmsg"?(e(),a("div",v,[l(s,null,{default:n(()=>[o("\u626B\u7801\u7ED3\u679C")]),_:1}),o(" \u3010"+u(t.row.eventKey)+"\u3011 ",1)])):t.row.type===r(i).Event&&t.row.event==="scancode_push"?(e(),a("div",f,[l(s,null,{default:n(()=>[o("\u626B\u7801\u7ED3\u679C")]),_:1}),o(" \u3010"+u(t.row.eventKey)+"\u3011 ",1)])):t.row.type===r(i).Event&&t.row.event==="pic_sysphoto"?(e(),a("div",h,[l(s,null,{default:n(()=>[o("\u7CFB\u7EDF\u62CD\u7167\u53D1\u56FE")]),_:1})])):t.row.type===r(i).Event&&t.row.event==="pic_photo_or_album"?(e(),a("div",k,[l(s,null,{default:n(()=>[o("\u62CD\u7167\u6216\u8005\u76F8\u518C")]),_:1})])):t.row.type===r(i).Event&&t.row.event==="pic_weixin"?(e(),a("div",g,[l(s,null,{default:n(()=>[o("\u5FAE\u4FE1\u76F8\u518C")]),_:1})])):t.row.type===r(i).Event&&t.row.event==="location_select"?(e(),a("div",b,[l(s,null,{default:n(()=>[o("\u9009\u62E9\u5730\u7406\u4F4D\u7F6E")]),_:1})])):t.row.type===r(i).Event?(e(),a("div",E,[l(s,{type:"danger"},{default:n(()=>[o("\u672A\u77E5\u4E8B\u4EF6\u7C7B\u578B")]),_:1})])):t.row.type===r(i).Text?(e(),a("div",x,u(t.row.content),1)):t.row.type===r(i).Voice?(e(),a("div",U,[l(r(rt),{url:t.row.mediaUrl,content:t.row.recognition},null,8,["url","content"])])):t.row.type===r(i).Image?(e(),a("div",K,[_("a",{target:"_blank",href:t.row.mediaUrl},[_("img",{src:t.row.mediaUrl,style:{width:"100px"}},null,8,C)],8,q)])):t.row.type===r(i).Video||t.row.type==="shortvideo"?(e(),a("div",I,[l(r(tt),{url:t.row.mediaUrl,style:{"margin-top":"10px"}},null,8,["url"])])):t.row.type===r(i).Link?(e(),a("div",M,[l(s,null,{default:n(()=>[o("\u94FE\u63A5")]),_:1}),o(" \uFF1A "),_("a",{href:t.row.url,target:"_blank"},u(t.row.title),9,L)])):t.row.type===r(i).Location?(e(),a("div",T,[l(r(at),{label:t.row.label,"location-y":t.row.locationY,"location-x":t.row.locationX},null,8,["label","location-y","location-x"])])):t.row.type===r(i).Music?(e(),a("div",V,[l(r(nt),{title:t.row.title,description:t.row.description,"thumb-media-url":t.row.thumbMediaUrl,"music-url":t.row.musicUrl,"hq-music-url":t.row.hqMusicUrl},null,8,["title","description","thumb-media-url","music-url","hq-music-url"])])):t.row.type===r(i).News?(e(),a("div",F,[l(r(st),{articles:t.row.articles},null,8,["articles"])])):(e(),a("div",P,[l(s,{type:"danger"},{default:n(()=>[o("\u672A\u77E5\u6D88\u606F\u7C7B\u578B")]),_:1})]))]),_:1}),l(d,{label:"\u64CD\u4F5C",align:"center","class-name":"small-padding fixed-width"},{default:n(t=>[B((e(),y(W,{link:"",type:"primary",onClick:wt=>N("send",t.row.userId)},{default:n(()=>[o(" \u6D88\u606F ")]),_:2},1032,["onClick"])),[[Y,["mp:message:send"]]])]),_:1})]),_:1},8,["data"])),[[j,A.loading]])])}}})});export{G as _,_t as __tla};

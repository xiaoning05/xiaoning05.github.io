import{d as K,r as w,o as a,c as n,a as l,f as u,w as _,h as e,t as d,ak as x,__tla as C}from"./index-d5b00dc9.js";let b,E=Promise.all([(()=>{try{return C}catch{}})()]).then(async()=>{let v,i,y,c,r,o,p,f,k,m,h;v={key:0},i={key:1},y={key:2},c={key:3},r={key:4},o={key:5},p={key:6},f={key:7},k={key:8},m={key:9},h={key:10},b=K({__name:"MsgEvent",props:{item:{}},setup(g){const t=w(g.item);return(I,L)=>{const s=x;return a(),n("div",null,[l(t).event==="subscribe"?(a(),n("div",v,[u(s,{type:"success"},{default:_(()=>[e("\u5173\u6CE8")]),_:1})])):l(t).event==="unsubscribe"?(a(),n("div",i,[u(s,{type:"danger"},{default:_(()=>[e("\u53D6\u6D88\u5173\u6CE8")]),_:1})])):l(t).event==="CLICK"?(a(),n("div",y,[u(s,null,{default:_(()=>[e("\u70B9\u51FB\u83DC\u5355")]),_:1}),e(" \u3010"+d(l(t).eventKey)+"\u3011 ",1)])):l(t).event==="VIEW"?(a(),n("div",c,[u(s,null,{default:_(()=>[e("\u70B9\u51FB\u83DC\u5355\u94FE\u63A5")]),_:1}),e(" \u3010"+d(l(t).eventKey)+"\u3011 ",1)])):l(t).event==="scancode_waitmsg"?(a(),n("div",r,[u(s,null,{default:_(()=>[e("\u626B\u7801\u7ED3\u679C")]),_:1}),e(" \u3010"+d(l(t).eventKey)+"\u3011 ",1)])):l(t).event==="scancode_push"?(a(),n("div",o,[u(s,null,{default:_(()=>[e("\u626B\u7801\u7ED3\u679C")]),_:1}),e(" \u3010"+d(l(t).eventKey)+"\u3011 ",1)])):l(t).event==="pic_sysphoto"?(a(),n("div",p,[u(s,null,{default:_(()=>[e("\u7CFB\u7EDF\u62CD\u7167\u53D1\u56FE")]),_:1})])):l(t).event==="pic_photo_or_album"?(a(),n("div",f,[u(s,null,{default:_(()=>[e("\u62CD\u7167\u6216\u8005\u76F8\u518C")]),_:1})])):l(t).event==="pic_weixin"?(a(),n("div",k,[u(s,null,{default:_(()=>[e("\u5FAE\u4FE1\u76F8\u518C")]),_:1})])):l(t).event==="location_select"?(a(),n("div",m,[u(s,null,{default:_(()=>[e("\u9009\u62E9\u5730\u7406\u4F4D\u7F6E")]),_:1})])):(a(),n("div",h,[u(s,{type:"danger"},{default:_(()=>[e("\u672A\u77E5\u4E8B\u4EF6\u7C7B\u578B")]),_:1})]))])}}})});export{b as _,E as __tla};

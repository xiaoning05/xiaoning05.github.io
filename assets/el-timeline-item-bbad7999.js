import{d as m,b0 as u,bW as w,b7 as T,aJ as p,a$ as S,bv as $,a1 as B,o as l,c as i,g as r,R as s,a,av as E,v as y,w as x,aQ as z,Z as I,a4 as n,t as f,b2 as C,b4 as J,b5 as P,__tla as Q}from"./index-d5b00dc9.js";let v,b,R=Promise.all([(()=>{try{return Q}catch{}})()]).then(async()=>{const g=m({name:"ElTimeline",setup(d,{slots:o}){const e=u("timeline");return w("timeline",o),()=>T("ul",{class:[e.b()]},[p(o,"default")])}}),_=S({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:$},hollow:{type:Boolean,default:!1}}),h=m({name:"ElTimelineItem"});var c=C(m({...h,props:_,setup(d){const o=d,e=u("timeline-item"),k=B(()=>[e.e("node"),e.em("node",o.size||""),e.em("node",o.type||""),e.is("hollow",o.hollow)]);return(t,W)=>(l(),i("li",{class:s([a(e).b(),{[a(e).e("center")]:t.center}])},[r("div",{class:s(a(e).e("tail"))},null,2),t.$slots.dot?n("v-if",!0):(l(),i("div",{key:0,class:s(a(k)),style:E({backgroundColor:t.color})},[t.icon?(l(),y(a(I),{key:0,class:s(a(e).e("icon"))},{default:x(()=>[(l(),y(z(t.icon)))]),_:1},8,["class"])):n("v-if",!0)],6)),t.$slots.dot?(l(),i("div",{key:1,class:s(a(e).e("dot"))},[p(t.$slots,"dot")],2)):n("v-if",!0),r("div",{class:s(a(e).e("wrapper"))},[t.hideTimestamp||t.placement!=="top"?n("v-if",!0):(l(),i("div",{key:0,class:s([a(e).e("timestamp"),a(e).is("top")])},f(t.timestamp),3)),r("div",{class:s(a(e).e("content"))},[p(t.$slots,"default")],2),t.hideTimestamp||t.placement!=="bottom"?n("v-if",!0):(l(),i("div",{key:1,class:s([a(e).e("timestamp"),a(e).is("bottom")])},f(t.timestamp),3))],2)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/timeline/src/timeline-item.vue"]]);b=J(g,{TimelineItem:c}),v=P(c)});export{v as E,R as __tla,b as a};

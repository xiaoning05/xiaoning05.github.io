import{i as ee,bV as te,al as re,r as t,e as J,a1 as se,aS as Ie,p as oe,o as W,c as _,a as e,av as w,g as n,x as ae,a3 as ie,f as $e,w as Oe,R as Q,t as L,a4 as K,S as _e,am as ce,dn as ue,dp as pe,F as Ce,q as Be,b8 as Ne,h as Ee,v as Ve,aQ as je,__tla as De}from"./index-d5b00dc9.js";import{C as R,__tla as Je}from"./index-91a13e3d.js";import{_ as Le}from"./_plugin-vue_export-helper-1b428a4d.js";let ve,Me=Promise.all([(()=>{try{return De}catch{}})(),(()=>{try{return Je}catch{}})()]).then(async()=>{function q(a,f="XwKsGlMcdPMEhR1B"){const l=R.enc.Utf8.parse(f),o=R.enc.Utf8.parse(a);return R.AES.encrypt(o,l,{mode:R.mode.ECB,padding:R.pad.Pkcs7}).toString()}function le(a){let f,l,o,g;const s=window,c=a.$el.parentNode.offsetWidth||s.offsetWidth,y=a.$el.parentNode.offsetHeight||s.offsetHeight;return f=a.imgSize.width.indexOf("%")!=-1?parseInt(a.imgSize.width)/100*c+"px":a.imgSize.width,l=a.imgSize.height.indexOf("%")!=-1?parseInt(a.imgSize.height)/100*y+"px":a.imgSize.height,o=a.barSize.width.indexOf("%")!=-1?parseInt(a.barSize.width)/100*c+"px":a.barSize.width,g=a.barSize.height.indexOf("%")!=-1?parseInt(a.barSize.height)/100*y+"px":a.barSize.height,{imgWidth:f,imgHeight:l,barWidth:o,barHeight:g}}const he={style:{position:"relative"}},de=["src"],ge=[n("i",{class:"iconfont icon-refresh"},null,-1)],fe=["textContent"],ye=["textContent"],me=["src"],be={__name:"VerifySlide",props:{captchaType:{type:String},type:{type:String,default:"1"},mode:{type:String,default:"fixed"},vSpace:{type:Number,default:5},explain:{type:String,default:""},imgSize:{type:Object,default:()=>({width:"310px",height:"155px"})},blockSize:{type:Object,default:()=>({width:"50px",height:"50px"})},barSize:{type:Object,default:()=>({width:"310px",height:"30px"})}},setup(a){const f=a,{t:l}=ee(),{mode:o,captchaType:g,type:s,blockSize:c,explain:y}=te(f),{proxy:p}=re();let u=t(""),z=t(""),M=t(""),P=t(""),H=t(""),m=t(""),N=t(""),b=t(""),k=t(""),E=t(""),v=J({imgHeight:0,imgWidth:0,barHeight:0,barWidth:0}),C=t(void 0),I=t(void 0),$=t(void 0),B=t("#ddd"),O=t(void 0),V=t("icon-right"),j=t(!1),d=t(!1),r=t(!0),S=t(""),x=t(""),X=t(0);const D=se(()=>p.$el.querySelector(".verify-bar-area")),A=()=>{y.value===""?k.value=l("captcha.slide"):k.value=y.value,ne(),ce(()=>{let{imgHeight:i,imgWidth:h,barHeight:T,barWidth:Z}=le(p);v.imgHeight=i,v.imgWidth=h,v.barHeight=T,v.barWidth=Z,p.$parent.$emit("ready",p)}),window.removeEventListener("touchmove",function(i){U(i)}),window.removeEventListener("mousemove",function(i){U(i)}),window.removeEventListener("touchend",function(){G()}),window.removeEventListener("mouseup",function(){G()}),window.addEventListener("touchmove",function(i){U(i)}),window.addEventListener("mousemove",function(i){U(i)}),window.addEventListener("touchend",function(){G()}),window.addEventListener("mouseup",function(){G()})};Ie(s,()=>{A()}),oe(()=>{A(),p.$el.onselectstart=function(){return!1}});const F=i=>{if((i=i||window.event).touches)h=i.touches[0].pageX;else var h=i.clientX;X.value=Math.floor(h-D.value.getBoundingClientRect().left),m.value=+new Date,d.value==0&&(k.value="",$.value="#337ab7",B.value="#337AB7",O.value="#fff",i.stopPropagation(),j.value=!0)},U=i=>{if(i=i||window.event,j.value&&d.value==0){if(i.touches)h=i.touches[0].pageX;else var h=i.clientX;var T=h-D.value.getBoundingClientRect().left;T>=D.value.offsetWidth-parseInt(parseInt(c.value.width)/2)-2&&(T=D.value.offsetWidth-parseInt(parseInt(c.value.width)/2)-2),T<=0&&(T=parseInt(parseInt(c.value.width)/2)),C.value=T-X.value+"px",I.value=T-X.value+"px"}},G=()=>{if(N.value=+new Date,j.value&&d.value==0){var i=parseInt((C.value||"0").replace("px",""));i=310*i/parseInt(v.imgWidth);let h={captchaType:g.value,pointJson:u.value?q(JSON.stringify({x:i,y:5}),u.value):JSON.stringify({x:i,y:5}),token:H.value};ue(h).then(T=>{if(T.repCode=="0000"){$.value="#5cb85c",B.value="#5cb85c",O.value="#fff",V.value="icon-check",r.value=!1,d.value=!0,o.value=="pop"&&setTimeout(()=>{p.$parent.clickShow=!1,Y()},1500),z.value=!0,b.value=`${((N.value-m.value)/1e3).toFixed(2)}s
            ${l("captcha.success")}`;var Z=u.value?q(H.value+"---"+JSON.stringify({x:i,y:5}),u.value):H.value+"---"+JSON.stringify({x:i,y:5});setTimeout(()=>{b.value="",p.$parent.closeBox(),p.$parent.$emit("success",{captchaVerification:Z})},1e3)}else $.value="#d9534f",B.value="#d9534f",O.value="#fff",V.value="icon-close",z.value=!1,setTimeout(function(){Y()},1e3),p.$parent.$emit("error",p),b.value=l("captcha.fail"),setTimeout(()=>{b.value=""},1e3)}),j.value=!1}},Y=async()=>{r.value=!0,E.value="",S.value="left .3s",C.value=0,I.value=void 0,x.value="width .3s",B.value="#ddd",$.value="#fff",O.value="#000",V.value="icon-right",d.value=!1,await ne(),setTimeout(()=>{x.value="",S.value="",k.value=y.value},300)},ne=async()=>{let i={captchaType:g.value};const h=await pe(i);h.repCode=="0000"?(M.value=h.repData.originalImageBase64,P.value=h.repData.jigsawImageBase64,H.value=h.repData.token,u.value=h.repData.secretKey):b.value=h.repMsg};return(i,h)=>(W(),_("div",he,[e(s)==="2"?(W(),_("div",{key:0,style:w({height:parseInt(e(v).imgHeight)+a.vSpace+"px"}),class:"verify-img-out"},[n("div",{style:w({width:e(v).imgWidth,height:e(v).imgHeight}),class:"verify-img-panel"},[n("img",{src:"data:image/png;base64,"+e(M),alt:"",style:{display:"block",width:"100%",height:"100%"}},null,8,de),ae(n("div",{class:"verify-refresh",onClick:Y},ge,512),[[ie,e(r)]]),$e(_e,{name:"tips"},{default:Oe(()=>[e(b)?(W(),_("span",{key:0,class:Q([e(z)?"suc-bg":"err-bg","verify-tips"])},L(e(b)),3)):K("",!0)]),_:1})],4)],4)):K("",!0),n("div",{style:w({width:e(v).imgWidth,height:a.barSize.height,"line-height":a.barSize.height}),class:"verify-bar-area"},[n("span",{class:"verify-msg",textContent:L(e(k))},null,8,fe),n("div",{style:w({width:e(I)!==void 0?e(I):a.barSize.height,height:a.barSize.height,"border-color":e(B),transaction:e(x)}),class:"verify-left-bar"},[n("span",{class:"verify-msg",textContent:L(e(E))},null,8,ye),n("div",{style:w({width:a.barSize.height,height:a.barSize.height,"background-color":e($),left:e(C),transition:e(S)}),class:"verify-move-block",onMousedown:F,onTouchstart:F},[n("i",{class:Q(["verify-icon iconfont",e(V)]),style:w({color:e(O)})},null,6),e(s)==="2"?(W(),_("div",{key:0,style:w({width:Math.floor(47*parseInt(e(v).imgWidth)/310)+"px",height:e(v).imgHeight,top:"-"+(parseInt(e(v).imgHeight)+a.vSpace)+"px","background-size":e(v).imgWidth+" "+e(v).imgHeight}),class:"verify-sub-block"},[n("img",{src:"data:image/png;base64,"+e(P),alt:"",style:{display:"block",width:"100%",height:"100%","-webkit-user-drag":"none"}},null,8,me)],4)):K("",!0)],36)],4)],4)]))}},Se={style:{position:"relative"}},xe={class:"verify-img-out"},we=[n("i",{class:"iconfont icon-refresh"},null,-1)],ze=["src"],ke={class:"verify-msg"},Te={name:"Vue3Verify",components:{VerifySlide:be,VerifyPoints:{__name:"VerifyPoints",props:{mode:{type:String,default:"fixed"},captchaType:{type:String},vSpace:{type:Number,default:5},imgSize:{type:Object,default:()=>({width:"310px",height:"155px"})},barSize:{type:Object,default:()=>({width:"310px",height:"40px"})}},setup(a){const f=a,{t:l}=ee(),{mode:o,captchaType:g}=te(f),{proxy:s}=re();let c=t(""),y=t(3),p=J([]),u=J([]),z=t(1),M=t(""),P=J([]),H=t(""),m=J({imgHeight:0,imgWidth:0,barHeight:0,barWidth:0}),N=J([]),b=t(""),k=t(void 0),E=t(void 0),v=t(!0),C=t(!0);oe(()=>{p.splice(0,p.length),u.splice(0,u.length),z.value=1,V(),ce(()=>{let{imgHeight:d,imgWidth:r,barHeight:S,barWidth:x}=le(s);m.imgHeight=d,m.imgWidth=r,m.barHeight=S,m.barWidth=x,s.$parent.$emit("ready",s)}),s.$el.onselectstart=function(){return!1}});const I=t(null),$=function(d,r){return{x:r.offsetX,y:r.offsetY}},B=function(d){return N.push(Object.assign({},d)),z.value+1},O=async function(){N.splice(0,N.length),k.value="#000",E.value="#ddd",C.value=!0,p.splice(0,p.length),u.splice(0,u.length),z.value=1,await V(),v.value=!0},V=async()=>{let d={captchaType:g.value};const r=await pe(d);r.repCode=="0000"?(M.value=r.repData.originalImageBase64,H.value=r.repData.token,c.value=r.repData.secretKey,P.value=r.repData.wordList,b.value=l("captcha.point")+"\u3010"+P.value.join(",")+"\u3011"):b.value=r.repMsg},j=function(d,r){return d.map(S=>({x:Math.round(310*S.x/parseInt(r.imgWidth)),y:Math.round(155*S.y/parseInt(r.imgHeight))}))};return(d,r)=>(W(),_("div",Se,[n("div",xe,[n("div",{style:w({width:e(m).imgWidth,height:e(m).imgHeight,"background-size":e(m).imgWidth+" "+e(m).imgHeight,"margin-bottom":a.vSpace+"px"}),class:"verify-img-panel"},[ae(n("div",{class:"verify-refresh",style:{"z-index":"3"},onClick:O},we,512),[[ie,e(v)]]),n("img",{ref_key:"canvas",ref:I,src:"data:image/png;base64,"+e(M),alt:"",style:{display:"block",width:"100%",height:"100%"},onClick:r[0]||(r[0]=S=>e(C)?(x=>{if(u.push($(I,x)),z.value==y.value){z.value=B($(I,x));let X=j(u,m);u.length=0,u.push(...X),setTimeout(()=>{var D=c.value?q(H.value+"---"+JSON.stringify(u),c.value):H.value+"---"+JSON.stringify(u);let A={captchaType:g.value,pointJson:c.value?q(JSON.stringify(u),c.value):JSON.stringify(u),token:H.value};ue(A).then(F=>{F.repCode=="0000"?(k.value="#4cae4c",E.value="#5cb85c",b.value=l("captcha.success"),C.value=!1,o.value=="pop"&&setTimeout(()=>{s.$parent.clickShow=!1,O()},1500),s.$parent.$emit("success",{captchaVerification:D})):(s.$parent.$emit("error",s),k.value="#d9534f",E.value="#d9534f",b.value=l("captcha.fail"),setTimeout(()=>{O()},700))})},400)}z.value<y.value&&(z.value=B($(I,x)))})(S):void 0)},null,8,ze),(W(!0),_(Ce,null,Be(e(N),(S,x)=>(W(),_("div",{key:x,style:w({"background-color":"#1abd6c",color:"#fff","z-index":9999,width:"20px",height:"20px","text-align":"center","line-height":"20px","border-radius":"50%",position:"absolute",top:parseInt(S.y-10)+"px",left:parseInt(S.x-10)+"px"}),class:"point-area"},L(x+1),5))),128))],4)]),n("div",{style:w({width:e(m).imgWidth,color:e(k),"border-color":e(E),"line-height":a.barSize.height}),class:"verify-bar-area"},[n("span",ke,L(e(b)),1)],4)]))}}},props:{captchaType:{type:String,required:!0},figure:{type:Number},arith:{type:Number},mode:{type:String,default:"pop"},vSpace:{type:Number},explain:{type:String},imgSize:{type:Object,default:()=>({width:"310px",height:"155px"})},blockSize:{type:Object},barSize:{type:Object}},setup(a){const{t:f}=ee(),{captchaType:l,mode:o}=te(a),g=t(!1),s=t(void 0),c=t(void 0),y=t({}),p=se(()=>o.value!="pop"||g.value);return Ne(()=>{switch(l.value){case"blockPuzzle":s.value="2",c.value="VerifySlide";break;case"clickWord":s.value="",c.value="VerifyPoints"}}),{t:f,clickShow:g,verifyType:s,componentType:c,instance:y,showBox:p,closeBox:()=>{g.value=!1,y.value.refresh&&y.value.refresh()},show:()=>{o.value=="pop"&&(g.value=!0)}}}},We={key:0,class:"verifybox-top"},He=[n("i",{class:"iconfont icon-close"},null,-1)];ve=Le(Te,[["render",function(a,f,l,o,g,s){return ae((W(),_("div",{class:Q(l.mode=="pop"?"mask":"")},[n("div",{class:Q(l.mode=="pop"?"verifybox":""),style:w({"max-width":parseInt(l.imgSize.width)+20+"px"})},[l.mode=="pop"?(W(),_("div",We,[Ee(L(o.t("captcha.verification"))+" ",1),n("span",{class:"verifybox-close",onClick:f[0]||(f[0]=(...c)=>o.closeBox&&o.closeBox(...c))},He)])):K("",!0),n("div",{style:w({padding:l.mode=="pop"?"10px":"0"}),class:"verifybox-bottom"},[o.componentType?(W(),Ve(je(o.componentType),{key:0,ref:"instance",arith:l.arith,barSize:l.barSize,blockSize:l.blockSize,captchaType:l.captchaType,explain:l.explain,figure:l.figure,imgSize:l.imgSize,mode:l.mode,type:o.verifyType,vSpace:l.vSpace},null,8,["arith","barSize","blockSize","captchaType","explain","figure","imgSize","mode","type","vSpace"])):K("",!0)],4)],6)],2)),[[ie,o.showBox]])}]])});export{ve as _,Me as __tla};

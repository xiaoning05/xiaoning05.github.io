import{a_ as w,bw as C,a$ as S,ch as P,bu as F,d as _,bk as x,ci as U,b0 as q,r as A,cj as Y,bE as D,Y as i,o as f,q as b,e as v,a as c,V as G,N as J,aP as K,a0 as L,c as Q,F as R,g as W,x as $,b1 as X,__tla as Z}from"./index-b079f499.js";let I,ee=Promise.all([(()=>{try{return Z}catch{}})()]).then(async()=>{const V=w({format:{type:String,default:"HH:mm"},modelValue:String,disabled:Boolean,editable:{type:Boolean,default:!0},effect:{type:String,default:"light"},clearable:{type:Boolean,default:!0},size:C,placeholder:String,start:{type:String,default:"09:00"},end:{type:String,default:"18:00"},step:{type:String,default:"00:30"},minTime:String,maxTime:String,name:String,prefixIcon:{type:S([String,Object]),default:()=>P},clearIcon:{type:S([String,Object]),default:()=>F}}),u=n=>{const o=(n||"").split(":");if(o.length>=2){let t=Number.parseInt(o[0],10);const r=Number.parseInt(o[1],10),s=n.toUpperCase();return s.includes("AM")&&t===12?t=0:s.includes("PM")&&t!==12&&(t+=12),{hours:t,minutes:r}}return null},h=(n,o)=>{const t=u(n);if(!t)return-1;const r=u(o);if(!r)return-1;const s=t.minutes+60*t.hours,d=r.minutes+60*r.hours;return s===d?0:s>d?1:-1},g=n=>`${n}`.padStart(2,"0"),m=n=>`${g(n.hours)}:${g(n.minutes)}`,k=(n,o)=>{const t=u(n);if(!t)return"";const r=u(o);if(!r)return"";const s={hours:t.hours,minutes:t.minutes};return s.minutes+=r.minutes,s.hours+=r.hours,s.hours+=Math.floor(s.minutes/60),s.minutes=s.minutes%60,m(s)},z=_({name:"ElTimeSelect"});var p=X(_({...z,props:V,emits:["change","blur","focus","update:modelValue"],setup(n,{expose:o}){const t=n;x.extend(U);const{Option:r}=$,s=q("input"),d=A(),T=Y(),{lang:B}=D(),E=i(()=>t.modelValue),H=i(()=>{const e=u(t.start);return e?m(e):null}),y=i(()=>{const e=u(t.end);return e?m(e):null}),M=i(()=>{const e=u(t.step);return e?m(e):null}),N=i(()=>{const e=u(t.minTime||"");return e?m(e):null}),j=i(()=>{const e=u(t.maxTime||"");return e?m(e):null}),O=i(()=>{const e=[];if(t.start&&t.end&&t.step){let l,a=H.value;for(;a&&y.value&&h(a,y.value)<=0;)l=x(a,"HH:mm").locale(B.value).format(t.format),e.push({value:l,disabled:h(a,N.value||"-1:-1")<=0||h(a,j.value||"100:100")>=0}),a=k(a,M.value)}return e});return o({blur:()=>{var e,l;(l=(e=d.value)==null?void 0:e.blur)==null||l.call(e)},focus:()=>{var e,l;(l=(e=d.value)==null?void 0:e.focus)==null||l.call(e)}}),(e,l)=>(f(),b(c($),{ref_key:"select",ref:d,"model-value":c(E),disabled:c(T),clearable:e.clearable,"clear-icon":e.clearIcon,size:e.size,effect:e.effect,placeholder:e.placeholder,"default-first-option":"",filterable:e.editable,"onUpdate:modelValue":l[0]||(l[0]=a=>e.$emit("update:modelValue",a)),onChange:l[1]||(l[1]=a=>e.$emit("change",a)),onBlur:l[2]||(l[2]=a=>e.$emit("blur",a)),onFocus:l[3]||(l[3]=a=>e.$emit("focus",a))},{prefix:v(()=>[e.prefixIcon?(f(),b(c(G),{key:0,class:J(c(s).e("prefix-icon"))},{default:v(()=>[(f(),b(K(e.prefixIcon)))]),_:1},8,["class"])):L("v-if",!0)]),default:v(()=>[(f(!0),Q(R,null,W(c(O),a=>(f(),b(c(r),{key:a.value,label:a.value,value:a.value,disabled:a.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["model-value","disabled","clearable","clear-icon","size","effect","placeholder","filterable"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-select/src/time-select.vue"]]);p.install=n=>{n.component(p.name,p)},I=p});export{I as E,ee as __tla};

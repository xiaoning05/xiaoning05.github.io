const g={id:"id",children:"children",pid:"pid"},y={children:"children",label:"name",value:"id",isLeaf:"leaf",emitPath:!1},h=r=>Object.assign({},g,r),v=(r,t={})=>{t=h(t);const{children:e}=t,n=[...r];for(let i=0;i<n.length;i++)n[i][e]&&n.splice(i+1,0,...n[i][e]);return n},A=(r,t,e={})=>{e=h(e);const n=[],i=[...r],o=new Set,{children:c}=e;for(;i.length;){const s=i[0];if(o.has(s))n.pop(),i.shift();else if(o.add(s),s[c]&&i.unshift(...s[c]),n.push(s),t(s))return n}return null},b=(r,t,e={})=>{const n=(e=h(e)).children;return function i(o){return o.map(c=>({...c})).filter(c=>(c[n]=c[n]&&i(c[n]),t(c)||c[n]&&c[n].length))}(r)},O=(r,t)=>r.map(e=>p(e,t)),p=(r,{children:t="children",conversion:e})=>{const n=Array.isArray(r[t])&&r[t].length>0,i=e(r)||{};return n?{...i,[t]:r[t].map(o=>p(o,{children:t,conversion:e}))}:{...i}},m=(r,t,e={})=>{r.forEach(n=>{const i=t(n,e)||n;n.children&&m(n.children,t,i)})},S=(r,t,e,n)=>{if(!Array.isArray(r))return[];const i=t||"id",o=e||"parentId",c=n||"children",s={},a={},d=[];for(const l of r){const f=l[o];s[f]==null&&(s[f]=[]),a[l[i]]=l,s[f].push(l)}for(const l of r)a[l[o]]==null&&d.push(l);for(const l of d)u(l);function u(l){if(s[l[i]]!==null&&(l[c]=s[l[i]]),l[c])for(const f of l[c])u(f)}return d},$=(r,t,e,n,i)=>{t=t||"id",e=e||"parentId",i=i||Math.min(...r.map(s=>s[e]))||0;const o=JSON.parse(JSON.stringify(r)),c=o.filter(s=>{const a=o.filter(d=>s[t]===d[e]);return a.length>0&&(s.children=a),s[e]===i});return c!==""?c:r},I=(r,t)=>{if(r===void 0||!Array.isArray(r)||r.length===0)return"";const e=r.find(o=>o.id===t);if(e!==void 0)return e.name;let n="";function i(o){for(const c of o){if(c.id===t)return n+=` / ${c.name}`,!0;if(c.children!==void 0&&c.children.length!==0&&(n+=` / ${c.name}`,i(c.children)))return!0}return!1}for(const o of r)if(n=`${o.name}`,i(o.children))break;return n};export{$ as a,O as b,A as c,y as d,m as e,b as f,v as g,S as h,I as t};

import{aX as Zt,d as Xt,ag as tt,aS as et,r as st,a1 as nt,o as rt,c as at,f as ot,w as Kt,aj as Jt,a as S,l as Qt,R as z,g as te,a4 as ee,U as se,P as ne,_ as re,__tla as ae}from"./index-d5b00dc9.js";import{_ as oe}from"./_plugin-vue_export-helper-1b428a4d.js";let it,ie=Promise.all([(()=>{try{return ae}catch{}})()]).then(async()=>{const R=(a,t)=>a.push.apply(a,t),C=a=>a.sort((t,e)=>t.i-e.i||t.j-e.j),$=a=>{const t={};let e=1;return a.forEach(s=>{t[s]=e,e+=1}),t},lt={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},W=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,ct=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,ht=/^[A-Z\xbf-\xdf]+$/,G=/^[^a-z\xdf-\xff]+$/,ut=/^[a-z\xdf-\xff]+$/,dt=/^[^A-Z\xbf-\xdf]+$/,gt=/[a-z\xdf-\xff]/,pt=/[A-Z\xbf-\xdf]/,ft=/[^A-Za-z\xbf-\xdf]/gi,mt=/^\d+$/,N=new Date().getFullYear(),bt={recentYear:/19\d\d|200\d|201\d|202\d/g},Y=[" ",",",";",":","|","/","\\","_",".","-"],yt=Y.length;class wt{match({password:t}){const e=[...this.getMatchesWithoutSeparator(t),...this.getMatchesWithSeparator(t)],s=this.filterNoise(e);return C(s)}getMatchesWithSeparator(t){const e=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(t.length-6);n+=1)for(let r=n+5;r<=n+9&&!(r>=t.length);r+=1){const o=t.slice(n,+r+1||9e9),i=s.exec(o);if(i!=null){const l=this.mapIntegersToDayMonthYear([parseInt(i[1],10),parseInt(i[3],10),parseInt(i[4],10)]);l!=null&&e.push({pattern:"date",token:o,i:n,j:r,separator:i[2],year:l.year,month:l.month,day:l.day})}}return e}getMatchesWithoutSeparator(t){const e=[],s=/^\d{4,8}$/,n=r=>Math.abs(r.year-N);for(let r=0;r<=Math.abs(t.length-4);r+=1)for(let o=r+3;o<=r+7&&!(o>=t.length);o+=1){const i=t.slice(r,+o+1||9e9);if(s.exec(i)){const l=[],c=i.length;if(lt[c].forEach(([h,d])=>{const g=this.mapIntegersToDayMonthYear([parseInt(i.slice(0,h),10),parseInt(i.slice(h,d),10),parseInt(i.slice(d),10)]);g!=null&&l.push(g)}),l.length>0){let h=l[0],d=n(l[0]);l.slice(1).forEach(g=>{const f=n(g);f<d&&(h=g,d=f)}),e.push({pattern:"date",token:i,i:r,j:o,separator:"",year:h.year,month:h.month,day:h.day})}}}return e}filterNoise(t){return t.filter(e=>{let s=!1;const n=t.length;for(let r=0;r<n;r+=1){const o=t[r];if(e!==o&&o.i<=e.i&&o.j>=e.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(t){if(t[1]>31||t[1]<=0)return null;let e=0,s=0,n=0;for(let r=0,o=t.length;r<o;r+=1){const i=t[r];if(i>99&&i<1e3||i>2050)return null;i>31&&(s+=1),i>12&&(e+=1),i<=0&&(n+=1)}return s>=2||e===3||n>=2?null:this.getDayMonth(t)}getDayMonth(t){const e=[[t[2],t.slice(0,2)],[t[0],t.slice(1,3)]],s=e.length;for(let n=0;n<s;n+=1){const[r,o]=e[n];if(1e3<=r&&r<=2050){const i=this.mapIntegersToDayMonth(o);return i!=null?{year:r,month:i.month,day:i.day}:null}}for(let n=0;n<s;n+=1){const[r,o]=e[n],i=this.mapIntegersToDayMonth(o);if(i!=null)return{year:this.twoToFourDigitYear(r),month:i.month,day:i.day}}return null}mapIntegersToDayMonth(t){const e=[t,t.slice().reverse()];for(let s=0;s<e.length;s+=1){const n=e[s],r=n[0],o=n[1];if(r>=1&&r<=31&&o>=1&&o<=12)return{day:r,month:o}}return null}twoToFourDigitYear(t){return t>99?t:t>50?t+1900:t+2e3}}const T=new Uint32Array(65536),kt=(a,t)=>{if(a.length<t.length){const e=t;t=a,a=e}return t.length===0?a.length:a.length<=32?((e,s)=>{const n=e.length,r=s.length,o=1<<n-1;let i=-1,l=0,c=n,h=n;for(;h--;)T[e.charCodeAt(h)]|=1<<h;for(h=0;h<r;h++){let d=T[s.charCodeAt(h)];const g=d|l;d|=(d&i)+i^i,l|=~(d|i),i&=d,l&o&&c++,i&o&&c--,l=l<<1|1,i=i<<1|~(g|l),l&=g}for(h=n;h--;)T[e.charCodeAt(h)]=0;return c})(a,t):((e,s)=>{const n=s.length,r=e.length,o=[],i=[],l=Math.ceil(n/32),c=Math.ceil(r/32);for(let p=0;p<l;p++)i[p]=-1,o[p]=0;let h=0;for(;h<c-1;h++){let p=0,b=-1;const I=32*h,M=Math.min(32,r)+I;for(let m=I;m<M;m++)T[e.charCodeAt(m)]|=1<<m;for(let m=0;m<n;m++){const y=T[s.charCodeAt(m)],w=i[m/32|0]>>>m&1,j=o[m/32|0]>>>m&1,J=y|p,Q=((y|j)&b)+b^b|y|j;let E=p|~(Q|b),L=b&Q;E>>>31^w&&(i[m/32|0]^=1<<m),L>>>31^j&&(o[m/32|0]^=1<<m),E=E<<1|w,L=L<<1|j,b=L|~(J|E),p=E&J}for(let m=I;m<M;m++)T[e.charCodeAt(m)]=0}let d=0,g=-1;const f=32*h,k=Math.min(32,r-f)+f;for(let p=f;p<k;p++)T[e.charCodeAt(p)]|=1<<p;let x=r;for(let p=0;p<n;p++){const b=T[s.charCodeAt(p)],I=i[p/32|0]>>>p&1,M=o[p/32|0]>>>p&1,m=b|d,y=((b|M)&g)+g^g|b|M;let w=d|~(y|g),j=g&y;x+=w>>>r-1&1,x-=j>>>r-1&1,w>>>31^I&&(i[p/32|0]^=1<<p),j>>>31^M&&(o[p/32|0]^=1<<p),w=w<<1|I,j=j<<1|M,g=j|~(m|w),d=w&m}for(let p=f;p<k;p++)T[e.charCodeAt(p)]=0;return x})(a,t)},xt=(a,t,e)=>{let s=0;const n=Object.keys(t).find(r=>{const o=((c,h,d)=>{const g=c.length<=h.length,f=c.length<=d;return g||f?Math.ceil(c.length/4):d})(a,r,e);if(Math.abs(a.length-r.length)>o)return!1;const i=kt(a,r),l=i<=o;return l&&(s=i),l});return n?{levenshteinDistance:s,levenshteinDistanceEntry:n}:{}};var V={a:["4","@"],b:["8"],c:["(","{","[","<"],d:["6","|)"],e:["3"],f:["#"],g:["6","9","&"],h:["#","|-|"],i:["1","!","|"],k:["<","|<"],l:["!","1","|","7"],m:["^^","nn","2n","/\\\\/\\\\"],n:["//"],o:["0","()"],q:["9"],u:["|_|"],s:["$","5"],t:["+","7"],v:["<",">","/"],w:["^/","uu","vv","2u","2v","\\\\/\\\\/"],x:["%","><"],z:["2"]},O={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class D{constructor(t=[]){this.parents=t,this.children=new Map}addSub(t,...e){const s=t.charAt(0);this.children.has(s)||this.children.set(s,new D([...this.parents,s]));let n=this.children.get(s);for(let r=1;r<t.length;r+=1){const o=t.charAt(r);n.hasChild(o)||n.addChild(o),n=n.getChild(o)}return n.subs=(n.subs||[]).concat(e),this}getChild(t){return this.children.get(t)}isTerminal(){return!!this.subs}addChild(t){this.hasChild(t)||this.children.set(t,new D([...this.parents,t]))}hasChild(t){return this.children.has(t)}}var U=(a,t)=>(Object.entries(a).forEach(([e,s])=>{s.forEach(n=>{t.addSub(n,e)})}),t);const u=new class{constructor(){this.matchers={},this.l33tTable=V,this.trieNodeRoot=U(V,new D),this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=O,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=100,this.maxLength=256,this.setRankedDictionaries()}setOptions(a={}){a.l33tTable&&(this.l33tTable=a.l33tTable,this.trieNodeRoot=U(a.l33tTable,new D)),a.dictionary&&(this.dictionary=a.dictionary,this.setRankedDictionaries()),a.translations&&this.setTranslations(a.translations),a.graphs&&(this.graphs=a.graphs),a.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=a.useLevenshteinDistance),a.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=a.levenshteinThreshold),a.l33tMaxSubstitutions!==void 0&&(this.l33tMaxSubstitutions=a.l33tMaxSubstitutions),a.maxLength!==void 0&&(this.maxLength=a.maxLength)}setTranslations(a){if(!this.checkCustomTranslations(a))throw new Error("Invalid translations object fallback to keys");this.translations=a}checkCustomTranslations(a){let t=!0;return Object.keys(O).forEach(e=>{if(e in a){const s=e;Object.keys(O[s]).forEach(n=>{n in a[s]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const a={},t={};Object.keys(this.dictionary).forEach(e=>{a[e]=$(this.dictionary[e]),t[e]=this.getRankedDictionariesMaxWordSize(this.dictionary[e])}),this.rankedDictionaries=a,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(a){const t=a.map(e=>typeof e!="string"?e.toString().length:e.length);return t.length===0?0:t.reduce((e,s)=>Math.max(e,s),-1/0)}buildSanitizedRankedDictionary(a){const t=[];return a.forEach(e=>{const s=typeof e;s!=="string"&&s!=="number"&&s!=="boolean"||t.push(e.toString().toLowerCase())}),$(t)}extendUserInputsDictionary(a){this.dictionary.userInputs||(this.dictionary.userInputs=[]);const t=[...this.dictionary.userInputs,...a];this.rankedDictionaries.userInputs=this.buildSanitizedRankedDictionary(t),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize(t)}addMatcher(a,t){this.matchers[a]||(this.matchers[a]=t)}};class Mt{constructor(t){this.defaultMatch=t}match({password:t}){const e=t.split("").reverse().join("");return this.defaultMatch({password:e}).map(s=>({...s,token:s.token.split("").reverse().join(""),reversed:!0,i:t.length-1-s.j,j:t.length-1-s.i}))}}class St{constructor({substr:t,limit:e,trieRoot:s}){this.buffer=[],this.finalPasswords=[],this.substr=t,this.limit=e,this.trieRoot=s}getAllPossibleSubsAtIndex(t){const e=[];let s=this.trieRoot;for(let n=t;n<this.substr.length;n+=1){const r=this.substr.charAt(n);if(s=s.getChild(r),!s)break;e.push(s)}return e}helper({onlyFullSub:t,isFullSub:e,index:s,subIndex:n,changes:r,lastSubLetter:o,consecutiveSubCount:i}){if(this.finalPasswords.length>=this.limit)return;if(s===this.substr.length)return void(t===e&&this.finalPasswords.push({password:this.buffer.join(""),changes:r}));const l=[...this.getAllPossibleSubsAtIndex(s)];let c=!1;for(let h=s+l.length-1;h>=s;h-=1){const d=l[h-s];if(d.isTerminal()){if(o===d.parents.join("")&&i>=3)continue;c=!0;const g=d.subs;for(const f of g){this.buffer.push(f);const k=r.concat({i:n,letter:f,substitution:d.parents.join("")});if(this.helper({onlyFullSub:t,isFullSub:e,index:h+1,subIndex:n+f.length,changes:k,lastSubLetter:d.parents.join(""),consecutiveSubCount:o===d.parents.join("")?i+1:1}),this.buffer.pop(),this.finalPasswords.length>=this.limit)return}}}if(!t||!c){const h=this.substr.charAt(s);this.buffer.push(h),this.helper({onlyFullSub:t,isFullSub:e&&!c,index:s+1,subIndex:n+1,changes:r,lastSubLetter:o,consecutiveSubCount:i}),this.buffer.pop()}}getAll(){return this.helper({onlyFullSub:!0,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.helper({onlyFullSub:!1,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.finalPasswords}}class vt{constructor(t){this.defaultMatch=t}isAlreadyIncluded(t,e){return t.some(s=>Object.entries(s).every(([n,r])=>n==="subs"||r===e[n]))}match({password:t}){const e=[],s=((o,i,l)=>new St({substr:o,limit:i,trieRoot:l}).getAll())(t,u.l33tMaxSubstitutions,u.trieNodeRoot);let n=!1,r=!0;return s.forEach(o=>{if(n)return;const i=this.defaultMatch({password:o.password,useLevenshtein:r});r=!1,i.forEach(l=>{n||(n=l.i===0&&l.j===t.length-1);const c=((f,k,x)=>{const p=f.changes.filter(y=>y.i<k).reduce((y,w)=>y-w.letter.length+w.substitution.length,k),b=f.changes.filter(y=>y.i>=k&&y.i<=x),I=b.reduce((y,w)=>y-w.letter.length+w.substitution.length,x-k+p),M=[],m=[];return b.forEach(y=>{M.findIndex(w=>w.letter===y.letter&&w.substitution===y.substitution)<0&&(M.push({letter:y.letter,substitution:y.substitution}),m.push(`${y.substitution} -> ${y.letter}`))}),{i:p,j:I,subs:M,subDisplay:m.join(", ")}})(o,l.i,l.j),h=t.slice(c.i,+c.j+1||9e9),d={...l,l33t:!0,token:h,...c},g=this.isAlreadyIncluded(e,d);h.toLowerCase()===l.matchedWord||g||e.push(d)})}),e.filter(o=>o.token.length>1)}}class It{constructor(){this.l33t=new vt(this.defaultMatch),this.reverse=new Mt(this.defaultMatch)}match({password:t}){const e=[...this.defaultMatch({password:t}),...this.reverse.match({password:t}),...this.l33t.match({password:t})];return C(e)}defaultMatch({password:t,useLevenshtein:e=!0}){const s=[],n=t.length,r=t.toLowerCase();return Object.keys(u.rankedDictionaries).forEach(o=>{const i=u.rankedDictionaries[o],l=u.rankedDictionariesMaxWordSize[o],c=Math.min(l,n);for(let h=0;h<n;h+=1){const d=Math.min(h+c,n);for(let g=h;g<d;g+=1){const f=r.slice(h,+g+1||9e9),k=f in i;let x={};const p=h===0&&g===n-1;u.useLevenshteinDistance&&p&&!k&&e&&(x=xt(f,i,u.levenshteinThreshold));const b=Object.keys(x).length!==0;if(k||b){const I=i[b?x.levenshteinDistanceEntry:f];s.push({pattern:"dictionary",i:h,j:g,token:t.slice(h,+g+1||9e9),matchedWord:f,rank:I,dictionaryName:o,reversed:!1,l33t:!1,...x})}}}}),s}}class jt{match({password:t,regexes:e=bt}){const s=[];return Object.keys(e).forEach(n=>{const r=e[n];let o;for(r.lastIndex=0;o=r.exec(t);)if(o){const i=o[0];s.push({pattern:"regex",token:i,i:o.index,j:o.index+o[0].length-1,regexName:n,regexMatch:o})}}),C(s)}}var A={nCk(a,t){let e=a;if(t>e)return 0;if(t===0)return 1;let s=1;for(let n=1;n<=t;n+=1)s*=e,s/=n,e-=1;return s},log10:a=>a===0?0:Math.log(a)/Math.log(10),log2:a=>Math.log(a)/Math.log(2),factorial(a){let t=1;for(let e=2;e<=a;e+=1)t*=e;return t}},Tt=a=>{const t=a.replace(ft,"");if(t.match(dt)||t.toLowerCase()===t)return 1;const e=[W,ct,G],s=e.length;for(let n=0;n<s;n+=1){const r=e[n];if(t.match(r))return 2}return(n=>{const r=n.split(""),o=r.filter(h=>h.match(pt)).length,i=r.filter(h=>h.match(gt)).length;let l=0;const c=Math.min(o,i);for(let h=1;h<=c;h+=1)l+=A.nCk(o+i,h);return l})(t)};const B=(a,t)=>{let e=0,s=a.indexOf(t);for(;s>=0;)e+=1,s=a.indexOf(t,s+t.length);return e};var At=({l33t:a,subs:t,token:e})=>{if(!a)return 1;let s=1;return t.forEach(n=>{const{subbedCount:r,unsubbedCount:o}=(({sub:i,token:l})=>{const c=l.toLowerCase();return{subbedCount:B(c,i.substitution),unsubbedCount:B(c,i.letter)}})({sub:n,token:e});if(r===0||o===0)s*=2;else{const i=Math.min(o,r);let l=0;for(let c=1;c<=i;c+=1)l+=A.nCk(o+r,c);s*=l}}),s};const Ct=({token:a,graph:t,turns:e})=>{const s=Object.keys(u.graphs[t]).length,n=(i=>{let l=0;return Object.keys(i).forEach(c=>{const h=i[c];l+=h.filter(d=>!!d).length}),l/=Object.entries(i).length,l})(u.graphs[t]);let r=0;const o=a.length;for(let i=2;i<=o;i+=1){const l=Math.min(e,i-1);for(let c=1;c<=l;c+=1)r+=A.nCk(i-1,c-1)*s*n**c}return r},H={bruteforce:({token:a})=>{let t,e=10**a.length;return e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE),t=a.length===1?11:51,Math.max(e,t)},date:({year:a,separator:t})=>{let e=365*Math.max(Math.abs(a-N),20);return t&&(e*=4),e},dictionary:({rank:a,reversed:t,l33t:e,subs:s,token:n,dictionaryName:r})=>{const o=a,i=Tt(n),l=At({l33t:e,subs:s,token:n});let c;return c=r==="diceware"?3888:o*i*l*(t?2:1),{baseGuesses:o,uppercaseVariations:i,l33tVariations:l,calculation:c}},regex:({regexName:a,regexMatch:t,token:e})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};return a in s?s[a]**e.length:a==="recentYear"?Math.max(Math.abs(parseInt(t[0],10)-N),20):0},repeat:({baseGuesses:a,repeatCount:t})=>a*t,sequence:({token:a,ascending:t})=>{const e=a.charAt(0);let s=0;return s=["a","A","z","Z","0","1","9"].includes(e)?4:e.match(/\d/)?10:26,t||(s*=2),s*a.length},spatial:({graph:a,token:t,shiftedCount:e,turns:s})=>{let n=Ct({token:t,graph:a,turns:s});if(e){const r=t.length-e;if(e===0||r===0)n*=2;else{let o=0;for(let i=1;i<=Math.min(e,r);i+=1)o+=A.nCk(e+r,i);n*=o}}return Math.round(n)},separator:()=>yt};var Dt=(a,t)=>{const e={};if("guesses"in a&&a.guesses!=null)return a;const s=((i,l)=>{let c=1;return i.token.length<l.length&&(c=i.token.length===1?10:50),c})(a,t),n=((i,l)=>H[i]?H[i](l):u.matchers[i]&&"scoring"in u.matchers[i]?u.matchers[i].scoring(l):0)(a.pattern,a);let r=0;typeof n=="number"?r=n:a.pattern==="dictionary"&&(r=n.calculation,e.baseGuesses=n.baseGuesses,e.uppercaseVariations=n.uppercaseVariations,e.l33tVariations=n.l33tVariations);const o=Math.max(r,s);return{...a,...e,guesses:o,guessesLog10:A.log10(o)}};const v={password:"",optimal:{},excludeAdditive:!1,separatorRegex:void 0,fillArray(a,t){const e=[];for(let s=0;s<a;s+=1){let n=[];t==="object"&&(n={}),e.push(n)}return e},makeBruteforceMatch(a,t){return{pattern:"bruteforce",token:this.password.slice(a,+t+1||9e9),i:a,j:t}},update(a,t){const e=a.j,s=Dt(a,this.password);let n=s.guesses;t>1&&(n*=this.optimal.pi[s.i-1][t-1]);let r=A.factorial(t)*n;this.excludeAdditive||(r+=1e4**(t-1));let o=!1;Object.keys(this.optimal.g[e]).forEach(i=>{const l=this.optimal.g[e][i];parseInt(i,10)<=t&&l<=r&&(o=!0)}),o||(this.optimal.g[e][t]=r,this.optimal.m[e][t]=s,this.optimal.pi[e][t]=n)},bruteforceUpdate(a){let t=this.makeBruteforceMatch(0,a);this.update(t,1);for(let e=1;e<=a;e+=1){t=this.makeBruteforceMatch(e,a);const s=this.optimal.m[e-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(t,parseInt(n,10)+1)})}},unwind(a){const t=[];let e=a-1,s=0,n=1/0;const r=this.optimal.g[e];for(r&&Object.keys(r).forEach(o=>{const i=r[o];i<n&&(s=parseInt(o,10),n=i)});e>=0;){const o=this.optimal.m[e][s];t.unshift(o),e=o.i-1,s-=1}return t}};var F={mostGuessableMatchSequence(a,t,e=!1){v.password=a,v.excludeAdditive=e;const s=a.length;let n=v.fillArray(s,"array");t.forEach(l=>{n[l.j].push(l)}),n=n.map(l=>l.sort((c,h)=>c.i-h.i)),v.optimal={m:v.fillArray(s,"object"),pi:v.fillArray(s,"object"),g:v.fillArray(s,"object")};for(let l=0;l<s;l+=1)n[l].forEach(c=>{c.i>0?Object.keys(v.optimal.m[c.i-1]).forEach(h=>{v.update(c,parseInt(h,10)+1)}):v.update(c,1)}),v.bruteforceUpdate(l);const r=v.unwind(s),o=r.length,i=this.getGuesses(a,o);return{password:a,guesses:i,guessesLog10:A.log10(i),sequence:r}},getGuesses(a,t){const e=a.length;let s=0;return s=a.length===0?1:v.optimal.g[e-1][t],s}};class Et{match({password:t,omniMatch:e}){const s=[];let n=0;for(;n<t.length;){const r=this.getGreedyMatch(t,n),o=this.getLazyMatch(t,n);if(r==null)break;const{match:i,baseToken:l}=this.setMatchToken(r,o);if(i){const c=i.index+i[0].length-1,h=this.getBaseGuesses(l,e);s.push(this.normalizeMatch(l,c,i,h)),n=c+1}}return s.some(r=>r instanceof Promise)?Promise.all(s):s}normalizeMatch(t,e,s,n){const r={pattern:"repeat",i:s.index,j:e,token:s[0],baseToken:t,baseGuesses:0,repeatCount:s[0].length/t.length};return n instanceof Promise?n.then(o=>({...r,baseGuesses:o})):{...r,baseGuesses:n}}getGreedyMatch(t,e){const s=/(.+)\1+/g;return s.lastIndex=e,s.exec(t)}getLazyMatch(t,e){const s=/(.+?)\1+/g;return s.lastIndex=e,s.exec(t)}setMatchToken(t,e){const s=/^(.+?)\1+$/;let n,r="";if(e&&t[0].length>e[0].length){n=t;const o=s.exec(n[0]);o&&(r=o[1])}else n=e,n&&(r=n[1]);return{match:n,baseToken:r}}getBaseGuesses(t,e){const s=e.match(t);return s instanceof Promise?s.then(n=>F.mostGuessableMatchSequence(t,n).guesses):F.mostGuessableMatchSequence(t,s).guesses}}class Pt{constructor(){this.MAX_DELTA=5}match({password:t}){const e=[];if(t.length===1)return[];let s=0,n=null;const r=t.length;for(let o=1;o<r;o+=1){const i=t.charCodeAt(o)-t.charCodeAt(o-1);if(n==null&&(n=i),i!==n){const l=o-1;this.update({i:s,j:l,delta:n,password:t,result:e}),s=l,n=i}}return this.update({i:s,j:r-1,delta:n,password:t,result:e}),e}update({i:t,j:e,delta:s,password:n,result:r}){if(e-t>1||Math.abs(s)===1){const o=Math.abs(s);if(o>0&&o<=this.MAX_DELTA){const i=n.slice(t,+e+1||9e9),{sequenceName:l,sequenceSpace:c}=this.getSequence(i);return r.push({pattern:"sequence",i:t,j:e,token:n.slice(t,+e+1||9e9),sequenceName:l,sequenceSpace:c,ascending:s>0})}}return null}getSequence(t){let e="unicode",s=26;return ut.test(t)?(e="lower",s=26):ht.test(t)?(e="upper",s=26):mt.test(t)&&(e="digits",s=10),{sequenceName:e,sequenceSpace:s}}}class Lt{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:t}){const e=[];return Object.keys(u.graphs).forEach(s=>{const n=u.graphs[s];R(e,this.helper(t,n,s))}),C(e)}checkIfShifted(t,e,s){return!t.includes("keypad")&&this.SHIFTED_RX.test(e.charAt(s))?1:0}helper(t,e,s){let n;const r=[];let o=0;const i=t.length;for(;o<i-1;){let l=o+1,c=null,h=0;for(n=this.checkIfShifted(s,t,o);;){const d=e[t.charAt(l-1)]||[];let g=!1,f=-1,k=-1;if(l<i){const x=t.charAt(l),p=d.length;for(let b=0;b<p;b+=1){const I=d[b];if(k+=1,I){const M=I.indexOf(x);if(M!==-1){g=!0,f=k,M===1&&(n+=1),c!==f&&(h+=1,c=f);break}}}}if(!g){l-o>2&&r.push({pattern:"spatial",i:o,j:l-1,token:t.slice(o,l),graph:s,turns:h,shiftedCount:n}),o=l;break}l+=1}}return r}}const Rt=new RegExp(`[${Y.join("")}]`);class P{static getMostUsedSeparatorChar(t){const e=[...t.split("").filter(n=>Rt.test(n)).reduce((n,r)=>{const o=n.get(r);return o?n.set(r,o+1):n.set(r,1),n},new Map).entries()].sort(([n,r],[o,i])=>i-r);if(!e.length)return;const s=e[0];return s[1]<2?void 0:s[0]}static getSeparatorRegex(t){return new RegExp(`([^${t}
])(${t})(?!${t})`,"g")}match({password:t}){const e=[];if(t.length===0)return e;const s=P.getMostUsedSeparatorChar(t);if(s===void 0)return e;const n=P.getSeparatorRegex(s);for(const r of t.matchAll(n)){if(r.index===void 0)continue;const o=r.index+1;e.push({pattern:"separator",token:s,i:o,j:o})}return e}}class Nt{constructor(){this.matchers={date:wt,dictionary:It,regex:jt,repeat:Et,sequence:Pt,spatial:Lt,separator:P}}match(t){const e=[],s=[];return[...Object.keys(this.matchers),...Object.keys(u.matchers)].forEach(n=>{if(!this.matchers[n]&&!u.matchers[n])return;const r=new(this.matchers[n]?this.matchers[n]:u.matchers[n].Matching)().match({password:t,omniMatch:this});r instanceof Promise?(r.then(o=>{R(e,o)}),s.push(r)):R(e,r)}),s.length>0?new Promise((n,r)=>{Promise.all(s).then(()=>{n(C(e))}).catch(o=>{r(o)})}):C(e)}}const Ot=2678400,Ft=32140800,_={second:1,minute:60,hour:3600,day:86400,month:Ot,year:Ft,century:321408e4};class _t{translate(t,e){let s=t;e!==void 0&&e!==1&&(s+="s");const{timeEstimation:n}=u.translations;return n[s].replace("{base}",`${e}`)}estimateAttackTimes(t){const e={onlineThrottling100PerHour:t/.027777777777777776,onlineNoThrottling10PerSecond:t/10,offlineSlowHashing1e4PerSecond:t/1e4,offlineFastHashing1e10PerSecond:t/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(e).forEach(n=>{const r=e[n];s[n]=this.displayTime(r)}),{crackTimesSeconds:e,crackTimesDisplay:s,score:this.guessesToScore(t)}}guessesToScore(t){return t<1005?0:t<1000005?1:t<100000005?2:t<10000000005?3:4}displayTime(t){let e,s="centuries";const n=Object.keys(_),r=n.findIndex(o=>t<_[o]);return r>-1&&(s=n[r-1],r!==0?e=Math.round(t/_[s]):s="ltSecond"),this.translate(s,e)}}var qt=()=>null,zt=()=>({warning:u.translations.warnings.dates,suggestions:[u.translations.suggestions.dates]});const $t=(a,t)=>{let e=null;const s=a.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?e=((r,o)=>{let i=null;return!o||r.l33t||r.reversed?r.guessesLog10<=4&&(i=u.translations.warnings.similarToCommon):i=r.rank<=10?u.translations.warnings.topTen:r.rank<=100?u.translations.warnings.topHundred:u.translations.warnings.common,i})(a,t):s.includes("wikipedia")?e=((r,o)=>{let i=null;return o&&(i=u.translations.warnings.wordByItself),i})(0,t):n?e=((r,o)=>o?u.translations.warnings.namesByThemselves:u.translations.warnings.commonNames)(0,t):s==="userInputs"&&(e=u.translations.warnings.userInputs),e};var Wt=(a,t)=>{const e=$t(a,t),s=[],n=a.token;return n.match(W)?s.push(u.translations.suggestions.capitalization):n.match(G)&&n.toLowerCase()!==n&&s.push(u.translations.suggestions.allUppercase),a.reversed&&a.token.length>=4&&s.push(u.translations.suggestions.reverseWords),a.l33t&&s.push(u.translations.suggestions.l33t),{warning:e,suggestions:s}},Gt=a=>a.regexName==="recentYear"?{warning:u.translations.warnings.recentYears,suggestions:[u.translations.suggestions.recentYears,u.translations.suggestions.associatedYears]}:{warning:null,suggestions:[]},Yt=a=>{let t=u.translations.warnings.extendedRepeat;return a.baseToken.length===1&&(t=u.translations.warnings.simpleRepeat),{warning:t,suggestions:[u.translations.suggestions.repeated]}},Vt=()=>({warning:u.translations.warnings.sequences,suggestions:[u.translations.suggestions.sequences]}),Ut=a=>{let t=u.translations.warnings.keyPattern;return a.turns===1&&(t=u.translations.warnings.straightRow),{warning:t,suggestions:[u.translations.suggestions.longerKeyboardPattern]}},Bt=()=>null;const Z={warning:null,suggestions:[]};class Ht{constructor(){this.matchers={bruteforce:qt,date:zt,dictionary:Wt,regex:Gt,repeat:Yt,sequence:Vt,spatial:Ut,separator:Bt},this.defaultFeedback={warning:null,suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(u.translations.suggestions.useWords,u.translations.suggestions.noNeed)}getFeedback(t,e){if(e.length===0)return this.defaultFeedback;if(t>2)return Z;const s=u.translations.suggestions.anotherWord,n=this.getLongestMatch(e);let r=this.getMatchFeedback(n,e.length===1);return r!=null?r.suggestions.unshift(s):r={warning:null,suggestions:[s]},r}getLongestMatch(t){let e=t[0];return t.slice(1).forEach(s=>{s.token.length>e.token.length&&(e=s)}),e}getMatchFeedback(t,e){return this.matchers[t.pattern]?this.matchers[t.pattern](t,e):u.matchers[t.pattern]&&"feedback"in u.matchers[t.pattern]?u.matchers[t.pattern].feedback(t,e):Z}}let q,X,K;q=()=>new Date().getTime(),X=(a,t)=>{const e=q(),s=((n,r)=>(r&&u.extendUserInputsDictionary(r),new Nt().match(n)))(a,t);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return((n,r,o)=>{const i=new Ht,l=new _t,c=F.mostGuessableMatchSequence(r,n),h=q()-o,d=l.estimateAttackTimes(c.guesses);return{calcTime:h,...c,...d,feedback:i.getFeedback(d.score,c.sequence)}})(s,a,e)},K=["data-score"],it=oe(Xt({name:"InputPassword",__name:"InputPassword",props:{strength:tt.bool.def(!1),modelValue:tt.string.def("")},emits:["update:modelValue"],setup(a,{emit:t}){const{getPrefixCls:e}=se(),s=e("input-password"),n=a;et(()=>n.modelValue,g=>{g!==S(c)&&(c.value=g)});const{configGlobal:r}={configGlobal:Zt("configGlobal",{})},o=t,i=st("password"),l=()=>{i.value=S(i)==="text"?"password":"text"},c=st(n.modelValue);et(()=>c.value,g=>{o("update:modelValue",g)});const h=nt(()=>{const g=S(c),f=X(S(c));return g?f.score:-1}),d=nt(()=>S(i)==="password"?"ep:hide":"ep:view");return(g,f)=>{var p;const k=re,x=ne;return rt(),at("div",{class:z([S(s),`${S(s)}--${(p=S(r))==null?void 0:p.size}`])},[ot(x,Jt({modelValue:S(c),"onUpdate:modelValue":f[0]||(f[0]=b=>Qt(c)?c.value=b:null),type:S(i)},g.$attrs),{suffix:Kt(()=>[ot(k,{icon:S(d),class:"el-input__icon cursor-pointer",onClick:l},null,8,["icon"])]),_:1},16,["modelValue","type"]),a.strength?(rt(),at("div",{key:0,class:z([`${S(s)}__bar`,"relative mb-6px ml-auto mr-auto mt-10px h-6px"])},[te("div",{class:z(`${S(s)}__bar--fill`),"data-score":S(h)},null,10,K)],2)):ee("",!0)],2)}}}),[["__scopeId","data-v-38c93dba"]])});export{it as I,ie as __tla};

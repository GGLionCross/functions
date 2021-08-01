(()=>{"use strict";var e={7825:(e,t,r)=>{r(7280),r(5363),r(71);var n=r(8880),o=r(9592),a=r(3673);function i(e,t,r,n,o,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}var s=r(7874);const u=(0,a.aZ)({name:"App",mounted(){const e=(0,s.oR)();e.dispatch("handleAuthStateChanged")}});u.render=i;const c=u;var l=r(6852),d=r(7083),f=r(9582);const p=[{path:"/",component:()=>Promise.all([r.e(736),r.e(162)]).then(r.bind(r,3162)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(843)]).then(r.bind(r,8843)),meta:{title:"Functions"}},{path:"image-hosting",component:()=>Promise.all([r.e(736),r.e(724)]).then(r.bind(r,9724)),meta:{title:"Image Hosting"}}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],h=p,m=(0,d.BC)((function(){const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return t.beforeEach(((e,t)=>{e.meta&&e.meta.title&&(document.title=e.meta.title)})),t}));async function b(e,t){const n="function"===typeof l.default?await(0,l.default)({}):l.default,{storeKey:a}=await Promise.resolve().then(r.bind(r,6852)),i="function"===typeof m?await m({store:n}):m;n.$router=i;const s=e(c);return s.use(o.Z,t),{app:s,store:n,storeKey:a,router:i}}var v=r(6594);const g={config:{},plugins:{Notify:v.Z}},y="";async function w({app:e,router:t,store:r,storeKey:n},o){let a=!1;const i=e=>{a=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<o.length;c++)try{await o[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:y})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==a&&(e.use(t),e.use(r,n),e.mount("#q-app"))}b(n.ri,g).then((e=>Promise.all([Promise.resolve().then(r.bind(r,2490))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,r)}))))},2490:(e,t,r)=>{r.r(t),r.d(t,{firebaseAuth:()=>i,firebaseDb:()=>s,pGoogle:()=>u});var n=r(5720),o=(r(8849),r(4479),r(7758),{apiKey:"AIzaSyBAM68SmTLCfb7XV0cJizB9uh5M-8R2hM0",authDomain:"functions-1e766.firebaseapp.com",projectId:"functions-1e766",storageBucket:"functions-1e766.appspot.com",messagingSenderId:"1045236061054",appId:"1:1045236061054:web:4ac896d5adb7a33a96192f"});let a=n.Z.initializeApp(o),i=a.auth(),s=a.database(),u=new n.Z.auth.GoogleAuthProvider},6852:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n={};r.r(n),r.d(n,{getCurrentUser:()=>c,isUserLoggedIn:()=>l});var o={};r.r(o),r.d(o,{setCurrentUser:()=>d});var a={};r.r(a),r.d(a,{handleAuthStateChanged:()=>b,userLogin:()=>v,userLogout:()=>g});var i=r(7083),s=r(7874);function u(){return{currentUser:{}}}function c(e){return e.currentUser}function l(e){return!!e.currentUser.userId}function d(e,t){e.currentUser=t}var f=r(515),p=r.n(f),h=r(2490),m=r(6594);function b({commit:e,dispatch:t}){h.firebaseAuth.onAuthStateChanged((t=>{if(t){const t=h.firebaseAuth.currentUser.uid;h.firebaseDb.ref("users/"+t).once("value",(r=>{let n=r.val();e("setCurrentUser",p()(p()({},n),{},{userId:t}))}))}else e("setCurrentUser",{})}))}function v({},e){h.firebaseAuth.signInWithPopup(h.pGoogle).then((e=>{})).catch((e=>{console.error(e);let t={type:"negative",message:e.message};m.Z.create(t)}))}function g({},e){h.firebaseAuth.signOut()}const y=(0,i.h)((function(){const e=(0,s.MT)({state:u(),getters:n,mutations:o,actions:a,strict:!1});return e}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,o,a]=e[l],s=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{162:"48dd85d4",193:"cdbf2956",724:"3bbdac85",843:"4e373662"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/vendor.6b548228.css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="functions:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var f=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,u=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,u,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,u]=n,c=0;for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(u)var l=u(r);for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return r.O(l)},n=self["webpackChunkfunctions"]=self["webpackChunkfunctions"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(7825)));n=r.O(n)})();
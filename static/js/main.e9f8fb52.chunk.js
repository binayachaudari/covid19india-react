(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[8],{20:function(e,n,a){"use strict";a.d(n,"j",(function(){return m})),a.d(n,"f",(function(){return T})),a.d(n,"g",(function(){return v})),a.d(n,"d",(function(){return y})),a.d(n,"k",(function(){return g})),a.d(n,"c",(function(){return j})),a.d(n,"e",(function(){return b})),a.d(n,"a",(function(){return A})),a.d(n,"m",(function(){return S})),a.d(n,"h",(function(){return D})),a.d(n,"i",(function(){return k})),a.d(n,"b",(function(){return w})),a.d(n,"l",(function(){return F}));var t=a(30),o=a(7),i=a(58),r=a(69),c=a(70),l=a(71),d=a(72),u=a(36),s=a(22),p=null,f=new Intl.NumberFormat("en-IN",{maximumFractionDigits:1}),m=function(){return!1},h=function(){return Object(u.a)(new Date,"Asia/Kolkata")},T=function(){return Object(i.a)(h(),{representation:"date"})},v=function(){return Object(i.a)(Object(r.a)(h(),1),{representation:"date"})},y=function(e){return a.e(10).then(a.t.bind(null,77,7)).then((function(e){p=e[o.i[s.a.language||window.localStorage.i18nextLng]]})),Object(c.a)(new Date(e),new Date,{locale:p})},g=function(e){return e?(e.match(o.h)&&(e+=o.g),Object(u.a)(new Date(e),"Asia/Kolkata")):h()},j=function(e,n){if(!e)return"";"string"===typeof e&&e.match(o.h)&&(e+=o.g);var a=Object(u.a)(new Date(e),"Asia/Kolkata");return Object(l.a)(a,n,{locale:p})},b=function(e,n,a){return a&&o.p.includes(a)&&0===e&&(e=NaN),isNaN(e)?"-":"short"===n?(t=e,Math.abs(t)<1e3?f.format(t):Math.abs(t)>=1e3&&Math.abs(t)<1e5?f.format(t/1e3)+"K":Math.abs(t)>=1e5&&Math.abs(t)<1e7?f.format(t/1e5)+"L":Math.abs(t)>=1e7&&Math.abs(t)<1e10?f.format(t/1e7)+"Cr":Math.abs(t)>=1e10&&Math.abs(t)<1e14?f.format(t/1e10)+"K Cr":Math.abs(t)>=1e14?f.format(t/1e14)+"L Cr":void 0):("int"===n&&(e=Math.floor(e)),f.format(e)+("%"===n?"%":""));var t},A=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},S=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},D=function e(n,a,i){var r,c,l,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=d.perMillion,s=void 0!==u&&u,p=d.movingAverage,f=void 0!==p&&p,m=null===(r=o.w[i])||void 0===r?void 0:r.definition,h=Object(t.a)(Object(t.a)({},m),s&&!(null===m||void 0===m?void 0:m.normalizeByKey)&&o.q),T=h.key,v=h.normalizeByKey,y=(null===m||void 0===m?void 0:m.multiplyFactor)||1;if(y*=!(null===m||void 0===m?void 0:m.normalizeByKey)&&s&&(null===o.q||void 0===o.q?void 0:o.q.multiplyFactor)||1,"delta"===a&&f&&(a="delta7",y*=(null===m||void 0===m?void 0:m.normalizeByKey)?1:1/7),"population"===T)c="total"===a?null===n||void 0===n||null===(l=n.meta)||void 0===l?void 0:l.population:0;else if("tested"===T){var g;c=null===n||void 0===n||null===(g=n[a])||void 0===g?void 0:g.tested}else if("active"===T){var j,b,A,S,D=(null===n||void 0===n||null===(j=n[a])||void 0===j?void 0:j.confirmed)||0,k=(null===n||void 0===n||null===(b=n[a])||void 0===b?void 0:b.deceased)||0,w=(null===n||void 0===n||null===(A=n[a])||void 0===A?void 0:A.recovered)||0,F=(null===n||void 0===n||null===(S=n[a])||void 0===S?void 0:S.other)||0;c=D-k-w-F}else{var E;c=null===n||void 0===n||null===(E=n[a])||void 0===E?void 0:E[T]}return v&&(c/=e(n,"population"===v?"total":a,v)),y*(isFinite(c)&&c||0)},k=function(e,n,a,t){var i,r,c,l,u,s=null===(i=o.w[n])||void 0===i?void 0:i.definition,p=("tested"===(null===s||void 0===s?void 0:s.key)||"tested"===(null===s||void 0===s?void 0:s.normalizeByKey))&&Object(d.a)(t,g(null===(r=e.meta)||void 0===r||null===(c=r.tested)||void 0===c?void 0:c.last_updated))>o.z,f=(null===(l=o.w[n])||void 0===l||null===(u=l.tableConfig)||void 0===u?void 0:u.type)||"total";return{total:p?0:D(e,f,n,a),delta:"total"!==f||p?0:D(e,"delta",n,a)}},w=function(e){return fetch(e).then((function(e){return e.json()}))};function F(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return new Promise((function(t,o){e().then(t).catch((function(i){setTimeout((function(){1!==n?F(e,n-1,a).then(t,o):o(i)}),a)}))}))}},68:function(e,n,a){"use strict";a.r(n);var t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=a(7),r=a(20),c=a(22),l=a(52),d=a(53),u=a(76);c.a.use(d.a).use(l.a).use(u.e).init({debug:Object(r.j)()&&false,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"".concat(i.a,"/locales/locale_{{lng}}.json"),addPath:"http://localhost:9999/"},saveMissing:Object(r.j)()&&false,interpolation:{escapeValue:!1}});c.a;var s=a(2),p=a(40),f=a(38),m=a(18),h=Object(s.lazy)((function(){return Object(r.l)((function(){return Promise.all([a.e(12),a.e(21)]).then(a.bind(null,718))}))})),T=document.getElementById("root"),v=function(){return Object(p.render)(Object(m.jsx)(s.Suspense,{fallback:Object(m.jsx)("div",{}),children:Object(m.jsx)(f.a,{children:Object(m.jsx)(s.StrictMode,{children:Object(m.jsx)(h,{})})})}),T)};window.requestIdleCallback&&window.IntersectionObserver?v():function(e,n){var a=document.createElement("script");a.src=e,a.onload=function(){n()},a.onerror=function(){n(new Error("Failed to load script "+e))},document.head.appendChild(a)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",v),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var n="".concat("","/service-worker.js");t?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var t=a.headers.get("content-type");404===a.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(n,e)}),3e3)}))}}()},7:function(e,n,a){"use strict";a.d(n,"a",(function(){return o})),a.d(n,"d",(function(){return i})),a.d(n,"i",(function(){return r})),a.d(n,"w",(function(){return c})),a.d(n,"q",(function(){return l})),a.d(n,"p",(function(){return u})),a.d(n,"r",(function(){return s})),a.d(n,"b",(function(){return p})),a.d(n,"x",(function(){return f})),a.d(n,"y",(function(){return m})),a.d(n,"C",(function(){return h})),a.d(n,"F",(function(){return T})),a.d(n,"e",(function(){return v})),a.d(n,"c",(function(){return y})),a.d(n,"o",(function(){return g})),a.d(n,"z",(function(){return j})),a.d(n,"D",(function(){return b})),a.d(n,"E",(function(){return A})),a.d(n,"f",(function(){return S})),a.d(n,"h",(function(){return D})),a.d(n,"g",(function(){return k})),a.d(n,"s",(function(){return w})),a.d(n,"A",(function(){return F})),a.d(n,"B",(function(){return E})),a.d(n,"n",(function(){return N})),a.d(n,"m",(function(){return O})),a.d(n,"l",(function(){return M})),a.d(n,"k",(function(){return C})),a.d(n,"j",(function(){return P})),a.d(n,"v",(function(){return B})),a.d(n,"t",(function(){return R})),a.d(n,"u",(function(){return z}));var t=a(23),o="https://api.covid19india.org",i="".concat(o,"/v4/min"),r={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},c={confirmed:{displayName:"confirmed",color:"#ff073a",format:"int",definition:{key:"confirmed"},showDelta:!0},active:{displayName:"active",color:"#007bff",format:"int",definition:{key:"active"}},recovered:{displayName:"recovered",color:"#28a745",format:"int",definition:{key:"recovered"},showDelta:!0},deceased:{displayName:"deceased",color:"#6c757d",format:"int",definition:{key:"deceased"},showDelta:!0},other:{displayName:"other",format:"int",definition:{key:"other"},showDelta:!0},tested:{displayName:"tested",color:"#4b1eaa",format:"short",definition:{key:"tested"},showDelta:!0},vaccinated:{displayName:"vaccine doses administered",color:"#fb5581",format:"short",definition:{key:"vaccinated"},showDelta:!0},tpr:{displayName:"test positivity ratio",format:"%",definition:{key:"confirmed",normalizeByKey:"tested",multiplyFactor:100},color:"#fd7e14"},cfr:{displayName:"case fatality ratio",format:"%",definition:{key:"deceased",normalizeByKey:"confirmed",multiplyFactor:100}},recoveryRatio:{displayName:"recovery ratio",format:"%",definition:{key:"recovered",normalizeByKey:"confirmed",multiplyFactor:100}},activeRatio:{displayName:"active ratio",format:"%",definition:{key:"active",normalizeByKey:"confirmed",multiplyFactor:100}},population:{displayName:"population",format:"short",definition:{key:"population"}}},l={normalizeByKey:"population",multiplyFactor:1e6},d=["tested","vaccinated","population"],u=Object.keys(c).filter((function(e){var n,a,t,o;return d.includes(null===(n=c[e])||void 0===n||null===(a=n.definition)||void 0===a?void 0:a.key)||d.includes(null===(t=c[e])||void 0===t||null===(o=t.definition)||void 0===o?void 0:o.normalizeByKey)})),s=["confirmed","active","recovered","deceased"],p=["confirmed"],f=[].concat(s,["tested","vaccinated"]),m=Object.keys(c),h=[].concat(s,["tested","vaccinated","tpr"]),T=5,v=40,y=300,g=20,j=7,b="UN",A="Unknown",S="2020-04-26",D=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g,k="T00:00:00+05:30",w={clamp:!0,precision:1},F={total:"Cumulative",delta:"Daily"},E=[null,90,30],N={CHOROPLETH:0,BUBBLES:1},O={STATES:0,DISTRICTS:1},M={COUNTRY:0,STATE:1},K="/mini_maps",C={AP:{geoDataFile:"".concat(K,"/andhrapradesh.json"),mapType:M.STATE},AR:{geoDataFile:"".concat(K,"/arunachalpradesh.json"),mapType:M.STATE},AS:{geoDataFile:"".concat(K,"/assam.json"),mapType:M.STATE},BR:{geoDataFile:"".concat(K,"/bihar.json"),mapType:M.STATE},CT:{geoDataFile:"".concat(K,"/chhattisgarh.json"),mapType:M.STATE},GA:{geoDataFile:"".concat(K,"/goa.json"),mapType:M.STATE},GJ:{geoDataFile:"".concat(K,"/gujarat.json"),mapType:M.STATE},HR:{geoDataFile:"".concat(K,"/haryana.json"),mapType:M.STATE},HP:{geoDataFile:"".concat(K,"/himachalpradesh.json"),mapType:M.STATE},JK:{geoDataFile:"".concat(K,"/jammukashmir.json"),mapType:M.STATE},JH:{geoDataFile:"".concat(K,"/jharkhand.json"),mapType:M.STATE},KA:{geoDataFile:"".concat(K,"/karnataka.json"),mapType:M.STATE},KL:{geoDataFile:"".concat(K,"/kerala.json"),mapType:M.STATE},MP:{geoDataFile:"".concat(K,"/madhyapradesh.json"),mapType:M.STATE},MH:{geoDataFile:"".concat(K,"/maharashtra.json"),mapType:M.STATE},MN:{geoDataFile:"".concat(K,"/manipur.json"),mapType:M.STATE},ML:{geoDataFile:"".concat(K,"/meghalaya.json"),mapType:M.STATE},MZ:{geoDataFile:"".concat(K,"/mizoram.json"),mapType:M.STATE},NL:{geoDataFile:"".concat(K,"/nagaland.json"),mapType:M.STATE},OR:{geoDataFile:"".concat(K,"/odisha.json"),mapType:M.STATE},PB:{geoDataFile:"".concat(K,"/punjab.json"),mapType:M.STATE},RJ:{geoDataFile:"".concat(K,"/rajasthan.json"),mapType:M.STATE},SK:{geoDataFile:"".concat(K,"/sikkim.json"),mapType:M.STATE},TN:{geoDataFile:"".concat(K,"/tamilnadu.json"),mapType:M.STATE},TG:{geoDataFile:"".concat(K,"/telangana.json"),mapType:M.STATE},TR:{geoDataFile:"".concat(K,"/tripura.json"),mapType:M.STATE},UT:{geoDataFile:"".concat(K,"/uttarakhand.json"),mapType:M.STATE},UP:{geoDataFile:"".concat(K,"/uttarpradesh.json"),mapType:M.STATE},WB:{geoDataFile:"".concat(K,"/westbengal.json"),mapType:M.STATE},AN:{geoDataFile:"".concat(K,"/andamannicobarislands.json"),mapType:M.STATE},CH:{geoDataFile:"".concat(K,"/chandigarh.json"),mapType:M.STATE},DN:{geoDataFile:"".concat(K,"/dnh-and-dd.json"),mapType:M.STATE},DL:{geoDataFile:"".concat(K,"/delhi.json"),mapType:M.STATE},LA:{geoDataFile:"".concat(K,"/ladakh.json"),mapType:M.STATE},LD:{geoDataFile:"".concat(K,"/lakshadweep.json"),mapType:M.STATE},PY:{geoDataFile:"".concat(K,"/puducherry.json"),mapType:M.STATE},TT:{geoDataFile:"".concat(K,"/india.json"),mapType:M.COUNTRY}},P=50,B=Object(t.a)({AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India"},b,"Unassigned"),L=[],U={};Object.keys(B).map((function(e,n){return U[B[e]]=e,L.push({code:e,name:B[e]}),null}));var R=U,z=L}},[[68,9,11]]]);
//# sourceMappingURL=main.e9f8fb52.chunk.js.map
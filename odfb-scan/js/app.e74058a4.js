(function(e){function t(t){for(var o,r,a=t[0],c=t[1],s=t[2],u=0,b=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&b.push(l[r][0]),l[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(b.length)b.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==l[c]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},l={app:0},i=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/odfb-scan/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"55d6":function(e,t,n){"use strict";n("67a6")},"67a6":function(e,t,n){},a2b9:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const l=Object(o["r"])("data-v-089d265e");Object(o["j"])("data-v-089d265e");const i={key:0},r={key:0},a=Object(o["e"])(" Root folders:"),c=Object(o["f"])("br",null,null,-1),s=Object(o["f"])("br",null,null,-1),d=Object(o["f"])("label",{for:"primaryFolder"},"Primary folder:",-1),u=Object(o["f"])("br",null,null,-1),b=Object(o["f"])("option",{selected:""},null,-1),f=Object(o["f"])("span",{innerHTML:" "},null,-1),h=Object(o["f"])("span",{innerHTML:" "},null,-1),O=Object(o["f"])("br",null,null,-1),j=Object(o["f"])("label",{for:"secondaryFolder"},"Secondary folder:",-1),p=Object(o["f"])("br",null,null,-1),v=Object(o["f"])("option",{selected:""},null,-1),m=Object(o["f"])("span",{innerHTML:" "},null,-1),g=Object(o["f"])("br",null,null,-1),y={key:1};Object(o["i"])();const k=l((function(e,t,n,l,k,w){const F=Object(o["m"])("SignIn"),D=Object(o["m"])("loader"),B=Object(o["m"])("Folders");return Object(o["h"])(),Object(o["c"])(o["a"],null,[Object(o["f"])(F,{onOnAuthRedirect:e.onAuthRedirect},null,8,["onOnAuthRedirect"]),e.isAuthenticated?(Object(o["h"])(),Object(o["c"])("div",i,[e.showRootFolders?(Object(o["h"])(),Object(o["c"])("p",r,[a,c,(Object(o["h"])(!0),Object(o["c"])(o["a"],null,Object(o["l"])(e.rootFolders,t=>(Object(o["h"])(),Object(o["c"])(o["a"],{key:t.id},[Object(o["f"])("a",{href:t.webUrl,target:"_blank",title:t.id},Object(o["n"])(t.name),9,["href","title"]),Object(o["e"])(", "+Object(o["n"])(e.formatBytes(t.size))+" ",1),s],64))),128))])):Object(o["d"])("",!0),Object(o["f"])("p",null,[d,u,Object(o["q"])((Object(o["h"])(),Object(o["c"])("select",{id:"primaryFolder","onUpdate:modelValue":t[1]||(t[1]=t=>e.primaryFolder=t),key:e.primaryFolder,disabled:e.isLoading},[b,(Object(o["h"])(!0),Object(o["c"])(o["a"],null,Object(o["l"])(e.rootFolders,e=>(Object(o["h"])(),Object(o["c"])("option",{value:e.id,key:e.id},Object(o["n"])(e.name),9,["value"]))),128))],8,["disabled"])),[[o["o"],e.primaryFolder]]),f,Object(o["q"])(Object(o["f"])("button",{type:"button",onClick:t[2]||(t[2]=t=>e.findMissingHashValues()),disabled:e.isLoading}," Find missing hash values ",8,["disabled"]),[[o["p"],Boolean(e.primaryFolder)]]),h,Object(o["q"])(Object(o["f"])("button",{type:"button",onClick:t[3]||(t[3]=t=>e.findDuplicateFiles()),disabled:e.isLoading}," Find duplicate files",8,["disabled"]),[[o["p"],Boolean(e.primaryFolder)]]),O,j,p,Object(o["q"])(Object(o["f"])("select",{id:"secondaryFolder","onUpdate:modelValue":t[4]||(t[4]=t=>e.secondaryFolder=t),disabled:e.isLoading},[v,(Object(o["h"])(!0),Object(o["c"])(o["a"],null,Object(o["l"])(e.rootFolders,e=>(Object(o["h"])(),Object(o["c"])("option",{value:e.id,key:e.id},Object(o["n"])(e.name),9,["value"]))),128))],8,["disabled"]),[[o["o"],e.secondaryFolder]]),m,Object(o["q"])(Object(o["f"])("button",{type:"button",onClick:t[5]||(t[5]=(...t)=>e.compareFolders(...t)),title:"Compare folders and find duplicate files",disabled:e.isLoading}," Compare folders",8,["disabled"]),[[o["p"],Boolean(e.primaryFolder)&&Boolean(e.secondaryFolder)&&e.primaryFolder!=e.secondaryFolder]]),g]),Object(o["f"])("p",null,[Object(o["f"])("span",{innerText:e.message},null,8,["innerText"]),Object(o["q"])(Object(o["f"])(D,{size:"32px"},null,512),[[o["p"],e.isLoading]])]),e.showFolders?(Object(o["h"])(),Object(o["c"])("p",y,[Object(o["f"])(B,{data:e.folderData,isTop:!0,allowDeletion:e.allowDeletion},null,8,["data","allowDeletion"])])):Object(o["d"])("",!0)])):Object(o["d"])("",!0)],64)})),w=Object(o["r"])("data-v-83902b9c");Object(o["j"])("data-v-83902b9c");const F={class:"sign-in"},D={style:{"margin-right":"8px"}},B={innerHTML:" "};Object(o["i"])();const R=w((function(e,t,n,l,i,r){return Object(o["h"])(),Object(o["c"])("div",F,[Object(o["q"])(Object(o["f"])("button",{type:"button",onClick:t[1]||(t[1]=t=>e.signIn())}," Sign In ",512),[[o["p"],!e.isAuthenticated]]),Object(o["f"])("span",D,Object(o["n"])(e.userName),1),Object(o["q"])(Object(o["f"])("span",B,null,512),[[o["p"],e.isAuthenticated]]),Object(o["q"])(Object(o["f"])("button",{type:"button",onClick:t[2]||(t[2]=t=>e.signOut())}," Sign out ",512),[[o["p"],e.isAuthenticated]])])}));var S=n("9ab4"),T=n("bbcb");const q={auth:{clientId:"b97955ee-2bfc-4ac6-9e55-aafe57353082",authority:"https://login.microsoftonline.com/8a3f0985-1f2f-4bb2-8840-14950cc04671",knownAuthorities:[],redirectUri:"https://dmartinezfernandez.github.io/odfb-scan/",navigateToLoginRequestUrl:!0},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1}};var z=q;const E=(()=>{const e=new T["b"](z);let t;const n=()=>null!==t,o=()=>e.getAccountByUsername(t);return{loginRedirect:()=>{e.loginRedirect({scopes:["User.Read","Files.Read"]})},handleRedirect:()=>Object(S["a"])(void 0,void 0,void 0,(function*(){var n;let o=yield e.handleRedirectPromise();return t=(null===(n=null===o||void 0===o?void 0:o.account)||void 0===n?void 0:n.username)||null,o})),logout:()=>n()?e.logout({account:o(),authority:z.auth.authority}):Promise.resolve(),get username(){return t}}})();var C=E,A=Object(o["g"])({name:"SignIn",setup(e,{emit:t}){const n=Object(o["k"])(""),l=Object(o["k"])(!1),i=()=>{C.loginRedirect()},r=()=>{C.logout().then(e=>{l.value=!1,n.value="",t("onAuthRedirect",l.value)})};return C.handleRedirect().then(e=>{var o;n.value=e?null===(o=e.account)||void 0===o?void 0:o.username:null,l.value=Boolean(e&&n.value),t("onAuthRedirect",l.value)}).catch(e=>{n.value="Authentication error!",l.value=!1,console.warn(e)}),{isAuthenticated:l,userName:n,signIn:i,signOut:r}}});A.render=R,A.__scopeId="data-v-83902b9c";var M=A;const x=Object(o["r"])("data-v-2fbbaec2");Object(o["j"])("data-v-2fbbaec2");const H={key:0},L={key:1},U={innerHTML:" "},_=Object(o["f"])("br",null,null,-1);Object(o["i"])();const P=x((function(e,t,n,l,i,r){const a=Object(o["m"])("folders");return Object(o["h"])(),Object(o["c"])("details",{open:e.isTop},[e.isDeleted?(Object(o["h"])(),Object(o["c"])("summary",H,"'"+Object(o["n"])(e.data.name)+"' deleted!",1)):(Object(o["h"])(),Object(o["c"])("summary",L,[Object(o["f"])("a",{href:e.data.webUrl,target:"_blank"},Object(o["n"])(e.data.name),9,["href"]),Object(o["e"])(" ("+Object(o["n"])(e.data.count)+" of "+Object(o["n"])(e.data.unfilteredCount)+" files, "+Object(o["n"])(e.formatBytes(e.data.size))+" of "+Object(o["n"])(e.formatBytes(e.data.unfilteredSize))+", "+Object(o["n"])(e.data.size)+" of "+Object(o["n"])(e.data.unfilteredSize)+" B) ",1),e.allowDeletion&&!e.isConfirmingDeletion?(Object(o["h"])(),Object(o["c"])("button",{key:0,title:"Delete",onClick:t[1]||(t[1]=(...t)=>e.confirmDeletion(...t))}," ⌫ ")):Object(o["d"])("",!0),Object(o["q"])(Object(o["f"])("button",{type:"button",onClick:t[2]||(t[2]=(...t)=>e.cancelDeletion(...t))}," Cancel ",512),[[o["p"],e.isConfirmingDeletion]]),Object(o["q"])(Object(o["f"])("span",U,null,512),[[o["p"],e.isConfirmingDeletion]]),Object(o["q"])(Object(o["f"])("button",{type:"button",onClick:t[3]||(t[3]=(...t)=>e.deleteFolder(...t))}," Delete ",512),[[o["p"],e.isConfirmingDeletion]])])),Object(o["q"])(Object(o["f"])("div",null,[(Object(o["h"])(!0),Object(o["c"])(o["a"],null,Object(o["l"])(e.data.files,e=>(Object(o["h"])(),Object(o["c"])(o["a"],{key:e.id},[Object(o["f"])("a",{style:{"margin-left":"17px",display:"inline-block"},href:e.webUrl,target:"_blank"},Object(o["n"])(e.name),9,["href"]),_],64))),128)),(Object(o["h"])(!0),Object(o["c"])(o["a"],null,Object(o["l"])(e.data.folders,t=>(Object(o["h"])(),Object(o["c"])(a,{style:{"margin-left":"17px"},key:t.id,data:t,isTop:!1,allowDeletion:e.allowDeletion},null,8,["data","allowDeletion"]))),128))],512),[[o["p"],!e.isDeleted]])],8,["open"])}));function $(e,t=2){if(0===e)return"0 B";const n=0>t?0:t,o=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,o)).toFixed(n))+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][o]}const I=(()=>{const e=new T["b"](z);function t(t){return t.account=e.getAccountByUsername(C.username),e.acquireTokenSilent(t).catch(n=>{if(console.warn("silent token acquisition fails. acquiring token using redirect"),n instanceof T["a"])return e.acquireTokenRedirect(t);console.warn(n)})}function n(e,n){const o={scopes:n};return t(o).then(t=>{const n=t.accessToken,o=new Headers;o.append("Authorization","Bearer "+n);const l={method:"GET",headers:o};return fetch(e,l).then(e=>e.json())})}function o(e,n){const o={scopes:n};return t(o).then(t=>{const n=t.accessToken,o=new Headers;o.append("Authorization","Bearer "+n);const l={method:"DELETE",headers:o};return fetch(e,l)})}return{get:n,delete:o}})();var V=I;const X={graphEndpoint:"https://graph.microsoft.com/v1.0"};var G=X;const J=(()=>{function e(e,t=null,n=null){return{id:e,name:t,webUrl:n,folders:[],files:[],count:0,size:0,unfilteredCount:0,unfilteredSize:0}}function t(t){return V.get(`${G.graphEndpoint}/me/drive/items/${t}`,["Files.Read"]).then(n=>{const o=n;return e(t,o.name,o.webUrl)})}function n(t,o){return V.get(`${G.graphEndpoint}/me/drive/items/${t.id}/children`,["Files.Read"]).then(l=>Object(S["a"])(this,void 0,void 0,(function*(){const i=l.value;let r,a=Array(),c=0;for(let l=0;l<i.length;l++)i[l].folder?(r=e(i[l].id,i[l].name,i[l].webUrl),c=a.push(n(r,o))):(o(i[l])&&(t.files.push({id:i[l].id,name:i[l].name,webUrl:i[l].webUrl}),t.count++,t.size+=i[l].size),t.unfilteredCount++,t.unfilteredSize+=i[l].size);let s=yield Promise.all(a);for(let e=0;e<s.length;e++)(s[e].files.length>0||s[e].folders.length>0)&&(t.folders.push(s[e]),t.count+=s[e].count,t.size+=s[e].size),t.unfilteredCount+=s[e].unfilteredCount,t.unfilteredSize+=s[e].unfilteredSize;return t})))}function o(e){return Object(S["a"])(this,void 0,void 0,(function*(){return t(e).then(e=>{const t=e=>{var t,n;return!(null===(n=null===(t=e.file)||void 0===t?void 0:t.hashes)||void 0===n?void 0:n.quickXorHash)};return n(e,t).then(e=>l(e))})}))}function l(e){return 0==e.files.length&&0==e.folders.length?null:e}function i(e){return Object(S["a"])(this,void 0,void 0,(function*(){return V.get(`${G.graphEndpoint}/me/drive/items/${e}/children`,["Files.Read"]).then(e=>Object(S["a"])(this,void 0,void 0,(function*(){const t=e.value,n=t.filter(e=>e.file),o=t.filter(e=>e.folder);let l=new Set;n.forEach(e=>{var t,n,o,i;(null===(n=null===(t=e.file)||void 0===t?void 0:t.hashes)||void 0===n?void 0:n.quickXorHash)&&l.add(null===(i=null===(o=e.file)||void 0===o?void 0:o.hashes)||void 0===i?void 0:i.quickXorHash)});const r=[];o.forEach(e=>{r.push(i(e.id))});let a=yield Promise.all(r);return a.forEach(e=>{l=0==l.size?e:new Set([...l,...e])}),l})))}))}function r(e){return Object(S["a"])(this,void 0,void 0,(function*(){return V.get(`${G.graphEndpoint}/me/drive/items/${e}/children`,["Files.Read"]).then(e=>Object(S["a"])(this,void 0,void 0,(function*(){const t=e.value,n=t.filter(e=>e.file),o=t.filter(e=>e.folder);let l=new Map;n.forEach(e=>{var t,n;const o=null===(n=null===(t=e.file)||void 0===t?void 0:t.hashes)||void 0===n?void 0:n.quickXorHash;o&&l.set(o,l.has(o))});const i=[];o.forEach(e=>{i.push(r(e.id))});let a=yield Promise.all(i);return a.forEach(e=>{e.forEach((e,t)=>{l.set(t,e||l.has(t))})}),l})))}))}function a(e){return Object(S["a"])(this,void 0,void 0,(function*(){return r(e).then(o=>{const i=new Set;return o.forEach((e,t)=>{e&&i.add(t)}),t(e).then(e=>{const t=e=>{var t,n;let o=null===(n=null===(t=e.file)||void 0===t?void 0:t.hashes)||void 0===n?void 0:n.quickXorHash;return Boolean(o&&i.has(o))};return n(e,t).then(e=>l(e))})})}))}function c(t,o){return Object(S["a"])(this,void 0,void 0,(function*(){let l=e(o);return i(t).then(e=>{const t=t=>{var n,o;let l=(null===(o=null===(n=t.file)||void 0===n?void 0:n.hashes)||void 0===o?void 0:o.quickXorHash)||null;return Boolean(l&&e.has(l))};return n(l,t).then(e=>(l=e,0==l.files.length&&0==l.folders.length?null:V.get(`${G.graphEndpoint}/me/drive/items/${o}`,["Files.Read"]).then(e=>{const t=e;return l.name=t.name,l.webUrl=t.webUrl,l})))})}))}function s(e,t){e.count!=e.unfilteredCount||t?(e.files.forEach(e=>V.delete(`${G.graphEndpoint}/me/drive/items/${e.id}`,["Files.ReadWrite"])),e.folders.forEach(e=>s(e,!1))):V.delete(`${G.graphEndpoint}/me/drive/items/${e.id}`,["Files.ReadWrite"])}return{getRootFolders:()=>V.get(G.graphEndpoint+"/me/drive/root/children",["Files.Read"]).then(e=>e.value.filter(e=>e.folder)),findMissingHashValues:o,findDuplicateFiles:a,compareFolders:c,delete:s}})();var N=J,W=Object(o["g"])({name:"Folders",props:{data:Object,isTop:Boolean,allowDeletion:Boolean},setup(e){const t=Object(o["k"])(!1),n=Object(o["k"])(!1);return{isConfirmingDeletion:t,isDeleted:n,formatBytes:$,deleteFolder:()=>{N.delete(e.data,e.isTop),n.value=!0},confirmDeletion:()=>{t.value=!0},cancelDeletion:()=>{t.value=!1}}}});n("55d6");W.render=P,W.__scopeId="data-v-2fbbaec2";var K=W;const Y=Object(o["r"])("data-v-00e81b60");Object(o["j"])("data-v-00e81b60");const Z=Object(o["f"])("circle",{class:"path",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"},null,-1);Object(o["i"])();const Q=Y((function(e,t,n,l,i,r){return Object(o["h"])(),Object(o["c"])("svg",{class:"spinner",width:e.size,height:e.size,viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},[Z],8,["width","height"])}));var ee=Object(o["g"])({name:"Loader",props:{size:{type:String,default:"32px"}}});n("ce7e");ee.render=Q,ee.__scopeId="data-v-00e81b60";var te=ee,ne=Object(o["g"])({name:"App",components:{SignIn:M,Folders:K,Loader:te},setup(){const e=Object(o["k"])(!1),t=Object(o["k"])([]),n=Object(o["k"])(""),l=Object(o["k"])(""),i=Object(o["k"])(null),r=Object(o["k"])(!1),a=Object(o["k"])(""),c=Object(o["k"])(!1);function s(){r.value=!0,u()}function d(e=""){r.value=!1,a.value=e}function u(){a.value=""}function b(n){e.value=n,n&&(s(),N.getRootFolders().then(e=>{t.value=e}).finally(()=>{d()}))}function f(e,t,n){r.value=!0,u(),e.then(e=>{i.value=e,a.value=e?t:n}).catch(e=>{a.value=e}).finally(()=>{r.value=!1})}return{isAuthenticated:e,onAuthRedirect:b,rootFolders:t,primaryFolder:n,secondaryFolder:l,folderData:i,isLoading:r,message:a,allowDeletion:c,formatBytes:e=>$(e,2),clearMessage:u,findMissingHashValues:()=>{c.value=!1,f(N.findMissingHashValues(n.value),"Missing hash values found.","There are no missing hash values.")},findDuplicateFiles:()=>{c.value=!1,f(N.findDuplicateFiles(n.value),"Duplicate files found.","There are no duplicate files.")},compareFolders:()=>{c.value=!0,f(N.compareFolders(n.value,l.value),"Secondary folder files found in primary folder.","There are no secondary folder files in primary folder.")},get showFolders(){return!r.value&&i.value},get showRootFolders(){return e.value&&t.value.length>0}}}});ne.render=k,ne.__scopeId="data-v-089d265e";var oe=ne;Object(o["b"])(oe).mount("#app")},ce7e:function(e,t,n){"use strict";n("a2b9")}});
//# sourceMappingURL=app.e74058a4.js.map
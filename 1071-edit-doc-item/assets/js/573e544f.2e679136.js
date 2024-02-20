"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="Function: handleKeyringRequest()",s={unversionedId:"reference/keyring-api/functions/handleKeyringRequest",id:"reference/keyring-api/functions/handleKeyringRequest",title:"Function: handleKeyringRequest()",description:"Handles a keyring JSON-RPC request.",source:"@site/snaps/reference/keyring-api/functions/handleKeyringRequest.md",sourceDirName:"reference/keyring-api/functions",slug:"/reference/keyring-api/functions/handleKeyringRequest",permalink:"/1071-edit-doc-item/snaps/reference/keyring-api/functions/handleKeyringRequest",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/functions/handleKeyringRequest.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Function: buildHandlersChain()",permalink:"/1071-edit-doc-item/snaps/reference/keyring-api/functions/buildHandlersChain"},next:{title:"Resources",permalink:"/1071-edit-doc-item/snaps/reference/resources"}},l={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Source",id:"source",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"function-handlekeyringrequest"},"Function: handleKeyringRequest()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"handleKeyringRequest(keyring, request): Promise<Json | void>\n")),(0,a.kt)("p",null,"Handles a keyring JSON-RPC request."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"keyring")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/1071-edit-doc-item/snaps/reference/keyring-api/type-aliases/Keyring"},(0,a.kt)("inlineCode",{parentName:"a"},"Keyring"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Keyring instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"request")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"JsonRpcRequest"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Json"),">"," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Json"),"[]",">"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Keyring JSON-RPC request.")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"A promise that resolves to the keyring response."),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-rpc-dispatcher.ts#L71"},"external/keyring-api/src/keyring-rpc-dispatcher.ts:71")))}d.isMDXComponent=!0}}]);
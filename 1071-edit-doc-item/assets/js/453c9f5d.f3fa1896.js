"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39453:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010),o=a(39960),i=a(26112);function s(e){let{item:t}=e;const a=n.createElement(n.Fragment,null,t.title&&n.createElement("h2",{className:(0,r.Z)(i.Z.cardTitle)},t.icon&&n.createElement("img",{src:t.icon,className:i.Z.cardIcon}),n.createElement("span",null,t.title)),t.description&&n.createElement("p",null,t.description)),s=(0,r.Z)("card","padding--lg",i.Z.cardContainer,{[i.Z.flaskOnly]:t.flaskOnly});return t.href?n.createElement(o.Z,{className:s,href:t.href},a):n.createElement("div",{className:s},a)}function l(e){const{items:t}=e;return n.createElement("section",{className:"row"},t.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(s,{item:e})))))}},90414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(39453);const i={title:"Introduction"},s="Integrate your dapp with the MetaMask wallet",l={unversionedId:"index",id:"index",title:"Introduction",description:"Integrate your dapp with the MetaMask wallet using the Wallet API.",source:"@site/wallet/index.mdx",sourceDirName:".",slug:"/",permalink:"/1071-edit-doc-item/wallet/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/index.mdx",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"walletSidebar",next:{title:"Quickstart",permalink:"/1071-edit-doc-item/wallet/quickstart"}},c={},p=[{value:"Supported platforms",id:"supported-platforms",level:2},{value:"New to developing on MetaMask?",id:"new-to-developing-on-metamask",level:2},{value:"Questions?",id:"questions",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrate-your-dapp-with-the-metamask-wallet"},"Integrate your dapp with the MetaMask wallet"),(0,r.kt)("p",null,"Integrate your dapp with the MetaMask wallet using the ",(0,r.kt)("a",{parentName:"p",href:"reference/json-rpc-api"},"Wallet API"),".\nYou can interact with your users' Ethereum accounts, performing tasks such as the following:"),(0,r.kt)(o.Z,{items:[{href:"how-to/detect-wallet",title:"\ud83d\udd0e Detect MetaMask",description:"Detect MetaMask and other wallets in your users' browsers."},{href:"how-to/sign-data",title:"\ud83d\udd8a\ufe0f Sign data",description:"Request signatures from users, and allow them to sign in with Ethereum."},{href:"how-to/display",title:"\ud83d\udcc4 Display in MetaMask",description:"Display tokens, contract methods, and icons in MetaMask."},{href:"how-to/use-sdk",title:"\ud83d\udcf1 Connect to extension & mobile",description:"Connect to the MetaMask extension and mobile app using MetaMask SDK."}],mdxType:"CardList"}),(0,r.kt)("h2",{id:"supported-platforms"},"Supported platforms"),(0,r.kt)("p",null,"You can connect to your users' Ethereum accounts from the following dapp platforms:"),(0,r.kt)(o.Z,{items:[{href:"quickstart/javascript",title:"\ud83d\udcbb JavaScript",description:"Integrate your JavaScript dapp with MetaMask."},{href:"quickstart/react",title:"\ud83d\udcbb React",description:"Integrate your React dapp with MetaMask."},{href:"how-to/use-sdk/mobile",title:"\ud83d\udcf1 Mobile",description:"Integrate your React Native, iOS, or Android dapp with MetaMask."},{href:"how-to/use-sdk/gaming",title:"\ud83c\udfae Gaming",description:"Integrate your Unity game with MetaMask."}],mdxType:"CardList"}),(0,r.kt)("h2",{id:"new-to-developing-on-metamask"},"New to developing on MetaMask?"),(0,r.kt)("p",null,"If you're new integrating dapps with MetaMask, check out the following topics:"),(0,r.kt)(o.Z,{items:[{href:"concepts/architecture",title:"\ud83d\udcd0 Architecture",description:"Learn about the high-level MetaMask architecture."},{href:"concepts/wallet-api",title:"\ud83c\udf10 About the Wallet API",description:"Learn about MetaMask's Wallet API and its components."},{href:"concepts/sdk",title:"\u2194\ufe0f About MetaMask SDK",description:"Learn about the benefits of the SDK and how the SDK connects to MetaMask."},{href:"tutorials/react-dapp-local-state",title:"\ud83d\udee0\ufe0f Create a React dapp tutorial",description:"Follow the tutorial to create a React dapp and integrate it with MetaMask."}],mdxType:"CardList"}),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,"If you have questions about integrating your dapp with MetaMask, you can interact with the MetaMask\nteam and community on the MetaMask channels on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/consensys"},"Consensys Discord"),"."))}m.isMDXComponent=!0},26112:(e,t,a)=>{a.d(t,{Z:()=>n});const n={cardContainer:"cardContainer_C0Dw",flaskOnly:"flaskOnly_ADUl",cardTitle:"cardTitle_ZNcV",cardIcon:"cardIcon_naep"}}}]);
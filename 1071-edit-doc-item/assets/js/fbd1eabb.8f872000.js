"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4880],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"Detect the MetaMask Ethereum provider object.",sidebar_position:1},i="Detect MetaMask",l={unversionedId:"how-to/detect-wallet/metamask",id:"how-to/detect-wallet/metamask",title:"Detect MetaMask",description:"Detect the MetaMask Ethereum provider object.",source:"@site/wallet/how-to/detect-wallet/metamask.md",sourceDirName:"how-to/detect-wallet",slug:"/how-to/detect-wallet/metamask",permalink:"/1071-edit-doc-item/wallet/how-to/detect-wallet/metamask",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/detect-wallet/metamask.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Detect the MetaMask Ethereum provider object.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Detect wallet",permalink:"/1071-edit-doc-item/wallet/how-to/detect-wallet"},next:{title:"Detect multiple wallets",permalink:"/1071-edit-doc-item/wallet/how-to/detect-wallet/multiple-wallets"}},s={},p=[{value:"Steps",id:"steps",level:2},{value:"1. Install @metamask/detect-provider",id:"1-install-metamaskdetect-provider",level:3},{value:"2. Detect the provider",id:"2-detect-the-provider",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"detect-metamask"},"Detect MetaMask"),(0,a.kt)("p",null,"The presence of the MetaMask Ethereum provider object, ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum"),", in a user's browser\nindicates an Ethereum user."),(0,a.kt)("p",null,"To demonstrate this, verify whether your browser is running MetaMask by copying and pasting the following\ncode snippet into your browser's developer console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'if (typeof window.ethereum !== "undefined") {\n    console.log("MetaMask is installed!");\n}\n')),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/detect-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," module to\ndetect the MetaMask Ethereum provider."),(0,a.kt)("admonition",{title:"Detect multiple wallets",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"MetaMask supports ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which introduces an\nalternative discovery mechanism to the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider.\nThis alternative mechanism enables dapps to ",(0,a.kt)("a",{parentName:"p",href:"/1071-edit-doc-item/wallet/how-to/detect-wallet/multiple-wallets"},"detect multiple wallets")," in\nthe user's browser.\nWe recommend detecting multiple wallets to improve the user experience.")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"1-install-metamaskdetect-provider"},"1. Install @metamask/detect-provider"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," to install\n",(0,a.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider")," in your project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/detect-provider\n")),(0,a.kt)("h3",{id:"2-detect-the-provider"},"2. Detect the provider"),(0,a.kt)("p",null,"For example, the following code detects the provider using ",(0,a.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// This function detects most providers injected at window.ethereum.\nimport detectEthereumProvider from "@metamask/detect-provider";\n\n// This returns the provider, or null if it wasn\'t detected.\nconst provider = await detectEthereumProvider();\n\nif (provider) {\n    // From now on, this should always be true:\n    // provider === window.ethereum\n    startApp(provider); // initialize your app\n} else {\n    console.log("Please install MetaMask!");\n}\n\nfunction startApp(provider) {\n    // If the provider returned by detectEthereumProvider isn\'t the same as\n    // window.ethereum, something is overwriting it \u2013 perhaps another wallet.\n    if (provider !== window.ethereum) {\n        console.error("Do you have multiple wallets installed?");\n    }\n    // Access the decentralized web!\n}\n')))}m.isMDXComponent=!0}}]);
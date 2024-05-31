"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3442],{72140:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(74848),s=n(28453),i=n(47220);const o={title:"Introduction"},r="Integrate your dapp with the MetaMask wallet",c={id:"index",title:"Introduction",description:"Integrate your dapp with MetaMask using the Wallet API.",source:"@site/wallet/index.mdx",sourceDirName:".",slug:"/",permalink:"/wallet/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/index.mdx",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"walletSidebar",next:{title:"How to",permalink:"/wallet/how-to"}},l={},d=[{value:"New to developing on MetaMask?",id:"new-to-developing-on-metamask",level:2},{value:"Questions?",id:"questions",level:2}];function h(t){const e={a:"a",h1:"h1",h2:"h2",p:"p",...(0,s.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"integrate-your-dapp-with-the-metamask-wallet",children:"Integrate your dapp with the MetaMask wallet"}),"\n",(0,a.jsxs)(e.p,{children:["Integrate your dapp with ",(0,a.jsx)(e.a,{href:"https://metamask.io/",children:"MetaMask"})," using the ",(0,a.jsx)(e.a,{href:"reference/json-rpc-api",children:"Wallet API"}),".\nYou can interact with your users' Ethereum accounts, performing tasks such as the following:"]}),"\n",(0,a.jsx)(i.A,{items:[{href:"how-to/connect",title:"\u2194\ufe0f Connect to MetaMask",description:"Connect to MetaMask and other wallets in your users' browsers."},{href:"how-to/sign-data",title:"\ud83d\udd8a\ufe0f Sign data",description:"Request signatures from users, and allow them to sign in with Ethereum."},{href:"how-to/display",title:"\ud83d\udcc4 Display in MetaMask",description:"Display tokens, contract methods, and icons in MetaMask."},{href:"how-to/use-sdk",title:"\ud83d\udcf1 Connect to extension & mobile",description:"Connect to the MetaMask extension and mobile app using MetaMask SDK."}]}),"\n",(0,a.jsx)(e.h2,{id:"new-to-developing-on-metamask",children:"New to developing on MetaMask?"}),"\n",(0,a.jsx)(e.p,{children:"If you're new to integrating dapps with MetaMask, check out the following topics:"}),"\n",(0,a.jsx)(i.A,{items:[{href:"concepts/architecture",title:"\ud83d\udcd0 Architecture",description:"Learn about the high-level MetaMask architecture."},{href:"concepts/wallet-api",title:"\ud83c\udf10 About the Wallet API",description:"Learn about MetaMask's Wallet API and its components."},{href:"concepts/sdk",title:"\ud83d\udcf1 About MetaMask SDK",description:"Learn about the benefits of the SDK and how the SDK connects to MetaMask."},{href:"tutorials/react-dapp-local-state",title:"\ud83d\udee0\ufe0f Create a React dapp tutorial",description:"Follow the tutorial to create a React dapp and integrate it with MetaMask."},{href:"tutorials/javascript-dapp-simple",title:"\ud83d\udee0\ufe0f Create a simple dapp tutorial",description:"Follow the tutorial to create a simple dapp and integrate it with MetaMask."}]}),"\n",(0,a.jsx)(e.h2,{id:"questions",children:"Questions?"}),"\n",(0,a.jsxs)(e.p,{children:["If you have questions about integrating your dapp with MetaMask, you can interact with the MetaMask\nteam and community on the MetaMask channels on ",(0,a.jsx)(e.a,{href:"https://discord.gg/consensys",children:"Consensys Discord"}),"."]})]})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(h,{...t})}):h(t)}},47220:(t,e,n)=>{n.d(e,{A:()=>c});n(96540);var a=n(20053),s=n(28774),i=n(49259),o=n(74848);function r(t){let{item:e}=t;const n=(0,o.jsxs)(o.Fragment,{children:[e.title&&(0,o.jsxs)("h2",{className:(0,a.A)(i.A.cardTitle),children:[e.icon&&(0,o.jsx)("img",{src:e.icon,className:i.A.cardIcon}),(0,o.jsx)("span",{children:e.title})]}),e.description&&(0,o.jsx)("p",{children:e.description})]}),r=(0,a.A)("card","padding--lg",i.A.cardContainer,{[i.A.flaskOnly]:e.flaskOnly});return e.href?(0,o.jsx)(s.A,{className:r,href:e.href,children:n}):(0,o.jsx)("div",{className:r,children:n})}function c(t){const{items:e}=t;return(0,o.jsx)("section",{className:"row",children:e.map(((t,e)=>(0,o.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,o.jsx)(r,{item:t})},e)))})}},20053:(t,e,n)=>{function a(t){var e,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(s&&(s+=" "),s+=n);else for(e in t)t[e]&&(s&&(s+=" "),s+=e);return s}n.d(e,{A:()=>s});const s=function(){for(var t,e,n=0,s="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(s&&(s+=" "),s+=e);return s}},49259:(t,e,n)=>{n.d(e,{A:()=>a});const a={cardContainer:"cardContainer_C0Dw",flaskOnly:"flaskOnly_ADUl",cardTitle:"cardTitle_ZNcV",cardIcon:"cardIcon_naep"}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>r});var a=n(96540);const s={},i=a.createContext(s);function o(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);
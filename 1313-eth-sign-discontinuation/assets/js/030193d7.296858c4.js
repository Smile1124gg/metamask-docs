"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1930],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=r,m=c["".concat(p,".").concat(d)]||c[d]||g[d]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const i={description:"Integrate MetaMask SDK with Wagmi in your JavaScript dapp.",sidebar_position:2,sidebar_label:"Wagmi",tags:["JavaScript SDK"]},o="Use Wagmi with MetaMask SDK",s={unversionedId:"how-to/use-sdk/3rd-party-libraries/wagmi",id:"how-to/use-sdk/3rd-party-libraries/wagmi",title:"Use Wagmi with MetaMask SDK",description:"Integrate MetaMask SDK with Wagmi in your JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/3rd-party-libraries/wagmi.md",sourceDirName:"how-to/use-sdk/3rd-party-libraries",slug:"/how-to/use-sdk/3rd-party-libraries/wagmi",permalink:"/1313-eth-sign-discontinuation/wallet/how-to/use-sdk/3rd-party-libraries/wagmi",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/3rd-party-libraries/wagmi.md",tags:[{label:"JavaScript SDK",permalink:"/1313-eth-sign-discontinuation/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:2,frontMatter:{description:"Integrate MetaMask SDK with Wagmi in your JavaScript dapp.",sidebar_position:2,sidebar_label:"Wagmi",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Web3-Onboard",permalink:"/1313-eth-sign-discontinuation/wallet/how-to/use-sdk/3rd-party-libraries/web3-onboard"},next:{title:"Onboard users",permalink:"/1313-eth-sign-discontinuation/wallet/how-to/onboard-users"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Configure Wagmi with the MetaMask connector",id:"1-configure-wagmi-with-the-metamask-connector",level:3},{value:"2. Configure the SDK",id:"2-configure-the-sdk",level:3},{value:"Dapp metadata",id:"dapp-metadata",level:4},{value:"Infura API key",id:"infura-api-key",level:4},{value:"Universal links",id:"universal-links",level:4},{value:"3. Implement contract interaction using <code>usePrepareContractWrite</code>",id:"3-implement-contract-interaction-using-usepreparecontractwrite",level:3},{value:"Benefits of using the Infura API with Wagmi",id:"benefits-of-using-the-infura-api-with-wagmi",level:2}],u={toc:l},c="wrapper";function g(e){let{components:t,...i}=e;return(0,r.yg)(c,(0,a.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"use-wagmi-with-metamask-sdk"},"Use Wagmi with MetaMask SDK"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://wagmi.sh/"},"Wagmi")," is a powerful and efficient React Hooks library designed to streamline\ndapp development by simplifying Ethereum interactions."),(0,r.yg)("p",null,"You can integrate ",(0,r.yg)("a",{parentName:"p",href:"/1313-eth-sign-discontinuation/wallet/concepts/sdk/"},"MetaMask SDK")," into your dapp alongside Wagmi,\nusing the MetaMask connector with Wagmi, to enable your users to seamlessly and securely connect to\nthe MetaMask browser extension and MetaMask Mobile."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Ensure you have a basic understanding of Ethereum smart contracts and React Hooks."),(0,r.yg)("li",{parentName:"ul"},"Set up a project with ",(0,r.yg)("a",{parentName:"li",href:"https://wagmi.sh/react/getting-started"},"Wagmi"),"."),(0,r.yg)("li",{parentName:"ul"},"Create an Infura API key and allowlist to ",(0,r.yg)("a",{parentName:"li",href:"/1313-eth-sign-discontinuation/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"make read-only requests"),".")),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-configure-wagmi-with-the-metamask-connector"},"1. Configure Wagmi with the MetaMask connector"),(0,r.yg)("p",null,"Configure Wagmi to include MetaMask as a connector and specify the Ethereum chains your dapp will support.\nFor example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'import { createConfig, http } from "wagmi";\nimport { mainnet, sepolia } from "wagmi/chains";\nimport { metaMask } from "wagmi/connectors";\n\nexport const config = createConfig({\n  chains: [mainnet, sepolia],\n  connectors: [\n    metaMask({\n      dappMetadata: {\n        name: "Example Wagmi dapp",\n      },\n    }),\n  ],\n  transports: {\n    [mainnet.id]: http(),\n    [sepolia.id]: http(),\n  },\n});\n')),(0,r.yg)("h3",{id:"2-configure-the-sdk"},"2. Configure the SDK"),(0,r.yg)("p",null,"When configuring the connector, make sure to configure the proper\n",(0,r.yg)("a",{parentName:"p",href:"/1313-eth-sign-discontinuation/wallet/reference/sdk-js-options"},"SDK options"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'connectors: [\n  metaMask({\n    dappMetadata: {\n      name: "Example Wagmi dapp",\n    },\n    infuraAPIKey: "YOUR-API-KEY",\n    // Other options.\n  }),\n],\n')),(0,r.yg)("h4",{id:"dapp-metadata"},"Dapp metadata"),(0,r.yg)("p",null,"Specify the ",(0,r.yg)("a",{parentName:"p",href:"/1313-eth-sign-discontinuation/wallet/reference/sdk-js-options#dappmetadata"},(0,r.yg)("inlineCode",{parentName:"a"},"dappMetadata"))," option to help\nidentify your dapp within the MetaMask ecosystem.\nThis option is required when configuring the MetaMask connector with Wagmi."),(0,r.yg)("h4",{id:"infura-api-key"},"Infura API key"),(0,r.yg)("p",null,"We recommend specifying the ",(0,r.yg)("a",{parentName:"p",href:"/1313-eth-sign-discontinuation/wallet/reference/sdk-js-options#infuraapikey"},(0,r.yg)("inlineCode",{parentName:"a"},"infuraAPIKey")),"\noption to ",(0,r.yg)("a",{parentName:"p",href:"/1313-eth-sign-discontinuation/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"make read-only requests")," using the Infura API.\nRead more about the ",(0,r.yg)("a",{parentName:"p",href:"#benefits-of-using-the-infura-api-with-wagmi"},"benefits of using the Infura API with Wagmi"),"."),(0,r.yg)("h4",{id:"universal-links"},"Universal links"),(0,r.yg)("p",null,"We recommend using universal links instead of deeplinks to avoid issues on iOS.\nThus, do not enable the ",(0,r.yg)("a",{parentName:"p",href:"/1313-eth-sign-discontinuation/wallet/reference/sdk-js-options#usedeeplink"},(0,r.yg)("inlineCode",{parentName:"a"},"useDeeplink"))," option.\nUsing universal links ensures a smoother transition for users accessing your dapp from mobile\ndevices, providing a better user experience compared to traditional deeplinking methods."),(0,r.yg)("h3",{id:"3-implement-contract-interaction-using-usepreparecontractwrite"},"3. Implement contract interaction using ",(0,r.yg)("inlineCode",{parentName:"h3"},"usePrepareContractWrite")),(0,r.yg)("p",null,"Due to a known issue in Safari where a 500ms timeout can interrupt smart contract interactions, we\nrecommend using the ",(0,r.yg)("a",{parentName:"p",href:"https://1.x.wagmi.sh/react/prepare-hooks/usePrepareContractWrite"},(0,r.yg)("inlineCode",{parentName:"a"},"usePrepareContractWrite")),"\nhook from Wagmi.\nThis approach ensures smooth transactions by preparing the contract write operation ahead of the\nactual execution."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'import { usePrepareContractWrite, useContractWrite } from "wagmi";\n\nconst { config } = usePrepareContractWrite({\n  address: "0xContractAddress",\n  abi: contractABI,\n  functionName: "functionToCall",\n  args: [arg1, arg2],\n});\n\nconst { write } = useContractWrite(config);\n\nwrite();\n')),(0,r.yg)("h2",{id:"benefits-of-using-the-infura-api-with-wagmi"},"Benefits of using the Infura API with Wagmi"),(0,r.yg)("p",null,"Read-only requests are blockchain requests that do not require user wallet interaction.\nMobile dapps can lose their continuous connection with MetaMask, causing read-only requests to fail."),(0,r.yg)("p",null,"These are some errors that might occur in mobile environments:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Wagmi errors",src:n(16925).A,width:"1136",height:"340"})),(0,r.yg)("p",null,"To overcome this limitation in mobile dapps that rely on a continuous connection with MetaMask,\nuse the Infura API to make read-only requests.\nYou can do this by ",(0,r.yg)("a",{parentName:"p",href:"#2-configure-the-sdk"},"configuring the SDK with an Infura API key"),".\nThis approach offloads the read operations to Infura's nodes, reducing the load on your own\ninfrastructure and ensuring high availability and reliability, independent of the user's wallet connection."),(0,r.yg)("p",null,"By using the Infura API, you can ensure:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Uninterrupted access:")," Continuous network access for read-only requests, regardless of MetaMask's state.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Enhanced stability:")," Stabilized dapp functionality by relying on Infura's robust infrastructure\nrather than the mobile environment's variable connectivity and background processing constraints."))),(0,r.yg)("p",null,"In summary, using the Infura API compensates for Wagmi's lack of mobile optimization by providing a\nstable network backend for read-only operations."))}g.isMDXComponent=!0},16925:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/wagmi-errors-a2d119e19bfdb281e9ffe8513b6e823b.png"}}]);
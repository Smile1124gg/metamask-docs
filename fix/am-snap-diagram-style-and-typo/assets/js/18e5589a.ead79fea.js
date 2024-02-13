"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,s(s({ref:t},l),{},{components:n})):a.createElement(k,s({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={description:"Integrate your React dapp with MetaMask.",sidebar_position:2},s="React quickstart",i={unversionedId:"quickstart/react",id:"quickstart/react",title:"React quickstart",description:"Integrate your React dapp with MetaMask.",source:"@site/wallet/quickstart/react.md",sourceDirName:"quickstart",slug:"/quickstart/react",permalink:"/fix/am-snap-diagram-style-and-typo/wallet/quickstart/react",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/quickstart/react.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Integrate your React dapp with MetaMask.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"JavaScript quickstart",permalink:"/fix/am-snap-diagram-style-and-typo/wallet/quickstart/javascript"},next:{title:"Other platforms",permalink:"/fix/am-snap-diagram-style-and-typo/wallet/quickstart/other-platforms"}},c={},p=[{value:"Connect to the MetaMask browser extension",id:"connect-to-the-metamask-browser-extension",level:2},{value:"Connect to the MetaMask extension and MetaMask Mobile",id:"connect-to-the-metamask-extension-and-metamask-mobile",level:2}],l={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react-quickstart"},"React quickstart"),(0,r.kt)("p",null,"This page provides code samples to quickly connect to your users' MetaMask accounts from a\nReact dapp.\nYou can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connect-to-the-metamask-browser-extension"},"Connect to the MetaMask browser extension"),"\ndirectly using the Wallet API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connect-to-the-metamask-extension-and-metamask-mobile"},"Connect to the MetaMask extension and MetaMask mobile"),"\nusing MetaMask SDK.")),(0,r.kt)("h2",{id:"connect-to-the-metamask-browser-extension"},"Connect to the MetaMask browser extension"),(0,r.kt)("p",null,"Connect to the MetaMask browser extension directly using the ",(0,r.kt)("a",{parentName:"p",href:"/fix/am-snap-diagram-style-and-typo/wallet/concepts/wallet-api"},"Wallet API"),".\nThis example uses the ",(0,r.kt)("a",{parentName:"p",href:"https://v3.vitejs.dev/guide/"},"Vite")," build tool with React and Typescript, so\nyou can get started quickly with an optimized dapp."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow Step 1 in the ",(0,r.kt)("a",{parentName:"p",href:"/fix/am-snap-diagram-style-and-typo/wallet/tutorials/react-dapp-local-state"},"React dapp tutorial")," to set up a\nVite project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following code to your project file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="App.tsx"',title:'"App.tsx"'},"import './App.css'\nimport { useState, useEffect } from 'react'\nimport detectEthereumProvider from '@metamask/detect-provider'\n\n// Detect the MetaMask Ethereum provider\n\nconst App = () => {\n  const [hasProvider, setHasProvider] = useState<boolean | null>(null)\n  const initialState = { accounts: [] } \n  const [wallet, setWallet] = useState(initialState) \n\n  useEffect(() => {\n    const getProvider = async () => {\n      const provider = await detectEthereumProvider({ silent: true })\n      setHasProvider(Boolean(provider))\n    }\n    getProvider()\n  }, [])\n\n// Prompt users to connect to MetaMask\n\n  const updateWallet = async (accounts:any) => {\n    setWallet({ accounts })\n  }  \n\n  const handleConnect = async () => {  \n    let accounts = await window.ethereum.request({  method: \"eth_requestAccounts\" })  \n    updateWallet(accounts)   \n  }  \n\n  return (\n    <div className=\"App\">\n      <div>Injected Provider {hasProvider ? 'DOES' : 'DOES NOT'} Exist</div>\n      { hasProvider && \n        <button onClick={handleConnect}>Connect MetaMask</button>\n      }\n      { wallet.accounts.length > 0 &&  \n        <div>Wallet Accounts: { wallet.accounts[0] }</div>\n      }\n    </div>\n  )\n}\nexport default App\n")))),(0,r.kt)("h2",{id:"connect-to-the-metamask-extension-and-metamask-mobile"},"Connect to the MetaMask extension and MetaMask Mobile"),(0,r.kt)("p",null,"Connect to the MetaMask browser extension and MetaMask Mobile using ",(0,r.kt)("a",{parentName:"p",href:"/fix/am-snap-diagram-style-and-typo/wallet/concepts/sdk/"},"MetaMask SDK"),".\nThe SDK automatically detects MetaMask in the user's browsers, and enables them to seamlessly\nconnect to the extension or mobile wallet.\nBy integrating your dapp using the SDK, millions of MetaMask Mobile users can connect to their\npreferred MetaMask client."),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The SDK uses the ",(0,r.kt)("a",{parentName:"p",href:"/fix/am-snap-diagram-style-and-typo/wallet/concepts/wallet-api#ethereum-provider-api"},"MetaMask Ethereum provider"),", so\nyou can use the SDK as a wrapper around an existing JavaScript dapp and call Wallet API methods from\nyour dapp as normal.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("a",{parentName:"p",href:"/fix/am-snap-diagram-style-and-typo/wallet/how-to/use-sdk/javascript/react/"},"MetaMask React SDK")," in your project directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk-react\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wrap your root component in a ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskProvider"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.tsx"',title:'"index.tsx"'},"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport { MetaMaskProvider } from '@metamask/sdk-react';\n\nconst root = ReactDOM.createRoot(\n  document.getElementById('root') as HTMLElement\n);\n\nroot.render(\n  <React.StrictMode>\n    <MetaMaskProvider debug={false} sdkOptions={{\n      dappMetadata: {\n        name: \"Example React Dapp\",\n        url: window.location.host,\n      }\n    }}>\n      <App />\n    </MetaMaskProvider>\n  </React.StrictMode>\n);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To use the SDK, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSDK")," hook in your React components:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="App.tsx"',title:'"App.tsx"'},"import { useSDK } from '@metamask/sdk-react';\nimport React, { useState } from 'react';\n\nexport const App = () => {\n  const [account, setAccount] = useState<string>();\n  const { sdk, connected, connecting, provider, chainId } = useSDK();\n\n  const connect = async () => {\n    try {\n      const accounts = await sdk?.connect();\n      setAccount(accounts?.[0]);\n    } catch(err) {\n      console.warn(`failed to connect..`, err);\n    }\n  };\n\n  return (\n    <div className=\"App\">\n      <button style={{ padding: 10, margin: 10 }} onClick={connect}>\n        Connect\n      </button>\n      {connected && (\n        <div>\n          <>\n            {chainId && `Connected chain: ${chainId}`}\n            <p></p>\n            {account && `Connected account: ${account}`}\n          </>\n        </div>\n      )}\n    </div>\n  );\n};\n")))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5892],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),h=a,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return t?r.createElement(u,o(o({ref:n},d),{},{components:t})):r.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1168:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const i={description:"See the MetaMask Ethereum provider API reference.",sidebar_position:3},o="Ethereum provider API",s={unversionedId:"reference/provider-api",id:"reference/provider-api",title:"Ethereum provider API",description:"See the MetaMask Ethereum provider API reference.",source:"@site/wallet/reference/provider-api.md",sourceDirName:"reference",slug:"/reference/provider-api",permalink:"/1313-eth-sign-discontinuation/wallet/reference/provider-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/provider-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"See the MetaMask Ethereum provider API reference.",sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Unity SDK API",permalink:"/1313-eth-sign-discontinuation/wallet/reference/sdk-unity-api"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>isMetaMask</code>",id:"ismetamask",level:3},{value:"Example",id:"example",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>isConnected()</code>",id:"isconnected",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>request()</code>",id:"request",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>_metamask.isUnlocked()</code>",id:"_metamaskisunlocked",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-3",level:4},{value:"Events",id:"events",level:2},{value:"<code>accountsChanged</code>",id:"accountschanged",level:3},{value:"<code>chainChanged</code>",id:"chainchanged",level:3},{value:"<code>connect</code>",id:"connect",level:3},{value:"<code>disconnect</code>",id:"disconnect",level:3},{value:"<code>message</code>",id:"message",level:3},{value:"Remove event listeners",id:"remove-event-listeners",level:3},{value:"<code>removeListener</code>",id:"removelistener",level:4},{value:"<code>removeAllListeners</code>",id:"removealllisteners",level:4},{value:"Errors",id:"errors",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"ethereum-provider-api"},"Ethereum provider API"),(0,a.yg)("p",null,"This page is a reference for the Ethereum provider API of MetaMask's ",(0,a.yg)("a",{parentName:"p",href:"/1313-eth-sign-discontinuation/wallet/concepts/wallet-api"},"Wallet API"),".\nMetaMask injects the provider API into websites visited by its users using the ",(0,a.yg)("inlineCode",{parentName:"p"},"window.ethereum")," provider object.\nYou can use the provider ",(0,a.yg)("a",{parentName:"p",href:"#properties"},"properties"),", ",(0,a.yg)("a",{parentName:"p",href:"#methods"},"methods"),", and ",(0,a.yg)("a",{parentName:"p",href:"#events"},"events")," in your dapp."),(0,a.yg)("admonition",{title:"Note",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"MetaMask supports ",(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which introduces an\nalternative wallet detection mechanism to the ",(0,a.yg)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider.\nThis alternative mechanism enables dapps to support ",(0,a.yg)("a",{parentName:"p",href:"/1313-eth-sign-discontinuation/wallet/concepts/wallet-interoperability"},"wallet interoperability"),"\nby discovering multiple injected wallet providers in a user's browser.\nWe recommend ",(0,a.yg)("a",{parentName:"p",href:"/1313-eth-sign-discontinuation/wallet/how-to/connect/"},"using this mechanism to connect to MetaMask"),"."),(0,a.yg)("p",{parentName:"admonition"},"You can access the provider API using the selected EIP-6963 provider object.\nThroughout this documentation, we refer to the selected provider using ",(0,a.yg)("inlineCode",{parentName:"p"},"provider"),".")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"ismetamask"},(0,a.yg)("inlineCode",{parentName:"h3"},"isMetaMask")),(0,a.yg)("p",null,"This property is ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," if the user has MetaMask installed, and ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This property is non-standard.\nNon-MetaMask providers may also set this property to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),".")),(0,a.yg)("h4",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"provider.isMetaMask; // Or window.ethereum.isMetaMask if you don't support EIP-6963.\n")),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"isconnected"},(0,a.yg)("inlineCode",{parentName:"h3"},"isConnected()")),(0,a.yg)("p",null,"Indicates whether the provider is connected to the current chain.\nIf the provider isn't connected, the page must be reloaded to re-establish the connection.\nSee the ",(0,a.yg)("a",{parentName:"p",href:"#connect"},(0,a.yg)("inlineCode",{parentName:"a"},"connect"))," and ",(0,a.yg)("a",{parentName:"p",href:"#disconnect"},(0,a.yg)("inlineCode",{parentName:"a"},"disconnect"))," events for more information."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This method is unrelated to ",(0,a.yg)("a",{parentName:"p",href:"/1313-eth-sign-discontinuation/wallet/how-to/connect/access-accounts"},"accessing a user's accounts"),'.\nIn the provider interface, "connected" and "disconnected" refer to whether the provider can make RPC\nrequests to the current chain.')),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"None."),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"true")," if the provider is connected to the current chain, ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.yg)("h4",{id:"example-1"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"provider.isConnected(); // Or window.ethereum.isConnected() if you don't support EIP-6963.\n")),(0,a.yg)("h3",{id:"request"},(0,a.yg)("inlineCode",{parentName:"h3"},"request()")),(0,a.yg)("p",null,"This method is used to submit ",(0,a.yg)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API requests")," to Ethereum using MetaMask."),(0,a.yg)("h4",{id:"parameters-1"},"Parameters"),(0,a.yg)("p",null,"An object containing:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"method"),": ",(0,a.yg)("inlineCode",{parentName:"li"},"string")," - The JSON-RPC API method name."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"params"),": ",(0,a.yg)("inlineCode",{parentName:"li"},"array")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"object")," - (Optional) Parameters of the RPC method.\nIn practice, if a method has parameters, they're almost always of type ",(0,a.yg)("inlineCode",{parentName:"li"},"array"),".")),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,"A promise that resolves to the result of the RPC method call.\nIf the request fails, the promise rejects with an ",(0,a.yg)("a",{parentName:"p",href:"#errors"},"error"),"."),(0,a.yg)("h4",{id:"example-2"},"Example"),(0,a.yg)("p",null,"The following is an example of using ",(0,a.yg)("inlineCode",{parentName:"p"},"request()")," to call\n",(0,a.yg)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,a.yg)("inlineCode",{parentName:"a"},"eth_sendTransaction")),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'provider // Or window.ethereum if you don\'t support EIP-6963.\n  .request({\n    method: "eth_sendTransaction",\n    params: [\n      {\n        from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155",\n        to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",\n        gas: "0x76c0", // 30400\n        gasPrice: "0x9184e72a000", // 10000000000000\n        value: "0x9184e72a", // 2441406250\n        data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",\n      },\n    ]\n  })\n  .then((result) => {\n    // The result varies by RPC method.\n    // For example, this method returns a transaction hash hexadecimal string upon success.\n  })\n  .catch((error) => {\n    // If the request fails, the Promise rejects with an error.\n  });\n')),(0,a.yg)("h3",{id:"_metamaskisunlocked"},(0,a.yg)("inlineCode",{parentName:"h3"},"_metamask.isUnlocked()")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"This method is experimental.\nUse it at your own risk.")),(0,a.yg)("p",null,"Indicates if MetaMask is unlocked by the user.\nMetaMask must be unlocked to perform any operation involving user accounts.\nNote that this method doesn't indicate if the user has exposed any accounts to the caller."),(0,a.yg)("h4",{id:"parameters-2"},"Parameters"),(0,a.yg)("p",null,"None."),(0,a.yg)("h4",{id:"returns-2"},"Returns"),(0,a.yg)("p",null,"A promise that resolves to ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," if MetaMask is unlocked by the user, and ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.yg)("h4",{id:"example-3"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"provider._metamask.isUnlocked(); // Or window.ethereum._metamask.isUnlocked() if you don't support EIP-6963.\n")),(0,a.yg)("h2",{id:"events"},"Events"),(0,a.yg)("p",null,"The MetaMask provider emits events using the Node.js\n",(0,a.yg)("a",{parentName:"p",href:"https://nodejs.org/api/events.html"},(0,a.yg)("inlineCode",{parentName:"a"},"EventEmitter"))," API.\nThe following is an example of listening to the ",(0,a.yg)("a",{parentName:"p",href:"#accountschanged"},(0,a.yg)("inlineCode",{parentName:"a"},"accountsChanged"))," event."),(0,a.yg)("p",null,"You should ",(0,a.yg)("a",{parentName:"p",href:"#remove-event-listeners"},"remove listeners")," after you're done listening to an event (for example, on component\n",(0,a.yg)("inlineCode",{parentName:"p"},"unmount")," in React)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'function handleAccountsChanged(accounts) {\n  // Handle new accounts, or lack thereof.\n}\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("accountsChanged", handleAccountsChanged);\n\n// Later\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .removeListener("accountsChanged", handleAccountsChanged);\n')),(0,a.yg)("h3",{id:"accountschanged"},(0,a.yg)("inlineCode",{parentName:"h3"},"accountsChanged")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'provider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("accountsChanged", handler: (accounts: Array<string>) => void);\n')),(0,a.yg)("p",null,"The provider emits this event when the return value of the\n",(0,a.yg)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,a.yg)("inlineCode",{parentName:"a"},"eth_accounts"))," RPC\nmethod changes.\n",(0,a.yg)("inlineCode",{parentName:"p"},"eth_accounts")," returns either an empty array, or an array that contains the addresses of the accounts\nthe caller is permitted to access with the most recently used account first.\nCallers are identified by their URL origin, which means that all sites with the same origin share\nthe same permissions."),(0,a.yg)("p",null,"This means that the provider emits ",(0,a.yg)("inlineCode",{parentName:"p"},"accountsChanged")," when the user's exposed account address changes.\nListen to this event to ",(0,a.yg)("a",{parentName:"p",href:"/1313-eth-sign-discontinuation/wallet/how-to/connect/access-accounts#handle-accounts"},"handle accounts"),"."),(0,a.yg)("h3",{id:"chainchanged"},(0,a.yg)("inlineCode",{parentName:"h3"},"chainChanged")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'provider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("chainChanged", handler: (chainId: string) => void);\n')),(0,a.yg)("p",null,"The provider emits this event when the currently connected chain changes.\nListen to this event to ",(0,a.yg)("a",{parentName:"p",href:"/1313-eth-sign-discontinuation/wallet/how-to/manage-networks/detect-network"},"detect a user's network"),"."),(0,a.yg)("admonition",{title:"Important",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"We strongly recommend reloading the page upon chain changes, unless you have a good reason not to:"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'provider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("chainChanged", (chainId) => window.location.reload());\n'))),(0,a.yg)("h3",{id:"connect"},(0,a.yg)("inlineCode",{parentName:"h3"},"connect")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'interface ConnectInfo {\n  chainId: string;\n}\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("connect", handler: (connectInfo: ConnectInfo) => void);\n')),(0,a.yg)("p",null,"The provider emits this event when it's first able to submit RPC requests to a chain.\nWe recommend listening to this event and using the\n",(0,a.yg)("a",{parentName:"p",href:"#isconnected"},(0,a.yg)("inlineCode",{parentName:"a"},"isConnected()"))," provider method to determine when\nthe provider is connected."),(0,a.yg)("h3",{id:"disconnect"},(0,a.yg)("inlineCode",{parentName:"h3"},"disconnect")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'provider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("disconnect", handler: (error: ProviderRpcError) => void);\n')),(0,a.yg)("p",null,"The provider emits this event if it becomes unable to submit RPC requests to a chain.\nIn general, this only happens due to network connectivity issues or some unforeseen error."),(0,a.yg)("p",null,"When the provider emits this event, it doesn't accept new requests until the connection to the chain\nis re-established, which requires reloading the page.\nYou can also use the ",(0,a.yg)("a",{parentName:"p",href:"#isconnected"},(0,a.yg)("inlineCode",{parentName:"a"},"isConnected()"))," provider method\nto determine if the provider is disconnected."),(0,a.yg)("h3",{id:"message"},(0,a.yg)("inlineCode",{parentName:"h3"},"message")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'interface ProviderMessage {\n  type: string;\n  data: unknown;\n}\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("message", handler: (message: ProviderMessage) => void);\n')),(0,a.yg)("p",null,"The provider emits this event when it receives a message that the user should be notified of.\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"type")," property identifies the kind of message."),(0,a.yg)("p",null,"RPC subscription updates are a common use case for this event.\nFor example, if you create a subscription using\n",(0,a.yg)("a",{parentName:"p",href:"/wallet/reference/eth_subscribe"},(0,a.yg)("inlineCode",{parentName:"a"},"eth_subscribe")),", each\nsubscription update is emitted as a ",(0,a.yg)("inlineCode",{parentName:"p"},"message")," event with a ",(0,a.yg)("inlineCode",{parentName:"p"},"type")," of ",(0,a.yg)("inlineCode",{parentName:"p"},"eth_subscription"),"."),(0,a.yg)("h3",{id:"remove-event-listeners"},"Remove event listeners"),(0,a.yg)("h4",{id:"removelistener"},(0,a.yg)("inlineCode",{parentName:"h4"},"removeListener")),(0,a.yg)("p",null,"Use the ",(0,a.yg)("inlineCode",{parentName:"p"},"removeListener")," method to remove specific event listeners from an ",(0,a.yg)("inlineCode",{parentName:"p"},"EventEmitter")," object.\nIn the following example ",(0,a.yg)("inlineCode",{parentName:"p"},"removeListener")," is used to remove the ",(0,a.yg)("inlineCode",{parentName:"p"},"connect")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"accountsChanged")," events:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'// Use window.ethereum instead of provider if EIP-6963 is not supported.\n\n// Add listeners\nprovider.on("_initialized", updateWalletAndAccounts);\nprovider.on("connect", updateWalletAndAccounts);\nprovider.on("accountsChanged", updateWallet);\nprovider.on("chainChanged", updateWalletAndAccounts);\nprovider.on("disconnect", disconnectWallet);\n\n// Remove individual listeners\nprovider.removeListener("connect", updateWalletAndAccounts);\nprovider.removeListener("accountsChanged", updateWallet);\n')),(0,a.yg)("p",null,"The first argument of ",(0,a.yg)("inlineCode",{parentName:"p"},"removeListener")," is the event name, and the second argument is\na reference to the function passed to ",(0,a.yg)("inlineCode",{parentName:"p"},"on")," for the event."),(0,a.yg)("h4",{id:"removealllisteners"},(0,a.yg)("inlineCode",{parentName:"h4"},"removeAllListeners")),(0,a.yg)("p",null,"You can use ",(0,a.yg)("inlineCode",{parentName:"p"},"removeAllListeners")," to remove all listeners from the event emitter at once. This method is helpful when you need to clean up all listeners simultaneously. "),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"removeAllListeners")," with caution.\nThis method clears all event listeners associated with the emitter, not only the listeners set up by the application code.\nUsing this method can unexpectedly clear important event handlers, interfere with scripts, and make debugging more complex.\nYou can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"removeListener")," method to safely remove specific listeners.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'// Use window.ethereum instead of provider if EIP-6963 is not supported.\n\n// Add listeners\nprovider.on("_initialized", updateWalletAndAccounts);\nprovider.on("connect", updateWalletAndAccounts);\nprovider.on("accountsChanged", updateWallet);\nprovider.on("chainChanged", updateWalletAndAccounts);\nprovider.on("disconnect", disconnectWallet);\n\n// Remove all listeners\nprovider.removeAllListeners()\n')),(0,a.yg)("p",null,"In the provided code example, ",(0,a.yg)("inlineCode",{parentName:"p"},"removeAllListeners")," is called to remove all event listeners attached to the ",(0,a.yg)("inlineCode",{parentName:"p"},"provider")," object. This cleanup function deletes any event listeners that are no longer needed."),(0,a.yg)("h2",{id:"errors"},"Errors"),(0,a.yg)("p",null,"All errors returned by the MetaMask provider follow this interface:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"interface ProviderRpcError extends Error {\n  message: string;\n  code: number;\n  data?: unknown;\n}\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"#request"},(0,a.yg)("inlineCode",{parentName:"a"},"request()"))," provider method throws errors eagerly.\nYou can use the error ",(0,a.yg)("inlineCode",{parentName:"p"},"code")," property to determine why the request failed.\nCommon codes and their meaning include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"4001")," - The request is rejected by the user."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-32602")," - The parameters are invalid."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-32603")," - Internal error.")),(0,a.yg)("p",null,"For the complete list of errors, see ",(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193#provider-errors"},"EIP-1193"),"\nand ",(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1474#error-codes"},"EIP-1474"),"."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The ",(0,a.yg)("a",{parentName:"p",href:"https://npmjs.com/package/eth-rpc-errors"},(0,a.yg)("inlineCode",{parentName:"a"},"eth-rpc-errors"))," package implements all RPC errors\nreturned by the MetaMask provider, and can help you identify their meaning.")))}m.isMDXComponent=!0}}]);
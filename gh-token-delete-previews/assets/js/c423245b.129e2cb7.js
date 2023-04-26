"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=l(n),d=s,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:s,o[1]=r;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(7462),s=(n(7294),n(3905));const i={description:"Create a snap that estimates gas fees."},o="Create a gas estimation snap",r={unversionedId:"tutorials/gas-estimation",id:"tutorials/gas-estimation",title:"Create a gas estimation snap",description:"Create a snap that estimates gas fees.",source:"@site/snaps/tutorials/gas-estimation.md",sourceDirName:"tutorials",slug:"/tutorials/gas-estimation",permalink:"/gh-token-delete-previews/snaps/tutorials/gas-estimation",draft:!1,tags:[],version:"current",frontMatter:{description:"Create a snap that estimates gas fees."},sidebar:"snapsSidebar",previous:{title:"Tutorials",permalink:"/gh-token-delete-previews/snaps/category/tutorials"},next:{title:"Create a transaction insights snap",permalink:"/gh-token-delete-previews/snaps/tutorials/transaction-insights"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up the project",id:"1-set-up-the-project",level:3},{value:"2. Set a custom icon",id:"2-set-a-custom-icon",level:3},{value:"3. Enable network access",id:"3-enable-network-access",level:3},{value:"4. Fetch gas fee estimates",id:"4-fetch-gas-fee-estimates",level:3},{value:"5. Build and test the snap",id:"5-build-and-test-the-snap",level:3},{value:"6. Next steps",id:"6-next-steps",level:3}],m={toc:l};function c(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"create-a-gas-estimation-snap"},"Create a gas estimation snap"),(0,s.kt)("p",null,"This tutorial walks you through creating a snap that estimates gas fees.\nThe snap is based on the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/template-snap-monorepo"},"Snaps template"),".\nIt uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch")," API to request information from the internet, and displays custom information in\na confirmation dialog."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/gh-token-delete-previews/snaps/get-started/install-snaps"},"Snaps installed"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A text editor (for example, ",(0,s.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),")")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn")," version 3"))),(0,s.kt)("h2",{id:"steps"},"Steps"),(0,s.kt)("h3",{id:"1-set-up-the-project"},"1. Set up the project"),(0,s.kt)("p",null,"Use the Snaps template by\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/template-snap-monorepo/generate"},"creating a new repository from the template"),"."),(0,s.kt)("p",null,"Give your project a new name, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"gas-estimation-snap"),"."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"},"Clone the repository"),"\nusing the command line:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:<your-username>/gas-estimation-snap.git\n")),(0,s.kt)("p",null,"To initialize your development environment with the required dependencies, in your project\ndirectory, enter the command ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,s.kt)("h3",{id:"2-set-a-custom-icon"},"2. Set a custom icon"),(0,s.kt)("p",null,"Open ",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/snap/snap.manifest.json")," in a text editor.\nThis file has the main configuration details for your snap.\nEdit the section under ",(0,s.kt)("inlineCode",{parentName:"p"},"npm")," to change the ",(0,s.kt)("inlineCode",{parentName:"p"},"iconPath")," to your new icon:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"location": {\n   "npm": {\n      "filePath": "dist/bundle.js",\n      "iconPath": "images/gas.svg",\n      "packageName": "snap",\n      "registry": "https://registry.npmjs.org/"\n   }\n')),(0,s.kt)("p",null,"Then, place\n",(0,s.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Montoya/gas-fee-snap/main/packages/snap/images/gas.svg"},"this file"),"\ninto the ",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/snap/images")," folder.\nThis is a free icon, ",(0,s.kt)("strong",{parentName:"p"},"Gas")," by Mello from\n",(0,s.kt)("a",{parentName:"p",href:"https://thenounproject.com/browse/icons/term/gas/"},"Noun Project"),"."),(0,s.kt)("h3",{id:"3-enable-network-access"},"3. Enable network access"),(0,s.kt)("p",null,"To enable your snap to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch")," API, request the\n",(0,s.kt)("a",{parentName:"p",href:"/gh-token-delete-previews/snaps/reference/permissions#endowmentnetwork-access"},(0,s.kt)("inlineCode",{parentName:"a"},"endowment:network-access"))," permission by\nmodifying ",(0,s.kt)("inlineCode",{parentName:"p"},"initialPermissions")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"snap.manifest.json"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_dialog": {},\n  "endowment:rpc": {\n    "dapps": true,\n    "snaps": false\n  }, \n  "endowment:network-access": {}\n},\n')),(0,s.kt)("h3",{id:"4-fetch-gas-fee-estimates"},"4. Fetch gas fee estimates"),(0,s.kt)("p",null,"Open ",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/snap/src/index.ts"),".\nThis is the main code file for your snap.\nTo get a gas fee estimate, use the public API endpoint provided by\n",(0,s.kt)("a",{parentName:"p",href:"https://beaconcha.in/"},"Open Source Ethereum Explorer"),".\nAdd the following ",(0,s.kt)("inlineCode",{parentName:"p"},"getFees()")," function to the top of the file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"import { OnRpcRequestHandler } from '@metamask/snaps-types';\nimport { panel, text } from '@metamask/snaps-ui';\n\nasync function getFees() {\n  const response = await fetch('https://beaconcha.in/api/v1/execution/gasnow'); \n  return response.text();\n}\n")),(0,s.kt)("p",null,"Then, modify the snap RPC message handler that displays the confirmation window.\nThis handler uses a switch statement to handle various request methods, but in this case there's\nonly one method, ",(0,s.kt)("inlineCode",{parentName:"p"},"hello"),".\nFor this method, the handler returns a call to MetaMask with the parameters to display a\nconfirmation window, and passes some static strings."),(0,s.kt)("p",null,"Since ",(0,s.kt)("inlineCode",{parentName:"p"},"getFees()")," returns a promise, you must use ",(0,s.kt)("inlineCode",{parentName:"p"},"then()")," to resolve it in your ",(0,s.kt)("inlineCode",{parentName:"p"},"hello")," method.\nRewrite the ",(0,s.kt)("inlineCode",{parentName:"p"},"hello")," method with the following code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"export const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {\n  switch (request.method) {\n    case 'hello':\n      return getFees().then(fees => {\n        return snap.request({\n          method: 'snap_dialog',\n          params: {\n            type: 'Alert',\n            content: panel([\n              text(`Hello, **${origin}**!`),\n              text(`Current gas fee estimates: ${fees}`),\n            ]),\n          }\n        });\n      });\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")),(0,s.kt)("h3",{id:"5-build-and-test-the-snap"},"5. Build and test the snap"),(0,s.kt)("p",null,"To build and test your snap:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Open ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," in the root directory of the project, and bump the version (if the version is\n",(0,s.kt)("inlineCode",{parentName:"p"},"0.1.0"),", bump it to ",(0,s.kt)("inlineCode",{parentName:"p"},"0.2.0"),").")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From the command line, run ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn start"),".\nYou should get a message that includes:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"You can now view site in the browser.\n\n  http://localhost:8000/\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Open ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8000/"},(0,s.kt)("inlineCode",{parentName:"a"},"localhost:8000"))," in your browser (with MetaMask Flask installed).\nA page like the following displays:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Test dapp with template snap",src:n(4654).Z,width:"1384",height:"884"})),(0,s.kt)("p",{parentName:"li"},"This is a boilerplate test dapp for installing and testing your snap.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select ",(0,s.kt)("strong",{parentName:"p"},"Connect")," to connect Flask to the dapp.\nAfter connecting, you're prompted to install the snap with the following permissions:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Allow websites to communicate directly with this snap.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Access the internet.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Display dialog windows in MetaMask.")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select ",(0,s.kt)("strong",{parentName:"p"},"Approve & install"),", then ",(0,s.kt)("strong",{parentName:"p"},"Send message"),".\nA dialog prompt displays with the response from the gas fee API:"))),(0,s.kt)("p",{align:"center"},(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Gas estimation dialog",src:n(3216).Z,width:"717",height:"461"}))),(0,s.kt)("p",null,"Congratulations!\nYou've integrated a public API into MetaMask and displayed real-time gas fee estimates."),(0,s.kt)("h3",{id:"6-next-steps"},"6. Next steps"),(0,s.kt)("p",null,"Next, you can try parsing the JSON response from the remote API and displaying the fees in a nicely\nformatted way."),(0,s.kt)("p",null,"You can also update the fields in ",(0,s.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," to match your custom snap:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"proposedName")," - The name of your snap."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"description")," - The description of your snap."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"repository")," - The URL of your cloned GitHub repository."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"source")," - The ",(0,s.kt)("inlineCode",{parentName:"li"},"shasum")," is set automatically when you build from the command line.\nIf you decided to publish your snap to npm, update the ",(0,s.kt)("inlineCode",{parentName:"li"},"location")," to its published location.")),(0,s.kt)("p",null,"Similarly, you should update the ",(0,s.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"version"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"description"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"repository")," sections of\n",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/snap/package.json")," even if you don't plan to publish your snap to npm."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"version")," field in ",(0,s.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," inherits the ",(0,s.kt)("inlineCode",{parentName:"p"},"version")," field from ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,s.kt)("p",null,"Lastly, you can update the content of ",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/site/src/pages/index.tsx"),", such as changing the\nname of the method for showing gas fee estimates.\nIf you change the method name, make sure to change the method name in ",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/snap/src/index.ts"),"\nto match."),(0,s.kt)("p",null,"Once you've made all necessary changes, you can\n",(0,s.kt)("a",{parentName:"p",href:"/gh-token-delete-previews/snaps/how-to/develop-a-snap#publish-your-snap"},"publish your snap to npm"),"."))}c.isMDXComponent=!0},3216:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gas-estimation-5c6763a1d978e1b965bce4a2864855a8.png"},4654:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/template-snap-26f51cea96ac89e6a6acab0e71e73aa3.png"}}]);
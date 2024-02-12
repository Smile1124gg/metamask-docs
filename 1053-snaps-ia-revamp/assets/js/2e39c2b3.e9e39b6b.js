"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5965],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(a),k=s,d=c["".concat(i,".").concat(k)]||c[k]||u[k]||r;return a?n.createElement(d,p(p({ref:t},m),{},{components:a})):n.createElement(d,p({ref:t},m))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,p=new Array(r);p[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:s,p[1]=o;for(var l=2;l<r;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(87462),s=(a(67294),a(3905));const r={description:"Use Jest for end-to-end Snap testing.",sidebar_position:5},p="Test a Snap",o={unversionedId:"how-to/test-a-snap",id:"how-to/test-a-snap",title:"Test a Snap",description:"Use Jest for end-to-end Snap testing.",source:"@site/snaps/how-to/test-a-snap.md",sourceDirName:"how-to",slug:"/how-to/test-a-snap",permalink:"/1053-snaps-ia-revamp/snaps/how-to/test-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/test-a-snap.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Use Jest for end-to-end Snap testing.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Secure a Snap",permalink:"/1053-snaps-ia-revamp/snaps/how-to/secure-a-snap"},next:{title:"Debug a Snap",permalink:"/1053-snaps-ia-revamp/snaps/how-to/debug-a-snap/"}},i={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Install @metamask/snaps-jest",id:"1-install-metamasksnaps-jest",level:3},{value:"2. Configure @metamask/snaps-jest",id:"2-configure-metamasksnaps-jest",level:3},{value:"3. Use @metamask/snaps-jest",id:"3-use-metamasksnaps-jest",level:3}],m={toc:l},c="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"test-a-snap"},"Test a Snap"),(0,s.kt)("p",null,"You can test your Snap by hosting it locally using ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn start"),", installing it in Flask, and calling\nits API methods from a dapp."),(0,s.kt)("p",null,"For end-to-end Snap testing in a Jest environment, use the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/snaps-jest"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/snaps-jest"))," package\nas follows."),(0,s.kt)("h2",{id:"steps"},"Steps"),(0,s.kt)("h3",{id:"1-install-metamasksnaps-jest"},"1. Install @metamask/snaps-jest"),(0,s.kt)("p",null,"Install the ",(0,s.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," package into your Snap project using ",(0,s.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn"),"\nor ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @metamask/snaps-jest\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/snaps-jest\n")),(0,s.kt)("h3",{id:"2-configure-metamasksnaps-jest"},"2. Configure @metamask/snaps-jest"),(0,s.kt)("p",null,"The easiest way to configure this package is to add it to your Jest configuration as a preset.\nIn the ",(0,s.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file, add the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"module.exports = {\n  preset: '@metamask/snaps-jest',\n};\n")),(0,s.kt)("p",null,"This automatically configures Jest to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," environment, and to use the\n",(0,s.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," matchers.\nYou can then run the ",(0,s.kt)("inlineCode",{parentName:"p"},"jest")," command as usual."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," assumes the Snap is built in the directory you run Jest from.\nIf you use a different directory, you can specify the path using the\n",(0,s.kt)("a",{parentName:"p",href:"/1053-snaps-ia-revamp/snaps/reference/cli/options#r-root"},(0,s.kt)("inlineCode",{parentName:"a"},"root"))," option, or by running your own HTTP server.\nIt's currently not possible to use ",(0,s.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," with a Snap that is not built.")),(0,s.kt)("p",null,"If you don't use the package as a preset, you can alternatively add the ",(0,s.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-jest"),"\nenvironment and matchers to your Jest configuration manually:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"module.exports = {\n  testEnvironment: '@metamask/snaps-jest',\n  setupFilesAfterEnv: ['@metamask/snaps-jest/dist/cjs/setup.js'],\n};\n")),(0,s.kt)("p",null,"You can pass any ",(0,s.kt)("a",{parentName:"p",href:"/1053-snaps-ia-revamp/snaps/reference/jest#options"},"Jest options")," to the test environment by adding a\n",(0,s.kt)("inlineCode",{parentName:"p"},"testEnvironmentOptions")," property to your Jest configuration.\nFor example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"module.exports = {\n  preset: '@metamask/snaps-jest',\n  testEnvironmentOptions: {\n    // Options go here\n  },\n};\n")),(0,s.kt)("p",null,"All options are optional."),(0,s.kt)("h3",{id:"3-use-metamasksnaps-jest"},"3. Use @metamask/snaps-jest"),(0,s.kt)("p",null,"Use the package by calling any of the ",(0,s.kt)("a",{parentName:"p",href:"/1053-snaps-ia-revamp/snaps/reference/jest#api-methods"},"API methods"),".\nYou can:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1053-snaps-ia-revamp/snaps/reference/jest#installsnap"},"Install a Snap.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1053-snaps-ia-revamp/snaps/reference/jest#sendtransaction"},"Send a transaction to the Snap.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1053-snaps-ia-revamp/snaps/reference/jest#runcronjob"},"Run a cronjob in the Snap.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1053-snaps-ia-revamp/snaps/reference/jest#getinterface"},"Interact with user interfaces.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1053-snaps-ia-revamp/snaps/reference/jest#mock"},"Mock the response of a network request.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1053-snaps-ia-revamp/snaps/reference/jest#close"},"Close the testing page."))),(0,s.kt)("p",null,"You can also use ",(0,s.kt)("a",{parentName:"p",href:"/1053-snaps-ia-revamp/snaps/reference/jest#jest-matchers"},"Jest matchers")," to assert that a response from\na Snap matches an expected value."))}u.isMDXComponent=!0}}]);
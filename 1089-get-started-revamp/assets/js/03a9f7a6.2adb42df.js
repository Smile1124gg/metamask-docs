"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6994],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return t?a.createElement(d,r(r({ref:n},c),{},{components:t})):a.createElement(d,r({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=f;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},89128:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const o={description:"Learn about the Snap project files.",sidebar_position:3},r="Snaps files",s={unversionedId:"concepts/files",id:"concepts/files",title:"Snaps files",description:"Learn about the Snap project files.",source:"@site/snaps/concepts/files.md",sourceDirName:"concepts",slug:"/concepts/files",permalink:"/1089-get-started-revamp/snaps/concepts/files",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/files.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about the Snap project files.",sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"About the Snaps APIs",permalink:"/1089-get-started-revamp/snaps/concepts/apis"},next:{title:"Snaps execution environment",permalink:"/1089-get-started-revamp/snaps/concepts/execution-environment"}},p={},l=[{value:"Manifest file",id:"manifest-file",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Bundle file",id:"bundle-file",level:2}],c={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"snaps-files"},"Snaps files"),(0,i.kt)("p",null,"If you look at the directory structure of the Snaps monorepo project generated in the\n",(0,i.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/snaps/get-started/quickstart"},"Snaps quickstart"),", it looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"your-snap-name/\n\u251c\u2500 packages/\n\u2502  \u251c\u2500 site/\n|  |  |- src/\n|  |  |  |- App.tsx\n|  |  \u251c\u2500 package.json\n|  |  |- ...(react app content)\n|  |\n\u2502  \u251c\u2500 snap/\n|  |  \u251c\u2500 src/\n|  |  |  |- index.ts\n|  |  \u251c\u2500 snap.manifest.json\n|  |  \u251c\u2500 package.json\n|  |  |- ... (Snap content)\n\u251c\u2500 package.json\n\u251c\u2500 ... (other stuff)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"snap")," folder contains the Snap implementation, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"site")," folder contains the Snap\ncompanion dapp implementation."),(0,i.kt)("p",null,"This page examines the following Snap project files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#manifest-file"},"The manifest file")," tells MetaMask important information about the Snap."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-file"},"The configuration file")," specifies configuration options for the Snap."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#bundle-file"},"The bundle file")," is the output file of the published Snap.")),(0,i.kt)("h2",{id:"manifest-file"},"Manifest file"),(0,i.kt)("p",null,"To get MetaMask to execute your Snap, you must have a valid manifest file named ",(0,i.kt)("inlineCode",{parentName:"p"},"snap.manifest.json"),",\nlocated in your package root directory.\nThe manifest file of ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World")," would look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "1.0.0",\n  "proposedName": "Hello World",\n  "description": "A Snap that says hello!",\n  "repository": {\n    "type": "git",\n    "url": "https://github.com/Hello/hello-snap.git"\n  },\n  "source": {\n    "shasum": "w3FltkDjKQZiPwM+AThnmypt0OFF7hj4ycg/kxxv+nU=",\n    "location": {\n      "npm": {\n        "filePath": "dist/bundle.js",\n        "iconPath": "images/icon.svg",\n        "packageName": "hello-snap",\n        "registry": "https://registry.npmjs.org/"\n      }\n    }\n  },\n  "initialPermissions": {},\n  "manifestVersion": "0.1"\n}\n')),(0,i.kt)("p",null,"The manifest tells MetaMask important information about your Snap, such as where it's published\n(using ",(0,i.kt)("inlineCode",{parentName:"p"},"source.location"),"), how to verify the integrity of the Snap source code (by attempting to\nreproduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"source.shasum")," value), and what\n",(0,i.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/snaps/how-to/request-permissions"},"permissions the Snap requests")," (using ",(0,i.kt)("inlineCode",{parentName:"p"},"initialPermissions"),")."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Currently, Snaps can only be\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry"},"published to the official npm registry"),",\nand the manifest must also match the corresponding fields of the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file.\nIn the future, developers will be able to distribute Snaps in different ways, and the manifest will\nexpand to support different publishing solutions."),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/SIPs/blob/main/SIPS/sip-9.md"},"Snaps publishing specification"),"\ndetails the requirements of both ",(0,i.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," and its relationship to ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,i.kt)("p",null,"You might need to modify some manifest fields manually.\nFor example, if you change the location of the icon SVG file, you must update\n",(0,i.kt)("inlineCode",{parentName:"p"},"source.location.npm.iconPath")," to match.\nYou can also use the ",(0,i.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/snaps/reference/cli/subcommands"},"Snaps CLI")," to update some fields for you.\nFor example, running ",(0,i.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/snaps/reference/cli/subcommands#b-build"},(0,i.kt)("inlineCode",{parentName:"a"},"yarn mm-snap build"))," or\n",(0,i.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/snaps/reference/cli/subcommands#m-manifest"},(0,i.kt)("inlineCode",{parentName:"a"},"yarn mm-snap manifest --fix"))," updates ",(0,i.kt)("inlineCode",{parentName:"p"},"source.shasum"),"."),(0,i.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,i.kt)("p",null,"The Snap configuration file, ",(0,i.kt)("inlineCode",{parentName:"p"},"snap.config.ts"),", should be placed in the project root directory.\nYou can override the default values of the ",(0,i.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/snaps/reference/cli/options"},"Snaps CLI options")," by specifying\nthem in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," object of the configuration file.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { resolve } from 'path';\nimport type { SnapConfig } from '@metamask/snaps-cli';\n\nconst config: SnapConfig = {\n  bundler: 'webpack',\n  input: resolve(__dirname, 'src/index.ts'),\n  server: {\n    port: 8080,\n  },\n  polyfills: {\n    buffer: true,\n  },\n};\n\nexport default config;\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You should not publish the configuration file to npm, since it's only used for development and\nbuilding.\nHowever, you can commit the file to GitHub to share the configuration with your team, since it\nshouldn't contain any secrets.")),(0,i.kt)("h2",{id:"bundle-file"},"Bundle file"),(0,i.kt)("p",null,"Because of the way Snaps are executed, they must be published as a single ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," file containing the\nentire source code and all dependencies.\nMoreover, the ",(0,i.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/snaps/concepts/execution-environment"},"Snaps execution environment")," has no DOM, no Node.js\nAPIs, and no filesystem access, so anything that relies on the DOM doesn't work, and any Node\nbuilt-ins must be bundled along with the Snap."),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start")," bundles your Snap for you."),(0,i.kt)("p",null,"You can also run ",(0,i.kt)("a",{parentName:"p",href:"/1089-get-started-revamp/snaps/reference/cli/subcommands#b-build"},(0,i.kt)("inlineCode",{parentName:"a"},"yarn mm-snap build"))," to bundle your\nSnap using ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," or ",(0,i.kt)("a",{parentName:"p",href:"https://browserify.org"},"Browserify"),".\nThis command finds all dependencies using your specified main entry point and outputs a bundle\nfile to your specified output path."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={description:"Learn about best practices for creating Snap installation flows.",sidebar_position:5,toc_max_heading_level:2},s="Snaps design guidelines",o={unversionedId:"concepts/design-guidelines",id:"concepts/design-guidelines",title:"Snaps design guidelines",description:"Learn about best practices for creating Snap installation flows.",source:"@site/snaps/concepts/design-guidelines.md",sourceDirName:"concepts",slug:"/concepts/design-guidelines",permalink:"/fix/am-snap-diagram-style-and-typo/snaps/concepts/design-guidelines",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/design-guidelines.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Learn about best practices for creating Snap installation flows.",sidebar_position:5,toc_max_heading_level:2},sidebar:"snapsSidebar",previous:{title:"Snaps execution environment",permalink:"/fix/am-snap-diagram-style-and-typo/snaps/concepts/execution-environment"},next:{title:"Snaps security guidelines",permalink:"/fix/am-snap-diagram-style-and-typo/snaps/concepts/security-guidelines"}},l={},p=[{value:"Why this matters",id:"why-this-matters",level:2},{value:"Guidelines at a glance",id:"guidelines-at-a-glance",level:2},{value:"Think like your users, write like a human",id:"think-like-your-users-write-like-a-human",level:2},{value:"Introduce your Snap",id:"introduce-your-snap",level:2},{value:"Embed in existing flows",id:"embed-in-existing-flows",level:2},{value:"Optimize your metadata",id:"optimize-your-metadata",level:2},{value:"Enhance your copy",id:"enhance-your-copy",level:2},{value:"Capitalization",id:"capitalization",level:3},{value:"Active voice",id:"active-voice",level:3},{value:"Design for all users",id:"design-for-all-users",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"snaps-design-guidelines"},"Snaps design guidelines"),(0,i.kt)("p",null,"This page outlines guiding principles for designers, developers, builders, and writers to create\nSnap installation flows that are accessible to all users.\nUse these guidelines when introducing your Snap within a dapp."),(0,i.kt)("h2",{id:"why-this-matters"},"Why this matters"),(0,i.kt)("p",null,"The Snap installation process contains critical info about your Snap, including what it does, how it\nenhances your application, and why it's beneficial for users.\nIt's important to provide this information on your dapp to help users understand the purpose and\nbenefits of the Snap before installing it.\nWithout this information, users may drop out during installation or install the Snap without fully\nunderstanding its purpose."),(0,i.kt)("h2",{id:"guidelines-at-a-glance"},"Guidelines at a glance"),(0,i.kt)("p",null,"Ensure your Snap metadata follows these guidelines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep your Snap's name to ",(0,i.kt)("strong",{parentName:"li"},"21 characters or fewer")," (including spaces)."),(0,i.kt)("li",{parentName:"ul"},"Use a descriptive name","\u2014",'don\'t use "Snap" in the name.'),(0,i.kt)("li",{parentName:"ul"},"Use short and simple copy."),(0,i.kt)("li",{parentName:"ul"},"Your avatar should fit in a ",(0,i.kt)("strong",{parentName:"li"},"32px circular frame, SVG format"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before")," asking for permission to install, provide users with clear and concise information about:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"What")," the Snap does and ",(0,i.kt)("em",{parentName:"li"},"how")," it meets their needs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"How")," the Snap works."),(0,i.kt)("li",{parentName:"ul"},"Any ",(0,i.kt)("em",{parentName:"li"},"security precautions")," they should know.")),(0,i.kt)("p",null,"Write in active voice and use sentence case.\nAvoid jargon","\u2014","write in plain language that can be understood by all users."),(0,i.kt)("h2",{id:"think-like-your-users-write-like-a-human"},"Think like your users, write like a human"),(0,i.kt)("p",null,"Consider whether the details that interest you as a developer are relevant to the user's experience.\nOften, content can be drastically reduced by cutting jargon and run-on sentences.\nRead your content out loud to hear what stands out in your messaging.\nIf something is hard to say, it's probably hard to read."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Be clear."),'\nWhen labeling buttons or actions, use descriptive action verbs instead of vague phrases.\nFor example, "Install" is more clear than "Complete."')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Be concise."),"\nUse short, simple words and avoid jargon.\nMake every word earn its place on the screen.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Be consistent."),"\nIdentify synonyms and eliminate them.\nEach important object and action should have a single word to represent it.\nInconsistency can blur the lines for users, creating uncertainty and confusion."))),(0,i.kt)("h2",{id:"introduce-your-snap"},"Introduce your Snap"),(0,i.kt)("p",null,"When you introduce your Snap, take this opportunity to highlight the benefits of your Snap with the\nintended user.\nIf the user doesn't understand what they can gain from your Snap, they likely won't install it."),(0,i.kt)("p",null,"Consider introducing your Snap on your dapp with a modal, tooltip, or card.\nThis introduction should be impactful, clear, and direct, and can happen before or alongside the\ninstallation prompt."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Introducing your Snap&#39;s features via a modal",src:n(43350).Z,width:"2064",height:"1408"})),(0,i.kt)("p",null,"Important details to include when introducing your Snap:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"What")," your Snap does, ",(0,i.kt)("em",{parentName:"li"},"why")," someone would use it, and ",(0,i.kt)("em",{parentName:"li"},"how")," it works."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Security precautions")," in plain language that anyone can understand."),(0,i.kt)("li",{parentName:"ul"},"Descriptions of the features that make your Snap appealing to the intended users.")),(0,i.kt)("p",null,"Use conversational language when describing your Snap.\nIf you need to use a technical term, briefly define it first.\nFor example:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Don't do this"),(0,i.kt)("th",{parentName:"tr",align:null},"Do this instead"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u274c ",(0,i.kt)("em",{parentName:"td"},"Allow the Snap to perform actions that run periodically at fixed times, dates, or intervals. This can be used to trigger time-sensitive interactions or notifications.")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,i.kt)("em",{parentName:"td"},"Let this Snap schedule and run recurring tasks or notifications."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u274c ",(0,i.kt)("em",{parentName:"td"},"Allow this Snap to display notifications regarding your ENS expiration.")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,i.kt)("em",{parentName:"td"},"Let this Snap notify you when your Ethereum Name Service is about to expire."))))),(0,i.kt)("h2",{id:"embed-in-existing-flows"},"Embed in existing flows"),(0,i.kt)("p",null,"Introduce your Snap as a natural extension of existing elements on your screen, and suggest\ninstallation when the time is right.\nThis can be a make or break moment for your Snap, so put yourself in the shoes of the intended user."),(0,i.kt)("p",null,"Don't ask the user to install your Snap before they do anything in the dapp, as they will probably decline.\nInstead, ",(0,i.kt)("strong",{parentName:"p"},"wait to prompt installation until a point when the Snap is required"),"."),(0,i.kt)("p",null,"In the following example, a key management Snap is suggested when the user is prompted to pick networks:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Installation and connection to your Snap embedded in existing flows",src:n(73210).Z,width:"3840",height:"2160"})),(0,i.kt)("h2",{id:"optimize-your-metadata"},"Optimize your metadata"),(0,i.kt)("p",null,"Your Snap's avatar and name are among the first things a user sees when deciding whether to install\nyour Snap.\nThese are also a key part of your Snap's identity, so it's worth spending time on this step."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Avatar")),(0,i.kt)("p",null,"Your Snap's avatar should fit in a ",(0,i.kt)("strong",{parentName:"p"},"32px circular frame in SVG format"),".\nAvoid using images with small details, as they won't be impactful in the allotted space.\nUse something bold, simple, and easily understood."),(0,i.kt)("p",null,"The avatar must be a valid SVG.\nIt should be clearly visible on both light and dark backgrounds.\nIt should also be square, or else it will be stretched or cropped."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://www.svgviewer.dev/"},"SVGviewer.dev")," to validate and optimize your SVG."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Name")),(0,i.kt)("p",null,"Your Snap's name should be short and easy to remember.\nIt should be ",(0,i.kt)("strong",{parentName:"p"},"21 characters maximum")," (including spaces) so it is easy to read and fits comfortably\non small screens."),(0,i.kt)("p",null,'Use a descriptive name to help users understand how they benefit from installing your Snap, and\nincrease the likelihood that they will install and use it.\nDon\'t use the word "Snap" in your name\u2014your name should be specific and memorable, differentiating\nyour Snap from others.\nFor example:'),(0,i.kt)("p",null,(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Don't do this"),(0,i.kt)("th",{parentName:"tr",align:null},"Do this instead"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u274c ",(0,i.kt)("em",{parentName:"td"},"Solana Snap")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,i.kt)("em",{parentName:"td"},"Solana Manager"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u274c ",(0,i.kt)("em",{parentName:"td"},"Snap for Filecoin")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,i.kt)("em",{parentName:"td"},"Filecoin Wallet"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u274c ",(0,i.kt)("em",{parentName:"td"},"Best manager for Bitcoin")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,i.kt)("em",{parentName:"td"},"Bitcoin Helper")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How metadata is displayed")),(0,i.kt)("p",null,"The following images demonstrate how your Snap's avatar and name are displayed during installation,\ntransaction insights, and custom dialogs:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"How your Snap&#39;s avatar and name are displayed during installation",src:n(55672).Z,width:"3840",height:"2160"}),"\n",(0,i.kt)("img",{alt:"How your Snap&#39;s name is displayed during transaction insights",src:n(38689).Z,width:"3840",height:"2160"}),"\n",(0,i.kt)("img",{alt:"How your Snap&#39;s avatar and name are displayed during a custom dialog screen",src:n(67788).Z,width:"3840",height:"2160"})),(0,i.kt)("h2",{id:"enhance-your-copy"},"Enhance your copy"),(0,i.kt)("p",null,"At MetaMask, we use an in-depth style guide to inform our copywriting decisions.\nHere are some ways to enhance your own copy so it feels more at home in the MetaMask ecosystem."),(0,i.kt)("h3",{id:"capitalization"},"Capitalization"),(0,i.kt)("p",null,"With few exceptions, use sentence-style capitalization.\nNot only is sentence case more casual and conversational, but it's also easier to scan than title case."),(0,i.kt)("h3",{id:"active-voice"},"Active voice"),(0,i.kt)("p",null,"Write your copy in active voice.\nThere might be certain situations where passive voice is the better option, but most cases call for\nactive voice.\nFor example:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Don't do this"),(0,i.kt)("th",{parentName:"tr",align:null},"Do this instead"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u274c ",(0,i.kt)("em",{parentName:"td"},"The problem is being investigated")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,i.kt)("em",{parentName:"td"},"We're investigating the problem"))))),(0,i.kt)("h2",{id:"design-for-all-users"},"Design for all users"),(0,i.kt)("p",null,"Use accessible design to enable people of all abilities and in all locations to benefit from your Snap.\nImportant accessibility tips include the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/tips/designing/#provide-sufficient-contrast-between-foreground-and-background"},"Provide sufficient color contrast."),"\nEnsure foreground text color has sufficient contrast with background colors.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/tips/designing/#ensure-that-interactive-elements-are-easy-to-identify"},"Make interactive elements easy to identify."),"\nProvide distinct and consistent styles for interactive elements, such as links and buttons.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/tips/writing/#write-meaningful-text-alternatives-for-images"},"Write meaningful image alternative text."),"\nScreen reader users rely on image alternative text, so ensure that it clearly describes the\ninformation or function of the image.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/tips/writing/#provide-clear-instructions"},"Provide clear instructions."),"\nEnsure that instructions, error messages, and other copy are easy to understand even for\nnon-native English speakers."))),(0,i.kt)("p",null,"For more important tips, refer to W3C's guidelines on\n",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/tips/designing/"},"Designing for Web Accessibility")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/tips/writing/"},"Writing for Web Accessibility"),"."))}c.isMDXComponent=!0},67788:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dialog-f94d4327474a7e0ef860f2c6cc3eb888.png"},38689:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/insights-e9e2595645f03fdf8b8807adbde41ec1.png"},43350:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-modal-ba7d74a87c481c5e6f1da2b1f7cce9f2.png"},55672:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-e89d0a7d5424eb0f0b4854949401a78b.png"},73210:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/picker-86e6af6c06c04669182e21a94c87488a.png"}}]);
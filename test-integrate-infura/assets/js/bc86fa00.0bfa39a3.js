"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[64891],{63694:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=t(74848),i=t(28453);const o={description:"Failover protection for API requests."},s="Failover protection",a={id:"reference/arbitrum/concepts/failover-protection",title:"Failover protection",description:"Failover protection for API requests.",source:"@site/services/reference/arbitrum/concepts/failover-protection.md",sourceDirName:"reference/arbitrum/concepts",slug:"/reference/arbitrum/concepts/failover-protection",permalink:"/test-integrate-infura/services/reference/arbitrum/concepts/failover-protection",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/arbitrum/concepts/failover-protection.md",tags:[],version:"current",frontMatter:{description:"Failover protection for API requests."},sidebar:"servicesSidebar",previous:{title:"Concepts",permalink:"/test-integrate-infura/services/networks/arbitrum/concepts"},next:{title:"How to",permalink:"/test-integrate-infura/services/reference/arbitrum/how-to/"}},c={},u=[{value:"Partners and privacy policies",id:"partners-and-privacy-policies",level:2}];function l(e){const r={a:"a",admonition:"admonition",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"failover-protection",children:"Failover protection"}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"Arbitrum failover support is available on Mainnet only."})}),"\n",(0,n.jsx)(r.p,{children:"Failover protection is available on the Arbitrum Mainnet network for customers on the\nGrowth or Custom plans. This feature ensures API requests are fulfilled even if Infura experiences\na service issue or outage. This is achieved by routing requests to a select partner."}),"\n",(0,n.jsxs)(r.p,{children:["Failover protection is enabled on a per-request basis by adding the failover header to your API\nrequest (see ",(0,n.jsx)(r.a,{href:"/test-integrate-infura/services/reference/arbitrum/how-to/failover-protection-imp-arbitrum",children:"Enable API request forwarding"}),"). This gives you control over\nwhich requests you'd like fulfilled by Infura's partner if failover protection should be needed."]}),"\n",(0,n.jsx)(r.h2,{id:"partners-and-privacy-policies",children:"Partners and privacy policies"}),"\n",(0,n.jsx)(r.p,{children:"No personal information is sent as part of partner requests, only information necessary to fulfill\nyour API request. This means that Infura's partner service provider can service your request, but not\nstore the content of your request."}),"\n",(0,n.jsx)(r.p,{children:"For any parameters required in an RPC request, these could be the type that describe the method,\naddresses, gas, and session."}),"\n",(0,n.jsxs)(r.p,{children:["Liquify (",(0,n.jsx)(r.a,{href:"https://www.liquify.com/Liquify_RPC_PP.pdf",children:"Privacy Policy"}),") is Infura's failover-protection partner and\ncurrently offer failover support for all Infura's Arbitrum methods."]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var n=t(96540);const i={},o=n.createContext(i);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);
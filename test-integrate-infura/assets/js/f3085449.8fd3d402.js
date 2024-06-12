"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[22160],{89887:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(74848),o=n(28453);const s={description:"Failover protection for API requests."},i="Failover protection",c={id:"reference/polygon-pos/concepts/failover-protection",title:"Failover protection",description:"Failover protection for API requests.",source:"@site/services/reference/polygon-pos/concepts/failover-protection.md",sourceDirName:"reference/polygon-pos/concepts",slug:"/reference/polygon-pos/concepts/failover-protection",permalink:"/test-integrate-infura/services/reference/polygon-pos/concepts/failover-protection",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/polygon-pos/concepts/failover-protection.md",tags:[],version:"current",frontMatter:{description:"Failover protection for API requests."},sidebar:"servicesSidebar",previous:{title:"Concepts",permalink:"/test-integrate-infura/services/networks/polygon-pos/concepts"},next:{title:"How to",permalink:"/test-integrate-infura/services/reference/polygon-pos/how-to/"}},a={},l=[{value:"Partners and privacy policies",id:"partners-and-privacy-policies",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"failover-protection",children:"Failover protection"}),"\n",(0,t.jsx)(r.p,{children:"Failover protection is available on the Polygon network for customers on the\nGrowth or Custom plans. This feature ensures API requests are fulfilled even if Infura experiences\na service issue or outage. This is achieved by routing requests to a select partner."}),"\n",(0,t.jsxs)(r.p,{children:["Failover protection is enabled on a per-request basis by adding the failover header to your API\nrequest (see ",(0,t.jsx)(r.a,{href:"/test-integrate-infura/services/reference/polygon-pos/how-to/failover-protection-imp-polygon",children:"Enable API request forwarding"}),"). This gives you control over\nwhich requests you'd like fulfilled by Infura's partner if failover protection should be needed."]}),"\n",(0,t.jsx)(r.h2,{id:"partners-and-privacy-policies",children:"Partners and privacy policies"}),"\n",(0,t.jsx)(r.p,{children:"No personal information is sent as part of partner requests, only information necessary to fulfill\nyour API request. This means that Infura's partner service provider can service your request, but not\nstore the content of your request."}),"\n",(0,t.jsx)(r.p,{children:"For any parameters required in an RPC request, these could be the type that describe the method,\naddresses, gas, and session."}),"\n",(0,t.jsxs)(r.p,{children:["Rivet.Cloud (",(0,t.jsx)(r.a,{href:"https://rivet.cloud/terms",children:"Terms of Service"}),", ",(0,t.jsx)(r.a,{href:"https://rivet.cloud/privacy-policy",children:"Privacy Policy"}),") is Infura's failover-protection partner. While Rivet.Cloud supports most Infura methods,\nit does not yet support the following methods:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"eth_accounts"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"eth_coinbase"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"eth_getRootHash"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"eth_getUncleByBlockNumberAndIndex"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"eth_getWork"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"eth_hashrate"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"eth_mining"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"eth_sendTransaction"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"eth_sign"})}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(96540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);
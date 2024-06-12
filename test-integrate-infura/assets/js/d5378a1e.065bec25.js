"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[51247],{62817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var n=r(74848),s=r(28453);const d={description:"Mantle debug methods."},c="Debug methods",i={id:"reference/mantle/json-rpc-methods/debug/index",title:"Debug methods",description:"Mantle debug methods.",source:"@site/services/reference/mantle/json-rpc-methods/debug/index.md",sourceDirName:"reference/mantle/json-rpc-methods/debug",slug:"/reference/mantle/json-rpc-methods/debug/",permalink:"/test-integrate-infura/services/reference/mantle/json-rpc-methods/debug/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/mantle/json-rpc-methods/debug/index.md",tags:[],version:"current",frontMatter:{description:"Mantle debug methods."},sidebar:"servicesSidebar",previous:{title:"JSON-RPC methods",permalink:"/test-integrate-infura/services/reference/mantle/json-rpc-methods/"},next:{title:"debug_storageRangeAt",permalink:"/test-integrate-infura/services/reference/mantle/json-rpc-methods/debug/debug_storagerangeat"}},l={},h=[{value:"Debug tracing types",id:"debug-tracing-types",level:2},{value:"<code>callTracer</code>",id:"calltracer",level:3},{value:"<code>prestateTracer</code>",id:"prestatetracer",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"debug-methods",children:"Debug methods"}),"\n",(0,n.jsx)(t.p,{children:"The debug API methods allow you to inspect and debug the network. Infura supports the following debug\nmethods on the Mantle network:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/reference/mantle/json-rpc-methods/debug/debug_storagerangeat",children:(0,n.jsx)(t.code,{children:"debug_storageRangeAt"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/reference/mantle/json-rpc-methods/debug/debug_traceblock",children:(0,n.jsx)(t.code,{children:"debug_traceBlock"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/reference/mantle/json-rpc-methods/debug/debug_traceblockbyhash",children:(0,n.jsx)(t.code,{children:"debug_traceBlockByHash"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/reference/mantle/json-rpc-methods/debug/debug_traceblockbynumber",children:(0,n.jsx)(t.code,{children:"debug_traceBlockByNumber"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/reference/mantle/json-rpc-methods/debug/debug_tracetransaction",children:(0,n.jsx)(t.code,{children:"debug_traceTransaction"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/reference/mantle/json-rpc-methods/debug/debug_tracecall",children:(0,n.jsx)(t.code,{children:"debug_traceCall"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/reference/mantle/json-rpc-methods/debug/debug_tracetransaction",children:(0,n.jsx)(t.code,{children:"debug_traceTransaction"})})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"debug-tracing-types",children:"Debug tracing types"}),"\n",(0,n.jsxs)(t.p,{children:["The debug methods support the ",(0,n.jsx)(t.code,{children:"callTracer"})," and ",(0,n.jsx)(t.code,{children:"prestateTracer"})," tracing types, which return different\nresults when specified in the supported debug methods."]}),"\n",(0,n.jsx)(t.h3,{id:"calltracer",children:(0,n.jsx)(t.code,{children:"callTracer"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"callTracer"})," tracing type tracks all the call frames executed during a transaction, including the\ninitial call. It returns a nested list of call frames, resembling how the EVM works. They form a tree\nwith the top-level call at root and sub-calls as children of the higher levels."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"callTracer"})," type returns an object with the following results:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"type"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The type of call."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"from"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The address the transaction is sent from."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"to"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The address the transaction is directed to."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"value"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The amount transferred in the call (hex-encoded)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"gas"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The amount of gas provided for the call (hex-encoded)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"gasUsed"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The amount of gas used by the call (hex-encoded)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"input"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The call data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"output"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The return data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"error"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"If an error occurred during the call, this field will contain the error message."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"revertReason"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"If the contract execution was reverted, this field will contain the reason for the revert (if provided by Solidity)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"calls"})}),(0,n.jsx)(t.td,{children:"array"}),(0,n.jsx)(t.td,{children:"Sub-calls made by the contract during the execution of the transaction."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"prestatetracer",children:(0,n.jsx)(t.code,{children:"prestateTracer"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"prestateTracer"})," tracing type records and tracks every change made to the state during the execution\nof transactions. It generates an object that contains keys representing the addresses of the accounts\ninvolved in the transactions. The corresponding values are objects that include specific fields related\nto the state changes made during the transaction:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"balance"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The account balance."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"nonce"})}),(0,n.jsx)(t.td,{children:"uint64"}),(0,n.jsx)(t.td,{children:"The nonce value for the transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"code"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The hex-encoded bytecode."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"storage"})}),(0,n.jsx)(t.td,{children:"map"}),(0,n.jsx)(t.td,{children:"The storage slots of the contract."})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(96540);const s={},d=n.createContext(s);function c(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);
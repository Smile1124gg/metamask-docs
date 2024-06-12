"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[14751],{65235:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>a});var s=n(74848),r=n(28453);const a=[];function i(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Creates an ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-2930",children:"EIP-2930"})," access list that you can include in a ",(0,s.jsx)(t.a,{href:"../ethereum/concepts/transaction-types.md",children:"transaction"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Use this method to optimize your smart contract interactions. Access lists are a part of Ethereum's EIP-2930, which aims to improve the network's scalability and reduce gas costs by specifying an explicit list of addresses and storage keys that a transaction intends to access."}),"\n",(0,s.jsx)(t.admonition,{title:"Optimizing Ethereum Transactions",type:"tip",children:(0,s.jsxs)(t.p,{children:["See the Infura article ",(0,s.jsx)(t.a,{href:"https://blog.infura.io/post/optimizing-ethereum-transactions-with-eth_createaccesslist",children:"Optimizing Ethereum Transactions with eth_createAccessList"})," that describes how ",(0,s.jsx)(t.code,{children:"eth_createAccessList"})," can help optimize gas costs, reduce out-of-gas errors, and verify clients for infrastructure access."]})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},35923:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>a});var s=n(74848),r=n(28453);const a=[];function i(e){const t={a:"a",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,s.jsx)(t.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},1241:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>a});var s=n(74848),r=n(28453);const a=[];function i(e){const t={a:"a",code:"code",em:"em",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Transaction call object"}),": ",(0,s.jsx)(t.em,{children:"[Required]"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"from"}),": ",(0,s.jsx)(t.em,{children:"[optional]"})," 20 bytes. The address of the sender."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"to"}),": 20 bytes. Address the transaction is directed to."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"gas"}),": ",(0,s.jsx)(t.em,{children:"[optional]"})," Hexadecimal value of the gas provided for the transaction execution."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"gasPrice"}),": ",(0,s.jsx)(t.em,{children:"[optional]"})," Hexadecimal value gas price, in Wei, provided by the sender. The default is ",(0,s.jsx)(t.code,{children:"0"}),". Used only in non-EIP-1559 transactions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"maxPriorityFeePerGas"}),": ",(0,s.jsx)(t.em,{children:"[optional]"})," Maximum fee, in Wei, the sender is willing to pay per gas above the base fee. See ",(0,s.jsx)(t.a,{href:"../ethereum/concepts/transaction-types.md#eip-1559-transactions",children:"EIP-1559 transactions"}),". If used, must specify ",(0,s.jsx)(t.code,{children:"maxFeePerGas"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"maxFeePerGas"}),": ",(0,s.jsx)(t.em,{children:"[optional]"})," Maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas. See ",(0,s.jsx)(t.a,{href:"../ethereum/concepts/transaction-types.md#eip-1559-transactions",children:"EIP-1559 transactions"}),". If used, must specify ",(0,s.jsx)(t.code,{children:"maxPriorityFeePerGas"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"value"}),": ",(0,s.jsx)(t.em,{children:"[optional]"})," Hexadecimal of the value transferred, in Wei."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"data"}),": ",(0,s.jsx)(t.em,{children:"[optional]"})," Hash of the method signature and encoded parameters. See ",(0,s.jsx)(t.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html",children:"Ethereum contract ABI specification"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"block number"})," or ",(0,s.jsx)(t.code,{children:"block hash"}),": ",(0,s.jsx)(t.em,{children:"[required]"})," A string representing a block number, block hash, or one of the string tags ",(0,s.jsx)(t.code,{children:"latest"}),", ",(0,s.jsx)(t.code,{children:"earliest"}),", ",(0,s.jsx)(t.code,{children:"pending"}),", ",(0,s.jsx)(t.code,{children:"safe"}),", or ",(0,s.jsx)(t.code,{children:"finalized"}),". See the ",(0,s.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n"]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},13364:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>c});var s=n(74848),r=n(28453),a=n(11470),i=n(19365);const c=[];function o(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsx)(a.A,{children:(0,s.jsx)(i.A,{value:"JSON",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "accessList": [\n    {\n      "address": "0xa02457e5dfd32bda5fc7e1f1b008aa5979568150",\n      "storageKeys": [\n        "0x0000000000000000000000000000000000000000000000000000000000000081",\n      ]\n    }\n  ]\n  "gasUsed": "0x125f8"\n}\n'})})})})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28420:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>a});var s=n(74848),r=n(28453);const a=[];function i(e){const t={code:"code",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Access list object with the following fields:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"accessList"}),": A list of objects with the following fields:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"address"}),": Addresses to be accessed by the transaction."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"storageKeys"}),": Storage keys to be accessed by the transaction."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"gasUsed"}),": A hexadecimal string representing the approximate gas cost for the transaction if the access list is included."]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},36808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>f,default:()=>g,frontMatter:()=>m,metadata:()=>x,toc:()=>b});var s=n(74848),r=n(28453),a=n(11470),i=n(19365),c=n(65235),o=n(1241),l=n(28420),d=n(35923);function u(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"cURL",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl https://arbitrum-mainnet.infura.io/v3/YOUR-API-KEY \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    -d \'{"method":"eth_createAccessList","params":[{"from": "0xaeA8F8f781326bfE6A7683C2BD48Dd6AA4d3Ba63", "data": "0x608060806080608155"}, "pending"],"id":1,"jsonrpc":"2.0"}\'\n'})})}),(0,s.jsx)(i.A,{value:"WSS",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'wscat -c wss:///arbitrum-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"method":"eth_createAccessList","params":[{"from": "0xaeA8F8f781326bfE6A7683C2BD48Dd6AA4d3Ba63", "data": "0x608060806080608155"}, "pending"],"id":1,"jsonrpc":"2.0"}\'\n'})})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}var p=n(13364);const m={title:"eth_createAccessList"},f=void 0,x={id:"reference/arbitrum/json-rpc-methods/eth_createaccesslist",title:"eth_createAccessList",description:"Parameters",source:"@site/services/reference/arbitrum/json-rpc-methods/eth_createaccesslist.mdx",sourceDirName:"reference/arbitrum/json-rpc-methods",slug:"/reference/arbitrum/json-rpc-methods/eth_createaccesslist",permalink:"/test-integrate-infura/services/reference/arbitrum/json-rpc-methods/eth_createaccesslist",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/arbitrum/json-rpc-methods/eth_createaccesslist.mdx",tags:[],version:"current",frontMatter:{title:"eth_createAccessList"},sidebar:"servicesSidebar",previous:{title:"eth_coinbase",permalink:"/test-integrate-infura/services/reference/arbitrum/json-rpc-methods/eth_coinbase"},next:{title:"eth_estimateGas",permalink:"/test-integrate-infura/services/reference/arbitrum/json-rpc-methods/eth_estimategas"}},j={},b=[...c.RM,{value:"Parameters",id:"parameters",level:2},...o.RM,{value:"Returns",id:"returns",level:2},...l.RM,{value:"Example",id:"example",level:2},...d.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...p.RM];function v(e){const t={h2:"h2",h3:"h3",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,s.jsx)(l.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n","\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(t.h3,{id:"request",children:"Request"}),"\n","\n",(0,s.jsx)(h,{}),"\n",(0,s.jsx)(t.h3,{id:"response",children:"Response"}),"\n","\n",(0,s.jsx)(p.Ay,{})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(18215);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>A});var s=n(96540),r=n(18215),a=n(23104),i=n(56347),c=n(205),o=n(57485),l=n(31682),d=n(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[l,u]=m({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),j=(()=>{const e=l??f;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),r=c[n].value;r!==s&&(l(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function A(e){const t=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
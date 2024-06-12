"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[91941],{1613:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>a});var t=r(74848),s=r(28453);const a=[];function o(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Executes a new message call immediately without creating a transaction on the blockchain."}),"\n",(0,t.jsx)(n.admonition,{title:"Gas parameter is capped",type:"warning",children:(0,t.jsxs)(n.p,{children:["To prevent API abuse, the ",(0,t.jsx)(n.code,{children:"gas"})," parameter in ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/reference/ethereum/json-rpc-methods/eth_estimategas",children:(0,t.jsx)(n.code,{children:"eth_estimateGas"})})," and\nthis ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/reference/ethereum/json-rpc-methods/eth_call",children:(0,t.jsx)(n.code,{children:"eth_call"})})," method is capped at 10x (1000%) the current block gas limit."]})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},73297:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>a});var t=r(74848),s=r(28453);const a=[];function o(e){const n={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,t.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},33551:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>a});var t=r(74848),s=r(28453);const a=[];function o(e){const n={a:"a",code:"code",em:"em",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"from"}),": 20 bytes [",(0,t.jsx)(n.em,{children:"Required"}),"] Address the transaction is sent from."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"to"}),": 20 bytes - Address the transaction is directed to."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gas"}),": Hexadecimal value of the gas provided for the transaction execution. ",(0,t.jsx)(n.code,{children:"eth_call"})," consumes zero gas, but this parameter may be needed by some executions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gasPrice"}),": Hexadecimal value of the ",(0,t.jsx)(n.code,{children:"gasPrice"})," used for each paid gas."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"maxPriorityFeePerGas"}),": Maximum fee, in Wei, the sender is willing to pay per gas above the base fee. See ",(0,t.jsx)(n.a,{href:"../ethereum/concepts/transaction-types.md#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"maxFeePerGas"}),": Maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas. See ",(0,t.jsx)(n.a,{href:"../ethereum/concepts/transaction-types.md#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"value"}),": Hexadecimal of the value sent with this transaction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data"}),": Hash of the method signature and encoded parameters. See ",(0,t.jsx)(n.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html",children:"Ethereum contract ABI specification"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"block parameter"}),": [",(0,t.jsx)(n.em,{children:"Required"}),"] A hexadecimal block number, or one of the string tags ",(0,t.jsx)(n.code,{children:"latest"}),", ",(0,t.jsx)(n.code,{children:"earliest"}),", ",(0,t.jsx)(n.code,{children:"pending"}),", ",(0,t.jsx)(n.code,{children:"safe"}),", or ",(0,t.jsx)(n.code,{children:"finalized"}),". See the ",(0,t.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},2666:(e,n,r)=>{r.d(n,{Ay:()=>l,RM:()=>c});var t=r(74848),s=r(28453),a=r(11470),o=r(19365);const c=[];function i(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsx)(a.A,{children:(0,t.jsx)(o.A,{value:"JSON",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x"\n}\n'})})})})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},72890:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>a});var t=r(74848),s=r(28453);const a=[];function o(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The returned value of the executed contract."}),"\n",(0,t.jsxs)(n.p,{children:["If this call causes the EVM to execute a ",(0,t.jsx)(n.code,{children:"REVERT"})," operation, an error response of the following form is returned, with\nthe revert reason pre-decoded as a string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "error": {\n    "code": 3,\n    "message": "execution reverted: Dai/insufficient-balance",\n    "data": "0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000184461692f696e73756666696369656e742d62616c616e63650000000000000000"\n  }\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},17168:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>f,default:()=>g,frontMatter:()=>m,metadata:()=>x,toc:()=>j});var t=r(74848),s=r(28453),a=r(11470),o=r(19365),c=r(1613),i=r(33551),l=r(72890),d=r(73297);function u(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://polygon-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_call","params": [{"from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","gas": "0x76c0","gasPrice": "0x9184e72a000","value": "0x9184e72a","data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}, "latest"],"id":1}\'\n'})})}),(0,t.jsx)(o.A,{value:"WSS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://polygon-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_call","params": [{"from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","gas": "0x76c0","gasPrice": "0x9184e72a000","value": "0x9184e72a","data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}, "latest"],"id":1}\'\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}var p=r(2666);const m={title:"eth_call"},f=void 0,x={id:"reference/polygon-pos/json-rpc-methods/eth_call",title:"eth_call",description:"This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should",source:"@site/services/reference/polygon-pos/json-rpc-methods/eth_call.mdx",sourceDirName:"reference/polygon-pos/json-rpc-methods",slug:"/reference/polygon-pos/json-rpc-methods/eth_call",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/eth_call",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/polygon-pos/json-rpc-methods/eth_call.mdx",tags:[],version:"current",frontMatter:{title:"eth_call"},sidebar:"servicesSidebar",previous:{title:"eth_blockNumber",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/eth_blocknumber"},next:{title:"eth_chainId",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/eth_chainid"}},b={},j=[...c.RM,{value:"Parameters",id:"parameters",level:2},...i.RM,{value:"Returns",id:"returns",level:2},...l.RM,{value:"Example",id:"example",level:2},...d.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...p.RM];function v(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsxs)(n.admonition,{title:"For Growth and Custom service plans",type:"info",children:[(0,t.jsxs)(n.p,{children:["This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should\nexperience a service issue or outage. See ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/reference/polygon-pos/concepts/failover-protection",children:"Failover protection"}),"\nand ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/reference/polygon-pos/how-to/failover-protection-imp-polygon",children:"Enable API request forwarding"}),"\nfor complete details."]}),(0,t.jsx)(n.p,{children:"If you would like failover protection but don't qualify under your current plan, then either\nself-upgrade to the Growth plan or contact a sales representative to upgrade to a Custom plan."})]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,t.jsx)(d.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,t.jsx)(p.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var t=r(18215);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,o),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),s=r(18215),a=r(23104),o=r(56347),c=r(205),i=r(57485),l=r(31682),d=r(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[l,u]=m({queryString:r,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),b=(()=>{const e=l??f;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),s=c[r].value;s!==t&&(l(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(96540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
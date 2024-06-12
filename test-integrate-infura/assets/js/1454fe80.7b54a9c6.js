"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[33504],{72471:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(74848),o=r(28453);const s=[];function a(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)(n.p,{children:"Returns the account and storage values, including the Merkle proof, of the specified account."})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},63839:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(74848),o=r(28453);const s=[];function a(e){const n={a:"a",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,t.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},18941:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(74848),o=r(28453);const s=[];function a(e){const n={a:"a",code:"code",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"address"}),": A string representing the address (20 bytes) to check for balance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"storageKeys"}),": An array of 32-byte storage keys to be proofed and included."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blockParameter"}),": A hexadecimal block number, or one of the string tags ",(0,t.jsx)(n.code,{children:"latest"}),", ",(0,t.jsx)(n.code,{children:"earliest"}),",\n",(0,t.jsx)(n.code,{children:"pending"}),", ",(0,t.jsx)(n.code,{children:"safe"}),", or ",(0,t.jsx)(n.code,{children:"finalized"}),". See the ",(0,t.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},27e3:(e,n,r)=>{r.d(n,{Ay:()=>i,RM:()=>c});var t=r(74848),o=r(28453),s=r(11470),a=r(19365);const c=[];function l(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsx)(s.A,{children:(0,t.jsx)(a.A,{value:"JSON",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "result": {\n    "accountProof": [\n      "0xf90211a...0701bc80",\n      "0xf90211a...0d832380",\n      "0xf90211a...5fb20c80",\n      "0xf90211a...0675b80",\n      "0xf90151a0...ca08080"\n    ],\n    "address" : "0x7f0d15c7faae65896648c8273b6d7e43f58fa842",\n    "balance" : "0x0",\n    "codeHash" : "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",\n    "nonce" : "0x0",\n    "storageHash" : "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n    "storageProof" : [\n        {\n          "key" : "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n          "proof" : [],\n          "value" : "0x0"\n        }\n    ]\n  }\n}\n'})})})})}function i(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},44976:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(74848),o=r(28453);const s=[];function a(e){const n={code:"code",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"balance"}),": Hexadecimal of the current balance in wei."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"codeHash"}),": The 32-byte hash of the code of the account."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"nonce"}),": The nonce of the account."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"storageHash"}),": 32 bytes. The SHA3 of the StorageRoot. All storage will deliver a Merkle proof starting with this ",(0,t.jsx)(n.code,{children:"rootHash"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"accountProof"}),": An array of RLP-serialized MerkleTree-Nodes, starting with the stateRoot-Node, following the path of the SHA3 (address) as key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"storageProof"}),": An array of storage-entries as requested. Each entry is an object with these properties:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"key"}),": The requested storage key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"value"}),": The storage value."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"proof"}),": An array of RLP-serialized MerkleTree-Nodes, starting with the storageHash-Node, following the path of the SHA3 (key) as path."]}),"\n"]}),"\n"]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},38498:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>x,default:()=>v,frontMatter:()=>f,metadata:()=>m,toc:()=>j});var t=r(74848),o=r(28453),s=r(11470),a=r(19365),c=r(72471),l=r(18941),i=r(44976),u=r(63839);function d(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(s.A,{children:[(0,t.jsx)(a.A,{value:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://polygon-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc": "2.0","method": "eth_getProof","id": 1,"params": ["0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842", ["0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"], "latest"]}\'\n'})})}),(0,t.jsx)(a.A,{value:"WSS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://polygon-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_getProof","params": ["0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842", ["0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"], "latest"],"id":1}\'\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}var p=r(27e3);const f={title:"eth_getProof"},x=void 0,m={id:"reference/polygon-pos/json-rpc-methods/eth_getproof",title:"eth_getProof",description:"This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should",source:"@site/services/reference/polygon-pos/json-rpc-methods/eth_getproof.mdx",sourceDirName:"reference/polygon-pos/json-rpc-methods",slug:"/reference/polygon-pos/json-rpc-methods/eth_getproof",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/eth_getproof",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/polygon-pos/json-rpc-methods/eth_getproof.mdx",tags:[],version:"current",frontMatter:{title:"eth_getProof"},sidebar:"servicesSidebar",previous:{title:"eth_getLogs",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/eth_getlogs"},next:{title:"eth_getRootHash",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/eth_getroothash"}},b={},j=[...c.RM,{value:"Parameters",id:"parameters",level:2},...l.RM,{value:"Returns",id:"returns",level:2},...i.RM,{value:"Example",id:"example",level:2},...u.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...p.RM];function g(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsxs)(n.admonition,{title:"For Growth and Custom service plans",type:"info",children:[(0,t.jsxs)(n.p,{children:["This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should\nexperience a service issue or outage. See ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/reference/polygon-pos/concepts/failover-protection",children:"Failover protection"}),"\nand ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/reference/polygon-pos/how-to/failover-protection-imp-polygon",children:"Enable API request forwarding"}),"\nfor complete details."]}),(0,t.jsx)(n.p,{children:"If you would like failover protection but don't qualify under your current plan, then either\nself-upgrade to the Growth plan or contact a sales representative to upgrade to a Custom plan."})]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,t.jsx)(u.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,t.jsx)(p.Ay,{})]})}function v(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(18215);const o={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,a),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),o=r(18215),s=r(23104),a=r(56347),c=r(205),l=r(57485),i=r(31682),u=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const o=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,s=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[i,d]=f({queryString:r,groupId:o}),[x,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,u.Dv)(r);return[o,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),b=(()=>{const e=i??x;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),o=c[r].value;o!==t&&(i(n),a(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
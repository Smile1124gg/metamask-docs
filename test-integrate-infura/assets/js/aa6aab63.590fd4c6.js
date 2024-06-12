"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[73706],{83997:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>c});var t=a(74848),r=a(28453);const c=[];function s(e){const n={p:"p",...(0,r.R)(),...e.components};return(0,t.jsx)(n.p,{children:"Returns information about a block whose hash is in the request."})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},15489:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>c});var t=a(74848),r=a(28453);const c=[];function s(e){const n={a:"a",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,t.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},9343:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>c});var t=a(74848),r=a(28453);const c=[];function s(e){const n={code:"code",em:"em",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hash"}),": (string) [",(0,t.jsx)(n.em,{children:"Required"}),"] A string representing the hash (32 bytes) of a block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"transaction details flag"}),": (boolean) [",(0,t.jsx)(n.em,{children:"Required"}),"] If set to ",(0,t.jsx)(n.code,{children:"true"}),", returns the full transaction objects, if ",(0,t.jsx)(n.code,{children:"false"})," returns only the hashes of the transactions."]}),"\n"]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},83514:(e,n,a)=>{a.d(n,{Ay:()=>i,RM:()=>o});var t=a(74848),r=a(28453),c=a(11470),s=a(19365);const o=[];function l(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsx)(c.A,{children:(0,t.jsx)(s.A,{value:"JSON",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "difficulty": "0xbfabcdbd93dda",\n    "extraData": "0x737061726b706f6f6c2d636e2d6e6f64652d3132",\n    "gasLimit": "0x79f39e",\n    "gasUsed": "0x79ccd3",\n    "hash": "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",\n    "logsBloom": "0x4848112002a2020aaa0812180045840210020005281600c80104264300080008000491220144461026015300100000128005018401002090a824a4150015410020140400d808440106689b29d0280b1005200007480ca950b15b010908814e01911000054202a020b05880b914642a0000300003010044044082075290283516be82504082003008c4d8d14462a8800c2990c88002a030140180036c220205201860402001014040180002006860810ec0a1100a14144148408118608200060461821802c081000042d0810104a8004510020211c088200420822a082040e10104c00d010064004c122692020c408a1aa2348020445403814002c800888208b1",\n    "miner": "0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c",\n    "mixHash": "0x3d1fdd16f15aeab72e7db1013b9f034ee33641d92f71c0736beab4e67d34c7a7",\n    "nonce": "0x4db7a1c01d8a8072",\n    "number": "0x5bad55",\n    "parentHash": "0x61a8ad530a8a43e3583f8ec163f773ad370329b2375d66433eb82f005e1d6202",\n    "receiptsRoot": "0x5eced534b3d84d3d732ddbc714f5fd51d98a941b28182b6efe6df3a0fe90004b",\n    "sha3Uncles": "0x8a562e7634774d3e3a36698ac4915e37fc84a2cd0044cb84fa5d80263d2af4f6",\n    "size": "0x41c7",\n    "stateRoot": "0xf5208fffa2ba5a3f3a2f64ebd5ca3d098978bedd75f335f56b705d8715ee2305",\n    "timestamp": "0x5b541449",\n    "totalDifficulty": "0x12ac11391a2f3872fcd",\n    "transactions": [\n      "0x8784d99762bccd03b2086eabccee0d77f14d05463281e121a62abfebcf0d2d5f",\n      "0x311be6a9b58748717ac0f70eb801d29973661aaf1365960d159e4ec4f4aa2d7f",\n      "0xe42b0256058b7cad8a14b136a0364acda0b4c36f5b02dea7e69bfd82cef252a2",\n      "0x4eb05376055c6456ed883fc843bc43df1dcf739c321ba431d518aecd7f98ca11",\n      "0x994dd9e72b212b7dc5fd0466ab75adf7d391cf4f206a65b7ad2a1fd032bb06d7",\n      "0xf6feecbb9ab0ac58591a4bc287059b1133089c499517e91a274e6a1f5e7dce53",\n      "0x7e537d687a5525259480440c6ea2e1a8469cd98906eaff8597f3d2a44422ff97",\n      "0xa762220e92bed6d77a2c19ffc60dad77d71bd5028c5230c896ab4b9552a39b50",\n      "0xf1fa677edda7e5add8e794732c7554cd5459a5c12781dc71de73c7937dfb2775",\n      "0x241d89f7888fbcfadfd415ee967882fec6fdd67c07ca8a00f2ca4c910a84c7dd"\n    ],\n    "transactionsRoot": "0xf98631e290e88f58a46b7032f025969039aa9b5696498efc76baf436fa69b262",\n    "uncles": [\n      "0x824cce7c7c2ec6874b9fa9a9a898eb5f27cbaf3991dfa81084c3af60d1db618c"\n    ]\n  }\n}\n'})})})})}function i(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4426:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>c});var t=a(74848),r=a(28453);const c=[];function s(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A block object matching the hash in the request, or null when no block was found. The matched block contains the following keys and their values:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"difficulty"}),": A hexadecimal of the difficulty for this block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"extraData"}),': The "extra data" field of this block.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gasLimit"}),": Maximum gas allowed in this block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gasUsed"}),": Total used gas by all transactions in this block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hash"}),": 32 bytes. The hash of the block. Null when the returned block is the pending block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"logsBloom"}),": 256 bytes. The bloom filter for the logs of the block. Null when the returned block is the pending block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"miner"}),": 20 bytes. The address of the beneficiary to whom the mining rewards were given."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"nonce"}),": 8 bytes. The hash of the generated proof-of-work. Null when the returned block is the pending block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"number"}),": The block number. Null when the returned block is the pending block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"parentHash"}),": 32 bytes. The hash of the parent block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"receiptsRoot"}),": 32 bytes. The root of the receipts trie of the block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sha3Uncles"}),": 32 bytes. The SHA3 of the uncles data in the block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"size"}),": A hexadecimal of the size of this block in bytes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"stateRoot"}),": 32 bytes. The root of the final state trie of the block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"timestamp"}),": Unix timestamp for when the block was collated."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"totalDifficulty"}),": A hexadecimal of the total difficulty of the chain until this block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"transactions"}),": [Array] An array of transaction objects, or 32 bytes transaction hashes depending on the last given parameter."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"transactionsRoot"}),": 32 bytes. The root of the transaction trie of the block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"uncles"}),": [Array] An Array of uncle hashes."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},1750:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>x,default:()=>g,frontMatter:()=>b,metadata:()=>p,toc:()=>j});var t=a(74848),r=a(28453),c=a(11470),s=a(19365),o=a(83997),l=a(9343),i=a(4426),d=a(15489);function h(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(c.A,{children:[(0,t.jsx)(s.A,{value:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    -d \'{"jsonrpc":"2.0","method":"eth_getBlockByHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",false],"id":1}\'\n'})})}),(0,t.jsx)(s.A,{value:"WSS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://avalanche-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_getBlockByHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",false],"id":1}\'\n'})})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}var f=a(83514);const b={title:"eth_getBlockByHash"},x=void 0,p={id:"reference/avalanche-c-chain/json-rpc-methods/eth_getblockbyhash",title:"eth_getBlockByHash",description:"Parameters",source:"@site/services/reference/avalanche-c-chain/json-rpc-methods/eth_getblockbyhash.mdx",sourceDirName:"reference/avalanche-c-chain/json-rpc-methods",slug:"/reference/avalanche-c-chain/json-rpc-methods/eth_getblockbyhash",permalink:"/test-integrate-infura/services/reference/avalanche-c-chain/json-rpc-methods/eth_getblockbyhash",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/avalanche-c-chain/json-rpc-methods/eth_getblockbyhash.mdx",tags:[],version:"current",frontMatter:{title:"eth_getBlockByHash"},sidebar:"servicesSidebar",previous:{title:"eth_getBalance",permalink:"/test-integrate-infura/services/reference/avalanche-c-chain/json-rpc-methods/eth_getbalance"},next:{title:"eth_getBlockByNumber",permalink:"/test-integrate-infura/services/reference/avalanche-c-chain/json-rpc-methods/eth_getblockbynumber"}},m={},j=[...o.RM,{value:"Parameters",id:"parameters",level:2},...l.RM,{value:"Returns",id:"returns",level:2},...i.RM,{value:"Example",id:"example",level:2},...d.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...f.RM];function v(e){const n={h2:"h2",h3:"h3",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,t.jsx)(d.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,t.jsx)(u,{}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,t.jsx)(f.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>s});a(96540);var t=a(18215);const r={tabItem:"tabItem_Ymn6"};var c=a(74848);function s(e){let{children:n,hidden:a,className:s}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>k});var t=a(96540),r=a(18215),c=a(23104),s=a(56347),o=a(205),l=a(57485),i=a(31682),d=a(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function f(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const r=(0,s.W6)(),c=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(c),(0,t.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(r.location.search);n.set(c,e),r.replace({...r.location,search:n.toString()})}),[c,r])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,c=u(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:c}))),[i,h]=b({queryString:a,groupId:r}),[x,p]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,c]=(0,d.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&c.set(e)}),[a,c])]}({groupId:r}),m=(()=>{const e=i??x;return f({value:e,tabValues:c})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),p(e)}),[h,p,c]),tabValues:c}}var p=a(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function v(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,c.a_)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),r=o[a].value;r!==t&&(i(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:c}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...c,className:(0,r.A)("tabs__item",m.tabItem,c?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function g(e){let{lazy:n,children:a,selectedValue:r}=e;const c=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function k(e){const n=(0,p.A)();return(0,j.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var t=a(96540);const r={},c=t.createContext(r);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);
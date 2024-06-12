"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[21986],{82156:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(74848),a=t(28453),s=t(11470),c=t(19365);const l={title:"starknet_getEvents"},i=void 0,o={id:"reference/starknet/json-rpc-methods/starknet_getevents",title:"starknet_getEvents",description:"Returns all event objects matching the conditions in the specified filter.",source:"@site/services/reference/starknet/json-rpc-methods/starknet_getevents.mdx",sourceDirName:"reference/starknet/json-rpc-methods",slug:"/reference/starknet/json-rpc-methods/starknet_getevents",permalink:"/test-integrate-infura/services/reference/starknet/json-rpc-methods/starknet_getevents",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/starknet/json-rpc-methods/starknet_getevents.mdx",tags:[],version:"current",frontMatter:{title:"starknet_getEvents"},sidebar:"servicesSidebar",previous:{title:"starknet_getClassHashAt",permalink:"/test-integrate-infura/services/reference/starknet/json-rpc-methods/starknet_getclasshashat"},next:{title:"starknet_getNonce",permalink:"/test-integrate-infura/services/reference/starknet/json-rpc-methods/starknet_getnonce"}},d={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function f(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Returns all event objects matching the conditions in the specified filter."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"filter"}),": (object) [",(0,r.jsx)(n.em,{children:"Required"}),"] The conditions used to filter the returned events, including:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"from_block"}),": [",(0,r.jsx)(n.em,{children:"Required"}),"] Block parameter object containing one of the following:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"block_hash"}),": (string) Block hash."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"block_number"}),": (integer) Decimal block number."]}),"\n",(0,r.jsxs)(n.li,{children:["One of the string tags ",(0,r.jsx)(n.code,{children:"latest"})," or ",(0,r.jsx)(n.code,{children:"pending"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"to_block"}),": [",(0,r.jsx)(n.em,{children:"Required"}),"] Block parameter object containing one of the following:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"block_hash"}),": (string) Block hash."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"block_number"}),": (integer) Decimal block number."]}),"\n",(0,r.jsxs)(n.li,{children:["One of the string tags ",(0,r.jsx)(n.code,{children:"latest"})," or ",(0,r.jsx)(n.code,{children:"pending"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"address"}),": (string) Sender contract address."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"keys"}),": (array) The values used to filter the events."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"continuation_token"}),": (string) The token returned from the previous query.\nIf no token is provided, the first page is returned."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chunk_size"}),": (integer) [",(0,r.jsx)(n.em,{children:"Required"}),"] Chunk size."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"An object containing:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"continuation_token"}),": Use this token in a subsequent query to obtain the next page.\nThis is not included if there are no more pages."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"events"}),": An array of all event objects matching the specified filter."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(c.A,{value:"cURL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://starknet-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "jsonrpc": "2.0",\n    "method": "starknet_getEvents",\n    "params": {\n      "filter": {\n        "from_block": "latest",\n        "to_block": "latest",\n        "address": "0x04c0a5193d58f74fbace4b74dcf65481e734ed1714121bdc571da345540efa05",\n        "chunk_size": 10\n      }\n    },\n    "id": 0\n  }\'\n'})})})}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(c.A,{value:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": {\n    "continuation_token": "637544-10",\n    "events": [\n      {\n        "block_hash": "0x38b2028fb31299733c25f55316721a90497f3300970f4a69b8774fe4d8cb600",\n        "block_number": 637544,\n        "data": [\n          "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",\n          "0x33e67938997ade7b38b7f23",\n          "0x34c84c75bde3dc72f961baa"\n        ],\n        "from_address": "0x4c0a5193d58f74fbace4b74dcf65481e734ed1714121bdc571da345540efa05",\n        "keys": [\n          "0x30c296ae369716818de77cb5b71ce9cda7cc2c0e8456f474e0abb1ae8d017da"\n        ],\n        "transaction_hash": "0x642fcafc5bdaa756c410cc6a968497551e86a783a5f21ea34c0f9214c2240af"\n      },\n      {\n        "block_hash": "0x38b2028fb31299733c25f55316721a90497f3300970f4a69b8774fe4d8cb600",\n        "block_number": 637544,\n        "data": [\n          "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",\n          "0x6db7e61ded25004dc0620",\n          "0x14e3778ef54505dfab26bf"\n        ],\n        "from_address": "0x4c0a5193d58f74fbace4b74dcf65481e734ed1714121bdc571da345540efa05",\n        "keys": [\n          "0xa2fb82b5656725dad81c7112b2c4ef0119096677c3c0fd82632d0a74f07666"\n        ],\n        "transaction_hash": "0x642fcafc5bdaa756c410cc6a968497551e86a783a5f21ea34c0f9214c2240af"\n      },\n      {\n        "block_hash": "0x38b2028fb31299733c25f55316721a90497f3300970f4a69b8774fe4d8cb600",\n        "block_number": 637544,\n        "data": [\n          "0x227fa960f90cd98fff1ddbcddbded55d4793a308b08ff920556408c466c5c64",\n          "0x227fa960f90cd98fff1ddbcddbded55d4793a308b08ff920556408c466c5c64",\n          "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",\n          "0x616f08fd61feb9",\n          "0x6379da05b60000"\n        ],\n        "from_address": "0x4c0a5193d58f74fbace4b74dcf65481e734ed1714121bdc571da345540efa05",\n        "keys": [\n          "0x7ae0ab7952bbfc33a72035e5eccec7c8816723421c0acb315bd4690a71d46e"\n        ],\n        "transaction_hash": "0x642fcafc5bdaa756c410cc6a968497551e86a783a5f21ea34c0f9214c2240af"\n      }\n    ]\n  }\n}\n'})})})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>_});var r=t(96540),a=t(18215),s=t(23104),c=t(56347),l=t(205),i=t(57485),o=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,c.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=f(e),[c,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,u]=b({queryString:t,groupId:a}),[m,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=o??m;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var p=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),a=l[t].value;a!==r&&(o(n),c(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(k,{...n,...e})]})}function _(e){const n=(0,p.A)();return(0,j.jsx)(g,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
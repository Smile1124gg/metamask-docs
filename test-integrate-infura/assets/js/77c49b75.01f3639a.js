"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[79469],{65739:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(74848),a=r(28453);const s=[];function o(e){const n={p:"p",...(0,a.R)(),...e.components};return(0,t.jsx)(n.p,{children:"Returns an estimate of how much priority fee, in wei, you need to be included in a block."})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},5339:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(74848),a=r(28453);const s=[];function o(e){const n={a:"a",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,t.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},10353:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(74848),a=r(28453);const s=[];function o(e){const n={p:"p",...(0,a.R)(),...e.components};return(0,t.jsx)(n.p,{children:"None."})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},15772:(e,n,r)=>{r.d(n,{Ay:()=>l,RM:()=>c});var t=r(74848),a=r(28453),s=r(11470),o=r(19365);const c=[];function i(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsx)(s.A,{children:(0,t.jsx)(o.A,{value:"JSON",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x55d4a80"\n}\n'})})})})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},82732:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(74848),a=r(28453);const s=[];function o(e){const n={code:"code",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"result"}),": A hexadecimal value of the priority fee, in wei, needed to be included in a block."]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1728:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>x,contentTitle:()=>f,default:()=>y,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var t=r(74848),a=r(28453),s=r(11470),o=r(19365),c=r(65739),i=r(10353),l=r(82732),u=r(5339);function d(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_maxPriorityFeePerGas","params": [],"id":1}\'\n'})})}),(0,t.jsx)(o.A,{value:"WSS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://avalanche-mainnet.infura.io/ws/v3/d23391e03c6d40738530a1b4b679e66e -x \'{"jsonrpc":"2.0","method":"eth_maxPriorityFeePerGas","params": [],"id":1}\'\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}var p=r(15772);const m={title:"eth_maxPriorityFeePerGas"},f=void 0,v={id:"reference/avalanche-c-chain/json-rpc-methods/eth_maxpriorityfeepergas",title:"eth_maxPriorityFeePerGas",description:"Parameters",source:"@site/services/reference/avalanche-c-chain/json-rpc-methods/eth_maxpriorityfeepergas.mdx",sourceDirName:"reference/avalanche-c-chain/json-rpc-methods",slug:"/reference/avalanche-c-chain/json-rpc-methods/eth_maxpriorityfeepergas",permalink:"/test-integrate-infura/services/reference/avalanche-c-chain/json-rpc-methods/eth_maxpriorityfeepergas",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/avalanche-c-chain/json-rpc-methods/eth_maxpriorityfeepergas.mdx",tags:[],version:"current",frontMatter:{title:"eth_maxPriorityFeePerGas"},sidebar:"servicesSidebar",previous:{title:"eth_getUncleCountByBlockNumber",permalink:"/test-integrate-infura/services/reference/avalanche-c-chain/json-rpc-methods/eth_getunclecountbyblocknumber"},next:{title:"eth_sendRawTransaction",permalink:"/test-integrate-infura/services/reference/avalanche-c-chain/json-rpc-methods/eth_sendrawtransaction"}},x={},b=[...c.RM,{value:"Parameters",id:"parameters",level:2},...i.RM,{value:"Returns",id:"returns",level:2},...l.RM,{value:"Example",id:"example",level:2},...u.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...p.RM];function j(e){const n={h2:"h2",h3:"h3",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,t.jsx)(u.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,t.jsx)(p.Ay,{})]})}function y(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var t=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>R});var t=r(96540),a=r(18215),s=r(23104),o=r(56347),c=r(205),i=r(57485),l=r(31682),u=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[l,d]=m({queryString:r,groupId:a}),[f,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),x=(()=>{const e=l??f;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),a=c[r].value;a!==t&&(l(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(y,{...n,...e})]})}function R(e){const n=(0,v.A)();return(0,b.jsx)(g,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(96540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
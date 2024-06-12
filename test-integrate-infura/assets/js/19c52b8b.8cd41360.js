"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[56203],{29532:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=t(74848),a=t(28453),o=t(11470),s=t(19365);const l={},i="bor_getAuthor",u={id:"reference/polygon-pos/json-rpc-methods/bor_getauthor",title:"bor_getAuthor",description:"Returns the author of the specified block.",source:"@site/services/reference/polygon-pos/json-rpc-methods/bor_getauthor.md",sourceDirName:"reference/polygon-pos/json-rpc-methods",slug:"/reference/polygon-pos/json-rpc-methods/bor_getauthor",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/bor_getauthor",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/polygon-pos/json-rpc-methods/bor_getauthor.md",tags:[],version:"current",frontMatter:{},sidebar:"servicesSidebar",previous:{title:"JSON-RPC methods",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/"},next:{title:"bor_getCurrentProposer",permalink:"/test-integrate-infura/services/reference/polygon-pos/json-rpc-methods/bor_getcurrentproposer"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"bor_getauthor",children:"bor_getAuthor"}),"\n",(0,n.jsx)(r.p,{children:"Returns the author of the specified block."}),"\n",(0,n.jsxs)(r.admonition,{title:"For Growth and Custom service plans",type:"info",children:[(0,n.jsxs)(r.p,{children:["This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should\nexperience a service issue or outage. See ",(0,n.jsx)(r.a,{href:"/test-integrate-infura/services/reference/polygon-pos/concepts/failover-protection",children:"Failover protection"}),"\nand ",(0,n.jsx)(r.a,{href:"/test-integrate-infura/services/reference/polygon-pos/how-to/failover-protection-imp-polygon",children:"Enable API request forwarding"}),"\nfor complete details."]}),(0,n.jsx)(r.p,{children:"If you would like failover protection but don't qualify under your current plan, then either\nself-upgrade to the Growth plan or contact a sales representative to upgrade to a Custom plan."})]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"string"}),": Block number in hexadecimal, or the tag ",(0,n.jsx)(r.code,{children:"latest"})," to get the latest block."]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"string"}),": Address of the author"]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(r.p,{children:["Replace ",(0,n.jsx)(r.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,n.jsx)(r.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(s.A,{value:"cURL",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'curl https://polygon-mainnet.infura.io/v3/YOUR-API-KEY \\\n-X POST \\\n-H "Content-Type: application/json" \\\n-d \'{"jsonrpc":"2.0","method":"bor_getAuthor","params":["0x1000"], "id":1}\'\n'})})}),(0,n.jsx)(s.A,{value:"WSS",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'wscat -c wss://polygon-mainnet.infura.io/ws/v3/YOUR-API-KEY -x {"jsonrpc":"2.0","method":"bor_getAuthor","params":["0x1000"], "id":1}\'\n'})})})]}),"\n",(0,n.jsx)(r.h3,{id:"response",children:"Response"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{"jsonrpc":"2.0","id":1,"result":"0x42eefcda06ead475cde3731b8eb138e88cd0bac3"}\n'})})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(18215);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(96540),a=t(18215),o=t(23104),s=t(56347),l=t(205),i=t(57485),u=t(31682),c=t(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,u.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,o=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[u,d]=f({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=u??m;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:r,block:t,selectedValue:n,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const r=e.currentTarget,t=i.indexOf(r),a=l[t].value;a!==n&&(u(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...r,...e}),(0,g.jsx)(j,{...r,...e})]})}function w(e){const r=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var n=t(96540);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);
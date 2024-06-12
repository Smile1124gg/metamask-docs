"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[69009],{93186:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),s=t(11470),i=t(19365);const o={description:"Get the base fee history."},l="Get the base fee history",c={id:"infura-expansion-apis/gas-api/api-reference/basefeehistory",title:"Get the base fee history",description:"Get the base fee history.",source:"@site/services/infura-expansion-apis/gas-api/api-reference/basefeehistory.mdx",sourceDirName:"infura-expansion-apis/gas-api/api-reference",slug:"/infura-expansion-apis/gas-api/api-reference/basefeehistory",permalink:"/test-integrate-infura/services/infura-expansion-apis/gas-api/api-reference/basefeehistory",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/infura-expansion-apis/gas-api/api-reference/basefeehistory.mdx",tags:[],version:"current",frontMatter:{description:"Get the base fee history."}},u={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"get-the-base-fee-history",children:"Get the base fee history"}),"\n",(0,r.jsx)(n.p,{children:"Returns the base fee history of the specified blockchain network for the previous 500 blocks."}),"\n",(0,r.jsx)(n.p,{children:"The base fee is a part of the EIP-1559 upgrade to the Ethereum network, and it represents the minimum price a user must\npay for their transaction to be included in a block."}),"\n",(0,r.jsx)(n.p,{children:"This method can be useful for applications that need to display or analyze the historical base fee data for a specific\nblockchain network."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"https://gas.api.infura.io/networks/${chainId}/baseFeeHistory"})]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Path"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chainId"}),": ",(0,r.jsx)(n.em,{children:"string"})," - ID of the chain to query"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"Array of historical base fees."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(n.p,{children:["Include your ",(0,r.jsx)(n.a,{href:"../../../../dashboard/create-api.md",children:"API key"})," and\noptional ",(0,r.jsx)(n.a,{href:"../../../../dashboard/secure-an-api/api-key-secret.md",children:"API key secret"})," to use the API."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can call the API with only an API key, and ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/infura-expansion-apis/gas-api/api-reference/#supported-api-request-formats",children:"include it as a path parameter"}),"\ninstead of using the cURL authentication option (",(0,r.jsx)(n.code,{children:"-u"}),")."]})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"cURL",label:"cURL",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n   -u <API-KEY>:<API-KEY-SECRET> \\\n    'https://gas.api.infura.io/networks/1/baseFeeHistory'\n"})})}),(0,r.jsx)(i.A,{value:"JavaScript",label:"JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'const axios = require("axios");\n\nconst apiKey = \'<API-KEY>\'; // replace with your API key\nconst apiKeySecret = \'<API-KEY-SECRET>\'; // replace with your API key secret\n\nconst Auth = Buffer.from(\n  apiKey + ":" + apiKeySecret,\n).toString("base64");\n\n// The chain ID of the supported network\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/networks/${chainId}/baseFeeHistory`,\n      {\n        headers: {\n          Authorization: `Basic ${Auth}`,\n        },\n      },\n    );\n    console.log("Base fee history:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  "14.585610312",\n  "16.407222984",\n  "16.687763116",\n  "16.357094117",\n  "15.82929799",\n  "15.21546789",\n  "17.113938208",\n  "16.92324819",\n  ...\n]\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(18215),s=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=f({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(g,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
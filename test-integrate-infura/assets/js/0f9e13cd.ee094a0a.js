"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[88898],{61513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(74848),r=t(28453),s=t(11470),i=t(19365);const o={description:"Get started with the Gas APIs.",sidebar_position:1},l="Quickstart",c={id:"infura-expansion-apis/gas-api/quickstart",title:"Quickstart",description:"Get started with the Gas APIs.",source:"@site/services/infura-expansion-apis/gas-api/quickstart.mdx",sourceDirName:"infura-expansion-apis/gas-api",slug:"/infura-expansion-apis/gas-api/quickstart",permalink:"/test-integrate-infura/services/infura-expansion-apis/gas-api/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/infura-expansion-apis/gas-api/quickstart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Get started with the Gas APIs.",sidebar_position:1}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize a new project directory",id:"initialize-a-new-project-directory",level:2},{value:"Install required packages",id:"install-required-packages",level:2},{value:"Create your <code>.env</code> file",id:"create-your-env-file",level:2},{value:"Create your script",id:"create-your-script",level:2},{value:"Run the script",id:"run-the-script",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,a.jsxs)(n.p,{children:["This quickstart shows you how to call the Gas API using JavaScript. You can also use a tool such as\n",(0,a.jsx)(n.a,{href:"https://curl.se/",children:"cURL"})," or ",(0,a.jsx)(n.a,{href:"https://www.postman.com/",children:"Postman"})," to call the REST APIs."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["View the ",(0,a.jsx)(n.a,{href:"/test-integrate-infura/services/infura-expansion-apis/gas-api/api-reference/",children:"API reference content"})," to view the ",(0,a.jsx)(n.code,{children:"curl"})," command for each API."]})}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A valid ",(0,a.jsx)(n.a,{href:"../../../dashboard/create-api.md",children:"API key"})," and optional\n",(0,a.jsx)(n.a,{href:"../../../dashboard/secure-an-api/api-key-secret.md",children:"API key secret"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"Node.js and npm installed"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"initialize-a-new-project-directory",children:"Initialize a new project directory"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir new_project\ncd new_project\nnpm init -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"install-required-packages",children:"Install required packages"}),"\n",(0,a.jsxs)(n.p,{children:["Install the ",(0,a.jsx)(n.code,{children:"axios"})," package:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm install axios\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Install the ",(0,a.jsx)(n.a,{href:"../../../tutorials/developer-tools/javascript-dotenv.md",children:(0,a.jsx)(n.code,{children:"dotenv"})})," package:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm install dotenv\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"create-your-env-file",children:["Create your ",(0,a.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,a.jsxs)(n.p,{children:["Create a ",(0,a.jsx)(n.code,{children:".env"})," file at the project root and add the following data:"]}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["Do not commit the ",(0,a.jsx)(n.code,{children:".env"})," file to your repository if it contains sensitive data. You can\n",(0,a.jsxs)(n.a,{href:"../../../tutorials/developer-tools/javascript-dotenv.md#create-a-gitignore-file",children:["create a ",(0,a.jsx)(n.code,{children:".gitignore"})," file"]})," to\nprevent accidentally committing the file."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"INFURA_API_KEY=<API-KEY>\nINFURA_API_KEY_SECRET=<API-KEY-SECRET>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Replace the Infura project credential placeholders with your own."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"INFURA_API_KEY_SECRET"})," is optional and only necessary if you need an\n",(0,a.jsx)(n.a,{href:"../../../dashboard/secure-an-api/api-key-secret.md",children:"API key secret"})," to authenticate requests."]})}),"\n",(0,a.jsx)(n.h2,{id:"create-your-script",children:"Create your script"}),"\n",(0,a.jsxs)(n.p,{children:["The Gas API supports ",(0,a.jsx)(n.a,{href:"/test-integrate-infura/services/infura-expansion-apis/gas-api/api-reference/#supported-api-request-formats",children:"multiple request formats"}),", and\nyou can call the methods with or without specifying an API key secret."]}),"\n",(0,a.jsxs)(n.p,{children:["Create a file (in this example ",(0,a.jsx)(n.code,{children:"index.js"}),"), and copy the following code into your script:"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["If using a network other than Ethereum Mainnet, then update the ",(0,a.jsx)(n.code,{children:"chainId"})," value (",(0,a.jsx)(n.code,{children:"1"}),") in the code to an alternate\n",(0,a.jsx)(n.a,{href:"/test-integrate-infura/services/infura-expansion-apis/gas-api/supported-networks",children:"supported network"}),"."]})}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"Use API key",label:"Use an API key only",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'const axios = require("axios");\nrequire("dotenv").config();\n\n// The chain ID of the supported network\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/v3/${process.env.INFURA_API_KEY}/networks/${chainId}/suggestedGasFees`\n    );\n    console.log("Suggested gas fees:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n'})})}),(0,a.jsx)(i.A,{value:"With basic authentication",label:"Use an API key and API key secret",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'const axios = require("axios");\nrequire("dotenv").config();\n\nconst Auth = Buffer.from(\n  process.env.INFURA_API_KEY + ":" + process.env.INFURA_API_KEY_SECRET,\n).toString("base64");\n\n// The chain ID of the supported network\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,\n      {\n        headers: {\n          Authorization: `Basic ${Auth}`,\n        },\n      },\n    );\n    console.log("Suggested gas fees:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"run-the-script",children:"Run the script"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"node index.js\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result should look similar to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"Suggested gas fees: {\n  low: {\n    suggestedMaxPriorityFeePerGas: '0.05',\n    suggestedMaxFeePerGas: '24.086058416',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 30000\n  },\n  medium: {\n    suggestedMaxPriorityFeePerGas: '0.1',\n    suggestedMaxFeePerGas: '32.548678862',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 45000\n  },\n  high: {\n    suggestedMaxPriorityFeePerGas: '0.3',\n    suggestedMaxFeePerGas: '41.161299308',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 60000\n  },\n  estimatedBaseFee: '24.036058416',\n  networkCongestion: 0.7143,\n  latestPriorityFeeRange: [ '0.1', '20' ],\n  historicalPriorityFeeRange: [ '0.007150439', '113' ],\n  historicalBaseFeeRange: [ '19.531410688', '36.299069766' ],\n  priorityFeeTrend: 'down',\n  baseFeeTrend: 'down'\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>I});var a=t(96540),r=t(18215),s=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=f({queryString:t,groupId:r}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function I(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
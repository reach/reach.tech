(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{rvlW:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),l=n("LmON"),s=n("EYWl"),b={},i={_frontmatter:b},c=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s.a,{title:"Alert",description:"Accessible component to create alert messages for React",mdxType:"SEO"}),Object(r.b)("h1",{id:"alert"},"Alert"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Source: ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/reach/reach-ui/tree/main/packages/alert"}),"https://github.com/reach/reach-ui/tree/main/packages/alert")),Object(r.b)("li",{parentName:"ul"},"WAI-ARIA: ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#alert"}),"https://www.w3.org/TR/wai-aria-practices-1.2/#alert"))),Object(r.b)("p",null,'Screen-reader-friendly alert messages. In many apps developers add "alert" messages when network events or other things happen. Users with assistive technologies may not know about the message unless you develop for it.'),Object(r.b)("p",null,"The Alert component will announce to assistive technologies whatever you render to the screen. If you don't have a screen reader on you won't notice a difference between rendering ",Object(r.b)("inlineCode",{parentName:"p"},"<Alert>")," vs. a ",Object(r.b)("inlineCode",{parentName:"p"},"<div>"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"// jsx-demo\nfunction Example(props) {\n  const [messages, setMessages] = React.useState([]);\n  return (\n    <div>\n      <button\n        onClick={() => {\n          setMessages((prevMessages) =>\n            prevMessages.concat([`Message #${prevMessages.length + 1}`])\n          );\n          setTimeout(() => {\n            setMessages((prevMessages) => prevMessages.slice(1));\n          }, 5000);\n        }}\n      >\n        Add a message\n      </button>\n      <div>\n        {messages.map((message, index) => (\n          <Alert key={index}>{message}</Alert>\n        ))}\n      </div>\n    </div>\n  );\n}\n")),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"From the command line in your project directory, run ",Object(r.b)("inlineCode",{parentName:"p"},"npm install @reach/alert")," or ",Object(r.b)("inlineCode",{parentName:"p"},"yarn add @reach/alert"),". Then import the component:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm install @reach/alert\n# or\nyarn add @reach/alert\n")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'import Alert from "@reach/alert";\n')),Object(r.b)("h2",{id:"component-api"},"Component API"),Object(r.b)("h3",{id:"alert-1"},"Alert"),Object(r.b)("h4",{id:"alert-props"},"Alert Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Prop"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("a",Object.assign({parentName:"td"},{href:"#alert-div-props"}),Object(r.b)("inlineCode",{parentName:"a"},"div")," props")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("a",Object.assign({parentName:"td"},{href:"#alert-type"}),Object(r.b)("inlineCode",{parentName:"a"},"type"))),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"enum")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("a",Object.assign({parentName:"td"},{href:"#alert-children"}),Object(r.b)("inlineCode",{parentName:"a"},"children"))),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"node")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"true`")))),Object(r.b)("h5",{id:"alert-div-props"},"Alert div props"),Object(r.b)("p",null,"Any props not listed above will be spread onto the underlying ",Object(r.b)("inlineCode",{parentName:"p"},"div")," element."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'// jsx-demo\nfunction Example() {\n  return (\n    <Alert\n      style={{\n        background: "hsla(10, 50%, 50%, .10)",\n        padding: "10px",\n      }}\n    >\n      ❗️ Woah! Something went wrong.\n    </Alert>\n  );\n}\n')),Object(r.b)("h5",{id:"alert-type"},"Alert type"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'type?: "assertive" | "polite"')),Object(r.b)("p",null,'Controls whether the assistive technology should read immediately ("assertive") or wait until the user is idle ("polite").'),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Alert type="polite">\n  This is the default\n</Alert>\n\n<Alert type="assertive">\n  If a screen reader is currently reading something and\n  you render this, it will interrupt the user and read\n  this immediately.\n</Alert>\n')),Object(r.b)("p",null,"You should probably stick with polite most of the time."),Object(r.b)("h5",{id:"alert-children"},"Alert children"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"children: React.ReactNode;")),Object(r.b)("p",null,"Regular React children."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Alert>\n  <p>Whatever you want here</p>\n  <p>Is fine.</p>\n</Alert>\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-alert-mdx-443d240d6ebcf273bed1.js.map
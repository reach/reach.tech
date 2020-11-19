(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Pgu5:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),c=n("LmON"),b=n("EYWl"),l=n("fVd4"),o={},i={_frontmatter:o},s=c.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(s,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(b.a,{title:"Rect",description:"Measures a DOM node's bounding box in React",mdxType:"SEO"}),Object(r.b)("h1",{id:"rect"},"Rect"),Object(r.b)(l.a,{mdxType:"TOC"},Object(r.b)(l.c,{mdxType:"TOCList"},Object(r.b)(l.b,{href:"#userect",mdxType:"TOCLink"},"useRect"),Object(r.b)(l.b,{href:"#rect-1",mdxType:"TOCLink"},"Rect"))),Object(r.b)("p",null,"Measures DOM elements (aka. bounding client rect). See also ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect"}),"Element.getBoundingClientRect()")),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"From the command line in your project directory, run ",Object(r.b)("inlineCode",{parentName:"p"},"npm install @reach/rect")," or ",Object(r.b)("inlineCode",{parentName:"p"},"yarn add @reach/rect"),". Then import the component or hook that you need:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm install @reach/rect\n# or\nyarn add @reach/rect\n")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'import Rect, { useRect } from "@reach/rect";\n')),Object(r.b)("h2",{id:"component-api"},"Component API"),Object(r.b)("h3",{id:"userect"},"useRect"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"function useRect<T extends Element>(nodeRef: React.RefObject<T>, options?: { observe?: boolean, onChange?: (rect: DOMRect) => void }): null | DOMRect")),Object(r.b)("p",null,"Hook that observes and returns the measurements (ClientRect) of a DOM element. Pass it the ref that is placed on the element to be measured."),Object(r.b)("h4",{id:"userect-options"},"useRect Options"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Option"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("a",Object.assign({parentName:"td"},{href:"#userect-observe"}),Object(r.b)("inlineCode",{parentName:"a"},"observe"))),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("a",Object.assign({parentName:"td"},{href:"#userect-onchange"}),Object(r.b)("inlineCode",{parentName:"a"},"onChange"))),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"func")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h5",{id:"userect-observe"},"useRect observe"),Object(r.b)("p",null,"Tells ",Object(r.b)("inlineCode",{parentName:"p"},"useRect")," whether or not to observe changes to the position of the node. Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("p",null,"This is typically used for elements that pop over other elements. You generally don't need to observe all of the time—only when the popup is active."),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"observe")," is false, the element's ",Object(r.b)("inlineCode",{parentName:"p"},"DOMRect")," will no longer be observed."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'// jsx-demo\nfunction Example() {\n  const [observe, setObserve] = React.useState(true);\n  // your own ref\n  const ref = React.useRef();\n\n  // pass it in to be observered\n  const rect = useRect(ref, { observe });\n\n  return (\n    <div>\n      <button onClick={() => setObserve(!observe)}>\n        {observe ? "Stop" : "Start"} observing\n      </button>\n      <pre>{JSON.stringify(rect, null, 2)}</pre>\n      <div\n        // and then place the ref\n        ref={ref}\n        contentEditable\n        style={{\n          display: "inline-block",\n          padding: 10,\n          border: "solid 1px",\n        }}\n        dangerouslySetInnerHTML={{\n          __html: "Edit this to change the size!",\n        }}\n      />\n    </div>\n  );\n}\n')),Object(r.b)("h5",{id:"userect-onchange"},"useRect onChange"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"onChange?(rect: DOMRect): void")),Object(r.b)("p",null,"Calls back whenever the ",Object(r.b)("inlineCode",{parentName:"p"},"rect")," of the element changes."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"function Example() {\n  const ref = React.useRef();\n  useRect(ref, {\n    onChange(rect) {\n      console.log(rect);\n    },\n  });\n  return <div ref={ref} />;\n}\n")),Object(r.b)("h3",{id:"rect-1"},"Rect"),Object(r.b)("p",null,"Render prop component for use in class components to observe element measurements."),Object(r.b)("h4",{id:"rect-props"},"Rect Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Prop"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("a",Object.assign({parentName:"td"},{href:"#rect-children"}),Object(r.b)("inlineCode",{parentName:"a"},"children"))),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"func")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("a",Object.assign({parentName:"td"},{href:"#rect-observe"}),Object(r.b)("inlineCode",{parentName:"a"},"observe"))),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("a",Object.assign({parentName:"td"},{href:"#rect-onchange"}),Object(r.b)("inlineCode",{parentName:"a"},"onChange"))),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"func")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h5",{id:"rect-children"},"Rect children"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"children(args: { rect: DOMRect | null; ref: React.Ref<any> }): JSX.Element")),Object(r.b)("p",null,"A function that calls back to you with a ",Object(r.b)("inlineCode",{parentName:"p"},"ref")," to place on an element and the ",Object(r.b)("inlineCode",{parentName:"p"},"rect")," measurements of the dom node."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": On the first render ",Object(r.b)("inlineCode",{parentName:"p"},"rect")," will be ",Object(r.b)("inlineCode",{parentName:"p"},"null")," because we can't measure a node that has not yet been rendered. Make sure your code accounts for this."),Object(r.b)("h5",{id:"rect-observe"},"Rect observe"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"observe?: boolean")),Object(r.b)("p",null,"Same as ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"#userect-observe"}),Object(r.b)("inlineCode",{parentName:"a"},"useRect"),"'s ",Object(r.b)("inlineCode",{parentName:"a"},"observe")," option"),". While observing, the ",Object(r.b)("inlineCode",{parentName:"p"},"children")," render prop may call back very quickly (especially while scrolling), so it can be important for performance to avoid observing when you don't need to. Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Rect observe={false}>\n  {({ rect, ref }) => (\n    <div ref={ref}>\n      <div>Will not measure the element when false</div>\n      <div>\n        Edit this code and change it to <code>true</code>\n      </div>\n      <pre>{JSON.stringify(rect, null, 2)}</pre>\n    </div>\n  )}\n</Rect>\n")),Object(r.b)("h5",{id:"rect-onchange"},"Rect onChange"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"onChange?(rect: DOMRect): void")),Object(r.b)("p",null,"Same as ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"#userect-onchange"}),Object(r.b)("inlineCode",{parentName:"a"},"useRect"),"'s ",Object(r.b)("inlineCode",{parentName:"a"},"onChange")," option"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Rect onChange={rect => console.log(rect)}/>\n  {({ rect, ref }) => (\n    <div ref={ref}/>\n  )}\n</Rect>\n")))}p.isMDXComponent=!0},fVd4:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return p}));var a=n("rePB"),r=n("zLVn"),c=n("q1tI"),b=n("mh+Z");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e){var t=e.children,n=e.label,a=void 0===n?"Table of Contents":n,l=Object(r.a)(e,["children","label"]);return c.createElement("nav",Object.assign({className:"toc"},l),c.createElement(b.a,null,c.createElement("h2",null,a)),t)}function s(e){var t=e.children,n=e.style,a=void 0===n?{}:n,b=Object(r.a)(e,["children","style"]);return c.createElement("ul",Object.assign({style:o({display:"block",padding:0,listStyle:"none"},a)},b),t)}function p(e){var t=e.href,n=e.children,a=Object(r.a)(e,["href","children"]);return c.createElement("li",{style:{display:"inline-block",margin:0,padding:0}},c.createElement("a",Object.assign({href:t},a),n))}}}]);
//# sourceMappingURL=component---src-pages-rect-mdx-3306e755ad9e8d3f899b.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{fVd4:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return d}));n("xtjI"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/");var a=n("q1tI"),l=n.n(a),r=n("mh+Z");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}function c(e){var t=e.children,n=e.label,a=void 0===n?"Table of Contents":n,i=s(e,["children","label"]);return l.a.createElement("nav",Object.assign({className:"toc"},i),l.a.createElement(r.a,null,l.a.createElement("h2",null,a)),t)}function p(e){var t=e.children,n=e.style,a=void 0===n?{}:n,r=s(e,["children","style"]);return l.a.createElement("ul",Object.assign({style:o({display:"block",padding:0,listStyle:"none"},a)},r),t)}function d(e){var t=e.href,n=e.children,a=s(e,["href","children"]);return l.a.createElement("li",{style:{display:"inline-block",margin:0,padding:0}},l.a.createElement("a",Object.assign({href:t},a),n))}},z46z:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("q1tI");var a=n("7ljp"),l=n("LmON"),r=n("EYWl"),i=n("fVd4");var o={},b={_frontmatter:o},s=l.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(s,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(r.a,{title:"Alert Dialog",description:"Accessible alert dialog component for React",mdxType:"SEO"}),Object(a.b)("h1",{id:"alert-dialog"},"Alert Dialog"),Object(a.b)(i.a,{mdxType:"TOC"},Object(a.b)(i.c,{mdxType:"TOCList"},Object(a.b)(i.b,{href:"#alertdialog",mdxType:"TOCLink"},"AlertDialog"),Object(a.b)(i.b,{href:"#alertdialogcontent",mdxType:"TOCLink"},"AlertDialogContent"),Object(a.b)(i.b,{href:"#alertdialogdescription",mdxType:"TOCLink"},"AlertDialogDescription"),Object(a.b)(i.b,{href:"#alertdialogoverlay",mdxType:"TOCLink"},"AlertDialogOverlay"),Object(a.b)(i.b,{href:"#alertdialogcontent",mdxType:"TOCLink"},"AlertDialogContent"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Source: ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/reach/reach-ui/tree/main/packages/alert-dialog"}),"https://github.com/reach/reach-ui/tree/main/packages/alert-dialog")),Object(a.b)("li",{parentName:"ul"},"WAI-ARIA: ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#alertdialog"}),"https://www.w3.org/TR/wai-aria-practices-1.2/#alertdialog"))),Object(a.b)("p",null,'A modal dialog that interrupts the user\'s workflow to get a response, usually some sort of confirmation. This is different than a typical Dialog in that it requires some user response, like "Save", or "Cancel", etc.'),Object(a.b)("p",null,"Most of the time you'll use ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialog"),", ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogLabel"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogDescription")," together. If you need more control over the styling of the modal you can drop down a level and use ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogOverlay")," and ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogContent")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialog"),"."),Object(a.b)("p",null,"When a Dialog opens, the ",Object(a.b)("em",{parentName:"p"},"least destructive")," action should be focused so that if a user accidentally hits enter when the dialog opens no damage is done. This is accomplished with the ",Object(a.b)("inlineCode",{parentName:"p"},"leastDestructiveRef")," prop."),Object(a.b)("p",null,"Every dialog must render an ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogLabel")," so the screen reader knows what to say about the dialog. If an ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogDescription")," is also rendered, the screen reader will also announce that. If you render more than these two elements and some buttons, the screen reader might not announce it so it's important to keep the content inside of ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogLabel")," and ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogDescription"),"."),Object(a.b)("p",null,"This is built on top of ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/dialog"}),"Dialog"),", so ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialog")," spreads its props and renders a ",Object(a.b)("inlineCode",{parentName:"p"},"Dialog"),", same for ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogOverlay")," to ",Object(a.b)("inlineCode",{parentName:"p"},"DialogOverlay"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogContent")," to ",Object(a.b)("inlineCode",{parentName:"p"},"DialogContent"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'// jsx-demo\nfunction Example(props) {\n  const [showDialog, setShowDialog] = React.useState(false);\n  const cancelRef = React.useRef();\n  const open = () => setShowDialog(true);\n  const close = () => setShowDialog(false);\n\n  return (\n    <div>\n      <button onClick={open}>Delete something</button>\n\n      {showDialog && (\n        <AlertDialog leastDestructiveRef={cancelRef}>\n          <AlertDialogLabel>Please Confirm!</AlertDialogLabel>\n\n          <AlertDialogDescription>\n            Are you sure you want to delete something? This action is permanent,\n            and we\'re totally not just flipping a field called "deleted" to\n            "true" in our database, we\'re actually deleting something.\n          </AlertDialogDescription>\n\n          <div className="alert-buttons">\n            <button onClick={close}>Yes, delete</button>{" "}\n            <button ref={cancelRef} onClick={close}>\n              Nevermind, don\'t delete.\n            </button>\n          </div>\n        </AlertDialog>\n      )}\n    </div>\n  );\n}\n')),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"From the command line in your project directory, run ",Object(a.b)("inlineCode",{parentName:"p"},"npm install @reach/alert-dialog")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add @reach/alert-dialog"),". Then import the components that you need:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm install @reach/alert-dialog\n# or\nyarn add @reach/alert-dialog\n")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'import {\n  AlertDialog,\n  AlertDialogLabel,\n  AlertDialogDescription,\n  AlertDialogOverlay,\n  AlertDialogContent,\n} from "@reach/alert-dialog";\n')),Object(a.b)("h2",{id:"component-api"},"Component API"),Object(a.b)("h3",{id:"alertdialog"},"AlertDialog"),Object(a.b)("p",null,"High-level component to render an alert dialog."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<AlertDialog leastDestructiveRef={someRef}>\n  <AlertDialogLabel />\n  <AlertDialogContent />\n</AlertDialog>\n")),Object(a.b)("h4",{id:"alertdialog-props"},"AlertDialog Props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Prop"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Required"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialog-dialog-props"}),Object(a.b)("inlineCode",{parentName:"a"},"Dialog")," props")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialog-isopen"}),Object(a.b)("inlineCode",{parentName:"a"},"isOpen"))),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"bool")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialog-ondismiss"}),Object(a.b)("inlineCode",{parentName:"a"},"onDismiss"))),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"func")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialog-leastdestructiveref"}),Object(a.b)("inlineCode",{parentName:"a"},"leastDestructiveRef"))),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"func")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#dialog-element-props"}),Object(a.b)("inlineCode",{parentName:"a"},"children"))),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"node")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"true")))),Object(a.b)("h5",{id:"alertdialog-dialog-props"},"AlertDialog Dialog props"),Object(a.b)("p",null,"Any props not listed above will be spread onto the underlying ",Object(a.b)("inlineCode",{parentName:"p"},"Dialog")," element, which in turn is spread onto the underlying ",Object(a.b)("inlineCode",{parentName:"p"},"div[data-reach-dialog-content]"),"."),Object(a.b)("p",null,"See ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/dialog#dialog-props"}),"documentation for ",Object(a.b)("inlineCode",{parentName:"a"},"Dialog")," props")," for more information."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<AlertDialog style={{ color: "red" }}>\n  <AlertDialogLabel>\n    My text is red because the style prop got applied to the div underneath\n  </AlertDialogLabel>\n</AlertDialog>\n')),Object(a.b)("h5",{id:"alertdialog-isopen"},"AlertDialog isOpen"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"isOpen?: boolean")),Object(a.b)("p",null,"Controls whether the dialog is open or not. Defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<AlertDialog isOpen={true}>\n  <AlertDialogLabel>I will be open</AlertDialogLabel>\n</AlertDialog>\n\n<AlertDialog isOpen={false}>\n  <AlertDialogLabel>I will be closed</AlertDialogLabel>\n</AlertDialog>\n")),Object(a.b)("p",null,"Note, however, that the dialog will not render to the DOM when ",Object(a.b)("inlineCode",{parentName:"p"},"isOpen={false}"),", but you may want to save on the number of elements created in your render function. If you'd rather not have the dialog always rendered, you can put a guard in front of it and only render when it should be open. In this case you don’t need the ",Object(a.b)("inlineCode",{parentName:"p"},"isOpen")," prop at all."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"{\n  state.confirmDelete && (\n    <AlertDialog isOpen={true}>\n      <AlertDialogLabel>I will be open</AlertDialogLabel>\n    </AlertDialog>\n  );\n}\n")),Object(a.b)("p",null,"You should probably do this when your dialog contains a lot of elements. It's also useful for transition animations."),Object(a.b)("h5",{id:"alertdialog-ondismiss"},"AlertDialog onDismiss"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"onDismiss?: (event?: React.SyntheticEvent) => void;")),Object(a.b)("p",null,"When the user clicks outside the modal or hits the escape key, this function will be called. If you want the modal to close, you’ll need to set state."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"IMPORTANT"),": Ensure that ",Object(a.b)("inlineCode",{parentName:"p"},"onDismiss")," and the click handler of the ",Object(a.b)("inlineCode",{parentName:"p"},"leastDestructiveRef")," are identical!"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'// jsx-demo\nfunction Example(props) {\n  const [showDialog, setShowDialog] = React.useState(false);\n  const cancelRef = React.useRef();\n\n  const open = () => setShowDialog(true);\n  const destroyStuff = () => {\n    console.log("Destroyed!");\n    setShowDialog(false);\n  };\n  // make sure `close` and the `onClick` of the\n  // `leastDestructiveRef` are identical, best to just\n  // pass them both the same function\n  const close = () => setShowDialog(false);\n\n  return (\n    <div>\n      <button onClick={open}>Delete something</button>\n\n      {showDialog && (\n        <AlertDialog onDismiss={close} leastDestructiveRef={cancelRef}>\n          <AlertDialogLabel>Please Confirm!</AlertDialogLabel>\n\n          <AlertDialogDescription>\n            Are you sure you want to delete something? This action is permanent,\n            and we\'re totally not just flipping a field called "deleted" to\n            "true" in our database, we\'re actually deleting something.\n          </AlertDialogDescription>\n\n          <div className="alert-buttons">\n            <button onClick={destroyStuff}>Yes, delete</button>{" "}\n            <button ref={cancelRef} onClick={close}>\n              Nevermind, don\'t delete.\n            </button>\n          </div>\n        </AlertDialog>\n      )}\n    </div>\n  );\n}\n')),Object(a.b)("h5",{id:"alertdialog-leastdestructiveref"},"AlertDialog leastDestructiveRef"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"leastDestructiveRef?: React.RefObject<HTMLElement>;")),Object(a.b)("p",null,"To prevent accidental data loss, an alert dialog should focus the least destructive action button when it opens."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'// jsx-demo\nfunction Example(props) {\n  const [showDialog, setShowDialog] = React.useState(false);\n\n  // we\'ll pass this ref to both AlertDialog and our button\n  const cancelRef = React.useRef();\n\n  const open = () => setShowDialog(true);\n  const close = () => setShowDialog(false);\n\n  return (\n    <div>\n      <button onClick={open}>Publish something</button>\n\n      {showDialog && (\n        <AlertDialog leastDestructiveRef={cancelRef}>\n          <AlertDialogLabel>Please Confirm!</AlertDialogLabel>\n\n          <AlertDialogDescription>\n            Are you sure you want to publish this thing?\n          </AlertDialogDescription>\n\n          <div className="alert-buttons">\n            <button onClick={this.close}>Yes, publish and keep editing</button>{" "}\n            <button onClick={this.close}>Yes, publish and view</button>{" "}\n            <button ref={cancelRef} onClick={close}>\n              Don\'t publish, keep working\n            </button>\n          </div>\n        </AlertDialog>\n      )}\n    </div>\n  );\n}\n')),Object(a.b)("h5",{id:"alertdialog-children"},"AlertDialog children"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"children: React.ReactNode")),Object(a.b)("p",null,"Accepts any renderable content but should generally be restricted to ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogLabel"),", ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogDescription")," and action buttons, other content might not be announced to the user by the screen reader."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<AlertDialog>\n  <AlertDialogLabel>Please Confirm!</AlertDialogLabel>\n\n  <AlertDialogDescription>A longer message</AlertDialogDescription>\n\n  <div>\n    <button onClick={destroyStuff}>A Destructive Action</button>{" "}\n    <button ref={leastDestructiveRef}>Least Destructive Action</button>\n  </div>\n</AlertDialog>\n')),Object(a.b)("h3",{id:"alertdialoglabel"},"AlertDialogLabel"),Object(a.b)("p",null,'The first thing ready by screen readers when the dialog opens, usually the title of the dialog like "Warning!" or "Please confirm!".'),Object(a.b)("p",null,"This is required. The ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialog")," will throw an error if no label is rendered."),Object(a.b)("h4",{id:"alertdialoglabel-css-selectors"},"AlertDialogLabel CSS Selectors"),Object(a.b)("p",null,"Please see the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/styling"}),"styling guide"),"."),Object(a.b)("p",null,"Use the following CSS to target the label:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"[data-reach-alert-dialog-label] {\n}\n")),Object(a.b)("h4",{id:"alertdialoglabel-props"},"AlertDialogLabel Props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Prop"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialoglabel-div-props"}),Object(a.b)("inlineCode",{parentName:"a"},"div")," props"))))),Object(a.b)("h5",{id:"alertdialoglabel-div-props"},"AlertDialogLabel div props"),Object(a.b)("p",null,"All props are spread to an underlying ",Object(a.b)("inlineCode",{parentName:"p"},"div")," element."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<AlertDialogLabel className="alert-label" />\n')),Object(a.b)("h3",{id:"alertdialogdescription"},"AlertDialogDescription"),Object(a.b)("p",null,'Additional content read by screen readers, usually a longer description about what you need from the user like "This action is permanent, are you sure?" etc.'),Object(a.b)("h4",{id:"alertdialogdescription-css-selectors"},"AlertDialogDescription CSS Selectors"),Object(a.b)("p",null,"Please see the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/styling"}),"styling guide"),"."),Object(a.b)("p",null,"Use the following CSS to target the description:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"[data-reach-alert-dialog-description] {\n}\n")),Object(a.b)("h4",{id:"alertdialogdescription-props"},"AlertDialogDescription Props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Prop"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialogdescription-div-props"}),Object(a.b)("inlineCode",{parentName:"a"},"div")," props"))))),Object(a.b)("h5",{id:"alertdialogdescription-div-props"},"AlertDialogDescription div props"),Object(a.b)("p",null,"All props are spread to an underlying ",Object(a.b)("inlineCode",{parentName:"p"},"div")," element."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<AlertDialogDescription className="alert-description" />\n')),Object(a.b)("h3",{id:"alertdialogoverlay"},"AlertDialogOverlay"),Object(a.b)("p",null,"Low-level component if you need more control over the styles or rendering of the dialog overlay. In the following example we use the AlertDialogOverlay and AlertDialogContent to have more control over the styles."),Object(a.b)("p",null,"Note: You must render an ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogContent")," inside."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'// jsx-demo\nfunction Example(props) {\n  const [showDialog, setShowDialog] = React.useState(false);\n\n  // we\'ll pass this ref to both AlertDialog and our button\n  const cancelRef = React.useRef();\n\n  const open = () => setShowDialog(true);\n  const close = () => setShowDialog(false);\n\n  return (\n    <div>\n      <button onClick={open}>Delete something</button>\n\n      {showDialog && (\n        <AlertDialogOverlay\n          style={{ background: "hsla(0, 50%, 50%, 0.85)" }}\n          leastDestructiveRef={cancelRef}\n        >\n          <AlertDialogContent style={{ background: "#f0f0f0" }}>\n            <AlertDialogLabel>Please Confirm!</AlertDialogLabel>\n\n            <AlertDialogDescription>\n              Are you sure you want delete stuff, it will be permanent.\n            </AlertDialogDescription>\n\n            <div className="alert-buttons">\n              <button onClick={close}>Yes, delete</button>{" "}\n              <button ref={cancelRef} onClick={close}>\n                Nevermind\n              </button>\n            </div>\n          </AlertDialogContent>\n        </AlertDialogOverlay>\n      )}\n    </div>\n  );\n}\n')),Object(a.b)("h4",{id:"alertdialogoverlay-css-selectors"},"AlertDialogOverlay CSS Selectors"),Object(a.b)("p",null,"Please see the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/styling"}),"styling guide"),"."),Object(a.b)("p",null,"Use the following CSS to target the overlay:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"[data-reach-alert-dialog-overlay] {\n}\n")),Object(a.b)("h4",{id:"alertdialogoverlay-props"},"AlertDialogOverlay Props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Prop"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Required"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialogoverlay-dialogoverlay-props"}),Object(a.b)("inlineCode",{parentName:"a"},"DialogOverlay")," props")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialogoverlay-isopen"}),Object(a.b)("inlineCode",{parentName:"a"},"isOpen"))),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"bool")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialogoverlay-ondismiss"}),Object(a.b)("inlineCode",{parentName:"a"},"onDismiss"))),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"func")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialogoverlay-leastdestructiveref"}),Object(a.b)("inlineCode",{parentName:"a"},"leastDestructiveRef"))),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"ref")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialogoverlay-children"}),Object(a.b)("inlineCode",{parentName:"a"},"children"))),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"node")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"true")))),Object(a.b)("h5",{id:"alertdialogoverlay-dialogoverlay-props"},"AlertDialogOverlay DialogOverlay props"),Object(a.b)("p",null,"Any props not listed above will be spread onto the underlying ",Object(a.b)("inlineCode",{parentName:"p"},"DialogOverlay"),", and in turn spread onto the underlying ",Object(a.b)("inlineCode",{parentName:"p"},"div")," element."),Object(a.b)("p",null,"See ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/dialog#dialogoverlay-props"}),"documentation for ",Object(a.b)("inlineCode",{parentName:"a"},"DialogOverlay")," props")," for more information."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<AlertDialogOverlay className="light-modal" />\n')),Object(a.b)("h5",{id:"alertdialogoverlay-isopen"},"AlertDialogOverlay isOpen"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"isOpen?: boolean")),Object(a.b)("p",null,"Same as ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"#alertdialog-isopen"}),Object(a.b)("inlineCode",{parentName:"a"},"AlertDialog")," ",Object(a.b)("inlineCode",{parentName:"a"},"isOpen")),". Defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("h5",{id:"alertdialogoverlay-ondismiss"},"AlertDialogOverlay onDismiss"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"onDismiss?: (event?: React.SyntheticEvent) => void")),Object(a.b)("p",null,"Same as ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"#alertdialog-ondismiss"}),Object(a.b)("inlineCode",{parentName:"a"},"AlertDialog")," ",Object(a.b)("inlineCode",{parentName:"a"},"onDismiss"))),Object(a.b)("h5",{id:"alertdialogoverlay-leastdestructiveref"},"AlertDialogOverlay leastDestructiveRef"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"leastDestructiveRef?: React.RefObject<HTMLElement>")),Object(a.b)("p",null,"Same as ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"#alertdialog-leastdestructiveref"}),Object(a.b)("inlineCode",{parentName:"a"},"AlertDialog")," ",Object(a.b)("inlineCode",{parentName:"a"},"leastDestructiveRef"))),Object(a.b)("h5",{id:"alertdialogoverlay-children"},"AlertDialogOverlay children"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"children: React.ReactNode")),Object(a.b)("p",null,"Should be an ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogContent"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<AlertDialogOverlay>\n  <AlertDialogContent />\n</AlertDialogOverlay>\n")),Object(a.b)("h3",{id:"alertdialogcontent"},"AlertDialogContent"),Object(a.b)("p",null,"Low-level component if you need more control over the styles or rendering of the dialog content."),Object(a.b)("p",null,"Note: Must be a child of ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogOverlay"),"."),Object(a.b)("p",null,"Note: You only need to use this when you are also styling ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialogOverlay"),", otherwise you can use the high-level ",Object(a.b)("inlineCode",{parentName:"p"},"AlertDialog")," component and pass the props to it."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<AlertDialogOverlay style={someSpecificStyles}>\n  <AlertDialogContent className={orAClassName} />\n</AlertDialogOverlay>\n")),Object(a.b)("h4",{id:"alertdialogcontent-css-selectors"},"AlertDialogContent CSS Selectors"),Object(a.b)("p",null,"Please see the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/styling"}),"styling guide"),"."),Object(a.b)("p",null,"Use the following CSS to target the content:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"[data-reach-alert-dialog-content] {\n}\n")),Object(a.b)("h4",{id:"alertdialogcontent-props"},"AlertDialogContent Props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Prop"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Required"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialogcontent-dialogcontent-props"}),Object(a.b)("inlineCode",{parentName:"a"},"DialogContent")," props")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("a",Object.assign({parentName:"td"},{href:"#alertdialogcontent-element-props"}),Object(a.b)("inlineCode",{parentName:"a"},"children"))),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"node")),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"true")))),Object(a.b)("h5",{id:"alertdialogcontent-dialogcontent-props"},"AlertDialogContent DialogContent props"),Object(a.b)("p",null,"Any props not listed above will be spread onto the underlying ",Object(a.b)("inlineCode",{parentName:"p"},"DialogContent")," element, and then again onto the underlying ",Object(a.b)("inlineCode",{parentName:"p"},"div"),"."),Object(a.b)("p",null,"See ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/dialog#dialogcontent-props"}),"documentation for ",Object(a.b)("inlineCode",{parentName:"a"},"DialogContent")," props")," for more information."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<AlertDialogContent className="nice-border" />\n')),Object(a.b)("h5",{id:"alertdialogcontent-children"},"AlertDialogContent children"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"children: React.ReactNode")),Object(a.b)("p",null,"Same as ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"#alertdialog-children"}),Object(a.b)("inlineCode",{parentName:"a"},"AlertDialog")," ",Object(a.b)("inlineCode",{parentName:"a"},"children"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-alert-dialog-mdx-08ba3759fc3ca8fb1dec.js.map
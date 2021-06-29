(self.webpackChunkreach_ui_website=self.webpackChunkreach_ui_website||[]).push([[505],{1930:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return c}});var a=n(2265),l=(n(7294),n(4983)),r=n(1255),o=n(2335),i=n(6182),s=["components"],p={},d={_frontmatter:p},g=r.Z;function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)(g,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{title:"Alert Dialog",description:"Accessible alert dialog component for React",mdxType:"SEO"}),(0,l.kt)("h1",{id:"alert-dialog"},"Alert Dialog"),(0,l.kt)(i.Nt,{mdxType:"TOC"},(0,l.kt)(i.B$,{mdxType:"TOCList"},(0,l.kt)(i.G6,{href:"#alertdialog",mdxType:"TOCLink"},"AlertDialog"),(0,l.kt)(i.G6,{href:"#alertdialogcontent",mdxType:"TOCLink"},"AlertDialogContent"),(0,l.kt)(i.G6,{href:"#alertdialogdescription",mdxType:"TOCLink"},"AlertDialogDescription"),(0,l.kt)(i.G6,{href:"#alertdialogoverlay",mdxType:"TOCLink"},"AlertDialogOverlay"),(0,l.kt)(i.G6,{href:"#alertdialogcontent",mdxType:"TOCLink"},"AlertDialogContent"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Source: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/reach/reach-ui/tree/main/packages/alert-dialog"},"https://github.com/reach/reach-ui/tree/main/packages/alert-dialog")),(0,l.kt)("li",{parentName:"ul"},"WAI-ARIA: ",(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#alertdialog"},"https://www.w3.org/TR/wai-aria-practices-1.2/#alertdialog"))),(0,l.kt)("p",null,'A modal dialog that interrupts the user\'s workflow to get a response, usually some sort of confirmation. This is different than a typical Dialog in that it requires some user response, like "Save", or "Cancel", etc.'),(0,l.kt)("p",null,"Most of the time you'll use ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialog"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogLabel"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogDescription")," together. If you need more control over the styling of the modal you can drop down a level and use ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogOverlay")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogContent")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialog"),"."),(0,l.kt)("p",null,"When a Dialog opens, the ",(0,l.kt)("em",{parentName:"p"},"least destructive")," action should be focused so that if a user accidentally hits enter when the dialog opens no damage is done. This is accomplished with the ",(0,l.kt)("inlineCode",{parentName:"p"},"leastDestructiveRef")," prop."),(0,l.kt)("p",null,"Every dialog must render an ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogLabel")," so the screen reader knows what to say about the dialog. If an ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogDescription")," is also rendered, the screen reader will also announce that. If you render more than these two elements and some buttons, the screen reader might not announce it so it's important to keep the content inside of ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogLabel")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogDescription"),"."),(0,l.kt)("p",null,"This is built on top of ",(0,l.kt)("a",{parentName:"p",href:"/dialog"},"Dialog"),", so ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialog")," spreads its props and renders a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dialog"),", same for ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogOverlay")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"DialogOverlay"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogContent")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"DialogContent"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\nfunction Example(props) {\n  const [showDialog, setShowDialog] = React.useState(false);\n  const cancelRef = React.useRef();\n  const open = () => setShowDialog(true);\n  const close = () => setShowDialog(false);\n\n  return (\n    <div>\n      <button onClick={open}>Delete something</button>\n\n      {showDialog && (\n        <AlertDialog leastDestructiveRef={cancelRef}>\n          <AlertDialogLabel>Please Confirm!</AlertDialogLabel>\n\n          <AlertDialogDescription>\n            Are you sure you want to delete something? This action is permanent,\n            and we\'re totally not just flipping a field called "deleted" to\n            "true" in our database, we\'re actually deleting something.\n          </AlertDialogDescription>\n\n          <div className="alert-buttons">\n            <button onClick={close}>Yes, delete</button>{" "}\n            <button ref={cancelRef} onClick={close}>\n              Nevermind, don\'t delete.\n            </button>\n          </div>\n        </AlertDialog>\n      )}\n    </div>\n  );\n}\n')),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"From the command line in your project directory, run ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install @reach/alert-dialog")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn add @reach/alert-dialog"),". Then import the components that you need:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @reach/alert-dialog\n# or\nyarn add @reach/alert-dialog\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  AlertDialog,\n  AlertDialogLabel,\n  AlertDialogDescription,\n  AlertDialogOverlay,\n  AlertDialogContent,\n} from "@reach/alert-dialog";\n')),(0,l.kt)("h2",{id:"component-api"},"Component API"),(0,l.kt)("h3",{id:"alertdialog"},"AlertDialog"),(0,l.kt)("p",null,"High-level component to render an alert dialog."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<AlertDialog leastDestructiveRef={someRef}>\n  <AlertDialogLabel />\n  <AlertDialogContent />\n</AlertDialog>\n")),(0,l.kt)("h4",{id:"alertdialog-props"},"AlertDialog Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialog-dialog-props"},(0,l.kt)("inlineCode",{parentName:"a"},"Dialog")," props")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialog-isopen"},(0,l.kt)("inlineCode",{parentName:"a"},"isOpen"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialog-ondismiss"},(0,l.kt)("inlineCode",{parentName:"a"},"onDismiss"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"func")),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialog-leastdestructiveref"},(0,l.kt)("inlineCode",{parentName:"a"},"leastDestructiveRef"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"func")),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#dialog-element-props"},(0,l.kt)("inlineCode",{parentName:"a"},"children"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"node")),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h5",{id:"alertdialog-dialog-props"},"AlertDialog Dialog props"),(0,l.kt)("p",null,"Any props not listed above will be spread onto the underlying ",(0,l.kt)("inlineCode",{parentName:"p"},"Dialog")," element, which in turn is spread onto the underlying ",(0,l.kt)("inlineCode",{parentName:"p"},"div[data-reach-dialog-content]"),"."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/dialog#dialog-props"},"documentation for ",(0,l.kt)("inlineCode",{parentName:"a"},"Dialog")," props")," for more information."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<AlertDialog style={{ color: "red" }}>\n  <AlertDialogLabel>\n    My text is red because the style prop got applied to the div underneath\n  </AlertDialogLabel>\n</AlertDialog>\n')),(0,l.kt)("h5",{id:"alertdialog-isopen"},"AlertDialog isOpen"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"isOpen?: boolean")),(0,l.kt)("p",null,"Controls whether the dialog is open or not. Defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<AlertDialog isOpen={true}>\n  <AlertDialogLabel>I will be open</AlertDialogLabel>\n</AlertDialog>\n\n<AlertDialog isOpen={false}>\n  <AlertDialogLabel>I will be closed</AlertDialogLabel>\n</AlertDialog>\n")),(0,l.kt)("p",null,"Note, however, that the dialog will not render to the DOM when ",(0,l.kt)("inlineCode",{parentName:"p"},"isOpen={false}"),", but you may want to save on the number of elements created in your render function. If you'd rather not have the dialog always rendered, you can put a guard in front of it and only render when it should be open. In this case you don’t need the ",(0,l.kt)("inlineCode",{parentName:"p"},"isOpen")," prop at all."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"{\n  state.confirmDelete && (\n    <AlertDialog isOpen={true}>\n      <AlertDialogLabel>I will be open</AlertDialogLabel>\n    </AlertDialog>\n  );\n}\n")),(0,l.kt)("p",null,"You should probably do this when your dialog contains a lot of elements. It's also useful for transition animations."),(0,l.kt)("h5",{id:"alertdialog-ondismiss"},"AlertDialog onDismiss"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"onDismiss?: (event?: React.SyntheticEvent) => void;")),(0,l.kt)("p",null,"When the user clicks outside the modal or hits the escape key, this function will be called. If you want the modal to close, you’ll need to set state."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"IMPORTANT"),": Ensure that ",(0,l.kt)("inlineCode",{parentName:"p"},"onDismiss")," and the click handler of the ",(0,l.kt)("inlineCode",{parentName:"p"},"leastDestructiveRef")," are identical!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\nfunction Example(props) {\n  const [showDialog, setShowDialog] = React.useState(false);\n  const cancelRef = React.useRef();\n\n  const open = () => setShowDialog(true);\n  const destroyStuff = () => {\n    console.log("Destroyed!");\n    setShowDialog(false);\n  };\n  // make sure `close` and the `onClick` of the\n  // `leastDestructiveRef` are identical, best to just\n  // pass them both the same function\n  const close = () => setShowDialog(false);\n\n  return (\n    <div>\n      <button onClick={open}>Delete something</button>\n\n      {showDialog && (\n        <AlertDialog onDismiss={close} leastDestructiveRef={cancelRef}>\n          <AlertDialogLabel>Please Confirm!</AlertDialogLabel>\n\n          <AlertDialogDescription>\n            Are you sure you want to delete something? This action is permanent,\n            and we\'re totally not just flipping a field called "deleted" to\n            "true" in our database, we\'re actually deleting something.\n          </AlertDialogDescription>\n\n          <div className="alert-buttons">\n            <button onClick={destroyStuff}>Yes, delete</button>{" "}\n            <button ref={cancelRef} onClick={close}>\n              Nevermind, don\'t delete.\n            </button>\n          </div>\n        </AlertDialog>\n      )}\n    </div>\n  );\n}\n')),(0,l.kt)("h5",{id:"alertdialog-leastdestructiveref"},"AlertDialog leastDestructiveRef"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"leastDestructiveRef?: React.RefObject<HTMLElement>;")),(0,l.kt)("p",null,"To prevent accidental data loss, an alert dialog should focus the least destructive action button when it opens."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\nfunction Example(props) {\n  const [showDialog, setShowDialog] = React.useState(false);\n\n  // we\'ll pass this ref to both AlertDialog and our button\n  const cancelRef = React.useRef();\n\n  const open = () => setShowDialog(true);\n  const close = () => setShowDialog(false);\n\n  return (\n    <div>\n      <button onClick={open}>Publish something</button>\n\n      {showDialog && (\n        <AlertDialog leastDestructiveRef={cancelRef}>\n          <AlertDialogLabel>Please Confirm!</AlertDialogLabel>\n\n          <AlertDialogDescription>\n            Are you sure you want to publish this thing?\n          </AlertDialogDescription>\n\n          <div className="alert-buttons">\n            <button onClick={this.close}>Yes, publish and keep editing</button>{" "}\n            <button onClick={this.close}>Yes, publish and view</button>{" "}\n            <button ref={cancelRef} onClick={close}>\n              Don\'t publish, keep working\n            </button>\n          </div>\n        </AlertDialog>\n      )}\n    </div>\n  );\n}\n')),(0,l.kt)("h5",{id:"alertdialog-children"},"AlertDialog children"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"children: React.ReactNode")),(0,l.kt)("p",null,"Accepts any renderable content but should generally be restricted to ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogLabel"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogDescription")," and action buttons, other content might not be announced to the user by the screen reader."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<AlertDialog>\n  <AlertDialogLabel>Please Confirm!</AlertDialogLabel>\n\n  <AlertDialogDescription>A longer message</AlertDialogDescription>\n\n  <div>\n    <button onClick={destroyStuff}>A Destructive Action</button>{" "}\n    <button ref={leastDestructiveRef}>Least Destructive Action</button>\n  </div>\n</AlertDialog>\n')),(0,l.kt)("h3",{id:"alertdialoglabel"},"AlertDialogLabel"),(0,l.kt)("p",null,'The first thing ready by screen readers when the dialog opens, usually the title of the dialog like "Warning!" or "Please confirm!".'),(0,l.kt)("p",null,"This is required. The ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialog")," will throw an error if no label is rendered."),(0,l.kt)("h4",{id:"alertdialoglabel-css-selectors"},"AlertDialogLabel CSS Selectors"),(0,l.kt)("p",null,"Please see the ",(0,l.kt)("a",{parentName:"p",href:"/styling"},"styling guide"),"."),(0,l.kt)("p",null,"Use the following CSS to target the label:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"[data-reach-alert-dialog-label] {\n}\n")),(0,l.kt)("h4",{id:"alertdialoglabel-props"},"AlertDialogLabel Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialoglabel-div-props"},(0,l.kt)("inlineCode",{parentName:"a"},"div")," props"))))),(0,l.kt)("h5",{id:"alertdialoglabel-div-props"},"AlertDialogLabel div props"),(0,l.kt)("p",null,"All props are spread to an underlying ",(0,l.kt)("inlineCode",{parentName:"p"},"div")," element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<AlertDialogLabel className="alert-label" />\n')),(0,l.kt)("h3",{id:"alertdialogdescription"},"AlertDialogDescription"),(0,l.kt)("p",null,'Additional content read by screen readers, usually a longer description about what you need from the user like "This action is permanent, are you sure?" etc.'),(0,l.kt)("h4",{id:"alertdialogdescription-css-selectors"},"AlertDialogDescription CSS Selectors"),(0,l.kt)("p",null,"Please see the ",(0,l.kt)("a",{parentName:"p",href:"/styling"},"styling guide"),"."),(0,l.kt)("p",null,"Use the following CSS to target the description:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"[data-reach-alert-dialog-description] {\n}\n")),(0,l.kt)("h4",{id:"alertdialogdescription-props"},"AlertDialogDescription Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialogdescription-div-props"},(0,l.kt)("inlineCode",{parentName:"a"},"div")," props"))))),(0,l.kt)("h5",{id:"alertdialogdescription-div-props"},"AlertDialogDescription div props"),(0,l.kt)("p",null,"All props are spread to an underlying ",(0,l.kt)("inlineCode",{parentName:"p"},"div")," element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<AlertDialogDescription className="alert-description" />\n')),(0,l.kt)("h3",{id:"alertdialogoverlay"},"AlertDialogOverlay"),(0,l.kt)("p",null,"Low-level component if you need more control over the styles or rendering of the dialog overlay. In the following example we use the AlertDialogOverlay and AlertDialogContent to have more control over the styles."),(0,l.kt)("p",null,"Note: You must render an ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogContent")," inside."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\nfunction Example(props) {\n  const [showDialog, setShowDialog] = React.useState(false);\n\n  // we\'ll pass this ref to both AlertDialog and our button\n  const cancelRef = React.useRef();\n\n  const open = () => setShowDialog(true);\n  const close = () => setShowDialog(false);\n\n  return (\n    <div>\n      <button onClick={open}>Delete something</button>\n\n      {showDialog && (\n        <AlertDialogOverlay\n          style={{ background: "hsla(0, 50%, 50%, 0.85)" }}\n          leastDestructiveRef={cancelRef}\n        >\n          <AlertDialogContent style={{ background: "#f0f0f0" }}>\n            <AlertDialogLabel>Please Confirm!</AlertDialogLabel>\n\n            <AlertDialogDescription>\n              Are you sure you want delete stuff, it will be permanent.\n            </AlertDialogDescription>\n\n            <div className="alert-buttons">\n              <button onClick={close}>Yes, delete</button>{" "}\n              <button ref={cancelRef} onClick={close}>\n                Nevermind\n              </button>\n            </div>\n          </AlertDialogContent>\n        </AlertDialogOverlay>\n      )}\n    </div>\n  );\n}\n')),(0,l.kt)("h4",{id:"alertdialogoverlay-css-selectors"},"AlertDialogOverlay CSS Selectors"),(0,l.kt)("p",null,"Please see the ",(0,l.kt)("a",{parentName:"p",href:"/styling"},"styling guide"),"."),(0,l.kt)("p",null,"Use the following CSS to target the overlay:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"[data-reach-alert-dialog-overlay] {\n}\n")),(0,l.kt)("h4",{id:"alertdialogoverlay-props"},"AlertDialogOverlay Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialogoverlay-dialogoverlay-props"},(0,l.kt)("inlineCode",{parentName:"a"},"DialogOverlay")," props")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialogoverlay-isopen"},(0,l.kt)("inlineCode",{parentName:"a"},"isOpen"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialogoverlay-ondismiss"},(0,l.kt)("inlineCode",{parentName:"a"},"onDismiss"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"func")),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialogoverlay-leastdestructiveref"},(0,l.kt)("inlineCode",{parentName:"a"},"leastDestructiveRef"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ref")),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialogoverlay-children"},(0,l.kt)("inlineCode",{parentName:"a"},"children"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"node")),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h5",{id:"alertdialogoverlay-dialogoverlay-props"},"AlertDialogOverlay DialogOverlay props"),(0,l.kt)("p",null,"Any props not listed above will be spread onto the underlying ",(0,l.kt)("inlineCode",{parentName:"p"},"DialogOverlay"),", and in turn spread onto the underlying ",(0,l.kt)("inlineCode",{parentName:"p"},"div")," element."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/dialog#dialogoverlay-props"},"documentation for ",(0,l.kt)("inlineCode",{parentName:"a"},"DialogOverlay")," props")," for more information."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<AlertDialogOverlay className="light-modal" />\n')),(0,l.kt)("h5",{id:"alertdialogoverlay-isopen"},"AlertDialogOverlay isOpen"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"isOpen?: boolean")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",{parentName:"p",href:"#alertdialog-isopen"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertDialog")," ",(0,l.kt)("inlineCode",{parentName:"a"},"isOpen")),". Defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("h5",{id:"alertdialogoverlay-ondismiss"},"AlertDialogOverlay onDismiss"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"onDismiss?: (event?: React.SyntheticEvent) => void")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",{parentName:"p",href:"#alertdialog-ondismiss"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertDialog")," ",(0,l.kt)("inlineCode",{parentName:"a"},"onDismiss"))),(0,l.kt)("h5",{id:"alertdialogoverlay-leastdestructiveref"},"AlertDialogOverlay leastDestructiveRef"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"leastDestructiveRef?: React.RefObject<HTMLElement>")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",{parentName:"p",href:"#alertdialog-leastdestructiveref"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertDialog")," ",(0,l.kt)("inlineCode",{parentName:"a"},"leastDestructiveRef"))),(0,l.kt)("h5",{id:"alertdialogoverlay-children"},"AlertDialogOverlay children"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"children: React.ReactNode")),(0,l.kt)("p",null,"Should be an ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogContent"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<AlertDialogOverlay>\n  <AlertDialogContent />\n</AlertDialogOverlay>\n")),(0,l.kt)("h3",{id:"alertdialogcontent"},"AlertDialogContent"),(0,l.kt)("p",null,"Low-level component if you need more control over the styles or rendering of the dialog content."),(0,l.kt)("p",null,"Note: Must be a child of ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogOverlay"),"."),(0,l.kt)("p",null,"Note: You only need to use this when you are also styling ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialogOverlay"),", otherwise you can use the high-level ",(0,l.kt)("inlineCode",{parentName:"p"},"AlertDialog")," component and pass the props to it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<AlertDialogOverlay style={someSpecificStyles}>\n  <AlertDialogContent className={orAClassName} />\n</AlertDialogOverlay>\n")),(0,l.kt)("h4",{id:"alertdialogcontent-css-selectors"},"AlertDialogContent CSS Selectors"),(0,l.kt)("p",null,"Please see the ",(0,l.kt)("a",{parentName:"p",href:"/styling"},"styling guide"),"."),(0,l.kt)("p",null,"Use the following CSS to target the content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"[data-reach-alert-dialog-content] {\n}\n")),(0,l.kt)("h4",{id:"alertdialogcontent-props"},"AlertDialogContent Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialogcontent-dialogcontent-props"},(0,l.kt)("inlineCode",{parentName:"a"},"DialogContent")," props")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#alertdialogcontent-element-props"},(0,l.kt)("inlineCode",{parentName:"a"},"children"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"node")),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h5",{id:"alertdialogcontent-dialogcontent-props"},"AlertDialogContent DialogContent props"),(0,l.kt)("p",null,"Any props not listed above will be spread onto the underlying ",(0,l.kt)("inlineCode",{parentName:"p"},"DialogContent")," element, and then again onto the underlying ",(0,l.kt)("inlineCode",{parentName:"p"},"div"),"."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/dialog#dialogcontent-props"},"documentation for ",(0,l.kt)("inlineCode",{parentName:"a"},"DialogContent")," props")," for more information."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<AlertDialogContent className="nice-border" />\n')),(0,l.kt)("h5",{id:"alertdialogcontent-children"},"AlertDialogContent children"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"children: React.ReactNode")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",{parentName:"p",href:"#alertdialog-children"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertDialog")," ",(0,l.kt)("inlineCode",{parentName:"a"},"children"))))}c.isMDXComponent=!0},6182:function(e,t,n){"use strict";n.d(t,{Nt:function(){return c},B$:function(){return u},G6:function(){return m}});var a=n(5167),l=n(2265),r=n(7294),o=n(9042),i=["children","label"],s=["children","style"],p=["href","children"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){var t=e.children,n=e.label,a=void 0===n?"Table of Contents":n,s=(0,l.Z)(e,i);return r.createElement("nav",Object.assign({className:"toc"},s),r.createElement(o.Z,null,r.createElement("h2",null,a)),t)}function u(e){var t=e.children,n=e.style,a=void 0===n?{}:n,o=(0,l.Z)(e,s);return r.createElement("ul",Object.assign({style:g({display:"block",padding:0,listStyle:"none"},a)},o),t)}function m(e){var t=e.href,n=e.children,a=(0,l.Z)(e,p);return r.createElement("li",{style:{display:"inline-block",margin:0,padding:0}},r.createElement("a",Object.assign({href:t},a),n))}}}]);
//# sourceMappingURL=component---src-pages-alert-dialog-mdx-6ea8f4576c5e610acc33.js.map
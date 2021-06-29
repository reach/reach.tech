(self.webpackChunkreach_ui_website=self.webpackChunkreach_ui_website||[]).push([[217],{9473:function(n,e,t){"use strict";t.r(e),t.d(e,{_frontmatter:function(){return l},default:function(){return m}});var a=t(2265),o=(t(7294),t(4983)),i=t(1255),s=t(2335),r=["components"],l={},u={_frontmatter:l},p=i.Z;function m(n){var e=n.components,t=(0,a.Z)(n,r);return(0,o.kt)(p,Object.assign({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{title:"Animation",description:"Guidelines for animating components in Reach UI",mdxType:"SEO"}),(0,o.kt)("h1",{id:"animation"},"Animation"),(0,o.kt)("p",null,'Animation is usually boiled down to three phases: enter, update, exit. With Reach UI you\'re probably just after the "enter" and "exit" phases.'),(0,o.kt)("p",null,"You can achieve animation with CSS and/or composing with other React components. On this page we'll look at a few different approaches."),(0,o.kt)("h2",{id:"css-animations"},"CSS Animations"),(0,o.kt)("p",null,'You can animate the "enter" phase with just a little CSS.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"@keyframes slide-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.slide-down[data-reach-menu-list],\n.slide-down[data-reach-menu-items] {\n  border-radius: 5px;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .slide-down[data-reach-menu-list],\n  .slide-down[data-reach-menu-items] {\n    animation: slide-down 0.2s ease;\n  }\n}\n")),(0,o.kt)("p",null,"And then add the class to your menu:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\nfunction Example() {\n  return (\n    <Menu>\n      <MenuButton>\n        Actions <span aria-hidden>▾</span>\n      </MenuButton>\n      <MenuList className="slide-down">\n        <MenuItem onSelect={() => {}}>Start Video</MenuItem>\n        <MenuItem onSelect={() => {}}>Start Screenshare</MenuItem>\n        <MenuItem onSelect={() => {}}>Send a Message</MenuItem>\n      </MenuList>\n    </Menu>\n  );\n}\n')),(0,o.kt)("p",null,'However, you can\'t animate the "exit" phase with just CSS because React removes the element from the DOM immediately.'),(0,o.kt)("h2",{id:"css--recondition-phase"},"CSS + reCONDITION Phase"),(0,o.kt)("p",null,"You may want to use CSS for both the enter and exit phases. For this, we can combine some CSS with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Phased")," component from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/theKashey/recondition"},"reCONDITION"),"."),(0,o.kt)("p",null,"First add the CSS to define the animation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".slide-down {\n  opacity: 0;\n  transform: translateY(-10px);\n}\n\n.slide-down.enter {\n  opacity: 1;\n  transform: translateY(0px);\n}\n\n.slide-down.exit {\n  opacity: 0;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .slide-down {\n    transition-property: transform, opacity;\n    transition-duration: 300ms;\n  }\n}\n")),(0,o.kt)("p",null,"Then import the Phased component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Phased } from "recondition";\n')),(0,o.kt)("p",null,"Now we're ready to go:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\nfunction Example() {\n  // TODO: Update with Phased example\n  return (\n    <Menu>\n      <MenuButton>\n        Actions <span aria-hidden>▾</span>\n      </MenuButton>\n      <MenuList className="slide-down">\n        <MenuItem onSelect={() => {}}>Start Video</MenuItem>\n        <MenuItem onSelect={() => {}}>Start Screenshare</MenuItem>\n        <MenuItem onSelect={() => {}}>Send a Message</MenuItem>\n      </MenuList>\n    </Menu>\n  );\n}\n')),(0,o.kt)("h2",{id:"react-spring"},"React Spring"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\nfunction Example(props) {\n  const AnimatedDialogOverlay = animated(DialogOverlay);\n  const AnimatedDialogContent = animated(DialogContent);\n\n  const [showDialog, setShowDialog] = React.useState(false);\n  const transitions = useTransition(showDialog, {\n    from: { opacity: 0, y: -10 },\n    enter: { opacity: 1, y: 0 },\n    leave: { opacity: 0, y: 10 },\n  });\n  return (\n    <div>\n      <button onClick={() => setShowDialog(true)}>Show Dialog</button>\n      {transitions(\n        (styles, item) =>\n          item && (\n            <AnimatedDialogOverlay style={{ opacity: styles.opacity }}>\n              <AnimatedDialogContent\n                style={{\n                  transform: styles.y.to(\n                    (value) => `translate3d(0px, ${value}px, 0px)`\n                  ),\n                  border: "4px solid hsla(0, 0%, 0%, 0.5)",\n                  borderRadius: 10,\n                }}\n              >\n                <button onClick={() => setShowDialog(false)}>\n                  Close Dialog\n                </button>\n                <p>React Spring makes it too easy!</p>\n                <input type="text" />\n                <br />\n                <input type="text" />\n                <button>Ayyyyyy</button>\n              </AnimatedDialogContent>\n            </AnimatedDialogOverlay>\n          )\n      )}\n    </div>\n  );\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-animation-mdx-2cded641bc428a2935a5.js.map
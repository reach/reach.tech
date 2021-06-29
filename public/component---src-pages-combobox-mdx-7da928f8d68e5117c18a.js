(self.webpackChunkreach_ui_website=self.webpackChunkreach_ui_website||[]).push([[786],{1787:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return u},default:function(){return d}});var o=n(2265),a=(n(7294),n(4983)),l=n(1255),i=n(2335),r=n(6182),s=n(8819),p=n(3989),m=["components"],u={},b={_frontmatter:u},c=l.Z;function d(e){var t=e.components,n=(0,o.Z)(e,m);return(0,a.kt)(c,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"Combobox",description:"Accessible combobox (autocomplete or autosuggest) component for React",mdxType:"SEO"}),(0,a.kt)("h1",{id:"combobox"},"Combobox"),(0,a.kt)(r.Nt,{mdxType:"TOC"},(0,a.kt)(r.B$,{mdxType:"TOCList"},(0,a.kt)(r.G6,{href:"#combobox-1",mdxType:"TOCLink"},"Combobox"),(0,a.kt)(r.G6,{href:"#comboboxinput",mdxType:"TOCLink"},"ComboboxInput"),(0,a.kt)(r.G6,{href:"#comboboxpopover",mdxType:"TOCLink"},"ComboboxPopover"),(0,a.kt)(r.G6,{href:"#comboboxlist",mdxType:"TOCLink"},"ComboboxList"),(0,a.kt)(r.G6,{href:"#comboboxoption",mdxType:"TOCLink"},"ComboboxOption"),(0,a.kt)(r.G6,{href:"#comboboxoptiontext",mdxType:"TOCLink"},"ComboboxOptionText"),(0,a.kt)(r.G6,{href:"#usecomboboxcontext",mdxType:"TOCLink"},"useComboboxContext"),(0,a.kt)(r.G6,{href:"#usecomboboxoptioncontext",mdxType:"TOCLink"},"useComboboxOptionContext"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Source: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/reach/reach-ui/tree/main/packages/combobox"},"https://github.com/reach/reach-ui/tree/main/packages/combobox")),(0,a.kt)("li",{parentName:"ul"},"WAI-ARIA: ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#combobox"},"https://www.w3.org/TR/wai-aria-practices-1.2/#combobox"))),(0,a.kt)("p",null,"Accessible combobox (autocomplete or autosuggest) component for React."),(0,a.kt)("p",null,"A combobox is the combination of an ",(0,a.kt)("inlineCode",{parentName:"p"},'<input type="text"/>')," and a list. The list is designed to help the user arrive at a value, but the value does not necessarily have to come from that list. Don't think of it like a ",(0,a.kt)("inlineCode",{parentName:"p"},"<select/>"),", but more of an ",(0,a.kt)("inlineCode",{parentName:"p"},'<input type="text"/>')," with some suggestions. You can, however, validate that the value comes from the list, that's up to your app."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"From the command line in your project directory, run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install @reach/combobox")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add @reach/combobox"),". Then import the components and styles that you need:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @reach/combobox\n# or\nyarn add @reach/combobox\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  Combobox,\n  ComboboxInput,\n  ComboboxPopover,\n  ComboboxList,\n  ComboboxOption,\n  ComboboxOptionText,\n} from "@reach/combobox";\nimport "@reach/combobox/styles.css";\n')),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"Reach UI aims to handle most ARIA and accessibility concerns so that developers don't have to worry about it. Labeling is often the one thing Reach can't do for you by default since there are many ways to accomplish it, and some of those methods require app-level context."),(0,a.kt)("p",null,"However, we still aim to make accessibility as easy as possible. Labels for the compound ",(0,a.kt)("inlineCode",{parentName:"p"},"Combobox")," component can go on the parent and we will forward the label to the correct nested component where it belongs."),(0,a.kt)("p",null,"For instance, instead of adding ",(0,a.kt)("inlineCode",{parentName:"p"},"aria-label")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"<ComboboxInput>"),", we can add it to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Combobox>"),". The same goes for ",(0,a.kt)("inlineCode",{parentName:"p"},"aria-labelledby"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Combobox aria-label="choose a fruit">\n  <ComboboxInput />\n  <ComboboxPopover>\n    <ComboboxList>\n      <ComboboxOption value="Apple" />\n      <ComboboxOption value="Banana" />\n    </ComboboxList>\n  </ComboboxPopover>\n</Combobox>\n')),(0,a.kt)("p",null,"One benefit reaped from this pattern is that it alleviates the need for developers to think about where the ",(0,a.kt)("inlineCode",{parentName:"p"},"aria-label")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"aria-labelledby")," attributes belong in the component tree. Another benefit is that if the ARIA spec changes in the future (as it did from 1.1 to 1.2 for ",(0,a.kt)("inlineCode",{parentName:"p"},"Combobox"),"), Reach doesn't introduce a breaking API change to make accessibility improvements."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," You can still pass either ",(0,a.kt)("inlineCode",{parentName:"p"},"aria-label")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"aria-labelledby")," directly to ",(0,a.kt)("inlineCode",{parentName:"p"},"ComboboxInput")," if you'd prefer and those values will override either respective prop passed into ",(0,a.kt)("inlineCode",{parentName:"p"},"Combobox"),", though we discourage this. It's helpful for the component's context to keep a reference to its label. We may remove this option in a future release.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To get you started, let's take a look at a few examples that grow from simple to complex, after the examples you can see the API for each component."),(0,a.kt)("h3",{id:"basic-fixed-list-combobox"},"Basic, Fixed List Combobox"),(0,a.kt)("p",null,"Like a ",(0,a.kt)("inlineCode",{parentName:"p"},"<table><tr><td/></tr></table>"),", a full combobox is made up of multiple components. This example demonstrates all of the pieces you need in the simplest form possible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\nfunction Example() {\n  return (\n    <div>\n      <h4 id="demo">Basic, Fixed List Combobox</h4>\n      <Combobox aria-labelledby="demo">\n        <ComboboxInput />\n        <ComboboxPopover>\n          <ComboboxList>\n            <ComboboxOption value="Apple" />\n            <ComboboxOption value="Banana" />\n            <ComboboxOption value="Orange" />\n            <ComboboxOption value="Pineapple" />\n            <ComboboxOption value="Kiwi" />\n          </ComboboxList>\n        </ComboboxPopover>\n      </Combobox>\n    </div>\n  );\n}\n')),(0,a.kt)("h3",{id:"custom-rendering-in-comboboxoption"},"Custom Rendering in ComboboxOption"),(0,a.kt)("p",null,"Sometimes your items need to be more than just text, in these cases you can pass children to ",(0,a.kt)("inlineCode",{parentName:"p"},"ComboboxOption"),", and then render a ",(0,a.kt)("inlineCode",{parentName:"p"},"<ComboboxOptionText/>")," to keep the built-in text highlighting. Only the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," is used to match, not the children."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\nfunction Example() {\n  return (\n    <Combobox aria-label="custom option demo">\n      <ComboboxInput\n        placeholder="Custom Option Rendering"\n        style={{ width: 300 }}\n      />\n      <ComboboxPopover>\n        <ComboboxList>\n          <ComboboxOption value="Apple">\n            🍎 <ComboboxOptionText />\n          </ComboboxOption>\n          <ComboboxOption value="Banana">\n            🍌 <ComboboxOptionText />\n          </ComboboxOption>\n          <ComboboxOption value="Orange">\n            🍊 <ComboboxOptionText />\n          </ComboboxOption>\n          <ComboboxOption value="Pineapple">\n            🍍 <ComboboxOptionText />\n          </ComboboxOption>\n          <ComboboxOption value="Kiwi">\n            🥝 <ComboboxOptionText />\n          </ComboboxOption>\n        </ComboboxList>\n      </ComboboxPopover>\n    </Combobox>\n  );\n}\n')),(0,a.kt)("h3",{id:"clientside-search"},"Clientside Search"),(0,a.kt)("p",null,"This demo searches a client-side list of all US Cities. Combobox does not implement any matching on your list (aside from highlighting the matched phrases in an option). Instead, you render an Option for each result you want in the list. So your job is to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Establish the search term state"),(0,a.kt)("li",{parentName:"ul"},"Match the search to your list"),(0,a.kt)("li",{parentName:"ul"},"Render a ",(0,a.kt)("inlineCode",{parentName:"li"},"ComboboxOption")," for each match")),(0,a.kt)("p",null,"There is nothing special about managing state for a combobox, it's like managing state for any other list in your app. As the input changes, you figure out what state you need, then render as many ComboboxOption elements as you want."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\n(() => {\n  function Example() {\n    const [term, setTerm] = React.useState("");\n    const results = useCityMatch(term);\n    const handleChange = (event) => setTerm(event.target.value);\n\n    return (\n      <div>\n        <h4>Clientside Search</h4>\n        <Combobox aria-label="Cities">\n          <ComboboxInput\n            className="city-search-input"\n            onChange={handleChange}\n          />\n          {results && (\n            <ComboboxPopover className="shadow-popup">\n              {results.length > 0 ? (\n                <ComboboxList>\n                  {results.slice(0, 10).map((result, index) => (\n                    <ComboboxOption\n                      key={index}\n                      value={`${result.city}, ${result.state}`}\n                    />\n                  ))}\n                </ComboboxList>\n              ) : (\n                <span style={{ display: "block", margin: 8 }}>\n                  No results found\n                </span>\n              )}\n            </ComboboxPopover>\n          )}\n        </Combobox>\n      </div>\n    );\n  }\n\n  function useCityMatch(term) {\n    const throttledTerm = useThrottle(term, 100);\n    return React.useMemo(\n      () =>\n        term.trim() === ""\n          ? null\n          : matchSorter(cities, term, {\n              keys: [(item) => `${item.city}, ${item.state}`],\n            }),\n      [throttledTerm]\n    );\n  }\n\n  return <Example />;\n})();\n')),(0,a.kt)("h3",{id:"server-side-search"},"Server Side Search"),(0,a.kt)("p",null,"This is the same demo as above, except this time we're going to a server to get the match. This is recommended as the previous example had to download 350kb of city text! Again, there is nothing special about a ComboboxList as any other list in React. As the input changes, fetch data, set state, render options."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\n(() => {\n  function Example() {\n    const [searchTerm, setSearchTerm] = React.useState("");\n    const cities = useCitySearch(searchTerm);\n    const handleSearchTermChange = (event) => {\n      setSearchTerm(event.target.value);\n    };\n\n    return (\n      <Combobox aria-label="Cities">\n        <ComboboxInput\n          className="city-search-input"\n          onChange={handleSearchTermChange}\n        />\n        {cities && (\n          <ComboboxPopover className="shadow-popup">\n            {cities.length > 0 ? (\n              <ComboboxList>\n                {cities.map((city) => {\n                  const str = `${city.city}, ${city.state}`;\n                  return <ComboboxOption key={str} value={str} />;\n                })}\n              </ComboboxList>\n            ) : (\n              <span style={{ display: "block", margin: 8 }}>\n                No results found\n              </span>\n            )}\n          </ComboboxPopover>\n        )}\n      </Combobox>\n    );\n  }\n\n  function useCitySearch(searchTerm) {\n    const [cities, setCities] = React.useState([]);\n\n    React.useEffect(() => {\n      if (searchTerm.trim() !== "") {\n        let isFresh = true;\n        fetchCities(searchTerm).then((cities) => {\n          if (isFresh) setCities(cities);\n        });\n        return () => (isFresh = false);\n      }\n    }, [searchTerm]);\n\n    return cities;\n  }\n\n  const cache = {};\n  function fetchCities(value) {\n    if (cache[value]) {\n      return Promise.resolve(cache[value]);\n    }\n    return fetch("https://city-search.chaance.vercel.app/api?" + value)\n      .then((res) => res.json())\n      .then((result) => {\n        cache[value] = result;\n        return result;\n      });\n  }\n\n  return <Example />;\n})();\n')),(0,a.kt)("h3",{id:"lots-of-arbitrary-elements"},"Lots of arbitrary elements"),(0,a.kt)("p",null,"Sometimes your list is a bit more complicated, like categories of results, and lots of elements besides options inside the popover."),(0,a.kt)("p",null,"You can even have other interactive elements inside the popover, it won't close when the user interacts with them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\n(() => {\n  function Example() {\n    const [term, setTerm] = React.useState("");\n    const results = useCityMatch(term);\n    const handleChange = (event) => setTerm(event.target.value);\n\n    return (\n      <div>\n        <h4>Lots of stuff going on</h4>\n        <Combobox>\n          <ComboboxInput\n            onChange={handleChange}\n            style={{ width: 300, margin: 0 }}\n          />\n          {results && (\n            <ComboboxPopover style={{ width: 300 }}>\n              {results.length > 0 ? (\n                <ComboboxList>\n                  <h5 style={heading}>Top 3 results!</h5>\n                  {results.slice(0, 3).map((result, index) => (\n                    <ComboboxOption\n                      key={index}\n                      value={`${result.city}, ${result.state}`}\n                    />\n                  ))}\n                  {results.length > 3 && (\n                    <React.Fragment>\n                      <h5 style={heading}>The Rest</h5>\n                      {results.slice(3, 10).map((result, index) => (\n                        <ComboboxOption\n                          key={index}\n                          value={`${result.city}, ${result.state}`}\n                        />\n                      ))}\n                    </React.Fragment>\n                  )}\n                </ComboboxList>\n              ) : (\n                <div>\n                  <p style={{ padding: 10, textAlign: "center" }}>\n                    No results 😞\n                  </p>\n                </div>\n              )}\n              <p style={{ textAlign: "center", padding: 10 }}>\n                <button>Create a new record</button>\n              </p>\n            </ComboboxPopover>\n          )}\n        </Combobox>\n      </div>\n    );\n  }\n\n  function useCityMatch(term) {\n    const throttledTerm = useThrottle(term, 100);\n    return React.useMemo(\n      () =>\n        term.trim() === ""\n          ? null\n          : matchSorter(cities, term, {\n              keys: [(item) => `${item.city}, ${item.state}`],\n            }),\n      [throttledTerm]\n    );\n  }\n\n  const heading = {\n    fontSize: "100%",\n    color: "red",\n    fontWeight: "bold",\n    textTransform: "uppercase",\n    margin: 0,\n    padding: 5,\n  };\n\n  return <Example />;\n})();\n')),(0,a.kt)("h3",{id:"custom-styling"},"Custom styling"),(0,a.kt)("p",null,"This demo shows how you can control a lot about the styling. It uses ",(0,a.kt)("inlineCode",{parentName:"p"},"portal={false}")," on the ComboboxPopover which allows us to create a continuous outline around the entire thing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// jsx-demo\n(() => {\n  function Example() {\n    let [term, setTerm] = React.useState("");\n    let results = useCityMatch(term);\n    const handleChange = (event) => setTerm(event.target.value);\n\n    return (\n      <Combobox className="pink">\n        <ComboboxInput onChange={handleChange} />\n        {results && (\n          <ComboboxPopover portal={false}>\n            <hr />\n            {results.length > 0 ? (\n              <ComboboxList>\n                {results.slice(0, 10).map((result, index) => (\n                  <ComboboxOption\n                    key={index}\n                    value={`${result.city}, ${result.state}`}\n                  />\n                ))}\n              </ComboboxList>\n            ) : (\n              <p\n                style={{\n                  margin: 0,\n                  color: "#454545",\n                  padding: "0.25rem 1rem 0.75rem 1rem",\n                  fontStyle: "italic",\n                }}\n              >\n                No results :(\n              </p>\n            )}\n          </ComboboxPopover>\n        )}\n      </Combobox>\n    );\n  }\n\n  function useCityMatch(term) {\n    let throttledTerm = useThrottle(term, 100);\n    return React.useMemo(\n      () =>\n        term.trim() === ""\n          ? null\n          : matchSorter(cities, term, {\n              keys: [(item) => `${item.city}, ${item.state}`],\n            }),\n      [throttledTerm]\n    );\n  }\n\n  return <Example />;\n})();\n')),(0,a.kt)("h2",{id:"component-api"},"Component API"),(0,a.kt)("h3",{id:"combobox-1"},"Combobox"),(0,a.kt)("p",null,"Parent component that sets up the proper ARIA roles and context for the rest of the components."),(0,a.kt)("h4",{id:"combobox-css-selectors"},"Combobox CSS Selectors"),(0,a.kt)("p",null,"Please see the ",(0,a.kt)("a",{parentName:"p",href:"/styling"},"styling guide"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'[data-reach-combobox] {\n}\n\n/* root element in a specific state  */\n/* possible states: "idle" | "suggesting" | "navigating" | "interacting"  */\n[data-reach-combobox][data-state="STATE_REF"] {\n}\n')),(0,a.kt)("h4",{id:"combobox-props"},"Combobox Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Prop"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#combobox-as"},(0,a.kt)("inlineCode",{parentName:"a"},"as"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ",(0,a.kt)(p.E,{mdxType:"Pipe"})," ",(0,a.kt)("inlineCode",{parentName:"td"},"Component")),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#combobox-children"},(0,a.kt)("inlineCode",{parentName:"a"},"children"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"node")," ",(0,a.kt)(p.E,{mdxType:"Pipe"})," ",(0,a.kt)("inlineCode",{parentName:"td"},"func")),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#combobox-openonfocus"},(0,a.kt)("inlineCode",{parentName:"a"},"openOnFocus"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#combobox-onselect"},(0,a.kt)("inlineCode",{parentName:"a"},"onSelect"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"func")),(0,a.kt)("td",{parentName:"tr",align:null},"false")))),(0,a.kt)("h5",{id:"combobox-as"},"Combobox as"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"as?: keyof JSX.IntrinsicElements | React.ComponentType")),(0,a.kt)("p",null,"A string representing an HTML element or a React component that will tell the ",(0,a.kt)("inlineCode",{parentName:"p"},"ComboboxOption")," what element to render. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"div"),"."),(0,a.kt)(s.F,{mdxType:"AsPropWarning"}),(0,a.kt)("h5",{id:"combobox-children"},"Combobox children"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"children: React.ReactNode | ((props: { id: string | undefined; isExpanded: boolean; navigationValue: string | null; state: string }) => React.ReactNode)")),(0,a.kt)("p",null,"Combobox expects to receive ",(0,a.kt)("inlineCode",{parentName:"p"},"ComboboxInput")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ComboboxPopover")," as children. You can also pass a render function to expose data for ",(0,a.kt)("inlineCode",{parentName:"p"},"Combobox")," to its descendants."),(0,a.kt)("h5",{id:"combobox-openonfocus"},"Combobox openOnFocus"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"openOnFocus?: boolean")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Combobox openOnFocus />\n")),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"If true, the popover opens when focus is on the text box."),(0,a.kt)("h5",{id:"combobox-onselect"},"Combobox onSelect"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onSelect?(value: string): void")),(0,a.kt)("p",null,"Called with the selection value when the user makes a selection from the list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Combobox onSelect={(item) => {}} />\n")),(0,a.kt)("h3",{id:"comboboxinput"},"ComboboxInput"),(0,a.kt)("p",null,"Wraps an ",(0,a.kt)("inlineCode",{parentName:"p"},"<input/>")," with a couple extra props that work with the combobox."),(0,a.kt)("h4",{id:"comboboxinput-css-selectors"},"ComboboxInput CSS Selectors"),(0,a.kt)("p",null,"Please see the ",(0,a.kt)("a",{parentName:"p",href:"/styling"},"styling guide"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'[data-reach-combobox-input] {\n}\n\n/* input element in a specific state */\n/* possible states: "idle" | "suggesting" | "navigating" | "interacting"  */\n[data-reach-combobox-input][data-state="STATE_REF"] {\n}\n')),(0,a.kt)("h4",{id:"comboboxinput-props"},"ComboboxInput Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Prop"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#comboboxinput-as"},(0,a.kt)("inlineCode",{parentName:"a"},"as"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ",(0,a.kt)(p.E,{mdxType:"Pipe"})," ",(0,a.kt)("inlineCode",{parentName:"td"},"Component")),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#comboboxinput-selectonclick"},"selectOnClick")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#comboboxinput-autocomplete"},"autocomplete")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"false")))),(0,a.kt)("h5",{id:"comboboxinput-as"},"ComboboxInput as"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"as?: keyof JSX.IntrinsicElements | React.ComponentType")),(0,a.kt)("p",null,"A string representing an HTML element or a React component that will tell the ",(0,a.kt)("inlineCode",{parentName:"p"},"ComboboxInput")," what element to render. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"input"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," Recreating native ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," behavior and all of its nuance with a non-semantic element is ",(0,a.kt)("em",{parentName:"p"},"extremely difficult")," and may make the component inaccessible to many users. We do not recommend doing this.")),(0,a.kt)("h5",{id:"comboboxinput-selectonclick"},"ComboboxInput selectOnClick"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"selectOnClick?: boolean")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<ComboboxInput selectOnClick />\n")),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"If true, when the user clicks inside the text box the current value will be selected. Use this if the user is likely to delete all the text anyway (like the URL bar in browsers)."),(0,a.kt)("p",null,"However, if the user is likely to want to tweak the value, leave this ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", like a google search--the user is likely wanting to edit their search, not replace it completely."),(0,a.kt)("h5",{id:"comboboxinput-autocomplete"},"ComboboxInput autocomplete"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"autocomplete?: boolean")),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"Determines if the value in the input changes or not as the user navigates with the keyboard. If ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the value changes, if ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," the value doesn't change."),(0,a.kt)("p",null,"Set this to false when you don't really need the value from the input but want to populate some other state (like the recipient selector in Gmail). But if your input is more like a normal ",(0,a.kt)("inlineCode",{parentName:"p"},'<input type="text"/>'),", then leave the ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<ComboboxInput autocomplete={false} />\n")),(0,a.kt)("h3",{id:"comboboxpopover"},"ComboboxPopover"),(0,a.kt)("p",null,"Contains the popup that renders the list. Because some UI needs to render more than the list in the popup, you need to render one of these around the list. For example, maybe you want to render the number of results suggested."),(0,a.kt)("h4",{id:"comboboxpopover-css-selectors"},"ComboboxPopover CSS Selectors"),(0,a.kt)("p",null,"Please see the ",(0,a.kt)("a",{parentName:"p",href:"/styling"},"styling guide"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'[data-reach-combobox-popover] {\n}\n\n/* popover element in a specific state */\n/* possible states: "idle" | "suggesting" | "navigating" | "interacting"  */\n[data-reach-combobox-popover][data-state="STATE_REF"] {\n}\n')),(0,a.kt)("h4",{id:"comboboxpopover-props"},"ComboboxPopover Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Prop"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#comboboxpopover-portal"},(0,a.kt)("inlineCode",{parentName:"a"},"portal"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"false")))),(0,a.kt)("h5",{id:"comboboxpopover-portal"},"ComboboxPopover portal"),(0,a.kt)("p",null,"If you pass ",(0,a.kt)("inlineCode",{parentName:"p"},"<ComboboxPopover portal={false} />")," the popover will not render inside of a portal, but in the same order as the React tree. This is mostly useful for styling the entire component together, like the pink focus outline in the example earlier in this page."),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h3",{id:"comboboxlist"},"ComboboxList"),(0,a.kt)("p",null,"Contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"ComboboxOption")," elements and sets up the proper aria attributes for the list."),(0,a.kt)("h4",{id:"comboboxlist-css-selectors"},"ComboboxList CSS Selectors"),(0,a.kt)("p",null,"Please see the ",(0,a.kt)("a",{parentName:"p",href:"/styling"},"styling guide"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"[data-reach-combobox-list] {\n}\n")),(0,a.kt)("h4",{id:"comboboxlist-props"},"ComboboxList Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Prop"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#comboboxlist-as"},(0,a.kt)("inlineCode",{parentName:"a"},"as"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ",(0,a.kt)(p.E,{mdxType:"Pipe"})," ",(0,a.kt)("inlineCode",{parentName:"td"},"Component")),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#comboboxlist-persistselection"},(0,a.kt)("inlineCode",{parentName:"a"},"persistSelection"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"false")))),(0,a.kt)("h5",{id:"comboboxlist-as"},"ComboboxList as"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"as?: keyof JSX.IntrinsicElements | React.ComponentType")),(0,a.kt)("p",null,"A string representing an HTML element or a React component that will tell the ",(0,a.kt)("inlineCode",{parentName:"p"},"ComboboxList")," what element to render. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"ul"),"."),(0,a.kt)(s.F,{mdxType:"AsPropWarning"}),(0,a.kt)("h5",{id:"comboboxlist-persistselection"},"ComboboxList persistSelection"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"persistSelection?: boolean")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<ComboboxList persistSelection />\n")),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". When ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and the list is opened, if an option's value matches the value in the input, it will automatically be highlighted and be the starting point for any keyboard navigation of the list."),(0,a.kt)("p",null,"This allows you to treat a Combobox more like a ",(0,a.kt)("inlineCode",{parentName:"p"},"<select>")," than an ",(0,a.kt)("inlineCode",{parentName:"p"},"<input/>"),", but be mindful that the user is still able to put any arbitrary value into the input, so if the only valid values for the input are from the list, your app will need to do that validation on blur or submit of the form."),(0,a.kt)("h3",{id:"comboboxoption"},"ComboboxOption"),(0,a.kt)("p",null,"An option that is suggested to the user as they interact with the combobox."),(0,a.kt)("h4",{id:"comboboxoption-css-selectors"},"ComboboxOption CSS Selectors"),(0,a.kt)("p",null,"Please see the ",(0,a.kt)("a",{parentName:"p",href:"/styling"},"styling guide"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"[data-reach-combobox-option] {\n}\n\n/* option element when highlighted */\n[data-reach-combobox-option][data-highlighted] {\n}\n")),(0,a.kt)("h4",{id:"comboboxoption-props"},"ComboboxOption Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Prop"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#comboboxoption-as"},(0,a.kt)("inlineCode",{parentName:"a"},"as"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ",(0,a.kt)(p.E,{mdxType:"Pipe"})," ",(0,a.kt)("inlineCode",{parentName:"td"},"Component")),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#comboboxoption-value"},(0,a.kt)("inlineCode",{parentName:"a"},"value"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#comboboxoption-children"},(0,a.kt)("inlineCode",{parentName:"a"},"children"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"node")),(0,a.kt)("td",{parentName:"tr",align:null},"false")))),(0,a.kt)("h5",{id:"comboboxoption-as"},"ComboboxOption as"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"as?: keyof JSX.IntrinsicElements | React.ComponentType")),(0,a.kt)("p",null,"A string representing an HTML element or a React component that will tell the ",(0,a.kt)("inlineCode",{parentName:"p"},"ComboboxOption")," what element to render. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"li"),"."),(0,a.kt)(s.F,{mdxType:"AsPropWarning"}),(0,a.kt)("h5",{id:"comboboxoption-value"},"ComboboxOption value"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"value?: string")),(0,a.kt)("p",null,"The value to match against when suggesting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<ComboboxOption value="Salt Lake City, Utah" />\n')),(0,a.kt)("h5",{id:"comboboxoption-children"},"ComboboxOption children"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"children?: React.ReactNode | ((props: { value: string; index: number }) => React.ReactNode)")),(0,a.kt)("p",null,"Optional. If omitted, the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," will be used as the children like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<ComboboxOption value="Seattle, Tacoma, Washington" />\n')),(0,a.kt)("p",null,"But if you need to control a bit more, you can put whatever children you want, but make sure to render a ",(0,a.kt)("inlineCode",{parentName:"p"},"ComboboxOptionText")," as well, so the value is still displayed with the text highlighting on the matched portions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<ComboboxOption value="Apple" />\n🍎 <ComboboxOptionText/>\n</ComboboxOption>\n')),(0,a.kt)("h3",{id:"comboboxoptiontext"},"ComboboxOptionText"),(0,a.kt)("p",null,"Renders the value of a ",(0,a.kt)("inlineCode",{parentName:"p"},"ComboboxOption")," as text but with spans wrapping the matching and non-matching segments of text."),(0,a.kt)("p",null,"So given an option like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<ComboboxOption value="Seattle">\n  🌧 <ComboboxOptionText />\n</ComboboxOption>\n')),(0,a.kt)("p",null,"And the user typed ",(0,a.kt)("inlineCode",{parentName:"p"},"Sea"),", the out would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<span data-user-value>Sea</span><span data-suggested-value>ttle</span>\n")),(0,a.kt)("h4",{id:"comboboxoptiontext-css-selectors"},"ComboboxOptionText CSS Selectors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"[data-reach-combobox-option-text] {\n}\n\n/* the matching segments of text */\n[data-user-value] {\n}\n\n/* the unmatching segments */\n[data-suggested-value] {\n}\n")),(0,a.kt)("h3",{id:"usecomboboxcontext"},"useComboboxContext"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function useComboboxContext(): { id: string | undefined; isExpanded: boolean; navigationValue: string | null; state: string }")),(0,a.kt)("p",null,"A hook that exposes data for a given ",(0,a.kt)("inlineCode",{parentName:"p"},"Combobox")," component to its descendants."),(0,a.kt)("h3",{id:"usecomboboxoptioncontext"},"useComboboxOptionContext"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function useComboboxOptionContext(): { value: string; index: number }")),(0,a.kt)("p",null,"A hook that exposes data for a given ",(0,a.kt)("inlineCode",{parentName:"p"},"ComboboxOption")," component to its descendants."))}d.isMDXComponent=!0},8819:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var o=n(7294),a=n(9699);function l(){return o.createElement(a.j,null,o.createElement("p",null,o.createElement("strong",null,"NOTE:")," Many semantic elements, such as"," ",o.createElement("code",null,"button")," elements, have meaning to assistive devices and browsers that provide context for the user and, in many cases, provide or restrict interactive behaviors. Use caution when overriding our defaults and make sure that the element you choose to render provides the same experience for all users."))}},9699:function(e,t,n){"use strict";n.d(t,{j:function(){return l}});var o=n(7294),a=n(5505);function l(e){return o.createElement("div",Object.assign({},e,{className:(0,a.Z)(e.className,"Note-module--Note--2Ujzs")}))}},3989:function(e,t,n){"use strict";n.d(t,{E:function(){return a}});var o=n(7294);function a(){return o.createElement(o.Fragment,null,"|")}},6182:function(e,t,n){"use strict";n.d(t,{Nt:function(){return b},B$:function(){return c},G6:function(){return d}});var o=n(5167),a=n(2265),l=n(7294),i=n(9042),r=["children","label"],s=["children","style"],p=["href","children"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=e.children,n=e.label,o=void 0===n?"Table of Contents":n,s=(0,a.Z)(e,r);return l.createElement("nav",Object.assign({className:"toc"},s),l.createElement(i.Z,null,l.createElement("h2",null,o)),t)}function c(e){var t=e.children,n=e.style,o=void 0===n?{}:n,i=(0,a.Z)(e,s);return l.createElement("ul",Object.assign({style:u({display:"block",padding:0,listStyle:"none"},o)},i),t)}function d(e){var t=e.href,n=e.children,o=(0,a.Z)(e,p);return l.createElement("li",{style:{display:"inline-block",margin:0,padding:0}},l.createElement("a",Object.assign({href:t},o),n))}}}]);
//# sourceMappingURL=component---src-pages-combobox-mdx-7da928f8d68e5117c18a.js.map
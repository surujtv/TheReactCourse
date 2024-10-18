import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

// ReactElement -
const heading = React.createElement("h1", { id: "heading" }, "Hello Sandhya Jii!");


// JSX - Babel Transpiler
const myName = "Surendra Jatav"

// const heading1 = <div><h1>Hello Sandhya</h1></div>


// NESTED JSX - 
const header = (
    <header>
        <h1>Hello Sandhya</h1>
    </header>
)

const body = (
    <section>
        <h1>Hii This is main Body</h1>
    </section>
)

const footer = (
    <footer>
        <h1>This is footer</h1>
    </footer>
)


const elem = (
    <div className="myApp">
        {header}
        {body}
        {footer}
    </div>
)

// ReactComponents - 


// *How this is working -
// *JSX => React.createElement() using Babel => ReactElement -JSObject => HTMLElement using render()

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(elem);

import React from "react";
import ReactDOM from "react-dom/client";
import logo from '../download.png'

// React.createElement()
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Sandhya ! Welcome to this React series 😜"
);
console.log("Normal - ", heading);


// Use JSX Instead of React.createElement() -
const jsxHeading = (
  <h1 id="heading">Hello Sandhya ! Welcome to this React series 😜</h1>
);
console.log("JSX - ", jsxHeading);


// Nested JSX -
const nestedJsx = (
  <div className="container">
    <h1 id="heading">
      <em>Hello Sandhya ! Welcome to this React series</em>😜
    </h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum
      consequatur debitis !
    </p>
  </div>
);

// *How this is working -
// *JSX => React.createElement() using Babel => ReactElement -JSObject => HTMLElement using render()

//React Components -
// Function Components -

// JSX SuperPowers - 
const myName = "Surendra"
const freindName = "Sandhya"

// way - 1
const Heading = () => {
  return (
    <div className="container">
    <div className="logo">
      <img src={logo} alt="Kuchh" width="200px"/>
    </div>
    <h1 id="heading">
      {/* <em>Hello Sandhya ! Welcome to this React series Functional Component</em>😜 */}
      <em>Hello {myName} ! Welcome to this React series Functional Component</em>😜
    </h1>
    </div>
  );
};


// way - 2 - without return statement
const Heading1 = () => <h1 id="heading"><em>Hello {freindName} ! This is Functional Component</em>😜</h1>


// Component Composition --
const Composition = () => {
    return (
        <div className="container">
            <Heading />
            <Heading1 />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)
// root.render(jsxHeading)
// root.render(nestedJsx);

// root.render(<Heading />)
// root.render(<Heading1 />)
root.render(<Composition />)


import React from "react";
import ReactDOM from "react-dom/client";

// How this code works-
// React.createElement => ReactElement-JS Object => HTMLElement (render)

let heading = React.createElement(
  "div",
  { id: "head1", className: "sandhya" },

  [
    React.createElement(
      "h1",
      { className: "sandhya" },

      React.createElement("span", { className: "suren" }, "Hello, Sandhya!")
    ),

    React.createElement(
      "h1",
      { className: "sandhya" },

      React.createElement("span", { className: "suren" }, "Hello, Sandhya!")
    ),

    React.createElement(
      "h1",
      { className: "sandhya" },

      React.createElement("span", { className: "suren" }, "Hello, Sandhya!")
    ),
  ]
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

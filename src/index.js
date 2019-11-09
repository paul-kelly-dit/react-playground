import React from "react";
import { render } from "react-dom";
const node = document.getElementById("root");

// See we are doing lots of nesting - react is composable - we do this via children.

// here we create stateless react elements

const root = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    "Rich Web",
    React.createElement(
      "a",
      { href: "mailto:paul@tu.ie" },
      React.createElement("h6", {}, "Playing with React"),
      React.createElement("em", {}, "here we create stateless react elements")
    )
  )
);
render(root, node);

// what does this look  like in the dom?
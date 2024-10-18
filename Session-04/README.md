# Tips to start project

- define scripts in package.json


# JSX

- JSX (JavaScript Xml) is a syntax extension for JavaScript that allows developers to write HTML like syntax inside JavaScript files.

- NOTE: JSX and react is different concept JSX is not a part of react but it makes developers life easy for write html like syntax inside JavaScript.

- Browsers doesn't understand JSX.

- We need to compile JSX to JavaScript using Babel or other transpilers.

# Babel - SuperHero for JavaScript and JSX

- Babel is a JavaScript compiler that converts modern JavaScript code into older syntax that can be run by Browsers.
- Babel is a JavaScript compiler that converts JSX into JavaScript code.


# React Components -

- Components are reusable pieces of code that can be used to build UI components which returns some piece of JSX Code.
- Everything in react is a component like header, footer, button etc.

# Type of Components in React
- Functional Components - Traditional / NEW
- Functional Components uses JavaScript Functions to create Functional Components.

- Class based Components - OLD
- Class based Components uses JavaScript Classes to create Class based Components.

# NOTE: Component Name must start with capital letter otherwise you will get Error.


# Component Composition
- Component composition is the process of combining multiple components to create a new component.


# Super power of JSX
- Using {} inside JSX code we can write any type of JS expression inside these curley braces. even we can write any type of JavaScript Code.
- Everything inside {}, JSX just don't blindly render that stuff it sanitize that code or data before it goes to render on browser which helps user from Cross-Site-Scripting Cyber Attack. using - Automatic escaping, String conversion


# Props (Short form of Properties) 
- Props is short for properties. Props are object of immutable values that are passed from a parent component to a child component.


# Config driven UI
- Config driven UI is a UI that is driven by configuration data.


# Why we use keys in react
- Keys are used to identify a component uniquely in React. It helps React to keep track of the the new components and help in optimizing the rendering of the components.


# Why we don't use index values as a key
- when element position changed index value also changed and cause re-rendering.
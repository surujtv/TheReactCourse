# Topics -
- Monolith Architecture
- Microservice Architecture
- Separation of concern / Single responsibility principle

- useEffect Hook
- API call in react.
- Loading spinner / skeleton before getting full data form an API.
- Shimmer UI (fake webpage)
- Conditional Rendering
- build our own shimmer UI
- Create toggle using useState
- input field with state variable
- Search Functionality
- Bugs in Search functionality



# useEffect Hook -
The `useEffect` hook in React is used to handle side effects in functional components. It allows you to run some code after rendering a component, or after an update to a component. It's useful for things like setting up event listeners, making API calls, or updating the DOM.
It takes two arguments 1st one is callback function which will be invoked after component rendered and 2nd one is a dependency array.

# Note: if the dependency array not given inside useEffect then useEffect will be run after every render.


# What is shimmer UI -
Shimmer UI is a technique used to display a loading animation on a webpage, typically when data is being fetched from an API or database. It's a way to provide a visual indication that the data is being loaded, rather than displaying a blank or empty page.


# Conditional Rendering -
Rendering JSX based on some condition is known as conditional rendering. 
We will use ternary operator for handle these conditions.

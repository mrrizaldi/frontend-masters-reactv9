# Create a React App Without Build Steps

> While rarely done in modern development, this example demonstrates that it is possible to use React without a build step. It serves as a good exercise for learning the fundamentals of React.

## Notes

The following script tag provides the universal interface for React itself:

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
```

So, things like react native, react 3d, react 360, etc, all of those use the same react package. 

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script> 
```
Then the actual rendering layer underneath it, that's specific to the DOM to the browser, it's called **React DOM**.

### 1. The Component (App)

```js
const App = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, "Padre Gino's")
  )
}
```

This is a **Functional Component**, A javascript function that returns a react element

`React.createElement` is the core function of React. Instead of writing HTML tags, you tell React to create an object representing that tag. It takes three main arguments there:

- **Type**: The HTML tag name (e.g. `div`, `h1`, etc.) or another React component.
- **Props**: An object containing attributes (like `{id: "main", className: "header"}`). Here, `{}` means no attributes are passed
- **Children**: The content inside the element, which can be text or another `createElement` call, or an array of them.

### 2. Finding the entry point
```js
const container = document.getElementById('root')
```

This is standard 'Vanilla JS'. It looks for an HTML element with `id = root` in `index.html` file. This element serves as **the container** (where the entire React app will be rendered).

### 3. Creating the Root
```js
const root = ReactDOM.createRoot(container)
```
This uses `ReactDOM`. the `createRoot` is the modern React 18 API. It tells React, "Take control of this `container` DOM node" It prepares the container to be managed by React.

### 4. Rendering the App
```js
root.render(React.createElement(App))
```
- `root.render` tells React to actualy display the component inside the root.
- `React.createElement(App)` : we have to turn our `App` function into an element so React can render it.


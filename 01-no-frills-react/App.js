const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description)
  ])
}

const App = () => {
  return React.createElement(
    'div',
    {},
    [
      React.createElement('h1', {}, "Padre Gino's"),
      React.createElement(Pizza, {name: "Pepperoni Pizza", description: "Pepperoni and cheese"}),
      React.createElement(Pizza, {name: "Cheese Pizza", description: "Just cheese"}),
      React.createElement(Pizza, {name: "Veggie Pizza", description: "Loaded with vegetables"}),
      React.createElement(Pizza, {name: "Meat Lovers Pizza", description: "All the meats"})
    ]
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
import { createRoot } from 'react-dom/client'
import Order from './Order'
import PizzaOfTheDay from './PizzaOfTheDay'
import { CartContext } from './contexts'
import { useState } from 'react'
import Header from './Header'

const App = () => {
  const cartHook = useState([]);
  return (
    <CartContext value={cartHook}>
      <div>
        <Header />
        <Order />
        <PizzaOfTheDay />
      </div>
    </CartContext>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
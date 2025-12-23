import { createRoot } from 'react-dom/client'
import Pizza from './Pizza.jsx'

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza name="Pepperoni Pizza" description="Pepperoni and cheese" image={"/public/pizzas/pepperoni.webp"} />
      <Pizza name="Hawaiian Pizza" description="Just cheese" image={"/public/pizzas/hawaiian.webp"} />
      <Pizza name="Amercano Pizza" description="Loaded with vegetables" image={"/public/pizzas/big_meat.webp"} />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
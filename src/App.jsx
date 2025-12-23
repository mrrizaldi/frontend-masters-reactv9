import { createRoot } from 'react-dom/client'
import Pizza from './Pizza.jsx'

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza name="Pepperoni Pizza" description="Pepperoni and cheese" />
      <Pizza name="Cheese Pizza" description="Just cheese" />
      <Pizza name="Veggie Pizza" description="Loaded with vegetables" />
      <Pizza name="Meat Lovers Pizza" description="All the meats" />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
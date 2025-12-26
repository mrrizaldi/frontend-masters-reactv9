import { useEffect, useState } from "react";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);

  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");

  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id)
    price = intl.format(selectedPizza.sizes[pizzaSize]);
  }


  async function fetchPizzaTypes() {
    fetch("/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzaTypes(data);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, [])

  return (
    <div className="order">
      <h2>Create Order
        <form action="">
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select onChange={(e) => setPizzaType(e.target.value)} name="pizza-type" value={pizzaType}>
                {
                  pizzaTypes.map((pizza) => (
                    <option key={pizza.id} value={pizza.id}>{pizza.name}</option>
                  ))
                }
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              <div>
                <span>
                  <input onChange={(e) => setPizzaSize(e.target.value)} type="radio" checked={pizzaSize === "S"} name="pizza-size" value="S" id="pizza-s" />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input onChange={(e) => setPizzaSize(e.target.value)} type="radio" checked={pizzaSize === "M"} name="pizza-size" value="M" id="pizza-m" />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input onChange={(e) => setPizzaSize(e.target.value)} type="radio" checked={pizzaSize === "L"} name="pizza-size" value="L" id="pizza-l" />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to cart</button>
          </div>
          {loading ? (
            <h3>LOADING …</h3>
          ) : (
            <div className="order-pizza">
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />
              <p>{price}</p>
            </div>
          )}
        </form>
      </h2>
    </div>
  )
}
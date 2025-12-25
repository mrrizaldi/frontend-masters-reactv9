import { useState } from "react";
import Pizza from "./Pizza";

export default function Order() {
  // const pizzaType = "pepperoni";
  // const pizzaSize = "M";
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");

  return (
    <div className="order">
      <h2>Create Order
        <form action="">
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select onChange={(e) => setPizzaType(e.target.value)} name="pizza-type" value={pizzaType}>
                <option value="pepperoni">The Pepperoni Pizza</option>
                <option value="hawaiian">The Hawaiian Pizza</option>
                <option value="big_meat">The Big Meat Pizza</option>
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              <div>
                <span>
                  <input  onChange={(e) => setPizzaSize(e.target.value)} type="radio" checked={pizzaSize === "S"} name="pizza-size" value="S" id="pizza-s" />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input  onChange={(e) => setPizzaSize(e.target.value)} type="radio" checked={pizzaSize === "M"} name="pizza-size" value="M" id="pizza-m" />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input  onChange={(e) => setPizzaSize(e.target.value)} type="radio" checked={pizzaSize === "L"} name="pizza-size" value="L" id="pizza-l" />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to cart</button>
          </div>
          <div className="order-pizza">
            <Pizza name="Pepperoni" description="Mozarella cheese, pepperoni" image="/public/pizzas/pepperoni.webp"></Pizza>
            <p>13.37$</p>
          </div>
        </form>
      </h2>
    </div>
  )
}
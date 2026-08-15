import { useDispatch, useSelector } from "react-redux";

import { setMealQuantity } from "../redux/selectionsSlice";

import { meals } from "../data/products";

function Meals() {
  const dispatch = useDispatch();

  const selectedMeals = useSelector(
    (state) => state.selections.meals
  );

  return (
    <section id="meals" className="product-section">
      <h2>Meals</h2>

      <div className="products-grid">
        {meals.map((meal) => {
          const quantity = selectedMeals[meal.name] || 0;

          return (
            <div className="product-card" key={meal.id}>
              <h3>{meal.name}</h3>

              <p className="price">
                ${meal.price} / person
              </p>

              <label>
                Number of people
              </label>

              <input
                type="number"
                min="0"
                value={quantity}
                onChange={(event) =>
                  dispatch(
                    setMealQuantity({
                      name: meal.name,
                      quantity: event.target.value
                    })
                  )
                }
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Meals;
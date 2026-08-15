import { useDispatch, useSelector } from "react-redux";

import {
  incrementAddon,
  decrementAddon
} from "../redux/selectionsSlice";

import { addons } from "../data/products";

function AddOns() {
  const dispatch = useDispatch();

  const selectedAddons = useSelector(
    (state) => state.selections.addons
  );

  return (
    <section id="addons" className="product-section">
      <h2>Add-ons</h2>

      <div className="products-grid">
        {addons.map((addon) => {
          const quantity = selectedAddons[addon.name] || 0;

          return (
            <div className="product-card" key={addon.id}>
              <h3>{addon.name}</h3>

              <p className="price">
                ${addon.price}
              </p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    dispatch(decrementAddon(addon.name))
                  }
                >
                  -
                </button>

                <span>{quantity}</span>

                <button
                  onClick={() =>
                    dispatch(incrementAddon(addon.name))
                  }
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AddOns;
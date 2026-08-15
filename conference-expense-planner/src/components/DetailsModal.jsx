import { useSelector } from "react-redux";

import { rooms, addons, meals } from "../data/products";

function DetailsModal({ onClose }) {
  const selections = useSelector(
    (state) => state.selections
  );

  let total = 0;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Expense Details</h2>

          <button onClick={onClose}>
            ×
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room) => {
              const quantity =
                selections.rooms[room.name] || 0;

              const subtotal =
                room.price * quantity;

              total += subtotal;

              if (quantity === 0) return null;

              return (
                <tr key={room.id}>
                  <td>{room.name}</td>

                  <td>
                    ${room.price.toLocaleString()}
                  </td>

                  <td>{quantity}</td>

                  <td>
                    ${subtotal.toLocaleString()}
                  </td>
                </tr>
              );
            })}

            {addons.map((addon) => {
              const quantity =
                selections.addons[addon.name] || 0;

              const subtotal =
                addon.price * quantity;

              total += subtotal;

              if (quantity === 0) return null;

              return (
                <tr key={addon.id}>
                  <td>{addon.name}</td>

                  <td>${addon.price}</td>

                  <td>{quantity}</td>

                  <td>${subtotal.toLocaleString()}</td>
                </tr>
              );
            })}

            {meals.map((meal) => {
              const quantity =
                selections.meals[meal.name] || 0;

              const subtotal =
                meal.price * quantity;

              total += subtotal;

              if (quantity === 0) return null;

              return (
                <tr key={meal.id}>
                  <td>{meal.name}</td>

                  <td>${meal.price}</td>

                  <td>{quantity}</td>

                  <td>${subtotal.toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="total">
          Total: ${total.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems
} from '../redux/CartSlice';

// Calculates the total price for one product line in the cart.
export function calculateItemTotal(price, quantity) {
  return Number(price) * Number(quantity);
}

// Calculates the complete shopping-cart total.
export function calculateCartTotal(items) {
  return items.reduce(
    (total, item) => total + calculateItemTotal(item.price, item.quantity),
    0
  );
}

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

  const cartTotal = calculateCartTotal(items);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    window.alert('Próximamente: el proceso de pago estará disponible pronto.');
  };

  return (
    <div>
      <Navbar />

      <main className="cart-page">
        <header className="cart-header">
          <p className="eyebrow">Your selection</p>
          <h1>Shopping Cart</h1>
        </header>

        {items.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <Link className="primary-button" to="/plants">
              Continuar comprando
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {items.map((item) => {
                // Each item's line total is price multiplied by quantity.
                const itemTotal = calculateItemTotal(item.price, item.quantity);

                return (
                  <article className="cart-item" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />

                    <div className="cart-item-details">
                      <h2>{item.name}</h2>
                      <p>Precio unitario: ${Number(item.price).toFixed(2)}</p>
                      <p>Cantidad: {item.quantity}</p>
                      <p className="cart-item-total">
                        Costo total: ${itemTotal.toFixed(2)}
                      </p>
                    </div>

                    <div className="cart-actions">
                      <div className="quantity-control">
                        <button
                          type="button"
                          onClick={() => handleDecrease(item.id)}
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => handleIncrease(item.id)}
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => handleRemove(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            <section className="cart-summary">
              <h2>Total del carrito: ${cartTotal.toFixed(2)}</h2>
              <div className="cart-summary-actions">
                <Link className="secondary-button" to="/plants">
                  Continuar comprando
                </Link>
                <button
                  type="button"
                  className="primary-button"
                  onClick={handleCheckout}
                >
                  Pagar
                </button>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;

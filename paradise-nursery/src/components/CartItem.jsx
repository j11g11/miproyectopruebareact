import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal
} from '../redux/CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

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
            <Link className="primary-button" to="/plants">Continuar comprando</Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {items.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <article className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} className="cart-item-image" />

                    <div className="cart-item-details">
                      <h2>{item.name}</h2>
                      <p>Precio unitario: ${item.price.toFixed(2)}</p>
                      <p className="cart-item-total">Total: ${itemTotal.toFixed(2)}</p>
                    </div>

                    <div className="cart-actions">
                      <div className="quantity-control">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="remove-button"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Eliminar
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            <section className="cart-summary">
              <h2>Cart Total: ${total.toFixed(2)}</h2>
              <div className="cart-summary-actions">
                <Link className="secondary-button" to="/plants">Continuar comprando</Link>
                <button className="primary-button" onClick={handleCheckout}>Pagar</button>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;

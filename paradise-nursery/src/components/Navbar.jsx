import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/CartSlice';

function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <nav className="navbar">
      <Link className="brand" to="/">Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/plants">Plantas</Link>
        <Link className="cart-link" to="/cart">
          🛒 Carrito <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

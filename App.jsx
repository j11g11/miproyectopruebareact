import { Link, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function LandingPage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="eyebrow">Bring nature home</p>
            <h1>Paradise Nursery</h1>
            <p>
              Discover beautiful indoor plants selected to brighten your home,
              improve your space and make everyday life feel more connected to nature.
            </p>
            <Link className="primary-button" to="/plants">
              Comenzar
            </Link>
          </div>
        </div>
      </section>
      <AboutUs />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;

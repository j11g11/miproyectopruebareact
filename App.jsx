import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function LandingPage() {
  const [showProducts, setShowProducts] = useState(false);

  const handleStart = () => {
    setShowProducts(true);
  };

  if (showProducts) {
    return <ProductList />;
  }

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="eyebrow">Bring nature home</p>
            <h1>Welcome to Paradise Nursery</h1>
            <p>
              Welcome to Paradise Nursery, your destination for beautiful indoor
              plants. Discover plants selected to brighten your home, improve
              your space and bring you closer to nature.
            </p>

            <button
              className="primary-button"
              onClick={handleStart}
            >
              Comenzar
            </button>
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

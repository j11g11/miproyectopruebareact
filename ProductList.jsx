import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import { categories } from '../data/plants';
import { addToCart, selectProductInCart } from '../redux/CartSlice';

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector((state) => selectProductInCart(state, plant.id));

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <article className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p className="plant-price">${plant.price.toFixed(2)}</p>
        <button
          className="add-button"
          onClick={handleAddToCart}
          disabled={inCart}
        >
          {inCart ? 'Agregado' : 'Agregar al Carrito'}
        </button>
      </div>
    </article>
  );
}

function ProductList() {
  return (
    <div>
      <Navbar />
      <main className="products-page">
        <header className="products-header">
          <p className="eyebrow">Shop indoor plants</p>
          <h1>Our Plants</h1>
          <p>Choose from three collections of unique indoor plants.</p>
        </header>

        {categories.map((category) => (
          <section className="category-section" key={category.id}>
            <h2>{category.name}</h2>
            <div className="plants-grid">
              {category.products.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;

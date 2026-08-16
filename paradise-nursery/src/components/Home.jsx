import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';

function Home() {
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

export default Home;

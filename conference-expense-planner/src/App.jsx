import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
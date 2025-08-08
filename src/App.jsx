// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/Landingpg";
import LandingPage from "./pages/Landingpg";
import ProductListPage from "./pages/Product";
import CartPage from "./pages/Cart";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;

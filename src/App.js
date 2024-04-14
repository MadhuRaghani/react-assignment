import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";

import ProductListing from "./components/ProductListing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ListeProduits from "./components/ListeProduits";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar productsCart={productsCart} />
        <Routes>
          <Route
            path="/"
            element={
              <ListeProduits
                products={products}
                productsCart={productsCart}
                setProductsCart={setProductsCart}
                total={total}
                setTotal={setTotal}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                productsCart={productsCart}
                setProductsCart={setProductsCart}
                total={total}
                setTotal={setTotal}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

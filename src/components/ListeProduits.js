import React from "react";
import Product from "./Product";
import "./ListeProduits.css";

export default function ListeProduits({
  products,
  productsCart,
  setProductsCart,
  total,
  setTotal,
}) {
  return (
    <div className="ListeProduits">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          productsCart={productsCart}
          setProductsCart={setProductsCart}
          setTotal={setTotal}
          total={total}
        />
      ))}
    </div>
  );
}

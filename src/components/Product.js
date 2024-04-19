import React from 'react'
import './Product.css';

export default function Product({ product, productsCart, setProductsCart, total, setTotal }) {
  const handleAjoutPanier = () => {
      setProductsCart(() => [...productsCart, product]);
      setTotal(() => total + product.price);
  };

  return (
    <div className="Product">
      <div className="image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-body">
        <h4>{product.title}</h4>
        <p>{product.description.slice(0, 200)}...</p>
        <strong>{product.price} DH</strong>
        <button
          className="ajout fw-bold"
          onClick={() => handleAjoutPanier()}
          disabled={productsCart.find((p) => p.id === product.id)}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

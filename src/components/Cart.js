import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cart({ productsCart, setProductsCart, total, setTotal }) {
  const handleDeleteFromCart = (pro) => {
    setProductsCart(productsCart.filter((p) => p.id !== pro.id));
    setTotal(total - pro.price);
    };
  return (
    <div className="Cart" style={{ minHeight: '75.79vh' }}>
      {productsCart.length > 0 ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Titre</th>
                <th scope="col">Prix</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {productsCart.map((p) => (
                <tr key={p.id}>
                  <th scope="row">{p.id}</th>
                  <td>{p.title}</td>
                  <td>{p.price} DH</td>
                  <td>
                    <button
                      onClick={() => handleDeleteFromCart(p)}
                      className="btn btn-danger"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="fs-4 fw-bold text-primary">Total: {total.toFixed(2)} DH</div>
        </>
      ) : (
        <div className="fs-2 fw-bold m-4">Il n'y a pas aucun produit dans le panier</div>
      )}
    </div>
  );
}

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ productsCart }) {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="fw-bold">Top Store</h1>
      </Link>
      <Link to="/cart">
        <span style={{ color: "white", fontSize: '20px', fontWeight: 'bold' }}>{productsCart.length}</span>
        <i className="fas fa-cart-plus"></i>
      </Link>
    </div>
  );
}

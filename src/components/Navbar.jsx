// Navbar.jsx
import React from "react";

export default function Navbar({ cartItems, onCartClick, onSignIn }) {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <i className="bi bi-bootstrap-fill"></i> BiteBox
      </h2>

      <div className="navbar-right">
        {/* Cart Box */}
        <div
          className="cart-box"
          onClick={onCartClick}       // Cart click function
          role="button"
          aria-label="Open cart"
        >
          🛒 Cart <span className="cart-count">{cartItems.length}</span>
        </div>

        {/* Sign In Button */}
        <button className="signin-btn" onClick={onSignIn}>
          Sign In
        </button>
      </div>
    </nav>
  );
}

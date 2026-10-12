import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="navbar navbar-expand bg-primary sticky-top shadow-sm">
      <nav className="container">
        <Link to="/" className="navbar-brand fw-bold text-white">
          StoreWala
        </Link>
        <div className="navbar-nav ms-auto align-items-center gap-2">
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
          <Link to="/about" className="btn btn-light text-primary position-relative">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {count}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

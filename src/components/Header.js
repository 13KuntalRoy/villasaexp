import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import CustomInput from "./CustomInput";

const Header = () => {
  return (
    <header>
      {/* top header */}
      <div className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+16454244">
                  +1645252545
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* midle header */}
      <div className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link className="text-white" to="/">
                  Digitic
                </Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <CustomInput
                  type="search"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="search-product"
                />
                <span className="input-group-text p-3" id="search-product">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="compare"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/user.svg" alt="user" />
                    <p className="mb-0">
                      Log In <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/cart.svg" alt="cart" />
                    <div className="de-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                    </div>
                    <p className="mb-0">$0.00</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom header */}
      <div className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="images/menu.svg" alt="" />
                    <span className="mx-5 d-inline-block">Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/" className="dropdown-item" href="#s">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item" href="#s">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item" href="#s">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

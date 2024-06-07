import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/logo.svg";
import { NavLink, useNavigate, Link } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const favTotalQuantity=  useSelector((state) => state.favorite.favTotalQuantity);


  const menuRef = useRef(null);
  const navigate = useNavigate();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const navigateToCart = () => {
    navigate("/cart");
  };
  const navigateToWishlist = () => {
    navigate("/wishlist");
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>BOUTIK</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                <li className="nav__item">
                  <NavLink to="Acceuil" className="link">
                    <i className="ri-store-3-line"></i>Accueil
                  </NavLink>
                </li>

                <li className="nav__item">
                  <NavLink to="Shop" className="link">
                    <i className="ri-shopping-bag-3-line"></i>Shop
                  </NavLink>
                </li>

                <li className="nav__item">
                  <NavLink to="Cart" className="link">
                    <i className="ri-store-2-line"></i>Cart
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/devis" className="link">
                    <i className="ri-cloudy-2-line devis-icon"></i>
                    Faire un devis
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="nav__icons">
              
            <span className="fav__icon" onClick={navigateToWishlist}>
              <i className="ri-heart-line"></i>
              <span className="badge">{favTotalQuantity}</span>
            </span>

              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-cart-2-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              {/*<div className="user-icon-wrapper">
                <span onClick={toggleMenu}>
                  <motion.img
                    whileTap={{ scale: 0.8 }}
                    src={userIcon}
                    alt=""
                  />
                </span>
                {isMenuOpen && (
                  <div className="user-menu">
                    <ul>
                      <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                      </li>
                      <li>
                        <NavLink to="/logout">Logout</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>*/}
              <div className="profile">
                <span onClick={toggleMenu}>
                  <motion.img whileTap={{ scale: 0.8 }} src={userIcon} alt="" />
                </span>
                {isMenuOpen && (
                  <div className="profile__actions">
                    <span>
                      <Link
                        to="/login"
                        className={(navClass) =>
                          navClass.isActive ? "active__menu" : ""
                        }
                        style={{
                          textDecoration: "none",
                          color: "var(--primary-color)",
                        }}
                      >
                        Dashboard{" "}
                      </Link>
                    </span>
                    <span>
                      <Link
                        to="/"
                        className={(navClass) =>
                          navClass.isActive ? "active__menu" : ""
                        }
                        style={{
                          textDecoration: "none",
                          color: "var(--primary-color)",
                        }}
                      >
                        Logout{" "}
                      </Link>
                    </span>
                  </div>
                )}
              </div>

              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

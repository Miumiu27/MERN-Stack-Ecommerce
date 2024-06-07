import React, { useState } from "react";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "../../styles/admin-nav.css";
import logo from "../../assets/images/logo.svg";
import photo from "../../assets/images/user-icon.png";
import products from "../../assets/data/products";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-products",
    path: "/dashboard/all-products",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
  {
    display: "All-Commande",
    path: "/dashboard/all-commande",
  },
  {
    display: "All-Payment",
    path: "/dashboard/all-paiement",
  },
];

export const AdminNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="admin__header" style={{ backgroundColor: "#0a2b52" }}>
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <img src={logo} />
              </div>
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#070d25] border-[2px] rounded-md"
                />

                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
              <div className="admin__nav-top-right">
                <span>
                  <i class="ri-notification-3-line"></i>
                </span>
                <span>
                  <i class="ri-settings-2-line"></i>
                </span>
                {/*<img src={photo}  />*/}
                <div className="profile">
                  <span onClick={toggleMenu}>
                    <img whileTap={{ scale: 0.8 }} src={photo} alt="" />
                  </span>
                  {isMenuOpen && (
                    <div className="profile__actions">
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
              </div>
            </div>
          </Container>
        </div>
      </header>
      <nav
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--card-bg-02)",
        }}
        className="pb-3 pt-4 align-items-center"
      >
        <div className="container-fluid ">
          <ul className="admin__menu-list ">
            {admin__nav.map((item, index) => (
              <li className="admin__menu-item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "active__admin-menu" : ""
                  }
                  style={{ textDecoration: "none" }}
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

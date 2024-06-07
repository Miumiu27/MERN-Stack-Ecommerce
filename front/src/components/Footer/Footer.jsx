import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.svg";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4 md='6'">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>BOUTIK</h1>
              </div>
            </div>
            <p className="footer__text mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              ratione inventore quisquam illum accusamus, expedita similique nam
              consectetur aspernatur numquam ex repudiandae! Quam vel cupiditate
              delectus impedit est nobis consequuntur!
            </p>
          </Col>

          <Col md="3" lg="3">
            <div className="footer__quick-links">
              <div className="quick__links-title">
                <h4>Top categories</h4>{" "}
              </div>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="lonk">
                    Telephone mobile
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="lonk">
                    Sofa
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="lonk">
                    Canapé
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="lonk">
                    Smart Watches
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <div className="quick__links-title">
                <h4>Liens utiles</h4>{" "}
              </div>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop" className="lonk">
                    Shop
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart" className="lonk">
                    Cart
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login" className="lonk">
                    Login
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="lonk">
                    Privacy policy
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <div className="quick__links-title">
                <h4>Nos coordonées</h4>{" "}
              </div>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <div className="lonk d__flex ">
                    <span>
                      <i class="ri-home-3-line "></i>
                    </span>
                    <p className="p__left">
                      Rue de l'independance, Analakely, Madagascar
                    </p>
                  </div>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <div className="lonk d__flex ">
                    <span>
                      <i class="ri-phone-fill"></i>
                    </span>
                    <p className="p__left">+264 34 56 796 44</p>
                  </div>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <div className="lonk d__flex ">
                    <span>
                      <i class="ri-mail-send-fill "></i>
                    </span>
                    <p className="p__left">Boutik@gmail.com</p>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developped by MK. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

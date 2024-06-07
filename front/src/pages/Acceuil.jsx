import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
//import heroImg from "../assets/images/hero-img.png";
import { motion } from "framer-motion";
import counterImg from "../assets/images/counter-timer-img.png";
import "../styles/Acceuil.css";
import { Link } from "react-router-dom";
import Services from "../Services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import Clock from "../components/UI/clock";

const Acceuil = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [MobileProducts, setMobileProducts] = useState([]);
  const [WirelessProducts, setWirelessProducts] = useState([]);
  const [PopularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={"Acceuil"}>
      <section className="hero__section">
        {/*<Container>
               <Row >
                    <Col lg='6' md='6' >

                        
                    </Col>
                    <Col lg='6' md='6'>
                        <span></span>
                        <div className="hero__img">
                            <img src={heroImg} alt="" />


                        </div>
                    </Col>
                </Row>
            </Container>*/}
        <div className="test">
          <p className="hero__subtiles">Meilleurs produit en {year}</p>
          <h1>
            QUALITE GARANTIE <br />
            PRIX COMPETITIF!
          </h1>
          <h5 className="h5">
            Profiter d'un achat en ligne simple, sécuriser, et surtout avec une
            garantie sur la qualité <br />
            Tout nos articles sont sous garantie <br />
            Alors qu'attendez vous?
            <br />
          </h5>
          <motion.button whileTap={{ scale: 1.2 }} className="">
            <Link to="/Shop" className="test__btn">
              ACHETER MAINTENANT
            </Link>
          </motion.button>
        </div>
      </section>

      <Services />

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Offre limité</h4>
                <h3 className="text-white fs-5 mb-3">Sofa de qualité</h3>
              </div>

              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/Shop" className="link">
                  Visiter la boutique
                </Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">NOS PRODUITS EN VOGUE</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">NOS MEILLEURS VENTES</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">NOS ARRIVAGES</h2>
            </Col>
            <ProductList data={WirelessProducts} />

            <ProductList data={MobileProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center  mb-5">
              <h2 className="section__title">
                NOS PRODUITS LES PLUS POPULAIRES.
              </h2>
            </Col>
            <ProductList data={PopularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Acceuil;

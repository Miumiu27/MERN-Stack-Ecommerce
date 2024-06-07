import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import "../../styles/dashboard.css";

function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [commandeCount, setCommandeCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/getUsersCount"
        );
        setUserCount(response.data.count);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du nombre d'utilisateurs :",
          error
        );
      }
    };

    const fetchOrderCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/paiement/total"
        );
        setOrderCount(response.data.count);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du nombre de commandes :",
          error
        );
      }
    };

    const fetchProductCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/getProductsCount"
        );
        setProductCount(response.data.count);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du nombre de produits :",
          error
        );
      }
    };

    const fetchCommandeCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/commande/total"
        );
        setCommandeCount(response.data.count);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du nombre de commandes :",
          error
        );
      }
    };
    fetchUserCount();
    fetchOrderCount();
    fetchProductCount();
    fetchCommandeCount();
  }, []);

  return (
    <>
      <div>
        <section>
          <Container>
            <Row>
              <Col className="lg-3">
                <div className="revenue__box">
                  <h5>Total des ventes</h5>
                  <span>{orderCount}</span>
                </div>
              </Col>

              <Col className="lg-3">
                <div className="order__box">
                  <h5>Commandes</h5>
                  <span>{commandeCount}</span>
                </div>
              </Col>
              <Col className="lg-3">
                <div className="products__box">
                  <h5>Total des produits</h5>
                  <span>{productCount}</span>
                </div>
              </Col>
              <Col className="lg-3">
                <div className="users__box">
                  <h5>Utilisateurs</h5>
                  <span>{userCount}</span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Dashboard;

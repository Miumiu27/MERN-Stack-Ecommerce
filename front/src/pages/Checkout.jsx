import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [paiement, setPaiement] = useState({
    name: "",
    email: "",
    telephone: "",
    adresse: "",
    ville: "",
    code_postale: "",
    quantity: totalQuantity,
    total: totalAmount,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: paiement.name,
      email: paiement.email,
      telephone: paiement.telephone,
      adresse: paiement.adresse,
      ville: paiement.ville,
      code_postale: paiement.code_postale,
      quantity: paiement.quantity,
      total: paiement.total,
    };

    try {
      const response = await fetch("http://localhost:5000/api/paiement/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Commande ajoutée avec succès");
        setPaiement({
          name: "",
          email: "",
          telephone: "",
          adresse: "",
          ville: "",
          code_postale: "",
          quantity: "",
          total: "",
        });
        navigate("/delivery");
      } else {
        console.log("Une erreur s'est produite lors de l'ajout de la paiement");
      }
    } catch (error) {
      console.log("Une erreur s'est produite lors de la requête", error);
    }
  };
  return (
    <Helmet title="Checkout">
      <CommonSection title="Passer au paiement" />
      <section>
        <Container>
          <Form className="billing__form" onSubmit={handleSubmit}>
            <Row>
              <Col lg="8">
                <h3 className="mb-4 fw-bold">INFORMATION SUR LE PAYEMENT</h3>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Entrer votre nom"
                    required
                    name="name"
                    value={paiement.name}
                    onChange={(e) =>
                      setPaiement({ ...paiement, name: e.target.value })
                    }
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="Entrer votre email"
                    required
                    name="email"
                    value={paiement.email}
                    onChange={(e) =>
                      setPaiement({ ...paiement, email: e.target.value })
                    }
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="number"
                    placeholder="Votre numero de telephone"
                    required
                    name="telephone"
                    value={paiement.telephone}
                    onChange={(e) =>
                      setPaiement({ ...paiement, telephone: e.target.value })
                    }
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Votre adresse"
                    required
                    name="adresse"
                    value={paiement.adresse}
                    onChange={(e) =>
                      setPaiement({ ...paiement, adresse: e.target.value })
                    }
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Ville"
                    required
                    name="ville"
                    value={paiement.ville}
                    onChange={(e) =>
                      setPaiement({ ...paiement, ville: e.target.value })
                    }
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Code postale"
                    required
                    name="code_postale"
                    value={paiement.code_postale}
                    onChange={(e) =>
                      setPaiement({ ...paiement, code_postale: e.target.value })
                    }
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <div className="checkout__cart">
                  <h6>
                    Quantité total:<span>{totalQuantity} items</span>
                  </h6>
                  <h6>
                    Subtotal<span>{totalAmount}</span>
                  </h6>
                  <h6>
                    <span>
                      Livraison:
                      <br />
                      livraison gratuite
                    </span>
                    $0
                  </h6>
                  <h4>
                    Total: <span>$ {totalAmount}</span>{" "}
                  </h4>
                  <button
                    type="submit"
                    className="  form-control  custom-button"
                  >
                    Placer votre paiement
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;

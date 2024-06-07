import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import CommonSection5 from "../components/UI/CommonSection5";

const Devis = () => {
  const navigate = useNavigate();
  const [commande, setCommande] = useState({
    name: "",
    first_name: "",
    adresse: "",
    city: "",
    code_postale: "",
    mode_paiement: "",
    product_name: "",
    spec_product: "",
    quantity: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: commande.name,
      first_name: commande.first_name,
      adresse: commande.adresse,
      city: commande.city,
      code_postale: commande.code_postale,
      mode_paiement: commande.mode_paiement,
      product_name: commande.product_name,
      spec_product: commande.spec_product,
      quantity: commande.quantity,
    };

    try {
      const response = await fetch("http://localhost:5000/api/commande/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Commande ajoutée avec succès");
        setCommande({
          name: "",
          first_name: "",
          adresse: "",
          city: "",
          code_postale: "",
          mode_paiement: "",
          product_name: "",
          spec_product: "",
          quantity: "",
        });
        navigate("/delivery");
      } else {
        console.log("Une erreur s'est produite lors de l'ajout de la commande");
      }
    } catch (error) {
      console.log("Une erreur s'est produite lors de la requête", error);
    }
  };
  return (
    <Helmet title="checkout">
      <CommonSection5 title="Faire un devis" />
      <section>
        <Container>
          <h3
            className="my-3 mb-3"
            style={{
              color: "var(--primary-color)",
            }}
          >
            Remplissez les champs pour faire un devis
          </h3>
          <form action="" onSubmit={handleSubmit} className="my-4">
            <div className="form-floating mb-3 mt-4">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
                name="name"
                value={commande.name}
                onChange={(e) =>
                  setCommande({ ...commande, name: e.target.value })
                }
              />
              <label for="floatingInput">Nom</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Prénom"
                required
                name="first_name"
                value={commande.first_name}
                onChange={(e) =>
                  setCommande({ ...commande, first_name: e.target.value })
                }
              />
              <label for="floatingPassword">Prénom</label>
            </div>

            <div className="form-floating my-3">
              <div className="row g-3">
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Adresse"
                    required
                    name="adresse"
                    value={commande.adresse}
                    onChange={(e) =>
                      setCommande({ ...commande, adresse: e.target.value })
                    }
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Ville"
                    required
                    name="city"
                    value={commande.city}
                    onChange={(e) =>
                      setCommande({ ...commande, city: e.target.value })
                    }
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="number"
                    className="form-control p-3"
                    placeholder="Code postale"
                    required
                    name="code_postale"
                    value={commande.code_postale}
                    onChange={(e) =>
                      setCommande({ ...commande, code_postale: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                required
                name="mode_paiement"
                value={commande.mode_paiement}
                onChange={(e) =>
                  setCommande({ ...commande, mode_paiement: e.target.value })
                }
              >
                <option selected>Selectionnez une option</option>
                <option value="Carte bancaire">Carte bancaire</option>
                <option value="Souscrire à un contrat PSP">
                  Souscrire à un contrat PSP
                </option>
                <option value="Paiement par chèque">Paiement par chèque</option>
                <option value="Contre -remboursement">
                  Contre -remboursement
                </option>
                <option value="Porte monnaie éléctronique">
                  Porte monnaie éléctronique
                </option>
              </select>
              <label for="floatingSelect">Mode de paiement</label>
            </div>

            <div className="form-floating mb-3 my-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                required
                name="product_name"
                value={commande.product_name}
                onChange={(e) =>
                  setCommande({ ...commande, product_name: e.target.value })
                }
              />
              <label for="floatingInput">Nom du produit</label>
            </div>
            <div className="form-floating my-3">
              <input
                type="text"
                className="form-control"
                required
                name="spec_product"
                value={commande.spec_product}
                onChange={(e) =>
                  setCommande({ ...commande, spec_product: e.target.value })
                }
              />
              <label for="floatingPassword">Spécificité du produit</label>
            </div>
            <div className="form-floating mb-3 my-3">
              <input
                type="number"
                className="form-control"
                required
                name="quantity"
                value={commande.quantity}
                onChange={(e) =>
                  setCommande({ ...commande, quantity: e.target.value })
                }
              />
              <label for="floatingInput">Quantité</label>
            </div>

            <button
              type="submit"
              className="form-control btn p-3 my-4"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "white",
              }}
            >
              Envoyer commande{" "}
            </button>
          </form>
        </Container>
      </section>
    </Helmet>
  );
};

export default Devis;

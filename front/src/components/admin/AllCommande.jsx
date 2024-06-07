import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

export const AllCommande = () => {
  const [commande, setCommande] = useState([]);

  useEffect(() => {
    fetchAllCommande();
  }, []);

  const fetchAllCommande = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/commande/getAll");
      const data = await response.json();
      setCommande(data);
      console.log(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des commandes :", error);
    }
  };

  const deletecommande = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/commande/${id}`, {
        method: "DELETE",
      });
      setCommande(commande.filter((commande) => commande.id !== id));
      console.log("commande deleted successfully");
    } catch (error) {
      console.error("Error deleting commande:", error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg="12">
            <div className="container">
              <h2 className="my-4 text-success mr-8">Les commandes</h2>
              <table className="table table text-center">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Nom produit</th>
                    <th>Quantité</th>
                    <th>Spécification </th>
                    <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  {commande.map((commande) => (
                    <tr key={commande.id}>
                      <td>{commande.name}</td>
                      <td>{commande.product_name}</td>
                      <td>{commande.quantity}</td>
                      <td>{commande.spec_product}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deletecommande(commande.id)}
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

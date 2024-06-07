import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

export const AllPaiement = () => {
  const [paiement, setPaiement] = useState([]);

  useEffect(() => {
    fetchAllPaiement();
  }, []);

  const fetchAllPaiement = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/paiement/getAll");
      const data = await response.json();
      setPaiement(data);
      console.log(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs :", error);
    }
  };

  const deletepaiement = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/paiement/${id}`, {
        method: "DELETE",
      });
      setPaiement(paiement.filter((paiement) => paiement.id !== id));
      console.log("paiement deleted successfully");
    } catch (error) {
      console.error("Error deleting paiement:", error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg="12">
            <div className="container">
              <h2 className="my-4 text-success mr-8">Les paiements</h2>
              <table className="table table text-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th>Adresse</th>
                    <th>Ville</th>
                    <th>Code postale</th>
                    <th>Quantité</th>
                    <th>Totale</th>
                    <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paiement.map((paiement) => (
                    <tr key={paiement.id}>
                      <td>{paiement.name}</td>
                      <td>{paiement.email}</td>
                      <td>{paiement.telephone}</td>
                      <td>{paiement.adresse}</td>
                      <td>{paiement.ville}</td>
                      <td>{paiement.code_postale}</td>
                      <td>{paiement.quantity}</td>
                      <td>{paiement.total}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deletepaiement(paiement.id)}
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

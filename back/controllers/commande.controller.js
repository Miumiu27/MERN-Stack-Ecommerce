const connection = require("../config/db");

const getAllCommande = (req, res) => {
  connection.query("SELECT * FROM commande", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(results);
    }
  });
};

const getCommandeById = (req, res) => {
  const commandeId = req.params.id;
  connection.query(
    "SELECT * FROM commande WHERE id = ?",
    [commandeId],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Internal server error" });
      } else if (results.length === 0) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.status(200).json(results[0]);
      }
    }
  );
};

const createCommande = (req, res) => {
  const {
    name,
    first_name,
    adresse,
    city,
    code_postale,
    mode_paiement,
    product_name,
    spec_product,
    quantity,
  } = req.body;
  connection.query(
    "INSERT INTO commande (name, first_name, adresse, city, code_postale,mode_paiement, product_name,spec_product, quantity) VALUES (?, ?,?, ?, ?, ?, ?, ?, ?)",
    [
      name,
      first_name,
      adresse,
      city,
      code_postale,
      mode_paiement,
      product_name,
      spec_product,
      quantity,
    ],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Internal server error" });
      } else {
        const commandeId = results.insertId;
        res.status(201).json({
          id: commandeId,
          name,
          first_name,
          adresse,
          city,
          code_postale,
          mode_paiement,
          product_name,
          spec_product,
          quantity,
        });
      }
    }
  );
};

const deleteCommande = (req, res) => {
  const commandeId = req.params.id;
  connection.query("DELETE FROM commande WHERE id = ?", [commandeId], (err) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(204).end();
    }
  });
};

const getTotalCommandes = (req, res) => {
  connection.query(
    "SELECT COUNT(*) as totalCommandes FROM commande",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Internal server error" });
      } else {
        const totalCommandes = results[0].totalCommandes;
        res.status(200).json({ count: totalCommandes });
      }
    }
  );
};

module.exports = {
  getAllCommande,
  getCommandeById,
  createCommande,
  deleteCommande,
  getTotalCommandes,
};

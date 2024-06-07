const connection = require("../config/db");

const getAllPaiement = (req, res) => {
  connection.query("SELECT * FROM paiement", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(results);
    }
  });
};

const getById = (req, res) => {
  const paiementId = req.params.id;
  connection.query(
    "SELECT * FROM paiement WHERE id = ?",
    [paiementId],
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

const create = (req, res) => {
  const {
    name,
    email,
    telephone,
    adresse,
    ville,
    code_postale,
    quantity,
    total,
  } = req.body;
  connection.query(
    "INSERT INTO paiement (name, email, telephone, adresse, ville, code_postale,quantity, total) VALUES (?, ?,?, ?, ?, ?, ?, ?)",
    [name, email, telephone, adresse, ville, code_postale, quantity, total],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Internal server error" });
      } else {
        const paiementId = results.insertId;
        res.status(201).json({
          id: paiementId,
          name,
          email,
          telephone,
          adresse,
          ville,
          code_postale,
          quantity,
          total,
        });
      }
    }
  );
};

const deleteFromList = (req, res) => {
  const paiementId = req.params.id;
  connection.query("DELETE FROM paiement WHERE id = ?", [paiementId], (err) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(204).end();
    }
  });
};

const getTotalpaiements = (req, res) => {
  connection.query(
    "SELECT COUNT(*) as totalpaiements FROM paiement",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Internal server error" });
      } else {
        const totalpaiements = results[0].totalpaiements;
        res.status(200).json({ count: totalpaiements });
      }
    }
  );
};

module.exports = {
  getAllPaiement,
  getById,
  create,
  deleteFromList,
  getTotalpaiements,
};

const express = require("express");
const router = express.Router();
const commandeController = require("../controllers/commande.controller");

router.get("/total", commandeController.getTotalCommandes);
router.get("/getAll", commandeController.getAllCommande);
router.get("/:id", commandeController.getCommandeById);
router.post("/", commandeController.createCommande);
router.delete("/:id", commandeController.deleteCommande);

module.exports = router;

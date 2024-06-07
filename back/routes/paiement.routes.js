const express = require("express");
const router = express.Router();
const paiementController = require("../controllers/paiement.controller");

router.get("/total", paiementController.getTotalpaiements);
router.get("/getAll", paiementController.getAllPaiement);
router.get("/:id", paiementController.getById);
router.post("/", paiementController.create);
router.delete("/:id", paiementController.deleteFromList);

module.exports = router;

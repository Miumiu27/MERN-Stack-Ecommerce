const express = require("express");
const productControllers = require("../controllers/product.controller");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extension);
  },
});

const upload = multer({ storage: storage });

router.get("/getProductsCount", productControllers.getProductsCount);

router.get("/", productControllers.listProducts);
router.get("/:id", productControllers.getProduct);
router.post("/", upload.single("image"), productControllers.createProduct);
router.put("/:id", upload.single("image"), productControllers.updateProduct);
router.delete("/:id", productControllers.deleteProduct);

module.exports = router;

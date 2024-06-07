const productsModel = require("../models/product.model");

class ProductsController {
  async listProducts(req, res) {
    try {
      const products = await productsModel.listProducts();
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async getProduct(req, res) {
    try {
      const product = await productsModel.getProductById(req.params.id);
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async createProduct(req, res) {
    try {
      const newProduct = { ...req.body, image: req.file.filename };
      const productId = await productsModel.addProduct(newProduct);
      res.status(201).send(productId);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const updatedProduct = { ...req.body, image: req.file.filename };
      await productsModel.updateProduct(req.params.id, updatedProduct);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      await productsModel.deleteProduct(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async getProductsCount(req, res) {
    try {
      const count = await productsModel.getProductsCount();
      res.status(200).json({ count });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = new ProductsController();

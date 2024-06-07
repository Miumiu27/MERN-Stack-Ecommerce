const mongoose = require("mongoose");
const { Schema } = mongoose;

class ProductsModel {
  constructor() {
    try {
      mongoose.connect(process.env.CONNECTION);
      console.log("Connexion établie avec la base de données MongoDB");
    } catch (error) {
      throw error;
    }
  }

  productsSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    shortDescription: String,
    image: String,
  });

  Product = mongoose.model("Product", this.productsSchema);

  async listProducts() {
    try {
      const products = await this.Product.find().exec();
      return products;
    } catch (error) {
      throw error;
    }
  }

  async getProductById(productId) {
    try {
      const product = await this.Product.findById(productId).exec();
      return product;
    } catch (error) {
      throw error;
    }
  }

  async addProduct(newProduct) {
    try {
      const newProductMongoose = new this.Product(newProduct);
      const productRegistered = await newProductMongoose.save();
      return productRegistered._id;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(productId, updatedProduct) {
    try {
      await this.Product.findByIdAndUpdate(productId, updatedProduct);
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(productId) {
    try {
      await this.Product.findByIdAndDelete(productId);
    } catch (error) {
      throw error;
    }
  }

  async getProductsCount() {
    try {
      const count = await this.Product.countDocuments();
      return count;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductsModel();

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProducts = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    shortDescription: "",
    price: "",
    category: "",
    image: null,
  });

  const handleInputChange = (e) => {
    if (e.target.type === "file") {
      setProductData({
        ...productData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProductData({
        ...productData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", productData.name);
      formData.append("description", productData.description);
      formData.append("shortDescription", productData.shortDescription);
      formData.append("price", productData.price);
      formData.append("category", productData.category);
      formData.append("image", productData.image);

      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Le produit a été ajouté avec succès, effectuez les actions nécessaires (redirection, affichage d'un message, etc.)
        console.log("Product added successfully");
        navigate("/dashboard/all-products");
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h4 className="mb-4">Ajouter produit</h4>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div class="form-floating mb-3 my-3">
            <input
              type="text"
              class="form-control"
              required
              name="name"
              value={productData.name}
              onChange={handleInputChange}
            />
            <label for="floatingInput">Nom du produit</label>
          </div>

          <div class="form-floating my-3">
            <input
              type="text"
              class="form-control"
              required
              name="shortDescription"
              value={productData.shortDescription}
              onChange={handleInputChange}
            />
            <label for="floatingPassword">Petite Description</label>
          </div>

          <div class="form-floating my-3">
            <input
              type="text"
              class="form-control"
              required
              name="description"
              value={productData.description}
              onChange={handleInputChange}
            />
            <label for="floatingPassword">Description</label>
          </div>

          <div class="row g-2 my-3">
            <div class="col-md">
              <div class="form-floating">
                <input
                  type="number"
                  class="form-control"
                  required
                  name="price"
                  value={productData.price}
                  onChange={handleInputChange}
                />
                <label for="floatingInputGrid">Prix</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating">
                <select
                  class="form-select"
                  name="category"
                  required
                  value={productData.category}
                  onChange={handleInputChange}
                >
                  <option selected>Choisir categorie</option>
                  <option value="Sofa">Sofa</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Chair">Chair</option>
                  <option value="Watch">Watch</option>
                  <option value="Wireless">Wirelesss</option>
                </select>
              </div>
            </div>

            <div>
              <input
                className="form-control form-control-lg p-3 mt-4 "
                id="formFileLg"
                required
                type="file"
                name="image"
                onChange={handleInputChange}
              />
            </div>

            <button
              className="btn p-3 my-4"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "white",
              }}
              type="submit"
            >
              Add product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

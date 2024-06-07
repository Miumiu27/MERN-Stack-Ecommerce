import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    shortDescription: "",
    price: "",
    category: "",
    image: null,
  });

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error("Error fetching product:", error);
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

      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        navigate("/dashboard/all-products");
      } else {
        console.error("Error updating product:", response.status);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h4 className="mb-4">Mettre à jour les produits</h4>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-floating mb-3 my-3">
            <input
              type="text"
              className="form-control"
              name="name"
              required
              placeholder="Double sofa"
              value={productData.name}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  name: e.target.value,
                })
              }
            />
            <label htmlFor="floatingInput">Product name</label>
          </div>

          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              name="shortDescription"
              required
              placeholder="lorem...."
              value={productData.shortDescription}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  shortDescription: e.target.value,
                })
              }
            />
            <label htmlFor="floatingPassword">Short Description</label>
          </div>

          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              name="description"
              required
              placeholder="....."
              value={productData.description}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  description: e.target.value,
                })
              }
            />
            <label htmlFor="floatingPassword">Description</label>
          </div>

          <div className="row g-2 my-3">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  required
                  value={productData.price}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      price: e.target.value,
                    })
                  }
                />
                <label htmlFor="floatingInputGrid">Price</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select
                  className="form-select w-100"
                  aria-label="Default select example"
                  name="category"
                  required
                  value={productData.category}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      category: e.target.value,
                    })
                  }
                >
                  <option value="Wireless">Wireless</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Chair">Chair</option>
                  <option value="Watch">Watch</option>
                  <option value="Sofa">Sofa</option>
                </select>
                <label htmlFor="floatingPassword">Category</label>
              </div>
            </div>
          </div>

          <div>
            <input
              className="form-control form-control-lg p-3 mt-3"
              id="formFileLg"
              type="file"
              required
              name="image"
              onChange={(e) =>
                setProductData({
                  ...productData,
                  image: e.target.files[0],
                })
              }
            />
          </div>

          <button
            className="form-control btn p-3 my-4"
            style={{ backgroundColor: "var(--primary-color)", color: "white" }}
            type="submit"
          >
            Update product
          </button>
        </form>
      </div>
    </>
  );
};

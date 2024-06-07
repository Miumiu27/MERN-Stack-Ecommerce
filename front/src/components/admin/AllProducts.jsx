import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/all-products.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import "datatables.net-bs4/css/dataTables.bootstrap4.css";
import "datatables.net-bs4";

export const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (tableRef.current) {
      $(tableRef.current).DataTable().destroy();
      $(tableRef.current).DataTable();
    }
  }, [products]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: "DELETE",
      });
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    if ($.fn.DataTable.isDataTable(tableRef.current)) {
      $(tableRef.current).DataTable().destroy();
    }

    $(tableRef.current).DataTable({
      data: products,
      columns: [
        {
          data: null,
          render: function (data, type, row) {
            return `<img src="http://localhost:5000/uploads/${row.image}" alt="${row.name}" onError="handleImageError(this)" />`;
          },
        },
        { data: "name" },
        { data: "category" },
        {
          data: "price",
          render: function (data, type, row) {
            return `$${data}`;
          },
        },
        {
          data: null,
          render: function (data, type, row) {
            return `
              <button class="btn btn-danger mx-4 delete-product" data-product-id="${row._id}">Delete</button>
              <a href="/dashboard/update-products/${row._id}" class="update__btn">
                <button class="btn btn-success">Update</button>
              </a>
            `;
          },
        },
      ],
      language: {
        emptyTable: "No data available in table",
      },
      dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>rtip',
      responsive: true,
    });

    // Event delegation for delete button
    $(tableRef.current).on("click", ".delete-product", function () {
      const productId = $(this).data("product-id");
      deleteProduct(productId);
    });
  }, [products]);

  return (
    <>
      <Container>
        <Row>
          <Col lg="12">
            <div className="container mx-8 my-8">
              <button className="buy__btn">
                <i className="ri-add-circle-fill devis-icon "></i>
                <Link to="/dashboard/add-products" className="link_btn mx-3">
                  Ajouter nouveau produit
                </Link>
              </button>
              <h2 className="text-success my-4">All products</h2>
              <div className="row mb-3">
                <div className="col-sm-12 col-md-6">
                  {/* <div className="dataTables_length">
                    <label>
                      Show{" "}
                      <select
                        name="table_length"
                        aria-controls="table"
                        className="custom-select custom-select-sm form-control form-control-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>*/}
                </div>

                <div className="col-sm-12 col-md-6">
                  {/* <div className="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder=""
                        aria-controls="table"
                      />
                    </label>
                  </div>*/}
                </div>
              </div>

              <table ref={tableRef} className="table table text-center">
                <thead>
                  <tr className="text-center">
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
              </table>
            </div>
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
};

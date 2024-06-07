import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection3 from "../components/UI/CommonSection3";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import pig from "../assets/images/cart.gif"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const incrementQuantity = (item) => {
    dispatch(cartActions.addItem(item));
  };

  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(cartActions.decrementItem(item.id));
    }
  };

  const deleteProduct = (item) => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <Helmet title="Panier">
      <CommonSection3 title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">
                  <img src={pig} alt="" className="gif" />
                  Aucun produit n'a été ajouté au panier
                </h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr
                        item={item}
                        key={index}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        deleteProduct={deleteProduct}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h4 className="d-flex align-items-center justify-content-between">
                  Total:<span className="fs-4 fw-bold">${totalAmount}</span>
                </h4>
              </div>
              <p>
                Les taxes et les frais seront ajoutés au moment de votre devis.
                Merci
              </p>
              <button className="buy__btn">
                <Link to="/shop" className="link_btn">
                  Continuer votre Shopping
                </Link>{" "}
              </button>
              <button className="buy__btn">
                <Link to="/checkout" className="link_btn">
                  Passer au paiement
                </Link>{" "}
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item, incrementQuantity, decrementQuantity, deleteProduct }) => {
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>
        <button
          className=" btn btn-dark m-3"
          onClick={() => decrementQuantity(item)}
        >
          -
        </button>
        {item.quantity}px
        <button
          className=" btn btn-success m-3"
          onClick={() => incrementQuantity(item)}
        >
          +
        </button>
      </td>
      <td>
        <motion.i
          whileTap={{ scale: 2 }}
          onClick={() => deleteProduct(item)}
          className="ri-delete-bin-fill"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;

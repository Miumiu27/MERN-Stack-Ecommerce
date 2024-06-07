import React from "react";
import { motion } from "framer-motion";
import "../../styles/Product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { cartActions } from "../../redux/slices/cartSlice";
import { favAction } from "../../redux/slices/wishSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName || item.name,
        price: item.price,
        imgUrl: item.imgUrl || `http://localhost:5000/uploads/${item.image}`,
      })
    );
    toast.success("Produit ajouter au panier.");
  };

  const addToWishlist = () => {
    dispatch(
      favAction.addToFav({
        id: item.id,
        productName: item.productName || item.name,
        price: item.price,
        imgUrl: item.imgUrl || `http://localhost:5000/uploads/${item.image}`,
      })
    );
    toast.success("Produit ajouter au favoris.");
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item pt-4">
        <div className="product__img">
          <div className="product__card-bottom d-flex align-items-center justify-content-between ">
            <motion.span whileTap={{ scale: 1.2 }} onClick={addToWishlist}>
              <i className="ri-heart-line"></i>
            </motion.span>
          </div>

          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl || `http://localhost:5000/uploads/${item.image}`}
            alt=""
          />
        </div>

        <div className="p-2 product__info">
          <h3 className="product__name ">
            <Link to={`/shop/${item.id}`} className="link">
              {item.productName || item.name}
            </Link>
          </h3>

          <span className="text-center b-block  ">{item.category}</span>
        </div>

        <div className="product__card-bottom d-flex align-items-center justify-content-between ">
          <span className="price">${item.price}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between ">
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i class="ri-add-line "></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;

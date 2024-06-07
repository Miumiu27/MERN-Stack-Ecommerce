import React from "react";
import "../styles/Wishlist.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection6 from "../components/UI/CommonSection6";
import { Container, Col } from "reactstrap";
import { motion } from "framer-motion";
import { favAction } from "../redux/slices/wishSlice";
import { useSelector, useDispatch } from "react-redux";
import pig from "../assets/images/cart.gif"

const Wishlist= () => {
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);

  const dispatch = useDispatch();

  

  const deleteProduct = (item) => {
    dispatch(favAction.deletFavItem(item.id));
  };

  return (
    <Helmet title="Favoris">
      <CommonSection6 title="Vos Favoris " />
      <section >
        <Container >
            <Col lg="9">
              {favoriteItems.length === 0 ? (
                <h2 className="fs-4 text-center box ">
                  <img src={pig} alt="" className="gif" />
                  Aucun produit dans vos favoris
                </h2>
              ) : (
                <table className="table bordered ">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {favoriteItems.map((item, index) => (
                      <Tr
                        item={item}
                        key={index}
                       
                        deleteProduct={deleteProduct}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
           
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item,  deleteProduct }) => {
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
    
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

export default Wishlist;

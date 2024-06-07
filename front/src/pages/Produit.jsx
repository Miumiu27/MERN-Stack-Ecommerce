import React, {useState, useRef, useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import products from '../assets/data/products'
import {useParams} from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import '../styles/produit.css'
import { motion } from "framer-motion";
import ProductList from '../components/UI/ProductList'
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import {toast} from 'react-toastify';
import CommonSection4 from "../components/UI/CommonSection4";

const Produit =()=> {
    const [tab, setTab] = useState ('desc')
    const {id} = useParams();

    const reviewUser = useRef('')
    const reviewMsg= useRef('')
    const dispatch= useDispatch()


    const [rating, setRating]=useState(null)
    const product = products.find(item=> item.id === id)


    const{imgUrl, 
        productName,
         price, 
         avgRating, 
         reviews,
         category,
          description,
           shortDesc }= product;


           const relatedProducts = products.filter(item => item.category===category)
           
           const submitHandler = (e)=>{
            e.preventDefault()

            const reviewUserName = reviewUser.current.value 
            const reviewUserMsg= reviewMsg.current.value 
            

            const reviewObj={
                userName: reviewUserName,
                text: reviewUserMsg,
                rating,
            }
            console.log(reviewObj);
            toast.success('Avis enregistrer')

        };

           const addToCart =() =>{
            dispatch(cartActions.addItem({
                id,
                image: imgUrl,
                productName,
                price,

            })
            
            );

            toast.success('Produit ajouté au panier');


           };

           useEffect(()=>{
            window.scrollTo(0, 0);
           }, [product]
           );



    return <Helmet title={productName}>
        <CommonSection4 title={productName}/>

        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <img src={imgUrl} alt="" />
                    </Col>

                    <Col lg="6">
                         <div className="product__details">
                            <h2>{productName}</h2>
                            <div className="product__rating d-flex align-items-center gap-5 mb-3">
                                <div>
                                    <motion.span whileTap={{scale:1.2 }} onClick={()=> setRating(1)}><i class="ri-star-fill"></i></motion.span>
                                    <motion.span whileTap={{scale:1.2 }} onClick={()=> setRating(2)}><i class="ri-star-fill"></i></motion.span>
                                    <motion.span whileTap={{scale:1.2 }} onClick={()=> setRating(3)}><i class="ri-star-fill"></i></motion.span>
                                    <motion.span whileTap={{scale:1.2 }} onClick={()=> setRating(4)}><i class="ri-star-fill"></i></motion.span>
                                    <motion.span whileTap={{scale:1.2 }} onClick={()=> setRating(5)}><i class="ri-star-fill"></i></motion.span>
                                </div>

                                <p>(<span>{avgRating}</span>notations)</p>
                            </div>

                            <div className="d-flex align-items-center gap-5">
                            <span className="product__price">${price}</span>
                            <span>Categorie: {category}</span>
                            </div>
                            <p className="mt-3">{shortDesc}</p>

                            <motion.button whileTap={{scale:1.2}} className="buy__btn" onClick={addToCart}>Ajouter au panier</motion.button>
                         </div>
                    </Col>

                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="tab__wrapper d-flex align-items-center gap-5 ">
                            <h6 className={`${tab==='desc'? 'active__tab': "" }`} onClick={()=> setTab('desc')}>
                                Description
                            </h6>
                            <h6 className={`${tab==='rev'? 'active__tab': "" }`} onClick={()=> setTab('rev')}>
                                Avis ({reviews.length})
                            </h6>

                        </div>

                        
                        { tab ==='desc'? (
                                <div className="tab__content mt_5">
                                <p>{description}</p>
                                </div>
                            ) : (
                                <div className="product__review mt-5">
                                    <div className="review__wrapper">
                                        <ul>
                                            {
                                                reviews?.map((item, index)=>(
                                                <li kew={index} className='mb-6'>
                                                    <h6>Rakoto Faniry</h6>
                                                    <span>{item.rating} (notation)</span>
                                                    <p>{item.text}</p>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="review__form">
                                            <h4>Laissez votre experience. Merci</h4>
                                                <form action="" onSubmit={submitHandler}>
                                                    <div className="form__group">
                                                        <input type="text" placeholder="Entrez votre nom" 
                                                        ref={reviewUser}
                                                        required/>
                                                        
                                                    </div>
                                                    <div className="form__group d-flex align-items-center gap-5 rating__group">
                                                        <span onClick={()=> setRating(1)}>1<i class="ri-star-fill"></i></span>
                                                        <span onClick={()=> setRating(2)}>2<i class="ri-star-fill"></i></span>
                                                        <span onClick={()=> setRating(3)}>3<i class="ri-star-fill"></i></span>
                                                        <span onClick={()=> setRating(4)}>4<i class="ri-star-fill"></i></span>
                                                        <span onClick={()=> setRating(5)}>5<i class="ri-star-fill"></i></span>

                                                    </div>
                                                
                                                <div className="form__group">
                                                                                                                 < textarea ref={reviewMsg} rows={4} 
                                                        
                                                        input type="text" placeholder="Votre avis..." required/>
                                                        
                                                </div>
                                                <motion.button whileTap={{scale:1.2}} type="submit" className="buy__btn">Submit</motion.button>

                                                
                                                </form>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        
                    </Col>
                    <Col lg='12' className="mt-5">
                        <h2 className="related__title"> Vous pourriez aussi aimé:</h2>

                    </Col>

                    <ProductList data={relatedProducts}/>

                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Produit ;
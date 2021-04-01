import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Button, ButtonGroup, Container } from "react-bootstrap";
import productActions from "../../redux/actions/product.actions";
import Product from "../../components/Products/Product";
import SearchBar from "../../components/SearchBar/SearchBar";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import arrowdown from "../../images/arrowdown.svg";
import "./style.css";

export default function HomePage() {
    const dispatch = useDispatch();
    // const keywords = useParams().keywords;
    const products = useSelector((state) => state.product.products);
    // const loading = useSelector((state) => state.product.loading);
    useEffect(() => {
        dispatch(productActions.getAllProducts());
    }, [dispatch]);
    return(
        <>
        <div>
        <HomeCarousel></HomeCarousel>
        </div>
        <div>
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <a href="/"><img src="https://i.imgur.com/BORmKTB.png" className="aboutus-info-image"></img></a>   
                </Col>
                <Col sm={12} md={6}>
                    <a href="/delivery"><img src="https://i.imgur.com/R2kvHKJ.png" className="aboutus-info-image"></img></a>
                </Col>
            </Row>
        </Container>
        </div>
        <div>
            <h2 className="ordernow">ORDER NOW</h2>
            <img 
                src={arrowdown} 
                style={{height: "20px", display: "block", marginLeft: "auto", marginRight: "auto"}}>
            </img>
        </div>
        <div>
        <SearchBar></SearchBar>
        </div>
        <Row className="cards-wrapper">
            <>
                {/* {!keywords} */}
                {products.map((p, index) => (
                <Col key={index} sm={12} md={6} lg={4} xl={3}>
                    <Product product={p} />
                </Col>
                ))}
            </>
        </Row>
        {/* <Pagination /> */}
    </>
    );
}
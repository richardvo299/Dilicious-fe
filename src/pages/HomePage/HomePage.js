import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Button, ButtonGroup, Container } from "react-bootstrap";
import productActions from "../../redux/actions/product.actions";
import categoryActions from "../../redux/actions/category.actions";
import Product from "../../components/Products/Product";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "../../components/Categories/Categories";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import Pagination from "../../components/Pagination/Pagination";
import arrowdown from "../../images/arrowdown.svg";
import "./style.css";

export default function HomePage() {
    const [page, setPage] = useState(1);
    // const [searchTerm, setSearchTerm] = useState("");
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const totalPages = useSelector((state) => state.product.pageCount);
    console.log("total pages", totalPages);

    const dispatch = useDispatch();
    const keywords = useParams().keywords;
    const products = useSelector((state) => state.product.products);
    console.log(products);
    const categories = useSelector((state) => state.category.categories);
    const loading = useSelector((state) => state.product.loading);
    useEffect(() => {
        dispatch(productActions.getAllProducts(keywords, page));
        dispatch(categoryActions.getAllCategories());
    }, [dispatch, keywords, page]);

    const handlePageChange = (page) => {
        setPage(page.selected + 1);
      };

    const handleCat = (e) => {
        e.preventDefault();
        console.log("this cat is clicked");
    }  
    return(
        <>
        <Helmet>
                <meta charSet='utf-8' />
                <title>Dilicious - Home</title>
                <link rel='canonical' href='http://mysite.com/example' />
        </Helmet>
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
        
        <Row className="categories-row">
            <Col>
            <Row>
            <Button>All</Button>
            {categories.map((c, index) => (
                <Categories category={c} handleCat={handleCat} key={index}></Categories>))}
            </Row>
            </Col>
            <Col md={{ span: 4, offset: 4 }}><SearchBar></SearchBar></Col>
        </Row>
        </div>
        <hr className="homepagehr"></hr>
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
        <Pagination 
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            selectedPage={page - 1}
        />
    </>
    );
}
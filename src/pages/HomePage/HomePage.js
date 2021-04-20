import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Button, Container } from "react-bootstrap";
import productActions from "../../redux/actions/product.actions";
import categoryActions from "../../redux/actions/category.actions";
import Product from "../../components/Products/Product";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "../../components/Categories/Categories";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import Testimonials from "../../components/Testimonials/Testimonials";
import Pagination from "../../components/Pagination/Pagination";
import arrowdown from "../../images/arrowdown.svg";
import Loader from "react-loader-spinner";
import "./style.css";

export default function HomePage() {
    const [page, setPage] = useState(1);
    // const [searchTerm, setSearchTerm] = useState("");
    const [cat, setCat] = useState(null);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const totalPages = useSelector((state) => state.product.pageCount);
    // console.log("total pages", totalPages);

    const dispatch = useDispatch();
    const keywords = useParams().keywords;
    const products = useSelector((state) => state.product.products);
    console.log(products);
    const categories = useSelector((state) => state.category.categories);
    const loading = useSelector((state) => state.product.loading);

    useEffect(() => {
        dispatch(productActions.getAllProducts(keywords, page, cat));
        dispatch(categoryActions.getAllCategories());
    }, [dispatch, keywords, page, cat]);

    const handlePageChange = (page) => {
        setPage(page.selected + 1);
    };

    // const handleCat = (e) => {
    //     e.preventDefault();
    //     console.log("this cat is clicked");
    // }

    const onClickAll = (e) => {
        e.preventDefault();
        setCat(null);
        // console.log(cat);
    }

    // console.log("current cat", cat);
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
                    <a href="#ordersection"><img src="https://i.imgur.com/BORmKTB.png" alt="" className="aboutus-info-image"></img></a>   
                </Col>
                <Col sm={12} md={6}>
                    <a href="/delivery"><img src="https://i.imgur.com/R2kvHKJ.png" alt="" className="aboutus-info-image"></img></a>
                </Col>
            </Row>
        </Container>
        </div>
        <div style={{marginTop: "16px"}}>
            <h2 id="ordersection" className="ordernow">ORDER NOW</h2>
            <img 
                src={arrowdown} 
                style={{height: "20px", display: "block", marginLeft: "auto", marginRight: "auto"}}
                alt="">
            </img>
        </div>
        <div>
        {!loading
            ?
            <>
            <Row className="categories-row">
                <Col md={6}>
                <Row>
                <Button className="cat-but" onClick={onClickAll}>All</Button>
                <Button className="cat-but" onClick={(e) => setCat("chocolate")}>Chocolate</Button>
                <Button className="cat-but" onClick={(e) => setCat("matcha")}>Matcha</Button>
                <Button className="cat-but" onClick={(e) => setCat("cheese")}>Cheese</Button>
                <Button className="cat-but" onClick={(e) => setCat("fruits")}>Fruits</Button>
                <Button className="cat-but" onClick={(e) => setCat("others")}>Others</Button>
                {/* {categories.map((c, index) => (
                    <Categories category={c} handleCat={handleCat} key={index}></Categories>))} */}
                </Row>
                </Col>
                <Col md={6}><SearchBar></SearchBar></Col>
            </Row>
            <hr className="homepagehr"></hr>
            <Row className="cards-wrapper">
                    {/* {!keywords} */}
                    {products.map((p, index) => (
                    <Col key={index} sm={12} md={6} lg={4} xl={3}>
                        <Product product={p} />
                    </Col>
                    ))}
            </Row>
            <Row>
            <Pagination 
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                selectedPage={page - 1}
            />
            </Row>
            </>
            :
            <>
            <div className="py-5 d-flex justify-content-center align-items-center">
            <Loader
                type="Watch"
                color="#4E3021"
                height={200}
                width={200}
                timeout={3000}
            />
            </div>
            <h3 style={{textAlign: "center"}}><i>Loading... Please wait...</i></h3>
            </>}
        </div>
        
        <Testimonials />
    </>
    );
}
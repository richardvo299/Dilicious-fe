import React from 'react';
import ReactPaginate from "react-paginate";
import { Col, Row, Card, Form, Button, Modal, Container, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import productActions from "../../redux/actions/product.actions";
import "./style.css"

const Pagination = ({ selectedPage, handlePageChange, totalPages }) => {
    return (
        <Row className="page-row">
            <Col>
            <Row style={{marginLeft: "0", marginRight: "0", marginBottom: "32px", marginTop: "16px"}}>
            <strong>
            <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            forcePage={selectedPage}
            />
            </strong>
            </Row>
            </Col>
        </Row>
        
    )
}

export default Pagination
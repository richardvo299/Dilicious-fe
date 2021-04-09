import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Modal, ButtonGroup, Container, Card, Form, Table } from "react-bootstrap";
import Categories from "../../components/Categories/Categories";
import categoryActions from "../../redux/actions/category.actions";
import Product from "../../components/Products/Product";
import productActions from "../../redux/actions/product.actions";
import Pagination from "../../components/Pagination/Pagination";
import CurrencyFormat from 'react-currency-format';
import "./style.css";

function AdminPage() {
    const [menuname, setMenuname] = useState("Orders");
    const [show, setShow] = useState(false);
    const [page, setPage] = useState(1);
    const categories = useSelector((state) => state.category.categories);
    const totalPages = useSelector((state) => state.product.pageCount);
    const products = useSelector((state) => state.product.products);
    console.log("list of products", products);
    console.log("total pages", totalPages);
    const [category, setCategory] = useState({
        name: "",
    });
    const handlePageChange = (page) => {
        setPage(page.selected + 1);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productActions.getAllProducts("", page, null));
        dispatch(categoryActions.getAllCategories());
    }, [dispatch, page]);

    const handleclick = (e) => {
        e.preventDefault();
        console.log("orders is clicked");
        setMenuname("Orders");
    }

    const handleclickproducts = (e) => {
        e.preventDefault();
        setMenuname("Products");
    }

    const handleclickcat = (e) => {
        e.preventDefault();
        setMenuname("Categories");
    }

    // const handleCat = (e) => {
    //     e.preventDefault();
    //     console.log("this cat is clicked");
    // };

    const createCategory = (e) => {
        e.preventDefault();
        console.log("submitted this category");
        dispatch(categoryActions.createCategory(category.name));
    };

    const deleteCategory = (id) => {
        console.log("Category Ids", id);
        if (id) dispatch(categoryActions.deleteCategory(id));
    }

    const onChange = (e) => {
        setCategory({...category, name: e.target.value});
    }

    const onToggleModal = (e) => {
        e.preventDefault();
        setShow(!show);
    };

    console.log("current category input", category);

    return (
        <div>
            <h1>Admin Page</h1>
            <Row style={{marginRight: "0", marginLeft: "0"}}>
                <Col md={3}>
                <Card className='p-3 box-shadow'>
                    <h4>Menu</h4>
                    <h5 onClick={handleclick}>Orders</h5>
                    <h5 onClick={handleclickproducts}>Products</h5>
                    <h5 onClick={handleclickcat}>Categories</h5>
                </Card>
                </Col>
                <Col md={9}>
                <Card className='p-3 box-shadow'>
                    <h4><strong>{menuname} management</strong></h4>
                    {menuname === "Orders" 
                        ?
// Orders Management 
                        <>
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>No.</th>
                            <th>Customer's Name</th>
                            <th>Order Date</th>
                            <th>Delivery Date</th>
                            <th>Items</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Tia Kofi</td>
                            <td>06/04/2021</td>
                            <td>07/04/2021</td>
                            <td>8</td>
                            <td>1,440,000</td>
                            <td>Pending</td>
                            <td><Button>Edit</Button><Button>Cancel</Button></td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Bimini Bon Boulash</td>
                            <td>02/04/2021</td>
                            <td>04/04/2021</td>
                            <td>6</td>
                            <td>996,000</td>
                            <td>Confirmed</td>
                            <td><Button>Edit</Button><Button>Cancel</Button></td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Tayce</td>
                            <td>25/03/2021</td>
                            <td>27/03/2021</td>
                            <td>2</td>
                            <td>330,000</td>
                            <td>Ready</td>
                            <td><Button>Edit</Button><Button>Cancel</Button></td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Utica Queen</td>
                            <td>22/03/2021</td>
                            <td>23/03/2021</td>
                            <td>4</td>
                            <td>650,000</td>
                            <td>Done</td>
                            <td><Button>Edit</Button><Button>Cancel</Button></td>
                            </tr>
                        </tbody>
                        </Table>
                        </>
//Products Management
                        : menuname === "Products"
                            ? 
                            <>
{/* Create Products */}
                            <h4>Create new product</h4>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="Product Name" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Product Description</Form.Label>
                                    <Form.Control type="text" placeholder="Product Description" />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="number" placeholder="Price" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Size</Form.Label>
                                            <Form.Control type="text" placeholder="Size" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Product Image Url</Form.Label>
                                    <Form.Control type="url" placeholder="Image URL" />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridOption">
                                    <Form.Label>Option 1</Form.Label>
                                    <Form.Control as="select" defaultValue="Default">
                                        <option>Default</option>
                                        <option>Dairy-free</option>
                                        <option>Gluten-free</option>
                                        <option>Less sugar</option>
                                        <option>Vegan</option>
                                    </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridOption">
                                    <Form.Label>Option 2</Form.Label>
                                    <Form.Control as="select" defaultValue="Default">
                                        <option>Default</option>
                                        <option>Dairy-free</option>
                                        <option>Gluten-free</option>
                                        <option>Less sugar</option>
                                        <option>Vegan</option>
                                    </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridOption">
                                    <Form.Label>Option 3</Form.Label>
                                    <Form.Control as="select" defaultValue="Default">
                                        <option>Default</option>
                                        <option>Dairy-free</option>
                                        <option>Gluten-free</option>
                                        <option>Less sugar</option>
                                        <option>Vegan</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridTopping">
                                    <Form.Label>Topping 1</Form.Label>
                                    <Form.Control as="select" defaultValue="None">
                                        <option>None</option>
                                        <option>Berries</option>
                                        <option>Whipped Cream</option>
                                        <option>Cocoa Powder</option>
                                        <option>White Chips</option>
                                        <option>Choco Chips</option>
                                        <option>Raisins</option>
                                        <option>Choco Syrup</option>
                                        <option>Matcha Powder</option>
                                        <option>Coffee Syrup</option>
                                    </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridTopping">
                                    <Form.Label>Topping 2</Form.Label>
                                    <Form.Control as="select" defaultValue="None">
                                        <option>None</option>
                                        <option>Berries</option>
                                        <option>Whipped Cream</option>
                                        <option>Cocoa Powder</option>
                                        <option>White Chips</option>
                                        <option>Choco Chips</option>
                                        <option>Raisins</option>
                                        <option>Choco Syrup</option>
                                        <option>Matcha Powder</option>
                                        <option>Coffee Syrup</option>
                                    </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridTopping">
                                    <Form.Label>Topping 3</Form.Label>
                                    <Form.Control as="select" defaultValue="None">
                                        <option>None</option>
                                        <option>Berries</option>
                                        <option>Whipped Cream</option>
                                        <option>Cocoa Powder</option>
                                        <option>White Chips</option>
                                        <option>Choco Chips</option>
                                        <option>Raisins</option>
                                        <option>Choco Syrup</option>
                                        <option>Matcha Powder</option>
                                        <option>Coffee Syrup</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group as={Col} controlId="formGridTopping">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control as="select" defaultValue="chocolate">
                                    {categories.map((c, index) => (
                                        <option key={index}>{c.name}</option>
                                    ))}
                                    </Form.Control>
                                    </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <hr></hr>
{/* Product List */}
                            <h4>Products List</h4>
                            <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((p, index) => (
                                <tr key={index}>
                                <td>{p.name}</td>
                                <td><CurrencyFormat value={p.price} displayType={'text'} thousandSeparator={true}/> VND</td>
                                <td><img alt="" style={{height: "50px"}} src={p.images[0].imageUrl}></img></td>
                                <td>{p.categories[0].name}</td>
                                <td><Button onClick={onToggleModal}>View</Button><Button>Edit</Button><Button>Delete</Button></td>
                                </tr>))}
                            </tbody>
                            </Table>
                            {products.map((p, index) => (
                            <Modal
                                show={show}
                                dialogClassName='modal-90w'
                                onHide={() => setShow(false)}
                                aria-labelledby='example-custom-modal-styling-title'
                                className='d-flex align-items-center justify-content-center'
                                key={index}
                            >
                                <Modal.Header>
                                <Modal.Title className="text-warning">
                                    PRODUCT DETAILS
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                {/* <Form
                                    className='d-flex justify-content-center'
                                > */}
                                <Row>
                                    <Col xs={12} md={6} className="modal-image-wrapper">
                                    <img src={p.images[0].imageUrl} alt="" className="modal-image"></img>
                                    </Col>
                                    <Col xs={12} md={6}>
                                    <Form>
                                        <Form.Group controlId='productinfo'>
                                        <h2>
                                        {p.name}
                                        </h2>
                                        Price: <b><CurrencyFormat value={p.price} displayType={'text'} thousandSeparator={true}/></b> VND
                                        <br></br>
                                        Size: {p.size}
                                        <br></br>
                                        {p.description}
                                        </Form.Group>
                                    </Form>
                                    <Form.Row>
                                        <fieldset>
                                        <Form.Group as={Col} controlId='options'>
                                        <Form.Label as="legend">
                                            Options
                                        </Form.Label>
                                        <Col>
                                            <Form.Check
                                            type="radio"
                                            label={p.options[0].option}
                                            name="formHorizontalRadios"
                                            id="option1"
                                            checked
                                            />
                                            <Form.Check
                                            type="radio"
                                            label={p.options[1].option}
                                            name="formHorizontalRadios"
                                            id="option2"
                                            />
                                            <Form.Check
                                            type="radio"
                                            label={p.options[2].option}
                                            name="formHorizontalRadios"
                                            id="option3"
                                            />
                                        </Col>
                                        </Form.Group>
                                        </fieldset>
                                        <fieldset>
                                        <Form.Group as={Col} controlId='image'>
                                        <Form.Label as="legend">
                                            Toppings
                                        </Form.Label>
                                        <Col>
                                            <Form.Check
                                            type="radio"
                                            label={p.toppings[0].topping}
                                            name="formHorizontalRadios2"
                                            id="topping1"
                                            checked
                                            />
                                            <Form.Check
                                            type="radio"
                                            label={p.toppings[1].topping}
                                            name="formHorizontalRadios2"
                                            id="topping2"
                                            />
                                            <Form.Check
                                            type="radio"
                                            label={p.toppings[2].topping}
                                            name="formHorizontalRadios2"
                                            id="topping3"
                                            />
                                        </Col>
                                        </Form.Group>
                                        </fieldset>
                                    </Form.Row>
                                    <Button className='font-weight-bold cancel-button' variant='warning' onClick={onToggleModal}>
                                        Back to Page
                                    </Button>
                                    </Col>
                                </Row>
                                </Modal.Body>
                            </Modal>))}
                            <Pagination 
                                totalPages={totalPages}
                                handlePageChange={handlePageChange}
                                selectedPage={page - 1}
                            />
                            </>
                            :
//Category management
                            <>
                            <Row className="category-admin-row">
                                <form onSubmit={createCategory}>
                                <input type="text" name="category" value={category.name} placeholder="Category Name" required onChange={onChange}>
                                </input>
                                <button type="submit">Add Category</button>
                                </form>
                            </Row>
                            <br></br>
                            <h5>List of categories here</h5>
                            {categories.map((c, index) => (
                            <Row className="category-admin-row">
                            <Categories category={c} key={index}></Categories>
                            <button onClick={()=> deleteCategory(c._id)}>Remove</button>
                            </Row>))}
                            </>
                    }
                </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AdminPage

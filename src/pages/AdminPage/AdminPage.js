import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, ButtonGroup, Container, Card, Form, Table } from "react-bootstrap";
import Categories from "../../components/Categories/Categories";
import categoryActions from "../../redux/actions/category.actions";
import axios from 'axios';
import { Next } from 'react-bootstrap/esm/PageItem';
import "./style.css";

function AdminPage() {
    const [menuname, setMenuname] = useState("Orders");
    const categories = useSelector((state) => state.category.categories);
    const [category, setCategory] = useState({
        name: "",
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryActions.getAllCategories());
    }, [dispatch]);
    // const [token] = state.auth.accessToken;

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

    const handleCat = (e) => {
        e.preventDefault();
        console.log("this cat is clicked");
    };

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

    console.log("current category input", category);

    return (
        <div>
            <h1>Admin Page</h1>
            <Row>
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
                    <h4>{menuname} management</h4>
                    {menuname === "Orders" 
                        ? 
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
                        : menuname === "Products"
                            ? 
                            <>
                            <h4>Products Management</h4>
                            <Row className="category-admin-row">
                                <form>
                                <input type="text" name="product" value="" placeholder="Product Name" required></input>
                                <input type="text" placeholder="Product Description"></input>
                                <input type="number" placeholder="Price"></input>
                                <input placeholder="Size"></input>
                                <input placeholder="IMG Link"></input>
                                <label for="options">Choose options:</label>
                                <select id="options" name="options">
                                    <option value="volvo">Default</option>
                                    <option value="saab">Dairy-free</option>
                                    <option value="fiat">Gluten-free</option>
                                    <option value="audi">Less sugar</option>
                                </select>
                                <select id="options" name="options">
                                    <option value="volvo">Default</option>
                                    <option value="saab">Dairy-free</option>
                                    <option value="fiat">Gluten-free</option>
                                    <option value="audi">Less sugar</option>
                                </select>
                                <select id="options" name="options">
                                    <option value="volvo">Default</option>
                                    <option value="saab">Dairy-free</option>
                                    <option value="fiat">Gluten-free</option>
                                    <option value="audi">Less sugar</option>
                                </select>
                                <label for="toppings">Choose toppings:</label>
                                <select id="toppings" name="toppings">
                                    <option value="volvo">None</option>
                                    <option value="saab">Berries</option>
                                    <option value="fiat">Whipped Cream</option>
                                    <option value="audi">Cocoa Powder</option>
                                    <option value="audi">White Chips</option>
                                    <option value="audi">Choco Chips</option>
                                    <option value="audi">Raisins</option>
                                    <option value="audi">Choco Syrup</option>
                                    <option value="audi">Matcha Powder</option>
                                    <option value="audi">Coffee Syrup</option>

                                </select>
                                <select id="toppings" name="toppings">
                                    <option value="volvo">Default</option>
                                    <option value="saab">Dairy-free</option>
                                    <option value="fiat">Gluten-free</option>
                                    <option value="audi">Less sugar</option>
                                </select>
                                <select id="toppings" name="toppings">
                                    <option value="volvo">Default</option>
                                    <option value="saab">Dairy-free</option>
                                    <option value="fiat">Gluten-free</option>
                                    <option value="audi">Less sugar</option>
                                </select>
                                <button>Add Product</button>
                                </form>
                            </Row>
                            </>
                            :
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
                            <Categories category={c} handleCat={handleCat} key={index}></Categories>
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

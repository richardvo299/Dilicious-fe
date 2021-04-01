import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Navbar, Form, Nav, Button, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const SearchBar = () => {
    const history = useHistory();
    const [keywords, setKeywords] = useState("");
    const handleChange = (e) => setKeywords(e.target.value);
    console.log(keywords);
    const handleSubmit = (e) => {
        e.preventDefault();
        keywords.trim()
        ? history.push(`/search/${keywords}`)
        : history.push("");
        setKeywords("");
    };
    return (
        <div>
            <Form inline className="search-bar" onSubmit={handleSubmit}>
                <FormControl type="text" placeholder="Search item..." className="mr-sm-2 search-bar-input" onChange={handleChange} />
                {/* <Button variant="outline-success">Search</Button> */}
                <FontAwesomeIcon icon="search" size='md' />
            </Form>
        </div>
    );
};

export default SearchBar;

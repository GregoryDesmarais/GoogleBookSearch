import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

class Search extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    };

    render() {
        return (<div>
            <Nav />
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>(React) Google Books Search</h1>
                            <h2>Search for and Save Books of Interest</h2>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default Search;

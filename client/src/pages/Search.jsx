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
            <Container fluid>
                <form className="border">
                    <Row fluid>
                        <Col size="md-12">
                            <p>Book Search</p>
                        </Col>
                    </Row>
                    <Row fluid>
                        <Col size="md-12">
                            <input type="text" className="form-control" />
                        </Col>
                    </Row>
                    <Row fluid>
                        <Col size="md-1" float="right my-2">
                            <button className="form-control btn btn-primary float-right">Search</button>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>
        );
    }
}

export default Search;

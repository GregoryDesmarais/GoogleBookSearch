import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
import SaveResults from "../components/SaveResults";
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: [],
    };

    componentDidMount() {
        API.getBooks()
            .then(res => {
                console.log(res.data)
                this.setState({ books: res.data })
            })
            .catch(err => console.log(err));
    }

    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

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
                <SaveResults 
                books = {this.state.books}
                handleDeleteButton={this.handleDeleteButton}
                />
            </Container>
        </div>
        );
    }
}

export default Saved;

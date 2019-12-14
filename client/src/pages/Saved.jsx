import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
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
                <div className="card">
                    <div className="card-body">
                        <div>
                            <h3>Search Results</h3>
                            {this.state.books.map(book => {
                                return (
                                    <li className="list-group-item">
                                        <Row>
                                            <h3 style={{width: "100%"}}>{book.title}
                                            <div className="float-right">
                                                <button className="saveBook btn btn-danger" onClick={() => this.handleDeleteButton(book._id)}>
                                                    Delete Book
                                                        </button>
                                                <a href={book.link} target="_blank" rel="noopener noreferrer">
                                                    <button className="viewBook btn btn-success">
                                                        View Book
                                                            </button>
                                                </a>
                                            </div>
                                        </h3>
                                        </Row>
                                        <Row>
                                            <h4 className="bookAuthor">Written By: {book.author ? book.author.join(", ") : book.author}</h4>
                                        </Row>
                                        <Row id={book.title + "Card"} key={book._id}>
                                            <Col size="2" className="bookImage">
                                                <img src={book.image} alt={book.title} />
                                            </Col>
                                            <Col size="1" className="emptyCol" />
                                            <Col size="9" className="bookInfo">
                                                <Row>
                                                    <p className="bookDescription">{book.description}</p>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <br></br>
                                        <Row >
                                        </Row>
                                    </li>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        );
    }
}

export default Saved;

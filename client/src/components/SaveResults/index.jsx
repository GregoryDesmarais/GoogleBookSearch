import React from "react";
// import "./style.css";
import { Row, Col } from "../Grid"

const SaveResults = props => {
    return (
        <div className="card">
            <div className="card-body">
                <div>
                    <h3>Saved Books</h3>
                    {props.books.map((book, idx) => {
                        return (
                            <li className="list-group-item" key={idx}>
                                <Row>
                                    <h3 style={{ width: "100%" }}>{book.title}
                                        <div className="float-right">
                                            <button className="saveBook btn btn-danger" onClick={() => props.handleDeleteButton(book._id)}>
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
                                    <h4 className="bookAuthor">Written By: {book.author.join(", ")}</h4>
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
    );
}

export default SaveResults
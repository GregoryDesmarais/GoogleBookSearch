import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SearchResult from "../components/SearchResult"

class Search extends Component {
    state = {
        search: "",
        books: [],
        message: ""
    };

    //Function to retrieve the value of the search box.
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    }

    //Submit button function
    handleFormSubmit = event => {
        event.preventDefault();
        //First, connect to the Goole Books API, providing the values from the search box.
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    // Store results array
                    let results = res.data.items;
                    // Map through the array to convert to an array of objects.
                    results = results.map(result => {
                        result = {
                            key: result.id || "Not available via API",
                            id: result.id || "Not available via API",
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors || ["Author(s) not available via API"],
                            description: result.volumeInfo.description || "Description not available via API",
                            image: result.volumeInfo.imageLinks.thumbnail || "Image not available via API",
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    // Set the books state to the new array of book objects
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSaveButton = event => {
        event.preventDefault();
        // First, run a filter on all books based on book.id
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        // Save the filtered object, and pass to the saveBook API call.
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(res => this.setState({ message: alert(`Added ${res.data.title} to the list!`) }))
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
                <form className="border">
                    <Row fluid>
                        <Col size="md-12">
                            <h3>Book Search</h3>
                        </Col>
                    </Row>
                    <Row fluid>
                        <Col size="md-12">
                            <input type="text" className="form-control" onChange={this.handleInputChange} />
                        </Col>
                    </Row>
                    <Row fluid>
                        <Col size="md-2" float="right my-2">
                            <button type="submit" className="form-control btn btn-primary float-right" onClick={this.handleFormSubmit}>Search</button>
                        </Col>
                    </Row>
                </form>
            </Container>
            <br /><br />
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <SearchResult books={this.state.books} handleSaveButton={this.handleSaveButton} />
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default Search;

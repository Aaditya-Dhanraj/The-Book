import React, { Component } from "react";
import Header from "../Components/header/header";
import Footer from "../Components/header/Footer";
import BooksDetailstwo from "./bookDetails2";
import axios from "axios";

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          this.props.bookID +
          "&key=AIzaSyDfAqnEyvfolQ-Ghtfo2EL0KAoAFWzf8Yc"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          isLoading: false,
          book: response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="has-fixed-footer">
          <Header />
          {this.state.isLoading ? <h1>Is Loading....</h1> : <BooksDetailstwo />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default BookDetails;

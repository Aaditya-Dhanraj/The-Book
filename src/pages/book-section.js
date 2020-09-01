import React, { Component } from "react";
import Header from "../Components/header/header";
import Footer from "../Components/header/Footer";
import BookContainer from "./book-container";
import Booksecfunc from "./bookSectionfunc";
import axios from "axios";

class BooksSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=search+terms" +
          this.props.categoryName
      )
      .then((response) => {
        this.setState({
          books: response.data.items,
          isLoading: false,
        });
      });
  }
  componentDidUpdate(previousProps) {
    if (previousProps.categoryName !== this.props.categoryName) {
      this.setState({
        isLoading: true,
      });
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            this.props.categoryName +
            "&key=AIzaSyDfAqnEyvfolQ-Ghtfo2EL0KAoAFWzf8Yc"
        )
        .then((response) => {
          this.setState({
            books: response.data.items,
            isLoading: false,
          });
        });
    }
  }

  render() {
    return (
      <div>
        <div className="has-fixed-footer">
          <Header />
          {this.state.isLoading ? (
            <div className="weak">
              <h1>
                Your connection is weak with me.....Have Patience, It won't take
                that long......
              </h1>
            </div>
          ) : (
            <Booksecfunc
              title={this.props.categoryName}
              books={this.state.books}
            />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

BooksSection.defaultProps = {
  categoryName: "HTML",
};

export default BooksSection;

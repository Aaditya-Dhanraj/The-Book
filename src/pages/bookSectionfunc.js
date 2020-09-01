import React from "react";
import BookContainer from "./book-container";
import Header from "../Components/header/header";
import BooksSection from "./book-section";
import { render } from "@testing-library/react";

let Booksecfunc = (props) => {
    return (
      <section id="books-section">
        <div className="container">
          <div className="section-title">
            <h1>{props.title + " Books"}</h1>
          </div>
          <BookContainer books={props.books} />
        </div>
      </section>
    )
};

export default Booksecfunc;

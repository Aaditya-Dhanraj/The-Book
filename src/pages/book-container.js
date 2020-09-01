import React from "react";
import Abook from "./aBook";

let BookContainer = (props) => {
  return (
    <div className="books-container">
      {props.books.map((e, i) => {
        return <Abook book={e} key={i} />;
      })}
    </div>
  );
};

export default BookContainer;

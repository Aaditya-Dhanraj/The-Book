import React from "react";
import { Link } from "react-router-dom";

let Abook = (props) => {
  console.log(props.book);
  let BookInfor = {
    image: props.book.volumeInfo.imageLinks
      ? props.book.volumeInfo.imageLinks.thumbnail
      : "https://picsum.photos/250/200",
    title: props.book.volumeInfo.title,
    author: props.book.volumeInfo.authors[0],
    id: props.book.id,
  };
  console.log(BookInfor.image);
  return (
    <div className="book">
      <div className="book-img">
        <img src={BookInfor.image} alt={BookInfor.title} />
      </div>
      <div className="book-info"></div>
      <div className="book-title">
        <h3>{BookInfor.title}</h3>
      </div>
      <div className="book-author">
        <p>
          By <em> {BookInfor.author}</em>
        </p>
      </div>
      <div className="book-call-to-action">
        <Link to={"book/" + BookInfor.id} className="btn btn-highlight">
          Detail
        </Link>
      </div>
    </div>
  );
};

export default Abook;

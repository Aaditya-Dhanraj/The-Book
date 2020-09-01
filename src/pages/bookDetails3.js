import React from "react";
import BookInfo from "./BookInfo";
import BookReview from "./bookReview";
import BookDetails from "./book-detail";

let BooksDEtailsthree = (props) => {
  let bookInfortwo = {
    image: props.book.items.volumeInfo.imageLinks.thumbnail
      ? props.book.items.volumeInfo.imageLinks.thumbnail
      : "https://picsum.photos/250/200",
    title: props.book.volumeInfo.title,
    author: props.book.volumeInfo.authors[0],
    description: props.book.volumeInfo.description,
    ratings: {
      averageRating: props.book.volumeInfo.averageRating,
      ratingCount: props.book.volumeInfo.ratingCount,
    },
  };
  return (
    <div className="book-container">
      <div className="book-img">
        <img src={bookInfortwo.image} alt={bookInfortwo.title} />
      </div>
      <BookInfo
        title={bookInfortwo.title}
        author={bookInfortwo.author}
        description={bookInfortwo.description}
      />
      <BookReview />
    </div>
  );
};

export default BooksDEtailsthree;

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BooksSection from "./pages/book-section";
import BookDetails from "./pages/book-detail";
import PageNotFound from "./pages/page-not-found";
import Abook from "./pages/aBook";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={BooksSection} />
            <Route
              path="/books/category/:categoryName"
              exact
              render={(props) => {
                let { categoryName } = props.match.params;
                return <BooksSection categoryName={categoryName} />;
              }}
            />
            <Route
              path="/books/:bookID"
              render={(props) => {
                let { bookID } = props.match.params;
                return <BookDetails bookID={bookID} />;
              }}
            />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

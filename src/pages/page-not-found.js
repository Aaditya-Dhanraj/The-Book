import React from "react";
import Header from "../Components/header/header";
import Footer from "../Components/header/Footer";


let PageNotFound = (props) => {
  return (
    <div>
      <div className="has-fixed-footer">
          <Header />
          <section id="Page-not-found">
            <h1>Page Not Found</h1>
          </section>
        </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;

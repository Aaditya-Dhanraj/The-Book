import React from "react";
import { NavLink, Link } from "react-router-dom";

let Header = (props) => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <nav>
            <Link to="/" className="logo">
              <i className="fas fa-book-open"></i>
            </Link>
            <ul className="catigories">
              <li>
                <NavLink to="/books/category/HTML">HTML</NavLink>
              </li>
              <li>
                <NavLink to="/books/category/CSS">CSS</NavLink>
              </li>

              <li>
                <NavLink to="/books/category/NodeJs"> NodeJs</NavLink>
              </li>
              <li>
                <NavLink to="/books/category/JavaScript">JavaScript</NavLink>
              </li>
              <li>
                <NavLink to="/books/category/ReactJs">ReactJs</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React from "react";
import propTypes from "prop-types";

export default function navbar(props) {
  return (
    <>
      <nav className="navbar bg-success">
        <div className="container">
          <a className="navbar-brand text-light" href="/">
            {" "}
            <strong>
              {" "}
              <em>{props.title}</em>
            </strong>
          </a>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav"> */}
      {/* <a className="nav-link active" aria-current="page" href="/">
                {props.home}
              </a>
              <a className="nav-link" href="/">
                About
              </a>
              <a className="nav-link" href="/">
                Pricing
              </a> 
            </div>
            {/* <div className="container-fluid">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div> 
          </div>
        </div>
      </nav>*/}
    </>
  );
}
navbar.propTypes = {
  title: propTypes.string.isRequired,
  home: propTypes.string.isRequired,
};
navbar.defaultProps = {
  title: "title here",
  home: "Home",
};

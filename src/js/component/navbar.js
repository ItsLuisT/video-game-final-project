import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
            <h2 className="ion-nontext-decorate link-light">
              <i className="fa-solid fa-meteor mx-2"></i>Blue Comet Gaming
            </h2>
        </Link>
        <form className="d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Find Games"
            aria-label="Search"
          ></input>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div>
          <Link to="/aboutUs">
            <button className="btn btn-primary">
              <h5>About Us</h5>
            </button>
          </Link>

          {/* login */}

          <Link to="/logIn">
            <button className="btn btn-primary">
              <h5>Log In/Sign Up</h5>
            </button>
          </Link>


        </div>
      </div>
    </nav>
  );
};

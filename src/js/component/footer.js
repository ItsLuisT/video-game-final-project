import React, { Component } from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

export const Footer = () => (
  // <body className="d-flex flex-column footer">
  <footer className="flex-shrink-0 py-4 bg-dark text-white-50 mt-auto">
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h3>Blue Comet Gaming</h3>
        </div>
        <div className="d-flex col-4">
          <p className="text-white text-center">Check out our Githubs</p>
          <button className="btn btn-outline-primary">
            <a
              href="https://www.github.com/Th3c0d3d1/"
              className="text-decoration-none link-light"
            >
              Steven
            </a>
          </button>
          <button className="btn btn-outline-primary">
            <a
              href="https://www.github.com/ItsLuisT/"
              className="text-decoration-none link-light"
            >
              Luis
            </a>
          </button>
          <button className="btn btn-outline-primary">
            <a
              href="https://www.github.com/JKD111995/"
              className="text-decoration-none link-light"
            >
              Jacob
            </a>
          </button>
        </div>
      </div>
    </div>
  </footer>
  // </body>
);

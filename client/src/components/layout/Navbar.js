import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="gradient-45deg-deep-grey">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" data-target="mobile" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>

              <ul className="hide-on-med-and-down">
                <li>
                  <Link to="/">
                    <h4 className="flow-text black-text txt-title">
                      Administrator
                    </h4>
                  </Link>
                </li>

                <li>
                  <Link className="grey-text" to="/">
                    Home
                  </Link>
                </li>
              </ul>
              <ul className="right">
                <li>
                  <Link className="grey-text" to="/register">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link className="grey-text" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

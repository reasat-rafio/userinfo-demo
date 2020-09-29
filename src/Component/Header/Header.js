import React from "react";
import { useAuth } from "../Login/UseAuth";

const Header = () => {
  const auth = useAuth();

  return (
    // <nav classNameName="header">
    //   <a href="/home">Home</a>
    //   <a href="/details">Details</a>
    //   <a href="/more">More</a>
    // </nav>

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Hidden brand
          </a>
          <ul className=" navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active ">
              <a className="nav-link" href="/home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/details">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/more" tabindex="-1">
                More
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <a
              href="/login"
              className="btn btn-outline-info my-2 my-sm-0"
              type="submit"
            >
              {auth.user ? "LogOut" : "LogIn"}{" "}
            </a>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;

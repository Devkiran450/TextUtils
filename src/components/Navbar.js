import React from "react";
import { useState } from 'react';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export const Navbar = (props) => {

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.state} bg-${props.state}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link active" href="/about">
                  {props.aboutText}
                </a>
              </li> */}
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.enableMode}/>
              <label className={`form-check-label text-${props.text} mx-3`} htmlFor="flexSwitchCheckDefault">Enable {props.text} Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    // aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"Set Title Here",
    // aboutText:"Set About Text Here"
}

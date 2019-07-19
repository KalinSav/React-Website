import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

const CountryProfile = props => {
  const navLinks = props.state.data.map(button => (
    <li key={button.title}>
      <NavLink to={button.navLink}>{button.title}</NavLink>
    </li>
  ));
  const routers = props.state.data.map(contentPiece => (
    <Route
      key={contentPiece.title}
      path={contentPiece.navLink}
      component={contentPiece.content}
    />
  ));
  return (
    <HashRouter>
      {/* This span is necessary in order to avoid TransitionGroup applyng to the code below */}
      <span />
      <div className="countryProfile">
        <div className="buttonsMenu">
          <h2>{props.state.countryName}</h2>
          <ul className="countryProfileMenu">{navLinks}</ul>
        </div>
        <span style={{ fontStyle: "italic", fontSize: "0.75em" }}>
          Please select a category
        </span>
        <div className="countryProfileContent">{routers}</div>
        <br />
        <button className="button" onClick={() => window.history.go(-1)}>
          Back
        </button>
      </div>
    </HashRouter>
  );
};

export default CountryProfile;

import React from "react";
import { Route, HashRouter } from "react-router-dom";
import CountryTile from "../CountryTile.js";
import Ghana from "./Countries/Ghana.js";
import Nigeria from "./Countries/Nigeria.js";
import IvoryCoast from "./Countries/IvoryCoast.js";

class Africa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryTiles: [
        {
          tileTitle: "Ghana",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
          tileAlt: "Ghana",
          navLink: `${this.props.location.pathname}/Ghana`,
          component: Ghana,
          tileId: 1
        },
        {
          tileTitle: "Nigeria",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
          tileAlt: "Nigeria",
          navLink: `${this.props.location.pathname}/Nigeria`,
          component: Nigeria,
          tileId: 2
        },
        {
          tileTitle: "Ivory Coast",
          tileImgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg",
          tileAlt: "Ivory Coast",
          navLink: `${this.props.location.pathname}/IvoryCoast`,
          component: IvoryCoast,
          tileId: 3
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementById("countryTile").style.display = "none";
  }

  render() {
    const routers = this.state.countryTiles.map(country => (
      <Route
        key={country.tileId}
        path={country.navLink}
        component={country.component}
      />
    ));
    return (
      <HashRouter>
        <div id="listOfCountryTiles">
          <CountryTile state={this.state} onClick={this.handleClick} />
        </div>
        {routers}
      </HashRouter>
    );
  }
}

export default Africa;

// import React from "react";
// import { NavLink, HashRouter } from "react-router-dom";

// import lifecycle from "react-pure-lifecycle";

// const methods = {
//   componentDidMount() {
//     // const countryTile = document.getElementById("countryTile");
//     // if (countryTile.style.display !== "inline-block") {
//     //   countryTile.style.display = "inline-block";
//     //   console.log("display inline-block");
//     // }
//     //   console.log("display inline");
//   }
// };

// const betweenTileAndProfile = e => {
//   console.log("betweenTileAndProfile in CountryTile.js");
//   // This makes sure you are taken to the relevant country profile when you click on its tile (if you've clicked Back button prior to it)
//   // const listOfCountryTiles = document.getElementById("listOfCountryTiles");
//   // const countryProfile = document.getElementById("countryProfile");
//   // if (e.currentTarget.style.display !== "none") {
//   //   listOfCountryTiles.style.display = "none";
//   //   // This if statement is to remove an error caused by the yet-inexistatant countryProfile
//   //   if (countryProfile !== null) {
//   //     countryProfile.removeAttribute("style");
//   //   }
//   // }
// };

// const CountryTile = props => {
//   const alphabetisedCountryTiles = props.state.countryTiles.sort(function(
//     a,
//     b
//   ) {
//     const countryNameA = a.tileTitle.toUpperCase();
//     const countryNameB = b.tileTitle.toUpperCase();
//     return countryNameA < countryNameB
//       ? -1
//       : countryNameA > countryNameB
//       ? 1
//       : 0;
//   });

//   const countryTilesList = alphabetisedCountryTiles.map(countryTile => {
//     return (
//       <NavLink to={countryTile.navLink} key={countryTile.tileId}>
//         <div className="countryTile" onClick={e => betweenTileAndProfile(e)}>
//           <h2>{countryTile.tileTitle}</h2>
//           <img src={countryTile.tileImgSrc} alt={countryTile.tileAlt} />
//         </div>
//       </NavLink>
//     );
//   });
//   return <HashRouter>{countryTilesList}</HashRouter>;
// };

// export default lifecycle(methods)(CountryTile);

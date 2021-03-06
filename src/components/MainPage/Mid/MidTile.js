import React from "react";

const MidTile = ({ midTiles }) => {
  const midTilesList = midTiles.map(midTile => {
    return (
      <div className="midTile" key={midTile.tileId}>
        <h2>{midTile.tileTitle}</h2>
        <button className="button">{midTile.buttonText}</button>
      </div>
    );
  });
  return <div>{midTilesList}</div>;
};

export default MidTile;

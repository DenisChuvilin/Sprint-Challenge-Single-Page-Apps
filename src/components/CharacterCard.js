import React from "react";

export default function CharacterCard({character}) {

  const {name, species, status, gender, image} = character;

  return (
    <div className="character">
    <h2>{name}</h2>
    <img src={image} />
    <div className="species">
      Species: <em>{species}</em>
    </div>
    <div className="status">
      Status: <strong>{status}</strong>
    </div>
    <h3 className="gender">{gender}</h3>
    </div>
    );
}

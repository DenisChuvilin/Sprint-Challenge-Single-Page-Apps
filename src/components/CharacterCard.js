import React from "react";

export default function CharacterCard({ character }) {

  const { name, species, status, gender, image } = character;

  return (
    <div className="character">
      <h2>{name}</h2>
      <img src={image} alt="character"/>
      <div className="description">
        <strong>{species}</strong> <strong>{gender}</strong> who happens to be <strong>{status}</strong>
      </div>
    </div>
  );
}

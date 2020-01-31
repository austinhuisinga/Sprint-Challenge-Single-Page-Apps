import React from "react";

export default function CharacterCard(props) {
  return (
    <div className='character-card'>
      <h2>{props.character.name}</h2>
      <p>{props.character.status}</p>
      <p>{props.character.species}</p>
      <p>{props.character.type}</p>
      <p>{props.character.gender}</p>
    </div>
  )
}
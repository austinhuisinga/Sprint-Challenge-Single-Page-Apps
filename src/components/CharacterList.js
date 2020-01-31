import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import { Row } from "reactstrap";

export default function CharacterList(props) {

  return (
      <section className="character-list">
        <h1>Characters</h1>
        <Row>
          {props.chars.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Row>
      </section>
  );
}

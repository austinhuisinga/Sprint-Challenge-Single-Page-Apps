import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import { Row } from "reactstrap";

export default function CharacterList(props) {

  const nextPage = e => {
    props.setPage(props.page + 1);
  }
  const previousPage = e => {
    props.setPage(props.page - 1);
  }

  return (
      <section className="character-list">
        <h1>Characters</h1>
        <Row>
          {props.chars.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Row>
        <button className='next' onClick={previousPage}>Previous</button>
        <button className='previous' onClick={nextPage}>Next</button>
      </section>
  );
}

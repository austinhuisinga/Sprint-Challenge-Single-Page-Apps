import React, { useState } from "react";
import CharacterList from './CharacterList';

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <input 
          type='text'
          name='Search'
          placeholder='Search Character Name'
          onChange={handleChange}
        />
      </form>
      <CharacterList chars={props.characters.filter(info =>
      info.name.toLowerCase().includes(searchTerm.toLowerCase())
      )} />
        
      {/* {props.characters.map(el => (
          <li key={el.id}>{el}</li>
        ))} */}
    </section>
  );
}

import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import axios from 'axios';

import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from "./components/SearchForm.js";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  // const [page, setPage] = useState(1);
  // const nextPage = e => {
  //   setPage(page + 1);
  // }
  // const previousPage = e => {
  //   setPage(page - 1);
  // }

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log('you messed up', err);
      })
  }, [page]);
  
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters/' render={props => <CharacterList  chars={characters} page={page} setPage={setPage} />} />
      <Route path='/search/' render={props => <SearchForm characters={characters} page={page} setPage={setPage} />} />
    </main>
  );
}

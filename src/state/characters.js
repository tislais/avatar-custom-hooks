import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/api';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then(setCharacters())
  }, []);

  return characters;
};



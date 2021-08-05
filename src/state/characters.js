import { useEffect, useState } from 'react';
import { fetchCharacters, fetchCharacter } from '../services/api';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then(setCharacters())
  }, []);

  return characters;
};

export const useCharacter = (id) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacter(id).then(setCharacter);
  }, []);

  return character;
}


import { useEffect, useState } from 'react';
import { fetchCharacters, fetchCharacter } from '../services/api';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then(setCharacters)
    .finally(() => setLoading(false));
  }, []);

  return { characters, loading };
};

export const useCharacter = (id) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacter(id).then(setCharacter);
  }, [id]);

  return character;
}


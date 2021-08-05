import { useEffect, useState } from 'react';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {});

  return characters;
};
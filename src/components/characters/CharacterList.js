import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../state/characters';
import Character from './Character';

const li = `
  p-5 
  bg-white 
  rounded 
  shadow-md 
  transform
  hover:scale-105 
  transition 
  duration-300
  ease-in-out 
  cursor-pointer
`;

const ul = `
  grid 
  sm:grid-cols-2 
  md:grid-cols-3 
  lg:grid-cols-4 
  xl:grid-cols-5 
  2xl:grid-cols-6 
  p-4 
  gap-4
`;

const CharacterList = () => {
  const { characters, loading } = useCharacters();
  if (loading) return <h1>Loading...</h1>

  const characterElements = characters.map((character, i) => (
    <li key={character._id} 
      className={li}>
      <Link to={`/character/${character._id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));
  
  return <ul className={ul}>{characterElements}</ul>;
}

export default CharacterList;
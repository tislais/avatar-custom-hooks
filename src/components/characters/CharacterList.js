import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../state/characters';
import Character from './Character';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map((character, i) => (
    <li key={character.id} 
      className="p-5 bg-white rounded shadow-md hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
      <Link to={`/character/${character.id}`}>
        <Character {...Character} />
      </Link>
    </li>
  ));
  
  return <ul>{characterElements}</ul>;
}

export default CharacterList;
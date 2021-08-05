import React from 'react';
import Character from './Character';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map((character, i) => (
    <li key={character + i} 
      className="p-5 bg-white rounded shadow-md hover:scale-105 transition duration-300 ease-in-out cursor-pointer">

      <Character
        id={character.id}
        name={character.name}
        allies={character.allies}
        enemies={character.enemies}
        photo={character.photo}
      />

    </li>
  ));

  
  return <ul>{characterElements}</ul>;
}


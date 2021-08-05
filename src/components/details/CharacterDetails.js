import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../state/characters';

const CharacterDetails = () => {
  const { id } = useParams();
  const character = useCharacter(id);
  if (!character) return <h1>Loading...</h1>;
  
 return (
  <div className="flex justify-center items-center">
    <div className="flex flex-col bg-white p-12 mt-12 rounded-xl shadow-md w-1/3 gap-y-2">
      <img src={character.photoUrl} alt={character.name} />
      <h1 className="text-3xl my-6">{character.name}</h1>
      <p><span className="font-bold">Gender: </span><span>{character.gender}</span></p>
      <p><span className="font-bold">Hair Color: </span><span>{character.hair}</span></p>
      <p><span className="font-bold">Position: </span><span>{character.position}</span></p>
      <p><span className="font-bold">Affiliation: </span><span>{character.affiliation}</span></p>
      <p><span className="font-bold">Allies: </span><span>{character.allies}</span></p>
      <p><span className="font-bold">Enemies: </span><span>{character.enemies}</span></p>
    </div>
  </div>
 )
}

export default CharacterDetails;


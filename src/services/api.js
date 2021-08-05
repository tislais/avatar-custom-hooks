export const fetchCharacters = async () => {
  const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
  const { results } = await res.json();

  return results;
}


export const fetchCharacter = async (id) => {
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);

  return res.json;
};




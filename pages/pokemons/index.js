import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );
      const { results } = await response.json();
      setPokemons(results);
    })();
  }, []);
  return (
    <>
      <h2>Pokemons super trendies</h2>
      <ul>
        {pokemons &&
          pokemons.map((pokemon) => (
            <li key={pokemon.name}>Name: {pokemon.name}</li>
          ))}
      </ul>
    </>
  );
};

export default Pokemon;

import { useEffect, useState } from "react";

import Link from "next/link";

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
      <ul className="list-group">
        {pokemons &&
          pokemons.map((pokemon) => (
            <li className="list-group-item" key={pokemon.name}>
              {pokemon.name}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Pokemon;

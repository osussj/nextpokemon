import Link from "next/link";

const MyPokemons = ({ pokemons }) => {
  return (
    <>
      <h1>MyPokemons SSG</h1>
      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={pokemon.id} className="list-group">
            <Link href={`/mypokemons/ssg/${pokemon.id}`}>
              <a className="list-group-item list-group-item-action list-group-item-light">
                {pokemon.name}
              </a>
            </Link>
          </div>
        ))}
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://pokedex-carlos.herokuapp.com/pokemon");
  const pokemons = await response.json();
  return {
    props: {
      pokemons: pokemons,
    },
  };
};
export default MyPokemons;

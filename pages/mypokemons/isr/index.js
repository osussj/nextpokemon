import Link from "next/link";
const MyPokemons = ({ pokemons }) => {
  return (
    <>
      <h1>MyPokemons ISR</h1>
      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={pokemon.id} className="list-group">
            <Link href={`/mypokemons/isr/${pokemon.id}`}>
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
  const response = await fetch("https://pokedex-carlos.herokuapp.com/pokemon/");
  const pokemon = await response.json();
  return {
    props: {
      pokemons: pokemon,
    },
    revalidate: 20,
  };
};

export default MyPokemons;

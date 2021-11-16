import Link from "next/link";
const MyPokemons = ({ pokemons }) => {
  return (
    <>
      <h1>MyPokemons isr</h1>
      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <Link href={`/mypokemons/isr/${pokemon.id}`}>
              <a>{pokemon.name}</a>
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
    revalidate: 30,
  };
};

export default MyPokemons;

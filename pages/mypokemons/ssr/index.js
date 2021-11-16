import Link from "next/link";

const MyPokemons = ({ pokemons }) => {
  return (
    <>
      <h1>MyPokemons ssr</h1>
      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <Link href={`/mypokemons/ssr/${pokemon.id}`}>
              <a>{pokemon.name}</a>
            </Link>
          </div>
        ))}
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("https://pokedex-carlos.herokuapp.com/pokemon");
  const myPokemons = await response.json();
  return {
    props: {
      pokemons: myPokemons,
    },
  };
};
export default MyPokemons;

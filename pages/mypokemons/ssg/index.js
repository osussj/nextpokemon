import Link from "next/link";

const MyPokemons = ({ pokemons }) => {
  return (
    <>
      <h1>MyPokemons ssg</h1>
      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <Link href={`/mypokemons/ssg/${pokemon.id}`}>
              <a>{pokemon.name}</a>
            </Link>
          </div>
        ))}
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("https://pokedex-carlos.herokuapp.com/pokemon");
  const pokemons = await response.json();
  return {
    props: {
      pokemons: pokemons,
    },
  };
};
export default MyPokemons;

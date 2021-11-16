const MyPokemons = ({ pokemons }) => {
  return (
    <>
      <h1>MyPokemons ssr</h1>
      <ul>
        {pokemons &&
          pokemons.map((pokemon) => <li key={pokemon.id}>{pokemon.name}</li>)}
      </ul>
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

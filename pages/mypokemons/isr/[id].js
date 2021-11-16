import { useRouter } from "next/router";

const MyPokemons = ({ pokemon }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>LOADING</h2>;
  }
  return (
    <>
      <h1>MyPokemons isr</h1>
      <h2>{pokemon.name}</h2>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("https://pokedex-carlos.herokuapp.com/pokemon");
  const pokemons = await response.json();
  const paths = pokemons.map((pokemon) => ({
    params: { id: "" + pokemon.id },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    "https://pokedex-carlos.herokuapp.com/pokemon/" + id
  );
  const pokemon = await response.json();
  return {
    props: {
      pokemon: pokemon,
    },
    revalidate: 30,
  };
};
export default MyPokemons;

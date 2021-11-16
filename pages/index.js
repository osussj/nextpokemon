import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>MY POKEMONS</h1>
      <nav>
        <div>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link href="/mypokemons/isr">
            <a>Isr</a>
          </Link>
        </div>
        <div>
          <Link href="/mypokemons/ssg">
            <a>Ssg</a>
          </Link>
        </div>
        <div>
          <Link href="/pokemons/">
            <a>Csr</a>
          </Link>
        </div>
        <div>
          <Link href="/mypokemons/ssr">
            <a>Ssr</a>
          </Link>
        </div>
      </nav>
    </>
  );
}

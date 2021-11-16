import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/pokemons/">
            <a>Pokemon CSR</a>
          </Link>
          <Link href="/mypokemons/isr">
            <a>Pokemon ISR</a>
          </Link>
          <Link href="/mypokemons/ssg">
            <a>Pokemon SSG</a>
          </Link>
          <Link href="/mypokemons/ssr">
            <a>Pokemon SSR</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

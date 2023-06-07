import Head from "next/head";
import Home from "./Home";

export default function App() {
  return (
    <>
      <Head>
        <title>Tribos</title>
        <meta name="description" content="Tribos Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./logo.jpg" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}

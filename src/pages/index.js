import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ong BC</title>
        <meta name="description" content="Buscamos ajudar e melhorar a vida das pessoas através de oportunidades reais" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.jpeg" />

      </Head>
      <Main/>
    </div>
  );
}

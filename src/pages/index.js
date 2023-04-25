import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Isaque | Front-End Developer</title>
        <meta name="description" content="Sou um Desenvolvedor Front-End com experiência na construção de projetos e-commerce." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main/>
    </div>
  );
}

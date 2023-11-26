import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <title>Pokemons</title> */}
        <meta name="description" content="Pet project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./public/squirtle.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

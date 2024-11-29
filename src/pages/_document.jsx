import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="./logos/favicons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="./logos/favicons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="./logos/favicons/favicon-96x96.png"
          sizes="96x96"
        />

        <link
          rel="icon"
          href="./logos/favicons/android-icon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          href="./logos/favicons/android-icon-144x144.png"
          sizes="144x144"
        />

        <link
          rel="apple-touch-icon"
          href="./logos/favicons/apple-icon-57x57.png"
          sizes="57x57"
        />
        <link
          rel="apple-touch-icon"
          href="./logos/favicons/apple-icon-60x60.png"
          sizes="60x60"
        />
        <link
          rel="apple-touch-icon"
          href="./logos/favicons/apple-icon-72x72.png"
          sizes="72x72"
        />
        <link
          rel="apple-touch-icon"
          href="./logos/favicons/apple-icon-76x76.png"
          sizes="76x76"
        />
        <link
          rel="apple-touch-icon"
          href="./logos/favicons/apple-icon-144x144.png"
          sizes="144x144"
        />
        <link
          rel="apple-touch-icon"
          href="./logos/favicons/apple-icon-152x152.png"
          sizes="152x152"
        />
        <link
          rel="apple-touch-icon"
          href="./logos/favicons/apple-icon-180x180.png"
          sizes="180x180"
        />

        <meta
          name="msapplication-TileImage"
          content="./logos/favicons/android-icon-144x144.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="description"
          content="Tribos oferece uma experiência sonora única com um repertório diversificado, dos clássicos dos anos 80 aos hits atuais do pop."
        />
        <meta name="author" content="Cesar Dimi" />
        <meta property="og:url" content="https://tribosbanda.com.br/" />
        <link rel="canonical" href="https://www.tribosbanda.com.br" />
        <meta
          property="og:title"
          content="Tribos - Experiência Sonora Única | Repertório Diversificado | Banda Tribos Niterói - RJ"
        />
        <meta
          name="twitter:title"
          content="Tribos - Experiência Sonora Única | Repertório Diversificado | Banda Tribos Niterói - RJ"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Tenha uma experiência sonora única com Tribos. Repertório diversificado que abrange clássicos dos anos 80 até os hits atuais do pop. Atmosfera vibrante e dançante em cada apresentação."
        />
        <meta
          name="twitter:description"
          content="Tenha uma experiência sonora única com Tribos. Repertório diversificado que abrange clássicos dos anos 80 até os hits atuais do pop. Atmosfera vibrante e dançante em cada apresentação."
        />
        <meta property="og:site_name" content="Banda Tribos Niterói - RJ" />
        <meta
          name="keywords"
          content="Tribos, experiência sonora, repertório diversificado, banda, música, pop, anos 80, entretenimento, eventos"
        />
        <meta property="og:image" content="preview.jpg" />
        <meta name="twitter:image" content="preview.jpg" />
        <meta
          property="og:image:alt"
          content="Imagem da Banda Tribos em apresentação ao vivo."
        />
        <meta
          name="twitter:image:alt"
          content="Imagem da Banda Tribos em apresentação ao vivo."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://tribosbanda.com.br" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://tribosbanda.com.br/"
        />

        <link rel="manifest" href="/manifest.json" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

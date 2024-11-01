import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="logos/favicons/favicon.ico" />

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
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

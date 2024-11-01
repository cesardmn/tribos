import Head from 'next/head'
import styles from '@styles/Home.module.css'
import { MdWhatsapp } from 'react-icons/md'
import { TbBrandInstagram, TbBrandYoutube } from 'react-icons/tb'

const Social = () => {
  return (
    <ul>
      <li>
        <a
          href="https://www.instagram.com/tribosbanda/"
          target="_blank"
          rel="noopener"
        >
          <TbBrandInstagram />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/@tribosbanda"
          target="_blank"
          rel="noopener"
        >
          <TbBrandYoutube />
        </a>
      </li>
      <li>
        <a href="https://wa.me/5521996311993" target="_blank" rel="noopener">
          <MdWhatsapp />
        </a>
      </li>
    </ul>
  )
}

const Home = () => {
  const date = new Date().getFullYear()

  return (
    <>
      <Head>
        <title>Tribos - Experiência Sonora Única</title>
      </Head>
      <div className={styles.page}>
        <header>
          <img
            src="logos/new_logo.svg"
            alt="Logo da Tribos, uma caveira 
        amarela de óculos escuros."
          />
          <Social />
        </header>

        <main>
          <div className={styles.container}>
            <h1>Tribos</h1>
            <div className={styles.imageSection}>
              <img
                src="logos/tribos_transparencia.png"
                alt="Imagem Descritiva"
                className={styles.responsiveImage}
              />
            </div>

            <p>
              Tribos oferece uma experiência sonora única, com um repertório
              diversificado que abrange diversos estilos musicais, desde
              clássicos dos anos 80 até os hits atuais do pop, proporcionando
              uma atmosfera vibrante e dançante em cada apresentação.
            </p>
          </div>
        </main>

        <footer>© Tribos {date} - by Cesar Dimi</footer>
      </div>
    </>
  )
}

export default Home

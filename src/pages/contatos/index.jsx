import styles from './styles.module.css'
import { MdWhatsapp } from 'react-icons/md'
import { TbBrandInstagram, TbBrandYoutube } from 'react-icons/tb'
import { LuPhone, LuHome } from 'react-icons/lu'
import { useState } from 'react'

const Social = () => {
  return (
    <ul className={styles.social}>
      <li>
        <a
          href="https://www.instagram.com/tribosbanda/"
          target="_blank"
          rel="noopener"
        >
          <span className={styles.socialIcon}>
            <TbBrandInstagram />
          </span>
          <span className={styles.socialext}>@tribosbanda</span>
        </a>
      </li>
      <li>
        <a href="https://www.tribosbanda.com.br" target="_blank" rel="noopener">
          <span className={styles.socialIcon}>
            <LuHome />
          </span>
          <span className={styles.socialext}>tribosbanda.com.br</span>
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/5521996311993?text=Oi,%20sobre%20a%20banda%20Tribos,%20peguei%20seu%20contato%20no%20cart%C3%A3o."
          target="_blank"
          rel="noopener"
        >
          <span className={styles.socialIcon}>
            <MdWhatsapp />
          </span>
          <span className={styles.socialext}>WhatsApp</span>
        </a>
      </li>
      <li>
        <a href="tel:21996311993" target="_blank" rel="noopener">
          <span className={styles.socialIcon}>
            <LuPhone />
          </span>
          <span className={styles.socialext}>(21) 99631-1993</span>
        </a>
      </li>
    </ul>
  )
}

const Contatos = () => {
  const [qrCode, setQrCode] = useState(true)

  const toggleQrCode = () => {
    setQrCode(!qrCode)
  }

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className={styles.top} onClick={toggleQrCode}>
          <dic className={styles.logo}>
            <img src="/logos/skeleton/transparente.svg" alt="" />
          </dic>

          <div className={styles.hero}>
            <img src="/logos/tribos_transparencia.png" alt="" />
            <h2>Música para eventos</h2>
          </div>
        </div>

        <dib className={styles.bottom}>
          {qrCode ? (
            <>
              <img src="/qrcode/dark.svg" alt="" className={styles.qrcode} />
              <h2>(21) 99631-1993</h2>
            </>
          ) : (
            <Social />
          )}
        </dib>
      </div>
    </div>
  )
}

export default Contatos

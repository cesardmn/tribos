import styles from './styles.module.css'

const data = [
  {
    '1 - VOZ PRINCIPAL:': [
      '–  PONTO DE AC',
      '–  CABO XLR EXTRA',
      '–  1 PEDESTAL',
      '–  VIA DE FONE',
    ],
  },
  {
    '2 – BAIXO:': ['–  PONTO DE AC', '–  DI', '–  VIA DE FONE'],
  },
  {
    '3 – BATERIA:': ['–  PONTO DE AC', '–  VIA DE FONE'],
  },
  {
    '4 – GUITARRA:': [
      '–  PONTO DE AC',
      '–  VIA DE FONE',
      '–  1 DI PARA GUITARRA',
      '–  2 DI PARA CLICK E VS',
      '–  2 MICROFONES',
      '–  CABO XLR EXTRA',
    ],
  },
]

const waText = `Olá, a respeito do rider técnico e mapa de palco da Banda Tribos.`
const waUrl = `https://wa.me/5521982399315?text=${waText}`

const Rider = () => {
  return (
    <div className={styles.page}>
      <div className={styles.checklistContainer}>
        <div className={styles.top}>
          <h2>@tribosbanda</h2>
          <div className={styles.imgContainer}>
            <img
              src="./logos/skeleton/transparente.svg"
              alt="Logo Tribos Banda"
            />
          </div>
        </div>

        <ul className={styles.checklist}>
          {data.map((item, index) => {
            const key = Object.keys(item)[0]
            return (
              <li key={index} className={styles.checklistItem}>
                <h3>{key}</h3>
                <ul>
                  {item[key].map((detail, idx) => (
                    <li key={idx} className={styles.checklistDetail}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>

        <div className={styles.contact}>
          <a href={waUrl} target="_blank" rel="noopener">
            <p>contatos:</p>
            <p>
              <span className={styles.socialext}>Joaca: (21) 99631-1993</span>
            </p>
            <p>
              <span className={styles.socialext}>
                Dimi: &nbsp; (21) 98239-9315
              </span>
            </p>
          </a>
        </div>
      </div>

      <div className={styles.map}>
        <div className={styles.imgContainer}>
          <img src="./map.webp" alt="Mapa" />
        </div>
      </div>
    </div>
  )
}

export default Rider

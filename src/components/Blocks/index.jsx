import styles from './styles.module.css'

export default function Blocks({ pdf, setPdf }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file && file.type === 'application/pdf') {
      setPdf(URL.createObjectURL(file)) // Atualiza o estado no componente pai
    } else {
      alert('Por favor, selecione um arquivo PDF.')
    }
  }

  return (
    <div className={styles.blocks}>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      {pdf && <embed src={pdf} type="application/pdf" />}{' '}
      {/* Usando o pdf que veio do estado pai */}
    </div>
  )
}

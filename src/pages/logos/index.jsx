import React, { useState } from 'react'
import styles from './styles.module.css'
import { IoIosArrowBack, IoIosArrowForward, IoMdDownload } from 'react-icons/io'

const images = [
  'logos/skeleton/transparente.svg',
  'logos/tribos_transparencia.png',
  'logos/tribos_relevo.jpeg',
  'logos/tribos_preto.jpeg',
  'logos/tribos_branca.jpeg',
]

const Logos = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [title, setTitle] = useState(
    images[0].split('/').pop().split('.').slice(0, -1).join('.')
  )

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentIndex(nextIndex)
    setTitle(
      images[nextIndex].split('/').pop().split('.').slice(0, -1).join('.')
    )
  }

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(prevIndex)
    setTitle(
      images[prevIndex].split('/').pop().split('.').slice(0, -1).join('.')
    )
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = images[currentIndex]
    link.download = `logo_${currentIndex + 1}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className={styles.logos}>
      <div className={styles.container}>
        <IoIosArrowBack className={styles.icon} onClick={handlePrevious} />
        <img src={images[currentIndex]} alt={`Logo ${currentIndex + 1}`} />
        <IoIosArrowForward className={styles.icon} onClick={handleNext} />
      </div>
      <div className={styles.menu}>
        <h2>{title}</h2>
        <IoMdDownload onClick={handleDownload} />
      </div>
    </div>
  )
}

export default Logos

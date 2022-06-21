import React from 'react'
import styles from './FeedPhotoItens.module.css'
import Image from '../Helper/Image'

const FeedPhotosItens = ({photo, setModalPhoto}) => {

  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photos} onClick={handleClick}>
        <Image src={photo.src} alt={photo.title} />
        <span>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItens
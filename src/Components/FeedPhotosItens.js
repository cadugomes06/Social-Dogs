import React from 'react'
import styles from './FeedPhotoItens.module.css'

const FeedPhotosItens = ({photo}) => {

  return (
    <li className={styles.photos}>
        <img src={photo.src} alt={photo.title} />
        <span>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItens
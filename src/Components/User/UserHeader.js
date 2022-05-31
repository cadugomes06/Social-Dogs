import React from 'react'
import { useLocation } from 'react-router-dom'
import UserHeaderNav from '../User/UserHeaderNav'
import styles from './UserHeader.module.css'

const UserHeader = () => {
    const [title, setTitle] = React.useState()
    const location = useLocation()

    React.useEffect(() => {
        const { pathname } = location
        switch (pathname) {
            case '/conta/postar':
            setTitle('Poste sua foto');
            break;
            case '/conta/estatisticas':
            setTitle('Estatísticas')
            break;
            default:
                setTitle('Minha conta')
        }


    }, [location])


  return (
    <header className={styles.header}>
        <h1 className='title'>{title}</h1>
        <UserHeaderNav />
    </header>
  )
}

export default UserHeader
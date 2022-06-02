import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg'
import { ReactComponent as AdicionarFotos } from '../../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import UseMedia from '../../Hooks/UseMedia'

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext)
    const [mobileMenu, setMobileMenu] = React.useState(false)

    const mobile = UseMedia('(max-width: 40rem)')
    console.log(mobile)

    const {pathname} = useLocation()
    React.useEffect(() => {
        setMobileMenu(false)
    }, [])

  return (
      <>
      {mobile &&  <button aria-label='menu'
       onClick={() => setMobileMenu(!mobileMenu) } 
       className={`${styles.mobileButton} ${mobileMenu && styles.buttonMobileActive}`} >
           </button>}
      
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`} >
        <NavLink to='/conta' end >
            <MinhasFotos/>
            {mobile && 'Minhas fotos'}
            </NavLink>

        <NavLink  to='/conta/estatisticas'>
            <Estatisticas/>
            {mobile && 'Estatísticas'}
            </NavLink>

        <NavLink  to='/conta/postar' >
            <AdicionarFotos/>
            {mobile && 'Adicionar Fotos'}
            </NavLink>

        <button onClick={userLogout}>
            <Sair/>
            {mobile && 'Sair'}
            </button>
    </nav>
    </>
  )
}

export default UserHeaderNav
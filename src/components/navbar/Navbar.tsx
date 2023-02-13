import React, {useState, useEffect} from 'react'

//icons imports
import menuIcon from '../../assets/icons/burger-bar.png'
import closeIcon from '../../assets/icons/close.png'


//react-router-dom import
import {Link, useNavigate} from "react-router-dom"

//constants import
import {PATH} from "../../constants/routePaths.enum"

//style import
import s from './Navbar.module.css'
import {navConstants} from "../../constants/constants"

export const Navbar = () => {
  const [click, setClick] = useState(false)
  const [iconMenu, setIconMenu] = useState(true)
  const navigate = useNavigate()

  const handleClick = () => {
    setClick(!click);
  }
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setIconMenu(false)
    } else {
      setIconMenu(true)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', showButton)
    showButton();
  }, []);


  const toMainPageHandler = () => navigate(PATH.MAIN)
  const navigateToRouteHandler = (route: string) => navigate(route)


  const menuImage = <img onClick={handleClick} className={s.menuIcon} src={click ? closeIcon : menuIcon} alt="menu"/>

  const navItems = navConstants.map(item => <li key={item.id} onClick={() => navigateToRouteHandler(item.route)} className={`${s.navItem}`}>{item.name}</li>)


  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <div className={s.menuContainer}>
          <h2 className={s.logo} onClick={toMainPageHandler}>Blog</h2>
          <nav>
            <ul className={click ? `${s.navMenu} ${s.navMenuActive}` : s.navMenu}>
              {navItems}
            </ul>
          </nav>

        </div>

        <div className={s.actionContainer}>
          {
            iconMenu ? '' : menuImage
          }
        </div>

      </div>
    </header>
  )
}
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenu, BiLogoMagento } from 'react-icons/bi';

import styles from './NavBar.module.css';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateMenu = () => {
    setIsOpen((state) => !state);
  };

  console.log(isOpen);
  return (
    <header>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">
            <BiLogoMagento />
          </NavLink>
        </div>
        <div className={styles.nav}>
          <div className={styles.mobile} onClick={handleStateMenu}>
            <BiMenu />
          </div>
          <div className={`${styles.isMobile} ${isOpen ? styles.isOpen : ''}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={handleStateMenu}>
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink to="/series" onClick={handleStateMenu}>
                  Séries
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies" onClick={handleStateMenu}>
                  Filmes
                </NavLink>
              </li>
              <li>
                <NavLink to="/animes" onClick={handleStateMenu}>
                  Animes
                </NavLink>
              </li>
              <li>
                <NavLink to="games" onClick={handleStateMenu}>
                  Jogos
                </NavLink>
              </li>
            </ul>
            <div className={styles.account} onClick={handleStateMenu}>
              <NavLink to="/register">Minha conta</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

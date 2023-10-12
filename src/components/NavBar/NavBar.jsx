import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenu, BiLogoMagento } from 'react-icons/bi';

import styles from './NavBar.module.css';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((state) => !state);
  };

  return (
    <header>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">
            <BiLogoMagento />
          </NavLink>
        </div>
        <div className={styles.nav}>
          <div className={styles.mobile}>
            <BiMenu />
          </div>
          <ul>
            <li>
              <NavLink to="/">Início</NavLink>
            </li>
            <li>
              <NavLink to="/series">Séries</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Filmes</NavLink>
            </li>
            <li>
              <NavLink to="/animes">Animes</NavLink>
            </li>
            <li>
              <NavLink to="games">Jogos</NavLink>
            </li>
          </ul>
          <div className={styles.account}>
            <NavLink to="/account">Minha conta</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

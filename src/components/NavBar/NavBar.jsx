import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { BiMenu, BiLogoMagento } from 'react-icons/bi';
import { useAuthentication } from '../../hooks/userAuthentication';
import styles from './NavBar.module.css';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuthentication();

  const { user } = useAuthValue();
  console.log(user);

  const handleStateMenu = () => {
    setIsOpen((state) => !state);
  };

  // if (!isOpen) return null;
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
            {user && (
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
            )}
            {!user ? (
              <div className={styles.account} onClick={handleStateMenu}>
                <NavLink to="/register">Criar conta</NavLink>
              </div>
            ) : (
              <div className={styles.account} onClick={handleStateMenu}>
                <NavLink to="/" onClick={logout}>
                  Sair
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

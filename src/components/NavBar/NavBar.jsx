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
						<ul>
							<li>
								<NavLink to="/" onClick={handleStateMenu}>
									Início
								</NavLink>
							</li>
							<li>
								<NavLink to="/page=series" onClick={handleStateMenu}>
									Séries
								</NavLink>
							</li>
							<li>
								<NavLink to="/page=movies" onClick={handleStateMenu}>
									Filmes
								</NavLink>
							</li>
							<li>
								<NavLink to="/page=animes" onClick={handleStateMenu}>
									Animes
								</NavLink>
							</li>
							<li>
								<NavLink to="page=games" onClick={handleStateMenu}>
									Jogos
								</NavLink>
							</li>
						</ul>
						{user && (
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

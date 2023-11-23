import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useAuthentication } from '../../hooks/userAuthentication';
import { BiMenu, BiLogoMagento } from 'react-icons/bi';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { logout } = useAuthentication();

	const { user } = useAuthValue();

	const handleStateMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="bg-dark30">
			<nav className="flex h-20 items-center justify-around border-b-2 border-dark40 max:justify-between max:px-8 ">
				<div className="text-3xl text-white">
					<NavLink to="/">
						<BiLogoMagento />
					</NavLink>
				</div>
				<div className="flex items-center">
					<div className="sm:hidden" onClick={handleStateMenu}>
						<BiMenu className="text-3xl text-white" />
					</div>
					<div
						className={`flex ${
							isOpen
								? 'max:absolute max:right-0 max:top-[8vh] max:w-1/2 max:flex-col max:rounded-md max:text-center'
								: 'max:hidden'
						}`}
					>
						<ul className="z-10 flex sm:text-2xl max:flex-col max:bg-dark30">
							<li className="px-4 py-2">
								<NavLink to="/" onClick={handleStateMenu}>
									Início
								</NavLink>
							</li>
							<li className="px-4 py-2">
								<NavLink to="/page=series" onClick={handleStateMenu}>
									Séries
								</NavLink>
							</li>
							<li className="px-4 py-2">
								<NavLink to="/page=movies" onClick={handleStateMenu}>
									Filmes
								</NavLink>
							</li>
							{user && (
								<li
									className=" rounded-sm bg-support01 px-4 py-2 text-white sm:text-2xl"
									onClick={handleStateMenu}
								>
									<NavLink to="/" onClick={logout}>
										Sair
									</NavLink>
								</li>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;

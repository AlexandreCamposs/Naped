import FormSearch from '../../components/FormSearch/FormSearch';

import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<div className="bg-dark30">
			<h1 className="my-6 text-center sm:text-3xl">
				Bem-vindo à <span className="text-support01">Naped</span>.
			</h1>
			<FormSearch />
			<div className="flex h-[60vh] w-full gap-5 p-8">
				<NavLink
					to="page=series"
					className="relative h-full w-1/2 overflow-auto rounded bg-cover bg-center"
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${'./viking.jpg'})`,
					}}
				>
					<div className="absolute top-1/3 ml-4">
						<h2 className="mb-4 inline-block rounded bg-support01 sm:px-4 sm:py-2 sm:text-2xl sm:font-bold">
							Series
						</h2>
						<p className="text-dark40 sm:text-2xl">Encontre suas series..</p>
					</div>
				</NavLink>
				<div className="flex w-1/2 flex-col gap-5  ">
					<NavLink
						to="/page=movies"
						className="relative h-[50%] w-full overflow-auto rounded bg-cover bg-center"
						style={{
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${'./open.jpg'})`,
						}}
					>
						<div className="absolute top-1/3 ml-4">
							<h2 className="mb-4 inline-block rounded bg-support01 sm:p-2 sm:px-4 sm:text-2xl sm:font-bold">
								Filmes
							</h2>
							<p className="text-dark40 sm:text-2xl">Encontre seus filmes..</p>
						</div>
					</NavLink>
					<NavLink
						to="page=series"
						className="relative h-[50%] w-full overflow-auto rounded bg-cover bg-center"
						style={{
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${'./one-piece.jpg'})`,
						}}
					>
						<div className="absolute top-1/3 ml-4">
							<h2 className="mb-4 inline-block rounded bg-support01 sm:p-2 sm:px-4 sm:text-2xl sm:font-bold ">
								Animes
							</h2>
							<p className="text-dark40 sm:text-2xl">Encontre seus animes..</p>
						</div>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Home;

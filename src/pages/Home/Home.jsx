import { AiOutlineSearch } from 'react-icons/ai';

import { useSearchAll } from '../../hooks/useSearchAll';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import DataContent from '../../components/DataContent';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {
	const [search, setSearch] = useState('');
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);
	const [searchParams] = useSearchParams();

	const navigate = useNavigate();
	const query = searchParams.get('q');

	const {
		data: dataSearch,
		loading: loadingSearch,
		searchInput,
		currentPage,
		setCurrentPage,
	} = useSearchAll();

	useEffect(() => {
		setLoading(loadingSearch);

		searchInput(query);

		if (dataSearch) {
			setData(dataSearch);
		}
	}, [search, currentPage]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (search === '') {
			return;
		}
		navigate(`/search?q=${search}`);

		setSearch('');
	};

	if (loading) {
		return (
			<h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl">
				Loading <span className="text-support01">Filmes</span>...
			</h1>
		);
	}

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return (
		<div className="bg-dark30">
			<h1 className="my-6 text-center sm:text-3xl">
				Bem-vindo à <span className="text-support01">Naped</span>.
			</h1>
			<div className="relative text-center  ">
				<form onSubmit={handleSubmit}>
					<AiOutlineSearch className="absolute top-1/3 ml-8 inline-block bg-transparent text-2xl" />
					<input
						type="text"
						placeholder="Pesquise aqui..."
						className="mx-4 my-4 w-4/5 rounded bg-dark20 py-4 pl-12 focus:text-white focus:outline-none sm:w-1/2
          "
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>
				</form>
			</div>
			<DataContent data={dataSearch} />
			<div className="flex h-[60vh] w-full gap-5 p-8">
				<div
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
				</div>
				<div className="flex w-1/2 flex-col gap-5  ">
					<div
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
					</div>
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
			{data.length > 0 && <Pagination paginate={paginate} />}
		</div>
	);
};

export default Home;

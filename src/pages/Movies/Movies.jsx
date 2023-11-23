import { useEffect, useState } from 'react';
import { useSearchMovies } from '../../hooks/userSearchMovies';

import DataContent from '../../components/DataContent';
import Pagination from '../../components/Pagination/Pagination';

import { AiOutlineSearch } from 'react-icons/ai';

const Movies = () => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);

	const {
		data: dataMovies,
		searchMovies,
		loading: loadingMovies,
		currentPage,
		setCurrentPage,
	} = useSearchMovies();

	useEffect(() => {
		searchMovies();
	}, [currentPage]);

	useEffect(() => {
		setLoading(loadingMovies);

		if (dataMovies) {
			setData(dataMovies);
		}
	}, [dataMovies, loadingMovies]);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	if (loading) {
		return (
			<h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl">
				Loading <span className="text-support01">Filmes</span>...
			</h1>
		);
	}
	return (
		<div>
			<h1 className="my-6 text-center sm:text-3xl">
				Bem-vindo à página de <span className="text-support01">filmes</span>.
			</h1>
			<div>
				<DataContent data={data} />
				<Pagination paginate={paginate} />
			</div>
		</div>
	);
};

export default Movies;

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
	// console.log(dataMovies);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	if (loading) {
		return <p>Loading Filmes</p>;
	}
	return (
		<div>
			<h1 className=" my-6 text-center sm:text-3xl">
				Bem-vindo à página de <span className="text-support01">filmes</span>.
			</h1>
			<div>
				<DataContent data={data} loading={loading} />
				<Pagination paginate={paginate} />
			</div>
		</div>
	);
};

export default Movies;

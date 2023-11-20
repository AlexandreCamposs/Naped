import { useState } from 'react';
import { token } from '../util/data';

export const useSearchMovies = () => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const searchMovies = async () => {
		setLoading(true);
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${currentPage}`,
				token,
			);

			const { results } = await res.json();
			setData(results);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	return {
		data,
		searchMovies,
		loading,
		currentPage,
		setCurrentPage,
	};
};

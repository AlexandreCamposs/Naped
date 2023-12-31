import { useState } from 'react';
import { token } from '../util/data';

export const useSearchMovies = () => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	const searchMovies = async () => {
		setLoading(true);

		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${currentPage}`,
				token,
			);

			const { results } = await res.json();

			const moviesFilter = results.filter((obj) => {
				for (let chave in obj) {
					if (
						obj[chave] === null ||
						obj[chave] === undefined ||
						obj[chave] === ''
					) {
						return false;
					}
				}
				return true;
			});

			setData(moviesFilter);
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

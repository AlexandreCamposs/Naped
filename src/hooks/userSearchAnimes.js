import { useState } from 'react';
import { token } from '../util/data';

export const useSearchAanimes = () => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const searchAnimes = async () => {
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/search/collection?query=animes&include_adult=false&language=pt-BR&page=${currentPage}`,
				token,
			);
			const { results } = await res.json();
			setData(results);
			console.log(results);
		} catch (error) {
			console.log(error);
		}
	};
	return {
		data,
		loading,
		error,
		searchAnimes,
		currentPage,
		setCurrentPage,
	};
};

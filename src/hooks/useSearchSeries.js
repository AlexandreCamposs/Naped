import { useState } from 'react';
import { token } from '../util/data';

export const useSearchSeries = () => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const searchSeries = async () => {
		setLoading(true);
		const res = await fetch(
			`https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=${currentPage}`,
			token,
		);
		const { results } = await res.json();
		setData(results);
		try {
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};
	return {
		data,
		loading,
		error,
		searchSeries,
		setCurrentPage,
		currentPage,
	};
};

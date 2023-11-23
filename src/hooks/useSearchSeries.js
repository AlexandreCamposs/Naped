import { useState } from 'react';
import { token } from '../util/data';

export const useSearchSeries = () => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	const searchSeries = async () => {
		setLoading(true);

		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=${currentPage}`,
				token,
			);
			const { results } = await res.json();

			const seriesFilter = results.filter((obj) => {
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

			setData(seriesFilter);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};
	return {
		data,
		loading,
		searchSeries,
		setCurrentPage,
		currentPage,
	};
};

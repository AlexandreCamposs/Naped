import { useState } from 'react';
import { token } from '../util/data';

export const useSearchAll = () => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	console.log(currentPage);

	const searchInput = async (query) => {
		if (!query) {
			return;
		}

		setLoading(true);

		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=pt-BR&page=${currentPage}`,
				token,
			);

			const { results } = await res.json();

			const searchFiler = results.filter((obj) => {
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

			setData(searchFiler);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	return {
		data,
		loading,
		searchInput,
		currentPage,
		setCurrentPage,
	};
};

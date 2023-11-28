import { useState } from 'react';
import { token } from '../util/data';

export const useLinkMovies = () => {
	const [keyMovies, setKeyMovies] = useState('');

	const fetchMovies = async (data) => {
		try {
			if (data) {
				const res = await fetch(
					`https://api.themoviedb.org/3/movie/${data.id}/videos?language=en-US`,
					token,
				);

				const { results } = await res.json();
				console.log(results);

				if (results.length > 0) {
					setKeyMovies(results[0].key);
				} else {
					const res = await fetch(
						`https://api.themoviedb.org/3/tv/${data.id}/videos?include_video_language=pt-BR%2Cen-US%2Cja-JP`,
						token,
					);

					const { results } = await res.json();
					console.log(results);

					if (results.length > 0) {
						setKeyMovies(results[0].key);
					}
					console.log(results);
				}
			}
		} catch (error) {
			console.log(error);
		}
		console.log(data);
	};
	return {
		fetchMovies,
		keyMovies,
	};
};

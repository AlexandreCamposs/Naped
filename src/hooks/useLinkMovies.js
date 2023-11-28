import { useState } from 'react';
import { token } from '../util/data';

export const useLinkMovies = () => {
	const [keyMovies, setKeyMovies] = useState('');

	const fetchMovies = async (data) => {
		console.log(data);
		try {
			if (data) {
				let res = await fetch(
					`https://api.themoviedb.org/3/tv/${data.id}/videos?include_video_language=ja-jp%2Cen-us%2Cpt-br`,
					token,
				);

				if (res.status !== 200) {
					res = await fetch(
						`https://api.themoviedb.org/3/movie/${data.id}/videos?language=en-US`,
						token,
					);
				}

				const { results } = await res.json();
				console.log(results);

				if (results.length > 0) {
					setKeyMovies(results[0].key);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};
	return {
		fetchMovies,
		keyMovies,
	};
};

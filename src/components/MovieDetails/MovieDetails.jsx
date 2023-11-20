import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { token } from '../../util/data';
import { imageCover } from '../../util/data';

import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ data, setOpenModal, query }) => {
	const [dataTrailer, setDataTrailer] = useState('');
	const [trailer, setTrailer] = useState(false);
	const backgroundImage = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}`;
	const player = `www.youtube.com/embed/${dataTrailer}`;
	console.log(player);

	const id = data.id;

	const fetchMovies = async () => {
		try {
			if (query === 'movies') {
				const res = await fetch(
					`https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`,
					token,
				);

				const { results } = await res.json();

				setDataTrailer(results[0].key);
			} else if (query === 'series') {
				const res = await fetch(
					`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
					token,
				);

				const { results } = await res.json();

				setDataTrailer(results[0].key);
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<div className="fixed bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50">
			<div className="h-10/12 relative left-1/2 top-1/2 w-10/12 translate-x-[-50%] translate-y-[-50%] overflow-auto rounded-2xl">
				<div
					className="absolute right-8 top-8 cursor-pointer rounded text-2xl"
					onClick={setOpenModal}
				>
					<AiOutlineClose className="rounded bg-red-500 text-red-200" />
				</div>
				<div
					className="bg-no-repea flex items-center justify-center bg-cover bg-center"
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
					}}
				>
					<div className="h-2/6 w-2/6">
						<img src={imageCover + data.poster_path} alt="logo filme" />
					</div>
					<div className="ml-8 flex w-2/4 flex-col justify-start">
						<div>
							<h1 className="mb-2  text-3xl font-bold">{data.title}</h1>
							<ul className="mb-8 flex gap-3 ">
								<li>{data.vote_average}</li>
								<li>{data.release_date}</li>
								<li>{data.original_language}</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-2 text-2xl font-bold">Sinopse</h3>
							<p> {data.overview}</p>
						</div>
						<div
							className="top-0 mt-8 cursor-pointer font-bold"
							onClick={() => setTrailer(!trailer)}
						>
							<button className="cursor-pointer"> Reproduzir trailer</button>
						</div>
					</div>
					{trailer && (
						<div className="absolute h-5/6 w-10/12">
							<ReactPlayer
								url={player}
								width="100%"
								height="100%"
								controls={true}
								sandbox="allow-same-origin"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Modal;

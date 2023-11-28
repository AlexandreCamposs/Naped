import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLinkMovies } from '../../hooks/useLinkMovies';

import { imageCover } from '../../util/data';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ data, setOpenModal }) => {
	const [dataTrailer, setDataTrailer] = useState('');
	const [trailer, setTrailer] = useState(false);

	const backgroundImage = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}`;

	const player = `www.youtube.com/embed/${dataTrailer}`;

	const { keyMovies, fetchMovies } = useLinkMovies();

	useEffect(() => {
		fetchMovies(data);

		setDataTrailer(keyMovies);
	}, [keyMovies]);

	return (
		<div className="fixed bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50">
			<div
				className="relative overflow-auto sm:left-1/2
			 sm:top-1/2 sm:w-10/12 sm:translate-x-[-50%]  sm:translate-y-[-50%] sm:rounded-2xl max:h-full"
			>
				<div
					className="absolute right-8 top-8 cursor-pointer rounded text-2xl"
					onClick={setOpenModal}
				>
					<AiOutlineClose className="rounded bg-red-500 text-red-200" />
				</div>
				<div
					className="bg-no-repea overflow-auto bg-cover bg-center sm:flex sm:items-center sm:justify-center"
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
					}}
				>
					<div className="sm:h-2/6 sm:w-2/6">
						<img
							src={imageCover + data.poster_path}
							alt="logo filme"
							className="mx-auto"
						/>
					</div>
					<div className="mx-8 my-8 flex flex-col justify-start sm:w-2/4">
						<div>
							<h1 className="mb-4 text-3xl font-bold">
								{data && data.title ? data.title : data.name}
							</h1>
						</div>
						<div>
							<h3 className="mb-2 text-2xl font-bold">Sinopse</h3>
							<p>{data.overview}</p>
						</div>
						<div
							className="top-0 mt-8 cursor-pointer font-bold"
							onClick={() => setTrailer(!trailer)}
						>
							<button className="cursor-pointer text-white hover:text-dark40">
								{' '}
								Reproduzir trailer
							</button>
						</div>
					</div>
					{trailer && (
						<div className="absolute z-0 sm:h-5/6 sm:w-10/12 max:top-3/4 max:h-1/2 max:w-full">
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

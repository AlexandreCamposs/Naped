import { useState } from 'react';
import MovieDetails from '../MovieDetails';

const DataContent = ({ data }) => {
	const [openModal, setOpenModal] = useState(false);
	const [movie, setMovie] = useState(null);

	function handleModal(data) {
		setMovie(data);
		setOpenModal(!openModal);
	}

	openModal
		? (document.body.style.overflow = 'hidden')
		: (document.body.style.overflow = 'auto');

	return (
		<div className="flex flex-wrap justify-center bg-dark30 px-4">
			{data &&
				data.map((data, i) => (
					<div
						className="m-4 flex flex-col justify-between rounded border p-4 sm:w-1/3 lg:w-1/5"
						key={i}
					>
						<div>
							<img
								src={'https://image.tmdb.org/t/p/w500/' + data.poster_path}
								alt=""
							/>
							<h2 className="my-4 line-clamp-2 text-ellipsis text-center text-2xl md:text-3xl ">
								{data.name || data.title}
							</h2>
							<p className=" mb-4 line-clamp-4">{data.overview}</p>
						</div>
						<button
							className="flex text-support01 hover:text-dark40"
							onClick={() => handleModal(data)}
						>
							Ler mais
						</button>
					</div>
				))}
			{openModal && (
				<MovieDetails
					data={movie}
					setOpenModal={() => setOpenModal(!openModal)}
				/>
			)}
		</div>
	);
};

export default DataContent;

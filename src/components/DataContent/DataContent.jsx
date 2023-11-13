import { useState } from 'react';
import MovieDetails from '../MovieDetails';

const DataContent = ({ data, loading }) => {
	const [openModal, setOpenModal] = useState(false);
	const [movie, setMovie] = useState(null);

	function handleModal(data) {
		setMovie(data);
		setOpenModal((prevState) => !prevState);
		console.log('clicou');
	}

	openModal
		? (document.body.style.overflow = 'hidden')
		: (document.body.style.overflow = 'auto');

	return (
		<div className="flex flex-wrap justify-center p-4">
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
							<h2 className="my-4  text-center text-2xl md:text-3xl ">
								{data.original_title}
							</h2>
							<p className=" mb-4 line-clamp-4 text-ellipsis">
								{data.overview}
							</p>
						</div>
						<button
							className="flex text-support01"
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

import { FcNext, FcPrevious } from 'react-icons/fc';

const Pagination = ({ paginate }) => {
	const handleNext = () => {
		paginate((prevState) => prevState + 1);
		topScreen();
	};

	const handlePrevious = () => {
		paginate((prevState) => {
			if (prevState === 1) {
				return prevState;
			} else {
				return prevState - 1;
			}
		});
		topScreen();
	};

	const topScreen = () => {
		window.scroll({ top: 0, behavior: 'smooth' });
	};
	return (
		<div className="bg-black">
			<ul className="flex justify-center p-4">
				<li onClick={handlePrevious}>
					<FcPrevious className="cursor-pointer rounded text-3xl hover:bg-dark40" />
				</li>
				<li onClick={handleNext}>
					<FcNext className="cursor-pointer rounded text-3xl hover:bg-dark40" />
				</li>
			</ul>
		</div>
	);
};

export default Pagination;

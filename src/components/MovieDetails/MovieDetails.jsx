import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ data, setOpenModal }) => {
	console.log(data);
	return (
		<div className="fixed bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50">
			<div className="relative left-1/2 top-1/2 h-4/5 w-4/5 translate-x-[-50%] translate-y-[-50%] rounded-2xl">
				<div
					className="absolute right-8 top-8 cursor-pointer text-2xl"
					onClick={setOpenModal}
				>
					<AiOutlineClose className="rounded bg-red-500 text-red-200" />
				</div>
			</div>
		</div>
	);
};

export default Modal;

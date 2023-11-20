import { useState, useEffect } from 'react';
import DataContent from '../../components/DataContent';
import Pagination from '../../components/Pagination';
import { useSearchAanimes } from '../../hooks/userSearchAnimes';
import { AiOutlineSearch } from 'react-icons/ai';

const Animes = () => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);

	const {
		data: dataAnimes,
		loading: loadingAnimes,
		error,
		searchAnimes,
		currentPage,
		setCurrentPage,
	} = useSearchAanimes();

	useEffect(() => {
		searchAnimes();
	}, [currentPage]);

	useEffect(() => {
		setLoading(loadingAnimes);

		if (dataAnimes) {
			setData(dataAnimes);
		}
	}, [dataAnimes, loadingAnimes]);

	const paginate = (paginate) => setCurrentPage(paginate);
	// console.log(data);
	return (
		<div>
			<div>
				<DataContent data={data} loading={loading} />
				<Pagination paginate={paginate} />
			</div>
		</div>
	);
};

export default Animes;

import { useEffect, useState } from 'react';
import { useSearchSeries } from '../../hooks/useSearchSeries';
import DataContent from '../../components/DataContent';
import Pagination from '../../components/Pagination/Pagination';

import { AiOutlineSearch } from 'react-icons/ai';

const Series = () => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [dataPerPage] = useState(8);

	const {
		data: dataSeries,
		loading: loadingSeries,
		searchSeries,
	} = useSearchSeries();

	useEffect(() => {
		searchSeries();
	}, []);

	// console.log(dataSeries);

	useEffect(() => {
		if (dataSeries) {
			setData(dataSeries);
		}
	}, [dataSeries]);

	// console.log(data);
	const indexOfLastData = currentPage * dataPerPage;
	const indexOfFirstData = indexOfLastData - dataPerPage;
	const currentDatas = data.slice(indexOfFirstData, indexOfLastData);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return (
		<div>
			<div className="relative text-center">
				<AiOutlineSearch className="absolute top-1/2 ml-8 inline-block bg-transparent text-2xl" />
				<input
					type="text"
					placeholder="Pesquise aqui..."
					className="mx-4 mt-4 w-4/5 rounded bg-dark20 py-4 pl-12 focus:text-white focus:outline-none sm:w-1/2
         "
				/>
			</div>
			<DataContent data={currentDatas} />

			<Pagination
				dataPerPage={dataPerPage}
				totalData={data.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default Series;

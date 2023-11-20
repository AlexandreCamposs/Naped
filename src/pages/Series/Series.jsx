import { useEffect, useState } from 'react';
import { useSearchSeries } from '../../hooks/useSearchSeries';
import DataContent from '../../components/DataContent';
import Pagination from '../../components/Pagination/Pagination';

const Series = () => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);

	const {
		data: dataSeries,
		loading: loadingSeries,
		searchSeries,
		currentPage,
		setCurrentPage,
	} = useSearchSeries();

	useEffect(() => {
		searchSeries();
	}, [currentPage]);

	useEffect(() => {
		setLoading(loadingSeries);

		if (dataSeries) {
			setData(dataSeries);
		}
	}, [dataSeries, loadingSeries]);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	if (loading) {
		return <p>Loading Series</p>;
	}
	return (
		<div>
			<h1 className=" my-6 text-center sm:text-3xl">
				Bem-vindo à página de <span className="text-support01">séries</span>.
			</h1>
			<DataContent data={data} />
			<Pagination paginate={paginate} />
		</div>
	);
};

export default Series;

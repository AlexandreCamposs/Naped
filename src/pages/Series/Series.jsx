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
		return (
			<h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl ">
				Loading <span className="text-support01">Series</span> ...
			</h1>
		);
	}
	return (
		<div>
			<h1 className="my-6 text-center sm:text-3xl">
				Bem-vindo à página de <span className="text-support01">séries</span>.
			</h1>
			<DataContent data={data} />
			<Pagination paginate={paginate} />
		</div>
	);
};

export default Series;

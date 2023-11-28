import { useEffect, useState } from 'react';
import { useSearchAll } from '../../hooks/useSearchAll';
import DataContent from '../../components/DataContent';
import FormSearch from '../../components/FormSearch/FormSearch';
import Pagination from '../../components/Pagination/Pagination';

const Search = () => {
	const [data, setData] = useState('');
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(false);
	const {
		data: dataSearch,
		loading: loadingSearch,
		currentPage,
		setCurrentPage,
		searchInput,
	} = useSearchAll();

	const handleFormSearch = (search, queryString) => {
		setData(search);
		setQuery(queryString);
	};

	useEffect(() => {
		searchInput(query);
	}, [currentPage]);

	useEffect(() => {
		setLoading(loadingSearch);

		if (dataSearch) {
			setData(dataSearch);
		}
	}, [dataSearch]);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	if (loading) {
		return (
			<h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl">
				Loading...
			</h1>
		);
	}

	return (
		<div>
			<h1 className="my-6 text-center sm:text-3xl">
				Resultados para busca :<span className="text-support01"> {query}</span>{' '}
			</h1>
			<FormSearch
				dataSearchInput={handleFormSearch}
				currentPage={currentPage}
			/>
			<DataContent data={data} />
			{data.length > 0 && <Pagination paginate={paginate} />}
		</div>
	);
};

export default Search;

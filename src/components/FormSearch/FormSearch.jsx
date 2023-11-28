import { useSearchAll } from '../../hooks/useSearchAll';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DataContent from '../../components/DataContent';
import Pagination from '../../components/Pagination/Pagination';
import { AiOutlineSearch } from 'react-icons/ai';

const FormSearch = ({ dataSearchInput }) => {
	const [search, setSearch] = useState('');
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(false);
	const [searchParams] = useSearchParams();

	const navigate = useNavigate();
	const query = searchParams.get('q');
	console.log(query);
	const {
		data: dataSearch,
		loading: loadingSearch,
		searchInput,
	} = useSearchAll();

	useEffect(() => {
		searchInput(query);
	}, []);

	useEffect(() => {
		setLoading(loadingSearch);

		if (dataSearch) {
			setData(dataSearch);

			dataSearchInput(dataSearch, query);
		}
	}, [dataSearch, loadingSearch]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (search === '') {
			return;
		}
		navigate(`/search?q=${search}`);

		await searchInput(search);

		setSearch('');
	};

	return (
		<div>
			<div className="relative text-center  ">
				<form onSubmit={handleSubmit}>
					<AiOutlineSearch className="absolute top-1/3 ml-8 inline-block bg-transparent text-2xl" />
					<input
						type="text"
						placeholder="Pesquise aqui..."
						className="mx-4 my-4 w-4/5 rounded bg-dark20 py-4 pl-12 focus:text-white focus:outline-none sm:w-1/2
          "
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>
				</form>
			</div>
		</div>
	);
};

export default FormSearch;

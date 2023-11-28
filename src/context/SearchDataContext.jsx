import { useState, createContext } from 'react';

export const SearchDataContext = createContext();

export const SearchDataProvider = ({ children }) => {
	const [searchData, setSearchData] = useState(null);

	const updateSearchData = (data) => {
		setSearchData(data);
	};

	return (
		<SearchDataContext.Provider value={{ searchData, updateSearchData }}>
			{children}
		</SearchDataContext.Provider>
	);
};

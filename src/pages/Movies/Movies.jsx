import { useEffect, useState } from "react";
import { useSearchMovies } from "../../hooks/userSearchMovies";

import DataContent from "../../components/DataContent";
import Pagination from "../../components/Pagination/Pagination";

import { AiOutlineSearch } from "react-icons/ai";

const Movies = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(8);

  const {
    data: dataMovies,
    searchMovies,
    loading: loadingMovies,
  } = useSearchMovies();

  useEffect(() => {
    searchMovies();
  }, []);

  useEffect(() => {
    setLoading(loadingMovies);

    if (dataMovies) {
      setData(dataMovies);
    }
  }, [dataMovies, loadingMovies]);

  // console.log(data);
  // console.log(loading);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentDatas = data.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="relative text-center">
        <AiOutlineSearch className="absolute top-1/2 ml-8  inline-block bg-transparent text-2xl" />
        <input
          type="text"
          placeholder="Pesquise aqui..."
          className="mx-4  mt-4 w-4/5 rounded bg-dark20 py-4 pl-12 focus:text-white  focus:outline-none  sm:w-1/2
          "
        />
      </div>
      <div>
        <DataContent data={currentDatas} loading={loading} />
        <Pagination
          dataPerPage={dataPerPage}
          totalData={data.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Movies;

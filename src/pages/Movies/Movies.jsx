import { useEffect, useState } from 'react';
import { useSearchMovies } from '../../hooks/userSearchMovies';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState();
  const {
    data: dataMovies,
    searchMovies,
    loading: loadingMovies,
  } = useSearchMovies();

  useEffect(() => {
    searchMovies();
  }, []);

  useEffect(() => {
    if (loadingMovies) {
      setLoading(loadingMovies);
    } else {
      setLoading(false);
    }

    if (dataMovies) {
      setData(dataMovies);
    }
  }, [dataMovies, loadingMovies]);

  console.log(data);
  console.log(loading);

  return (
    <div className="">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Quer ajuda na procura? Pesquise aqui..."
          className="mx-4 mt-4 w-full sm:w-1/2 p-2 rounded focus:text-white bg-dark20 focus:outline-none
        "
        />
      </div>
      <div className="flex justify-center flex-wrap p-4 ">
        {data &&
          data.map((data, key) => (
            <div className=" w-full sm:w-1/3 lg:w-1/4   m-4 border rounded p-4">
              <img
                src={'https://image.tmdb.org/t/p/w500/' + data.poster_path}
                alt=""
              />
              <h2>{data.original_title}</h2>

              <p>{data.overview}</p>
              <Link>Ver mais</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Movies;

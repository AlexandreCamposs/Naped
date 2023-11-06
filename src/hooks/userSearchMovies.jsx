import { useState } from 'react';
import { token } from '../util/data';

export const useSearchMovies = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1',
        token,
      );

      const { results } = await res.json();

      setData(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return {
    data,
    searchMovies,
    loading,
  };
};

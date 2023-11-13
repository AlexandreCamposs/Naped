import { useState } from "react";
import { token } from "../util/data";

export const useSearchSeries = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchSeries = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=1",
      token,
    );
    const { results } = await res.json();
    setData(results);
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return {
    data,
    loading,
    error,
    searchSeries,
  };
};

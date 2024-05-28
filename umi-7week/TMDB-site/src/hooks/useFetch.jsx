// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing`,
        {
          params: {
            api_key: "d34445da1d00da89ed8e001b7a8286e0",
            language: "en-US",
            page: page,
          },
        }
      );
      setMovies((prev) => [...prev, ...response.data.results]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, movies };
}

export default useFetch;

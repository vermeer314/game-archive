import axios from 'axios';
import { useEffect, useState } from 'react';
import type { Genre } from '../types/game';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axios.get('https://api.rawg.io/api/genres', {
          params: {
            key: API_KEY,
          },
        });
        setGenres(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGenres();
  }, []);

  return genres;
}

export default useGenres;

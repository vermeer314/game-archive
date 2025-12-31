import { useEffect, useState } from 'react';
import type { Genre } from '../types/game';
import apiClient from '../services/api-client';

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await apiClient.get('/genres');
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

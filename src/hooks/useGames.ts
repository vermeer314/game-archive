import { useEffect, useState } from 'react';
import type { Game, GameQueryParams } from '../types/game';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

function useGames(sortOrder: string, selectedGenre: string) {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      const requestParams: GameQueryParams = {
        key: API_KEY,
        page_size: 40,
        ordering: sortOrder,
      };

      if (selectedGenre) requestParams.genres = selectedGenre;

      try {
        setIsLoading(true);
        const res = await axios.get(`https://api.rawg.io/api/games`, {
          params: requestParams,
        });
        setGames(res.data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, [sortOrder, selectedGenre]);

  return { games, isLoading };
}

export default useGames;

import { useEffect, useState } from 'react';
import type { Game, GameQueryParams } from '../types/game';
import apiClient from '../services/api-client';

function useGames(
  sortOrder: string,
  selectedGenre: string,
  searchText: string
) {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      const requestParams: GameQueryParams = {
        page_size: 40,
        ordering: sortOrder,
        genres: selectedGenre || undefined,
        search: searchText || undefined,
      };

      try {
        setIsLoading(true);
        const res = await apiClient.get('/games', {
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
  }, [sortOrder, selectedGenre, searchText]);

  return { games, isLoading };
}

export default useGames;

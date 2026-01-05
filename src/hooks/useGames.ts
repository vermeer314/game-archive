import { useEffect, useState } from 'react';
import type { Game, GameQueryParams } from '../types/game';
import apiClient from '../services/api-client';
import type { AxiosError } from 'axios';

function useGames(
  sortOrder: string,
  selectedGenre: string | null,
  searchText: string | null
) {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
        setError(null);
        const res = await apiClient.get('/games', {
          params: requestParams,
        });
        setGames(res.data.results);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message || 'Something went wrong...');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, [sortOrder, selectedGenre, searchText]);

  return { games, isLoading, error };
}

export default useGames;

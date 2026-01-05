import { useEffect, useState } from 'react';
import type { GameDetail } from '../types/game';
import apiClient from '../services/api-client';
import type { AxiosError } from 'axios';

function useGameDetail(slug: string | undefined) {
  const [gameDetail, setGameDetail] = useState<GameDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGameDetail = async () => {
      if (!slug) return;

      try {
        setIsLoading(true);
        setError(null);

        const res = await apiClient.get<GameDetail>(`/games/${slug}`);
        setGameDetail(res.data);
        console.log(res.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message || 'Something went wrong...');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGameDetail();
  }, [slug]);

  return { gameDetail, isLoading, error };
}

export default useGameDetail;

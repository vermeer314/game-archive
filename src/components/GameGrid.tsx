import type { Game } from '../types/game';
import ErrorMessage from './ErrorMessage';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

function GameGrid({
  games,
  isLoading,
  error,
}: {
  games: Game[];
  isLoading: boolean;
  error: string | null;
}) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  //에러가 있을 경우 최우선 분기 처리
  if (error) return <ErrorMessage message={error} />;

  //로딩 중일 경우 스켈레톤 처리
  if (isLoading) {
    return (
      <div className="grid-wrap">
        {skeletons.map((skeleton) => (
          <GameCardSkeleton key={skeleton} />
        ))}
      </div>
    );
  }

  //검색 결과가 없을 때 처리
  if (games.length === 0) {
    return (
      <div className="no-results">
        <span>No Search Results🥲</span>
      </div>
    );
  }

  return (
    <div className="grid-wrap">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameGrid;

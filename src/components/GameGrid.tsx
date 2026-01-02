import type { Game } from '../types/game';
import GameCard from './GameCard';

function GameGrid({ games }: { games: Game[] }) {
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

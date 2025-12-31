import type { Game } from '../types/game';
import GameCard from './GameCard';

function GameGrid({ games }: { games: Game[] }) {
  return (
    <div className="grid-wrap">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameGrid;

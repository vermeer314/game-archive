import type { Game } from '../types/game';
import PlatformIconList from './PlatformIconList';

function GameCard({ game }: { game: Game }) {
  return (
    <article className="game-card">
      {/* 게임의 백그라운드 이미지 표시 */}
      <figure className="card-image-wrap">
        <img src={game.background_image} alt={game.name} />
      </figure>

      {/* 게임의 제목과 메타 정보 */}
      <div className="card-content">
        <header>
          <h2 className="card-title" title={game.name}>
            {game.name}
          </h2>
        </header>
        <div className="card-content-footer">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          {/* 사용자 점수와 메타크리틱 점수 */}
          <div className="card-rating">
            <span className="rating">
              {game.rating}({game.ratings_count})
            </span>
            <span
              className="metacritic-badge"
              style={{ color: getBadgeColor(game.metacritic) }}
            >
              {game.metacritic ? `${game.metacritic}` : '-'}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function getBadgeColor(score: number) {
  if (score >= 75) return '#66cc33';
  if (score >= 50) return '#ffcc33';
  return '#ff0000';
}

export default GameCard;

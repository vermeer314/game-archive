import type { Game } from '../types/game';

function GameGrid({ games }: { games: Game[] }) {
  const getBadgeColor = (score: number) => {
    if (score >= 75) return '#66cc33';
    if (score >= 50) return '#ffcc33';
    return '#ff0000';
  };

  return (
    <div className="grid-wrap">
      {games.map((game) => (
        <article key={game.id} className="game-card">
          {/* 게임의 백그라운드 이미지 표시 */}
          <figure className="card-image-wrap">
            <img src={game.background_image} alt={game.name} />
          </figure>

          {/* 게임의 제목과 메타 정보 */}
          <div className="card-content">
            <header>
              <h2 className="card-title">{game.name}</h2>
            </header>
            <section className="card-info">
              <div className="platform-list">
                {game.parent_platforms.map(({ platform }) => (
                  <span key={platform.id}>{platform.name}</span>
                ))}
              </div>

              {/* 메타크리틱 점수 */}
              <span className="rating">
                {game.rating}({game.ratings_count})
              </span>
              <span
                className="metacritic-badge"
                style={{ color: getBadgeColor(game.metacritic) }}
              >
                {game.metacritic ? `${game.metacritic}` : '-'}
              </span>
            </section>
          </div>
        </article>
      ))}
    </div>
  );
}

export default GameGrid;

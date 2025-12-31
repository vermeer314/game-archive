import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import type { Game } from './types/game';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('');

  const getBadgeColor = (score: number) => {
    if (score >= 75) return '#66cc33';
    if (score >= 50) return '#ffcc33';
    return '#ff0000';
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`https://api.rawg.io/api/games`, {
          params: {
            key: API_KEY,
            page_size: 40,
            ordering: sortOrder,
          },
        });
        setGames(res.data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, [sortOrder]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h1>Game Archive</h1>
      {/* Ordering */}
      <form className="select-wrap">
        <label>Order by: </label>
        <select
          className="sort-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Relevance</option>
          <option value="released">Release date</option>
          <option value="-metacritic">Metacritic score</option>
          <option value="-added">Popularity</option>
        </select>
      </form>
      {/* GameCard */}
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
    </>
  );
}

export default App;

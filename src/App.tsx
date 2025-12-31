import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import type { Game, GameQueryParams, Genre } from './types/game';
import GameGrid from './components/GameGrid';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState('');

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

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axios.get('https://api.rawg.io/api/genres', {
          params: {
            key: API_KEY,
          },
        });
        setGenres(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGenres();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Game Archive</h1>
      <aside className="sidebar">
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>
              <button onClick={() => setSelectedGenre(genre.slug)}>
                {genre.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
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
      <main className="main-content">
        <GameGrid games={games}></GameGrid>
      </main>
    </div>
  );
}

export default App;

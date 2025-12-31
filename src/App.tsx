import { useState } from 'react';
import './App.css';
import GameGrid from './components/GameGrid';
import GameSort from './components/GameSort';
import GenreList from './components/GenreList';
import useGames from './hooks/useGames';
import useGenres from './hooks/useGenres';

function App() {
  const [sortOrder, setSortOrder] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const { games, isLoading } = useGames(sortOrder, selectedGenre);
  const genres = useGenres();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Game Archive</h1>
      {/* Sidebar */}
      <GenreList
        genres={genres}
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
      />
      {/* Ordering */}
      <main className="main-content">
        <GameSort sortOrder={sortOrder} onSelectSortOrder={setSortOrder} />
        <GameGrid games={games} />
      </main>
    </div>
  );
}

export default App;

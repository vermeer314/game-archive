import { useState } from 'react';
import '../App.css';
import GameGrid from '../components/GameGrid';
import GameSort from '../components/GameSort';
import GenreList from '../components/GenreList';
import useGames from '../hooks/useGames';
import useGenres from '../hooks/useGenres';
import SearchInput from '../components/SearchInput';

function HomePage() {
  const [sortOrder, setSortOrder] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchText, setSearchText] = useState('');

  const { games, isLoading, error } = useGames(
    sortOrder,
    selectedGenre,
    searchText
  );
  const genres = useGenres();

  return (
    <div className="container">
      <header className="navbar">
        <h1 className="title">Game Archive</h1>
        {/* Searchbar */}
        <SearchInput
          onSearch={setSearchText}
          onResetGenre={() => setSelectedGenre('')}
        />
      </header>

      <div className="main-wrapper">
        {/* Sidebar */}
        <GenreList
          genres={genres}
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
        />

        <main className="main-content">
          {/* Ordering */}
          <GameSort sortOrder={sortOrder} onSelectSortOrder={setSortOrder} />
          {/* GameCard */}
          <GameGrid games={games} isLoading={isLoading} error={error} />
        </main>
      </div>
    </div>
  );
}

export default HomePage;

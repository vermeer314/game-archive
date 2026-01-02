import { useState } from 'react';
import './App.css';
import GameGrid from './components/GameGrid';
import GameSort from './components/GameSort';
import GenreList from './components/GenreList';
import useGames from './hooks/useGames';
import useGenres from './hooks/useGenres';
import SearchInput from './components/SearchInput';

function App() {
  const [sortOrder, setSortOrder] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchText, setSearchText] = useState('');

  const { games, isLoading } = useGames(sortOrder, selectedGenre, searchText);
  const genres = useGenres();

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <header className="navbar">
        <h1 className="title">Game Archive</h1>
        {/* Searchbar */}
        <SearchInput
          // inputRef={inputRef}
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
          {/* 데이터를 가져올 때 헤더 부분은 유지하고 데이터를 가져오는 부분만 로딩 처리 */}
          {isLoading ? <div>Loading...</div> : <GameGrid games={games} />}
        </main>
      </div>
    </div>
  );
}

export default App;

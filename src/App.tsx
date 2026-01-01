import { useRef, useState } from 'react';
import './App.css';
import GameGrid from './components/GameGrid';
import GameSort from './components/GameSort';
import GenreList from './components/GenreList';
import useGames from './hooks/useGames';
import useGenres from './hooks/useGenres';

function App() {
  const [sortOrder, setSortOrder] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchText, setSearchText] = useState('');

  const { games, isLoading } = useGames(sortOrder, selectedGenre, searchText);
  const genres = useGenres();

  const inputRef = useRef<HTMLInputElement>(null);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <header className="navbar">
        <h1>Game Archive</h1>
        {/* Searchbar */}
        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            // 엔터칠 때 값 전송
            if (inputRef.current) {
              setSearchText(inputRef.current.value.trim()); //이걸 가지고 api 요청
              inputRef.current.value = '';
            }
          }}
        >
          <input
            ref={inputRef}
            className="search-input"
            placeholder="Search"
            type="text"
          />
        </form>
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
          <GameGrid games={games} />
        </main>
      </div>
    </div>
  );
}

export default App;

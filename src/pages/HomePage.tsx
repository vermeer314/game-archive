import { useState } from 'react';
import '../App.css';
import GameGrid from '../components/GameGrid';
import GameSort from '../components/GameSort';
import GenreList from '../components/GenreList';
import useGames from '../hooks/useGames';
import useGenres from '../hooks/useGenres';

function HomePage({ selectedGenre, searchText, setSelectedGenre }: Props) {
  const [sortOrder, setSortOrder] = useState('');

  const { games, isLoading, error } = useGames(
    sortOrder,
    selectedGenre,
    searchText
  );
  const genres = useGenres();

  return (
    <div className="container">
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

interface Props {
  selectedGenre: string | null;
  searchText: string | null;
  setSelectedGenre: (genre: string | null) => void;
}

export default HomePage;

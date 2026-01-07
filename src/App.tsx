import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [searchText, setSearchText] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  return (
    <>
      <Navbar
        key={searchText || 'empty'} //로고 클릭해서 홈으로 갔을 때 리렌더랑 시켜서 검색창 초기화
        onSearch={setSearchText}
        resetGenre={() => setSelectedGenre(null)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              selectedGenre={selectedGenre}
              searchText={searchText}
              setSelectedGenre={setSelectedGenre}
            />
          }
        />
        <Route path="/games/:slug" element={<GameDetailPage />} />
      </Routes>
    </>
  );
}

export default App;

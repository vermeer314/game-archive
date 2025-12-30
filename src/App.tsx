import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

function App() {
  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games?key=${API_KEY}`)
      .then((res) => {
        console.log('게임 리스트:', res.data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Game Archive</h1>
      <p>콘솔창을 확인해 보세요!</p>
    </div>
  );
}

export default App;

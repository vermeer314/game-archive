import axios from 'axios';
// 컴포넌트는 API 주소와 key가 무엇인지 몰라도 되기 때문에 따로 분리
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

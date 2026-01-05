import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

function SearchInput({ onSearch, onResetGenre }: Props) {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  return (
    //엔터를 누르면 >> 홈으로 돌아와서 검색을 실행하고 결과를 렌더링
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        const trimmedValue = value.trim();
        // 엔터칠 때 값 전송

        if (trimmedValue) {
          if (location.pathname !== '/') navigate('/'); //먼저 홈으로 보내기

          onSearch(trimmedValue); //이걸 가지고 api 요청
          onResetGenre(); //검색 시 선택되어있던 필터 해제
        }
      }}
    >
      <BsSearch
        style={{
          position: 'absolute',
          left: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'gray',
        }}
      />
      <input
        value={value}
        className="search-input"
        placeholder="Dig the archive!"
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
}

interface Props {
  onSearch: (value: string) => void;
  onResetGenre: () => void;
}

export default SearchInput;

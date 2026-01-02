import { useState } from 'react';

function SearchInput({ onSearch, onResetGenre }: Props) {
  const [value, setValue] = useState('');

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        // 엔터칠 때 값 전송
        if (value) {
          onSearch(value.trim()); //이걸 가지고 api 요청
          onResetGenre(); //검색 히 선택되어있던 필터 해제
        }
      }}
    >
      <input
        value={value}
        className="search-input"
        placeholder="Search the archive"
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

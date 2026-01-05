import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

function Navbar({ onSearch, resetGenre }: Props) {
  function handleLogoClick() {
    onSearch('');
    resetGenre();
  }

  return (
    <header className="navbar">
      <Link to="/" onClick={handleLogoClick}>
        <h1 className="logo-text">Game Archive</h1>
      </Link>
      {/* Searchbar */}
      <SearchInput onSearch={onSearch} onResetGenre={resetGenre} />
    </header>
  );
}

interface Props {
  onSearch: (text: string | null) => void;
  resetGenre: () => void;
}

export default Navbar;

import type { Genre } from '../types/game';

function GenreList({ genres, onSelectGenre, selectedGenre }: Props) {
  return (
    <aside className="sidebar">
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <button
              className={selectedGenre === genre.slug ? 'active' : ''}
              onClick={() => onSelectGenre(genre.slug)}
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

interface Props {
  genres: Genre[];
  onSelectGenre: (slug: string) => void;
  selectedGenre: string;
}

export default GenreList;

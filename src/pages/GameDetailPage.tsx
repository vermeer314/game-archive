import { useParams } from 'react-router-dom';
import useGameDetail from '../hooks/useGameDetail';

function GameDetailPage() {
  const { slug } = useParams();

  const { gameDetail, isLoading, error } = useGameDetail(slug);

  if (!gameDetail) return null;
  if (error) return <div>{error} occured...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div>{gameDetail.name}</div>
      <div>{gameDetail.description_raw}</div>
      <div>
        {gameDetail.tags.map((tag) => (
          <span key={tag.id} className="tag-badge">
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default GameDetailPage;

import { useParams } from 'react-router-dom';
import useGameDetail from '../hooks/useGameDetail';

function GameDetailPage() {
  const { slug } = useParams();

  const { gameDetail, isLoading, error } = useGameDetail(slug);

  if (!gameDetail) return null;
  if (error) return <div>{error} occured...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="detail-grid">
      {/* 왼쪽 메인 정보 */}
      <div className="main-column">
        <h1 className="detail-title">{gameDetail.name}</h1>
        <figure className="card-image-wrap">
          <img src={gameDetail.background_image} alt={gameDetail.name} />
        </figure>
        <section>
          <h2>About</h2>
          <div className="card-description">{gameDetail.description_raw}</div>
        </section>
      </div>

      {/* 오른쪽 정보 사이드바 */}
      <article className="info-sidebar">
        <div className="info-item">
          <h3>Metascore</h3>
          <span className="score">{gameDetail.metacritic}</span>
        </div>
        <div className="info-item">
          <h3>Platforms</h3>
          <p>
            {gameDetail.parent_platforms
              ?.map((p) => p.platform.name)
              .join(', ')}
          </p>
        </div>
        <div className="info-item">
          <h3>Genres</h3>
          <p>{gameDetail.genres?.map((g) => g.name).join(', ')}</p>{' '}
        </div>
        <div className="info-item">
          <h3>Tags</h3>
          <p>{gameDetail.tags?.map((g) => g.name).join(', ')}</p>{' '}
        </div>
        <div className="info-item">
          <h3>Released date</h3>
          <p>{gameDetail.released}</p>
        </div>
        <div className="info-item">
          <h3>Developers</h3>
          <p>{gameDetail.developers?.map((d) => d.name).join(', ')}</p>
        </div>
        <div className="info-item">
          <h3>Where to buy</h3>
          <p>{gameDetail.stores.map((s) => s.store.name).join(', ')}</p>
        </div>
      </article>
    </div>
  );
}

export default GameDetailPage;

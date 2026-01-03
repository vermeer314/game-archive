function GameCardSkeleton() {
  return (
    <article className="game-card">
      <div className="card-image-wrap skeleton-image"></div>
      <div className="card-content">
        <div className="skeleton-title"></div>
        <div className="card-content-footer">
          <div className="skeleton-icons"></div>
          <div className="skeleton-rating"></div>
        </div>
      </div>
    </article>
  );
}

export default GameCardSkeleton;

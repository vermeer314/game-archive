function GameDetailSkeleton() {
  return (
    <div className="detail-grid">
      {/* 왼쪽 메인 정보 */}
      <div className="main-column">
        <div className="detail-skeleton"></div>

        <div className="detail-skeleton detail-skeleton-title"></div>
        <figure className="card-image-wrap">
          <div className="detail-skeleton detail-skeleton-image"></div>
        </figure>
        <section>
          <div className="detail-skeleton detail-skeleton-about"></div>
          <div className="detail-skeleton detail-skeleton-description"></div>
          <div className="detail-skeleton detail-skeleton-description"></div>
          <div className="detail-skeleton detail-skeleton-description"></div>
          <div className="detail-skeleton detail-skeleton-description"></div>
        </section>
      </div>

      {/* 오른쪽 정보 사이드바 */}
      <article className="info-sidebar">
        <div className="info-item">
          <div className="detail-skeleton detail-skeleton-category"></div>
          <div className="detail-skeleton detail-skeleton-info"></div>
        </div>
        <div className="info-item">
          <div className="detail-skeleton detail-skeleton-category"></div>
          <div className="detail-skeleton detail-skeleton-info"></div>
        </div>
        <div className="info-item">
          <div className="detail-skeleton detail-skeleton-category"></div>
          <div className="detail-skeleton detail-skeleton-info"></div>
        </div>
        <div className="info-item">
          <div className="detail-skeleton detail-skeleton-category"></div>
          <div className="detail-skeleton detail-skeleton-info"></div>
        </div>
      </article>
    </div>
  );
}

export default GameDetailSkeleton;

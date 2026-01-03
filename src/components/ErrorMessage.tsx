function ErrorMessage({ message }: Props) {
  return (
    <div className="error-container">
      <div className="error-icon">⛔️</div>
      <p className="error-text">Something went wrong...</p>
      <p className="error-detail">{message}</p>
      <button className="retry-button" onClick={() => window.location.reload()}>
        Retry
      </button>
    </div>
  );
}
interface Props {
  message: string;
}
export default ErrorMessage;

const Loading = () => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-transparent"
      role="status"
      aria-live="polite"
    >
      <div className="loading-container">
        <div className="rect rect1"></div>
        <div className="rect rect2"></div>
        <div className="rect rect3"></div>
        <div className="rect rect4"></div>
        <div className="rect rect5"></div>
      </div>
    </div>
  );
};

export default Loading;

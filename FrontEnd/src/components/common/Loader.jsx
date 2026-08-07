import "./Loader.css";

const Loader = ({ size = "medium", fullScreen = false, label = "Loading..." }) => {
  return (
    <div className={`cc-loader-wrapper ${fullScreen ? "cc-loader-fullscreen" : ""}`}>
      <div className={`cc-loader cc-loader-${size}`}></div>
      {label && <p className="cc-loader-label">{label}</p>}
    </div>
  );
};

export default Loader;
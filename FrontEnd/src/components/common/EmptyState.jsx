import "./EmptyState.css";

const EmptyState = ({ message = "No data available", icon = "📭", actionLabel, onAction }) => {
  return (
    <div className="cc-emptystate">
      <div className="cc-emptystate-icon">{icon}</div>
      <p className="cc-emptystate-message">{message}</p>
      {actionLabel && onAction && (
        <button type="button" className="cc-emptystate-action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
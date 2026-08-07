import { useEffect } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div className="cc-modal-overlay" onClick={handleOverlayClick}>
      <div className="cc-modal">
        <div className="cc-modal-header">
          {title && <h3 className="cc-modal-title">{title}</h3>}
          <button
            type="button"
            className="cc-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="cc-modal-body">{children}</div>

        {footer && <div className="cc-modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
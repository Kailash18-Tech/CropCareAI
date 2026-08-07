// src/components/common/Input.jsx
import './Input.css';

/**
 * Input
 * Reusable text/password/email/select-style input with label + error support.
 *
 * Props:
 *  - label: string
 *  - id: string (required — links label to input)
 *  - error: string — when present, shows error styling + message
 *  - icon: optional React Icon element rendered inside the field
 *  - as: 'input' | 'textarea' (default 'input')
 *  - required: boolean — shows a required marker next to the label
 *  - all other native input props are passed through
 */
export default function Input({
  label,
  id,
  error,
  icon = null,
  as = 'input',
  required = false,
  className = '',
  ...rest
}) {
  const Field = as;

  return (
    <div className={`field ${error ? 'field--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className="field__label">
          {label}
          {required && <span className="field__required">*</span>}
        </label>
      )}
      <div className="field__control">
        {icon && <span className="field__icon">{icon}</span>}
        <Field
          id={id}
          className={`field__input ${icon ? 'field__input--with-icon' : ''}`}
          {...rest}
        />
      </div>
      {error && <p className="field__error">{error}</p>}
    </div>
  );
}
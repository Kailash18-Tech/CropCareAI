// src/components/common/Button.jsx
import './Button.css';

/**
 * Button
 * Reusable button with variant/size/loading/disabled support.
 *
 * Props:
 *  - variant: 'primary' | 'secondary' | 'success' | 'danger' | 'outline' (default 'primary')
 *  - size: 'sm' | 'md' | 'lg' (default 'md')
 *  - loading: boolean — shows a spinner and disables the button
 *  - disabled: boolean
 *  - fullWidth: boolean
 *  - icon: optional React Icon element rendered before the label
 *  - type: 'button' | 'submit' | 'reset' (default 'button')
 *  - onClick, children, ...rest are passed through
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon = null,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    loading ? 'btn--loading' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="btn__spinner" aria-hidden="true" />
      ) : (
        icon && <span className="btn__icon">{icon}</span>
      )}
      <span className="btn__label">{children}</span>
    </button>
  );
}
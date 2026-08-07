// src/components/common/Card.jsx
import './Card.css';

/**
 * Card
 * Generic surface container — base for stat cards, feature cards, panels.
 *
 * Props:
 *  - padding: 'sm' | 'md' | 'lg' (default 'md')
 *  - hoverable: boolean — adds lift + shadow on hover (default false)
 *  - as: element type to render as, e.g. 'a' for a clickable card (default 'div')
 */
export default function Card({
  padding = 'md',
  hoverable = false,
  as: Component = 'div',
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'card',
    `card--pad-${padding}`,
    hoverable ? 'card--hoverable' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}
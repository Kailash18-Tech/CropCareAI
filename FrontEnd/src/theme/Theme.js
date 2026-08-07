// theme.js
// JS-side mirror of tokens.css — use this when a color/spacing value
// is needed in JS logic (e.g. chart colors), not in a .css file.
// Keep this in sync with styles/tokens.css whenever tokens change.
 
export const theme = {
  colors: {
    primary: '#2E7D32',
    primaryDark: '#1B5E20',
    primaryLight: '#66BB6A',
    secondary: '#A5D6A7',
    secondaryLight: '#E8F5E9',
    accent: '#F57C00',
    accentLight: '#FFE0B2',
 
    bg: '#F7FAF7',
    card: '#FFFFFF',
    border: '#E0E5E0',
 
    text: '#212121',
    textMuted: '#6B7280',
    textInverse: '#FFFFFF',
 
    success: '#2E7D32',
    successBg: '#E8F5E9',
    warning: '#F57C00',
    warningBg: '#FFF3E0',
    danger: '#D32F2F',
    dangerBg: '#FDECEA',
    info: '#0288D1',
    infoBg: '#E1F5FE',
  },
  font: {
    family: "'Poppins', sans-serif",
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    pill: '999px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  shadow: {
    sm: '0 1px 3px rgba(0,0,0,0.06)',
    md: '0 4px 12px rgba(0,0,0,0.08)',
    lg: '0 8px 24px rgba(0,0,0,0.10)',
  },
};
 
export default theme;
 
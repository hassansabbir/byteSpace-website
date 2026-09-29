export const THEME_CONFIG = {
  colors: {
    primary: {
      rgb: '26 86 219',
      hex: '#1A56DB',
      hover: '#1D4ED8',
      foreground: '#FFFFFF',
    },
    secondary: {
      rgb: '204 255 0',
      hex: '#CCFF00',
      hover: '#BCEB00',
      foreground: '#0F172A',
    },
    background: {
      rgb: '255 255 255',
      hex: '#FFFFFF',
    },
    foreground: {
      rgb: '15 23 42',
      hex: '#0F172A',
    },
    surface: {
      rgb: '255 255 255',
      hex: '#FFFFFF',
      mutedRgb: '248 250 252',
      mutedHex: '#F8FAFC',
      foreground: '#0F172A',
    },
    muted: {
      rgb: '241 245 249',
      hex: '#F1F5F9',
      foregroundRgb: '100 116 139',
      foregroundHex: '#64748B',
    },
    border: {
      rgb: '226 232 240',
      hex: '#E2E8F0',
      hoverHex: '#CBD5E1',
    },
  },
  typography: {
    fontSans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  radii: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
} as const;

export type ThemeConfig = typeof THEME_CONFIG;

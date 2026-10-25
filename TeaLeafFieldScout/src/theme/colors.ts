// Layer A: supplied brand palette. Exact values, never altered.
const brand = {
  green600: '#338732', // Primary Green
  green700: '#2C642B',
  green800: '#265526',
  forest900: '#214622',
  leaf: '#4C8A40',
  red700: '#BA1E0F',
  dangerRed800: '#A1120B',
  red900: '#800E08',
  surfaceGreen: '#EAF3E8',
  canvas: '#F6F8F4',
} as const;

// Layer A: supplementary recommendations. NOT supplied brand colours.
// Proposed in the design file and still awaiting approval.
const supplementary = {
  neutral0: '#FFFFFF',
  neutral100: '#EDF0EB',
  neutral200: '#DCE3D9',
  neutral300: '#C9D2C6',
  neutral500: '#7A8577',
  neutral600: '#5A6458',
  neutral700: '#454E44',
  neutral900: '#1B2119',
  amber50: '#FFF4DC',
  amber600: '#B06F0A',
  amber800: '#7A4A00',
  blue50: '#E7F0F8',
  blue800: '#1D4E7A',
  red50: '#FBEBE9',
  scrim56: 'rgba(27, 33, 25, 0.56)', // #1B2119 @ 56%
  shadow12: 'rgba(27, 33, 25, 0.12)', // #1B2119 @ 12%
} as const;

// Layer B: semantic tokens. Components use ONLY these, never raw hex.
export const colors = {
  brand: {
    primary: brand.green600,
    primaryHover: brand.green700,
    primaryPressed: brand.green800,
    forest: brand.forest900,
    leaf: brand.leaf,
  },
  background: {
    canvas: brand.canvas,
    surface: brand.surfaceGreen,
    surfaceRaised: supplementary.neutral0,
    surfaceSubtle: supplementary.neutral100,
    inverse: brand.forest900,
  },
  text: {
    primary: supplementary.neutral900,
    secondary: supplementary.neutral700,
    muted: supplementary.neutral600,
    inverse: supplementary.neutral0,
    brand: brand.green700,
    disabled: supplementary.neutral500,
  },
  border: {
    default: supplementary.neutral300, // decorative only, NOT an input boundary
    divider: supplementary.neutral200,
    strong: supplementary.neutral500, // inputs and controls (3:1)
    focus: brand.forest900,
    error: brand.dangerRed800,
  },
  action: {
    primary: brand.green600,
    primaryPressed: brand.green800,
    secondary: supplementary.neutral0,
    destructive: brand.dangerRed800,
    destructivePressed: brand.red900,
    disabled: supplementary.neutral100,
  },
  status: {
    success: brand.green700,
    successSurface: brand.surfaceGreen,
    warning: supplementary.amber800,
    warningGraphic: supplementary.amber600,
    warningSurface: supplementary.amber50,
    error: brand.dangerRed800,
    errorGraphic: brand.red700,
    errorSurface: supplementary.red50,
    info: supplementary.blue800,
    infoSurface: supplementary.blue50,
    neutral: supplementary.neutral600,
    neutralSurface: supplementary.neutral100,
  },
  overlay: {
    scrim: supplementary.scrim56,
  },
  effect: {
    shadow: supplementary.shadow12,
  },
} as const;
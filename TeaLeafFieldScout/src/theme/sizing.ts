export const iconSize = {
  sm: 16, // dense / non-essential decoration only
  md: 20,
  lg: 24, // default for standalone actions
  xl: 32,
} as const;

export const controlHeight = {
  sm: 40, // exception: still needs a 48 dp hit area
  md: 48, // default
  lg: 56, // capture CTA
} as const;

export const touchTargetMin = 48;

// Layout limits
export const maxContentWidth = 600; // tablets
export const maxDialogWidth = 560;
export const minComponentWidth = 280;

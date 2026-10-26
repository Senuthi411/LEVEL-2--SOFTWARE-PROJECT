export const radius = {
  none: 0,
  sm: 8, // thumbnails, small chips
  control: 12, // buttons, inputs
  card: 16,
  dialog: 16, // dialogs, bottom-sheet top corners
  full: 999, // badges, pills
} as const;

export const borderWidth = {
  default: 1, // border/strong on controls
  emphasis: 2, // selected / error
} as const;

// Focus ring: 2 dp Forest 900 ring with a 2 dp offset.
export const focusRing = {
  width: 2,
  offset: 2,
} as const;

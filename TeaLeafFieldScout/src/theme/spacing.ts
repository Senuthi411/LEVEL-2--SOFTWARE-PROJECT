// Design system: 4 dp base, confirmed 10-step scale.
// Units are dp (density-independent pixels), same as React Native.
export const spacing = {
  s4: 4,
  s8: 8,
  s12: 12,
  s16: 16,
  s20: 20,
  s24: 24,
  s32: 32,
  s40: 40,
  s48: 48,
  s64: 64,
} as const;

// Semantic aliases of the scale. Components should use these.
export const space = {
  inlineGap: spacing.s8, // icon <-> label
  fieldGap: spacing.s4, // label <-> control <-> helper
  controlPaddingX: spacing.s16, // button / input horizontal padding
  cardPadding: spacing.s16,
  listItemGap: spacing.s12,
  screenMargin: spacing.s16,
  sectionGap: spacing.s24,
  modalPadding: spacing.s24,
  pageRhythm: spacing.s32,
} as const;

export type SpacingKey = keyof typeof spacing;

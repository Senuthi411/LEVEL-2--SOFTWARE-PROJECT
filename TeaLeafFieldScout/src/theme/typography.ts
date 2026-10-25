import { TextStyle } from 'react-native';

// Font family names must match the bundled font file names (Step 3).
export const fontFamily = {
  poppinsMedium: 'Poppins-Medium',
  poppinsSemiBold: 'Poppins-SemiBold',
  interRegular: 'Inter-Regular',
  interMedium: 'Inter-Medium',
  interSemiBold: 'Inter-SemiBold',
} as const;

// Sizes are dp. lineHeight must always be set explicitly in React Native.
// Do NOT set allowFontScaling={false} on Text: system font scaling must work.
export const typography = {
  display: { fontFamily: fontFamily.poppinsSemiBold, fontSize: 32, lineHeight: 40, letterSpacing: 0 },
  headingPage: { fontFamily: fontFamily.poppinsSemiBold, fontSize: 24, lineHeight: 32, letterSpacing: 0 },
  headingSection: { fontFamily: fontFamily.poppinsSemiBold, fontSize: 20, lineHeight: 28, letterSpacing: 0 },
  headingSubsection: { fontFamily: fontFamily.poppinsMedium, fontSize: 18, lineHeight: 26, letterSpacing: 0 },
  headingCard: { fontFamily: fontFamily.poppinsSemiBold, fontSize: 16, lineHeight: 24, letterSpacing: 0 },

  bodyLarge: { fontFamily: fontFamily.interRegular, fontSize: 18, lineHeight: 28, letterSpacing: 0 },
  bodyDefault: { fontFamily: fontFamily.interRegular, fontSize: 16, lineHeight: 24, letterSpacing: 0 },
  bodySmall: { fontFamily: fontFamily.interRegular, fontSize: 14, lineHeight: 20, letterSpacing: 0 },

  labelField: { fontFamily: fontFamily.interSemiBold, fontSize: 14, lineHeight: 20, letterSpacing: 0.1 },
  labelButton: { fontFamily: fontFamily.interSemiBold, fontSize: 16, lineHeight: 24, letterSpacing: 0.1 },
  labelStatus: { fontFamily: fontFamily.interSemiBold, fontSize: 14, lineHeight: 20, letterSpacing: 0.1 },

  helperDefault: { fontFamily: fontFamily.interRegular, fontSize: 14, lineHeight: 20, letterSpacing: 0 },
  helperError: { fontFamily: fontFamily.interMedium, fontSize: 14, lineHeight: 20, letterSpacing: 0 },

  // Non-essential metadata only (never essential information).
  caption: { fontFamily: fontFamily.interRegular, fontSize: 12, lineHeight: 16, letterSpacing: 0.2 },

  // GPS accuracy, counts, times: tabular figures.
  numericDefault: {
    fontFamily: fontFamily.interMedium,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    fontVariant: ['tabular-nums'],
  },
} as const satisfies Record<string, TextStyle>;

export type TypographyKey = keyof typeof typography;
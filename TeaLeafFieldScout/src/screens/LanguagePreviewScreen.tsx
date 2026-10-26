import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { AppLanguage, languages, setAppLanguage } from '../i18n';
import { colors, controlHeight, radius, space, typography } from '../theme';

// DEV-ONLY: checks Sinhala and Tamil rendering. Remove later.
const scriptFont: Record<AppLanguage, { regular: string; semiBold: string }> = {
  en: { regular: 'Inter-Regular', semiBold: 'Inter-SemiBold' },
  si: {
    regular: 'NotoSansSinhala-Regular',
    semiBold: 'NotoSansSinhala-SemiBold',
  },
  ta: {
    regular: 'NotoSansTamil-Regular',
    semiBold: 'NotoSansTamil-SemiBold',
  },
};

const tabKeys = ['home', 'history', 'new', 'corrections', 'sync'] as const;

function LanguagePreviewScreen() {
  const { t, i18n } = useTranslation();
  const current: AppLanguage =
    i18n.language in scriptFont ? (i18n.language as AppLanguage) : 'en';
  const font = scriptFont[current];

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={typography.headingPage}>{t('app.name')}</Text>
        <Text style={[typography.bodyDefault, styles.gap]}>
          {t('language.chooseLanguage')}
        </Text>

        <View style={styles.row}>
          {languages.map(l => {
            const selected = current === l.code;
            return (
              <Pressable
                key={l.code}
                accessibilityRole="button"
                accessibilityState={{ selected }}
                onPress={() => setAppLanguage(l.code)}
                style={[styles.chip, selected && styles.chipSelected]}
              >
                <Text
                  style={[
                    typography.labelButton,
                    styles.ink,
                    { fontFamily: scriptFont[l.code].semiBold },
                  ]}
                >
                  {l.nativeName}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={[typography.headingSection, styles.gap]}>
          Default font (Inter)
        </Text>
        {tabKeys.map(k => (
          <Text key={k} style={typography.bodyLarge}>
            {t(`tabs.${k}`)}
          </Text>
        ))}

        <Text style={[typography.headingSection, styles.gap]}>
          Script font (Noto)
        </Text>
        {tabKeys.map(k => (
          <Text
            key={k}
            style={[
              typography.bodyLarge,
              styles.ink,
              { fontFamily: font.regular },
            ]}
          >
            {t(`tabs.${k}`)}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ink: { color: colors.text.primary },
  safe: { flex: 1, backgroundColor: colors.background.canvas },
  content: { padding: space.screenMargin },
  gap: { marginTop: space.sectionGap, marginBottom: space.inlineGap },
  row: { flexDirection: 'row', gap: space.inlineGap },
  chip: {
    minHeight: controlHeight.md,
    paddingHorizontal: space.controlPaddingX,
    justifyContent: 'center',
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border.strong,
    backgroundColor: colors.background.surfaceRaised,
  },
  chipSelected: {
    borderWidth: 2,
    borderColor: colors.border.focus,
    backgroundColor: colors.background.surface,
  },
});

export default LanguagePreviewScreen;

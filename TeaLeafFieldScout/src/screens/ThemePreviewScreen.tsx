import React from 'react';
import { ScrollView, StyleSheet, Text, TextStyle, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius, space, spacing, typography } from '../theme';

// DEV-ONLY preview of the design tokens. Remove when real screens exist.
const swatches: Array<[string, string]> = [
  ['brand.primary', colors.brand.primary],
  ['brand.forest', colors.brand.forest],
  ['background.canvas', colors.background.canvas],
  ['background.surface', colors.background.surface],
  ['text.primary', colors.text.primary],
  ['text.brand', colors.text.brand],
  ['status.error', colors.status.error],
  ['status.warning', colors.status.warning],
  ['status.info', colors.status.info],
];

function ThemePreviewScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={typography.headingPage}>Theme preview</Text>

        <Text style={[typography.headingSection, styles.section]}>
          Type scale
        </Text>
        {Object.entries(typography).map(([name, style]) => (
          <View key={name} style={styles.row}>
            <Text style={typography.caption}>{name}</Text>
            <Text style={[style as TextStyle, { color: colors.text.primary }]}>
              Blister blight ± 12.5 m
            </Text>
          </View>
        ))}

        <Text style={[typography.headingSection, styles.section]}>Colours</Text>
        {swatches.map(([name, value]) => (
          <View key={name} style={styles.swatchRow}>
            <View style={[styles.swatch, { backgroundColor: value }]} />
            <Text style={typography.bodySmall}>
              {name} {value}
            </Text>
          </View>
        ))}

        <Text style={[typography.headingSection, styles.section]}>Spacing</Text>
        {Object.entries(spacing).map(([name, value]) => (
          <View key={name} style={styles.swatchRow}>
            <View style={[styles.bar, { width: value }]} />
            <Text style={typography.bodySmall}>
              {name} = {value} dp
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background.canvas },
  content: { padding: space.screenMargin, paddingBottom: spacing.s64 },
  section: { marginTop: space.sectionGap, marginBottom: space.inlineGap },
  row: {
    marginBottom: space.listItemGap,
    paddingBottom: space.listItemGap,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.divider,
  },
  swatchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: space.inlineGap,
  },
  swatch: {
    width: spacing.s48,
    height: spacing.s32,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border.strong,
    marginRight: space.listItemGap,
  },
  bar: {
    height: spacing.s16,
    backgroundColor: colors.brand.primary,
    marginRight: space.listItemGap,
  },
});

export default ThemePreviewScreen;

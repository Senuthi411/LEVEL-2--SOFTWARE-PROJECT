import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, space, typography } from '../theme';

type Props = {
  title: string;
};

// TEMPORARY: replaced by real screens in later milestones.
function PlaceholderScreen({ title }: Props) {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.content}>
        <Text style={[typography.headingPage, styles.title]}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background.canvas },
  content: { padding: space.screenMargin },
  title: { color: colors.text.primary },
});

export default PlaceholderScreen;

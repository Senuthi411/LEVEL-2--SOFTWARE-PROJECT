import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import LanguagePreviewScreen from '../screens/LanguagePreviewScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import { colors, typography } from '../theme';
import { TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();

function RootNavigator() {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.text.brand,
        tabBarInactiveTintColor: colors.text.secondary,
        tabBarLabelStyle: typography.labelStatus,
        tabBarStyle: {
          backgroundColor: colors.background.surfaceRaised,
          borderTopColor: colors.border.default,
        },
      }}
    >
      {/* TEMPORARY: Home shows the language test screen until the real Home exists. */}
      <Tab.Screen
        name="Home"
        options={{ title: t('tabs.home') }}
        children={() => <LanguagePreviewScreen />}
      />
      <Tab.Screen
        name="History"
        options={{ title: t('tabs.history') }}
        children={() => <PlaceholderScreen title={t('tabs.history')} />}
      />
      <Tab.Screen
        name="New"
        options={{ title: t('tabs.new') }}
        children={() => <PlaceholderScreen title={t('tabs.new')} />}
      />
      <Tab.Screen
        name="Corrections"
        options={{ title: t('tabs.corrections') }}
        children={() => <PlaceholderScreen title={t('tabs.corrections')} />}
      />
      <Tab.Screen
        name="Sync"
        options={{ title: t('tabs.sync') }}
        children={() => <PlaceholderScreen title={t('tabs.sync')} />}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;

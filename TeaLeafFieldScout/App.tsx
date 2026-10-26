import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './src/i18n';
import LanguagePreviewScreen from './src/screens/LanguagePreviewScreen';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <LanguagePreviewScreen />
    </SafeAreaProvider>
  );
}

export default App;

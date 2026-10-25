import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemePreviewScreen from './src/screens/ThemePreviewScreen';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <ThemePreviewScreen />
    </SafeAreaProvider>
  );
}

export default App;
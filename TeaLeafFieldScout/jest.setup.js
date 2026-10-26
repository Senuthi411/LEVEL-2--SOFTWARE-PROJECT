/* eslint-env jest */

// Use the in-memory mock that ships with AsyncStorage, so tests need no native module.
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest'),
);

import { createAsyncStorage } from '@react-native-async-storage/async-storage';

// Non-sensitive preferences only. AsyncStorage is NOT encrypted:
// never store passwords, tokens or observation data here.
const settings = createAsyncStorage('settings');

const LANGUAGE_KEY = 'language';

export async function loadLanguage(): Promise<string | null> {
  try {
    return await settings.getItem(LANGUAGE_KEY);
  } catch {
    return null;
  }
}

export async function saveLanguage(code: string): Promise<void> {
  try {
    await settings.setItem(LANGUAGE_KEY, code);
  } catch {
    // A preference must never crash the app if saving fails.
  }
}

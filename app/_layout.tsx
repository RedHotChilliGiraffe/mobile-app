import {Stack} from 'expo-router';
import {ThemeProvider as PaperThemeProvider} from 'react-native-paper';
import {Appearance} from 'react-native';
import themes from '../src/theme/theme';
import {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthProvider} from '../src/stores/Auth';

export default function () {
  const [theme, setTheme] = useState(
    themes[Appearance.getColorScheme() || 'light'],
  );

  Appearance.addChangeListener((data) => {
    setTheme(themes[data.colorScheme || 'light']);
  });

  return (
    // @ts-ignore
    <PaperThemeProvider theme={theme}>
      <AuthProvider>
        <SafeAreaProvider style={{backgroundColor: theme.colors.background}}>
          <Stack />
        </SafeAreaProvider>
      </AuthProvider>
    </PaperThemeProvider>
  );
}

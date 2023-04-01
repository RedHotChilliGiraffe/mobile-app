import {Slot} from 'expo-router';
import {
  ThemeProvider as PaperThemeProvider,
  Provider,
} from 'react-native-paper';
import {Appearance, StyleSheet} from 'react-native';
import themes from '../src/theme/theme';
import {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthProvider} from '../src/stores/Auth';
import {LobbyProvider} from '../src/stores/Lobby';

export default function () {
  const [theme, setTheme] = useState(
    themes[Appearance.getColorScheme() || 'light'],
  );

  Appearance.addChangeListener((data) => {
    setTheme(themes[data.colorScheme || 'light']);
  });

  return (
    <Provider>
      {/* @ts-ignore */}
      <PaperThemeProvider theme={theme}>
        <AuthProvider>
          <LobbyProvider>
            <SafeAreaProvider
              style={[
                {
                  backgroundColor: theme.colors.background,
                },
                StyleSheet.absoluteFill,
              ]}>
              <Slot />
            </SafeAreaProvider>
          </LobbyProvider>
        </AuthProvider>
      </PaperThemeProvider>
    </Provider>
  );
}

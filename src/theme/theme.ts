import {DefaultTheme, MD3DarkTheme} from 'react-native-paper';
import colors from './colors';
import {ThemeMode} from './types';

const themes = {
  [ThemeMode.Dark]: {
    ...MD3DarkTheme,
    colors: colors[ThemeMode.Dark],
  },
  [ThemeMode.Light]: {
    ...DefaultTheme,
    colors: colors[ThemeMode.Light],
  },
};

export default themes;

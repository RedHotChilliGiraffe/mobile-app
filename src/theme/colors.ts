import {DefaultTheme, MD3DarkTheme} from 'react-native-paper';
import {ThemeMode} from './types';

const colors = {
  [ThemeMode.Dark]: {
    ...MD3DarkTheme.colors,
    primary: '#8D7BAE',
    onPrimary: '#372F47',
    background: '#160C28',
    surfaceVariant: '#9F95B1',
    onSurfaceVariant: '#69607A',
    outline: '#C0ABE7',
    tertiary: '#23221F',
    onTertiary: '#160C28',
    inversePrimary: '#3A3446',
  },
  [ThemeMode.Light]: {
    ...DefaultTheme.colors,
    primary: '#F3A738',
    onPrimary: '#FEF7D7',
    background: '#FEF7E2',
    surfaceVariant: '#FEF7D7',
    onSurfaceVariant: '#938F6A',
    outline: '#F7C478',
    tertiary: '#2F2B24',
    onTertiary: '#F7C478',
    inversePrimary: '#FBF0DA',
  },
};

export default colors;

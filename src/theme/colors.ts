import {DefaultTheme, MD3DarkTheme} from 'react-native-paper';
import {ThemeMode} from './types';

const colors = {
  [ThemeMode.Dark]: {
    ...MD3DarkTheme.colors,
    primary: '#AC91DE',
    onPrimary: '#372F47',
    background: '#160C28',
    surfaceVariant: '#9F95B1',
    onSurfaceVariant: '#69607A',
    outline: '#C0ABE7',
    tertiary: '#23221F',
    onTertiary: '#160C28',
  },
  [ThemeMode.Light]: {
    ...DefaultTheme.colors,
    primary: '#F3A738',
    onPrimary: '#FEF7D7',
    background: '#FEF1B8',
    surfaceVariant: '#FEF7D7',
    onSurfaceVariant: '#938F6A',
    outline: '#F7C478',
    tertiary: '#2F2B24',
    onTertiary: '#F7C478',
  },
};

export default colors;

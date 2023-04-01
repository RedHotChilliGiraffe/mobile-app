import {DefaultTheme, MD3DarkTheme} from 'react-native-paper';
import {ThemeMode} from './types';

const colors = {
  [ThemeMode.Dark]: {
    ...MD3DarkTheme.colors,
    primary: '#AC91DE',
    background: '#160C28',
    surfaceVariant: '#FEF7D7',
    onSurfaceVariant: '#69607A',
    outline: '#C0ABE7',
  },
  [ThemeMode.Light]: {
    ...DefaultTheme.colors,
    primary: '#F3A738',
    background: '#FEF1B8',
    surfaceVariant: '#FEF7D7',
    onSurfaceVariant: '#938F6A',
    outline: '#F7C478',
  },
};

export default colors;

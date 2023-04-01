import {DefaultTheme, MD3DarkTheme} from 'react-native-paper';
import {ThemeMode} from './types';

const colors = {
  [ThemeMode.Dark]: {
    ...MD3DarkTheme.colors,
    primary: '#DD9132',
    background: '#211710',
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

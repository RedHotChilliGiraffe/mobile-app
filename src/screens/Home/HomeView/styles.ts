import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    padding: '10%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 10,
  },
  title: {
    fontWeight: '700',
  },
  buttons: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  button: {
    padding: 10,
    borderRadius: 40,
    width: 200,
  },
});

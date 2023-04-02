import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: '2%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  title: {
    fontWeight: '700',
  },
  label: {
    fontSize: 20,
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

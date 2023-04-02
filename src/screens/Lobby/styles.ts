import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  smallContainer: {
    flex: 0.6,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  loading: {
    gap: 18,
  },
  button: {
    padding: 10,
    borderRadius: 40,
    width: 200,
  },
  image: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginBottom: 30,
  },
});

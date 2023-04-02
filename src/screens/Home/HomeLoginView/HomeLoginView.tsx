import {Link} from 'expo-router';
import {Button} from 'react-native-paper';
import {styles} from '../HomeView/styles';
import {Image, View} from 'react-native';
import {unregisterStyles} from './styles';

const HomeLoginView: React.FC = () => {
  return (
    <View style={unregisterStyles.container}>
      <View style={unregisterStyles.buttons}>
        <Link href="/login">
          <Button
            style={styles.button}
            labelStyle={styles.label}
            mode="contained">
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button
            labelStyle={styles.label}
            style={styles.button}
            mode="contained">
            Register
          </Button>
        </Link>
      </View>
    </View>
  );
};

export default HomeLoginView;

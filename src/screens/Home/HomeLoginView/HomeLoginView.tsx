import {Link} from 'expo-router';
import {Button} from 'react-native-paper';
import {styles} from '../HomeView/styles';

const HomeLoginView: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default HomeLoginView;

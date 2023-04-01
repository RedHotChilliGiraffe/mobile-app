import {Link} from 'expo-router';
import {Button} from 'react-native-paper';

const HomeLoginView: React.FC = () => {
  return (
    <>
      <Link href="/login">
        <Button mode="contained">Login</Button>
      </Link>
      <Link href="/register">
        <Button mode="contained">Register</Button>
      </Link>
    </>
  );
};

export default HomeLoginView;

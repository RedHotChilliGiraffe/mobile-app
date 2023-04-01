import {useEffect} from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import {useAuthStore} from '../../../stores/Auth';
import {Button} from 'react-native-paper';
import {styles} from './styles';

const HomeView: React.FC = () => {
  const getProfileData = useAuthStore((state) => state.getProfileData);
  const {username} = useAuthStore((state) => state.userData);

  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="displaySmall">
        Hi {username}!
      </Text>
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          mode="contained-tonal"
          onPress={() => console.log('create room')}>
          Create new room
        </Button>
        <Button style={styles.button} mode="contained-tonal">
          Join room
        </Button>
      </View>
    </View>
  );
};

export default HomeView;

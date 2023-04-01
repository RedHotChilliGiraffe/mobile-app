import {useEffect, useState} from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import {useAuthStore} from '../../../stores/Auth';
import {Button} from 'react-native-paper';
import {styles} from './styles';
import ThemeModal from '../../../components/ThemeModal/ThemeModal';

const HomeView: React.FC = () => {
  const getProfileData = useAuthStore((state) => state.getProfileData);
  const {username} = useAuthStore((state) => state.userData);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="displaySmall">
        Hi {username}!
      </Text>
      <ThemeModal visible={visible} hideModal={hideModal} />
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          mode="contained-tonal"
          onPress={showModal}>
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

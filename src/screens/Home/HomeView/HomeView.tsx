import {useEffect, useState} from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import {useAuthStore} from '../../../stores/Auth';
import {Button} from 'react-native-paper';
import {styles} from './styles';
import ThemeModal from '../../../components/ThemeModal/ThemeModal';
import {useLobbyStore} from '../../../stores/Lobby';
import {API} from '../../../utils/api/api';
import authenticatedRequest from '../../../utils/api/authenticatedRequest';
import {useRouter} from 'expo-router';

const HomeView: React.FC = () => {
  const getProfileData = useAuthStore((state) => state.getProfileData);
  const {username} = useAuthStore((state) => state.userData);
  const [visible, setVisible] = useState(false);
  const hydrateLobby = useLobbyStore((state) => state.hydrate);
  const router = useRouter();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    getProfileData();
  }, []);

  const handlePress = async (theme: string) => {
    try {
      const {data} = await authenticatedRequest(async (token) =>
        API.createLobby(token, {theme}),
      );
      hydrateLobby({
        id: data.id,
        isActive: data.is_active,
        isStarted: data.started,
        theme: data.theme,
      });
      router.push(`/lobby/${data.id}/`);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="displaySmall">
        Hi {username}!
      </Text>
      <ThemeModal
        visible={visible}
        hideModal={hideModal}
        handlePress={handlePress}
      />
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          mode="contained-tonal"
          onPress={showModal}>
          Create new room
        </Button>
        <Button
          style={styles.button}
          mode="contained-tonal"
          onPress={() => {
            router.push('/lobby/');
          }}>
          Join room
        </Button>
      </View>
    </View>
  );
};

export default HomeView;

import {useRouter} from 'expo-router';
import {View} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';
import {useLobbyStore} from '../../stores/Lobby';
import {API} from '../../utils/api/api';
import authenticatedRequest from '../../utils/api/authenticatedRequest';
import {LobbyData} from '../../utils/api/types';
import {styles} from './styles';

const LobbyCard: React.FC<LobbyData> = ({id, theme}) => {
  const router = useRouter();
  const purify = useLobbyStore((state) => state.purify);
  const handlePress = async () => {
    try {
      await authenticatedRequest((token) => API.joinLobby(token, {id}));
      purify();
      router.push(`/lobby/${id}/`);
    } catch (err) {
      console.log('joining failed', JSON.stringify(err));
    }
  };

  const {colors} = useTheme();
  const partTheme = theme.length < 30 ? theme : `${theme.slice(0, 30)}...`;

  return (
    <View style={[styles.background, {backgroundColor: colors.inversePrimary}]}>
      <Text style={styles.text} variant="titleLarge">
        Theme: {partTheme}
      </Text>
      <Button onPress={handlePress}>Join lobby!</Button>
    </View>
  );
};

export default LobbyCard;

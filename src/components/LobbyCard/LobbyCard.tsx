import {useRouter} from 'expo-router';
import {View} from 'react-native';
import {Button, Text, TouchableRipple, useTheme} from 'react-native-paper';
import {API} from '../../utils/api/api';
import authenticatedRequest from '../../utils/api/authenticatedRequest';
import {LobbyData} from '../../utils/api/types';
import {styles} from './styles';

const LobbyCard: React.FC<LobbyData> = ({id, theme}) => {
  const router = useRouter();
  const handlePress = async () => {
    try {
      await authenticatedRequest((token) => API.joinLobby(token, {id}));
      router.push(`/lobby/${id}/`);
    } catch (err) {
      console.log('joining failed', JSON.stringify(err));
    }
  };

  const {colors} = useTheme();
  return (
    <View style={[styles.background, {backgroundColor: colors.backdrop}]}>
      <Text style={styles.text} variant="titleLarge">
        Theme: {theme}
      </Text>
      <Button onPress={handlePress}>Join lobby!</Button>
    </View>
  );
};

export default LobbyCard;

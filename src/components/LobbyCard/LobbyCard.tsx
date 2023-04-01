import {useRouter} from 'expo-router';
import {View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {LobbyData} from '../../utils/api/types';

const LobbyCard: React.FC<LobbyData> = ({id, theme}) => {
  const router = useRouter();
  const handlePress = () => {
    router.push(`/lobby/${id}/`);
  };

  return (
    <TouchableRipple onPress={handlePress}>
      <View>
        <Text>{theme}</Text>
      </View>
    </TouchableRipple>
  );
};

export default LobbyCard;

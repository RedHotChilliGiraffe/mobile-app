import {useRouter} from 'expo-router';
import {View} from 'react-native';
import {Text, TouchableRipple, useTheme} from 'react-native-paper';
import {LobbyData} from '../../utils/api/types';
import {styles} from './styles';

const LobbyCard: React.FC<LobbyData> = ({id, theme}) => {
  const router = useRouter();
  const handlePress = () => {
    router.push(`/lobby/${id}/`);
  };

  const {colors} = useTheme();
  return (
    <TouchableRipple onPress={handlePress} style={styles.background}>
      <View style={{backgroundColor: colors.primary}}>
        <Text style={styles.text} variant="titleLarge">
          {theme}
        </Text>
      </View>
    </TouchableRipple>
  );
};

export default LobbyCard;

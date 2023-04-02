import {View, ActivityIndicator, Image} from 'react-native';
import {useTheme, Text} from 'react-native-paper';
import {useLobbyStore} from '../../../stores/Lobby';
import {styles} from './styles';

const LobbyWaitingView: React.FC = () => {
  const {colors} = useTheme();
  const theme = useLobbyStore((state) => state.theme);

  const partTheme = theme.length < 30 ? theme : `${theme.slice(0, 30)}...`;

  return (
    <>
      <View style={styles.container}>
        <Text variant="displaySmall">{partTheme}</Text>
        <View style={styles.smallContainer}>
          <View style={styles.loading}>
            <Text variant="titleMedium">
              Waiting for another player to join.
            </Text>
            <ActivityIndicator animating={true} color={colors.primary} />
          </View>
          <Text variant="titleMedium">
            Try to write complete sentences during the conversation!
          </Text>
        </View>
        <Image
          source={require('../../../../assets/dragon.png')}
          style={styles.image}></Image>
      </View>
    </>
  );
};

export default LobbyWaitingView;

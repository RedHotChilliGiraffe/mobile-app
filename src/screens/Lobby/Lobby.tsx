import {ActivityIndicator, Text, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useLobbyStore} from '../../stores/Lobby';
import {View, Image} from 'react-native';
import {styles} from './styles';

const Lobby: React.FC<{lobbyId: number}> = ({lobbyId}) => {
  const {colors} = useTheme();
  const theme = useLobbyStore((state) => state.theme);

  const partTheme = () =>
    theme.length < 30 ? theme : `${theme.slice(0, 30)}...`;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text variant="displaySmall">{partTheme()}</Text>
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
      </View>
      <Image
        source={require('../../../assets/dragon.png')}
        style={styles.image}></Image>
    </SafeAreaView>
  );
};

export default Lobby;

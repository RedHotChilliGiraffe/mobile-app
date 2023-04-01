import {Text} from 'react-native-paper';

const Lobby: React.FC<{lobbyId: number}> = ({lobbyId}) => {
  return <Text>{lobbyId}</Text>;
};

export default Lobby;

import {SafeAreaView} from 'react-native-safe-area-context';
import {useLobbyStore} from '../../stores/Lobby';
import LobbyWaitingView from './LobbyWaitingView';
import ChatView from '../../components/ChatView';

const Lobby: React.FC<{lobbyId: number}> = ({lobbyId}) => {
  const isStarted = useLobbyStore((state) => state.isStarted);

  return (
    <SafeAreaView style={{flex: 1}}>
      {isStarted ? <ChatView /> : <LobbyWaitingView />}
    </SafeAreaView>
  );
};

export default Lobby;

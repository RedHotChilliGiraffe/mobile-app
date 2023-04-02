import {SafeAreaView} from 'react-native-safe-area-context';
import {useLobbyStore} from '../../stores/Lobby';
import LobbyWaitingView from './LobbyWaitingView';
import ChatView from '../../components/ChatView';
import {useEffect} from 'react';

const Lobby: React.FC<{lobbyId: number}> = ({lobbyId}) => {
  const messages = useLobbyStore((state) => state.messages);
  const connectWebSocket = useLobbyStore((state) => state.connectWebSocket);

  useEffect(() => {
    connectWebSocket(lobbyId);
  }, [lobbyId]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {messages?.length ? <ChatView /> : <LobbyWaitingView />}
    </SafeAreaView>
  );
};

export default Lobby;

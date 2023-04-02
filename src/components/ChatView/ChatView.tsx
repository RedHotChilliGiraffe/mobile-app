import {useEffect, useRef, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {
  ActivityIndicator,
  Button,
  TextInput,
  useTheme,
} from 'react-native-paper';
import {useLobbyStore} from '../../stores/Lobby';
import {MessageType} from '../../stores/Lobby/types';
import Message from './Message';

const renderItem: ListRenderItem<MessageType> = ({item}) => {
  return <Message {...item} />;
};

const ChatView: React.FC = () => {
  const messages = useLobbyStore((state) => state.messages);
  const waiting = useLobbyStore((state) => state.waiting);
  const setWaiting = useLobbyStore((state) => state.setWaiting);
  const purify = useLobbyStore((state) => state.purify);
  const [prompt, setPrompt] = useState('');
  const webSocket = useLobbyStore((state) => state.webSocket);
  const isHost = useLobbyStore((state) => state.isHost);
  const {colors} = useTheme();
  const flatListRef = useRef<FlatList>(null);

  const disabledSendButton =
    waiting ||
    !messages ||
    messages[messages.length - 1].role === 'user' ||
    (isHost && ((messages.length - 1) / 2) % 2 === 0) ||
    (!isHost && ((messages.length - 1) / 2) % 2 === 1);

  const leave = () => {
    webSocket?.close();
    purify();
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd();
  }, [messages]);

  const send = () => {
    setWaiting(true);
    console.log(prompt);
    webSocket?.send(prompt);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 6, width: '100%', alignItems: 'center'}}>
        {messages ? (
          <FlatList
            ref={flatListRef}
            style={{flex: 1, width: '90%'}}
            data={messages}
            renderItem={renderItem}
          />
        ) : (
          <ActivityIndicator animating={true} color={colors.primary} />
        )}
        {waiting ? (
          <ActivityIndicator animating={true} color={colors.primary} />
        ) : null}
      </View>
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <TextInput
            mode="outlined"
            placeholder="Enter your prompt to the AI..."
            label="Prompt"
            style={{width: '80%'}}
            value={prompt}
            onChangeText={setPrompt}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
          }}>
          <Button mode="contained" onPress={leave}>
            Leave
          </Button>
          <Button mode="contained" disabled={disabledSendButton} onPress={send}>
            Send
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ChatView;

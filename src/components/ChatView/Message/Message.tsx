import {View} from 'react-native';
import {useTheme, Text} from 'react-native-paper';
import {MessageType} from '../../../stores/Lobby/types';

const Message: React.FC<MessageType> = ({content, role}) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors[role === 'user' ? 'onPrimary' : 'onSecondary'],
        width: '70%',
        alignSelf: role === 'user' ? 'flex-start' : 'flex-end',
        paddingVertical: 3,
        paddingHorizontal: 10,
        margin: 3,
        borderRadius: 10,
        alignItems: role === 'user' ? 'flex-start' : 'flex-end',
      }}>
      <Text>{content}</Text>
    </View>
  );
};

export default Message;

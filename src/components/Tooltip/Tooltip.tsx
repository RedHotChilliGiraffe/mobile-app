import {Ionicons} from '@expo/vector-icons';
import {View} from 'react-native';
import {useTheme, Text} from 'react-native-paper';

const Tooltip: React.FC<{children: string}> = ({children}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.onPrimary,
        borderWidth: 2,
        borderColor: colors.primary,
        flexDirection: 'row',
        padding: 16,
        borderRadius: 15,
        marginBottom: 10,
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Ionicons name="information" size={32} />
      </View>
      <View style={{flex: 6}}>
        <Text style={{textAlign: 'left'}}>{children}</Text>
      </View>
    </View>
  );
};

export default Tooltip;

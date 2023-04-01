import {
  Portal,
  Modal,
  Text,
  TextInput,
  Button,
  useTheme,
} from 'react-native-paper';
import {View} from 'react-native';
import {styles} from './styles';
import {useState} from 'react';

type Props = {
  visible: boolean;
  hideModal: () => void;
  handlePress: (data: string) => void | Promise<void>;
};

const ThemeModal = ({visible, hideModal, handlePress}: Props) => {
  const {colors} = useTheme();
  const [theme, setTheme] = useState('');
  const containerStyle = {
    backgroundColor: colors.onPrimary,
    opacity: 0.97,
    padding: 20,
    height: 400,
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <View style={styles.container}>
          <Text variant="titleMedium">
            Customize your journey! Describe the world you want to experience
          </Text>
          <TextInput
            style={styles.input}
            mode="flat"
            textColor={colors.tertiary}
            multiline={true}
            value={theme}
            onChangeText={setTheme}
            label="Set game theme"
            placeholder="Vampire kingdom"
            underlineStyle={{borderRadius: 200}}
            contentStyle={{paddingTop: 30}}
            activeUnderlineColor={colors.onTertiary}
          />
          <Button
            mode="outlined"
            style={styles.button}
            onPress={() => handlePress(theme)}>
            Create
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

export default ThemeModal;

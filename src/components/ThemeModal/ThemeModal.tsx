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

type Props = {
  visible: boolean;
  hideModal: () => void;
};

const ThemeModal = ({visible, hideModal}: Props) => {
  const {colors} = useTheme();
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
            label="Set game theme"
            placeholder="Vampire kingdom"
            underlineStyle={{borderRadius: 200}}
            contentStyle={{paddingTop: 30}}
            activeUnderlineColor={colors.onTertiary}
          />
          <Button mode="outlined" style={styles.button}>
            Submit
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

export default ThemeModal;

import {FieldValues, useController} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import {Text, View} from 'react-native';
import {TextInputProps} from './types';
import ErrorText from '../ErrorText';

const Password = <T extends FieldValues>({
  label,
  placeholder,
  control,
  name,
}: TextInputProps<T>) => {
  const {
    field: {value, onChange},
    fieldState: {error},
  } = useController({
    control,
    name,
    rules: {
      required: {
        value: true,
        message: 'Required field',
      },
    },
  });

  return (
    <View style={{width: '100%'}}>
      {error?.message ? <ErrorText>{error.message}</ErrorText> : null}
      <TextInput
        mode="outlined"
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry
        style={{width: '100%'}}
      />
    </View>
  );
};

export default Password;

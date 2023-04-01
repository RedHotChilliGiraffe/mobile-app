import {ReactElement} from 'react';
import {FieldValues, useController} from 'react-hook-form';
import {TextInput as PaperTextInput} from 'react-native-paper';
import {View, Text} from 'react-native';
import {TextInputProps} from './types';
import ErrorText from '../ErrorText';

const TextInput = <T extends FieldValues>({
  label,
  name,
  placeholder,
  control,
  required,
}: TextInputProps<T>): ReactElement => {
  const {
    field: {value, onChange},
    fieldState: {error},
  } = useController({
    control,
    name,
    rules: {required: {value: !!required, message: 'Required field'}},
  });

  return (
    <View style={{width: '100%'}}>
      {error?.message ? <ErrorText>{error.message}</ErrorText> : null}
      <PaperTextInput
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={{width: '100%'}}
      />
    </View>
  );
};

export default TextInput;

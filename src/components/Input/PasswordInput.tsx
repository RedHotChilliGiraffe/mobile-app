import {FieldValues, useController} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import {TextInputProps} from './types';

const Password = <T extends FieldValues>({
  label,
  placeholder,
  control,
  name,
}: TextInputProps<T>) => {
  const {
    field: {value, onChange},
  } = useController({control, name});

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      secureTextEntry
      style={{width: '100%'}}
    />
  );
};

export default Password;

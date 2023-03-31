import {ReactElement} from 'react';
import {FieldValues, useController} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import {TextInputProps} from './types';

const Text = <T extends FieldValues>({
  label,
  name,
  placeholder,
  control,
}: TextInputProps<T>): ReactElement => {
  const {
    field: {value, onChange},
  } = useController({control, name});

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{width: '100%'}}
    />
  );
};

export default Text;

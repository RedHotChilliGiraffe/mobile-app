import {ReactElement} from 'react';
import {View} from 'react-native';
import {Path, useController} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import {EmailInputProps} from './types';
import ErrorText from '../ErrorText';

const Email = <T extends {email: string}>({
  control,
}: EmailInputProps<T>): ReactElement => {
  const {
    field: {value, onChange},
    fieldState: {error},
  } = useController({
    control,
    name: 'email' as Path<T>,
    rules: {
      pattern: {
        value: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
        message: 'Invalid email',
      },
    },
  });

  console.log(error);

  return (
    <View style={{width: '100%'}}>
      {error?.message ? <ErrorText>{error.message}</ErrorText> : null}
      <TextInput
        label="email"
        placeholder="email"
        value={value}
        onChangeText={onChange}
        style={{width: '100%'}}
      />
    </View>
  );
};

export default Email;

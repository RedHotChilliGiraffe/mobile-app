import {useForm} from 'react-hook-form';
import Input from '../../components/Input';
import {LoginFormFields} from './types';
import {Button} from 'react-native-paper';
import {View} from 'react-native';
import {useAuthStore} from '../../stores/Auth';

const Login: React.FC = () => {
  const {control, handleSubmit} = useForm<LoginFormFields>();
  const authenticate = useAuthStore((state) => state.authenticate);

  const onSubmit = (data: LoginFormFields) => {
    authenticate(data);
  };

  return (
    <View
      style={{
        paddingHorizontal: '10%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      <Input.Text
        label="username"
        placeholder="username"
        name="username"
        control={control}
      />
      <Input.Password
        label="password"
        placeholder="password"
        name="password"
        control={control}
      />
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Login
      </Button>
    </View>
  );
};

export default Login;

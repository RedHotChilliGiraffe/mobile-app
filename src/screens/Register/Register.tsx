import {useForm} from 'react-hook-form';
import Input from '../../components/Input';
import {RegisterFormFields} from './types';
import {Button} from 'react-native-paper';
import {View} from 'react-native';
import {useAuthStore} from '../../stores/Auth';
import {useRouter} from 'expo-router';
import {useEffect} from 'react';
import {styles} from '../Home/HomeView/styles';

const Register: React.FC = () => {
  const {control, handleSubmit, setError} = useForm<RegisterFormFields>();
  const register = useAuthStore((state) => state.register);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();

  const onSubmit = async ({
    password,
    email,
    username,
    repeatPassword,
  }: RegisterFormFields) => {
    if (password === repeatPassword) {
      try {
        await register({email, username, password});
      } catch (err) {
        console.log('unauthenticated', JSON.stringify(err));
        setError('username', {message: 'Wrong data!'});
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) router.push('../');
  }, [isAuthenticated]);

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
      <Input.Email control={control} />
      <Input.Password
        label="password"
        placeholder="password"
        name="password"
        control={control}
      />
      <Input.Password
        label="repeat password"
        placeholder="repeat password"
        name="repeatPassword"
        control={control}
      />
      <Button
        style={{
          padding: 10,
          borderRadius: 40,
          width: 200,
          marginTop: 10,
        }}
        labelStyle={styles.label}
        mode="contained"
        onPress={handleSubmit(onSubmit)}>
        Register
      </Button>
    </View>
  );
};

export default Register;

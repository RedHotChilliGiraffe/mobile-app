import {useForm} from 'react-hook-form';
import Input from '../../components/Input';
import {LoginFormFields} from './types';
import {Button} from 'react-native-paper';
import {View} from 'react-native';
import {useAuthStore} from '../../stores/Auth';
import {useRouter} from 'expo-router';
import {useEffect} from 'react';
import {styles} from '../Home/HomeView/styles';

const Login: React.FC = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm<LoginFormFields>();
  const authenticate = useAuthStore((state) => state.authenticate);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();

  const onSubmit = async (data: LoginFormFields) => {
    try {
      await authenticate(data);
    } catch (err) {
      setError('username', {message: 'Niewłaściwe dane'});
      console.log('unauthenticated', JSON.stringify(err));
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
        required
        control={control}
      />
      <Input.Password
        label="password"
        placeholder="password"
        name="password"
        control={control}
      />
      <Button
        style={{
          padding: 10,
          borderRadius: 40,
          width: 200,
          marginTop: 60,
        }}
        labelStyle={styles.label}
        mode="contained"
        onPress={handleSubmit(onSubmit)}>
        Login
      </Button>
    </View>
  );
};

export default Login;

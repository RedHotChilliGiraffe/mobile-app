import AsyncStorage from '@react-native-async-storage/async-storage';
import {AxiosResponse} from 'axios';
import {ACCESS_TOKEN_KEY} from '../../stores/Auth/consts';

const authenticatedRequest = async <T>(
  callback: (token: string) => Promise<AxiosResponse<T>>,
): Promise<AxiosResponse<T>> => {
  const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) throw new Error('No access token!');

  return callback(accessToken);
};

export default authenticatedRequest;

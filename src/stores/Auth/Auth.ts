import {createStore} from 'zustand';
import {API} from '../../utils/api/api';
import {LoginFormFields} from '../../screens/Login/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from './consts';
import {AuthStoreType} from './types';

const authStore = createStore<AuthStoreType>((set) => ({
  isAuthenticated: false,
  authenticate: async (data: LoginFormFields) => {
    try {
      const {data: responseData} = await API.logIn(data);
      console.log('success', data);

      AsyncStorage.setItem(ACCESS_TOKEN_KEY, responseData.access);
      AsyncStorage.setItem(REFRESH_TOKEN_KEY, responseData.refresh);

      set({isAuthenticated: true});
    } catch (err) {
      console.log('unauthenticated', JSON.stringify(err));
      set({isAuthenticated: false});
    }
  },
  logout: () => {
    AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
    AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
    set({isAuthenticated: false});
  },
}));

export default authStore;

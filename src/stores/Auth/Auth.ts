import {createStore} from 'zustand';
import {API} from '../../utils/api/api';
import {LoginFormFields} from '../../screens/Login/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from './consts';
import {AuthStoreType} from './types';
import authenticatedRequest from '../../utils/api/authenticatedRequest';
import {RegisterFormFields} from '../../screens/Register/types';

const authStore = createStore<AuthStoreType>((set) => ({
  isAuthenticated: false,
  userData: {},
  authenticate: async (data) => {
    const {data: responseData} = await API.logIn(data);

    AsyncStorage.setItem(ACCESS_TOKEN_KEY, responseData.access);
    AsyncStorage.setItem(REFRESH_TOKEN_KEY, responseData.refresh);

    set({isAuthenticated: true});
  },
  register: async (data) => {
    await API.register(data);
  },
  getProfileData: async () => {
    const {data: userData} = await authenticatedRequest(API.getProfileData);
    set({userData});
  },
  logout: () => {
    AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
    AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
    set({isAuthenticated: false});
  },
}));

export default authStore;

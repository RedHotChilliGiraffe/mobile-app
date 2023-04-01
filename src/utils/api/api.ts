import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {LoginFormFields} from '../../screens/Login/types';
import {RegisterFormFields} from '../../screens/Register/types';
import axiosClient from './client';
import {LobbyData, ProfileData, TokenResponse} from './types';

export class API {
  static logIn(data: LoginFormFields): Promise<AxiosResponse<TokenResponse>> {
    const url = 'auth/token/';
    const method = 'POST';

    return API.request({url, method, data});
  }

  static register(
    data: Omit<RegisterFormFields, 'repeatPassword'>,
  ): Promise<AxiosResponse<void>> {
    const url = 'auth/register/';
    const method = 'POST';

    return API.request({url, method, data});
  }

  static getProfileData(token: string): Promise<AxiosResponse<ProfileData>> {
    const url = 'auth/profile/';
    const method = 'GET';

    return API.request({url, method, token});
  }

  static createLobby(
    token: string,
    data: {theme: string},
  ): Promise<AxiosResponse<LobbyData>> {
    const url = 'lobby/';
    const method = 'POST';

    return API.request({url, method, token, data});
  }

  static getLobbiesList(
    token: string,
  ): Promise<AxiosResponse<Array<LobbyData>>> {
    const url = 'lobby/';
    const method = 'GET';

    return API.request({url, method, token});
  }

  static async request<T>(
    options: AxiosRequestConfig & {token?: string},
  ): Promise<AxiosResponse<T>> {
    const {url, method, params, data, headers = {}, token} = options;

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return axiosClient.request({
      url,
      method,
      params,
      data,
      headers,
    });
  }
}

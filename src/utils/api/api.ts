import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {LoginFormFields} from '../../screens/Login/types';
import axiosClient from './client';
import {TokenResponse} from './types';

export class API {
  static logIn(data: LoginFormFields): Promise<AxiosResponse<TokenResponse>> {
    const url = 'auth/token/';
    const method = 'POST';

    return API.request({url, method, data});
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

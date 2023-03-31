import {LoginFormFields} from '../../screens/Login/types';

export type AuthStoreType = {
  isAuthenticated: boolean;
  authenticate: (data: LoginFormFields) => Promise<void>;
  logout: () => void;
};

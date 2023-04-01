import {LoginFormFields} from '../../screens/Login/types';
import {RegisterFormFields} from '../../screens/Register/types';
import {ProfileData} from '../../utils/api/types';

export type AuthStoreType = {
  isAuthenticated: boolean;
  userData: Partial<ProfileData>;
  authenticate: (data: LoginFormFields) => Promise<void>;
  register: (data: Omit<RegisterFormFields, 'repeatPassword'>) => Promise<void>;
  getProfileData: () => Promise<void>;
  logout: () => void;
};

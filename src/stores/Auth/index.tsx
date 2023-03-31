import {createContext, ReactNode, useContext} from 'react';
import {useStore} from 'zustand';
import authStore from './Auth';
import {AuthStoreType} from './types';

const AuthContext = createContext(authStore);

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => (
  <AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>
);

export const useAuthStore = <T,>(selector: (state: AuthStoreType) => T) =>
  useStore(useContext(AuthContext), selector);

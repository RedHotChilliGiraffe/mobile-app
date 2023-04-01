import {createContext, ReactNode, useContext} from 'react';
import {useStore} from 'zustand';
import lobbyStore from './Lobby';
import {LobbyStoreType} from './types';

const LobbyContext = createContext(lobbyStore);

export const LobbyProvider: React.FC<{children: ReactNode}> = ({children}) => (
  <LobbyContext.Provider value={lobbyStore}>{children}</LobbyContext.Provider>
);

export const useLobbyStore = <T,>(selector: (state: LobbyStoreType) => T) =>
  useStore(useContext(LobbyContext), selector);

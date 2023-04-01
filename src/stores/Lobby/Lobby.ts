import {createStore} from 'zustand';
import {LobbyStoreType} from './types';
import {WEB_SOCKET_URL} from '@env';

const authStore = createStore<LobbyStoreType>((set) => ({
  id: null,
  isActive: false,
  isStarted: false,
  hostUsername: '',
  theme: '',
  webSocket: undefined,
  messages: null,
  hydrate: set,
  connectWebSocket: (id) => {
    const webSocket = new WebSocket(`${WEB_SOCKET_URL}/${id}`);
    webSocket.onmessage = (event) => {
      console.log(event);
    };

    set({webSocket});
  },
}));

export default authStore;
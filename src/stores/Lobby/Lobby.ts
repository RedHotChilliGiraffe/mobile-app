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
  waiting: false,
  isHost: false,
  messages: null,
  hydrate: set,
  connectWebSocket: (id) => {
    const webSocket = new WebSocket(`${WEB_SOCKET_URL}/${id}/`);
    webSocket.onmessage = (event) => {
      set({waiting: false});
      const tempData = JSON.parse(event?.data);
      if (Array.isArray(tempData)) {
        set({
          messages: tempData.filter(
            (messageObj) => messageObj?.role && messageObj?.content,
          ),
        });
      }
    };

    set({webSocket});
  },
  purify: () => {
    set({
      id: null,
      isActive: false,
      isStarted: false,
      hostUsername: '',
      theme: '',
      webSocket: undefined,
      isHost: false,
      messages: null,
    });
  },
  setWaiting: (waiting: boolean) => {
    set({waiting});
  },
}));

export default authStore;

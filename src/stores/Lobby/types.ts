export type MessageType = {
  role: string;
  content: string;
};

type LobbyAttributes = {
  hostUsername: string;
  theme: string;
  isActive: boolean;
  isStarted: boolean;
  id: number | null;
  isHost: boolean;
};

export type LobbyStoreType = LobbyAttributes & {
  webSocket?: WebSocket;
  messages: Array<MessageType> | null;
  connectWebSocket: (id: number) => void;
  hydrate: (data: Partial<LobbyAttributes>) => void;
  purify: () => void;
  waiting: boolean;
  setWaiting: (value: boolean) => void;
};

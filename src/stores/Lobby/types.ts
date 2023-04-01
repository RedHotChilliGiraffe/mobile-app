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
};

export type LobbyStoreType = LobbyAttributes & {
  webSocket?: WebSocket;
  messages: Array<MessageType> | null;
  connectWebSocket: (id: string) => void;
  hydrate: (data: Partial<LobbyAttributes>) => void;
};
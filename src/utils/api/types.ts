import {MessageType} from '../../stores/Lobby/types';

export type TokenResponse = {
  access: string;
  refresh: string;
};

export type ProfileData = {
  username: string;
  email: string;
  phone: string;
};

export type LobbyData = {
  id: number;
  theme: string;
  messages: Array<MessageType> | null;
  is_active: boolean;
  started: boolean;
  host: number;
  participant: number | null;
};

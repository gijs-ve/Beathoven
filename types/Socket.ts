import { T_Message } from ".";

export type T_ClientToServerEvents = {
  createRoom: (name: string) => void;
  sendMessage: (message: string) => void;
};

export type T_ServerToClientEvents = {
  newRoom: (room: T_Room) => void;
  addMessage: (message: T_Message) => void;
};

export type T_Room = {
  id: string;
  name: string;
  // users: T_User[];
};

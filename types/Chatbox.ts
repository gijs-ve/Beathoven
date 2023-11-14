export type T_ChatboxState = {
  messages: T_Message[];
};

export type T_Message = {
  socketId: string;
  senderName: string;
  message: string;
  time: number;
};

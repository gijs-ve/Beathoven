import { T_Output, T_PlayingOutput } from "./Sound";
export type T_User = {
  id: string;
  socketId: string;
  username: string;
  playingOutput: T_PlayingOutput[];
};

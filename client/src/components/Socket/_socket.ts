
import { T_ClientToServerEvents, T_ServerToClientEvents } from "../../../../types";
import { createContext } from "react";
import io, { Socket } from "socket.io-client";

//TODO: HOSTURL
export const socket: Socket<T_ServerToClientEvents, T_ClientToServerEvents> =
  io("http://localhost:4000", {
    transports: ["websocket"],
    autoConnect: true,
    withCredentials: true,
  });
export const SocketContext = createContext(socket);

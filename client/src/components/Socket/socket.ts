import { T_ClientToServerEvents, T_ServerToClientEvents } from "@/types";
import { createContext } from "react";
import io, { Socket } from "socket.io-client";

//TODO: HOSTURL
export const socket: Socket<T_ServerToClientEvents, T_ClientToServerEvents> =
  io("", {
    transports: ["websocket"],
    autoConnect: false,
    withCredentials: true,
  });
export const SocketContext = createContext(socket);

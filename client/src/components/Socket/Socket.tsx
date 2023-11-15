"use client";
import { useSocket } from "@/hooks";
import { SocketReceiver } from "./SocketReceiver";
export const Socket = () => {
  useSocket();
  return <SocketReceiver />;
};

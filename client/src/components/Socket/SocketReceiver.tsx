import { useSocket } from "@/hooks";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { addMessage } from "@/store";
import { useEffect } from "react";
import { T_Message } from "../../../../types";

export const SocketReceiver = () => {
  const socket = useSocket();
  const dispatch = useAppDispatch();
  useEffect(() => {
    socket.on("addMessage", (message: T_Message) => {
      dispatch(addMessage(message));
    });
    return () => {
      socket.removeAllListeners();
    };
  }, []);
  return null;
};

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
      const newestMessage = document.getElementById("chatbox-newest");
      dispatch(addMessage(message));
      console.log({ newestMessage });
      newestMessage?.scrollIntoView();
    });
    return () => {
      socket.removeAllListeners();
    };
  }, []);
  return null;
};

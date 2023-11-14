import type { Socket } from "socket.io";
import { T_Message } from "../../types";
import { IO, log } from "../functions";
import store, { addMesssage } from "../store";

export const sendMessage = (io: IO, socket: Socket) => {
  const sendMessage = (message: string): void => {
    try {
      const newMessage: T_Message = {
        socketId: socket.id,
        senderName: "TODO: senderName",
        message,
        time: new Date().getTime(),
      };
      store.dispatch(addMesssage(newMessage));
      io.emit("addMessage", newMessage);
    } catch (error) {
      log(`ERROR in sendMessage: ${error}`, "red");
    }
  };
  socket.on("sendMessage", sendMessage);
};

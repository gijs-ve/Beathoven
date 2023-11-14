import { getHours, getMinutes, getSeconds } from "date-fns";
import type { Socket } from "socket.io";
import { T_Message } from "../../types";
import { IO, log } from "../functions";
import store, { addMesssage } from "../store";
export const sendMessage = (io: IO, socket: Socket) => {
  const sendMessage = (message: string): void => {
    try {
      const time = new Date();
      const hours = getHours(time);
      const minutes = getMinutes(time);
      const seconds = getSeconds(time);
      const newMessage: T_Message = {
        socketId: socket.id,
        senderName: "TODO: senderName",
        message,
        time: `${hours}:${minutes}:${seconds}`,
      };
      store.dispatch(addMesssage(newMessage));
      io.emit("addMessage", newMessage);
    } catch (error) {
      log(`ERROR in sendMessage: ${error}`, "red");
    }
  };
  socket.on("sendMessage", sendMessage);
};

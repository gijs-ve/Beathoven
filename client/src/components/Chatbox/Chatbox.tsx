"use client";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { toggleChatboxOpen } from "@/store/appState";
import classNames from "classnames";
import { T_Message } from "../../../../types";
import Message from "./Message";
import Sender from "./Sender";

interface MessageItem {
  time: Date;
  text: string;
  sender: string;
}

const ChatBox = () => {
  const messages = useAppSelector((state) => state.chatboxState.messages);
  const chatboxOpen = useAppSelector((state) => state.appState.chatboxOpen);
  const dispatch = useAppDispatch();
  // const [messages, setMessages] = useState<MessageItem[]>([]);

  const addMessage = (text: string) => {
    const newMessage: MessageItem = {
      text,
      sender: "user",
      time: new Date(),
    };

    // setMessages([...messages, newMessage]);
  };

  return (
    <>
      <div
        className="absolute bottom-0 right-0 h-8 w-8 bg-blueish-300 rounded-tl-xl cursor-pointer z-10"
        onClick={() => dispatch(toggleChatboxOpen())}
      ></div>
      <div
        className={classNames(
          "absolute bottom-0 right-0 bg-blueish-700 p-8 border-blueish-800 border-2 rounded-tl-xl",
          { hidden: !chatboxOpen }
        )}
      >
        <div>
          {messages.map((message: T_Message, index) => {
            const { senderName, message: _message, time, socketId } = message;
            return (
              <Message
                key={index}
                message={{
                  text: _message,
                  sender: socketId,
                  time,
                }}
              />
            );
          })}
        </div>
        <Sender addMessage={addMessage} />
      </div>
    </>
  );
};

export default ChatBox;

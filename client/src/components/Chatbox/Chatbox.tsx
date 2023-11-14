"use client";

import { useAppSelector } from "@/hooks/redux/useAppSelector";
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
    <div className="absolute bottom-0 right-0 bg-blueish-700 p-8 border-blueish-800 border-2 rounded-tl-xl">
      <div>
        {messages.map((message: T_Message, index) => {
          const {
            senderName,
            message: _message,
            date: time,
            socketId,
          } = message;
          return (
            <Message
              key={index}
              message={{
                text: _message,
                sender: socketId,
                time: new Date(time),
              }}
            />
          );
        })}
      </div>
      <Sender addMessage={addMessage} />
    </div>
  );
};

export default ChatBox;

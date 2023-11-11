import { useState } from "react";
import Message from "./Message";
import Sender from "./Sender";

interface MessageItem {
  time: Date;
  text: string;
  sender: string;
}

const ChatBox = () => {
  const [messages, setMessages] = useState<MessageItem[]>([]);

  const addMessage = (text: string) => {
    const newMessage: MessageItem = {
      text,
      sender: "user",
      time: new Date(),
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <Sender addMessage={addMessage} />
    </div>
  );
};

export default ChatBox;

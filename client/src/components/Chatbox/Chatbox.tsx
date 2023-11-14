"use client";

import { useState } from "react";
import Message from "./Message";
import Sender from "./Sender";
import { useSocket } from "@/hooks";

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
    <div className="absolute bottom-0 right-0 bg-blueish-700 p-8 border-blueish-800 border-2 rounded-tl-xl">
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

import { useSocket } from "@/hooks";
import React, { useState } from "react";

interface SenderProps {
  addMessage: (text: string) => void;
}

const Sender: React.FC<SenderProps> = ({ addMessage }) => {
  const socket = useSocket();
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      addMessage(inputMessage);
      setInputMessage("");
    }
    socket.emit("sendMessage", inputMessage)
  };

  return (
    <div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Sender;

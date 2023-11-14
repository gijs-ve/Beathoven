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
    socket.emit("sendMessage", inputMessage);
  };

  return (
    <>
      <input
        className="w-full p-4 text-black my-8"
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <div className="flex justify-end">
        <button className="bg-blueish-500 p-4 rounded-xl" onClick={sendMessage}>
          Send
        </button>
      </div>
    </>
  );
};

export default Sender;

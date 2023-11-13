import React from "react";

interface MessageProps {
  message: { text: string; sender: string; time: Date };
}

const Message: React.FC<MessageProps> = ({ message: { sender, text } }) => {
  return (
    <div>
      <p>{`${sender}: ${text}`}</p>
    </div>
  );
};

export default Message;

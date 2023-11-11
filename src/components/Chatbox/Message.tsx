import React from "react";

interface MessageProps {
  message: { text: string; sender: string; time: Date };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div>
      <p>{`${message.sender}: ${message.text}`}</p>
    </div>
  );
};

export default Message;

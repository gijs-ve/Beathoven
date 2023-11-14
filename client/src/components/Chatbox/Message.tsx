import { getHours, getMinutes, getSeconds } from "date-fns";
import React from "react";

interface MessageProps {
  message: { text: string; sender: string; time: number };
}

const Message: React.FC<MessageProps> = ({
  message: { sender, text, time },
}) => {
  const hours = getHours(time);
  const minutes = getMinutes(time);
  const seconds = getSeconds(time);
  return (
    <div>
      <p>{` ${hours}:${minutes}:${seconds} ${sender}: ${text}`}</p>
    </div>
  );
};

export default Message;

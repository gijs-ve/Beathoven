import React from "react";

export interface MessageProps {
  message: { text: string; sender: string; time: string };
  ref?: React.Ref<HTMLDivElement>;
}

const Message: React.FC<MessageProps> = ({
  message: { sender, text, time },
  ref,
}) => {
  return (
    <div ref={ref} className="flex flex-col bg-blueish-800 p-4 m-4 rounded-xl">
      <p className="p-2">{`${time} ${sender}`}</p>
      <p>{text}</p>
    </div>
  );
};

export default Message;

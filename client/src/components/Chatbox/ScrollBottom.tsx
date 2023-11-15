import { useEffect, useRef } from "react";
import Message, { MessageProps } from "./Message";

export const ScrollBottom = (props: MessageProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  console.log(elementRef);
  useEffect(() => elementRef?.current?.scrollIntoView(), [elementRef]);
  return <Message {...props} ref={elementRef} />;
};

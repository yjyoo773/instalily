import { useEffect, useRef } from "react";

export const useScrollToBottom = (
  dependencies: any[] = [],
): React.RefObject<HTMLDivElement> => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, dependencies); // Re-run scroll effect when the dependencies change

  return messagesEndRef;
};

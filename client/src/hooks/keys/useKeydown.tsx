import { useEffect } from "react";

export const useKeydown = () => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      console.log({ e });
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return null;
};

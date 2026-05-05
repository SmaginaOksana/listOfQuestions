import { useState, useCallback } from "react";

function useToggle() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, handleToggle };
}

export default useToggle;

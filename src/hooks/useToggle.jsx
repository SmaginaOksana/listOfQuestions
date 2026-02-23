import { useState } from "react";

function useToggle() {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return [isOpen, handleToggle];
}

export default useToggle;

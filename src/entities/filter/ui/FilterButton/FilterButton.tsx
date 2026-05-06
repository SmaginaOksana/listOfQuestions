import { memo } from "react";
import { type IButtonProps } from "@entities/filter/modal/types";

import "@entities/filter/ui/FilterButton/FilterButton.scss";

const FilterButton = memo(function FilterButton({
  children,
  isActive,
  onClick,
  ...props
}: IButtonProps) {
  const className = isActive ? "button active" : "button";

  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
});

export default FilterButton;

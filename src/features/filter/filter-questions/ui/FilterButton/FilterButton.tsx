import { type IButtonProps } from "@entities/filter/modal/types";

import "@features/filter/filter-questions/ui/FilterButton/FilterButton.scss";

const FilterButton = function FilterButton({
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
};

export default FilterButton;

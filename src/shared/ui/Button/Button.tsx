import { type IButtonProps } from "@shared/modal/types";

import "@features/filter/filter-questions/ui/FilterButton/FilterButton.scss";

export default function Button({
  children,
  className,
  isActive,
  ...props
}: IButtonProps) {
  const classNameBtn = isActive ? `${className} active` : `${className}`;

  return (
    <button className={classNameBtn} {...props}>
      {children}
    </button>
  );
}

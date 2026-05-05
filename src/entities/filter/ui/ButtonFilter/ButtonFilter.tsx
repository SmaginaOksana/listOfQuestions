import { type IButtonProps } from "@entities/filter/modal/types";

import "@entities/filter/ui/ButtonFilter/ButtonFilter.scss";

export default function Button({
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
}

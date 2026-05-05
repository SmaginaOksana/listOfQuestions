import { type ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

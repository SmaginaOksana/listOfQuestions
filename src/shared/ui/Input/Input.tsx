import { type IInputProps } from "@shared/modal/types";

import "@shared/ui/Input/Input.scss";

export default function Input(props: IInputProps) {
  return <input {...props} />;
}

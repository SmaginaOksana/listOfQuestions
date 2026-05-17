import Button from "@shared/ui/Button/Button";
import { type IButtonProps } from "@shared/modal/types";

import "@features/filter/filter-questions/ui/FilterButton/FilterButton.scss";

export default function FilterButton(props: IButtonProps) {
  return <Button className="filterButton" {...props} />;
}

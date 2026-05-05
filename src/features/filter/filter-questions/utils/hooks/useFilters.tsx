import { useState, useCallback, useMemo } from "react";

import { useAppDispatch } from "@app/store/hooks";
import { useAppSelector } from "@app/store/hooks";
import { FilterName } from "@features/filter/filter-questions/model/types";
import { updateFilter } from "@features/filter/filter-questions/model/filtersSlice";
import Button from "@entities/filter/ui/ButtonFilter/ButtonFilter";

type ButtonType = string | { title: string; id: number };
type ButtonsType = ButtonType[];

const isObjectButton = (
  btn: ButtonType
): btn is { title: string; id: number } =>
  typeof btn === "object" && btn !== null && "id" in btn && "title" in btn;

function useFiltersVisibility(name: FilterName, buttons: ButtonsType = []) {
  const [showAllButtons, setShowAllButtons] = useState<boolean>(false);

  if (!buttons) return;
  const visibleButtons = !showAllButtons ? buttons.slice(0, 5) : buttons;

  const dispatch = useAppDispatch();

  const { [name]: selectedFilters } = useAppSelector((state) => state.filters);

  const handleChangeFilter = useCallback(
    (value: string, id?: number) => {
      dispatch(updateFilter({ name, value, id }));
    },
    [name]
  );

  const content = useMemo(() => {
    return visibleButtons.map((button: ButtonType) => {
      let value: string;
      let id: number | undefined;

      if (isObjectButton(button)) {
        value = button.title;
        id = button.id;
      } else {
        value = button;
        id = undefined;
      }

      const buttonLabel =
        name === FilterName.Complexity
          ? `${value.slice(0, 1)}-${value.slice(value.length - 2).trim()}`
          : value;

      const isActive =
        typeof selectedFilters === "number"
          ? selectedFilters === id
          : typeof selectedFilters === "string"
          ? selectedFilters === value
          : name === FilterName.Skills
          ? selectedFilters?.includes(id)
          : selectedFilters?.includes(value);

      return (
        <Button
          key={value}
          onClick={() => handleChangeFilter(value, id)}
          isActive={isActive}
        >
          {buttonLabel}
        </Button>
      );
    });
  }, [visibleButtons, name, selectedFilters, handleChangeFilter]);

  return {
    showAllButtons,
    setShowAllButtons,
    content,
  };
}

export default useFiltersVisibility;

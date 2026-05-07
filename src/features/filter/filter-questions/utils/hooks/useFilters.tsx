import { useState, useCallback, useMemo } from "react";

import { useAppDispatch } from "@app/providers/store/hooks";
import { useAppSelector } from "@app/providers/store/hooks";
import {
  FilterName,
  type ButtonsType,
  type ButtonType,
  isObjectButton,
} from "@features/filter/filter-questions/model/types";
import FilterButton from "@entities/filter/ui/FilterButton/FilterButton";
import { updateFilter } from "@features/filter/filter-questions/model/filtersSlice";

function useFilters(name: FilterName, buttons: ButtonsType = []) {
  const [showAllButtons, setShowAllButtons] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const selectedFilters = useAppSelector((state) => state.filters[name]);

  const visibleButtons = !showAllButtons ? buttons.slice(0, 5) : buttons;

  const handleChangeFilter = useCallback(
    (value: string) => {
      dispatch(updateFilter({ name, value }));
    },
    [dispatch, name]
  );

  const isActiveFilter = useCallback(
    (value: string) => {
      return Array.isArray(selectedFilters)
        ? selectedFilters.includes(value)
        : selectedFilters === value;
    },
    [selectedFilters]
  );

  const content = useMemo(() => {
    return visibleButtons.map((button: ButtonType) => {
      let value: string;
      let id: string | undefined;

      if (isObjectButton(button)) {
        value = button.title;
        id = String(button.id);
      } else {
        value = button;
        id = undefined;
      }

      const buttonLabel =
        name === FilterName.Complexity
          ? `${value.slice(0, 1)}-${value.slice(value.length - 2).trim()}`
          : value;

      return (
        <FilterButton
          key={value}
          onClick={() => {
            name === FilterName.SpecializationId || name === FilterName.Skills
              ? handleChangeFilter(id)
              : handleChangeFilter(value);
          }}
          isActive={
            name === FilterName.SpecializationId || name === FilterName.Skills
              ? isActiveFilter(id)
              : isActiveFilter(value)
          }
        >
          {buttonLabel}
        </FilterButton>
      );
    });
  }, [visibleButtons, name, selectedFilters, handleChangeFilter]);

  return {
    showAllButtons,
    setShowAllButtons,
    content,
  };
}

export default useFilters;

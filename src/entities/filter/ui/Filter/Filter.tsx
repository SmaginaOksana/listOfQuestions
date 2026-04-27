import { useState, useContext } from "react";

import { FilterButton } from "@features/filter/index";
import { ContextFilters } from "../../../../shared/context/ContextFilters";

import "./Filter.scss";

function Filter({ buttons, filterName }) {
  const [showAll, setShowAll] = useState(false);

  const { filters, handleChangeFilter } = useContext(ContextFilters);

  const visibleButtons =
    !showAll && (filterName === "specializationId" || filterName === "skills")
      ? buttons.slice(0, 5)
      : buttons;

  return (
    <>
      {visibleButtons.length > 0 &&
        visibleButtons.map((button) => {
          const label = typeof button === "object" ? button.label : button;
          const value = typeof button === "object" ? button.value : button;

          const isActive = Array.isArray(filters[filterName])
            ? filters[filterName].includes(value)
            : filters[filterName] === value;

          return (
            <FilterButton
              key={value}
              onClick={() => handleChangeFilter(filterName, value)}
              isActive={isActive}
            >
              {label}
            </FilterButton>
          );
        })}
      {(filterName === "specializationId" || filterName === "skills") && (
        <button
          className="showAllButtons"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Скрыть" : "Показать ещё"}
        </button>
      )}
    </>
  );
}

export default Filter;

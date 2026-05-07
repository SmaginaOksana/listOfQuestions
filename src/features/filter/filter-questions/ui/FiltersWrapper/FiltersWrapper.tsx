import { type Dispatch, type SetStateAction, memo } from "react";

import "@features/filter/filter-questions/ui/FiltersWrapper/FiltersWrapper.scss";

interface IFiltersWrapperProps {
  filterName: string;
  children: React.ReactNode;
  showAllButtons?: boolean;
  setShowAllButtons?: Dispatch<SetStateAction<boolean>>;
}

const FiltersWrapper = memo(function FiltersWrapper({
  filterName,
  children,
  showAllButtons,
  setShowAllButtons,
}: IFiltersWrapperProps) {
  return (
    <div>
      <h3>{filterName}</h3>
      <div className="filters">
        {children}
        {showAllButtons !== undefined && (
          <button
            className="showAllButtons"
            onClick={() => setShowAllButtons((prev) => !prev)}
          >
            {showAllButtons ? "Скрыть" : "Показать ещё"}
          </button>
        )}
      </div>
    </div>
  );
});

export default FiltersWrapper;

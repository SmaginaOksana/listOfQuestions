import { type Dispatch, type SetStateAction } from "react";

import "@shared/ui/FiltersWrapper/FiltersWrapper.scss";

interface IFiltersWrapperProps {
  filterName: string;
  children: React.ReactNode;
  showAllButtons?: boolean;
  setShowAllButtons?: Dispatch<SetStateAction<boolean>>;
}

function FiltersWrapper({
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
}

export default FiltersWrapper;

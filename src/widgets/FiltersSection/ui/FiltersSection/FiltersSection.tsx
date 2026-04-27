import { useContext, useState } from "react";

import { SearchInput } from "@features/search/index";
import { Filter } from "@entities/filter/index";
import { ContextFilters } from "../../../../shared/context/ContextFilters";

import "./FiltersSection.scss";

function FiltersSection() {
  const [searchValue, setSearchValue] = useState("");
  const { content, handleChangeFilter } = useContext(ContextFilters);

  const handleChangeInput = (e) => {
    setSearchValue(e.target.value.trim());
  };

  const handleSearch = () => {
    handleChangeFilter("title", searchValue);
    setSearchValue("");
  };

  return (
    <aside>
      <SearchInput
        value={searchValue}
        onChange={handleChangeInput}
        onClick={handleSearch}
      />
      {content.map((item) => {
        const { filterName, title, buttons, id } = item;

        return (
          <div key={id}>
            <h3>{title}</h3>
            <div className="filters">
              <Filter buttons={buttons} filterName={filterName} />
            </div>
          </div>
        );
      })}
    </aside>
  );
}

export default FiltersSection;

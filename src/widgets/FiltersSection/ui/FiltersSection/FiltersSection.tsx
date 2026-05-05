import { useState } from "react";

import {
  SearchInput,
  FilterSpecialization,
  FilterStatus,
  FilterRate,
  FilterComplexity,
  FilterSkill,
} from "@features/filter/filter-questions/index";
import { useAppDispatch } from "@app/store/hooks";
import { updateFilter } from "@features/filter/filter-questions/model/filtersSlice";
import { FilterName } from "@features/filter/filter-questions/model/types";

import "@widgets/FiltersSection/ui/FiltersSection/FiltersSection.scss";

function FiltersSection() {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useAppDispatch();

  const handleChangeInput = (e) => {
    setSearchValue(e.target.value.trim());
  };

  const handleSearch = () => {
    dispatch(
      updateFilter({
        name: FilterName.Search,
        value: searchValue,
      })
    );
    setSearchValue("");
  };

  return (
    <aside>
      <SearchInput
        value={searchValue}
        onChange={handleChangeInput}
        onClick={handleSearch}
      />
      <FilterSpecialization />
      <FilterSkill />
      <FilterComplexity />
      <FilterRate />
      <FilterStatus />
    </aside>
  );
}

export default FiltersSection;

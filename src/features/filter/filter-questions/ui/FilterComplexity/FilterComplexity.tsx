import FiltersWrapper from "@features/filter/filter-questions/ui/FiltersWrapper/FiltersWrapper";
import { FilterName } from "@features/filter/filter-questions/model/types";
import useFilters from "@features/filter/filter-questions/utils/hooks/useFilters";

const complexityButtons = ["1 2 3", "4 5 6", "7 8", "9 10"];

function FilterComplexity() {
  const { content } = useFilters(FilterName.Complexity, complexityButtons);

  return (
    <FiltersWrapper filterName="Уровень сложности">{content}</FiltersWrapper>
  );
}

export default FilterComplexity;

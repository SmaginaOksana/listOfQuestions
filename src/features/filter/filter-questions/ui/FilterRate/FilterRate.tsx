import FiltersWrapper from "@features/filter/filter-questions/ui/FiltersWrapper/FiltersWrapper";
import { FilterName } from "@features/filter/filter-questions/model/types";
import useFilters from "@features/filter/filter-questions/utils/hooks/useFilters";

const rateButtons = ["1", "2", "3", "4", "5"];

function FilterRate() {
  const { content } = useFilters(FilterName.Rate, rateButtons);

  return <FiltersWrapper filterName="Рейтинг">{content}</FiltersWrapper>;
}

export default FilterRate;

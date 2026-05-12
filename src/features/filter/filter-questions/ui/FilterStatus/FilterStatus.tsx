import FiltersWrapper from "@shared/ui/FiltersWrapper/FiltersWrapper";
import { FilterName } from "@features/filter/filter-questions/model/types";
import useFilters from "@features/filter/filter-questions/utils/hooks/useFilters";

const statusButtons = ["Изученные", "Неизученные", "Все"];

function FilterStatus() {
  const { content } = useFilters(FilterName.Status, statusButtons);

  return <FiltersWrapper filterName="Статус">{content}</FiltersWrapper>;
}

export default FilterStatus;

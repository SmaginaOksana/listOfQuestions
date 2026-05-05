import { useMemo } from "react";

import { useGetSpecializationsQuery } from "../../api/specializationsApi";
import FiltersWrapper from "@features/filter/filter-questions/ui/FiltersWrapper/FiltersWrapper";
import { FilterName } from "@features/filter/filter-questions/model/types";
import useFilters from "@features/filter/filter-questions/utils/hooks/useFilters";

function FilterSpecialization() {
  const paramsSpecializations = useMemo(
    () => ({
      limit: 26,
    }),
    []
  );

  const { data: specializations } = useGetSpecializationsQuery(
    paramsSpecializations
  );

  const { showAllButtons, setShowAllButtons, content } = useFilters(
    FilterName.SpecializationId,
    specializations?.data
  );

  return (
    <FiltersWrapper
      filterName="Специализация"
      showAllButtons={showAllButtons}
      setShowAllButtons={setShowAllButtons}
    >
      {content}
    </FiltersWrapper>
  );
}

export default FilterSpecialization;

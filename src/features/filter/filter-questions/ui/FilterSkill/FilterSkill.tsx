import { useMemo } from "react";

import { useGetSkillsQuery } from "@features/filter/filter-questions/api/skillsApi";
import FiltersWrapper from "@features/filter/filter-questions/ui/FiltersWrapper/FiltersWrapper";
import { FilterName } from "@features/filter/filter-questions/model/types";
import useFilters from "@features/filter/filter-questions/utils/hooks/useFilters";
import { useAppSelector } from "@app/store/hooks";

function FilterSkill() {
  const id = useAppSelector(
    (state) => state.filters[FilterName.SpecializationId]
  );

  const paramsSkills = useMemo(
    () => (id && { specializations: id }) || undefined,
    [id]
  );

  const { data: skills } = useGetSkillsQuery(paramsSkills);

  const { showAllButtons, setShowAllButtons, content } = useFilters(
    FilterName.Skills,
    skills?.data
  );

  return (
    <FiltersWrapper
      filterName="Навыки"
      showAllButtons={showAllButtons}
      setShowAllButtons={setShowAllButtons}
    >
      {content}
    </FiltersWrapper>
  );
}

export default FilterSkill;

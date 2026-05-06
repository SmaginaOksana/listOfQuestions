import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { useGetSkillsQuery } from "@features/filter/filter-questions/api/skillsApi";
import FiltersWrapper from "@features/filter/filter-questions/ui/FiltersWrapper/FiltersWrapper";
import { FilterName } from "@features/filter/filter-questions/model/types";
import useFilters from "@features/filter/filter-questions/utils/hooks/useFilters.tsx";
import { useAppSelector } from "@app/providers/store/hooks";

function FilterSkill() {
  const [params] = useSearchParams();

  const id = useAppSelector(
    (state) => state.filters[FilterName.SpecializationId]
  );

  const paramsSkills = useMemo(
    () => ({ specializations: +params.get(FilterName.SpecializationId) }),
    [id, params]
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

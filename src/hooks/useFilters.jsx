import { useState, useCallback } from "react";

function useFilters() {
  const [filters, setFilters] = useState({
    specializationId: null,
    skills: [],
    complexity: [],
    rate: [],
    status: null,
    title: null,
  });

  const handleChangeFilter = useCallback((filterName, value) => {
    setFilters((prev) => {
      if (!(filterName in prev)) return prev;

      let currentValue = prev[filterName];

      let newValue = Array.isArray(currentValue)
        ? currentValue.includes(value)
          ? currentValue.filter((item) => item !== value)
          : [...currentValue, value]
        : currentValue === value
        ? null
        : value;

      return {
        ...prev,
        [filterName]: newValue,
      };
    });
  }, []);

  return {
    filters,
    setFilters,
    handleChangeFilter,
  };
}

export default useFilters;

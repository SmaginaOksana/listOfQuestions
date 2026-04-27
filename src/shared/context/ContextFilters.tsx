import { createContext, useState, useMemo } from "react";

import useAxios from "@shared/utils/hooks/useAxios";
import useFilters from "@shared/utils/hooks/useFilters";

export const ContextFilters = createContext();

const baseUrl = "https://api.yeatwork.ru/";
const urlQuestions = `${baseUrl}questions/public-questions`;
const urlSpecializations = `${baseUrl}specializations`;
const urlSkills = `${baseUrl}skills`;

export default function ContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);

  const { filters, setFilters, handleChangeFilter } = useFilters();

  const paramsQuestions = useMemo(
    () => ({
      ...filters,
      complexity: filters.complexity
        .flatMap((item) => item.split(" "))
        .map((item) => +item),
      page: currentPage,
      limit: 10,
    }),
    [filters, currentPage]
  );
  const paramsSpecializations = useMemo(
    () => ({
      limit: 26,
    }),
    []
  );

  const paramsSkills = useMemo(() => {
    setFilters((prev) => ({ ...prev, skills: [] }));
    return {
      specializations: filters.specializationId,
    };
  }, [filters.specializationId]);

  const [questions, loading, error] = useAxios(urlQuestions, paramsQuestions);
  const [specializations] = useAxios(urlSpecializations, paramsSpecializations);
  const [skills] = useAxios(urlSkills, paramsSkills);

  const content = useMemo(() => {
    return [
      {
        filterName: "specializationId",
        title: "Специализация",
        buttons:
          specializations?.data.map((el) => ({
            label: el.title,
            value: el.id,
          })) || [],
        id: 1,
      },
      {
        filterName: "skills",
        title: "Навыки",
        buttons:
          skills?.data.map((el) => ({
            label: el.title,
            value: el.id,
          })) || [],
        id: 2,
      },
      {
        filterName: "complexity",
        title: "Уровень сложности",
        buttons: [
          { label: "1-3", value: "1 2 3" },
          { label: "4-6", value: "4 5 6" },
          { label: "7-8", value: "7 8" },
          { label: "9-10", value: "9 10" },
        ],
        id: 3,
      },
      {
        filterName: "rate",
        title: "Рейтинг",
        buttons: [1, 2, 3, 4, 5],
        id: 4,
      },
      {
        filterName: "status",
        title: "Статус",
        buttons: ["Изученные", "Неизученные", "Все"],
        id: 5,
      },
    ];
  }, [specializations, skills]);

  const selectedSpecialization = specializations?.data.find(
    (el) => el.id === filters.specializationId
  );

  const value = {
    filters,
    handleChangeFilter,
    content,
    selectedSpecialization,
    questions,
    loading,
    error,
    currentPage,
    setCurrentPage,
  };

  return (
    <ContextFilters.Provider value={value}>{children}</ContextFilters.Provider>
  );
}
